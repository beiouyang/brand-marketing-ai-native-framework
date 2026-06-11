# 稿件预检门（v0.5.7）

> SKILL.md Step 4.5 调用本文件。解决「skill 抽完数据就直接转换、不先评估稿件是否就绪」的问题（issue #56）。

---

## 1. 目的

skill 默认假设传进来的 Relay 节点是干净、完整、描述清晰的，但实际稿件常常命名残留旧草稿值、标注不全、节点过大爆 token、结构不清。**预检门在 Step 4 抽取之后、Step 5 之前跑一次**，产出一份「稿件就绪度评估」，把这些问题在动手转换前就揪出来 —— 而不是把代价后置到生成的 design.md 里靠人反复 review。

预检**只用 Step 4 已抽取的数据 + Step 2 的节点信息**做**机械规则判断**，不做主观「设计质量」评价。

## 2. 三档结论

| 档位 | 含义 |
|---|---|
| `✅ 通过` | 该维度无问题 |
| `⚠️ 待补充` | 有缺口，**不阻断**，但写进 outline 待确认项 + 终端提示 |
| `⛔ 阻断` | 严重到转换必然产出垃圾，**阻断 Phase 2**（见 §5） |

**整体结论聚合**：任一维度 `⛔` → 整体 `⛔`；否则任一 `⚠️` → 整体 `⚠️`；全 `✅` → 整体 `✅`。

## 3. 六个检查维度

### ① 节点规模 size

基于 `rootInfo.h` 和 `rootInfo.nodeCount`（= 抽取脚本 `all` 数组长度）。

| 条件 | 结论 |
|---|---|
| `h ≤ 5000` 且 `nodeCount ≤ 400` | `✅ 通过` |
| `5000 < h ≤ 12000` 或 `400 < nodeCount ≤ 1200` | `⚠️ 待补充` —— page-doc 量级，确认抽取数据未被截断 |
| `h > 12000` 或 `nodeCount > 1200` | `⛔ 阻断` —— 单次抽取极可能 token 超限 / 数据被截断，必须分块录入 |

> 阈值是启发式，按实跑反馈调整。

### ② 命名可信度 naming

检查 `rootInfo.name` / `chapters[].name` / `instances[].name`：

- **可疑信号 A**：名字含 2 位以上纯数字串（可能残留旧草稿尺寸，如 `Frame 1666x6124` / `导航 80`）
- **可疑信号 B**：默认名（`Frame N` / `Group N` / `Rectangle N` / 空名 / `未命名`）

| 条件 | 结论 |
|---|---|
| 无可疑名 | `✅ 通过` |
| 有 ≥1 个可疑 / 默认名 | `⚠️ 待补充` —— 逐个列出，提示「命名可能残留旧稿，**以截图渲染文本为准**」 |

命名问题不致命，不 `⛔`。

### ③ 标注完整度 annotation

**仅 page-doc 模式**检查（非 page-doc 此维度记 `✅`）。看 `textStyles[].bucket`：

| 条件 | 结论 |
|---|---|
| 抽到 ≥1 条 `dimension_spec`（尺寸标注）text | `✅ 通过` |
| page-doc 模式但全文无 `dimension_spec` | `⚠️ 待补充` —— 稿件缺尺寸标注，转换出的 spec 会大量 TODO，建议设计师先在 Relay 补标注 |

### ④ 截图可得性 screenshot

outline 阶段不实际导出，只用 `rootInfo.w` / `rootInfo.h` 做合法性检查：

| 条件 | 结论 |
|---|---|
| bounds 有效（`w > 0` 且 `h > 0`） | `✅ 通过` |
| bounds 为 0 或异常 | `⚠️ 待补充` —— 节点尺寸异常，preview.png 大概率导不出，Step 6 会留 placeholder |

### ⑤ 结构清晰度 structure

- **page-doc 模式**：`chapters[]` 每个都有非默认名 → `✅`；有默认名 / 空名，或 pageDocMode 判定踩边界（恰好 3 个 FRAME 或 `h` 刚过 5000）→ `⚠️`
  - **v1.3 (issue #125 ①)**：`pageDocMode === true` 但 `chapters` 为 `null`（过滤后无 FRAME/GROUP 直接子节点，典型如 12 变体 `COMPONENT_SET` / 200 instance 扁平页）→ `⚠️` —— 几何/结构触发了 page-doc，但没有可锚定的章节 FRAME，章节细节段不渲染，提示设计师确认是否需要章节切分
- **非 page-doc**：`root.type` 为 `COMPONENT_SET` / `COMPONENT` / `INSTANCE` / `FRAME` → `✅`；其它类型 → `⚠️`（不是标准组件根节点，抽取结果可能不准）

### ⑥ 命名漂移率 name-drift

issue #137 触发场景：稿件残留旧草稿，**大量 node `name` 被统一改写成同一个无意义占位值**（PR #128 录入字体规范时 100+ 文本 node `name` 全叫「推流地址」）。这与维度 ② 的「数字残留 / 默认名」是**两种不同病**——占位名既不是数字也不是 `Frame N`，② 抓不到它。

危害面比 ② 更广：`chapters[].name`（章节锚定）/ `instances[].name`（组件映射）/ `modeOf`（暗色判定靠祖先 name）/ `iconNodes` 去重 key / `uses_components` 映射 **全部依赖 node `name`**，name 漂移成单一值时这些启发式集体失真；若这些 placeholder node 的 `characters` 也同步缺失，[text-pattern-rules.md](./text-pattern-rules.md) 的 5 类 text bucket 也会抽空（→ `dont_rule` 抽不到 → `## Donts` 落 TODO，见 issue #136）。

**度量**：取 Step 4 抽到的全部带名节点的 `name`（`textStyles[].name` + `chapters[].name` + `instances[].name` + `layouts[].name`），算最高频单一 name 的占比 `maxShare = maxCount / totalNames`。`maxShare` 比「去重率」更直接表达本病（100+ 全同名 → `maxShare ≈ 1.0`）。

| 条件 | 结论 |
|---|---|
| `totalNames < 5` 或 `maxShare ≤ 0.5` | `✅ 通过` |
| `0.5 < maxShare ≤ 0.8` | `⚠️ 待补充` —— 较多 node 同名，依赖 node name 的启发式（章节锚定 / 组件映射 / 暗色判定）可信度下降 |
| `maxShare > 0.8` | `⚠️ 待补充`（**显著**）—— node name 大规模漂移成单一占位值「`{占位值}`」（占 `{百分比}`），依赖 name 的启发式集体失真；若对应 `characters` 也缺失则 text bucket 抽空、`## Donts` 大概率落 TODO（issue #136/#137）。**全程以 `get_screenshot` 渲染为准**；建议设计师先在 Relay 修 name 再重跑 |

per §5，本维度模糊，**一律 `⚠️` 不 `⛔`**。

## 4. 输出去向

- **outline 模式**：评估写进 `design-outline.md` 顶部的 `## 稿件预检` 段（`{{section_preflight}}`），`⚠️` 项并入「待设计师确认」
- **终端**：Step 11 输出整体结论行 + 各维度一行

## 5. Phase 2 闸门

| 整体结论 | `--confirm-outline` 行为 |
|---|---|
| `✅` / `⚠️` | 正常继续写 design.md，`⚠️` 项在 design.md「待办」段留痕 |
| `⛔` | **拒绝写 design.md** —— 终端醒目输出严重缺口清单，要求设计师**修稿 / 分块后重跑**。不是「问设计师问题」，是和 Outline Gate 同性质的硬门:稿件没就绪时生成的 design.md 必然是垃圾，生成它是浪费 |

> `⛔` 只留给真正致命的情况（§3 维度①的规模超限）。命名 / 标注 / 截图 / 结构等模糊维度一律 `⚠️`，不阻断 —— 避免误报把设计师挡在门外。

## 6. 终端格式

```
🔍 稿件预检:{整体结论}
   ├─ 节点规模:{✅/⚠️/⛔} {一句话}
   ├─ 命名可信度:{✅/⚠️} {可疑名个数}
   ├─ 命名漂移率:{✅/⚠️} {maxShare 百分比 + 占位值}
   ├─ 标注完整度:{✅/⚠️} {一句话}
   ├─ 截图可得性:{✅/⚠️} {一句话}
   └─ 结构清晰度:{✅/⚠️} {一句话}
```

整体 `⛔` 时,`--confirm-outline` 模式追加:

```
⛔ 稿件预检未过 —— 已停止,未写 design.md。
   严重缺口:{规模超限说明}
   请设计师修稿 / 分块后重跑。
```
