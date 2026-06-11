---
file: variants
bundle_part_of: design.md
slug: back-to-top
last_synced: "2026-06-03"

# bundle: 形态与变体。relay_source 单点存储在 design.md。
---

# 返回顶部 · 变体 Variants

> design.md → [主文档](./design.md) · 同 bundle: [spec](./spec.md) · [behaviors](./behaviors.md)

## 变体维度概览

- **形态**：普通形态（本版仅此一种）
- **模式**：浅色 / 暗色（随系统外观）
- **状态**：默认态（未选中）/ 点击态（按下，pressed）

> 本组件**无持续选中语义**——「点击态」是按下瞬时反馈，松手即回默认态。Relay 中的「选中态」命名按此归一为 pressed（见 [behaviors.md](./behaviors.md) Relay 残留）。

## 4 态详规

### 1 · 浅色 · 默认态
浅玻璃材质（gradient `#F7F7F7`/blend color_burn,darken + 投影 `0 4 20 .08`）+ 透明图标容器，箭头 `#11141a`。

### 2 · 浅色 · 点击态
材质不变，图标容器叠 `#F2F4F7`（plus_darker）底衬压暗，箭头 `#11141a`。

### 3 · 暗色 · 默认态
暗玻璃材质（opacity .6 + Glass Effect 黑 20% screen 叠加 + 投影 `0 8 40 .12`）+ 透明图标容器，浅色箭头。

### 4 · 暗色 · 点击态
材质不变，图标容器叠 `#14171A`（plus_lighter）底衬提亮，浅色箭头。

> 各态视觉值见 [spec.md](./spec.md)。

## 状态机

```
默认态  ──按下──▶  点击态
   ▲                 │
   └─────松手────────┘
```

- 单一交互轴：按下 / 松手；无 hover / disabled / loading 态。
- 模式切换（浅↔暗）由系统外观驱动，与状态正交。

## 溢出 / 降级

- 组件为定尺 40×40 atom，无内容溢出场景。
- 不随容器伸缩、不换行、不裁剪。
