---
token_category: color
version: 16.0
last_updated: 2026-06-02
relay_source:
  file_id: "2029484645871009793"
  page_id: "58:9"   # ↘️ 语义化统一(语义 token);原子色板在 page 6:9「↘️ 色彩 Colors」
  variable_collections:
    - "12:2"      # ↘️ 色彩 Colors(43 atom,日间/暗色双模式)
    - "334:915"   # 语义化统一变量(45,含 36 color + radius/line 引用)
  url: https://relay.jd.com/file/design?id=2029484645871009793&page_id=58%3A9
v15_predecessor: ../../../jd-design-system-md/foundations/tokens/color.md
extraction_status:
  semantic_tokens: 36 / 36（语义 color token,atom 映射 100%）
  atom_hex_values: 43 / 43（Light + Dark,2026-06-02 从变量集合 getVariableByIdAsync 全量解析）
  dark_variants: DONE（每个 atom 含日间/暗色两套真值）
---

# 色彩 Token · V16.0

> V16.0 色彩体系是 **3 层架构**：组件 → **Semantic Token**（语义，`color_*`）→ **Atom**（原子色板）→ Hex（含 Light / Dark 双模式）。
>
> 本文 token 真值于 2026-06-02 直接从 Relay 变量集合解析：原子色板集合 `↘️ 色彩 Colors`（id `12:2`，43 atom，含 **日间模式 + 暗色模式** 两套真值），语义集合 `语义化统一变量`（id `334:915`，36 个 color semantic token + radius/line 引用）。
>
> ⚠️ **旧版 color.md 多处 atom 映射有误**（如 `color_title→gray_1`、mask 系列→`gray_8/9/10`、error→`errorred`），本次按变量真值全量更正。

---

## 🚩 V15.0 → V16.0 重大变化

| 变化 | V15.0 | V16.0 |
|---|---|---|
| **架构** | Token → Hex 直给（混层） | Token → Atom → Hex（3 层解耦，atom 带 Light/Dark） |
| **命名** | `color.brand.primary`（dot 层级） | `color_primary`（snake 平铺） |
| **Error/Danger** | `semantic.danger = brand.primary = #ff0f23`（共色，wash 区分） | **`color_error` 独立色族「错误红 danger」**（`#ff2159`，彻底拆开） |
| **Service** | `functional.service-gold-{1..7,subtle,strong}` 9 个零散 | **6 件套**（默认/背景/文字/边框/按钮常态/按钮点击）|
| **镂空背景体系** | 无 | **新增**：`color_primary_light` / `_light_pressed` |
| **点击态** | V15 标记 TODO "Relay 暂未规范" | **覆盖**：`*_pressed` 系列 |
| **容错蒙层** | 无 | **新增**：`color_mask_fault_toleran` |
| **暗色模式** | 无 token 级 dark variant | **每个 atom 内置「暗色模式」真值**（见 §11）|

> ⚠️ **Relay 文件已知 typo**（保持原样录入，已反馈）：
> - 「信息 Info」组用 `color_Info`（大写 I），与全文 snake_case 不一致
> - `color_service_bground`（应为 `background`）
> - `color_service_boder`（应为 `border`）
> - `color_mask_fault_toleran`（缺末尾 `t`，应为 `tolerant`）

---

## 1. 主色 Primary · 7 个

> 品牌色，用于控件主色调及各状态：背景、图标、文字、边框、镂空等。

| Token | Atom | Light | Dark | 场景说明 | v16 status |
|---|---|---|---|---|---|
| `color_primary` | `品牌色/jdred_6` | `#ff0f23` | `#ff0f23` | 品牌主色默认态 | **upgraded** |
| `color_primary_text` | `灰阶/gray_1` | `#ffffff` | `#ffffff` | 主色/深背景上的文字 | **upgraded** |
| `color_primary_pressed` | `品牌色/red_7` | `#db0b15` | `#ff707b` | 主色点击态 | **new** |
| `color_primary_disabled` | `灰阶/gray_4` | `#b4b8bf` | `#4b5159` | 主色禁用态 | **upgraded** |
| `color_primary_disabled_special` | `品牌色/red_3` | `#ff91a5` | `#5f2b34` | **特殊**禁用态（可经操作转默认）| **new** |
| `color_primary_light` | `品牌色/red_1` | `#ffe8ee` | `#2a181c` | 主色**镂空背景**默认态 | **new** |
| `color_primary_light_pressed` | `品牌色/red_2` | `#ffccd7` | `#3d2128` | 主色镂空背景点击态 | **new** |

> 更正：`color_primary_disabled_special` 之前误记为 `gray_3`，实为 `品牌色/red_3`。

---

## 2. 服务 Service · 6 个

> 服务金，用于全链路服务场景的背景、图标、边框、文字、按钮等。

| Token | Atom | Light | Dark | 场景说明 | v16 status |
|---|---|---|---|---|---|
| `color_service` | `服务金/servicegold_2` | `#f2ba79` | `#d1995a` | 默认 / 浅背景主色 | **upgraded** |
| `color_service_bground` | `服务金/servicegold_1` | `#fff4e0` | `#3a2b1a` | 浅背景 | **upgraded** |
| `color_service_text` | `服务金/servicegold_4` | `#80512d` | `#b38b6d` | 文字 | **upgraded** |
| `color_service_boder` | `服务金/servicegold_3` | `#ccb9ab` | `#4d443d` | 边框（typo: boder）| **upgraded** |
| `color_service_bground_btnnormal` | `服务金/servicegold_5` | `#ffe6c2` | `#4a3b29` | 按钮背景常态 | **new** |
| `color_service_bground_btnpressed` | `服务金/servicegold_6` | `#ffddad` | `#614d35` | 按钮背景点击态 | **new** |

> 较旧版：Service 从 4 件套扩为 **6 件套**，新增按钮常态/点击态背景两枚（servicegold_5/6）。

---

## 3. 文本 Text · 4 个

> 文字灰阶，用于常态信息表达（文字、图形等）。

| Token | Atom | Light | Dark | 场景说明 | v16 status |
|---|---|---|---|---|---|
| `color_title` | `灰阶/gray_7` | `#11141a` | `#e1e6eb` | 一级重要内容 | **upgraded** |
| `color_text` | `灰阶/gray_6` | `#5a5e66` | `#a1a9b3` | 二级辅助/可操作内容 | **upgraded** |
| `color_text_help` | `灰阶/gray_5` | `#8d9199` | `#717985` | 三级次要内容 | **upgraded** |
| `color_text_disabled` | `灰阶/gray_4` | `#b4b8bf` | `#4b5159` | 四级置灰内容 | **upgraded** |

> 更正：旧版映射 `gray_1/2/3/4` 全错。正确为 `gray_7/6/5/4`（V16 灰阶 gray_7 最深 `#11141a`，序号越小越浅）。

---

## 4. 背景 Background · 3 个

| Token | Atom | Light | Dark | 场景说明 | v16 status |
|---|---|---|---|---|---|
| `color_background` | `灰阶/gray_3` | `#f2f4f7` | `#14171a` | 页面背景 | **upgraded** |
| `color_background_overlay` | `灰阶/white` | `#ffffff` | `#1f2226` | 内容容器背景 | **upgraded** |
| `color_background_component` | `灰阶/gray_2` | `#f0f2f7` | `#2a2f36` | 组件 / 容器背景 | **upgraded** |

> 更正：`color_background→gray_3`（旧版 gray_5）、`color_background_component→gray_2`（旧版 gray_6）。

---

## 5. 蒙层 Mask + 间隔线 · 4 个

> 蒙层用于区隔临时层与稳态界面；间隔线用于内容分隔。**蒙层/间隔线均走「蒙层 mask」原子族**（带 alpha），不是 gray 实色。

| Token | Atom | Light | Dark | 场景说明 | v16 status |
|---|---|---|---|---|---|
| `color_border` | `蒙层/mask_2` | `#11141a14` | `#ffffff1f` | 间隔线 / 组件边框 | **upgraded** |
| `color_mask` | `蒙层/mask_4` | `#11141ab2` | `#000000b2` | 全局蒙层 | **upgraded** |
| `color_mask_part` | `蒙层/mask_3` | `#11141a33` | `#00000033` | 局部蒙层 | **upgraded** |
| `color_mask_fault_toleran` | `蒙层/mask_1` | `#11141a05` | `#0000001a` | **容错蒙层**（typo 缺 t）| **new** |

> 更正：旧版把蒙层/边框记为 `gray_7/8/9/10`，实为 `蒙层/mask_1..4`。注意 `color_border` 是 `mask_2`（半透明），不是实色 gray。

---

## 6. 成功 Success · 3 个

| Token | Atom | Light | Dark | 场景 | v16 status |
|---|---|---|---|---|---|
| `color_success` | `正确绿/successgreen_2` | `#0acc2a` | `#4bd165` | 深背景 / 图形 | **upgraded** |
| `color_success_light` | `正确绿/successgreen_1` | `#e6ffe6` | `#253a2a` | 浅背景 | **upgraded** |
| `color_success_pressed` | `正确绿/successgreen_3` | `#00801e` | `#45b058` | 文字 / 深态 | **upgraded** |

---

## 7. 错误 Error · 3 个 🚩 **decoupled**

> V16 拆出独立「错误红 danger」色族（`#ff2159`），与京东红 `#ff0f23` 刻意区分。

| Token | Atom | Light | Dark | 场景 | v16 status |
|---|---|---|---|---|---|
| `color_error` | `错误红/danger_2` | `#ff2159` | `#f9607a` | 深背景 / 图形 | **decoupled** |
| `color_error_light` | `错误红/danger_1` | `#ffedef` | `#3d2529` | 浅背景 | **decoupled** |
| `color_error_pressed` | `错误红/danger_3` | `#d9114a` | `#ff4d6a` | 文字 / 深态 | **new** |

> 更正：atom 族名是 **`错误红/danger`**（不是旧版写的 `errorred`）。这是 V15→V16 最重要的解耦：V15 `semantic.danger` 直接复用 `brand.primary #ff0f23`，V16 独立为 danger `#ff2159`。

---

## 8. 警示 Warning · 3 个

| Token | Atom | Light | Dark | 场景 | v16 status |
|---|---|---|---|---|---|
| `color_warning` | `警示黄/warningyellow_2` | `#ffaa00` | `#ffbd22` | 深背景 / 图形 | **upgraded** |
| `color_warning_light` | `警示黄/warningyellow_1` | `#fffbe6` | `#3f351e` | 浅背景 | **upgraded** |
| `color_warning_pressed` | `警示黄/warningyellow_3` | `#8c4f00` | `#d99100` | 文字 / 深态 | **upgraded** |

---

## 9. 信息 Info · 3 个

| Token | Atom | Light | Dark | 场景 | v16 status |
|---|---|---|---|---|---|
| `color_Info` | `信息蓝/infoblue_2` | `#0c82f7` | `#60a5fa` | 深背景 / 图形 | **upgraded** |
| `color_Info_light` | `信息蓝/infoblue_1` | `#e6f7ff` | `#212f42` | 浅背景 | **upgraded** |
| `color_Info_pressed` | `信息蓝/infoblue_3` | `#0062d1` | `#90caf9` | 文字 / 深态 | **new** |

> ⚠️ Relay typo：本组首字母 `I` 大写（`color_Info`），建议修正为 `color_info`。

---

## 10. 语义 token 速查（36 个）

| 组 | token | 组 | token |
|---|---|---|---|
| Primary(7) | color_primary / _text / _pressed / _disabled / _disabled_special / _light / _light_pressed | Service(6) | color_service / _bground / _text / _boder / _bground_btnnormal / _bground_btnpressed |
| Text(4) | color_title / _text / _text_help / _text_disabled | Background(3) | color_background / _overlay / _component |
| Mask+Line(4) | color_border / color_mask / _part / _fault_toleran | Success(3) | color_success / _light / _pressed |
| Error(3) | color_error / _light / _pressed | Warning(3) | color_warning / _light / _pressed |
| Info(3) | color_Info / _light / _pressed | | |

---

## 11. L1 Atom 原子色板（43 个 · Light / Dark 全量）

> 真相源 = 变量集合 `↘️ 色彩 Colors`（id `12:2`）。模式：日间模式（Light）/ 暗色模式（Dark）。

### 灰阶 gray（10）
| Atom | Light | Dark |
|---|---|---|
| `gray_7` | `#11141a` | `#e1e6eb` |
| `gray_6` | `#5a5e66` | `#a1a9b3` |
| `gray_5` | `#8d9199` | `#717985` |
| `gray_4` | `#b4b8bf` | `#4b5159` |
| `gray_3` | `#f2f4f7` | `#14171a` |
| `gray_2` | `#f0f2f7` | `#2a2f36` |
| `gray_1` | `#ffffff` | `#ffffff` |
| `gray_11` | `#ffffff` | `#ffffff` |
| `white` | `#ffffff` | `#1f2226` |
| `black` | `#000000` | `#ffffff` |

> 注：gray 实际只有 `gray_2`~`gray_7` 六级有效（gray_7 最深）；`gray_1`/`gray_11` 恒为白（端点别名），`white`/`black` 随模式反相。

### 蒙层 mask（4，带 alpha）
| Atom | Light | Dark |
|---|---|---|
| `mask_1` | `#11141a05` | `#0000001a` |
| `mask_2` | `#11141a14` | `#ffffff1f` |
| `mask_3` | `#11141a33` | `#00000033` |
| `mask_4` | `#11141ab2` | `#000000b2` |

### 品牌色 jdred / red（11）
| Atom | Light | Dark |
|---|---|---|
| `jdred_6` | `#ff0f23` | `#ff0f23` |
| `red_1` | `#ffe8ee` | `#2a181c` |
| `red_2` | `#ffccd7` | `#3d2128` |
| `red_3` | `#ff91a5` | `#5f2b34` |
| `red_4` | `#ff667d` | `#802b37` |
| `red_5` | `#ff3b52` | `#b81427` |
| `red_7` | `#db0b15` | `#ff707b` |
| `red_8` | `#b8070a` | `#ffa3ac` |
| `red_9` | `#940704` | `#ffccd2` |
| `red_10` | `#750c02` | `#fff0f2` |
| `red_11` | `#520007` | `#fff4f5` |

> `red_6` 即 `jdred_6`（主色）。

### 服务金 servicegold（6）
| Atom | Light | Dark |
|---|---|---|
| `servicegold_1` | `#fff4e0` | `#3a2b1a` |
| `servicegold_2` | `#f2ba79` | `#d1995a` |
| `servicegold_3` | `#ccb9ab` | `#4d443d` |
| `servicegold_4` | `#80512d` | `#b38b6d` |
| `servicegold_5` | `#ffe6c2` | `#4a3b29` |
| `servicegold_6` | `#ffddad` | `#614d35` |

### 功能色（danger / warning / success / info 各 3）
| Atom | Light | Dark | | Atom | Light | Dark |
|---|---|---|---|---|---|---|
| `danger_1` | `#ffedef` | `#3d2529` | | `warningyellow_1` | `#fffbe6` | `#3f351e` |
| `danger_2` | `#ff2159` | `#f9607a` | | `warningyellow_2` | `#ffaa00` | `#ffbd22` |
| `danger_3` | `#d9114a` | `#ff4d6a` | | `warningyellow_3` | `#8c4f00` | `#d99100` |
| `successgreen_1` | `#e6ffe6` | `#253a2a` | | `infoblue_1` | `#e6f7ff` | `#212f42` |
| `successgreen_2` | `#0acc2a` | `#4bd165` | | `infoblue_2` | `#0c82f7` | `#60a5fa` |
| `successgreen_3` | `#00801e` | `#45b058` | | `infoblue_3` | `#0062d1` | `#90caf9` |

---

## 待办

- [ ] palette 10×11（V15 110 atom）在 V16 是否保留/弃用 —— page 6:9「色彩 Colors」是否仍挂这套，需确认
- [ ] Relay typo 反馈回写：`color_Info` 大小写 + `_bground` + `_boder` + `_fault_toleran`
- [ ] `_pressed` 语义统一性：多数 = 深态文字而非点击态，命名易混淆，建议治理为 `_strong`/`_deep`
- [ ] 同步 [tokens.json](./tokens.json) color 段（atom light/dark + 36 semantic 映射）
- [ ] 写 [`../visual/color-usage.md`](../visual/color-usage.md) 用法约束
