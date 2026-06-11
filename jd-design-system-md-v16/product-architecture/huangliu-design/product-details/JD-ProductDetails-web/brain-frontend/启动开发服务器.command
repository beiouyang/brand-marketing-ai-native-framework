#!/bin/bash
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  osascript -e 'display alert "未找到 Node.js" message "请先安装 Node.js：https://nodejs.org" as critical'
  exit 1
fi

if [ ! -d "node_modules/vite" ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "正在安装依赖…"
    npm install
  else
    osascript -e 'display alert "缺少依赖" message "请先在本目录终端执行 npm install" as critical'
    exit 1
  fi
fi

node scripts/dev.mjs
