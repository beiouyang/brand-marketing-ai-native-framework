---
name: profile-jd-v16
description: JD APP 16.0 Design System profile, default profile when SKILL_PROFILE env var not set
metadata:
  team: JD V16
  status: stable
  last_synced: "2026-05-27"
---

# Profile: JD V16

`SKILL_PROFILE=jd-v16` 时 skill 使用本目录的所有 config。这是 **default profile** —— 不设环境变量时也走这里。

## 包含什么

| 文件 | 作用 | SKILL.md 哪步用 |
|---|---|---|
| `frontmatter-spec.md` | design.md / design-outline.md frontmatter 字段定义 + 受控词表 | Step 8(写 design.md) |
| `bg-mapping.json` | Relay file_id → bg 映射 | Step 3(推断 bg) |
| `controlled-vocab.json` | level / bg / status / 部门 / 业务 全词表 | Step 3 / Step 8 / validate.sh |
| `path-rules.md` | 路径推断规则:`<level> + <bg> + [<部门>/<业务>/] + <slug>` → 完整 wiki 路径 | Step 7(决定输出路径) |
| `bundle-rules.md` | bundle 类型选择规则:single vs page-doc(4-7 文件) | Step 8(套模板) |
| `token-catalog.json` | V16 token 全量(color / typography / radius / spacing / materials)用于反查 | Step 5(token 反查) |

## V16 特有的约束

| 特性 | 值 |
|---|---|
| **扩展 frontmatter 字段** | `design_dept` / `business` / `sub_business` / `owner_team` / `zone`(L3 page 级必填) |
| **受控 bg** | `horizontal` / `retail` / `health` / `finance` / `logistics` / `global` / `jx` / `industrial`(8 个) |
| **受控 level** | `component-base` / `component-business` / `page` / `flow` |
| **设计部门** | 13 个(综合业务 / 平台交易 / 黄流导购 / ...) |
| **bundle 默认** | L1 单组件 = single;L3 page = page-doc(4 文件) |
| **token 命名** | snake_case(`color_primary` / `gray_1` / `pingfang_regular/font_size_10_400`) |

## 想 fork 这个 profile

```bash
cp -r .agents/skills/relay-to-design-md/profiles/jd-v16 \
      .agents/skills/relay-to-design-md/profiles/<team-x>
# 然后编辑 frontmatter-spec / controlled-vocab / token-catalog 等
# 运行时:
SKILL_PROFILE=<team-x> /relay-to-design-md <relay_url>
```

详见 [CONTRIBUTING.md](../../CONTRIBUTING.md)。
