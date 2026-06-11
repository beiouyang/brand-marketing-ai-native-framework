---
file: _assets-cdn
slug: typography
last_synced: "2026-06-10"
purpose: 维护文字 Typography 依赖的图形化字体、示例图与位图切图 CDN 引用清单
bundle_part_of: design.md
---

# 文字 · 位图切图 CDN 清单

> 本规范用到的图形化字体、示例图、Logo 与装饰资源需要由 CDN 托管。当前 Relay 上下文已识别大量 SVG / 图形资源，正式发布前需去重并回填 CDN URL。

## 切图清单

| 用途 | Relay 节点 / 来源 | 尺寸 | CDN URL | 状态 |
|---|---|---|---|---|
| 页头装饰图 | `13495:125;13495:16` PNG | 待补 | 待补 | 待上传 CDN |
| 分隔装饰线 | `13533:16` SVG | 待补 | 待补 | 待上传 CDN |
| 分隔装饰线 | `13533:76` SVG | 待补 | 待补 | 待上传 CDN |
| 示例红色营销卡片背景 | 多个 `素材图` INSTANCE | 待去重 | 待补 | 待上传 CDN |
| 618 logo | 多个 `618 logo` SVG | 待去重 | 待补 | 待上传 CDN |
| 图形化字体示例装饰 | 多个 vector / ellipse SVG | 待去重 | 待补 | 待上传 CDN |
| 字体示例资源 | 方正摩登体、造字工房启黑体、HYJieLongTaoHuaYuan、HYYongZiPengLai 等示例 | 待补 | 待补 | 待确认授权 |
| 品牌字体案例切图 | `13533:20` / 品牌字体 | 760 x 300 | `./assets/font-style-cases/brand-font.png` | 本地切图，待上传 CDN |
| 通用风格案例切图 | `13533:27` / 通用风格 | 760 x 300 | `./assets/font-style-cases/general-style.png` | 本地切图，待上传 CDN |
| 时尚风格案例切图 | `13533:36` / 时尚风格 | 760 x 300 | `./assets/font-style-cases/fashion-style.png` | 本地切图，待上传 CDN |
| 活力风格案例切图 | `13533:47` / 活力风格 | 760 x 300 | `./assets/font-style-cases/vitality-style.png` | 本地切图，待上传 CDN |
| 传统风格案例切图 | `13533:56` / 传统风格 | 760 x 300 | `./assets/font-style-cases/traditional-style.png` | 本地切图，待上传 CDN |
| 科技风格案例切图 | `13533:67` / 科技风格 | 760 x 300 | `./assets/font-style-cases/tech-style.png` | 本地切图，待上传 CDN |

## 待办

- [ ] 对 Relay 中的 SVG / PNG / INSTANCE 资源去重。
- [ ] 确认字体授权、可商用边界和字体包来源。
- [ ] 导出需要作为发布页展示的关键示例图。
- [ ] 上传京东内部 CDN 并回填 CDN URL。
- [ ] `spec-page.html` 生成时只引用 CDN 或可公开访问资产，不引用本地临时资源。
- [ ] 当前 6 张风格字体本地切图需由设计稿原始 Relay 导出件复核；未安装的精确字体已使用同类本机字体临时生成。

## 设计原则

- 不在仓库中存放大体积位图资产。
- 动态文本不依赖图片文字承载。
- 字体授权信息与设计示例资产分开登记。
- 每张需要发布页展示的切图都登记用途、来源、尺寸、CDN URL 和状态。

## 关联

- 同目录：[design.md](./design.md)
- 视觉规范：[spec.md](./spec.md)
