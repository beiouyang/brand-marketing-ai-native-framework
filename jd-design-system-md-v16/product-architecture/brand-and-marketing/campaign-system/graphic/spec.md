# Campaign System Graphic Spec

## Role Tokens

| Role | Purpose | Output Requirement |
|---|---|---|
| Identification | Build stable recognition for business, activity, or scene. | Keep the core silhouette, metaphor, or semantic anchor stable. |
| Information support | Help users understand topic, benefit, category, or entry. | Do not replace essential text such as title, price, or benefit copy. |
| Atmosphere | Extend campaign tone and visual emotion. | Change style and composition only when scene recognition remains clear. |

## Color Tokens

| Role | Token | Value |
|---|---|---|
| Primary text | 基础颜色/文本色/一级文本 | `#171a26` |
| Secondary text | 基础颜色/文本色/二级文本 | `#3d414d` |
| Helper text | 基础颜色/文本色/三级文本 | `#828794` |
| Border | 线 Line（颜色）/color_border | `#11141a14` |
| Container background | 基础颜色/背景色/卡片内容器背景 | `#f5f6fa` |
| Page background | 基础颜色/背景色/页面背景 | `#f2f3f7` |
| Brand red | 品牌色/jdred / jdred_6 | `#ff0f23` |
| White | 灰阶/white | `#ffffff` |

## Effect Tokens

| Role | Value | Usage |
|---|---|---|
| Selected icon effect | `DROP_SHADOW #f5000080`, offset `(0.7897, 0.7897)`, radius `0.7897` | Used for selected marketing icon states when the icon needs emphasis. |

## Graphic Types

| Type | Definition | Usage |
|---|---|---|
| Platform shape graphic | Long-term platform visual anchor. | Use when the graphic needs to reinforce JD platform identity or a persistent asset. |
| Semantic graphic | Business, identity, benefit, or campaign-node semantic graphic. | Use when users must recognize the same meaning across multiple campaign skins. |
| Scene graphic | Activity, festival, or atmosphere graphic. | Use when the page needs theme emotion or campaign context. |
| Theme graphic | Visual system graphic for a specific campaign theme. | Use when a campaign requires a coherent visual motif. |
| Category graphic | Product or category metaphor. | Use in category entrances, benefit clusters, and scan-first modules. |

## Asset Groups

| Group | Examples | Notes |
|---|---|---|
| Marketing icons | 月黑风高, 超级秒杀, 热卖榜单, 超级直播, 主会场, 万物试用, 白条免息, 百亿补贴, 京东外卖, 国家补贴, 品类好券, 低价会场, 全部会场, 好礼秒送, 1元起拍, 520好礼, PLUS补贴, 京东特价, 新品好物, 品牌联盟, 收起, 展开, 品牌会员, 品牌狂欢 | Exists in unselected and selected states. |
| Semantic examples | 低价热卖 `65` | Demonstrates stable semantic recognition with flat, metal, and glass styles. |
| Scene examples | 聚宝盆, 中式窗棂, 灯笼 | Demonstrates activity atmosphere and scene expression. |
| Category examples | 购物篮, 女包, 洗面奶, 数码, 木马, 沙发 | Needs full asset inventory in Phase 2. |

## Visual Notes

- SVG and bitmap assets in the Relay page are source assets, not automatically production CDN URLs.
- Document headers, section numbers, and annotation labels are presentation aids and should not be treated as business UI.
- Use static exported images for complex rendered graphic examples when exact material, lighting, or blur must be preserved.
- Keep text readable when graphics are used behind price, discount, or benefit copy.

## Validation Checklist

| Check | Expected Result |
|---|---|
| Semantic stability | Users can still recognize the same business meaning after style changes. |
| Scene clarity | Activity atmosphere is visible without hiding key information. |
| State clarity | Selected / unselected icon states are visually distinguishable. |
| Text safety | Graphics do not obscure title, benefit point, price, or action text. |
| Asset traceability | Exported graphics can be traced back to Relay node or asset name. |
