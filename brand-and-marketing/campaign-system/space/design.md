---
file: design
level: page
bg: horizontal
slug: "space"
name_zh: "品牌与营销设计部 · 空间规范"
name_en: "Brand & Marketing · Space Guideline"
owner: "@shaoziyan1"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-06-10"
bundle: page-doc
bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md

auto_detected:
  level: page
  bg: horizontal
  slug: "space"

relay_source:
  file_id: "2057763035308625921"
  page_id: "0:1595"
  node_id: "13513:602"
  node_name: "空间 Space"
  node_type: FRAME
  bounds: { w: 5760, h: 58318.5 }
  url: "https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13513%3A602"

references:
  uses_components: []
  uses_tokens:
    colors:
      - color_title
      - color_text
      - color_text_help
      - color_primary
      - color_border
    spacing:
      - 12px
      - 18px
      - 24px
      - 48px
      - 168px
      - 15%
      - 8%
---

# 空间 Space

## 一句话定义

空间规范基于 JD APP 16.0 基础空间布局系统，为营销页面定义布局继承、横滑露出、组件间距和内容节奏的使用规则。

## 边界

本规范用于页面布局、模块组织、容器型内容模块与营销组件组合关系。横滑布局规则只约束容器型内容模块，不约束横滑导航、Tab 等导航组件。

## 设计原则

| 原则 | 说明 |
|---|---|
| 基础继承 | 未特殊说明的营销场景均遵循 JD APP 16.0 基础空间规范。 |
| 一致性 | 同层级内容保持一致空间关系，相同结构用相同空间，不同结构用不同空间。 |
| 节奏引导 | 营销页面不追求绝对均匀，通过空间变化建立浏览节奏。 |
| 密度平衡 | 高密内容用外部空间获得呼吸感，低密内容控制外部空间避免松散。 |

## 结构总览

| 章节 | 内容 |
|---|---|
| 01 基础规范继承 | 布局、栅格、空间梯度、层级体系、安全区域体系的继承方式。 |
| 02 空间类型拓展 | 横滑布局、露出比例、分栏规则、约束条件、一致性原则。 |
| 03 空间梯度拓展 | 基础组件与复合组件中的关键间距。 |
| 04 应用原则 | 一致性、节奏引导、密度平衡原则。 |

## 典型场景

- 内容数量超过单屏承载能力，需要用户横向探索。
- 营销模块需要保持基础分栏结构，但用露出卡片提示更多内容。
- 按钮、Tab、标签与文本、图标与文本需要稳定的内部间距。
- 页面需要通过留白建立重点内容的聚焦与停顿。

## 待办

- 当前 Relay 根节点高度为 `58318.5px`，建议后续按章节分块录入，以补齐可能被上下文截断的中段细节。
- 确认四列横滑规则中的滑动形式是否确认为 `3 + 15%`。
