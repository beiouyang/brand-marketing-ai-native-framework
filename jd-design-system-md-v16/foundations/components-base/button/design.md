---
file: design
bundle: page-doc
level: component-base
bg: horizontal
slug: button
name_zh: "按钮"
name_en: "Button"

owner: "@xushui2018"
contributors: []
status: draft
version: "0.2"
last_synced: "2026-06-02"
guideline_version: "16.0"

# v0.2（2026-06-02）：从 v0.1 单份（仅 608:1031 主要/默认一个变体）迁为 v1.2 bundle，
# 并以全变体板 Relay 608:6「通用类-按钮」重抽（9 章节 = 7 尺寸 + 48/44 双行 / 5 样式 / 4 状态 / 浅+暗）。
# 兑现 v0.1 frontmatter 里 issue #35 的「升级为 Button bundle 总入口」拍板。

auto_detected:
  level: component-base
  bg: horizontal
  slug: "button"

relay_source:
  file_id: "2029484645871009793"
  page_id: "33:5"
  node_id: "608:6"
  node_name: "通用类-按钮"
  node_type: FRAME
  bounds: { w: 1666, h: 7076 }
  url: "https://relay.jd.com/file/design?id=2029484645871009793&page_id=33%3A5&node_id=608%3A6"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md

references:
  uses_components:
    - foundations/components-base/icon-home   # 演示用 home 图标(前/后置 slot);icon-home 尚未单独录入
used_by: []
---

# 按钮 · Button

> 自动同步 2026-06-02 · skill v1.2（bundle）· Relay [`608:6`](https://relay.jd.com/file/design?id=2029484645871009793&page_id=33%3A5&node_id=608%3A6)

## bundle 文件索引

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 完整主文档：定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联 |
| **[spec.md](./spec.md)** | 视觉规格：token（浅/暗双列，5 样式 × 状态）+ 尺寸档（高/圆角/字号/内距）+ 图标 |
| **[variants.md](./variants.md)** | 变体矩阵：尺寸 × 样式 × 状态 × 浅/暗 |
| **[behaviors.md](./behaviors.md)** | 交互（状态切换 / 禁用）/ Donts |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录 |
| spec-page.html | 对外发布页（由 design-md-to-spec-page 生成，非本 skill） |

## 一句话定义

**按钮**是操作的视觉锚点 —— 承载页面 / 区域 / 弹窗的可点击操作，按视觉权重分**主要 / 次要 / 文字**三类，按场景选尺寸；主要按钮（红色填充）是首要操作锚点，**全页面通常仅 1 个**。

## 边界

按钮是 **component-base 原子**，被各业务组件复用（如 [底部工具栏](../toolbar-general/design.md) 的操作区直接用 Button）。本文档定义按钮自身的尺寸 / 样式 / 状态体系；具体业务页怎么摆按钮，归各业务组件。

## 结构总览

```
┌──────── 按钮容器（底色 + 圆角 + padding L/R + gap）────────┐
│  [前置图标]   文案（居中）   [后置图标]                      │
└─────────────────────────────────────────────────────────────┘
```
- 容器：底色（按样式）+ 圆角（按尺寸档）+ 左右内距 + 图标-文字间距
- slot：前置图标（可选）/ 文案（必）/ 后置图标（可选）

元素级 token / 尺寸见 [spec.md](./spec.md)。

## 形态总览

多维矩阵（详规见 [variants.md](./variants.md)）：

| 维度 | 取值 |
|---|---|
| **尺寸** | 48 / 44 / 40 / 36 / 32 / 28 / 24（7 档；圆角 48·44·40→8、36·32·28→6、24→4；字号 18→11，逐档实测） |
| **文本行** | 单行（7 档全有）/ 双行（主文案 + 辅助说明，仅 48·44） |
| **样式** | 主要（红实心）/ 次要（金填充）/ 次要（浅红填充）/ 次要（灰）/ 文字按钮（无底，链接型） |
| **状态** | 默认 / 按下 / 禁用（灰）/ 禁用（保留色浅化） |
| **主题** | 浅色 / 暗色（暗色独立 token，非浅色重着色） |

## 设计原则

- **主操作唯一**：同页面 / 同区域最多 1 个主要按钮（红），其余降级为次要 / 文字。
- **样式定权重**：主要(红) > 次要(金/浅红/灰) > 文字按钮，按操作重要性选。
- **尺寸定圆角**：圆角是尺寸档的产物（48→`radius_l` 8、40→`radius_m` 6、更小→`radius_base` 4），非单按钮可调。
- **token 化**：颜色全走 V16 token，不硬编码 hex（暗色 / 换肤依赖 token 解析）。
- **深浅跟随系统**：浅 / 暗双态随系统外观；中性 / 金色暗色独立取值，品牌红浅暗一致。

## 典型场景

- 页面级首要 CTA（立即购买 / 加入购物车 / 立即领取）→ 主要按钮
- 表单提交 / 确认（下单、登录、支付、保存）→ 主要按钮
- 弹窗主操作（确认、完成）→ 主要；取消 / 返回 → 次要 / 文字
- 并列双操作（加购 + 立即购买）→ 次要(金) + 主要(红)

## 关联

- 归属：`level: component-base`，`bg: horizontal`
- Foundation 引用：见 [spec.md](./spec.md) 的 `uses_tokens`
- 复用方：[底部工具栏](../toolbar-general/design.md) 等业务组件
