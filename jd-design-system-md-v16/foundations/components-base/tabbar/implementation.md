---
file: implementation
bundle_part_of: design.md
slug: tabbar
last_synced: "2026-05-21"
status: draft
purpose: 给 AI agent 的 Auto Layout 接管说明 —— 描述布局引擎配置,而非手算坐标结果。R3 走查暴露「按几何结果手算 x/y」反复错位(issue #60 Gap 3)。
---

# 底部导航栏 · 实现说明(Auto Layout 接管)

> design.md → [index](./design.md) · 同 bundle:[spec](./spec.md) / [variants](./variants.md) / [behaviors](./behaviors.md) / [ai-schema](./ai-schema.yaml)
>
> ⚠️ **v0.1 · tabbar 试点**(见 [issue #60](https://github.com/ShuaiMXu/jd-design-wiki-proposal/issues/60) Gap 3)。本文件体例是否升为全组件 bundle 标配,待 design system 组确认。

## 为什么有这份文件

`design.md` / `spec.md` 描述的是**几何结果**(「内边距 12 DP / 各坑位均分 80.75 DP / icon 居中」)。AI agent 照字面手算 x/y 去凑这些结果时,极易踩 `textAutoResize` / `textAlignHorizontal` 这类默认值的坑 —— R3 走查第一版 label 偏移 12 DP 即此。

本文件描述**布局引擎该怎么配**,而不是布局算完长什么样。**对齐交给 Auto Layout 接管,不要手算坐标。**

## ① Auto Layout 配置表

按 anatomy 层从外到内。尺寸值的真相源是 `design.md` 02.x + `ai-schema.yaml`,本表只定**布局模式**。

| 层 | 方向 | 对齐 | padding / itemSpacing | layoutGrow / 尺寸 |
|---|---|---|---|---|
| Capsule(底导容器) | HORIZONTAL | `counterAxisAlignItems=CENTER` | padding L·R 12 DP;5 坑位时 `itemSpacing=−4`,其余 0 | 固定宽(常规 351 / Agent 组合 319) |
| Slot(单坑位) | —(布局容器) | — | — | `layoutGrow=1`(在 Capsule 内均分) |
| 选中 pill(选中态背景) | —(视觉层) | 在 Slot 内 `primaryAxisAlignItems=CENTER` | inset L·R 各 4 DP | `(slot宽 − 8)×44`,`cornerRadius=radius_xl`,fill `gray_6` |
| Tab atom(icon + label 内容层) | VERTICAL | 双向 CENTER | `itemSpacing=4`(字符与图标间距) | 44×44 DP |
| icon box | —(固定 bound) | — | — | 20×20 DP,`y=3` |
| label box | —(固定文本框) | `textAlignHorizontal=CENTER` | — | 44×14 DP,`y=27`,`textAutoResize=NONE` |

要点:

- **选中 pill 是独立视觉层**,挂在 Slot 上,**不**挂在 44×44 atom 上,也**不**作为 atom 的子节点。状态切换只动 pill,不动内容层。
- **Slot 用 `layoutGrow=1` 均分**,不要对每个 Slot 手算 x/y。
- **label 用固定文本框**(`textAutoResize=NONE` + 显式 44×14),不靠默认 auto-resize —— 否则中文 label 按内容收缩,偏离 icon 中线。
- icon box / label box 在 atom 内是**固定 bound**,不是 Auto Layout 子项。

## ② 反模式(明文禁止)

| ❌ 反模式 | 后果 | ✅ 正确做法 |
|---|---|---|
| `text.resize(w, h)` 但不设 `textAutoResize='NONE'` | 文本框尺寸被内容覆盖,label 视觉错位(R3 教训) | 先 `textAutoResize='NONE'`,再 `resize` + `textAlignHorizontal` |
| 手算各 Slot 的 x/y 去凑「均分」 | 累计浮点漂移,坑位不齐 | Capsule HORIZONTAL + Slot `layoutGrow=1` |
| 选中背景挂在 icon / label 节点上 | 状态切换与内容布局打架 | 独立 pill 层,挂 Slot |
| 用 design.md 的几何结果数值反推坐标 | 绕过引擎,踩默认值坑 | 按本表配 Auto Layout,让引擎算坐标 |

## 关联

- [design.md](./design.md) `ground_truth` frontmatter —— 实现前先读的 Relay 真相源节点
- [ai-schema.yaml](./ai-schema.yaml) —— 尺寸 / 状态的机器可读字段
- skill [`design-md-to-relay`](../../../../.agents/skills/design-md-to-relay/SKILL.md) Step 7「Plan Relay Node Tree」消费本文件的布局模式
