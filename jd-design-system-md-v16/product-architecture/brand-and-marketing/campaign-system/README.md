---
zone: product-architecture
domain: campaign-system
name_zh: "营销会场"
name_en: "Campaign System"
status: draft
last_updated: 2026-06-23
inherits_from:
  - ../../../foundations/tokens/typography.md
  - ../../../foundations/tokens/color.md
  - ../../../foundations/tokens/spacing.md
  - ../../../foundations/tokens/radius.md
  - ../../../foundations/visual/materials.md
---

# 营销会场 · Campaign System

本目录承载品牌与营销设计部在 JD APP V16 体系下的营销会场 / 大促 / 互动营销规范。它用于沉淀跨业务、跨会场的运营设计规则，但不替代 Foundation token 真相源。

在 AI-native Operating System 中，Campaign System 是 Brand & Marketing 的首个样板域：先把高频营销知识沉淀为稳定 bundle，再逐步补齐 AI Schema、Skill 调用和质量走查，让营销规范可以被检索、生成、审计和回流。

## 当前目录树

```text
campaign-system/
  README.md
  color/                 # 已录入：营销色彩
  typography/            # 已录入：营销文字
  space/                 # 已录入：营销空间
  radius/                # 已录入：营销圆角
  graphic/               # 已录入：营销图形
  materials/             # 已录入：营销材质
  principles/            # planned：营销设计原则依据
  controls/              # planned：通用控件
  mega-flow/             # planned：大促链路
  mega-components/       # planned：大促组件
  interactive-flow/      # planned：互动链路
  interactive-components/# planned：互动组件
  motion-sound-haptics/  # planned：动效 / 声音 / 震感
```

## 分区说明

| 分区 | 当前状态 | 说明 |
|---|---|---|
| 基础规范 | partially recorded | 已录入文字、空间、色彩、圆角、图形、材质。当前保持直放目录，避免破坏既有 `spec-page.html` 链接。 |
| 原则依据 | planned | 营销设计定义、心智延续与体验统一、业务目标与品类特性、行为洞察与数据验证、技术兼容与性能优化。 |
| 通用控件 | planned | 导航、标签、按钮、提醒等营销场景复用控件。 |
| 大促链路 | planned | 心智地图、氛围与触点、页面框架。 |
| 大促组件 | planned | 权益、商卡、头图、分流广告。 |
| 互动链路 | planned | 玩法策略、频道与触点、页面框架。 |
| 互动组件 | planned | 分享、权益、商卡。 |
| 动效 / 声音 / 震感 | planned | 营销动效节奏、声音提示与触觉反馈规范。 |

## AI-native 成熟度

| 等级 | 判定 | 产物 |
|---|---|---|
| L0 目录占位 | 只有 README，说明计划边界 | `README.md` |
| L1 人可读 | 有完整 page-doc bundle | `design.md` / `spec.md` / `variants.md` / `behaviors.md` |
| L2 可发布 | 有面向阅读的发布页 | `spec-page.html` |
| L3 AI 可消费 | 有结构化字段、token 绑定或 AI Schema | `ai-schema.yaml` / `token-binding-check.md` |
| L4 可审计回流 | 有走查记录、案例反馈和变更记录 | `design-review-report.md` / `CHANGELOG.md` |

## 标准 bundle 约定

正式录入的规范目录默认包含：

| 文件 | 用途 |
|---|---|
| `design.md` | 规范定义、边界、结构总览、设计原则和典型场景。 |
| `spec.md` | token、规格、规则主体、实测值和 token-miss。 |
| `variants.md` | 类型、状态、场景或分类维度。 |
| `behaviors.md` | 使用准则、Donts、降级规则和 AI 生成约束。 |
| `CHANGELOG.md` | 子规范变更记录。 |
| `spec-page.html` | 对外发布入口。 |

可选文件：

| 文件 | 何时创建 |
|---|---|
| `ai-schema.yaml` | 当规范需要被 AI / Copilot 结构化读取时创建。 |
| `_assets-cdn.md` | 仅在有真实业务截图、案例图或必要位图资产时创建。 |
| `design-outline.md` | 用作 Relay 抽取或确认稿归档，不替代正式 `design.md`。 |
| `design-review-report.md` | 记录设计规范审查结果。 |

## 树优化原则

- v1 阶段只补入口与分区说明，不移动已发布模块，避免破坏既有链接。
- 后续如要把 `color/typography/...` 统一收拢进 `foundations/`，必须先完成全量链接重写和发布页校验。
- 未录入子项只建立 README 或占位 `spec-page.html`，不创建空 `design.md`，不写未经确认的规则、数值、token、示例或结论。
- AI / Copilot 引用本目录时，应优先读取 `README.md` 判断分区，再进入具体规范 bundle。
- 协作仓库中任何目录迁移都应先形成迁移方案，列出受影响链接、发布页和同事引用，再执行文件移动。
