# Space Variants

## Variant Dimensions

| Dimension | Values | Purpose |
|---|---|---|
| Column structure | Single, double, triple, four-column | Determines how many complete cards appear before the exposed card. |
| Exposure ratio | `15%`, extreme `8%` | Communicates horizontal browsability. |
| Spacing scale | `12px`, `18px`, `24px` | Controls component internal rhythm and scroll calculation. |

## Scroll Layout Patterns

| Column Structure | Exposure Ratio | Scroll Form | Usage Rule | Constraint |
|---|---:|---|---|---|
| Single column | `15%` | `1 + 15%` | Use when two items can be fully displayed, but total content exceeds one screen and should guide exploration. | Do not use for state switching. |
| Two columns | `15%` | `2 + 15%` | Use for lightweight, scan-first modules that need to indicate horizontal browsing. | Do not compress each item. |
| Three columns | `15%` | `3 + 15%` | Use for lightweight, scan-first modules that need to indicate horizontal browsing. | Do not use for precise clicking. |
| Four columns | `15%` | `3 + 15%` | Use for height-constrained modules with highly abstracted content. | Do not use for complex information or precise operations. |

## Compound Examples

| Pattern | Spacing | Example |
|---|---:|---|
| Floor title group | `12px` | Label/icon + floor title + arrow |
| Product title group | `12px` | Business-mode tag + product title |
| Benefit point group | `12px` | Icon + benefit copy |
| Large CTA group | `18px` | Icon + text + arrow in large button/tab |
