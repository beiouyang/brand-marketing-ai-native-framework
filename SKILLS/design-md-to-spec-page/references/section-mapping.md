# 章节 ↔ design.md / bundle 字段映射

> SKILL.md Step 3 调用。把 design.md / page-doc bundle 的内容映射到章节模板。
>
> **章节名 / anchor slug 真相源在 [`../../../shared/references/section-anchors.md`](../../../shared/references/section-anchors.md)**（跨 skill 共享）。本文件只描述字段→章节内容的具体映射，不再单独维护章节名 / id。
>
> ⚠️ **v3.0 双 schema**：本文件下述映射是**通用组件 8 要素**（components-base）。**业务组件 7 要素**（product-architecture：定义/行为/类型/结构/设计属性/典型场景/错误示例）的字段映射见 section-anchors.md Schema B 表 + SKILL.md Step 3 的 Schema B 映射表；其中「组件结构」要产出**元素规范表**（必配/可选 · 使用上下限 · 文本字数限制 · 按钮数量）。

---

## v3.0 改造：4 要素 → 8 要素 展开对照

| 旧 4 要素（v2.0-v2.3） | 新 8 要素（v3.0） | 改造逻辑 |
|---|---|---|
| 组件定义 | **What** | 保留一句话定义，增加适用对象与边界。 |
| 组件定义 / 设计原则 | **Why** | 把设计目标、体验目标、业务目标单独展开，避免定义段过重。 |
| 行为准则 | **Principle** | 承载强约束、交互原则、禁止边界。 |
| 设计属性 | **Properties** | 承载类型、结构、尺寸、token、演示 stage。 |
| 设计属性 / 行为准则 | **Hierarchy** | 把信息主次、优先级、强化规则单独成章。 |
| 应用场景 | **Scenario** | 承载正例、反例、多端适配。 |
| 定义 / 关联 / uses_components | **Composition** | 承载与相邻组件、token、资产、模块的组合关系。 |
| API 速查 / ai-schema / Donts | **AI Rule** | 承载 AI 生成约束、参数边界、校验口径。 |

为什么这样展开：
- 规范页更像 wiki 文档，而不是压缩卡片；每章只承担一个决策问题。
- What / Why / Principle / Properties / Hierarchy / Scenario / Composition / AI Rule 能对应设计评审、工程实现和 AI 生成三类读者。
- 页面可见标题不保留 `01/02/.../10` 前缀；顺序由 TOC 的 `<ol>` 和正文阅读顺序表达。anchor 仍保留 `sec-1-*` / `sec-10-*`，用于稳定链接和校验。

---

## 8 要素映射表

### 组件定义 What（anchor `sec-1-what`，必写）

| HTML 子位置 | 来源 |
|---|---|
| `<h1>` 标题 | `frontmatter.name_zh` + `name_en` → "{name_zh} · {name_en} 组件规范" |
| 副标 meta | `frontmatter.relay_source.url` + 关联 Foundation token 列表（来自 `uses_tokens.colors/typography/...` 的类别） |
| 一句话定义 p | `## 一句话定义` 段（bundle: `design.md`；single: 同名段）— 完整一句一段 |
| Basic-only summary | 模型构造 1-2 段 plain 语言入门解读（v0.4.1 pattern：`👉 一句话理解` / `它解决什么` / `为什么有一套规范`） |
| Pro-only 边界对比 | 从 frontmatter `references.uses_components` + 同 `level` 内 sibling 组件推断；无法推断 → 标 ⚠️ TBD |

### 设计目标 Why（anchor `sec-2-why`，必写）

| HTML 子位置 | 来源 |
|---|---|
| 目标概述 | `design.md ## 设计原则` / `## 典型场景` / `## 自动同步发现` 中的目标、背景、价值句 |
| 体验目标 | 模型从定义、原则、场景中提炼 3-5 条用户体验目标 |
| 业务目标 | 模型从场景、边界、转化信息、效率信息中提炼 2-4 条业务目标 |
| 缺失处理 | 未找到明确目标时，保留 `<blockquote class="warn">TBD：设计目标待补充</blockquote>` |

### 行为准则 Principle（anchor `sec-3-principle`，必写）

| HTML 子位置 | 来源 |
|---|---|
| Basic-only summary | 模型构造 4-6 条核心约束（去 token 数字，留语义关键词，适合 PM / 跨职能扫读）|
| Pro 段 ol（≤ 8 条） | `behaviors.md ## 交互` 提炼为编号列表；含数字 / DP / 时长 / 字符限制的必入；`不允许 / 仅 / 强制 / 唯一性 / 非阻断` 类强约束必入 |
| Donts 边界 blockquote | `ai-schema.yaml donts:` 段（如有）+ `behaviors.md ## Donts` 段 |

数据缺失 → 整段标 `⚠️ TBD：本组件 design.md ## 交互 段为空`。

### 设计属性 Properties（anchor `sec-4-properties`，必写）

Properties 合并旧「类型 / 结构 / 布局 / token / stage」内容，按子段组织：

| HTML 子段 | 来源 |
|---|---|
| 综述 p | `variants.md ## 变体维度概览` 第 1 段 |
| Basic-only 决策树 / 拆解 summary | 模型构造（v0.4.1 pattern 3-4：决策树 / 拆解；不堆 token） |
| 类型 card grid | `variants.md` 形态/类型维度 → `.family-grid` / `.type-card` |
| Pro-only 详细规范表 | `variants.md` 各维度表（字阶 × 字重、价格梯度、应用场景）→ `<table>` |
| 演示 stage（必备） | HTML/CSS/SVG 还原（字阶 ladder / 价格 demo / 倒计时 chip / 行高对照），按 SKILL.md Step 4e 视觉优先级与 4e.1 最小配额 |
| 色彩 token swatch | `spec.md` colors 表 → `.color-swatch-grid`（色块 + hex + token 名 + 角色描述） |
| 圆角 / 间距 / 材质 token | `spec.md` radius / spacing / materials 表 → 相应 swatch 或表格 |
| 末尾 preview backup（可选,默认关）| **默认不渲染**;仅当组件视觉无法 HTML/CSS 还原时启用(复杂插画 / 实拍 / 品牌角色等)。字阶 / 价格 / 倒计时 / token swatch / 字族 card 等可前端还原的组件**不需要**(preview.png 作为 bundle 资产仍保留,只是不嵌入 spec-page.html) |

子段标题按组件性质决定：
- 字体类组件 → 字阶 ladder / 价格 demo / 倒计时 chip / 色彩 token swatch / 字族 card grid
- 容器类组件（tabbar / banner）→ 容器圆角 / 间距 / 内部 atom 拆解 / ASCII 框图（pro-only）/ 状态预览 stage
- feedback 类组件（toast / loading）→ 容器 / 图标 / 文字 / 状态预览 / 动效参数

Properties 的演示模块不要省略。Typography 类至少输出 `.size-ladder` / `.price-demo` / `.countdown-demo` / `.line-height-demo` / `.color-swatch-grid` 中 4 类；其它通用组件至少输出 2 类 stage/showcase。

### 信息层级 Hierarchy（anchor `sec-5-hierarchy`，必写）

| HTML 子段 | 来源 |
|---|---|
| 层级总览 | `design.md ## 设计原则` / `spec.md ## 文字` / `variants.md` 中的信息层级描述 |
| 优先级表 | 从标题 / 正文 / 辅助 / 价格 / 权益 / 倒计时 / 操作等信息角色构造表格 |
| 强化规则 | 从字重、字号、颜色、留白、数量限制、Donts 中提炼 |
| 缺失处理 | 缺明确层级时，模型按组件类型给出最小层级草案，并标 `TBD：待设计师确认` |

### 应用场景 Scenario（anchor `sec-6-scenario`，必写）

| HTML 子段 | 来源 |
|---|---|
| 06 综述 p | 1 段引导："下表列出 X 场景下 N 字族 + M 应用标签的典型用法" |
| ✅ 正例段 | `behaviors.md ## 应用场景` 内 ✅ 段每条 → 表 1 行；含场景 / 类型 / 参数 / 文案 / 触发 |
| ❌ Donts 段 | `behaviors.md ## Donts` 段；如 TBD → 渲染 `blockquote class="warn"` + 候选方向列表 |
| 多端适配子段（可选） | `behaviors.md ## 多端适配`（如有） |

如组件是抽象基础组件（无典型业务场景）→ 标 `⚠️ TBD：典型场景待业务录入`。
如 Donts 段 `<!-- TODO -->` 标记 → 渲染 warn blockquote 引用 TODO 内容作"候选方向"。

### 组合关系 Composition（anchor `sec-7-composition`，必写）

| HTML 子段 | 来源 |
|---|---|
| 相邻组件 | `frontmatter.references.uses_components` / `design.md ## 关联` / 同目录 bundle 链接 |
| token 组合 | `design.md/spec.md uses_tokens`，按 color / typography / radius / spacing / materials 分组 |
| 资产组合 | `_assets-cdn.md` / `assets/` / preview / image stage |
| 上下游关系 | `used_by` / backlinks / 场景中的模块引用 |
| 缺失处理 | 无明确组合时，至少列出 bundle 文件、Relay 来源、Foundation token 三类关系 |

### AI 生成规则 AI Rule（anchor `sec-10-ai-rule`，必写）

| HTML 子段 | 来源 |
|---|---|
| 生成目标 | `ai-schema.yaml` meta / design.md 定义 / component slug |
| 可变参数 | `variants.md` 维度、状态、内容类型、size/token 表 |
| 生成规则 | `behaviors.md ## 交互`、`## Donts`、`## 多端适配` 中的强规则 |
| 校验口径 | 必填元素、禁止项、token 绑定、素材引用、降级规则 |
| 缺失处理 | 无 `ai-schema.yaml` 时，模型从 bundle 生成一份人类可读的 AI Rule 摘要，并标 `ai-schema.yaml 待补` |

### 附加段（不重复 8 要素正文，固定在 §10 之后）

| HTML 子位置 | 来源 |
|---|---|
| `## API 速查`（pro-only）| `ai-schema.yaml` 全文要点摘要；若已在 `10 AI Rule` 呈现，可省略重复 API 段 |
| `## 引用` ul | `frontmatter.relay_source.url` + 各 `uses_tokens.*` 类别对应的 token 文件路径 + bundle 同目录文件链 |
| `## 完整 AI Schema` 折叠区 | `<details><summary>` 展开 `<pre>` 渲染 ai-schema.yaml 全文（转义 < 与 &） |
| 底部 meta | "JD APP V16.0 Design System · {name_zh} 规范 · 生成于 {today_iso} · 样式 = Relay 节点 {node_id}" |

---

## 章节模板（每节固定 HTML 结构）

每章节 H2 的格式：

```html
<h2 id="{anchor_slug}">{section_name} <small>{english_name}</small></h2>
```

其中 `{anchor_slug}` 严格按本 skill v3.0 的 8 要素：

| 顺序 | anchor_slug | section_name |
|---|---|---|
| 01 | `sec-1-what` | 组件定义 What |
| 02 | `sec-2-why` | 设计目标 Why |
| 03 | `sec-3-principle` | 行为准则 Principle |
| 04 | `sec-4-properties` | 设计属性 Properties |
| 05 | `sec-5-hierarchy` | 信息层级 Hierarchy |
| 06 | `sec-6-scenario` | 应用场景 Scenario |
| 07 | `sec-7-composition` | 组合关系 Composition |
| 10 | `sec-10-ai-rule` | AI 生成规则 AI Rule |

如果某章节内无内容（来源缺失）→ 在 `<h2>` 后插：

```html
<blockquote class="warn">
  <p>⚠️ <strong>TBD</strong>：本组件 design.md 暂未提供「{section_name}」内容。建议补 design.md 后重跑 /design-md-to-spec-page。</p>
</blockquote>
```

不要省略整个 `<h2>`；8 要素是契约。

---

## ai-schema.yaml 消费规则

> bundle 的 `ai-schema.yaml` 是机器可读的 schema（给 AI / 上下游工具消费）。v3.0 起其要点进入「AI 生成规则 AI Rule」；全文仍可通过 meta / API 速查 / 折叠区呈现。

### 1. `<head>` meta（SEO / AI 探测）

| meta key | ai-schema.yaml 字段 |
|---|---|
| `<meta name="component-slug">` | `meta.slug` |
| `<meta name="component-version">` | `meta.version`（无则 `frontmatter.last_synced`） |
| `<meta name="component-level">` | `meta.level` |
| `<meta name="ai-schema-url">` | bundle 同目录 `./ai-schema.yaml` 相对路径 |

### 2. 附加段「API 速查」(pro-only，10 AI Rule 之后)

| HTML 元素 | ai-schema.yaml 字段 |
|---|---|
| `<h3>API 速查</h3>` | 固定 |
| 字段速查 `<pre>` | 字族枚举 / 字阶梯度 / 应用规则 / 默认值；按 component domain 取最重要 5-8 条 |

若 ai-schema.yaml 不存在 / 字段全空 → 整个「API 速查」段标 `⚠️ TBD: ai-schema.yaml 待补全`。

### 3. 页脚折叠区「完整 AI Schema」

`<details><summary>查看完整 AI Schema</summary>` 折叠展开后 `<pre>` 渲染 ai-schema.yaml **全文**（转义 < 与 &），给 AI agent 一键复制。这是该文件唯一一次"全文出现"。

### 4. ai-schema.yaml 完全缺失

- single 模式 design.md / 未升级到 v0.5.1 bundle 的组件 → 直接跳过 head meta + API 速查 + 折叠区，不报错
- bundle 模式但 ai-schema.yaml 文件不存在 → 标 `⚠️ TBD`，但不阻断渲染

---

## Zone-aware sidebar（v2.1 起）

bg=product-architecture 的组件页在 `<div class="doc">` 左侧渲染一份 13 部门 sidebar，方便业务线设计师在 13 个设计部门之间横向跳转；其它 4 个 zone（knowledge / foundations / ai-mechanism / horizontal）仍走顶部 5-zone nav-only 模式，不渲染 sidebar。

**渲染规则**：

1. sidebar 顶部 `ZONE 04 · 🏗 组织架构` zone tag
2. 第 1 个 group：`页面说明`（链回 zone-level `product-architecture/spec-page.html`）
3. 第 2 个 group：13 部门列表，slug + 中文名 + 状态见下表，已录入部门渲染 `<a>` link、未录入渲染 `<span class="sidebar__link is-placeholder">`；当前部门加 `is-current` class

**当前部门判定**：优先 `frontmatter.design_dept`；缺则从 bundle 路径推断（`product-architecture/<slug>/...`）。

### design_dept slug ↔ 13 部门中文名 对照表

真相源：[`../../../.agents/skills/relay-to-design-md/profiles/jd-v16/controlled-vocab.json`](../../../.agents/skills/relay-to-design-md/profiles/jd-v16/controlled-vocab.json) 的 `design_dept.values`（与 V15 `jd-design-system-md/product-architecture/README.md` 对齐）。

| # | slug | 中文名 | 当前录入状态 |
|---|---|---|---|
| 1 | `search-recommend-foundation` | 搜推与基础产品设计部 | placeholder |
| 2 | `mainstream-shopping` | 黄流导购设计部 | placeholder |
| 3 | `platform-transaction` | 平台交易设计部 | placeholder |
| 4 | `ai-core` | AI 核心产品设计部 | placeholder |
| 5 | `comprehensive-business` | 综合业务设计部 | 已录入（video-tabbar bundle） |
| 6 | `plus-and-new-channels` | PLUS 与新品频道设计部 | placeholder |
| 7 | `value-channel` | 低价频道设计部 | placeholder |
| 8 | `local-life` | 本地生活服务设计部 | placeholder |
| 9 | `brand-and-marketing` | 品牌与营销设计部 | 已录入（campaign-system/typography bundle） |
| 10 | `platform-product` | 平台产品设计部 | placeholder |
| 11 | `merchant-product` | 商家产品设计部 | placeholder |
| 12 | `marketing-and-data` | 营销与数据设计部 | placeholder |
| 13 | `user-research` | 用户研究部 | placeholder |

> 已录入状态由 skill 内 `dept_content_status` 表 hardcoded（每次有新部门首次录入业务时，skill 维护者改这张表 + 重出已有页面）。后续可外置到 `dept_content_status.json`。
