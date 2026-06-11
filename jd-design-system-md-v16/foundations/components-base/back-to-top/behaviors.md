---
file: behaviors
bundle_part_of: design.md
slug: back-to-top
last_synced: "2026-06-03"

# bundle: 行为规范 — 交互 / Donts / 适配 / Relay 残留。relay_source 单点存储在 design.md。
---

# 返回顶部 · 交互 / 禁止 / 适配

> design.md → [主文档](./design.md) · 同 bundle: [spec](./spec.md) · [variants](./variants.md)

## 交互

- **触发回顶**：点击后当前页面平滑滚动回顶部（smooth scroll-to-top）。
- **点击反馈**：按下进入点击态（叠底衬），松手回默认态；无长按 / 双击语义。
- **命中区**：40×40 正圆，图标 20×20 居中，四周留 padding 保证触达。
- **深浅跟随系统**：浅 / 暗随系统外观切换，材质参数与图标色取对应模式独立值。

## 出现 / 消失时机（建议口径，待业务确认 ⚠️）

> Relay 稿仅给出 atom 视觉，未标注出现规则，以下为通用建议，需设计师确认：

- 页面向下滚动超过约 1 屏后浮现；滚动回顶部附近时隐出。
- 常驻于内容区右下角，悬浮于内容之上、低于 Toolbar / Tabbar 等全局栏。

## Donts

- ❌ 用纯色圆按钮替代 Liquid Glass 材质。
- ❌ 给按钮加文字标签 / 数字角标 / 次操作——保持单一职责。
- ❌ 暗态直接复用浅态材质参数与图标色（材质渐变 / 投影 / 底衬都换值）。
- ❌ 把「点击态」当持续选中态长亮——它是按下瞬时反馈。
- ❌ 改变 40×40 命中区或破坏正圆（radius 20）。

## 多端适配

- 悬浮于内容右下，注意避让底部安全区与 Toolbar / Tabbar，不遮挡主操作。
- 浅 / 暗双态随系统外观。

## Relay 节点名残留 / 待确认清单

> 以截图渲染 / 实际 fill 为准。

- 状态命名混用「未选中 / 点击态」与「默认态 / 选中态」两套词——本组件无持续选中语义，**统一为 默认态 / 点击态（pressed）**，录入已归一。
- 暗态点击底衬 `#14171A` 为材质内直给值，未映射语义 token；如 foundation 暗态色板有对应项，建议补登。
- 出现 / 消失时机稿件未标注，本文按通用口径给建议值，**待业务设计师确认**。
- 图标 SVG 已导出至 [`assets/icons/arrow-up.svg`](./assets/icons/arrow-up.svg)（currentColor，4 态共用），清单见 [`_assets-cdn.md`](./_assets-cdn.md)；暗态精确 hex 与 CDN 上传待回填。
