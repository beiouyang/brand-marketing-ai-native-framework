import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const KB_DIR = path.join(root, 'public', 'design-kb', 'knowledge')

/** @type {{ id: string, source: string, title: string, content: string }[]} */
let chunks = []

function walkMd(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name)
    if (statSync(full).isDirectory()) walkMd(full, files)
    else if (name.endsWith('.md')) files.push(full)
  }
  return files
}

function splitMarkdown(filePath, text) {
  const rel = path.relative(KB_DIR, filePath).replace(/\\/g, '/')
  const parts = text.split(/(?=^#{1,3}\s)/m).filter(p => p.trim())
  if (parts.length <= 1) {
    return [{ source: rel, title: rel.replace(/\.md$/, ''), content: text.trim().slice(0, 1200) }]
  }
  return parts.map(part => {
    const lines = part.trim().split('\n')
    const title = lines[0].replace(/^#+\s*/, '').trim() || rel
    const content = part.trim().slice(0, 1200)
    return { source: rel, title, content }
  }).filter(c => c.content.length > 40)
}

export function loadKnowledge() {
  chunks = []
  if (!statSync(KB_DIR, { throwIfNoEntry: false })?.isDirectory()) {
    console.warn('[knowledge] 目录不存在:', KB_DIR)
    return 0
  }
  for (const file of walkMd(KB_DIR)) {
    if (file.endsWith('INDEX.md') || file.endsWith('TODO.md') || file.endsWith('CHANGELOG.md')) continue
    const text = readFileSync(file, 'utf8')
    splitMarkdown(file, text).forEach((c, i) => {
      chunks.push({ id: `${c.source}#${i}`, ...c })
    })
  }
  return chunks.length
}

function tokenize(text) {
  const lower = text.toLowerCase()
  const words = lower.match(/[\u4e00-\u9fff]{2,}|[a-z0-9]+/g) || []
  const set = new Set(words)
  // 中文双字切分，提升「头图」「国补」等检索
  for (const w of [...set]) {
    if (/^[\u4e00-\u9fff]+$/.test(w) && w.length > 2) {
      for (let i = 0; i < w.length - 1; i++) set.add(w.slice(i, i + 2))
    }
  }
  return set
}

export function searchKnowledge(query, limit = 4) {
  if (!chunks.length) return []
  const qTokens = tokenize(query)
  if (!qTokens.size) return chunks.slice(0, limit).map(c => ({ ...c, score: 0 }))

  const scored = chunks.map(chunk => {
    const hay = `${chunk.title} ${chunk.content}`.toLowerCase()
    let score = 0
    for (const t of qTokens) {
      if (hay.includes(t)) score += t.length >= 2 ? 2 : 1
    }
    return { ...chunk, score }
  })

  return scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export function getKnowledgeStats() {
  return { chunks: chunks.length, dir: KB_DIR }
}
