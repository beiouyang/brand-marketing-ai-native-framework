# Campaign System Materials Spec

## Role Tokens

| Role | Purpose | Output Requirement |
|---|---|---|
| Clarity | Keep campaign content readable and scan-friendly. | Material effects must not obscure title, price, benefit, or CTA text. |
| Atmosphere | Build campaign emotion through texture, light, depth, or surface quality. | Choose material strength according to campaign intensity and scene type. |
| Hierarchy | Separate primary information from supporting decoration. | Material detail should support focal hierarchy instead of creating competing focal points. |

## Color Tokens

| Role | Token | Value |
|---|---|---|
| Primary text | 基础颜色/文本色/一级文本 | `#171a26` |
| Secondary text | 基础颜色/文本色/二级文本 | `#3d414d` |
| Helper text | 基础颜色/文本色/三级文本 | `#828794` |
| Border | 线 Line（颜色）/color_border | `#11141a14` |
| Page background | 基础颜色/背景色/页面背景 | `#f2f3f7` |
| Header soft background | 灰阶/gray_10 | `#11141a05` |
| Header border | 灰阶/gray_9 | `#11141a14` |
| Header text | 灰阶/gray_1 | `#11141a` |

## Material Types

| Type | Definition | Expression Dimension | Recommended Usage |
|---|---|---|---|
| Flat material | Uses two-dimensional expression and strengthens material detail through stable layout and graphic relationships. | 2D | Daily campaign visuals, base activity communication, and scenes where clarity is the priority. |
| Color material | Adds color gradients, light effects, and layered color relationships on a flat base. | 2.5D | Themed campaigns, trend-driven visuals, and scenes that need stronger attraction. |
| Realistic material | Uses three-dimensional space, realistic surfaces, and stronger light-shadow details. | 3D | Immersive campaign scenes, festival atmospheres, and visual moments requiring high emotional impact. |

## Inherited Materials

| Material | Source | Usage Note |
|---|---|---|
| Liquid Glass | JD APP 16.0 base design system | Use when translucent depth and layered light are needed. Confirm background contrast before production. |
| Frosted Glass | JD APP 16.0 base design system | Use when blur and softened depth help separate content layers. Avoid reducing text readability. |

## Layout / Presentation Notes

- Documentation page width is `5760px`; content blocks use a `450px` horizontal margin in the Relay source.
- Case cards use rounded image containers and large spacing between groups.
- Each material type currently has one visible case image followed by two gray placeholder slots.
- Document headers, section numbers, and helper labels are presentation aids and should not be treated as product UI assets.

## Asset Notes

| Asset Group | Examples | Notes |
|---|---|---|
| Flat material case | Daily campaign banner examples | Preserve as static image when exact campaign layout is needed. |
| Color material case | Starry background, flowers, columns, gradient light, decorative vectors | Complex composed visual; export as case image unless individual source assets are required. |
| Realistic material case | Coins, plush heart, basket, sticker, glow, product props | Complex composed visual; keep source traceability if exported to CDN. |

## Validation Checklist

| Check | Expected Result |
|---|---|
| Readability | Primary information remains readable on top of or near material effects. |
| Material fit | Material type matches campaign intensity and message priority. |
| Visual consistency | Mixed materials do not create obvious style conflict. |
| Asset traceability | Exported case assets can be traced back to Relay node or source asset name. |
| Placeholder review | Gray placeholder slots are confirmed as intentional or replaced before final release. |
