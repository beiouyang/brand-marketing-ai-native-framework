---
name: profile-jd-v15
description: JD V15.0 Design System profile (已冻结,仅用于 V15 历史组件 review)
metadata:
  team: JD V15
  status: frozen
  last_synced: "2026-05-27"
---

# Profile: JD V15 (frozen)

> V15.0 设计系统已冻结(2026-04 之后无新 token / 新部门),仅保留用于:
> - V15 既有组件 review(`design-review` skill 仍按 V15 走查)
> - V14 → V15 漂移追溯
> - 历史 wiki 文档维护

## 状态

- 不要用本 profile 录入**新** design.md(应走 `profiles/jd-v16/`)
- 仅做 V15 文档微调 / review / 历史对照用

## 与 V16 的主要差异

| 维度 | V15 | V16 |
|---|---|---|
| Token 体系 | 2 层混给(Token / Hex) | 3 层(Token / Atom / Hex 解耦)|
| 字号体系 | 含 12/15 字号 | 删 12/15,加 11/13/16/24 |
| Foundation 数 | 5 个 | 7 个(加 Lines + Materials)|
| Error 命名 | 与 Primary 同 hex 共用 | hex 层独立(WIP,仍共用 #FF0F23)|
| Z 轴 | 隐式 | 4 层显式 + 17 DP 悬浮底导 safe-area |

## 文件清单

最小复用 jd-v16 配置 + 标记冻结状态。新建 V15 内容请走 [profiles/jd-v16/](../jd-v16/)。
