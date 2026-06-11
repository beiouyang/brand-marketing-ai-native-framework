---
file: _assets-cdn
slug: foundations
last_synced: "2026-06-02"
purpose: Foundation 总览页的字体资产清单。价格/数字体京东正黑 V2.3 数字子集落 assets/fonts/，spec-page.html §样式段内联 base64 自包含。cdn_url 待上传回填。
---

# Foundation · 资产清单

> 约定同 [toolbar-general/_assets-cdn.md](../../foundations/components-base/toolbar-general/_assets-cdn.md)：价格/数字体走京东正黑 V2.3 数字子集，spec-page 内联 base64（自包含），源文件落 `assets/fonts/`。

## 字体（价格 / 数字体）

| 字族 | 用途 | 字形数 | 文件 | spec-page 引用 | cdn_url |
|---|---|---|---|---|---|
| JD ZhengHei V2.3（Regular 400）| 字阶展示页 zhenghei 常规态样例（¥/0-9/./货币）| 41 | assets/fonts/JDZHV2.3_Regular.otf | 内联 base64 @font-face | TBD |
| JD ZhengHei V2.3（Bold 700）| 字阶展示页 zhenghei 强化态样例 | 41 | assets/fonts/JDZHV2.3_Bold.otf | 内联 base64 @font-face | TBD |

> 内部 family name 为乱码（`____ V2.3` / `____ V2.3 Bold`），引用须显式 `@font-face { font-family:"JD ZhengHei V2.3" }`。
> 子集**仅含数字/¥/货币符号/标点，无中文、无拉丁字母** → 字阶样例文案用价格串（`¥618.00`），中文/字母按 `--font-zhenghei` stack 回落 PingFang。
> ⚠️ JD 专有字体，仓库 PRIVATE 才能放；对外公开站点需确认授权范围。

## 待办
- [ ] 字体上传京东 CDN，回填 `cdn_url`
