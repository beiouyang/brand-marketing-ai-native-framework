---
name: jd-v16-path-rules
description: 推断 design.md 在 V16 wiki 树里的目标路径,SKILL.md Step 7 调用本文件
---

# JD V16 Path Rules

> SKILL.md Step 7 调用本文件。给定 frontmatter(level / bg / design_dept / business / sub_business / slug),推断完整 wiki 路径。

## 总路径规则

```
<repo>/jd-design-system-md-v16/<zone>/<bg-or-dept>/[<sub-paths>/]<slug>/
```

`<zone>` 由 `level` 决定:

| level | zone | 示例 |
|---|---|---|
| `component-base` | `foundations/components-base/` | `foundations/components-base/tabbar/` |
| `component-business` | `horizontal/components-business/` | `horizontal/components-business/product-card/` |
| `page` | `product-architecture/` | `product-architecture/comprehensive-business/content-ecosystem/video/video-tabbar/` |
| `flow` | `flows/` | `flows/checkout/` |

## L1 / L2 通用组件(level = component-base / component-business)

```
jd-design-system-md-v16/horizontal/<zone>/<slug>/
```

无须 `design_dept` / `business`,因为通用组件**跨业务复用**,不属于任何一个部门。

| 字段 | 取值 |
|---|---|
| `level` | `component-base` 或 `component-business` |
| `bg` | 固定 `horizontal` |
| `design_dept` | 不填 |
| `business` | 不填 |

例:`tabbar` → `foundations/components-base/tabbar/`

## L3 业务页面(level = page)

```
jd-design-system-md-v16/product-architecture/<design_dept>/<business>/<sub_business>/<slug>/
```

L3 页面**属于某个设计部门下某条业务线**,需要部门 / 业务 / 子业务三级路径。

| 字段 | 取值 |
|---|---|
| `level` | `page` |
| `bg` | 业务实际归属(`retail` / `health` / etc.,L3 用 8 大 BG)|
| `design_dept` | 13 个设计部门之一 |
| `business` | 部门下业务 slug |
| `sub_business` | 业务下子场景 slug |
| `owner_team` | 设计组名称(中文,如"综合业务组")|

例:`video-tabbar-atom` → `product-architecture/comprehensive-business/content-ecosystem/video/video-tabbar/atom/`

## L4 流程(level = flow)

```
jd-design-system-md-v16/flows/<slug>/
```

跨多页面的流程(下单 / 注册 / 退款),按流程命名,不挂部门。

## auto-detect 启发

### bg
1. 查 `bg-mapping.json` Relay `file_id` → bg
2. 若 file_id 不在表中 → 看节点父 frame name 是否含「健康 / 金融 / 物流 / ...」关键词推断
3. fallback `horizontal`,标 ⚠️

### level
1. Relay 节点根 frame name 含「页面 / 流程 / scene」→ page / flow
2. 含「组件 / atom / variant」→ component-base
3. fallback `component-base`,标 ⚠️

### design_dept(L3 only)
1. 节点路径(parent frame 链)中含部门关键词
2. 询问用户(单选 13 个部门)
3. fallback `null`,人工补,**阻塞写文件**

### slug
1. Relay 节点 name → 半角小写 + `-` 连接
2. 若有中文 → 拼音 fallback(见 [slug-pinyin-fallback.md](../../references/slug-pinyin-fallback.md))
3. 重名冲突 → 加 sub_business 前缀(如 `video-tabbar-atom`)

## 冲突检测

| 检测项 | 行为 |
|---|---|
| 目标路径已存在 design.md 且 slug 不同 | 询问 overwrite / rename / abort |
| 同 slug 已在 INDEX.md L1-L4 任一组 | 提示并要求重命名(slug 跨 level 也唯一)|
| level / bg / dept 任一字段 fallback | hand-off brief 显式列出 ⚠️ 待人工 review |
