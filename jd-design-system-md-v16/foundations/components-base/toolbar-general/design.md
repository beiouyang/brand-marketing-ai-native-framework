---
file: design
bundle: page-doc
level: component-base
bg: horizontal
slug: toolbar-general
name_zh: "底部工具栏"
name_en: "Toolbar"

owner: "@xushui2018"
contributors: []
status: draft
version: "0.2"
last_synced: "2026-06-02"
guideline_version: "16.0"

# v0.2（2026-06-02）：从 v0.1 单份 design.md 迁为 v1.2 bundle（design 完整主文档 + spec/variants/behaviors/CHANGELOG）。
# 来源 Relay 493:5296 chunked 抽取（6 场景 / 浅+暗双态）。细规见 spec/variants/behaviors。

auto_detected:
  level: component-base
  bg: horizontal
  slug: "toolbar-general"

relay_source:
  file_id: "2029484645871009793"
  page_id: "47:1447"
  node_id: "493:5296"
  node_name: "导航类-底部导航栏"
  node_type: FRAME
  bounds: { w: 1666, h: 8500 }
  url: "https://relay.jd.com/file/design?id=2029484645871009793&page_id=47%3A1447&node_id=493%3A5296"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md

references:
  uses_components: [button]
  related: [tabbar]
used_by: []
---

# 底部工具栏 · Toolbar

> 自动同步 2026-06-02 · skill v1.2（bundle）· Relay [`493:5296`](https://relay.jd.com/file/design?id=2029484645871009793&page_id=47%3A1447&node_id=493%3A5296)

## bundle 文件索引

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 完整主文档：定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联 |
| **[spec.md](./spec.md)** | 视觉与结构规格：token（浅/暗双列）/ 容器尺寸 / 按钮档位 / 图标资产 / 字体 |
| **[variants.md](./variants.md)** | 形态与变体：6 场景变体详规 / 双按钮拼法 / 状态 |
| **[behaviors.md](./behaviors.md)** | 行为规范：交互 / 安全区 / 深浅跟随 / Donts / Relay 残留清单 |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录（每个 PR 一条） |
| spec-page.html | 对外发布页（由 design-md-to-spec-page 生成，非本 skill） |

## 一句话定义

页面底部悬浮的**操作承载栏** —— 在不同业务页（商详 / 购物车 / 结算 / 订详 / 店铺）承载该页主操作（立即购买 / 去结算 / 立即支付 等），随场景切换布局与信息密度，支持浅 / 暗双态。

## 边界（与 Tabbar / Button）

| 组件 | 职责 | 关系 |
|---|---|---|
| **底部工具栏（本）** | 业务页底部的操作 + 信息聚合栏 | —— |
| [Tabbar](../tabbar/design.md) | 全局 tab 导航 + Joy Agent + 灵动岛 | 同属「底部导航栏」Relay 文件不同画板；职责不重叠 |
| [Button](../button/design.md) | 单个按钮原子 | 本栏内操作按钮复用 Button |

> 都贴底，但 Tabbar 是「去哪」（导航），Toolbar 是「做什么」（操作）。

## 结构总览

两类容器形态（尺寸 / token 详见 [spec.md](./spec.md)）：

```
悬浮态 docked bar（通用/结算/订详/店铺）        结算栏（购物车）
┌───────── w375 ─────────┐               ┌──── w351·radius12 ────┐
│ padding 8/8/34 · gap8  │               │ ○全选  ¥价格   [去结算] │
│ ┌── 内容区 h44 ──────┐ │               │       共减¥… ⌃(副说明)  │
│ └────────────────────┘ │               └────────────────────────┘
└ 毛玻璃 + 渐变 + 投影 ───┘               （带凑单时上方拼促销条 + 底部进度条）
```

## 形态总览（6 场景）

| # | 场景 | 形态 | 变体数 | 关键内容 |
|---|---|---|---|---|
| 1 | 通用状态 | docked bar | 4 | 操作按钮（主红 / 次金） |
| 2 | 商详 | docked bar + 左导航图标组 | 3 | 店铺/消息/购物车 + 拼接按钮 |
| 3 | 购物车 | 结算栏 | 7 | 全选 / 价格 / 去结算 / 凑单进度条 |
| 4 | 结算 | docked bar | 4 | 立即支付 / 医保蓝按钮 |
| 5 | 订详 | docked bar + 左文字标签 | 2 | 小尺寸按钮组 |
| 6 | 店铺 | docked bar（5 tab 均分） | atom + 组件 | 首页/商品/分类/直播/会员 |

> 各形态详规（变体内容 / 状态）见 [variants.md](./variants.md)。

## 设计原则

- **主操作唯一**：每场景最多一个主要操作（红），次要走金 / 灰；双操作时主操作恒靠右。
- **底部安全区**：docked bar 底部留 34 安全区，适配全面屏 Home Indicator。
- **深浅跟随系统**：浅 / 暗双态随系统外观切换，中性色按暗色独立 token 取值（非浅色重着色）。
- **价格为视觉重心**：价格用京东正黑 V2.3 数字体 + 主操作红。

## 典型场景

通用状态（基础态）/ 商详（左导航图标组 + 操作）/ 购物车（结算栏 + 凑单）/ 结算（含医保蓝）/ 订详（小按钮组）/ 店铺（5 tab 均分）。详见 [behaviors.md](./behaviors.md)。

## 关联

- 归属：`level: component-base`，`bg: horizontal`
- Foundation 引用：见 [spec.md](./spec.md) 的 `uses_tokens`
- 资产：图标 / 字体见 `_assets-cdn.md`（10 真 SVG + 京东正黑 V2.3）

## 变更记录

见 [CHANGELOG.md](./CHANGELOG.md)。
