import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')
const serverEntry = path.join(root, 'server', 'index.mjs')

if (!existsSync(viteBin)) {
  console.error('\n[商详大脑] 未找到依赖，请先在项目目录执行：')
  console.error('  npm install\n')
  process.exit(1)
}

const children = []

function start(label, args, extraEnv = {}) {
  const child = spawn(process.execPath, args, {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, ...extraEnv },
  })
  child.on('exit', (code) => {
    if (code && code !== 0) cleanup(code)
  })
  children.push(child)
  return child
}

function cleanup(code = 0) {
  for (const c of children) c.kill('SIGTERM')
  process.exit(code)
}

process.on('SIGINT', () => cleanup(0))
process.on('SIGTERM', () => cleanup(0))

console.log('\n[商详大脑] 启动 AI 知识库 API + 前端开发服务器…')
console.log('[商详大脑] 前端：http://127.0.0.1:5173/')
console.log('[商详大脑] API ：http://127.0.0.1:8787/api/health')
console.log('[商详大脑] 请在项目根目录配置 .env（参考 .env.example）\n')

start('api', [serverEntry])
start('vite', [viteBin, '--host', '127.0.0.1', '--port', '5173', '--open'])
