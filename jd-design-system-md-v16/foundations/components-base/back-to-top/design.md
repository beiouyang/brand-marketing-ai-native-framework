---
file: design
bundle: page-doc
level: component-base
bg: horizontal
slug: back-to-top
name_zh: "返回顶部"
name_en: "Back to Top"

owner: "@xushui2018"
contributors: []
status: draft
version: "0.2"
last_synced: "2026-06-03"
guideline_version: "16.0"

# v0.2（2026-06-03）：从 v0.1 单份 design.md 迁为 v1.2 bundle（design 完整主文档 + spec/variants/behaviors/CHANGELOG）。
# 来源 Relay 1382:4932「导航类-返回顶部」：单 atom / 普通形态 / 浅+暗双态 / 默认+点击双状态。

auto_detected:
  level: component-base
  bg: horizontal
  slug: "back-to-top"

relay_source:
  file_id: "2029484645871009793"
  page_id: "1382:4926"
  node_id: "1382:4932"
  node_name: "导航类-返回顶部"
  node_type: FRAME
  bounds: { w: 1666, h: 1011 }
  url: "https://relay.jd.com/file/design?id=2029484645871009793&page_id=1382%3A4926&node_id=1382%3A4932"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md

references:
  uses_components: []                      # 不依赖其它 components-base 组件
  uses_materials: [liquid-glass-small]     # foundation 材质 → foundations/visual/materials.md（225:2285 Fill+Shadow / 225:2286 Glass Effect）
  related: [toolbar-general, tabbar]
used_by: []
---

# 返回顶部 · Back to Top

> 自动同步 2026-06-03 · skill v1.2（bundle）· Relay [`1382:4932`](https://relay.jd.com/file/design?id=2029484645871009793&page_id=1382%3A4926&node_id=1382%3A4932)

## bundle 文件索引

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 完整主文档：定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 关联 |
| **[spec.md](./spec.md)** | 视觉与结构规格：token（浅/暗双列）/ 尺寸 / 材质 / 图标资产 |
| **[variants.md](./variants.md)** | 形态与变体：浅/暗 × 默认/点击 4 态详规 / 状态机 |
| **[behaviors.md](./behaviors.md)** | 行为规范：出现/消失时机 / 点击区 / 回顶交互 / Donts / Relay 残留 |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录（每个 PR 一条） |
| [_assets-cdn.md](./_assets-cdn.md) | 资产清单（图标 SVG），下划线辅助文件 |
| spec-page.html | 对外发布页（由 design-md-to-spec-page 生成，非本 skill） |

## 一句话定义

页面长列表滚动时浮现的**单击回顶**圆形按钮 —— 40×40 液态玻璃（Liquid Glass）材质悬浮件，承载一枚向上箭头，点击将当前页面平滑滚回顶部。随系统外观切换浅 / 暗双态。

## 边界（与 Toolbar / Tabbar）

| 组件 | 职责 | 关系 |
|---|---|---|
| **返回顶部（本）** | 长页滚动中的「回到顶部」快捷操作 | 单一原子，悬浮于内容右下 |
| [底部工具栏 Toolbar](../toolbar-general/design.md) | 业务页底部主操作承载栏 | 返回顶部常与之并存但不内嵌；层级更高、贴边浮起 |
| [Tabbar](../tabbar/design.md) | 全局 tab 导航 | 不重叠；返回顶部不参与导航，仅滚动控制 |

> 它不是导航、不是工具栏的一格，而是一枚**独立悬浮控件**：只做一件事——回顶。

## 结构总览

```
返回顶部按钮（40×40 · padding 2）
┌──────────────────────────────┐
│  材质层 Liquid Glass - Small    │  ← 绝对定位铺满 40×40 · radius 20
│  (Fill+Shadow + Glass Effect)  │     渐变 + 投影 +（暗态）玻璃叠加
│   ┌── 图标容器 36×36 ──────┐   │  ← padding 8 · radius 20
│   │     ↑  上箭头 20×20     │   │     点击态加底衬
│   └────────────────────────┘   │
└──────────────────────────────┘
```

- **材质层**：foundation「Liquid Glass - Small」（`225:2285` Fill+Shadow + `225:2286` Glass Effect），圆形 radius 20。
- **图标容器**：36×36，padding 8，radius 20；默认态透明、点击态加底衬。
- **图标**：向上箭头，20×20。

> 尺寸 / token / 材质参数详见 [spec.md](./spec.md)。

## 形态总览

普通形态 × 浅 / 暗 2 模式 × 默认态 / 点击态 2 状态 = 4 个展示态。

| # | 模式 | 状态 | 要点 |
|---|---|---|---|
| 1 | 浅色 | 默认态 | 浅玻璃材质 + 透明图标容器 |
| 2 | 浅色 | 点击态（pressed） | 叠浅灰底衬 `#F2F4F7`（plus_darker）压暗 |
| 3 | 暗色 | 默认态 | 暗玻璃材质（opacity .6 + 玻璃叠加层） |
| 4 | 暗色 | 点击态（pressed） | 叠近黑底衬 `#14171A`（plus_lighter）提亮 |

> 各态完整视觉值见 [spec.md](./spec.md)，状态机与降级见 [variants.md](./variants.md)。

## 设计原则

- **单一职责**：只做「回顶」，不堆叠次操作、不带文字标签。
- **材质优先于实色**：底衬走「Liquid Glass - Small」材质，融入内容而不喧宾夺主；不要用纯色圆按钮替代。
- **深浅跟随系统**：浅 / 暗双态各取独立材质参数与底衬值，暗态不是浅态简单反相。
- **按压即时反馈**：点击态靠叠加底衬（plus_darker / plus_lighter），保持材质连续性。
- **正圆命中**：40×40 命中区，radius 20 正圆，符合悬浮控件触达标准。

## 关联

- 归属：`level: component-base`，`bg: horizontal`
- 材质依赖：foundation「Liquid Glass - Small」（`225:2285` / `225:2286`）
- 相关组件：[底部工具栏](../toolbar-general/design.md)、[Tabbar](../tabbar/design.md)

## 变更记录

见 [CHANGELOG.md](./CHANGELOG.md)。
