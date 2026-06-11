---
token_category: typography
version: 16.0
last_updated: 2026-06-02
relay_source:
  file_id: "2029484645871009793"
  page_id: "12:261"
  token_frame: "363:655"
  spec_frame: "297:165"   # 「文本 Text Styles」— 真相源(30 个 role 组合 token)
  url: https://relay.jd.com/file/design?id=2029484645871009793&page_id=12%3A261&node_id=297%3A165
v15_predecessor: ../../../jd-design-system-md/foundations/tokens/typography.md
relay_changelog:
  - "2026-04-03 ｜ 周峯 ｜ 创建"
  - "2026-04-17 ｜ 周峯 ｜ 行高向下取整偶数(注:实际真值并非严格 floor,见 §1.4)"
extraction_status: tokens 100%(2026-06-02 从 spec_frame 297:165 get_variables 全量校准)
---

# 字体 Token · V16.0

> V16.0 字体 token 三层：**Family**（字族）× **Size**（字阶）× **Weight**（字重）。组件层引用 **Role 组合 token**（如 `pingfang_regular/font_size_14_400` = PingFang SC 14pt 400）。
>
> 真相源 = Relay「文本 Text Styles」spec frame `297:165`（页眉已是 **JD APP 16.0 GUIDELINE**）。本文 token 真值（size / lineHeight / family）于 2026-06-02 用 `get_variables` 全量重抽校准。**Relay frame 命名残留旧草稿**（4 个分组的 frame name 全叫 `pingfang_regular`），以截图渲染的分组标题为准。

---

## 🚩 V15 → V16 重大变化

| 维度 | V15.0 | V16.0 |
|---|---|---|
| **字阶** | 5 通用（10/12/14/15/18）+ 3 价格专用（24/18/15） | **8 阶（10/11/12/13/14/16/18/24）** 通用，价格融入通用字阶 |
| **删除字号** | — | ❌ **仅 15pt**（被 16 替代） |
| **新增字号** | — | ✅ **11pt、13pt、16pt**（更细粒度；12pt 保留） |
| **字族命名** | `brand` / `sans` / `number` | **`pingfang` / `zhenghei`**（直用字体名） |
| **数字字体版本** | 京东正黑 V2.2 | **京东正黑 V2.3**（升版） |
| **品牌字体** | 京东朗正体 V2.0 | ❌ 文字变量页未出现，V16 移除 |
| **字重** | regular(400) / semibold(600) / **bold(700)** | regular(400) / semibold(600)；**bold 700 移除** |
| **role 命名** | `typography.role.heading-page` 等 9 个 | **`{group}/font_size_{size}_{weight}` 组合 token**（30 组） |
| **正文/注解结构** | 单一 12/14 阶 | **「平台场景」(12/14) 与「等距场景」(11/13) 双轨**（见 §2.1） |
| **行高规则** | "字号 × 1.5，奇数 -1" | 行高随 token 固化为真值（§1.4，非严格 floor 偶数） |

> ⚠️ 旧版本文档曾写「删除 12pt」——**错误，已更正**。12pt 在 V16 文字变量页真实存在（`pingfang_regular/font_size_12_400` 等，lineHeight 16）。V16 实际只删了 **15pt**。

---

## 1. Atom 层（L1）

### 1.1 Font Family · 2 个

| Atom | 字体 | 用途 | v16 status | v15 对应 |
|---|---|---|---|---|
| `pingfang` | PingFang SC | 文字 / 标题 / 标签 主力 | **upgraded** | `typography.family.sans` |
| `zhenghei` | **京东正黑 V2.3** | **数字 / 价格 / 金额** 专用 | **upgraded（V2.2→V2.3）** | `typography.family.number` |
| ~~`xiangzheng`~~ | ~~京东朗正体 V2.0~~ | ~~品牌字体~~ | **deprecated** | `typography.family.brand` |

> 京东朗正体（V15 brand 字体）在 V16 文字变量页未出现，确认移除。Relay 变量真值里 zhenghei family 字符串为 `"京东正黑-V2.3"`。

### 1.2 Font Size · 8 阶

> 真值来自 spec_frame `297:165` 的 `get_variables`。lineHeight 为每个 token 实际固化值（letterSpacing 全部 = 0）。

| Atom (Numeric) | line-height | 适用字族 | v16 status | v15 对应 |
|---|---|---|---|---|
| `font_size_10` | 14 | pingfang / zhenghei | **upgraded** | `size.10` |
| `font_size_11` | 16 | pingfang / zhenghei | **new** | — |
| `font_size_12` | 16 | pingfang / zhenghei | **unchanged（保留）** | `size.12` |
| `font_size_13` | 20 | pingfang / zhenghei | **new** | — |
| `font_size_14` | 22 | pingfang / zhenghei | **upgraded** | `size.14`（行高 21→22）|
| `font_size_16` | 24 | pingfang / zhenghei | **new** | —（替代 V15 15pt）|
| `font_size_18` | 26 | pingfang / zhenghei | **upgraded** | `size.18` + `size.special.price-m` |
| `font_size_24` | 36 | **仅 zhenghei** | **upgraded + decoupled** | `size.special.price-l`（V15 价格专用 → V16 通用字阶）|

> ❗ T-shirt size 别名（`font_size_xxs … font_size_xxl`）**在 Relay 变量源中不存在**——属此前文档的提案命名，未被设计稿采纳，故移除。如需语义别名应作为 wiki 侧约定单独提案，不可声称源自 Relay。

**Rationale**：
- **删除 15pt**：被 16pt 替代（更整齐）。
- **新增 11 / 13 / 16pt**：11/13 服务「等距场景」双轨（§2.1），16 接替 15。
- **保留 12pt**：作为「平台场景」辅助说明字号。
- **价格字号 24 融入通用字阶**：V15 放 `size.special.price-l` 子树，V16 升为 `font_size_24` 通用层（仅 zhenghei 用）→ 解耦。

### 1.3 Font Weight · 2 个

| Atom | token 后缀 | 场景说明 | v16 status | v15 对应 |
|---|---|---|---|---|
| `regular` | `_400` | 常规内容 | **upgraded** | `weight.regular` |
| `semibold` | `_600` | 强化内容 | **upgraded** | `weight.semibold` |
| ~~`bold`~~ | ~~`_700`~~ | ~~价格 / 数字限定~~ | **deprecated** | `weight.bold` |

> ⚠️ **Relay `weight:` 数值字段不可信**：变量真值里同一组 token 的 `weight:` 字段时而 400 / 600 / 700 混乱（如 `pingfang_semibold/font_size_12_600` 显示 weight 600，`zhenghei_bold/font_size_12_600` 显示 700，其余多显示 400）。**权重以 token 名后缀 `_400`/`_600` 为准**——全体只有 400 与 600 两档。
>
> `zhenghei_bold` 分组的 `style` 字段标 `Bold`，但 token 后缀是 `_600`、实际等同 semibold。即「zhenghei 强化态 = 600」，无独立 700。V15 的 `weight.bold = 700` 在 V16 不存在。

### 1.4 Line Height（随 token 固化为真值）

V16 行高不再用单一公式，而是每个字号固化一个真值（见 §1.2）：

| 字号 | 10 | 11 | 12 | 13 | 14 | 16 | 18 | 24 |
|---|---|---|---|---|---|---|---|---|
| **行高** | 14 | 16 | 16 | 20 | 22 | 24 | 26 | 36 |

> 2026-04-17 changelog 写「行高向下取整偶数」，但真值并非严格 `floor(size×1.5, even)`：
> - `14×1.5=21` → 真值 **22**（向上而非向下）
> - `12×1.5=18` → 真值 **16**（明显更紧，非 1.5×）
>
> 故本文以**逐 token 真值表**为准，不再声称统一公式。12pt 行高 16 是刻意收紧的特例。

### 1.5 Letter Spacing

全体 token `letterSpacing = 0`（沿用 V15 默认）。

---

## 2. Role 层（L2）· 30 个组合 token

> spec_frame `297:165` 分 4 组。命名 `{group}/font_size_{size}_{weight}`，例：`pingfang_regular/font_size_14_400` = PingFang SC 14pt 400。每组场景标注取自截图渲染的 `语意化命名`。

### 2.1 pingfang_regular（PingFang SC + 400）· 7 个

> 文字主力。注意 V16 把正文/注解拆成**「平台场景」与「等距场景」双轨**：
> - **平台场景**：`12`（辅助说明）+ `14`（正文）— 通用主轨
> - **等距场景**：`11`（辅助说明）+ `13`（正文）— 紧凑轨（用于等距/密集排布场景）

| Token | 字号 | 行高 | 场景（语意化命名） |
|---|---|---|---|
| `pingfang_regular/font_size_10_400` | 10 | 14 | 标签文字 |
| `pingfang_regular/font_size_11_400` | 11 | 16 | 等距场景辅助说明 |
| `pingfang_regular/font_size_12_400` | 12 | 16 | 平台场景辅助说明 |
| `pingfang_regular/font_size_13_400` | 13 | 20 | 等距场景正文 |
| `pingfang_regular/font_size_14_400` | 14 | 22 | 平台场景正文 |
| `pingfang_regular/font_size_16_400` | 16 | 24 | 模块标题 |
| `pingfang_regular/font_size_18_400` | 18 | 26 | 页面标题 |

### 2.2 pingfang_semibold（PingFang SC + 600）· 7 个

> 与 §2.1 同字号、同场景的**强化态**（标题 / Tab 选中 / 强调）。

| Token | 字号 | 行高 | 场景 |
|---|---|---|---|
| `pingfang_semibold/font_size_10_600` | 10 | 14 | 标签文字（强化） |
| `pingfang_semibold/font_size_11_600` | 11 | 16 | 等距场景辅助说明（强化） |
| `pingfang_semibold/font_size_12_600` | 12 | 16 | 平台场景辅助说明（强化） |
| `pingfang_semibold/font_size_13_600` | 13 | 20 | 等距场景正文（强化） |
| `pingfang_semibold/font_size_14_600` | 14 | 22 | 平台场景正文（强化） |
| `pingfang_semibold/font_size_16_600` | 16 | 24 | 模块标题 |
| `pingfang_semibold/font_size_18_600` | 18 | 26 | 页面标题 |

### 2.3 zhenghei_regular（京东正黑 V2.3 + 400）· 8 个

> 数字 / 价格 / 金额常规态。

| Token | 字号 | 行高 | 场景 |
|---|---|---|---|
| `zhenghei_regular/font_size_10_400` | 10 | 14 | 标签内金额 |
| `zhenghei_regular/font_size_11_400` | 11 | 16 | 搭配同字号汉字或币种符号、角分 |
| `zhenghei_regular/font_size_12_400` | 12 | 16 | 狭小空间商品价格 |
| `zhenghei_regular/font_size_13_400` | 13 | 20 | 商品价格 |
| `zhenghei_regular/font_size_14_400` | 14 | 22 | 普通商卡价格 |
| `zhenghei_regular/font_size_16_400` | 16 | 24 | 重复型主价格（搜推、交易、订单）|
| `zhenghei_regular/font_size_18_400` | 18 | 26 | 模块级总价格（购物车、结算底部条）|
| `zhenghei_regular/font_size_24_400` | 24 | 36 | 页面级最重要价格（商详、收银台）|

### 2.4 zhenghei_bold（京东正黑 V2.3 + 600）· 8 个

> 数字 / 价格 / 金额强化态。Relay `style` 标 `Bold`，但 token 后缀 `_600`、**实际 weight = 600**（同 semibold），非 700。

| Token | 字号 | 行高 | 场景 |
|---|---|---|---|
| `zhenghei_bold/font_size_10_600` | 10 | 14 | 标签内金额 |
| `zhenghei_bold/font_size_11_600` | 11 | 16 | 搭配同字号汉字或币种符号、角分 |
| `zhenghei_bold/font_size_12_600` | 12 | 16 | 狭小空间商品价格 |
| `zhenghei_bold/font_size_13_600` | 13 | 20 | 商品价格 |
| `zhenghei_bold/font_size_14_600` | 14 | 22 | 普通商卡价格 |
| `zhenghei_bold/font_size_16_600` | 16 | 24 | 重复型主价格 |
| `zhenghei_bold/font_size_18_600` | 18 | 26 | 模块级总价格 |
| `zhenghei_bold/font_size_24_600` | 24 | 36 | 页面级最重要价格 |

> ⚠️ **命名歧义提示**：token 名后缀 `font_size_14_400` 在 pingfang / zhenghei 两族重名，靠 `{group}/` 前缀区分。引用时**务必带分组前缀**（`pingfang_regular/…` vs `zhenghei_regular/…`），不要裸用 `font_size_14_400`。

---

## 3. 与 V15.0 role token 的对照

| V15 role | V15 值 | V16 等价组合 | v16 status |
|---|---|---|---|
| `heading-page` | 18 + semibold + sans | `pingfang_semibold/font_size_18_600` | **upgraded** |
| `heading-module` | 15 + semibold + sans | `pingfang_semibold/font_size_16_600`（15→16）| **upgraded** |
| `body-standard` | 14 + regular + sans | `pingfang_regular/font_size_14_400`（平台场景正文）| **upgraded**（行高 21→22）|
| `body-secondary` | 12 + regular + sans | `pingfang_regular/font_size_12_400`（平台场景辅助说明）| **unchanged** |
| `label` | 10 + regular + sans | `pingfang_regular/font_size_10_400` | **unchanged** |
| — | — | `pingfang_regular/font_size_11_400 / 13_400`（等距场景双轨）| **new** |
| `price-large` | 24 + bold + number | `zhenghei_bold/font_size_24_600`（bold700→600）| **upgraded** |
| `price-medium` | 18 + bold + number | `zhenghei_bold/font_size_18_600` | **upgraded** |
| `price-small` | 15 + bold + number | `zhenghei_bold/font_size_16_600`（15→16）| **upgraded** |
| `price-strikethrough` | 12 + regular + number | `zhenghei_regular/font_size_12_400` | **upgraded** |

---

## 4. 场景越界字号处理（issue #78）

JDSP-Design-System（Relay 1958）沉浸视频流场景用了 `9 / 11 / 16 / 20pt`。V16 8 阶字阶（`10/11/12/13/14/16/18/24`）覆盖情况：

| JDSP 字号 | 场景 | V16 状态 | 处理 |
|---|---|---|---|
| `11pt` | 互动计数 | ✅ 合规（`font_size_11`）| 直接引用 |
| `16pt` | 昵称 | ✅ 合规（`font_size_16`）| 直接引用 |
| `9pt` | — | ❌ 越界（最小 10）| **回落 10pt** |
| `20pt` | — | ❌ 越界 | **回落 18 或 24pt**（按视觉测试取）|

> **场景例外清单口子（未启用）**：若某沉浸场景视觉验证证明 9pt / 20pt 真不可回落，开 `typography-scene-exceptions.md` 单独登记，只允许 `scene.*` 命名空间引用，不污染主稿 8 阶基梯。目前 0 例外，清单文件不建。

---

## 待办

- [ ] `font_size_24` 是否仅 zhenghei 使用、pingfang 是否永不需要 24pt 标题 —— 向设计师确认
- [ ] 「等距场景 vs 平台场景」的判定边界（哪些页面/容器算等距场景）需要在 layout 规范里给出明确判据
- [ ] `pingfang_semibold/font_size_12_600` 与 `zhenghei_bold/font_size_12_600` 的 Relay `weight:` 字段异常（600 / 700）—— 建议反馈设计组修正变量元数据，避免误读
- [ ] 写 `../visual/typography.md` 用法规范（双轨场景选择 + 价格字号 family 强制 zhenghei）
- [ ] T-shirt size 语义别名是否需要作为 wiki 侧约定单独提案（当前 Relay 无）
