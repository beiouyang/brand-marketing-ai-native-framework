# JD Brand & Marketing Design Wiki

本仓库承载品牌与营销设计方向的 Design Wiki、AI 工作流 Skill、规范发布页和 Campaign System 文档。长期目标是把这些资产组织成可被人和 AI 共同调用的 [AI-native Operating System](./AI-NATIVE-OPERATING-SYSTEM.md)。

## 目录入口

| 目录 | 角色 | 说明 |
|---|---|---|
| `.agents/` | Agent Skill 根目录 | 工具中立的 canonical skills root，存放可被不同 AI runtime 读取的 `SKILL.md`。 |
| `SKILLS/` | Skill 模板与历史包 | 存放部分可迁移或待合并的 Skill 包。 |
| `docs/` | 对外 HTML 文档 | 设计知识树、贡献指南、执行摘要和总览页。 |
| `jd-design-system-md-v16/` | V16 设计系统发布树 | JD APP 16.0 Design System 主体，包含 Foundation、AI 机制、组织架构与业务规范。 |

## AI-native OS 分层

| 层级 | 主目录 | 说明 |
|---|---|---|
| 用户 / 场景层 | `jd-design-system-md-v16/product-architecture/` | 按业务域组织真实设计对象和场景。 |
| 应用 / 工作流层 | `.agents/skills/` | 把可复用流程沉淀为 Agent Skill。 |
| 规则 / 协议层 | `jd-design-system-md-v16/ai-mechanism/` | 定义 AI 如何读取、生成、发布和审计设计资产。 |
| 原子 / 资产层 | `jd-design-system-md-v16/foundations/` | token、基础组件、材质、布局和系统级约束。 |

## 品牌与营销主入口

当前品牌与营销设计正式内容位于：

```text
jd-design-system-md-v16/product-architecture/brand-and-marketing/
```

其中 Campaign System 是当前已落地的核心子域：

```text
jd-design-system-md-v16/product-architecture/brand-and-marketing/campaign-system/
```

## 使用约定

- 规范正文优先维护在 `design.md`、`spec.md`、`variants.md`、`behaviors.md` 等 page-doc bundle 文件中。
- 对外发布入口统一使用同目录 `spec-page.html`。
- 新增业务域时，优先在 `product-architecture/brand-and-marketing/<domain>/` 下建立 README，再补规范 bundle。
- 不把 Campaign System 的业务例外直接写入 Foundation token 真相源；稳定后再评估是否升级为 Foundation token。
- 面向 AI 的新增内容先声明来源、状态和责任边界；不要创建无来源的空规则文件。
