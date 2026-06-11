# Design Wiki Index

> **自动维护 — 不要手动编辑，会被 `bin/sync-index.sh` 覆盖。**
>
> Relay ↔ design.md 双向追溯索引。给一个 Relay node_id，能反查到 wiki 中的 md 路径。
>
> 见 [references/traceability.md](./references/traceability.md) 了解维护机制。
>
> 上次 sync: 2026-06-01（手工补 toolbar-general / typography 两条 —— bin/sync-index.sh 当前在 macOS BSD sed 崩 + 重建会丢 Bundle 列/串 node 字段，已修 sed 崩，余下重建 bug 待后续修后再交还脚本托管）

---

## L1 通用组件 (horizontal · component-base)

| Slug | Path | Bundle | Relay node | Owner | Last Synced |
|---|---|---|---|---|---|
| button | [jd-design-system-md-v16/foundations/components-base/button/design.md](../../../jd-design-system-md-v16/foundations/components-base/button/design.md) | **page-doc** (5 files) | `2029484645871009793 / 33:5 / 608:6` | @xushui2018 | 2026-06-02 |
| navbar-search-day | [.agents/skills/relay-to-design-md/examples/navbar-search-day/design.md](../../../.agents/skills/relay-to-design-md/examples/navbar-search-day/design.md) | single | `2029484645871009793 / 47:1 / 542:6495` | @xushuai133 | 2026-05-13 |
| tabbar | [jd-design-system-md-v16/foundations/components-base/tabbar/design.md](../../../jd-design-system-md-v16/foundations/components-base/tabbar/design.md) | **page-doc** (4 files) | `2029484645871009793 / 31:1 / 312:46893` | @xushui2018 | 2026-05-14 |
| toolbar-general | [jd-design-system-md-v16/foundations/components-base/toolbar-general/design.md](../../../jd-design-system-md-v16/foundations/components-base/toolbar-general/design.md) | **page-doc** (5 files) | `2029484645871009793 / 47:1447 / 493:5296` | @xushui2018 | 2026-06-02 |

---

## L2 业务组件 (component-business)

_（空 — 待 v0.3+ 业务文件接入）_

---

## L3 页面 (page)

> ⚠️ 本组 frontmatter 的 `auto_detected.bg` 为 ⚠️ fallback（file_id `1976604323748007938` 不在 bg-mapping.json，按视频场域目录推断 `comprehensive-business`）；`auto_detected.level` 也为 ⚠️ fallback（skill R5 自动推断为 flow，已矫正为 page）。
>
> Relay 源说明：page `286:1`「新逛底导设计」是当前确认的 wiki 真相源；node `286:16020`「导航类-逛底导状态」是完整设计板根 frame，包含 slot atom（`286:17175`）、Joy Agent atom（`286:17330`）、普通形态（`286:17512`）、Joy Agent 形态（`286:17382`）。

| Slug | Path | Bundle | Relay node | Owner | Last Synced |
|---|---|---|---|---|---|
| video-tabbar-atom | [jd-design-system-md-v16/product-architecture/comprehensive-business/content-ecosystem/video/video-tabbar/atom/design.md](../../../jd-design-system-md-v16/product-architecture/comprehensive-business/content-ecosystem/video/video-tabbar/atom/design.md) | single | `1976604323748007938 / 286:1 / 286:16020` | @xushui2018 | 2026-05-26 |
| typography | [jd-design-system-md-v16/product-architecture/brand-and-marketing/campaign-system/typography/design.md](../../../jd-design-system-md-v16/product-architecture/brand-and-marketing/campaign-system/typography/design.md) | **page-doc** (6 files) | `2059875217240489986 / 0:2 / 6:18` | @xushui2018 | 2026-05-28 |

---

## L4 流程 (flow)

_（空 — v0.4+ 启用）_

---

## 统计

- L1 通用组件：4 个
- L2 业务组件：0 个
- L3 页面：2 个
- L4 流程：0 个
- **总计**：6 个

---

## 使用方式

### 1. 从 Relay 反查 design.md

#### 仓库视角（offline 可用）

```bash
grep '542:6495' .agents/skills/relay-to-design-md/INDEX.md
```

#### Relay 视角（v0.3+，需 MCP 在线）

在 Relay 插件里点节点 → 读 `sharedPluginData('jd-design-wiki', 'design_md_path')`。

### 2. 从 design.md 反查 Relay

打开 design.md，frontmatter `relay_source.url` 字段。
