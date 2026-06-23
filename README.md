# 品牌与营销 AI-Native Framework

这是一个可交互网站草案，用于集合公司内部 Skill / Agent / Design Wiki / 知识库。

## 目录结构

```text
brand-marketing-ai-native-framework/
  index.html
  architecture.html
  styles.css
  data.js
  app.js
  architecture-data.js
  architecture.js
  data/
    brain-data.json
    README.md
  scripts/
    sync-data.mjs
  assets/
  content/
    user-layer/
      module.md
      skills/
    rule-layer/
      module.md
      skills/
        before-design/
        during-design/
        after-design/
    application-layer/
      module.md
      skills/
        brand-domain/
        marketing-domain/
        interaction-domain/
        multimedia-domain/
    execution-layer/
      module.md
      skills/
        designer-copilot/
    atomic-layer/
      module.md
      skills/
        brand-guidelines/
        marketing-components/
        case-assets/
        design-principles/
```

## 分层

- Home（`index.html`）：Skill Atlas 入口，承接一句话需求、Hints、编排案例、规则资产、能力卡片和执行角色。
- Intro（`architecture.html`）：六层架构说明页，展示需求层、编排层、规则层、能力层、执行层、质检闭环，以及治理机制、路线图和 App16.0 编排案例。
- 需求层：全局搜索、Hints 和需求入口，把用户的一句话需求转成可路由的问题。
- 编排层：按需求类型、风险等级、规范成熟度拆解任务，决定人 / Copilot / Skill 的协作方式和 Mandatory Gates。
- 规则层：通用设计工作流和可执行规范，分设计前、设计中、设计后。
- 能力层：业务场景提效 Skill / Agent，分品牌域、营销域、互动域、多媒体内容域。
- 执行层：人类设计师与虚拟专家 Copilot，承接方向定调、执行协作和关键节点判断。
- 质检闭环：结构化返工、复盘归因、Skill 升格和规则回流，让系统持续进化。
- 原子层：Design Wiki / 知识库，包括品牌规范、营销组件、案例资产、设计原则，其中部分条目可能先以候选知识库形式沉淀。

## 运行

可直接打开 `index.html`，也可以在当前目录起一个静态服务：

```bash
python3 -m http.server 4173
```

## 数据维护

后续批量替换或修改 Skill 卡片 / 弹窗内容时，优先修改 `data/brain-data.json`，再运行：

```bash
/Users/ouyangbei3/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/sync-data.mjs
```

同步脚本会校验必填字段，生成页面运行时使用的 `data.js`，并同步更新 `content/` 下对应的 Skill / Wiki README 索引说明。
