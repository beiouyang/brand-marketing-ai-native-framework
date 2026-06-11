# text node 文本 pattern 识别规则

> SKILL.md Step 4 调用本文件。统一抽取脚本拿到 `textStyles[]` 后，按下面规则把每条文本归类到 5 个 bucket，写到 design.md 对应 section。v0.4 加。

---

## 1. 5 个 bucket

每个 text node 试 5 个 pattern，命中第 1 个即归类（不可重复）：

| Bucket | Pattern | 去向 |
|---|---|---|
| `chapter_title` | `fontSize ≥ 32` **且** 文本匹配 `/^\s*\d{1,2}[\.、 ]?\s*[一-龥]/` | `## 章节大纲` 段（page-doc 模式）|
| `figure_label` | 文本完全匹配 `/^图\s*\d+[\.：:]?\s*.{0,40}$/` | 当前章节的 `figures[]` |
| `dont_rule` | 文本以 `禁止` / `不可` / `不要` / `不能` / `不允许` 开头，**或** 文本含 `❌` | `## Donts` 段（自动收，不再 TODO） |
| `dimension_spec` | 文本匹配 `/^\s*\d+(\.\d+)?\s*(DP\|dp\|px\|PX\|%)(\s\|$\|×\|x\|\*\|\/)/i`（含组合如 `131×44 DP`、`14/lh 20`） | 当前章节的 `dimensions[]` |
| `description` | 长度 ≥ 6 且含中文字符 | 当前章节的 `notes[]` |

> v0.4.1 (2026-05-14)：表格 pattern 与 `node-type-mapping.md` 抽取脚本里的 `classifyText()` 实现保持 1:1 一致。chapter_title 仅支持中文标号（v0.5 再加英文 fallback）。dimension_spec 接受 `/` 分隔符（如 `font_size_14/lh20`）。

> 短文本（< 6 字符）但非 figure_label / dont_rule / dimension_spec → 丢弃（视为 UI 装饰文字，如 "Tab" / "01" / "+"）。

---

## 2. 章节归属

每个 text node 抽取时附带 `chapter: {id, name} | null`（由 `chapterOf(n)` 计算）。章节边界是 root 的第 1 层 **FRAME/GROUP** 直接子节点。

> **v1.3 (issue #125 ①)**：章节只认 `FRAME`/`GROUP` 类型的第 1 层子节点。`COMPONENT`(变体)/`INSTANCE`/`TEXT`/`RECTANGLE` 等不算章节——否则 12 变体 `COMPONENT_SET` 会被错当 12 章节(且与 `variants[]` 双重计数)、200 instance 的扁平 L3 页会让 outline 爆 200 行。text node 若不在任何 FRAME/GROUP 章节下,`chapter` 为 `null`(不归入任何章节细节段)。

- 抽取脚本里：`chapterOf(n)` 沿 parent 链上爬,命中 FRAME/GROUP 章节 id Set(`chapterChildIds`)即停 → 返回 `{id, name}`；爬到 root 仍未命中 → 返回 `null`
- 把 text node 写到 `chapters[i].notes[]` / `chapters[i].donts[]` / `chapters[i].figures[]` / `chapters[i].dimensions[]`

---

## 3. 章节归属：抽取层 vs 渲染层

**抽取脚本只在每条 text/instance/layout 上加 `chapter` 字段（`{id, name}` 或 `null`），不做章节聚合。**

模板渲染层（SKILL.md Step 8）按 `chapter.id` 做 group-by，把同章节的 text 按 bucket 分桶为 `figures / donts / dimensions / notes`。

**不在抽取层聚合的理由**：
- 抽取脚本已经 200 行，加聚合逻辑会让单个 `use_design_script` 调用更脆弱
- 渲染层用 string substitution 而非 control flow（见 SKILL.md "占位符语义"），group-by 在模型一次性构造段落时本就要做
- `chapters[]` 元数据（id / name / bounds）已由抽取脚本返回，渲染时按这个列表迭代即可

**渲染期望的章节聚合形态**（仅供模板渲染参考，**不是**抽取脚本返回结构）：

```ts
// 渲染层在内存里构造的形态
{
  id: string,
  name: string,
  bounds: { w, h },
  title: string | null,             // chapter_title bucket 首条
  figures: { label, ctx }[],        // figure_label bucket
  donts: string[],                  // dont_rule bucket
  dimensions: { value, ctx }[],     // dimension_spec bucket
  notes: string[],                  // description bucket（建议 ≤ 3 避免淹没）
}
```

`ctx` 是该文本节点同 frame 内最近的兄弟 text（首选 `description` 桶、其次 `chapter_title`），渲染层从抽取结果里查找。

---

## 4. 落到 design.md

| Bucket | design.md 位置 |
|---|---|
| chapter_title | `## 章节大纲` 表格的「章节标题」列 |
| figures | 章节细节段 `### 图 N` 子标题（含 ctx 描述） |
| dimensions | `### 间距 / 布局` 表 + 各章节细节段 |
| donts | `## Donts` 段（自动收，每条引用来源章节） |
| notes | 章节细节段 `> {notes}` 引用块（≤ 3 条/章节，避免淹没） |

---

## 5. fallback

如果 5 个 bucket 全没命中（极少数：纯数字 / 纯单字符）→ 丢弃，不写到 design.md。

如果某个章节的所有 text 都没匹配上 figure / dimension / dont → 该章节细节段只渲染 chapter_title + notes 前 3 条。

---

## 6. 已知失效场景：稿件命名 / 文本漂移（issue #137）

bucket 分类靠 `classifyText(n.characters, n.fontSize)`，**以 TEXT node 的真实文本 `characters` 为准**。但当稿件残留旧草稿时会出现两类失效：

- **`characters` 缺失 / 占位**：节点 `characters` 为空或被改写成无意义占位串 → 5 类 bucket 全部抽空（尤其 `dont_rule` 抽不到 → `## Donts` 落 TODO 待手填，见 issue #136）。
- **`name` 大规模漂移**：100+ node `name` 被统一改写成同一占位值（PR #128 录入字体规范时全叫「推流地址」）→ 依赖 node `name` 的下游启发式（`chapters[].name` 章节锚定 / `instances[].name` 组件映射 / `modeOf` 暗色判定 / `iconNodes` 去重）集体失真。

**本 skill 不做 OCR 兜底，也不从 ✅ 段反推 `dont`（避免 hallucinate）。** 处理方式：

1. **预检显著告警**：[preflight-gate.md](./preflight-gate.md) 维度 ⑥「命名漂移率」用 `maxShare` 检测同名占比，`> 0.8` 时 `⚠️` 显著标出，提示设计师先在 Relay 修 name 再重跑。
2. **渲染以截图为准**：命中本场景时全程以 `get_screenshot` 渲染文本为准，`⚠️` 项写进 outline「待设计师确认」+ design.md「待办」段留痕。

这是文档化的**已知局限**，不是 bug —— 修法在源稿（Relay 改 name / 补 characters），不在 skill 强行猜。
