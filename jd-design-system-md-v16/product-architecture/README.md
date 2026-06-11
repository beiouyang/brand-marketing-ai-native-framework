---
zone: product-architecture
last_updated: 2026-05-25
status: stub
---

# 🏗 组织架构 · Organizational Architecture (V16)

> **业务线设计师的主战场**。V16 期间 **组织框架(13 设计部门)与 V15 一致**,本目录暂作占位;详细的部门列表 / slug 命名约定 / 标准目录结构见 V15 真相源:
>
> → **[`jd-design-system-md/product-architecture/README.md`](../../jd-design-system-md/product-architecture/README.md)**

---

## 为什么 V16 暂为 stub

- V16 阶段的瓶颈在 token 层 + Foundation 重做(见 [`../../MIGRATION-V15-TO-V16.md`](../../MIGRATION-V15-TO-V16.md));组织维度的 13 部门 slug **结构不变**,没必要复制一份维护
- 各设计部门首次录入业务时,可以直接在 V16 路径 `jd-design-system-md-v16/product-architecture/{slug}/` 建子目录开始(token 命名走 V16 体系),无需等本 README 升级到完整版
- 当 V16 实际录入超过 V15 时,本 stub 会替换成完整 README;在那之前请以 V15 README 为准

---

## V16 期间录入约定

| 场景 | 路径 |
|---|---|
| 业务页面 / 场景已在 V15 录过,只是要升 token | 继续在 V15 路径维护(`jd-design-system-md/product-architecture/{slug}/...`),迁到 V16 token 命名时统一搬到 V16 路径 |
| **V16 后新录入**的业务页面 / 场景 | 直接落 V16 路径(`jd-design-system-md-v16/product-architecture/{slug}/...`),按 13 部门 slug |
| 业务组件(ProductCard / CartItem 等跨业务复用) | **不在本 Zone**,见 `jd-design-system-md/horizontal/components-business/`(V16 期间延期,见 [MIGRATION 架构级目录迁移](../../MIGRATION-V15-TO-V16.md#架构级目录迁移)) |

---

## 顶层入口

- `spec-page.html` — V16 5 Zone 跨页导航的本 Zone 入口页(顶部 5 Zone tab 互跳)
- 本 README — V16 录入约定 + cross-link 到 V15 完整框架

---

## 相关

- V15 真相源:[`../../jd-design-system-md/product-architecture/README.md`](../../jd-design-system-md/product-architecture/README.md)
- 架构级目录迁移说明:[`../../MIGRATION-V15-TO-V16.md#架构级目录迁移`](../../MIGRATION-V15-TO-V16.md#架构级目录迁移)
- 13 部门 slug 落定 issue:[#79](https://github.com/ShuaiMXu/jd-design-wiki-proposal/issues/79)
