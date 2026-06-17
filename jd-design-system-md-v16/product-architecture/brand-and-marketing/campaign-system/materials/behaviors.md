# Campaign System Materials Behaviors

## Interaction

- Materials are primarily visual presentation rules, not standalone interactive components.
- When material examples are used as clickable campaign entries, pair the material visual with readable title, benefit, and action text.
- Material intensity may change by campaign stage, but the underlying information hierarchy should remain stable.
- If glass, blur, glow, or realistic props appear behind text, confirm readability at the target display size.

## Constraints

- Keep text readability above material expressiveness.
- Do not combine highly different material styles in the same visual area without a clear hierarchy.
- Use realistic material only when it improves atmosphere or scene recognition.
- Treat document section labels, gray placeholders, and page chrome as documentation structure rather than production assets.
- Preserve the relationship between material type and application scenario when generating or adapting campaign visuals.

## Donts

- Do not let complex light-shadow or high-detail textures compete with primary information.
- Do not use realistic material for every campaign scene by default.
- Do not treat inherited Liquid Glass / Frosted Glass as free-form decoration; keep the base design system constraints.
- Do not export gray placeholder containers as final campaign examples.
- Do not mix unrelated props, gradients, and textures until the campaign theme becomes unclear.

## Application Scenarios

| Scenario | Recommended Rule |
|---|---|
| Daily campaign banner | Prefer flat material; keep layout stable and content readable. |
| Themed campaign module | Use color material to strengthen atmosphere while keeping the main message clear. |
| Festival or immersive campaign | Use realistic material when props and depth help users understand the scene. |
| Glass-like surface | Use inherited Liquid Glass or Frosted Glass rules and verify contrast. |
| AI-generated campaign UI | Select material type first, then decide expression dimension and asset treatment. |

## AI Generation Rules

- Start by choosing the material type: flat, color, or realistic.
- Match expression dimension to scenario intensity: daily `2D`, themed `2.5D`, immersive `3D`.
- Preserve readable text zones before adding texture, glow, blur, or props.
- Use static case images for complex marketing compositions that cannot be reliably reproduced with simple tokens.
- Keep source asset names or Relay node references when exporting material examples.
