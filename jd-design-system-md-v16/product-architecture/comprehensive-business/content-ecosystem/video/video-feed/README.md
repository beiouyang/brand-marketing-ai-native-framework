---
file: README
zone: product-architecture
design_dept: comprehensive-business
business: content-ecosystem
sub_business: video
slug: video-feed
last_synced: "2026-06-03"
---

# 视频信息流 · Video Feed

综合业务组 · 内容生态 · 视频。沉浸式短视频整页，承载播放、频道切换、视频信息展示、右侧互动操作与底部评论输入。本目录收录 Relay 文件 `1958051135088508929` 视频页的 wiki 化结果。

## 已落地

| 模块 | design.md | spec-page |
|---|---|---|
| 视频信息流页面 | [design.md](./design.md) | [spec-page.html](./spec-page.html) |
| 顶部 Tab / VideoTopTab | [components/video-top-tab/design.md](./components/video-top-tab/design.md) | [spec-page.html](./components/video-top-tab/spec-page.html) |
| 信息区 / Info Layer | [components/info-layer/design.md](./components/info-layer/design.md) | — |
| 互动区 / Interactive Area | [components/interactive-area/design.md](./components/interactive-area/design.md) | [spec-page.html](./components/interactive-area/spec-page.html) |
| 底部通条 / Bottom Bar | [components/bottom-tab/design.md](./components/bottom-tab/design.md) | [spec-page.html](./components/bottom-tab/spec-page.html) |

页面 demo：[index.html](./index.html)。

## 结构

```
video-feed/
├── design.md / index.html / spec-page.html   页面级文档与整页 demo
├── assets/icons/                             页面直接渲染的图标
└── components/
    ├── video-top-tab/   顶部导航 / 频道切换（私有 assets/icons）
    ├── info-layer/      视频文案信息层
    ├── interactive-area/  右侧头像/点赞/评论/种草/分享/播控（私有 assets/icons + references/）
    └── bottom-tab/      底部 Bottom Bar（私有 assets/）
```

## 基础层引用

- Token：`jd-design-system-md-v16/foundations/tokens/`（color / spacing / radius / typography）。
- Icon：`jd-design-system-md-v16/foundations/tokens/icon.md`（V16 已将 Icon 令牌化）。
- 图标 SVG：按 V16 约定就近放各组件私有 `assets/`。

## Relay 来源

- 文件：`1958051135088508929`
- 视频页：`page_id 291:5329` / `scope 2075:224`
- 顶部 tab：`518:2141`　信息区：`2075:2390`　互动区：`1600:588`　底部通条：`303:3067`

## 待补 / TODO

录入时引用了 V16 foundations 尚未提供的基础项，已在各 design.md frontmatter 内以 `# TODO` 标注，待 foundations 补齐后回链：

- `foundations/tokens/shadow.md` —— V16 暂无 shadow token。
- `foundations/tokens/BottomSheet.md` —— V16 暂无 BottomSheet token（页面底部交互引用）。
- `foundations/visual/Avatar.md` —— V16 暂无 Avatar 文档（互动区头像引用）。

其余：各组件 frontmatter 仍保留迁移前的旧 schema 字段（component_name/layer 等），后续可进一步收敛到 V16 的 `inherits_from` / `uses_tokens` / `uses_components` 结构。
