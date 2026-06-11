---
file: design
bundle: page-doc
level: component-base
bg: horizontal
slug: typography
name_zh: "品牌与营销设计部 · 文字规范"
name_en: "Brand & Marketing · Typography Guideline"

owner: "设计与用研部-品牌与营销设计部"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-06-10"
guideline_version: "16.0"

auto_detected:
  level: component-base
  bg: horizontal ⚠️ fallback
  slug: "typography"

relay_source:
  file_id: "2057763035308625921"
  page_id: "0:1595"
  node_id: "13495:87"
  node_name: "文字 Typography"
  node_type: FRAME
  bounds: { w: 5847, h: 26946 }
  url: "https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13495%3A87"

bundle_files:
  - design.md
  - spec.md
  - variants.md
  - behaviors.md
  - CHANGELOG.md
  - _assets-cdn.md

references:
  uses_components:
    - "JD APP 16.0 基础设计规范 / 文字"
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

used_by: []
---

# 品牌与营销设计部 · 文字规范

> 自动同步 2026-06-10 · skill relay-to-design-md v1.2 bundle · Relay [`13495:87`](https://relay.jd.com/file/design?id=2057763035308625921&page_id=0%3A1595&node_id=13495%3A87)

## bundle 文件索引

| 文件 | 内容 |
|---|---|
| **design.md**（本文件） | 定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联 |
| **[spec.md](./spec.md)** | 视觉与结构规格：颜色 token、文字体系、数字表达、图形化字体与资产规则 |
| **[variants.md](./variants.md)** | 文字实现方式、内容类型、字体风格与场景维度 |
| **[behaviors.md](./behaviors.md)** | 使用准则、边界、降级与 Donts |
| **[CHANGELOG.md](./CHANGELOG.md)** | 变更记录 |
| **[_assets-cdn.md](./_assets-cdn.md)** | 图形化字体与示例视觉资产 CDN 清单 |
| spec-page.html | 对外发布页，由 `design-md-to-spec-page` 生成 |

## 一句话定义

文字 Typography 是 Marketing Design System 在 JD APP 16.0 基础文字规范之上的营销扩展，用于统一营销场景中的阅读型文字、数字权益表达与图形化字体使用边界。

## 边界（与相邻规范的关系）

| 边界 | 说明 |
|---|---|
| 与 JD APP 16.0 基础文字规范 | 本规范继承基础字体家族、基准字号梯度、文本间距规则和字重体系；未特殊说明的场景均遵循基础文本规范。 |
| 与营销视觉资产 | 图形化字体、主视觉标题、广告装饰文字等可通过视觉切图或图形资源配置实现，不应替代动态文本。 |
| 与业务组件规格 | 本页定义文字策略与使用原则，不替代具体商卡、feeds、广告位、头图等组件的结构规格。 |
| 与字体授权 / CDN | 字体授权、字体包、CDN 链接需要在资产清单或团队字体资产库中独立登记。 |

## 结构总览

```text
文字 Typography
├─ 基础规范继承
│  ├─ 字体家族
│  ├─ 基准字号梯度
│  ├─ 文本间距规则
│  └─ 字重体系
├─ 文字类型拓展
│  ├─ 前端动态渲染
│  └─ 视觉切图配置 / 图形化字体
├─ 字体应用拓展
│  ├─ 系统字体
│  ├─ 数字表达
│  ├─ 超大字号扩展
│  └─ 营销图形化字体风格示例
│     ├─ 品牌字体
│     ├─ 通用风格
│     ├─ 时尚风格
│     ├─ 活力风格
│     ├─ 传统风格
│     └─ 科技风格
└─ 应用原则
   ├─ 字体使用原则
   ├─ 信息层级原则
   ├─ 模块类型匹配
   └─ 多信息强化控制
```

> 元素级规格、token 与资产规则见 [spec.md](./spec.md)。

## 形态总览

本规范不是交互组件，形态主要由文字实现方式、内容类型与营销表达强度构成。

| 维度 | 取值 | 说明 |
|---|---|---|
| 实现方式 | 前端动态渲染 / 视觉切图配置 | 动态渲染用于可变内容和阅读型内容；切图配置用于主视觉、广告与装饰文本。 |
| 内容类型 | 阅读型内容 / 常规信息 / 视觉强化文案 / 数字表达 | 根据阅读效率、转化目标与氛围表达选择不同文字策略。 |
| 字体类型 | 系统字体 / 图形化字体 / 风格字体 | 系统字体保证稳定可读；图形化字体用于品牌、情绪和营销氛围。 |
| 信息层级 | 主标题 / 价格数字 / 权益信息 / 倒计时 / 商品信息 / 规则说明 | 越接近转化核心，越需要明确强化优先级。 |

> 各维度详细规范见 [variants.md](./variants.md)。

## 风格字体案例

风格字体用于不同营销场景下的字体风格表达。在继承基础字体体系的基础上，根据活动主题与场景特征扩展风格化字体能力，以满足不同视觉表达需求。风格化字体主要用于标题、主题文案及视觉强化内容，不用于阅读型文本内容。

| 案例 | 视觉特征 | 适用场景 | 字体 / 实现 | 案例切图 |
|---|---|---|---|---|
| 品牌字体 | 官方、可信、统一，体现平台品牌识别与品牌气质 | 京东官方品牌露出、品牌活动、平台级营销场景及需要强化官方认知的内容 | 品牌字体 / 京东朗正 2.0 / `jingdonglangzhengti2:Bold` | [brand-font.png](./assets/font-style-cases/brand-font.png) |
| 通用风格 | 严谨、直接、高识别 | 全品类通用的 S 级大促（双11、618）的核心利益点、日常通栏、百亿补贴等强转化且需要极速阅读的场景 | 方正兰亭黑 简体、造字工坊方黑 / `FZLanTingHeiS:SemiBold`、`FZLanTingHeiS:Bold`、`造字工房方黑体:Regular` | [general-style.png](./assets/font-style-cases/general-style.png) |
| 时尚风格 | 精致、轻盈、高级 | 美妆护肤、服饰箱包、奢侈品、会员日及女性向营销场景 | 造字工房逸锋体、造字工房书见体 / `造字工房逸锋体:Regular`、`造字工房书见体:Regular` | [fashion-style.png](./assets/font-style-cases/fashion-style.png) |
| 活力风格 | 年轻、亲和、趣味 | 零食生鲜、母婴亲子、开学季、出游季、宠物节等年轻化营销场景 | 造字工房薄荷海盐体、造字工房简圆、得意黑 / `造字工房薄荷海盐体:Regular`、`造字工房简圆体:Regular`、`Smiley-Sans:Oblique` | [vitality-style.png](./assets/font-style-cases/vitality-style.png) |
| 传统风格 | 文化感、节庆感、仪式感 | 春节、中秋节、端午节、国潮主题及传统文化营销场景 | 方正黑隶简体、汉仪永字蓬莱、汉仪杰龙桃花源 / `FZHeiLiS:Bold`、`HYYongZiPengLai:W`、`HYJieLongTaoHuaYuan:W` | [traditional-style.png](./assets/font-style-cases/traditional-style.png) |
| 科技风格 | 理性、未来感、秩序感 | 3C 数码、家电、智能设备及科技主题营销场景 | 方正摩登体、造字工房启黑体 / `FZMoDengTiS:Bold`、`造字工房启黑体:Regular` | [tech-style.png](./assets/font-style-cases/tech-style.png) |

> 案例切图用于发布页稳定展示。字体包、授权、CDN 状态见 [_assets-cdn.md](./_assets-cdn.md)。

## 设计原则

1. 系统字体优先用于动态渲染与阅读型内容，图形化字体优先用于视觉强化与品牌表达场景。
2. 需通过字号、字重、颜色与留白建立明确的信息主次关系，保证核心信息具备清晰视觉聚焦能力。
3. 阅读型模块优先保证阅读效率，适用于商卡、feeds、商品信息等内容浏览场景。
4. 强化型模块优先突出核心信息，适用于头图、广告位、主视觉等视觉强化场景。
5. 字体强化应优先服务于优惠力度、价格、主标题等核心信息表达，避免装饰性表达干扰阅读效率。
6. 多行文本场景下，应通过合理行间距控制阅读节奏，避免信息拥挤或留白失衡。
7. 避免多个高强度信息同时强化，影响页面视觉节奏与浏览体验。

## 典型场景

| 场景 | 推荐文字策略 |
|---|---|
| 商卡、feeds、商品信息 | 使用系统字体和基础阅读型字号，优先保证扫读效率。 |
| 权益优惠、补贴折扣、价格利益点 | 使用数字表达扩展，控制数字与单位、说明文字的层级关系。 |
| 倒计时、限时促销 | 使用稳定可读的数字样式，保证变化状态下的宽度与节奏稳定。 |
| 主视觉标题、广告位 | 可使用图形化字体或视觉切图，强化主题与品牌氛围。 |
| 品牌官方露出、平台级营销 | 使用品牌字体案例，保证京东品牌识别统一。 |
| 美妆、奢侈品、会员日 | 使用时尚风格字体，强调精致、轻盈与高级感。 |
| 零食、生鲜、母婴、宠物、出游 | 使用活力风格字体，强调年轻、亲和与趣味感。 |
| 3C 数码、家电、智能设备 | 可使用科技风格字体，表达理性、未来感与秩序感。 |
| 年货节、传统节庆、国潮礼赠 | 使用传统风格字体，但需控制正文阅读负担。 |

> 使用边界、Donts 与降级见 [behaviors.md](./behaviors.md)。

## 关联

- 此规范归属：`level: component-base`，`bg: horizontal`
- 来源系统：`JD APP 16.0 GUIDELINE / Marketing Design System`
- 设计部门：设计与用研部-品牌与营销设计部
- V16 Foundation 引用：JD APP 16.0 基础设计规范 / 文字
- 资产登记：见 [_assets-cdn.md](./_assets-cdn.md)

## 变更记录

见 [CHANGELOG.md](./CHANGELOG.md)。

---

## 自动同步发现

| 类型 | 级别 | 说明 |
|---|---|---|
| Relay 只读模式 | 中 | 2026-06-09 重试后，`use_design_script` 仍被只读模式阻止；本 bundle 基于 `get_design_context`、`get_design_metadata`、`get_variables` 与已确认 outline 生成。 |
| token-binding | 中 | Token 绑定已改用 proposal 本地真相源 `jd-design-system-md-v16/foundations/tokens/tokens.json`；Relay 营销页部分中文变量值与正式 V16 token hex 不完全一致，详见 [spec.md](./spec.md) 色彩表。 |
| asset-cdn | 中 | 图形化字体示例已补 6 张本地案例切图，仍需由 Relay 原始导出件复核并补 CDN。 |
| path-fallback | 低 | 当前按 `component-base / horizontal` 写入；如团队确认应归入 Marketing Design System 独立目录，需迁移路径并同步 INDEX。 |
