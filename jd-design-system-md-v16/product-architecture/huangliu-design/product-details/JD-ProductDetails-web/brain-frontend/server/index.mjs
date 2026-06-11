import http from 'node:http'
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadKnowledge, searchKnowledge, getKnowledgeStats } from './knowledge.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
loadEnv(path.join(root, '.env'))

const PORT = Number(process.env.API_PORT || 8787)
const API_KEY = process.env.DEEPSEEK_API_KEY || ''
const MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat'
const KB_COUNT = loadKnowledge()

function loadEnv(file) {
  if (!existsSync(file)) return
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    const k = t.slice(0, i).trim()
    let v = t.slice(i + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
    if (!process.env[k]) process.env[k] = v
  }
}

function json(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(JSON.stringify(data))
}

function sseInit(res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  })
}

function sse(res, event, data) {
  res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
}

function buildPrompt(message, hits) {
  const ctx = hits.length
    ? hits.map((h, i) => `### 片段 ${i + 1}（${h.source} · ${h.title}）\n${h.content}`).join('\n\n')
    : '（未检索到高度相关的知识片段，请基于通用商详设计经验回答，并说明知识库中暂无直接匹配内容。）'

  return `你是「商详大脑」，京东商品详情页设计 AI 助手。请基于以下知识库片段回答用户问题。

要求：
1. 优先使用知识库内容，不要编造不存在的规范或数据
2. 若知识库信息不足，明确说明并给出合理建议
3. 回答简洁专业，使用 Markdown
4. 可引用模块名、场景名

## 知识库片段
${ctx}`
}

async function streamDeepSeek(res, message, history = []) {
  if (!API_KEY) {
    sse(res, 'error', { message: '未配置 DEEPSEEK_API_KEY，请在项目根目录 .env 中填写' })
    sse(res, 'done', {})
    res.end()
    return
  }

  const hits = searchKnowledge(message)
  sse(res, 'sources', hits.map(h => ({ title: h.title, source: h.source })))

  const messages = [
    { role: 'system', content: buildPrompt(message, hits) },
    ...history.slice(-6).map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.text || m.content || '' })),
    { role: 'user', content: message },
  ]

  const upstream = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ model: MODEL, messages, stream: true, temperature: 0.3 }),
  })

  if (!upstream.ok) {
    const errText = await upstream.text()
    sse(res, 'error', { message: `DeepSeek 请求失败 (${upstream.status}): ${errText.slice(0, 200)}` })
    sse(res, 'done', {})
    res.end()
    return
  }

  const reader = upstream.body.getReader()
  const decoder = new TextDecoder()
  let buf = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += decoder.decode(value, { stream: true })
    const lines = buf.split('\n')
    buf = lines.pop() || ''
    for (const line of lines) {
      const t = line.trim()
      if (!t.startsWith('data:')) continue
      const payload = t.slice(5).trim()
      if (payload === '[DONE]') continue
      try {
        const j = JSON.parse(payload)
        const delta = j.choices?.[0]?.delta?.content
        if (delta) sse(res, 'delta', { text: delta })
      } catch { /* ignore partial json */ }
    }
  }

  sse(res, 'done', {})
  res.end()
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', c => { data += c; if (data.length > 1e6) reject(new Error('body too large')) })
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}) }
      catch { reject(new Error('invalid json')) }
    })
    req.on('error', reject)
  })
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
    return res.end()
  }

  const url = new URL(req.url, `http://127.0.0.1:${PORT}`)

  if (req.method === 'GET' && url.pathname === '/api/health') {
    const stats = getKnowledgeStats()
    return json(res, 200, {
      ok: true,
      hasKey: Boolean(API_KEY),
      model: MODEL,
      knowledgeChunks: stats.chunks,
    })
  }

  if (req.method === 'POST' && url.pathname === '/api/chat') {
    try {
      const body = await readBody(req)
      const message = String(body.message || '').trim()
      if (!message) return json(res, 400, { error: 'message required' })
      sseInit(res)
      await streamDeepSeek(res, message, body.history || [])
    } catch (e) {
      return json(res, 500, { error: e.message })
    }
    return
  }

  json(res, 404, { error: 'not found' })
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[api] 知识库 ${KB_COUNT} 片段已加载`)
  console.log(`[api] DeepSeek ${API_KEY ? '已配置' : '未配置（请创建 .env）'}`)
  console.log(`[api] http://127.0.0.1:${PORT}/api/health`)
})
