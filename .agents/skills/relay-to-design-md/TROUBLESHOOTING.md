# TROUBLESHOOTING.md · 常见问题 + 解法

> 跑 skill 过程中遇到错 / 不知道怎么办,先来这里查。

## Q1 · 我不知道这个组件是 `level: component-base` 还是 `component-business`,也不知道是不是 `page`?

判断启发:

| 你的情况 | level |
|---|---|
| 通用 UI 元素(button / icon / input / divider / tabbar)| `component-base` |
| 跨业务复用的复合组件(ProductCard / CartItem / OrderSummary)| `component-business` |
| 业务特定的一个"页面 / 场景"(首页底导 / 视频频道 / 直播间)| `page` |
| 跨多页面的"用户走向"(注册 / 下单 / 退款 / onboarding)| `flow` |

仍不确定 → **填 `component-base` 让 skill 跑下去**,后面 hand-off brief 会提示 ⚠️,你 review 时再改。

## Q2 · 推断的 bg / slug / level 错了,怎么改?

skill 跑完 Stage 1 会把推断结果写到 outline 的 frontmatter `auto_detected` 段。

**改法**:

```bash
# 1. 看 outline 推断结果
cat <bundle-dir>/design-outline.md | head -20

# 2. 在跑 Step 3 之前,手动编辑 outline
$EDITOR <bundle-dir>/design-outline.md
# 改 level / bg / slug 字段

# 3. 跑 --confirm-outline,skill 用你改完的值
/relay-to-design-md <url> --confirm-outline
```

或者直接告诉 AI:"slug 改成 X" / "这个组件其实是 page level",AI 会用你的值覆盖推断。

## Q3 · Token 反查显示 ⚠️ unmapped 怎么办?

意思:Relay 里某个 hex / fontSize 不在你 profile 的 `token-catalog.json` 里。

| 情况 | 解法 |
|---|---|
| hex 真的是新增 token | 提 issue 给 token 维护者加进 tokens.json(profile 长期 sync 该源)|
| hex 是 Relay 设计师手写(没用 token) | 标 `⚠️ token-miss flag`,提示 review 时回流给设计师改 |
| 字号是 half-step(10.5 / 13.5)| 标 `⚠️ half-step`,通常归 10 或 14 |
| 是 V15 token(`garay_1` 拼写) | skill 自动 alias 到 V16(`gray_1`),无需改 |

**短期不阻塞**:hand-off brief 会列出所有 ⚠️ 位置,你 review design.md 时手动补。

## Q4 · "preflight gate 阻断了" 是什么意思?

skill 在抽取大稿前会做一次预检(Step 4.5 preflight gate)。常见阻断:

| 阻断原因 | 解法 |
|---|---|
| `nodeCount > 1200`,整页 root 必爆 token | 给 skill 指定 `--chunked` flag 走分块抽取;或先给 atom 子节点单独跑 |
| Relay MCP 连不上 | 检查 zero-design MCP 状态;重连后再跑 |
| 节点 ID 不存在 / 不可访问 | 复制 URL 确认 node_id 部分;检查 Relay 权限 |
| 文件 ID 不在 `bg-mapping.json` | profile 加一行映射;或 fallback `horizontal`(skill 自动)|

## Q5 · bundle 类型选错了能换吗?(选了 single 但其实该 page-doc)

可以,**不要重跑 skill**(会丢人工补的内容),手动改:

```bash
# 1. 加 bundle 字段到 design.md frontmatter
$EDITOR <bundle-dir>/design.md
# 加: bundle: page-doc
#     bundle_files: [design.md, spec.md, variants.md, behaviors.md]

# 2. 从 templates/page-doc/ 拷其它 md 模板
cp .agents/skills/relay-to-design-md/templates/page-doc/{spec,variants,behaviors}.md \
   <bundle-dir>/

# 3. 跑 validate.sh 看缺什么
bash .agents/skills/relay-to-design-md/bin/validate.sh <bundle-dir>/design.md
```

## Q6 · 想中途取消 / 改方向?

skill 默认两阶段:
- **Step 1-7 outline 阶段**:只读 Relay + 生成 outline,**不写任何 wiki 文件**。这阶段取消 = 啥都不做
- **Step 8-11 `--confirm-outline` 阶段**:写 design.md / INDEX.md。**写之前最后一个反悔机会** = 不加 `--confirm-outline`

如果已经写了文件想取消 → 见 Q7。

## Q7 · 怎么删一个录错的 design.md?

```bash
# 1. 删 bundle 目录
rm -rf <bundle-dir>

# 2. INDEX.md 删那行(手工)
$EDITOR .agents/skills/relay-to-design-md/INDEX.md
# 或者跑 sync-index.sh 自动 reconcile(TODO,目前手工)

# 3. 如果已经 commit 了 → git revert 那个 commit
git revert <sha>
```

## Q8 · INDEX.md 自动生成的 entry 错了 / 想改 owner 等?

INDEX.md 由 `bin/sync-index.sh` 维护:

```bash
# 看当前 entries
cat .agents/skills/relay-to-design-md/INDEX.md

# 改 design.md frontmatter 后,重 sync
bash .agents/skills/relay-to-design-md/bin/sync-index.sh --write
```

如果 sync 还是错 → 手动 edit INDEX.md(它不严格 enforce 不写,只是约定)。

## Q9 · 推断出来的"部门 / 业务"(L3 page)字段是 null 不让我写?

**这是 by design**。L3 page 必须显式归属某个设计部门,skill 不替你猜。

```yaml
auto_detected:
  design_dept: null    # ⚠️ 阻塞,必须 review 补
```

解法:

1. 看 [profiles/jd-v16/controlled-vocab.json](./profiles/jd-v16/controlled-vocab.json) `design_dept.values` 13 个选一个
2. 编辑 outline frontmatter 加 `design_dept: comprehensive-business`(或你的)
3. 再跑 `--confirm-outline`

## Q10 · 同一个 slug 已经在 INDEX.md 了,skill 报冲突?

slug 跨 level 也唯一。两种解法:

| 你要的 | 怎么做 |
|---|---|
| 我要更新现有那条(不新增) | 直接编辑那个 bundle 的 design.md;不用 skill 录入 |
| 我真的要新建,只是名字撞了 | 改 outline frontmatter 的 slug,加 sub_business 前缀(如 `video-tabbar` → `video-tabbar-atom`)|

## Q11 · skill 跑出来的 design.md 完全不对,style 跟我想要的不一样

可能你用了错的 profile:

```bash
# 看你跑的时候用的是什么 profile
echo $SKILL_PROFILE   # 空 = 默认 jd-v16

# 试换 profile
SKILL_PROFILE=generic /relay-to-design-md <url>
```

如果 jd-v16 / generic 都不合,看 [CONTRIBUTING.md](./CONTRIBUTING.md) fork 自己的 profile。

## Q12 · skill 跑挂了 / 报错怎么 debug?

```bash
# 跑 skill 时加 --verbose(如果 skill 支持)
/relay-to-design-md <url> --verbose

# 看 validate.sh 全报告
bash .agents/skills/relay-to-design-md/bin/validate.sh

# 看 INDEX.md 同步状态
bash .agents/skills/relay-to-design-md/bin/sync-index.sh --dry-run
```

仍不行 → 提 issue 到 wiki 仓库,带:
1. Relay URL(脱敏后)
2. 你用的 profile
3. 错误输出 / 卡住的 step
4. 你期望的 design.md 长什么样

## 还有问题?

- 看 [examples/](./examples/) 找类似案例参考
- 读 [SKILL.md](./SKILL.md) 全流程定位是哪步出错
- wiki repo issue 提单 / @ 维护者
