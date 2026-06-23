# AI-native Operating System

本仓库未来不只是 Design Wiki，而是品牌与营销设计团队的 AI-native Operating System：把人的判断、设计规范、业务场景、执行 Skill 和发布页面组织成可被人和 AI 共同调用的工作系统。

## 目标

- 让设计知识从“文档沉淀”升级为“可检索、可执行、可审计的资产”。
- 让 AI 参与从需求理解、规范检索、方案生成、质量走查到发布回流的完整链路。
- 让协作仓库保持稳定路径和清晰责任，避免为了 AI 改造破坏同事已有引用。

## OS 四层

| 层级 | 仓库位置 | 作用 | 当前重点 |
|---|---|---|---|
| 用户 / 场景层 | `jd-design-system-md-v16/product-architecture/` | 记录业务场景、设计对象和团队域 | Brand & Marketing / Campaign System 先成为样板 |
| 应用 / 工作流层 | `.agents/skills/` | 把重复工作沉淀成可执行 Skill | Relay 转 md、md 转发布页、设计走查、营销生成工具 |
| 规则 / 协议层 | `jd-design-system-md-v16/ai-mechanism/` + page-doc bundle | 定义 AI 如何读取、生成、审计设计资产 | bundle 契约、AI Schema、Skill 索引、走查规则 |
| 原子 / 资产层 | `jd-design-system-md-v16/foundations/` + 各业务规范目录 | 提供 token、组件、案例、素材、约束 | Foundation token 真相源 + Campaign System 业务例外 |

## 核心数据流

```text
业务需求 / Relay 设计源
        |
        v
product-architecture/<domain>/README.md
        |
        v
design.md / spec.md / variants.md / behaviors.md
        |
        +--> ai-schema.yaml / token-binding-check.md / design-review-report.md
        |
        v
.agents/skills/<skill>/SKILL.md
        |
        v
spec-page.html / docs/*.html / 评审报告
        |
        v
业务反馈、数据验证、规则回流
```

## 目录治理原则

1. 先补入口，再移动目录。协作仓库里，现有 `spec-page.html` 和外部引用默认保持不动。
2. 先记录现状，再标规划。未录入内容用 README 说明，不创建空 `design.md` 假装完成。
3. 先继承 Foundation，再记录业务例外。业务域不能直接覆盖 Foundation token 真相源。
4. 先保留来源，再让 AI 执行。AI 生成、整理或走查的结论必须能回到 Relay、PRD、设计稿、token 或人工确认。
5. 先让人读懂，再让机器读懂。每个规范 bundle 要同时服务设计师阅读和 Agent 消费。

## Brand & Marketing 样板路径

当前优先把 Brand & Marketing 跑成 OS 样板：

```text
jd-design-system-md-v16/product-architecture/brand-and-marketing/
  README.md
  campaign-system/
    README.md
    color/
    typography/
    space/
    radius/
    graphic/
    materials/
    principles/
    controls/
    mega-flow/
    mega-components/
    interactive-flow/
    interactive-components/
    motion-sound-haptics/
```

已录入模块保持原路径；规划分区先作为导航和协作边界。后续若要迁移到更深层级，必须先列影响清单、重写链接、校验发布页，再发起合并。

## 新增规范的最小闭环

新增一个业务规范时，至少完成：

1. 在所属域 README 中登记位置和状态。
2. 创建标准 bundle：`design.md`、`spec.md`、`variants.md`、`behaviors.md`、`CHANGELOG.md`。
3. 若需要 AI 执行，补 `ai-schema.yaml` 或在 `design.md` 中加入明确的 AI Schema 段。
4. 生成或维护 `spec-page.html` 作为对外发布入口。
5. 若规则来自设计稿或业务资料，记录来源；若存在不确定项，用 `待确认` 标注。
6. 重要变更写入 `CHANGELOG.md`，必要时补 `design-review-report.md`。

## 后续演进

| 阶段 | 目标 | 不做什么 |
|---|---|---|
| v1 入口化 | 补齐 README、分区说明和 OS 契约 | 不移动已发布模块 |
| v2 结构化 | 为高价值规范补 AI Schema、token binding、review report | 不写无来源规则 |
| v3 自动化 | 让 Skill 串起录入、发布、审计、回流 | 不让 AI 直接覆盖人工确认内容 |
| v4 运营化 | 接入业务数据和效果复盘，让规则随反馈迭代 | 不把一次性活动经验误升为通用规则 |
