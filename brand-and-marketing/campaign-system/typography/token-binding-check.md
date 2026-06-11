---
file: token-binding-check
target: typography
checked_at: "2026-06-09"
token_source: "/Users/shaoziyan1/Desktop/👀YANYAN'S Dev/Projects📁/jd-design-wiki-proposal/jd-design-system-md-v16/foundations/tokens/tokens.json"
---

# Typography Token 绑定检查

## 结论

当前 Typography bundle 已改为引用 proposal 仓库里的 V16 token 真相源。绑定策略为：

`Relay variables → proposal tokens.json / color.md / typography.md → design.md & spec.md uses_tokens → spec-page.html`

## 色彩绑定

| Relay 变量 | Relay 值 | 绑定 token | proposal token 真值 | 状态 |
|---|---|---|---|---|
| `基础颜色/文本色/一级文本` | `#171a26` | `color_title` | `#11141a` | 语义绑定，hex 待校准 |
| `基础颜色/文本色/二级文本` | `#3d414d` | `color_text` | `#5a5e66` | 语义绑定，hex 待校准 |
| `基础颜色/文本色/三级文本` | `#828794` | `color_text_help` | `#8d9199` | 语义绑定，hex 待校准 |
| `基础颜色/品牌色/color-brand-primary` | `#ff0f23` | `color_primary` | `#ff0f23` | 精确命中 |
| `线 Line（颜色）/color_border` | `#11141a14` | `color_border` / `atom.mask.2` | `#11141a14` | 精确命中 |
| `基础颜色/线/间隔线` | `#00000014` | `color_border` | `#11141a14` | 语义绑定，alpha 色源不同 |
| `基础颜色/背景色/页面背景` | `#f2f3f7` | `color_background` | `#f2f4f7` | 语义绑定，hex 待校准 |
| `灰阶/gray_10` | `#11141a05` | `color_mask_fault_toleran` / `atom.mask.1` | `#11141a05` | 精确命中 |
| `灰阶/gray_9` | `#11141a14` | `color_border` / `atom.mask.2` | `#11141a14` | 精确命中 |
| `灰阶/gray_1` | `#11141a` | `atom.gray.7` | `#11141a` | 精确命中 |

## 字体绑定

| 用途 | 绑定 token | 来源 |
|---|---|---|
| 阅读型正文 | `pingfang_regular/font_size_14_400` | proposal `typography.md` §2.1 |
| 模块标题强化 | `pingfang_semibold/font_size_16_600` | proposal `typography.md` §2.2 |
| 页面级价格 / 数字强化 | `zhenghei_bold/font_size_24_600` | proposal `typography.md` §2.4 |

## 待校准点

- `#171a26 / #3d414d / #828794 / #f2f3f7` 在 proposal 多个 spec-page 中作为页面 UI 色值出现，但不等于 `tokens.json` 中对应语义 token 的正式 light hex。
- 当前先保留 Relay 营销页值，并绑定到正式语义 token；若后续设计系统要求严格 token hex，应把 Relay 页面值同步改为 `#11141a / #5a5e66 / #8d9199 / #f2f4f7`。
