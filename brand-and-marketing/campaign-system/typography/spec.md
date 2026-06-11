---
file: spec
bundle_part_of: design.md
slug: typography
last_synced: "2026-06-10"

uses_tokens:
  colors:
    - "color_title"
    - "color_text"
    - "color_text_help"
    - "color_primary"
    - "color_border"
    - "color_background"
    - "color_mask_fault_toleran"
    - "atom.gray.7"
    - "atom.mask.1"
    - "atom.mask.2"
  typography:
    - "pingfang_regular/font_size_14_400"
    - "pingfang_semibold/font_size_16_600"
    - "zhenghei_bold/font_size_24_600"
  radius: []
  spacing: []
  materials: []
---

# 文字 · 视觉规范

> design.md → [主文档](./design.md) · 同 bundle: [variants](./variants.md) · [behaviors](./behaviors.md)

## 预览

当前 Relay 可读取整页视觉预览，但未导出本地 `preview.png`。正式发布前建议补充 Typography 全页预览或关键示例截图。

## 色彩

Token 绑定来源：`/Users/shaoziyan1/Desktop/👀YANYAN'S Dev/Projects📁/jd-design-wiki-proposal/jd-design-system-md-v16/foundations/tokens/tokens.json`。

| Relay 变量 | Relay 值 | 绑定 token | proposal token 真值 | 状态 | 用途 |
|---|---|---|---|---|---|
| `基础颜色/文本色/一级文本` | `#171a26` | `color_title` | `#11141a` | 语义绑定，hex 待校准 | 标题、重点信息、核心营销文字 |
| `基础颜色/文本色/二级文本` | `#3d414d` | `color_text` | `#5a5e66` | 语义绑定，hex 待校准 | 正文说明、规则说明、次级内容 |
| `基础颜色/文本色/三级文本` | `#828794` | `color_text_help` | `#8d9199` | 语义绑定，hex 待校准 | 辅助说明、弱化信息 |
| `基础颜色/品牌色/color-brand-primary` | `#ff0f23` | `color_primary` | `#ff0f23` | 精确命中 | 品牌强调、营销背景、权益强化 |
| `线 Line（颜色）/color_border` | `#11141a14` | `color_border` / `atom.mask.2` | `#11141a14` | 精确命中 | 组件边界、表格边界 |
| `基础颜色/线/间隔线` | `#00000014` | `color_border` | `#11141a14` | 语义绑定，alpha 色源不同 | 表格分隔、段落分隔 |
| `基础颜色/背景色/页面背景` | `#f2f3f7` | `color_background` | `#f2f4f7` | 语义绑定，hex 待校准 | 页面与模块浅底 |
| `灰阶/gray_10` | `#11141a05` | `color_mask_fault_toleran` / `atom.mask.1` | `#11141a05` | 精确命中 | 页头浅背景 |
| `灰阶/gray_9` | `#11141a14` | `color_border` / `atom.mask.2` | `#11141a14` | 精确命中 | 页头分割线 |
| `灰阶/gray_1` | `#11141a` | `atom.gray.7` | `#11141a` | 精确命中 | 页头文字 |

> 注：`#171a26 / #3d414d / #828794 / #f2f3f7` 是 Marketing 页面及 proposal 现有 spec-page 常用 UI 色值；proposal 的正式 `tokens.json` 对应语义 token 真值为 `#11141a / #5a5e66 / #8d9199 / #f2f4f7`。当前文档保留 Relay 值，同时绑定到正式语义 token，并标记为待校准。

## 文字

### 基础规范继承

| 项 | 规则 |
|---|---|
| 字体家族 | 继承 JD APP 16.0 基础文字规范，动态渲染优先使用 `pingfang_*` 系统字体 token。 |
| 基准字号梯度 | 阅读型内容、常规信息层级沿用基础字号梯度。 |
| 文本间距规则 | 多行文本使用基础文本间距规则控制阅读节奏。 |
| 字重体系 | 继承基础字重体系，通过字重与字号共同建立信息层级。 |

### 数字表达

| 用途 | 说明 |
|---|---|
| 权益优惠 | 用于补贴、折扣、满减等利益点传递。 |
| 商品价值强化 | 用于价格、优惠力度、价值感信息突出。 |
| 倒计时 | 用于限时促销、活动节奏提示。 |
| 信息密度适配 | 在基础数字梯度上按营销阅读节奏做功能性扩展。 |

数字字号扩展仍属于基础阅读型体系，不作为视觉强化字号使用。可优先从 `zhenghei_regular/*` 与 `zhenghei_bold/*` 数字 token 中选择；超大字号应基于视觉聚焦强度、场景表达需求与页面能量层级进行递进扩展，而不是按照固定字号差值机械递增。

### 图形化字体

| 项 | 规则 |
|---|---|
| 实现方式 | 视觉切图或图形资源配置。 |
| 适用场景 | 主视觉标题、视觉强化文案、广告、营销装饰文本。 |
| 使用边界 | 不用于动态文本及阅读型内容。 |
| 资产要求 | 字体授权、切图节点、CDN、可商用范围需要独立登记。 |

### 风格字体案例

风格字体案例必须以静态切图 / SVG / PNG 作为规范页主展示，避免浏览器因缺少字体包回退为系统字体。HTML 字体预览只能作为辅助能力，不能替代案例切图。

| 案例 | Relay 节点 | 字体 / 实现 | 切图路径 | 状态 |
|---|---|---|---|---|
| 品牌字体 | `13533:20` | 京东朗正 2.0 / `jingdonglangzhengti2:Bold` | `./assets/font-style-cases/brand-font.png` | 本地切图，待 Relay 原始导出件复核 |
| 通用风格 | `13533:27` | 方正兰亭黑 简体、造字工坊方黑 / `FZLanTingHeiS:SemiBold`、`FZLanTingHeiS:Bold`、`造字工房方黑体:Regular` | `./assets/font-style-cases/general-style.png` | 本地切图，待 Relay 原始导出件复核 |
| 时尚风格 | `13533:36` | 造字工房逸锋体、造字工房书见体 / `造字工房逸锋体:Regular`、`造字工房书见体:Regular` | `./assets/font-style-cases/fashion-style.png` | 本地切图，待 Relay 原始导出件复核 |
| 活力风格 | `13533:47` | 造字工房薄荷海盐体、造字工房简圆、得意黑 / `造字工房薄荷海盐体:Regular`、`造字工房简圆体:Regular`、`Smiley-Sans:Oblique` | `./assets/font-style-cases/vitality-style.png` | 本地切图，待 Relay 原始导出件复核 |
| 传统风格 | `13533:56` | 方正黑隶简体、汉仪永字蓬莱、汉仪杰龙桃花源 / `FZHeiLiS:Bold`、`HYYongZiPengLai:W`、`HYJieLongTaoHuaYuan:W` | `./assets/font-style-cases/traditional-style.png` | 本地切图，待 Relay 原始导出件复核 |
| 科技风格 | `13533:67` | 方正摩登体、造字工房启黑体 / `FZMoDengTiS:Bold`、`造字工房启黑体:Regular` | `./assets/font-style-cases/tech-style.png` | 本地切图，待 Relay 原始导出件复核 |

#### 切图规范

| 项 | 规则 |
|---|---|
| 尺寸 | 当前本地切图为 `760 x 300`，后续 CDN 版本需保持同等比例或在 spec-page 中注明变更。 |
| 内容 | 每张切图展示对应风格下的「真低价 / 低至5折」营销案例组。 |
| 文本可读性 | 切图只承担视觉示例；案例名称、字体名称、适用场景必须同时以 Markdown 文本结构化记录。 |
| 授权 | 字体包、商用边界、CDN URL 统一登记到 [_assets-cdn.md](./_assets-cdn.md)。 |
| 回退 | 未拿到原始 Relay 导出件前，本地切图可用于评审，但正式发布需复核。 |

## 圆角

本规范未定义独立圆角规则。涉及卡片、标签、按钮、容器时，遵循对应组件规范或 JD APP 16.0 基础圆角 token。

## 间距 / 布局

| 场景 | 规则 |
|---|---|
| 阅读型模块 | 保持稳定行高与段落间距，优先保证阅读效率。 |
| 强化型模块 | 用留白、字号、字重和颜色建立聚焦层级。 |
| 多行文本 | 控制行间距，避免信息拥挤或留白失衡。 |
| 多重点信息 | 避免多个高强度信息同时强化。 |

## 材质

本规范未定义独立材质。营销字体示例中的背景、装饰、插画、Logo、案例切图等属于视觉资产，应进入 [_assets-cdn.md](./_assets-cdn.md) 管理。

---

## 章节原文（结构化摘录）

- 基于 JD APP 16.0 设计系统-文字基础上进行营销设计的继承与扩展。
- 基础文字规范应用于阅读型内容、常规信息层级。
- 未特殊说明场景，均遵循基础文本规范。
- 系统字体优先用于动态渲染与阅读型内容；图形化字体优先用于视觉强化与品牌表达场景。
- 数字表达用于权益优惠传递、补贴折扣、商品价值强化、倒计时等数字信息表达。
- 风格字体案例以静态切图作为规范页主展示，避免缺少字体包导致系统字体回退。
