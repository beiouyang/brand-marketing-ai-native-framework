---
name: generic-path-rules
description: 工具中立的最小路径规则模板
---

# Generic Path Rules

> Fork 后改成你团队的实际路径规则。

## 默认规则(最小)

```
<repo>/<bg>/<level>/<slug>/
```

例:
- `bg = retail`, `level = component`, `slug = button` → `retail/component/button/`
- `bg = health`, `level = page`, `slug = onboarding` → `health/page/onboarding/`

## 怎么改成多层级

如果你团队的 wiki 不是扁平结构(比如 JD V16 是 `product-architecture/<dept>/<business>/<slug>/`),编辑本文件:

1. 列出你的字段层级(dept / business / sub_business / etc.)
2. 写规则:`<repo>/<top>/<dept>/<business>/<slug>/`
3. 在 `frontmatter-spec.md` 加对应字段(`design_dept` / `business` / etc.)
4. 在 `controlled-vocab.json` 加 `design_dept.values` 等受控词表

## auto-detect 启发

最小启发:

- `bg`:由 Relay file_id 查 `bg-mapping.json`(可选,没文件就跳过)
- `level`:Relay 节点根 frame name 关键词(可改成你团队的术语)
- `slug`:节点 name normalize 成 kebab-case

详见 [auto-detect-rules.md](../../references/auto-detect-rules.md)(skill 核心,跨 profile 共用)。

## 冲突检测

| 检测项 | 行为 |
|---|---|
| 目标路径已存在 | 询问 overwrite / rename / abort |
| 同 slug 已在 INDEX.md | 提示重命名 |
| 任一字段 fallback | hand-off brief 显式列出 ⚠️ |
