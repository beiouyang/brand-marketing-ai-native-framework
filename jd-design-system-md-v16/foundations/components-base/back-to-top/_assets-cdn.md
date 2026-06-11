---
file: _assets-cdn
slug: back-to-top
last_synced: "2026-06-03"
purpose: 返回顶部组件的图标资产清单。箭头图标已从 Relay 导出真 SVG 落 assets/icons/（单色 currentColor，随深浅取色）。本组件无专有字体。
---

# 返回顶部 · 资产清单

> **视觉还原原则**：HTML/CSS/SVG 优先；图标已导出真 SVG，spec-page 内联或引用 assets/icons/。截图仅 backup，不嵌文字标注。
> **来源 Relay**：file `2029484645871009793` / page `1382:4926` / 根 `1382:4932`。导出方式：`get_design_context` 资产通道（asset server）取真 SVG；fill 改 `currentColor`。

## 图标（1，已导出 → assets/icons/）

| slug | 名称 | 标称尺寸 | Relay 源节点 | 颜色模式 | 文件 | cdn_url |
|---|---|---|---|---|---|---|
| `arrow-up` | 上箭头（回顶） | 20×20（vector bbox 17.406×18.335） | 默认 `1858:41434` / 选中 `1382:4948`（几何一致） | currentColor（浅 `#11141a` gray_7 / 暗 浅色） | assets/icons/arrow-up.svg | TBD |

> 默认态与点击态、浅态与暗态的箭头**几何完全一致**，仅取色不同 → 单一 `currentColor` 资产覆盖全部 4 态。引用：`mask` + `currentColor`，颜色由 spec-page 按深浅设置（浅 `#11141a`，暗取浅色中性）。

## 字体

无。本组件不含文本 / 价格数字，无字体依赖。

## 待办
- [ ] 图标上传京东 CDN，回填 `cdn_url`
- [ ] 暗态箭头精确取值确认（当前走 currentColor，未单列暗态 hex；如 foundation 暗态有对应灰阶 token，补登 spec.md）

## 关联
- 同组件：[design.md](./design.md) / [spec.md](./spec.md)
- skill 原则：`.claude/skills/design-md-to-spec-page/SKILL.md`「视觉还原优先级」
