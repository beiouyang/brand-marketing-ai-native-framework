# `.agents/` — 工具中立的 agent skills 根

本目录是仓库的 **canonical skills 存储**，遵循 [agentskills.io](https://agentskills.io) / Vercel Skills CLI 约定 —— 工具中立，任何符合 SKILL.md 规范的 AI agent runtime 都可以从这里读取。

## 当前 skill 列表

见 [`./skills/`](./skills/)，当前 8 个 skill。`.agents/skills/` 是 AI-native Operating System 的应用 / 工作流层，负责把规范录入、发布、走查、生成等重复流程沉淀为可执行能力。

## 跨 agent 兼容（symlink 约定）

不同 AI 工具默认从不同目录读 skill。本仓库通过 **symlink 指向 `.agents/skills/`** 让各 agent 共享同一份内容、零 drift：

| Agent runtime | 默认目录 | 仓库做法 |
|---|---|---|
| Claude Code | `.claude/skills/` | ✅ 已建 symlink → `../.agents/skills` |
| Cursor | `.cursor/skills/` | ⏸ 用到再加 symlink |
| Codex CLI / 其它 | `.agents/skills/` 或自定义 | ✅ 本身就是 canonical，直读即可 |

新增 agent 支持只需：
```bash
ln -s ../.agents/skills .<agent>/skills
git add .<agent>/skills
```

## 为什么不直接用 `.claude/skills/` 当 canonical？

`.claude/` 是 Claude Code 工具专属目录，把 canonical 放这里对非 Claude 用户造成认知偏倚（也容易让其它 agent 在自己的目录下重写、产生 drift）。`.agents/` 是工具中立标准名称，更适合做共享源。

历史背景：本仓库 2026-05-27 之前 canonical 在 `.claude/skills/`，跨工具协同时遇到 Codex 自动改写 `.Codex/skills/` 路径 + drift 问题，所以做了这次反转改造。
