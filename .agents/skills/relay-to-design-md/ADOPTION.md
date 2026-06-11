# ADOPTION.md · 第 1 次用 skill 的 4 步清单

> 设计师 / 第一次用本 skill 的同事,看完这个文档就能跑通第一次。

## Step 0 · 5 秒预检

在你跑 skill 之前,确认这 3 件事:

- [ ] 你有 Relay URL(`https://relay.jd.com/file/design?id=...&page_id=...&node_id=...`)
- [ ] 你能在终端跑 Claude Code / Codex / 你用的 AI agent
- [ ] 你知道这个组件属于"哪个 level"(component-base / page / etc.)—— 不知道就先去看 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) Q1

## Step 1 · 确认 profile

```bash
# 在 wiki 仓库根目录下
ls .agents/skills/relay-to-design-md/profiles/
# 看到:jd-v16  jd-v15  generic
```

| 你的情况 | 选哪个 |
|---|---|
| JD V16 设计师录入 V16 组件 | `jd-v16`(默认,不用设环境变量)|
| JD V15 维护历史组件 | `jd-v15`(只做 review,不录入新)|
| 外部团队 / 自定义设计系统 | fork `generic` → 编辑 → `SKILL_PROFILE=<my-team>` |

**默认 `jd-v16`**,无需任何配置。

## Step 2 · 跑 skill 看 outline

```
/relay-to-design-md https://relay.jd.com/file/design?id=...&page_id=...&node_id=...
```

skill 跑完会给你一份 `design-outline.md`,展示:

- 自动推断了什么(`level` / `bg` / `slug` / `name_zh`)
- Relay 节点的章节结构(H2 大纲)
- 视觉令牌反查结果
- 变体矩阵
- 自动识别的稿件 bug(命名错位 / 占位 imageHash / 等)

**review outline → 决定是否进 Step 3**。如果推断错了,看 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) Q2 怎么改。

## Step 3 · 确认 outline,生成正式 design.md

```
/relay-to-design-md https://relay.jd.com/file/design?... --confirm-outline
```

skill 这次会:

1. **Stage 2 主动分文件夹**(根据你的 level / bg / 部门 / 业务)→ 目标路径如 `jd-design-system-md-v16/foundations/components-base/<slug>/`
2. 创建文件夹 + 写 `design.md`(+ 必要时同 bundle 的 `spec.md` / `variants.md` 等)
3. 更新 `INDEX.md` 加这条 entry
4. 跑 `validate.sh` 校验
5. 输出 **hand-off brief**

## Step 4 · 看 hand-off brief,做 review

brief 长这样:

```
==============================
✅ 自动完成
- 路径: jd-design-system-md-v16/foundations/components-base/<slug>/
- 文件: design.md + spec.md + variants.md (page-doc 模式)
- frontmatter: 12 字段
- 章节: 5 个(02.1-02.6 子节,共 12 张表)
- 视觉解剖: 3 atom + 2 组件 + 关系表
- Token 反查: 12 hex hit, 2 ⚠️ unmapped

⏳ 设计师待补(5 处 TODO)
- design.md:80 一句话定义
- design.md:88-94 应用场景 ✅ / ❌
- design.md:160-167 交互细节
- design.md:200 Donts 列表
- design.md:280 AI Schema 草案

⚠️ 稿件 bug(4 项,转 issue 模板已生成)
- 8 COMPONENT 共用占位 imageHash
- 选中-数字 命名错位(节点 286:17212)
- ...(详见 anatomy-drafts.md)

📋 下一步
- review design.md
- 跑 /design-md-to-spec-page <slug>  生成 HTML
- 或 git commit + open PR

==============================
```

**你的工作量**:

| 你做什么 | 时长 |
|---|---|
| 补 5 处 `<!-- TODO -->`(一句话定义 / 应用场景 / 交互 / Donts / AI Schema) | 15-30 分钟 |
| 把稿件 bug 转 issue / 回流给设计组 | 5-10 分钟 |
| 跑 `/design-md-to-spec-page <slug>` 出 HTML | skill 自动,几秒 |
| review HTML 视觉 → commit + open PR | 5-10 分钟 |

**端到端 30-60 分钟出一个完整 design.md + spec-page.html**(替代之前手工 1-2 天)。

## 常见踩坑

详见 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md):

- Q1: level 该选什么?
- Q2: 推断的 bg / slug 错了怎么改?
- Q3: token 反查显示 ⚠️ unmapped 怎么办?
- Q4: preflight gate 阻断了?
- Q5: bundle 类型选错了能换吗?
- Q6: 想中途取消 / 改方向?
- Q7: 怎么删一个录错的 design.md?
- Q8: INDEX.md 自动生成的 entry 错了怎么改?

## 你想知道更多

- [SKILL.md](./SKILL.md) — 完整 11 step 执行流程(给二次开发者)
- [profiles/jd-v16/](./profiles/jd-v16/) — V16 特定配置
- [examples/](./examples/) — 2 个真实产出案例
- [CONTRIBUTING.md](./CONTRIBUTING.md) — 加你团队的 profile
