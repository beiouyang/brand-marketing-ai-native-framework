#!/usr/bin/env bash
# find-backlinks.sh — 按需查询某组件 / 页面被哪些 design.md 引用
#
# 替代 v0.5.1 之前 frontmatter `used_by[]` 双向硬写(O(N²) 风险:一个被 100 处引用
# 的基础组件改名,要触发 100 处 used_by[] 更新)。
#
# 用法:
#   bin/find-backlinks.sh <slug>           # 例:bin/find-backlinks.sh tabbar
#   bin/find-backlinks.sh <relative-path>  # 例:bin/find-backlinks.sh foundations/components-base/icon-home
#
# 实现:扫所有 design.md 的 references.uses_components 段,grep slug / 路径片段
# 输出:命中文件相对路径列表;无命中 → "无引用"
#
# 关联:issue #45 / #41 第 1 条;SKILL.md Step 10。

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "用法: $0 <slug 或 相对路径>" >&2
  echo "例:  $0 tabbar" >&2
  echo "     $0 foundations/components-base/icon-home" >&2
  exit 2
fi

QUERY="$1"

# 仓库根 — 脚本位于 .agents/skills/relay-to-design-md/bin/,根是 4 层上
ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"
cd "$ROOT"

# V16 + V15 两个 wiki 目录都扫
SEARCH_DIRS=()
[[ -d jd-design-system-md-v16 ]] && SEARCH_DIRS+=(jd-design-system-md-v16)
[[ -d jd-design-system-md ]]     && SEARCH_DIRS+=(jd-design-system-md)

if [[ ${#SEARCH_DIRS[@]} -eq 0 ]]; then
  echo "未找到 wiki 目录(jd-design-system-md{,-v16})" >&2
  exit 1
fi

# 找所有 design.md
MD_FILES=$(find "${SEARCH_DIRS[@]}" -type f -name "design.md" 2>/dev/null || true)
if [[ -z "$MD_FILES" ]]; then
  echo "无引用"
  exit 0
fi

# 在每个 design.md 里:
# 1. 抓 frontmatter 内 references.uses_components 段(YAML 缩进感知)
# 2. 在该段内 grep QUERY
HITS=""
while IFS= read -r md; do
  # awk:从 ---(开头) 到 ---(再次 ---) 取 frontmatter;在 frontmatter 内进一步取
  # references.uses_components: 缩进段(下一个同级 key 出现时结束)
  if awk '
    BEGIN { in_fm=0; in_uc=0; fm_count=0 }
    /^---[[:space:]]*$/ { fm_count++; if (fm_count==1) in_fm=1; else if (fm_count==2) { in_fm=0; exit } ; next }
    in_fm && /^[[:space:]]*uses_components:/ { in_uc=1; next }
    in_uc && /^[[:space:]]*[a-zA-Z_]+:/ { in_uc=0 }
    in_uc { print }
  ' "$md" | grep -qF "$QUERY"; then
    HITS+="$md"$'\n'
  fi
done <<<"$MD_FILES"

if [[ -z "$HITS" ]]; then
  echo "无引用"
else
  echo "$HITS" | sed '/^$/d'
fi
