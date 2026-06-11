# Space Spec

## Tokens

| Token / Value | Usage |
|---|---|
| `15%` | Marketing scroll module default exposed ratio. |
| `8%` | Extreme correction when many cards or whitespace perception is needed. |
| `48px` | Minimum exposed width for clear scroll affordance. |
| `168px` | Maximum exposed width before current card readability is affected. |
| `12px` | Compact component spacing, tag-text spacing, icon-text spacing. |
| `18px` | Large button or tab internal spacing. |
| `24px` | Example margin and card gap in scroll calculation. |

## Color Tokens

| Role | Token | Value |
|---|---|---|
| Primary text | color_title | `#171a26` |
| Secondary text | color_text | `#3d414d` |
| Helper text | color_text_help | `#828794` |
| Brand / emphasis | color_primary | `#ff0f23` |
| Border | color_border | `#11141a14` |
| Page background | color_background_page | `#f2f3f7` |
| Container background | color_background_component | `#f5f6fa` |
| Card background | white | `#ffffff` |

## Inheritance Map

| Type | Content | Inheritance |
|---|---|---|
| Layout | Page layout rules, content layout rules | Extended inheritance |
| Grid | Column rules, grid calculation logic, content container rules | Partial inheritance |
| Space gradient | Base spacing gradient, spacing design principles | Partial inheritance |
| Hierarchy system | X/Y/Z axis hierarchy rules | Full inheritance |
| Safe area system | Top safe area and bottom safe area rules | Full inheritance |

## Scroll Formula

```text
Exposed width = current container width * 15%
Card width = (current container width - left margin - right margin - gap * N - exposed width) / N
```

Example:

```text
Container width = 1125px
Left margin = 24px
Right margin = 0px
N = 1 complete card
Exposed width = 1125 * 15% ≈ 169px
Card width = (1125 - 24 - 0 - 24 * 1 - 169) / 1 = 908px
```

## Component Spacing

| Space | Structure | Example |
|---:|---|---|
| 12 | Button | Text and icon-text combination |
| 18 | Large button / tab | Text and icon-text combination |
| 12 | Tag and text | Tag with title or body text |

## Visual Notes

- Page container styles, table styles, document header images, and red annotation marks are presentation aids, not the core spacing specification.
- Use HTML/CSS diagrams in generated spec pages before relying on screenshots.
