---
file: spec
bundle_part_of: design.md
slug: toolbar-general
last_synced: "2026-06-02"

# bundle: 视觉与结构规格（token 浅/暗双列）。relay_source 单点存储在 design.md。
uses_tokens:
  colors:
    - color_primary          # #ff0f23 主操作红 / 价格 / 优惠
    - white                  # #ffffff 主按钮文字 / 浅色面板
    - gray_1                 # #11141a 导航图标 / 店铺 tab 默认
  radius:
    - radius_l               # 8  标准 / 去结算
    - radius_m               # 6  小尺寸（订详）
    - radius_xl              # 12 结算栏容器
  typography:
    - pingfang_semibold/font_size_16   # 按钮文字
    - jd_zhenghei_v2_3                 # 价格数字（京东正黑 V2.3 子集）
---

# 底部工具栏 · 视觉规范

> design.md → [主文档](./design.md) · 同 bundle: [variants](./variants.md) · [behaviors](./behaviors.md)

> ⚠️ 暗色是独立态，非浅色重着色。中性色浅暗不同；品牌红 `#FF0F23` 浅暗一致。

## 容器（浅 / 暗双列）

| 属性 | 浅色 | 暗色 |
|---|---|---|
| docked bar 背景 | `linear-gradient(0deg, rgba(255,255,255,.70) 56%, rgba(255,255,255,.40) 100%)` | 同结构；底板 `#14171A` |
| docked bar 投影 | `0 .5px 0 #fff inset, 0 8px 40px rgba(0,0,0,.12)` | inset `#1F2226` |
| docked bar 尺寸 | w375 · padding T8/B34/L8/R8 · gap8 · 内容 h44 | 同 |
| 结算栏 | bg `#fff` · radius12 · shadow `0 8px 40px rgba(0,0,0,.12)` | bg `#1F2226` · 同 |

## 按钮（4 色 × 3 档）

| 角色 | 浅 背景 / 文字 | 暗 背景 / 文字 |
|---|---|---|
| 主要（红） | `#FF0F23` / `#fff` | `#FF0F23` / `#fff` |
| 次要（金） | `#FFE6C2` / `#80512D` | `#4A3B29` / `#B38B6D` |
| 次要（灰） | `#F0F2F7` / `#5A5E66` | —（订详暗色待补，⚠️ wiki gap） |
| 医保（蓝） | `#0C82F7` / `#fff` | `#60A5FA` / `#fff`（暗色亮蓝，非 #0C82F7） |

尺寸三档：标准 44/r8/16·600 · 去结算 40/r8 · 小 36/r6/min-w72。双按钮两种拼法：分离（gap8）/ 拼接（segmented）。

## 结算栏专属 + 凑单进度条

| 元素 | 浅 | 暗 |
|---|---|---|
| 全选选择框 16×16 r8 sw1 | 填 `#fff`/边 `#B4B8BF` | 填 `#1F2226`/边 `#4B5159` |
| 全选文字 13/400 | `#5A5E66` | `#A1A9B3` |
| 价格（京东正黑 V2.3，全红） | ¥14·整数18·小数14 / `#FF0F23` | 同 |
| 副说明中性 10/400 | `#8D9199` | `#717985` |
| 凑单促销条底 | `#FFEDEF` | `#3D2529` |
| 凑单进度条（底 2px） | 轨 `#FF0F23 @20%` + 实填 `#FF0F23`（217/351≈62%） | 同 |

> ⚠️ 底部那条是**进度条**（实心填充表进度），不是撕边虚线。副说明**分段两色**（中性灰 + 优惠红），勿整条涂红。

## 图标 / 字体

图标见 `_assets-cdn.md`（exportAsync 真 SVG，单色 currentColor 适配深浅）。价格数字用京东正黑 V2.3（数字子集），汉字 PingFang SC。
