---
file: design
level: page
bg: brand-and-marketing
slug: campaign-system-materials
name_zh: "营销场景材质"
name_en: "Campaign System Materials"
owner: "@shaoziyan1"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-06-17"
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
  slug: "campaign-system-materials"

relay_source:
  file_id: "2057763035308625921"
  page_id: "0:1595"
  node_id: "13532:312"
  node_name: "材质 Materials"
  node_type: FRAME
  bounds: { w: 5760, h: 13526 }
  url: "https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13532%3A312"

references:
  uses_components: []
  uses_tokens:
    colors:
      - color_title
      - color_text
      - color_text_help
      - color_border
      - color_background_page
      - gray_10
      - gray_9
      - gray_1
---

# 营销场景材质 Campaign System Materials

## 一句话定义

材质规范定义营销场景中平面、颜色和拟真三类材质表达的职责与使用边界，帮助活动页面在保持信息识别效率的前提下建立更清晰的氛围、层次和视觉感染力。

## 边界

本规范用于品牌与营销场景中的材质选择、材质表现强度和案例应用判断。它继承 JD APP 16.0 基础设计系统中的 Liquid Glass 与 Frosted Glass 能力，但不重新定义基础材质的底层参数，也不替代色彩、空间、图形、字体等基础规范。

## 设计原则

| 原则 | 说明 |
|---|---|
| 服务内容 | 材质表达应服务于内容传达及氛围构建，不能削弱标题、利益点、价格和行动信息的识别。 |
| 风格协调 | 不同材质类型可以组合使用，但需控制材质风格、细节表现和真实程度差异，避免视觉割裂。 |
| 适度表达 | 复杂光影、高细节材质和拟真空间应按营销场景需要使用，避免过度装饰影响阅读效率。 |

## 结构总览

| 章节 | 内容 |
|---|---|
| 01 基础规范继承 | 继承基础设计系统中的 Liquid Glass 与 Frosted Glass。 |
| 02 材质类型扩展 | 定义平面质感、颜色质感、拟真质感三类营销材质。 |
| 03 材质应用倾向 | 按三类材质分别说明视觉特征、应用特征、适用场景与示例。 |
| 04 应用原则 | 视觉协调与适度表达。 |

## 典型场景

- 日常营销视觉需要稳定、清晰、通用的平面化表现。
- 主题活动需要通过鲜艳色彩、渐变和光感强化吸引力。
- 节点大促、节日氛围或沉浸式场景需要通过拟真材质和空间表现增强感染力。
- 同一页面内需要组合多种材质时，应控制风格强度和信息层级。

## 设计边界

- 平面质感优先保证信息清晰和标准化表达，不应过度堆叠装饰细节。
- 颜色质感可以使用渐变、光感和层次，但必须保持主体信息可读。
- 拟真质感可以强化真实材质和空间感，但不能遮挡文案、价格、权益或 CTA。
- Liquid Glass / Frosted Glass 作为基础能力继承，正式使用时需遵循基础材质规范的透明度、模糊和背景适配限制。

## 待办

- `03 材质应用倾向` 中每类目前只识别到一个有效案例图和两个灰色占位容器，需要设计侧确认占位容器是否为待补案例。
- `Liquid Glass` / `Frosted Glass` 是否需要在本规范中补充营销场景参数与示例，仍待确认。
- Relay 节点高度为 `13526px`，正式发布前建议按章节分块复核案例资产和实际文本。
