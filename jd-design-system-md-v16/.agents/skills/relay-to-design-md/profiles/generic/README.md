---
name: profile-generic
description: 工具中立 profile,作为外部团队 fork 起点(无 JD 特定 token / 部门词表)
metadata:
  team: generic
  status: template
  last_synced: "2026-05-27"
---

# Profile: Generic

工具中立的最小 profile 模板。**别直接用** —— 这只是给外部团队 fork 自己的 profile 用的起点。

## 怎么用

```bash
# 1. fork 一份给你的团队
cp -r .agents/skills/relay-to-design-md/profiles/generic \
      .agents/skills/relay-to-design-md/profiles/<my-team>

# 2. 编辑 4 个文件(填你团队的实际值)
$EDITOR profiles/<my-team>/frontmatter-spec.md
$EDITOR profiles/<my-team>/controlled-vocab.json
$EDITOR profiles/<my-team>/path-rules.md
$EDITOR profiles/<my-team>/token-catalog.json  # 可选

# 3. 跑 skill 时指定 profile
SKILL_PROFILE=<my-team> /relay-to-design-md <relay_url>
```

详见 [CONTRIBUTING.md](../../CONTRIBUTING.md) Part 1。

## 文件清单

| 文件 | 你要做的 |
|---|---|
| `frontmatter-spec.md` | 删/改/加你团队的 frontmatter 字段 |
| `controlled-vocab.json` | 填 level / bg / status 受控值 |
| `path-rules.md` | 描述你团队的 wiki 路径规则 |
| `token-catalog.json` | 可选 — 想做 token 反查就填,否则 skip(skill 会跳过 token 反查 step)|

## 这个 profile 假设了什么

最小假设(可以被你 fork 后覆盖):

1. frontmatter 必填 `level` / `bg` / `slug` / `name_zh` / `status` / `owner` / `last_synced`
2. 路径规则 `<repo>/<bg>/<level>/<slug>/`(扁平,无部门 / 业务层级)
3. 不做 token 反查(token-catalog.json 是空 stub)
4. bundle 默认 single,不走 page-doc(可在 path-rules.md 里改)

如果你团队跟 JD V16 类似(13 部门 / 8 BG / token 体系),建议 fork `jd-v16` 而非 `generic`,改动量更小。
