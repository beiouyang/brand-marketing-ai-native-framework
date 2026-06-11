---
file: spec
bundle_part_of: design.md
slug: button
last_synced: "2026-06-02"

# bundle: 视觉规格（token 浅/暗双列）。relay_source 单点存储在 design.md。
uses_tokens:
  colors:
    - color_primary          # #FF0F23 主要按钮底 / 文字红 / 浅红样式文字
    - color_primary_text     # #FFFFFF 主要按钮文字
    - color_title            # #171A26 文字按钮中性文字
  radius:
    - radius_l               # 8  尺寸 48/44
    - radius_m               # 6  尺寸 40/36
    - radius_base            # 4  更小尺寸
  typography:
    - pingfang_semibold/font_size_18   # 48 档文案
    - pingfang_semibold/font_size_16   # 44/40 档
    - pingfang_semibold/font_size_14   # 36 档
---

# 按钮 · 视觉规格

> design.md → [主文档](./design.md) · 同 bundle: [variants](./variants.md) · [behaviors](./behaviors.md)

> ⚠️ 暗色是独立态，非浅色重着色。品牌红 `#FF0F23` 浅暗一致；金 / 中性 / 浅红样式暗色换值。

## 色彩（5 样式 × 浅/暗，来源 608:6 实抽）

| 样式 | 浅 默认（底 / 文字） | 浅 按下 | 浅 禁用 | 暗 默认（底 / 文字） |
|---|---|---|---|---|
| 主要（红实心） | `#FF0F23` / `#FFFFFF` | `#DB0B15` | `#FF91A5` / 白字 | `#FF0F23` / `#FFFFFF`（红浅暗一致） |
| 次要（金填充） | `#FFE6C2` / `#80512D` | `#FFDDAD` | 浅化 | `#4A3B29` / `#B38B6D` |
| 次要（浅红填充） | `#FFE8EE` / `#FF0F23` | `#FFCCD7` | 浅化 | `#2A181C` / `#FF707B` |
| 次要（灰） | 灰底 / `#4B5159` | — | `#B4B8BF` | `#1F2226` 区 / 灰字 |
| 文字按钮（无底） | 无底 / `#FF0F23` 或 `#171A26` | — | 灰 `#B4B8BF` | 无底 / 暗字 |

- 按下高亮 overlay：`#FFFFFF@90%`（V16 atom 缺，rgba-suggestion `white-at-90`，沿用 v0.1 flag）。
- 暗色面板底：`#1F2226`。

### 暗态 per-状态（48 档逐节点实测）

| 样式 | 默认 | 点击 | 禁用 | 特殊禁用 |
|---|---|---|---|---|
| 主要（红） | `#FF0F23` | `#FF707B` | `#4B5159` | `#5F2B34` |
| 次要（金） | `#4A3B29` | `#614D35` | `#4B5159` | `#4B5159` |
| 次要（浅红） | `#2A181C` | `#3D2128` | `#4B5159` | `#4B5159` |

> 暗态状态 = 默认 / 点击 / 禁用 / **特殊禁用**（保留色调的禁用）。禁用普遍收敛到中性 `#4B5159`，仅主要红「特殊禁用」保留暗红 `#5F2B34`。已逐节点实测 48 档；其余尺寸暗态色一致（仅几何随尺寸缩放）。

## 尺寸档（7 档，高 / 圆角 / 字号，逐档实测）

| 尺寸 | 高 | 圆角 | 标签字号 |
|---|---|---|---|
| 48 | 48 | `radius_l` 8 | 18 |
| 44 | 44 | `radius_l` 8 | 16 |
| 40 | 40 | `radius_l` 8 | 16 |
| 36 | 36 | `radius_m` 6 | 14 |
| 32 | 32 | `radius_m` 6 | 13 |
| 28 | 28 | `radius_m` 6 | 11 |
| 24 | 24 | `radius_base` 4 | 11 |

> 圆角分组(实测，非推断)：**48/44/40 → 8**、**36/32/28 → 6**、**24 → 4**。48 档内距 L/R 24 · 图标-文字 gap 8（其余档内距待补）。

## 文本行（单行 / 双行）

48 / 44 两档另有**双行文本**变体：主文案（操作按钮）+ 副**辅助说明**（小字号、降透明），样式 × 状态 × 浅暗矩阵与单行一致。详见 [variants.md](./variants.md)。

## 图标

按钮含可选 前/后置图标 slot（演示用 `home`，16~20px，随文字色 currentColor）；图标见 `icon-home`（待单独录入）。
