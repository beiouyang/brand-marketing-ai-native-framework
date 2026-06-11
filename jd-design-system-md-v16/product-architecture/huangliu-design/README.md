---
zone: product-architecture
design_dept: huangliu-design
last_updated: 2026-06-08
---

# 黄流导购设计部 · Huangliu Shopping Guide

> 京东设计组织下的设计部门之一。本目录收该部门负责的业务及其页面 / 场景 / 工具。

---

## 业务清单

| 业务 | slug | 内容 |
|---|---|---|
| 商品详情 | `product-details` | 「商详大脑」AI 协同工作台(应用工程) → [[product-details/README.md]] |

> 其余业务待录入。

---

## 目录结构

```
huangliu-design/                     # 设计部门
└── product-details/                 # 业务:商品详情
    ├── README.md                    # DongBoot 工程说明
    ├── 产品框架设计文档.md            # (位于 JD-ProductDetails-web/brain-frontend/)
    ├── pom.xml                       # Maven 多模块聚合
    ├── JD-ProductDetails-app/        # 应用层
    ├── JD-ProductDetails-client/     # 接口层
    ├── JD-ProductDetails-main/       # 启动 / 配置层
    └── JD-ProductDetails-web/        # web 层 + brain-frontend (Vite/React)
```

> **注意**:`product-details/` 与本 wiki 其余 `design.md` / `spec-page.html` 性质不同 —— 它是一个**完整可部署的应用工程**(「商详大脑」,设计师的 AI 搭档),从独立仓库 `JD-ProductDetails` 迁入归并。构建 / 部署仍按工程自身的 DongBoot + Vite 流程,不走 wiki 的 Pages 发布。

## 维护

- **owner**:黄流导购设计部
- **review**:DS 维护组

## 迁移记录

- 2026-06-08:从独立 Coding 仓库 `JD-ProductDetails`(xingyun.jd.com/codingRoot/JD-Design-Wiki/JD-ProductDetails)整体迁入本路径,源仓库归档。
