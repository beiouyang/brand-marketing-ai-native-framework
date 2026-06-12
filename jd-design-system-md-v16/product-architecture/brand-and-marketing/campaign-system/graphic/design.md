---
file: design
level: page
bg: brand-and-marketing
slug: campaign-system-graphic
name_zh: "营销场景图形"
name_en: "Campaign System Graphic"
owner: "@shaoziyan1"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-06-12"
bundle: page-doc
bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md

auto_detected:
  level: page
  bg: brand-and-marketing
  slug: "campaign-system-graphic"

relay_source:
  file_id: "2057763035308625921"
  page_id: "0:1595"
  node_id: "13522:1075"
  node_name: "图形"
  node_type: FRAME
  bounds: { w: 5760, h: 58106.5 }
  url: "https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13522%3A1075"

references:
  uses_components: []
  uses_tokens:
    colors:
      - color_title
      - color_text
      - color_text_help
      - color_border
      - color_background_page
      - color_background_component
      - color_primary
    effects:
      - selected_drop_shadow
---

# 营销场景图形 Campaign System Graphic

## 一句话定义

图形规范定义营销场景中图形资产的识别、信息传递与氛围表达职责，确保同一业务语义在不同活动风格中保持稳定认知，同时允许视觉表现随主题延展。

## 边界

本规范用于营销图标、语义图形、场景图形、主题氛围图形和品类图形示例的识别与应用规则。它不重定义基础图标系统的绘制规范，也不替代品牌色、字体、空间、圆角等基础规范。

## 设计原则

| 原则 | 说明 |
|---|---|
| 信息服务 | 图形应服务于信息表达，通过视觉元素建立认知、强化主题，并提升信息传达效率。 |
| 稳定识别 | 图形在不同活动周期及视觉风格下，应保持核心识别与场景认知稳定。 |
| 主次清晰 | 图形应用应保持视觉层级清晰，通过不同元素协同建立视觉焦点，避免过度强化导致信息干扰。 |

## 结构总览

| 章节 | 内容 |
|---|---|
| 01 设计原则 | 信息服务、稳定识别、主次清晰。 |
| 02 图形类型 | 平台造型图形、业务 / 身份语义图形、场景 / 活动氛围图形、主题图形。 |
| 03 图形应用 | 语义图形应用、场景图形应用、品类与活动示例。 |
| 04 应用原则 | 一致性、节奏引导、密度平衡原则。 |

## 典型场景

- 营销会场底部导航或入口图标需要在选中 / 未选中状态间保持清晰识别。
- 同一业务语义需要适配扁平、金属、玻璃等不同表现方式。
- 活动场景需要通过聚宝盆、中式窗棂、灯笼等图形建立节日氛围。
- 品类入口需要使用购物篮、女包、洗面奶、数码、木马、沙发等图形快速传达内容归属。

## 设计边界

- 语义图形可以变化材质、风格、光影和局部形态，但核心识别特征不能漂移。
- 场景图形可以根据活动主题变化组合方式，但应保留明确的场景认知。
- 营销图标存在选中 / 未选中两组状态，状态变化应服务于导航识别，不应改变业务含义。
- 图形只是视觉锚点，不应替代标题、价格、利益点、入口名称等必要信息。

## 待办

- Relay 根节点高度为 `58106.5px`，正式发布前建议按章节分块复核文本和资产。
- `03 图形应用` 中两处“待补充范围示意”需要设计侧确认是否保留。
- 部分子节点抽取与截图存在漂移，本 bundle 已按根截图与可见内容整理，后续需逐块校验真实文本。
