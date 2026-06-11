---
name: jd-v16-bundle-rules
description: v1.2 起所有组件统一 bundle(4 md + CHANGELOG),SKILL.md Step 8 调用本文件
---

# JD V16 Bundle Rules（v1.2：统一 bundle）

> SKILL.md Step 8 套模板前调用本文件。**v1.2 起取消 single / bundle 分流——所有组件统一 bundle。**

## 决策树

```
任何组件 → bundle（无 single 分支）
```

不再按 nodeCount / 复杂度 / pageDocMode 决定单份还是 bundle。`pageDocMode` 现在只影响**抽取策略**（大稿是否按章节分块抽，见 preflight-gate.md / SOP ①），与文件分流无关。

## 标准文件清单（5 个正文件，固定）

```
<slug>/
├─ design.md       ← 完整主文档：定义 / 边界 / 结构总览 / 形态总览 / 设计原则 / 典型场景 / 关联
├─ spec.md         ← 视觉与结构规格：token（浅/暗双列）/ 容器尺寸 / 间距 / 图标资产规则
├─ variants.md     ← 形态与变体：各形态详规 / 状态 / 内容类型 / 溢出降级
├─ behaviors.md    ← 行为规范：交互 / 点击区 / 跳转 / 优先级 / 降级 / Donts
└─ CHANGELOG.md    ← 变更记录（append-only，每个 PR 一条，最新在上）
```

辅助文件（不计入正文件数，按需出现）：
```
├─ _assets-cdn.md  ← 有切图 / 图标 / 字体时的资产清单（下划线 infra 文件）
└─ assets/         ← 导出的 SVG 图标 / 字体子集
```

发布物（不由本 skill 产）：`spec-page.html` 由 `design-md-to-spec-page` 生成。

## 可选文件（默认不产）

| 文件 | 何时加 |
|---|---|
| `ai-schema.yaml` | 仅当组件需要机器可读 schema（组件 API 草案）时**显式**生成；模板 `templates/page-doc/ai-schema.yaml` 已标弃用，不进默认 bundle |
| `implementation.md` | 仅当组件有复杂 Auto Layout 接管需求（tabbar / navbar）时加（issue #60 试点，非标配） |

## 输出后续步骤（Step 9 之后）

- 设计师补 TODO + 各 md 间引用对齐 → `/design-md-to-spec-page` 生成 spec-page.html
- 每次改动在 `CHANGELOG.md` 追加一条（挂 PR 号）

## 模板位置

bundle 模板在 `../../templates/page-doc/`（skill 根级，跨 profile 共用）:
- `design.md`（完整主文档）/ `spec.md` / `variants.md` / `behaviors.md` / `CHANGELOG.md`
- `ai-schema.yaml`（弃用，可选）

profile 只决定 **frontmatter 字段**，不重复模板本身。`templates/component.md`（单份）已弃用。
