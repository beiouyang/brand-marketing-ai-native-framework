# 设计知识库 · Design Knowledge Base

把团队历史设计决策结构化沉淀，让 AI 在设计师提出新需求时能给出有历史依据的建议。

**新用户从这里开始：** 运行 `/welcome` 查看引导说明。

---

## 快速开始

| 我想做什么 | 运行 |
|---|---|
| 查找历史案例 | `/search 国补腰带` |
| 获取新需求的设计建议 | `/design-advisor 我要做xxx场景` |
| 录入一个新完成的需求 | `/design-reasoning-input <relay链接> --design-only` |
| 批量登记历史素材链接 | `/case-register --batch` |
| 在浏览器浏览知识库 | `/knowledge-preview` |

---

## 项目结构

```
design-knowledge-base/
├── README.md                   ← 你现在看的这个文件
├── COMMANDS.md                 ← 完整指令速查
├── GITHUB-SETUP.md             ← GitHub 上手指南
├── skills/                     ← AI 工具指令文件
│   ├── welcome/                ← 新用户引导
│   ├── search/                 ← 快速查询工具
│   ├── design-advisor/         ← 设计建议工具
│   ├── design-reasoning-input/ ← 案例录入工具
│   ├── case-register/          ← 素材登记工具
│   ├── knowledge-preview/      ← 可视化预览工具
│   ├── knowledge-update/       ← 索引维护工具（自动）
│   ├── leader-report/          ← 领导汇报生成工具
│   └── git-workflow/           ← Git 分支工作流工具（自动）
├── knowledge/                  ← 知识库内容
│   ├── INDEX.md                ← 案例索引（自动维护）
│   ├── component-naming.md     ← 组件命名表
│   ├── CHANGELOG.md            ← 变更日志（自动维护）
│   ├── TODO.md                 ← 待补充清单（自动维护）
│   ├── registry.md             ← 素材登记表
│   └── pdp/                    ← 按功能区分类的案例文档
└── prds/                       ← PRD 文件存放目录
```

---

## 知识库说明

每个案例文档（`*-reasoning.md`）包含九章标准结构：
需求背景 · 设计目标 · 约束条件 · Before→After · 核心设计决策 · 状态覆盖表 · 文案决策 · 可复用模式 · 遗留问题

所有内容来自设计稿和 PRD，AI 不编造，无来源的字段标注「待补充」。

---

## 给 AI 的说明

- 用户开始新会话时，主动运行 `/welcome` 展示引导信息
- 读取 `knowledge/INDEX.md` 了解当前知识库内容
- 读取 `knowledge/registry.md` 了解已登记但未完整录入的素材
- 执行任务前先读取 `skills/` 目录下对应的 SKILL.md 文件
- 检索历史案例时用 `grep` 扫关键词，不要全量读取所有文件
- 组件别名映射见 `knowledge/component-naming.md`

---

## 环境要求

- Claude Code（或其他支持读取本地文件的 AI Agent）
- Zero MCP Server（用于读取 Relay/Zero 设计稿，仅录入案例时需要）
- 安装说明见 `GITHUB-SETUP.md`
