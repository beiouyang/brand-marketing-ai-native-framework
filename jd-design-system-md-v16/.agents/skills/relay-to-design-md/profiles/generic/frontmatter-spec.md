---
name: generic-frontmatter-spec
description: 工具中立的最小 frontmatter schema,作为 fork 起点
---

# Generic Frontmatter Spec

> 这是最小可用 schema。fork 后按需扩展。

## design.md 必填字段

```yaml
---
file: design                    # 固定值 "design",标识文件类型
level: component-base           # 受控,见 controlled-vocab.json
bg: <your-bg>                   # 受控,见 controlled-vocab.json
slug: "<kebab-case-slug>"       # kebab-case,跨 level 也唯一
name_zh: "中文名"
name_en: "English Name"         # 可选

owner: "@<your-handle>"
contributors: []
status: draft                   # 受控:draft / review / published / deprecated
version: "0.1"
last_synced: "YYYY-MM-DD"

auto_detected:
  level: <推断值或 fallback>
  bg: <推断值或 fallback>
  slug: <推断值>

relay_source:
  file_id: "<relay file id>"
  page_id: "<page id>"
  node_id: "<root node id>"
  node_name: "<node name>"
  url: "<full Relay URL>"

references:
  uses_components: []
  uses_tokens: {}               # 可选,空则不做反查
  used_by: []
---
```

## 可选扩展字段

按你团队需求加:

```yaml
# 部门 / 业务层级(若 wiki 有这种结构)
design_dept: <部门 slug>
business: <业务 slug>
sub_business: <子业务 slug>
owner_team: "<设计组名>"

# 视觉真相源节点(若用 ground truth 工作流)
ground_truth:
  note: "..."
  nodes: []

# bundle 文件清单(page-doc 多文件 bundle 才填)
bundle: page-doc
bundle_files: [design.md, spec.md, variants.md, behaviors.md]
```

## 如何对接 JD V16 的扩展字段

V16 在最小 schema 上扩了 `design_dept` / `business` / `sub_business` / `owner_team` / `zone` 等。如果你要做类似 13 部门 × N 业务的层级,参考 `profiles/jd-v16/frontmatter-spec.md`。
