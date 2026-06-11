---
file: _assets-cdn
slug: video-tabbar-atom
last_synced: "2026-05-26"
purpose: 维护 视频场域底导-单坑原子 依赖的位图切图 CDN 引用清单
---

# 视频场域底导-单坑原子 · 位图切图 CDN 清单

> 本组件用到的位图（IMAGE fill 资产）。token / 矢量都无法表达位图，必须由 CDN 托管。

## 切图清单

| 用途 | 状态 | 渲染 size | @3x size | CDN URL |
|---|---|---|---|---|
| 营销态 / icon 态 圆形位图插槽样品（绿色护肤品瓶子）| ✅ 已上传 | 44×44 圆形 | 132×132 | `https://img20.360buyimg.com/img/jfs/t1/441995/17/1610/25673/6a154079F266c5a7b/0276084084a42ebe.png` |
| 双列场景 light - default form 页面级 mock | ✅ 已上传 | 375×812 | 1125×2436 | `https://img14.360buyimg.com/img/jfs/t1/442030/25/1759/206783/6a154137F62b5ae1d/027646598476c9c9.jpg` |
| 沉浸视频场景 dark - default form 页面级 mock | ✅ 已上传 | 375×812 | 1125×2436 | `https://img12.360buyimg.com/img/jfs/t1/441982/1/1532/1861702/6a1540ffF1c1ae5bb/02764659841a79c1.png` |

## 待办

- [ ] **icon 库决策**：透明层 20×20 复用 99 处的 icon 占位 — 应改用 V16 icon library 矢量（待 `foundations/components-base/icon-home` / `icon-video` 录入）。**不计入本切图清单**
- [ ] 营销/icon 圆形位图样品图（绿色护肤品）是**插槽样品**，生产时业务方注入不同位图（频道头像 / 商品营销图等）—— 设计师澄清「icon 态 vs 营销态」的真实视觉区分（不同 imageHash / 不同底色 / 不同 badge 形状？）

## 关联

- 同目录：[design.md](./design.md) / [spec-page.html](./spec-page.html)
- 位图侦测规则：`relay-to-design-md` skill `references/cutout-detection.md` (v0.5.2+)
