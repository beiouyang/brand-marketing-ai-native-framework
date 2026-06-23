---
zone: product-architecture
department: brand-and-marketing
status: draft
last_updated: 2026-06-23
---

# 品牌与营销设计 · Brand & Marketing

本目录是 JD APP V16 体系下品牌与营销设计部的业务规范入口，归属 `product-architecture` 区域。

在 AI-native Operating System 中，本目录承担“用户 / 场景层”的职责：把品牌营销团队面对的业务对象、会场类型、互动玩法和可复用设计规则组织成 AI 可以定位、设计师可以维护的知识资产。

## 当前子域

| 子域 | 入口 | 状态 | 说明 |
|---|---|---|---|
| Campaign System | [`campaign-system/`](./campaign-system/) | active | 营销会场 / 大促 / 互动营销相关规范沉淀。 |

## AI-native 资产形态

| 资产 | 位置 | 用途 |
|---|---|---|
| 业务域 README | `<domain>/README.md` | 给人和 AI 判断边界、状态、入口和责任范围。 |
| 规范 bundle | `<slug>/{design,spec,variants,behaviors}.md` | 作为可编辑、可审计的规则源。 |
| 发布页 | `<slug>/spec-page.html` | 面向业务同事、设计师和工程的阅读入口。 |
| AI Schema | `<slug>/ai-schema.yaml` 或 `design.md` 内嵌段 | 当规范需要被 Skill / Copilot 结构化消费时创建。 |
| 走查记录 | `<slug>/design-review-report.md` | 记录 AI 或人工审查发现，避免规则漂移。 |

## 与 Foundation 的关系

- Foundation 提供 V16 基础 token、基础组件与系统级设计规则。
- Brand & Marketing 在 Foundation 之上沉淀营销场景规则、业务例外、案例资产和 AI 可执行校验点。
- 业务规则不得反向覆盖 Foundation 真相源；如出现稳定复用值，先在业务规范中登记，再评估是否升级为 Foundation token。

## 新增子域约定

新增子域时，先建立：

```text
<domain>/
  README.md
  spec-page.html
```

当子域下某个规范正式录入后，再补标准 page-doc bundle：

```text
<slug>/
  design.md
  spec.md
  variants.md
  behaviors.md
  CHANGELOG.md
  spec-page.html
```

新增内容需优先说明来源、状态和是否已人工确认。AI 可以辅助整理，但不能把未确认推断写成正式规则。
