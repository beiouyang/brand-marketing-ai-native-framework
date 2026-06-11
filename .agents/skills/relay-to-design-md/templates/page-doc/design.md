---
file: design
bundle: page-doc          # v0.5 起 multi-md bundle 标识；v1.2 起所有组件默认 bundle
level: {{level}}
bg: {{bg}}
slug: {{slug}}
name_zh: "{{name_zh}}"
name_en: "{{name_en}}"

owner: "{{owner}}"
contributors: []
status: draft
version: "0.1"
last_synced: "{{today_iso}}"
guideline_version: "16.0"

# skill 自动推断的字段。如不对，请改 frontmatter + mv 文件夹后告知。
# v1.2：本文件是 bundle 的「完整主文档」（不再是薄 index）——一句话定义 / 边界 / 结构总览 /
#        形态总览 / 设计原则 / 典型场景都在这；细规拆到 spec.md / variants.md / behaviors.md。
auto_detected:
  level: {{level}}{{level_fallback_flag}}
  bg: {{bg}}{{bg_fallback_flag}}
  slug: "{{slug}}"{{slug_fallback_flag}}

relay_source:                # v0.5.1：relay_source 单点存储于本文件，子文件只留 bundle_part_of 反向指针
  file_id: "{{file_id}}"
  page_id: "{{page_id}}"
  node_id: "{{node_id}}"
  node_name: "{{node_name}}"
  node_type: {{node_type}}
  bounds: { w: {{node_w}}, h: {{node_h}} }
  url: "{{relay_url}}"

bundle_files:                # v1.2：4 md + CHANGELOG（去 ai-schema.yaml）
  - design.md       # 本文件：完整主文档（定义 / 边界 / 结构总览 / 形态总览 / 原则 / 场景 / 关联）
  - spec.md         # 视觉与结构规格：token（浅/暗双列）/ 容器尺寸 / 间距 / 图标资产规则
  - variants.md     # 形态与变体：各形态详规 / 状态 / 内容类型 / 溢出降级
  - behaviors.md    # 行为规范：交互 / 点击区 / 跳转 / 优先级 / 降级 / Donts
  - CHANGELOG.md    # 变更记录（append-only，每个 PR 一条）

references:
  uses_components:
{{uses_components_list}}

used_by: []
---

# {{name_zh}} · {{name_en}}

> 自动同步 {{today_iso}} · skill {{skill_version}}（bundle）· Relay [`{{node_id}}`]({{relay_url}})

## bundle 文件索引

本组件按 v1.2 标准拆为 **4 md + CHANGELOG**（+ `assets/` + 发布页）：

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 完整主文档：定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联 |
| **[spec.md](./spec.md)** | 视觉与结构规格：token（浅/暗双列）/ 容器尺寸 / 间距 / 图标资产规则 |
| **[variants.md](./variants.md)** | 形态与变体：各形态详规 / 状态 / 内容类型 / 溢出降级 |
| **[behaviors.md](./behaviors.md)** | 行为规范：交互 / 点击区 / 跳转 / 优先级 / 降级 / Donts |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录（每个 PR 一条，最新在上） |
| spec-page.html | 对外发布页（由 `design-md-to-spec-page` 生成，非本 skill） |

## 一句话定义

{{section_one_liner_or_todo}}

## 边界（与相邻组件的关系）

{{section_boundary_or_todo}}

## 结构总览

{{section_structure_overview}}

> 元素级规格（尺寸 / token / 间距）见 [spec.md](./spec.md)。

## 形态总览

{{section_forms_overview}}

> 各形态 / 状态 / 内容类型详规见 [variants.md](./variants.md)。

## 设计原则

{{section_principles_or_todo}}

## 典型场景

{{section_scenarios_overview}}

> 交互 / 跳转 / 降级 / Donts 见 [behaviors.md](./behaviors.md)。

## 关联

- 此组件归属：`level: {{level}}`，`bg: {{bg}}`
- V16 Foundation 引用：见 [spec.md](./spec.md) 的 `uses_tokens`
{{assets_cdn_link_or_empty}}

## 变更记录

见 [CHANGELOG.md](./CHANGELOG.md)。

---

{{auto_sync_findings_section}}
