# relay-to-design-md · 5 分钟概览

> 设计师给个 Relay URL → skill 自动产出 design.md + 主动分文件夹 + 校验 + hand-off brief。

## 它做什么

```
Input:  Relay URL (任何一个有访问权的设计稿节点)
Output: ✅ design.md(或 page-doc bundle 4-7 文件,自动选)
        ✅ 文件分类好(level / bg / 部门 / 业务 → 完整 wiki 路径)
        ✅ INDEX.md 自动更新(双向追溯)
        ✅ hand-off brief(列出你需要 review / 补什么)
```

替代之前手工 1-2 天的工作量 → **30-60 分钟**。

## 4 阶段 pipeline

```
Relay URL
   │
   ▼
[1] 内容抽取       ← 自动抽 frontmatter / 章节 / 视觉解剖 / token / 变体 / 稿件 bug
   │
   ▼
[2] 文件组织       ← 推断目标路径 + 创建文件夹 + 写文件 + 更新 INDEX
   │
   ▼
[3] 校验           ← frontmatter / 受控词表 / 路径解析 / 跨文件引用
   │
   ▼
[4] Hand-off       ← 列出"我做了什么" + "你要补什么" + "下一步"
```

详见 [SKILL.md](./SKILL.md) 11 step 完整执行流程(本文件是 4 阶段视角的摘要)。

## 怎么用

```bash
# 第 1 次用 → 看 ADOPTION.md
cat ADOPTION.md

# 跑 outline(不写文件)
/relay-to-design-md https://relay.jd.com/file/design?id=...

# 确认 outline → 生成正式 design.md
/relay-to-design-md https://relay.jd.com/file/design?id=... --confirm-outline
```

## profile 系统

skill 跑同一份 Relay 给不同团队会出不同的 design.md —— 因为各团队的:
- token 体系不同
- frontmatter schema 不同
- wiki 路径规则不同
- bg / level / 部门词表不同

这些都在 `profiles/<team>/` 里配置。

| Profile | 用途 | 状态 |
|---|---|---|
| [`jd-v16`](./profiles/jd-v16/) | JD V16 默认 profile | ✅ stable(default)|
| [`jd-v15`](./profiles/jd-v15/) | JD V15(冻结,仅 review)| 🧊 frozen |
| [`generic`](./profiles/generic/) | 外部团队 fork 起点 | 📋 template |

```bash
# 默认走 jd-v16
/relay-to-design-md <url>

# 切其它 profile
SKILL_PROFILE=generic /relay-to-design-md <url>
SKILL_PROFILE=my-team-x /relay-to-design-md <url>
```

## 文档导航

| 你是谁 | 看哪个 |
|---|---|
| **第 1 次用 skill 的设计师** | [ADOPTION.md](./ADOPTION.md) 4 步上手 |
| **遇到错 / 不懂的现象** | [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) 12 个 Q&A |
| **想给团队加 profile** | [CONTRIBUTING.md](./CONTRIBUTING.md) Part 1 |
| **二次开发 skill 核心** | [SKILL.md](./SKILL.md) 11 step + [CONTRIBUTING.md](./CONTRIBUTING.md) Part 3 |
| **想看真实产出案例** | [examples/](./examples/) navbar-search-day / video-tabbar |
| **想知道 wiki ↔ Relay 怎么追溯** | [INDEX.md](./INDEX.md) + [references/traceability.md](./references/traceability.md) |

## 核心约定(短版)

1. **frontmatter 是 single source of truth** — `level` / `bg` / `slug` / `relay_source` 等改这里
2. **`<!-- TODO 设计师补 -->` 不是错误** — 是 skill 把"需要业务判断"的部分明确标出来留给你
3. **INDEX.md 自动维护** — 别手 edit,跑 `bin/sync-index.sh --write`
4. **profile 不动 skill 核心,skill 核心不假设 profile** — 两边解耦
5. **不嵌入设计师文字标注的截图** — 文字必须在 design.md 结构化(见 design-md-to-spec-page skill)

## 关联 skill

| Skill | 输入 | 输出 |
|---|---|---|
| **`relay-to-design-md`(本)** | Relay URL | design.md / bundle |
| [`design-md-to-spec-page`](../design-md-to-spec-page/) | design.md / bundle | spec-page.html(单组件页)|
| [`design-md-to-portal`](../design-md-to-portal/) | 所有 design.md | docs/design.html(总站)|
| [`design-review`](../design-review/) | Relay 节点 | 合规走查报告(5 段式)|

## 版本

当前:**v1.0**(2026-05-27 标准化)。之前 v0.5.4 是单一 V16 team 内部版,本次重构加 profile 系统 / 4 阶段 pipeline 视角 / 完整文档体系。

历史详见 [SKILL.md](./SKILL.md) 末尾「版本历史」段。
