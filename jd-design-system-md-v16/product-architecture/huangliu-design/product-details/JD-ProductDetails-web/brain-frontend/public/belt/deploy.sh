#!/usr/bin/env bash
# 一键部署脚本 —— 把本地网站同步到生产服务器
# 用法:
#   ./deploy.sh           # 正常部署(增量同步)
#   ./deploy.sh --dry     # 只看会变更哪些文件,不实际同步
#   ./deploy.sh --reload  # 同步后顺便 reload nginx(改了配置时用)

set -euo pipefail

# ===== 配置(改服务器/路径只动这里) =====
SSH_HOST="root@111.228.7.174"
REMOTE_DIR="/var/www/belt-demo"
SITE_URL="http://111.228.7.174/"
# ========================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 颜色输出
C_GREEN="\033[32m"; C_YELLOW="\033[33m"; C_RED="\033[31m"; C_RESET="\033[0m"
info()  { printf "${C_GREEN}[+]${C_RESET} %s\n" "$*"; }
warn()  { printf "${C_YELLOW}[!]${C_RESET} %s\n" "$*"; }
err()   { printf "${C_RED}[x]${C_RESET} %s\n" "$*" >&2; }

DRY_RUN=""
RELOAD_NGINX=""
for arg in "$@"; do
  case "$arg" in
    --dry|--dry-run) DRY_RUN="--dry-run" ;;
    --reload)        RELOAD_NGINX="1" ;;
    -h|--help)
      sed -n '2,8p' "$0"; exit 0 ;;
    *) err "未知参数: $arg"; exit 1 ;;
  esac
done

info "测试 SSH 连接 ${SSH_HOST} ..."
if ! ssh -o BatchMode=yes -o ConnectTimeout=8 "$SSH_HOST" "echo ok" >/dev/null 2>&1; then
  err "无法 SSH 免密登录 ${SSH_HOST}"
  err "请先执行: ssh-copy-id ${SSH_HOST}"
  exit 1
fi

info "确保远端目录存在: ${REMOTE_DIR}"
ssh "$SSH_HOST" "mkdir -p ${REMOTE_DIR}"

if [[ -n "$DRY_RUN" ]]; then
  warn "DRY RUN —— 只展示变更,不实际同步"
fi

info "同步文件中..."
rsync -avz --delete $DRY_RUN \
  --exclude='.git/' \
  --exclude='.gitignore' \
  --exclude='.DS_Store' \
  --exclude='.idea/' \
  --exclude='.vscode/' \
  --exclude='node_modules/' \
  --exclude='*.log' \
  --exclude='deploy.sh' \
  --exclude='DEPLOY.md' \
  ./ "${SSH_HOST}:${REMOTE_DIR}/"

if [[ -n "$RELOAD_NGINX" && -z "$DRY_RUN" ]]; then
  info "Reload nginx ..."
  ssh "$SSH_HOST" "nginx -t && systemctl reload nginx"
fi

if [[ -z "$DRY_RUN" ]]; then
  info "线上回归(HTTP HEAD)..."
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 8 "$SITE_URL" || echo "000")
  if [[ "$HTTP_CODE" == "200" ]]; then
    info "部署成功 ✓  访问: ${SITE_URL}"
  else
    err "线上返回 HTTP ${HTTP_CODE},请上服务器查看日志: ssh ${SSH_HOST} 'tail -50 /var/log/nginx/error.log'"
    exit 2
  fi
fi
