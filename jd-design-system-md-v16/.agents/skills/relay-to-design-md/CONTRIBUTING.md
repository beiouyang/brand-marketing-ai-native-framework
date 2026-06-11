# CONTRIBUTING.md · 怎么扩展这个 skill

> 想加新 profile / 改 mapping / 升级 skill 核心,看这个。

## Part 1 · 给你团队加 profile

最常见需求:你团队不用 V16 设计系统,想用 skill 但走自己的 token / 路径规则。

### 步骤

```bash
# 1. fork generic profile
cp -r .agents/skills/relay-to-design-md/profiles/generic \
      .agents/skills/relay-to-design-md/profiles/<my-team>

# 2. 编辑 4 个核心文件
$EDITOR profiles/<my-team>/frontmatter-spec.md       # 你团队的 design.md 字段
$EDITOR profiles/<my-team>/controlled-vocab.json     # level / bg / status 词表
$EDITOR profiles/<my-team>/path-rules.md             # wiki 路径规则
$EDITOR profiles/<my-team>/token-catalog.json        # 你的 token 体系(可选)

# 3. 在你的 wiki 仓库里加 bg-mapping(可选)
# 把团队的 Relay file_id → bg 映射写到 profiles/<my-team>/bg-mapping.json

# 4. 跑 skill 时指定
SKILL_PROFILE=<my-team> /relay-to-design-md <relay_url>
```

### 各文件作用速查

| 文件 | 必填 | 改什么 |
|---|---|---|
| `frontmatter-spec.md` | ✅ | design.md frontmatter 字段(必填项 + 可选扩展)|
| `controlled-vocab.json` | ✅ | `level.values` / `bg.values` / `status.values` 受控词表 |
| `path-rules.md` | ✅ | wiki 路径规则:`<repo>/<bg>/<level>/<slug>/` 或更复杂的层级 |
| `token-catalog.json` | ⚠️ 可选 | 留空 stub 时 skill 跳过 token 反查;填了走反查 |
| `bg-mapping.json` | ⚠️ 可选 | Relay file_id → bg 映射;留空时 fallback 默认 bg |
| `bundle-rules.md` | ⚠️ 可选 | single vs page-doc 选择规则;留空时全部 single |
| `README.md` | ✅ | 描述本 profile,便于他人理解 |

### 调试新 profile

```bash
# 1. 跑 skill 看 outline
SKILL_PROFILE=<my-team> /relay-to-design-md <test-relay-url>

# 2. 看 auto_detected 段是否合理
cat <bundle-dir>/design-outline.md | grep -A5 "auto_detected"

# 3. 跑 validate
bash .agents/skills/relay-to-design-md/bin/validate.sh <bundle-dir>/design-outline.md

# 4. 调 profile 后重跑,直到 outline 看起来对
```

## Part 2 · 修改 jd-v16 profile

V16 设计系统持续演进(新 token / 新部门 / 新 bg),profile 要跟着更新。

### 新 Relay 文件 → 加 bg-mapping

```bash
$EDITOR .agents/skills/relay-to-design-md/profiles/jd-v16/bg-mapping.json
# 加一行:
#   "<new file_id>": { "bg": "<bg>", "label": "...", "note": "..." }

git add profiles/jd-v16/bg-mapping.json
git commit -m "chore(profile): add bg mapping for <file_id>"
```

### 新 token 加进 catalog

```bash
$EDITOR profiles/jd-v16/token-catalog.json
# colors / typography / radius 等对应段加 key-value

# 跑测试 — skill 反查能识别新 token
/relay-to-design-md <relay-url-with-new-token>
```

### 新部门 / 业务

```bash
$EDITOR profiles/jd-v16/controlled-vocab.json
# design_dept.values 加新部门 slug

$EDITOR profiles/jd-v16/path-rules.md
# 如果新部门有特殊路径规则,补说明
```

## Part 3 · 修改 skill 核心(跨 profile 通用)

`bin/*.sh` / `SKILL.md` / `references/*.md` / `templates/*` 是跨 profile 共用的核心。修改要谨慎:

### `bin/validate.sh`

- 校验逻辑要支持 profile 切换(读 `$SKILL_PROFILE` 决定查哪个 controlled-vocab.json)
- 测试:`SKILL_PROFILE=generic bash bin/validate.sh` 应当也跑通

### `SKILL.md` 执行流程

- 不要 hardcode V16 路径 / token 名;用 `<profile>/...` 占位
- 加新 step 前评估是否所有 profile 都适用
- 版本历史段加条目

### `references/*.md`

- `auto-detect-rules.md`:跨 profile 通用算法(启发式)
- `node-type-mapping.md`:Relay 节点类型 → md 段映射(profile 无关)
- `slug-pinyin-fallback.md`:中文 slug 拼音 fallback(profile 无关)
- `traceability.md`:INDEX.md 双向追溯机制(profile 无关)

profile-specific 的内容(token catalog / 部门词表 / bg mapping)**不放 references/**,放 `profiles/<name>/`。

### `templates/`

- `templates/page-doc/`:6 文件 bundle 模板,**profile 无关**(任何团队的 page-doc 都用这套)
- `templates/component.md`:single 模板
- profile 决定**用哪些模板**,不决定**模板长什么样**

## Part 4 · 贡献新 profile 回 upstream

如果你的 profile 是通用的(其它团队也能用),欢迎 PR 回 upstream:

1. fork wiki repo / branch
2. 在 `profiles/<your-team>/` 加你的 profile
3. README.md 里说明:
   - 这个 profile 是给谁用的(团队 / 设计系统)
   - 跟 jd-v16 / generic 的差异
   - 维护者联系方式
4. 开 PR,描述里说明 motivation + 测试过的 Relay 案例
5. wiki 维护者 review + 合

## Part 5 · 报 bug / 提需求

- **profile bug**(token 反查错 / 路径推断错):提 issue 标 `[profile]` + profile 名
- **skill 核心 bug**(crash / wrong output 跨 profile):提 issue 标 `[skill]`
- **需求**(新功能 / 流程改进):提 issue 标 `[enhancement]`,附 motivation + 期望 UX

## 测试

skill 没有自动化测试,目前靠 dogfood:

- 改完 profile / skill → 跑一遍现有 examples(navbar-search-day / video-tabbar)看是否 regress
- 用 `validate.sh` 跑全仓 design.md 是否仍 0 ERROR
- 改 reference 时,同步 update 任何 references/ 中互相引用的链接

未来 TODO:加 GitHub Action 跑 validate.sh + skill smoke test。
