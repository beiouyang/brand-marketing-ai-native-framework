---
file: _assets-cdn
slug: toolbar-general
last_synced: "2026-05-29"
purpose: 底部工具栏组件的图标 / 字体资产清单。图标已从 Relay exportAsync 导真 SVG 落 assets/icons/(单色 currentColor 适配深浅);价格数字体京东正黑 V2.3 数字子集存 foundations 共享 ../../assets/fonts/（去重）。cdn_url 待上传回填。
---

# 底部工具栏 · 资产清单

> **视觉还原原则**：HTML/CSS/SVG 优先;图标已导出真 SVG，spec-page 内联或引用 assets/icons/。截图仅 backup，不嵌文字标注。
> **来源 Relay**：file `2029484645871009793` / page `47:1447` / 根 `493:5296`。导出方式：`node.exportAsync({format:'SVG_STRING'})`。

## 图标（10，已导出 → assets/icons/）

| slug | 名称 | 尺寸 | Relay 源节点 | 颜色模式 | 文件 | cdn_url |
|---|---|---|---|---|---|---|
| `nav-shop` | 店铺 | 16×16 | `260:534`(621:118) | currentColor | assets/icons/nav-shop.svg | TBD |
| `nav-message` | 消息 | 16×16 | `260:275`(621:115) | currentColor | assets/icons/nav-message.svg | TBD |
| `nav-cart` | 购物车 | 16×16 | `260:365`(621:107) | currentColor | assets/icons/nav-cart.svg | TBD |
| `nav-more` | 其他（图形=home 房子） | 16×16 | `260:255`(635:603) | currentColor | assets/icons/nav-more.svg | TBD |
| `btn-cart` | 购物车+（金按钮内） | 20×20 | `608:1751`(717:7534) | currentColor(金#80512D/暗#B38B6D) | assets/icons/btn-cart.svg | TBD |
| `tab-live` | 直播 tab | 16×16 | `717:7753` | 多色(红底白条,radius2) | assets/icons/tab-live.svg | TBD |
| `chevron-right-8` | 展开 chevron(竖向) | 8×8 | `635:799` | currentColor(灰#8D9199/红#FF0F23) | assets/icons/chevron-right-8.svg | TBD |
| `coupon-ticket` | 凑单券标 | 24×24 | `522:1066`(522:6437) | 红 #FF0F23 | assets/icons/coupon-ticket.svg | TBD |
| `chevron-right-12` | 去凑单跳转箭头 | 12×12 | `31:90620`(522:6378) | 红 #FF0F23 | assets/icons/chevron-right-12.svg | TBD |
| `close-12` | 关闭 ✕ | 12×12 | `522:6381`(522:6379) | currentColor(灰#8D9199) | assets/icons/close-12.svg | TBD |

> 引用：单色图标用 `mask` + `currentColor`（随文字色变深浅）；多色（tab-live / coupon-ticket）用 `<img>` 直接引。

## 字体（价格数字体）

| 字族 | 用途 | 字形数 | 文件 | cdn_url |
|---|---|---|---|---|
| JD ZhengHei V2.3 | 价格数字（¥ / 0-9 / . / 货币 / 元，39 字形子集） | 39 | **共享** `../../assets/fonts/JDZHV2.3_{Regular,Bold}.otf`（foundations 级，去重不再各组件存一份） | TBD |

> 字体源**统一存 `foundations/assets/fonts/`**（2026-06-02 去重，原 toolbar 自带副本已删）；spec-page 已内联 base64 渲染不依赖该源。仅价格数字专用；内部 family name 为乱码 `____ V2.3`，引用须显式 `@font-face { font-family:"JD ZhengHei V2.3" }`。汉字回退 PingFang SC。
> 注意：JD 专有字体，仓库 PRIVATE 才能放；若对外公开站点需确认授权范围。

## 待办
- [ ] 图标 / 字体上传京东 CDN，回填 `cdn_url`
- [x] 医保蓝暗色态已补拉：暗 `#60A5FA`（≠浅 #0C82F7），白字（结算 953:27）
- [ ] 暗色「次要灰按钮」缺暗色态（订详暗色场景待补），补拉后回填 design.md

## 关联
- 同组件：[design.md](./design.md) / [spec-page.html](./spec-page.html)
- skill 原则：`.claude/skills/design-md-to-spec-page/SKILL.md` Step 4e「视觉还原优先级」
