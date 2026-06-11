import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const port = Number(process.env.PORT) || 4173

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
}

if (!existsSync(path.join(distDir, 'index.html'))) {
  console.error('\n[商详大脑] dist/ 不存在，请先执行：npm run build\n')
  process.exit(1)
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath)
  res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' })
  res.end(readFileSync(filePath))
}

createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
  let filePath = path.join(distDir, urlPath === '/' ? 'index.html' : urlPath)

  if (!filePath.startsWith(distDir)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  try {
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      sendFile(res, filePath)
      return
    }
    if (!path.extname(filePath) && existsSync(path.join(filePath, 'index.html'))) {
      sendFile(res, path.join(filePath, 'index.html'))
      return
    }
  } catch {
    // fall through
  }

  res.writeHead(404)
  res.end('Not Found')
}).listen(port, '127.0.0.1', () => {
  const url = `http://127.0.0.1:${port}/`
  console.log(`\n[商详大脑] 预览服务已启动：${url}\n`)
})
