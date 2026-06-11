---
zone: product-architecture
design_dept: comprehensive-business
business: content-ecosystem
sub_business: video
owner_team: 综合业务组
page_name: VideoPreviewPage
page_name_zh: 预告页
slug: video-preview
layer: Page / Scene Composition Layer
bundle: page-doc
bg: horizontal
version: "0.1"
status: scaffold
last_updated: "2026-06-04"
guideline_version: "16.0"

# ⚠️ 占位骨架：尚无设计来源，所有规范内容待 Relay 抽稿后回填
relay_source:
  file_id: "TODO"
  page_id: "TODO"
  node_id: "TODO"
  url: "TODO: 待补预告页 relay.jd.com 链接"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md

references:
  uses_components: []

used_by: []
---

# 预告页 · Video Preview

> ⚠️ **占位骨架（scaffold v0.1，2026-06-04）**：本 bundle 仅建立结构与导航位，**尚无设计来源**。所有规范字段为 TBD，待设计师提供预告页的 Relay 链接后，走 `relay-to-design-md` 抽稿回填，再 `design-md-to-spec-page` 重渲染。**未编造任何尺寸 / token / 行为规范。**

## 一句话定义

> ⚠️ TBD：预告页的定位、用途与内容范围待补。占位描述——综合业务设计部 · 内容生态 · 视频线下的「预告页」，用于内容上线前的预告 / 预约 / 提醒场景。具体语义以 Relay 原稿为准。

## 组件边界

> ⚠️ TBD：与 `video-feed` / `video-tabbar` / `直播 live` 的边界关系待界定。

## 待补清单（回填前置）

| 项 | 状态 | 说明 |
|---|---|---|
| Relay 来源链接 | ❌ 缺 | 需设计师提供预告页 relay.jd.com 节点 |
| 页面定位 / 用途 | ❌ 缺 | 一句话定义 + 适用场景 |
| 组件构成 | ❌ 缺 | 预告页由哪些组件组合 |
| 视觉规范 | ❌ 缺 | 尺寸 / 颜色 / 字体 / 间距 / token 映射 |
| 变体 / 状态 | ❌ 缺 | 预约前 / 已预约 / 已开播等状态 |
| 行为规范 | ❌ 缺 | 预约、提醒、跳转等交互 |
| 放置路径确认 | ⚠️ 待定 | 当前暂置于 `content-ecosystem/video/video-preview/`，若实为直播预告可移至 `live/` 下 |

## Bundle 导航

| 文件 | 内容 | 状态 |
|---|---|---|
| [spec.md](./spec.md) | 视觉规范 | TBD |
| [variants.md](./variants.md) | 变体规范 | TBD |
| [behaviors.md](./behaviors.md) | 行为规范 | TBD |
| design.md | 索引 | 占位骨架 |
