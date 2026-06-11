---
file: spec
bundle_part_of: design.md
slug: back-to-top
last_synced: "2026-06-03"

# bundle: 视觉与结构规格（token 浅/暗双列）。relay_source 单点存储在 design.md。
uses_tokens:
  colors:
    - gray_7                 # #11141a 图标描线（浅态）
    - color_background       # #f2f4f7 点击态底衬（浅态）
    - color_background_overlay # 暗态 #1f2226 暗色演示底
    - mask_1                 # #11141a05
    - mask_2                 # #11141a14
  radius:
    - radius_full            # 20 正圆（材质 + 图标容器）
  materials:
    - liquid-glass-small     # foundation 材质：225:2285 Fill+Shadow / 225:2286 Glass Effect
---

# 返回顶部 · 视觉规范

> design.md → [主文档](./design.md) · 同 bundle: [variants](./variants.md) · [behaviors](./behaviors.md)

> ⚠️ 暗色是独立态，非浅色重着色。中性色 / 材质参数浅暗各取独立值。

## 尺寸

| 项 | 值 |
|---|---|
| 按钮命中区 | 40 × 40（padding 2） |
| 材质圆角 | radius 20（正圆） |
| 图标容器 | 36 × 36 · padding 8 · radius 20 |
| 图标 | 20 × 20 上箭头 |

## 材质层 Liquid Glass - Small（浅 / 暗双列）

| 属性 | 浅色 | 暗色 |
|---|---|---|
| Fill+Shadow 底 | `linear-gradient(0deg, #F7F7F7 0%, #F7F7F7 100%)` over `#DDDDDD` + `rgba(255,255,255,.65)` | opacity .6 · `linear-gradient(0deg, rgba(255,255,255,.06))` over `rgba(0,0,0,.60)` + `rgba(204,204,204,.50)` |
| blend mode | `normal, color_burn, darken` | `color_burn, normal, normal` |
| 投影 | `0 4 20 rgba(0,0,0,.08)` | `0 8 40 rgba(0,0,0,.12)` |
| Glass Effect 叠加层 | 无 | `rgba(0,0,0,.20)` · blend `screen` |
| 圆角 | radius 20 | radius 20 |

## 图标容器（默认 / 点击 × 浅 / 暗）

| 模式 | 默认态底衬 | 点击态底衬 | blend |
|---|---|---|---|
| 浅色 | 无（透明） | `#F2F4F7`（color_background） | `plus_darker` |
| 暗色 | 无（透明） | `#14171A` | `plus_lighter` |

> 点击态 = 在材质上叠一层「按下底衬」，制造按压反馈，而非更换整枚材质。

## 图标资产

| 项 | 值 |
|---|---|
| 图形 | 上箭头（↑），标称 20 × 20（vector bbox 17.406×18.335） |
| 浅态色 | `#11141a`（gray_7） |
| 暗态色 | 浅色箭头（材质内取值） |
| 源节点 | 默认 `1858:41434` / 选中 `1382:4948`（几何一致） |
| 资产 | [`assets/icons/arrow-up.svg`](./assets/icons/arrow-up.svg)（单色 currentColor，覆盖全 4 态） |

> 真 SVG 已导出归档至 `assets/icons/` + 清单 [`_assets-cdn.md`](./_assets-cdn.md)；引用用 `currentColor`，颜色由深浅模式决定。

## Token 速查

| 用途 | 值 | Token |
|---|---|---|
| 图标色（浅） | `#11141a` | 灰阶/gray_7 |
| 点击底衬（浅） | `#f2f4f7` | 背景 Background/color_background |
| 点击底衬（暗） | `#14171a` | 暗态近黑（材质内值，未走语义 token ⚠️） |
| 暗色演示底 | `#1f2226` | 背景 Background/color_background_overlay（暗态取值） |
| 容错蒙层 | `#11141a05` | 蒙层/mask_1 |
| 边界蒙层 | `#11141a14` | 蒙层/mask_2 |
