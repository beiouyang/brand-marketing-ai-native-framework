# Space Behaviors

## Interaction

- Horizontal scroll is a layout variant. It should preserve the original column structure and only add sideways exploration behavior.
- Use the exposed card to indicate that more content is available off-screen.
- Keep the exposure ratio consistent across marketing scroll modules on the same page.

## Constraints

- Exposed width must be at least `48px`; otherwise the scroll cue is too weak.
- Exposed width should not exceed `168px`; otherwise current-card reading is affected.
- Use `15%` as the default exposure ratio.
- Reduce to `8%` only in extreme cases, such as too many cards or a need for stronger whitespace perception.

## Donts

- Do not use horizontal scroll for state switching.
- Do not compress single items just to fit more columns.
- Do not use dense horizontal layouts for precise click operations.
- Do not use four-column horizontal layouts for complex information.
- Do not mix different exposure ratios on the same page.

## Application Scenarios

| Scenario | Recommended Rule |
|---|---|
| Content exceeds one screen | Add horizontal scroll with `15%` exposed card. |
| Lightweight cards | Use two or three complete cards plus exposed card. |
| Height-constrained abstract content | Use four-column structure cautiously. |
| Key campaign content | Increase surrounding whitespace to create focus and pause. |
| Related content | Keep spacing continuous and compact to support decision flow. |

## AI Generation Rules

- Prefer the base JD APP 16.0 space system unless a marketing exception is listed here.
- For scroll modules, calculate exposed width from the active container width.
- Preserve the relationship between left margin, right margin, gap, exposed width, and complete-card count.
- Use semantic text and spacing tokens in output; avoid treating page annotation graphics as product UI assets.
