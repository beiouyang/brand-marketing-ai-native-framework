---
file: design
bundle: page-doc
level: page
bg: horizontal
slug: radius
name_zh: "品牌与营销设计部 · 圆角规范"
name_en: "Brand & Marketing · Radius Guideline"
design_dept: "brand-and-marketing"
module: "campaign-system"

owner: "设计与用研部-品牌与营销设计部"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-06-11"
guideline_version: "16.0"

auto_detected:
  level: page
  bg: horizontal
  design_dept: "brand-and-marketing"
  module: "campaign-system"
  slug: "radius"

relay_source:
  file_id: "2057763035308625921"
  page_id: "0:1595"
  node_id: "13505:441"
  node_name: "圆角"
  node_type: FRAME
  bounds: { w: 5760, h: 7148 }
  url: "https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13505%3A441"

inherits_from:
  - name: "JD APP 16.0 基础设计规范 / 圆角 Radius"
    file_id: "2029484645871009793"
    page_id: "12:262"
    node_id: "297:248"
    url: "https://relay.jd.com/file/design?id=2029484645871009793&page_id=12%3A262&node_id=297%3A248"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md
  - _assets-cdn.md

references:
  uses_components:
    - "JD APP 16.0 基础设计规范 / 圆角 Radius"
  uses_tokens:
    colors:
      - "基础颜色/文本色/一级文本"
      - "基础颜色/文本色/二级文本"
      - "基础颜色/文本色/三级文本"
      - "线 Line（颜色）/color_border"
      - "灰阶/gray_10"
      - "灰阶/gray_9"
      - "灰阶/gray_1"
    typography: []
    radius:
      - "radius_xxl"
      - "radius_xl"
      - "radius_l"
      - "radius_base"
      - "radius_s"
      - "radius_xs"
      - "radius_xxs"
    spacing: []
    materials: []

used_by: []
---

# 圆角 · Radius

> 自动同步 2026-06-11 · skill relay-to-design-md v1.2 bundle · Relay [`13505:441`](https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13505%3A441)

## bundle 文件索引

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联 |
| **[spec.md](./spec.md)** | 继承的 V16 圆角 token、页面变量、结构角色与应用判断 |
| **[variants.md](./variants.md)** | 使用角色、结构层级、圆角继承策略与场景维度 |
| **[behaviors.md](./behaviors.md)** | 应用准则、降级规则、Donts 与 AI 生成约束 |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录 |
| **[_assets-cdn.md](./_assets-cdn.md)** | 截图 / 装饰图等资产登记 |

## 一句话定义

营销场景圆角规范用于说明会场、营销页面与营销模块如何继承 JD APP 16.0 圆角体系：默认遵循 16.0 圆角梯度、应用映射与应用规则，不额外扩展营销专属圆角梯度。

## 边界

| 类型 | 规则 |
|---|---|
| 继承 | 继承 V16.0 基础圆角规范中的圆角梯度、应用映射、应用规则。 |
| 不扩展 | 不新增 `campaign_radius_*` 或其它营销专属 radius token。 |
| 不重定义 | 不修改 `Radius_16 / 12 / 8 / 6 / 4 / 2 / 0` 的值和语义。 |
| 不参与 | 圆角不参与视觉图形风格定义，不反推品牌装饰图形、IP 插画、投放素材的图形边缘。 |

## 结构总览

当前 Relay 稿件包含两个正文模块：

1. **基础规范继承**：说明营销场景基于 JD APP 16.0 圆角规范，继承圆角梯度、应用映射、应用规则；圆角用于页面结构、容器层级与组件边界表达，不参与视觉图形风格定义。
2. **应用原则**：通过“系统级基础组件”和“页面框架与模块”两个使用角色，建立营销场景中的圆角决策模型。

## 形态总览

| 维度 | 取值 | 说明 |
|---|---|---|
| 规范来源 | 继承 V16.0 圆角规范 | 营销场景不另起梯度。 |
| 使用角色 | 系统级基础组件 / 页面框架与模块 | 先判断对象角色，再映射到 V16 圆角规则。 |
| 结构层级 | 高层级 / 中层级 / 低层级 / 通栏结构 | 层级越高、独立性越强，圆角越大；通栏结构可使用直角。 |
| 图形风格 | 不参与 | 圆角只表达结构、容器层级和组件边界。 |

## 设计原则

- 圆角梯度应用于页面结构、容器层级与组件边界表达。
- 圆角不参与视觉图形风格定义。
- 系统级基础组件具备固定交互语义与形态表达，应回到 V16 基础组件语义与高度规则。
- 页面框架与模块用于形成独立结构盒，建立页面层级与内容边界。
- 结构层级越高、独立性越强，圆角越大。
- 结构层级越低、信息附属性越强，圆角越小。
- 同一结构层级应保持统一圆角表达。
- 页面内圆角应遵循层级递进关系。
- 平台型通栏结构可使用直角，以保持页面秩序与信息效率。

## 典型场景

| 场景 | 应用方式 |
|---|---|
| 系统级基础组件 | 标签、按钮、气泡、系统级提醒、弹窗等按 V16 基础组件语义与高度规则映射。 |
| 页面整体框架容器 | 形成独立结构盒时，用圆角建立页面层级与内容边界。 |
| 框架内部模块容器 | 楼层、卡片、营销弹窗等按结构层级与独立性选择圆角。 |
| 非独立结构盒 | 优先使用间距、分割线、背景差强调结构分割，不额外制造圆角层级。 |

## 关联

- 继承来源：JD APP 16.0 基础设计规范 / 圆角 Radius。
- 同业务体系：品牌与营销设计部 / 营销系统 / 文字 Typography。
- 发布页：`spec-page.html` 可由本 bundle 生成或同步更新。

## 待确认

- V16 `297:248` 当前未在打开的 Relay 稿件中，继承 token 表来自本地已生成的 V16 radius 文档与 `foundations/tokens/radius.md`；正式发布前建议重新打开 V16 文件后重跑校验。
- 当前稿件未提供具体会场页面 case 的逐项取值示例；若正式规范需要示例表，需补充页面框架、楼层、卡片、营销弹窗四类 case。
