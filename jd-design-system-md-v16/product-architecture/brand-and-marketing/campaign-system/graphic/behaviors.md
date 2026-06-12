# Campaign System Graphic Behaviors

## Interaction

- Marketing icons may switch between unselected and selected states.
- State changes should confirm navigation or active content, not change the graphic's business meaning.
- Semantic and scene graphics are usually non-interactive visual support unless explicitly used as an entrance.
- When a graphic is used as an entrance, pair it with readable text so the action remains clear.

## Constraints

- Keep core semantic recognition stable across activity cycles and visual styles.
- Do not let atmosphere graphics compete with primary information such as price, benefit, CTA, or title.
- Keep selected and unselected states distinguishable at the target display size.
- Preserve asset traceability: exported files should retain source node or asset mapping.
- Do not generate new graphic categories unless the use case cannot be represented by existing platform, semantic, scene, theme, or category groups.

## Donts

- Do not use graphics as a substitute for critical copy.
- Do not over-decorate small icons until the business meaning becomes unclear.
- Do not change the core silhouette of semantic graphics for every campaign skin.
- Do not mix unrelated scene metaphors in one module.
- Do not export document annotation marks, section labels, or layout helper backgrounds as product assets.

## Application Scenarios

| Scenario | Recommended Rule |
|---|---|
| Campaign navigation icon | Use unselected / selected states; keep the icon metaphor stable. |
| Business benefit illustration | Keep semantic anchor fixed and vary material or color only. |
| Festival campaign banner | Use scene graphics to establish atmosphere, but protect text readability. |
| Category entrance | Use direct object metaphor and simple silhouette. |
| AI-generated campaign UI | Select a graphic role first, then choose the allowed type and stability level. |

## AI Generation Rules

- Start by deciding whether the graphic is for identification, information support, or atmosphere.
- For semantic graphics, preserve the core metaphor and only vary style expression.
- For scene graphics, ensure the scene supports the campaign theme and does not hide text.
- For icons, always generate or select both selected and unselected states when the icon appears in navigation.
- Treat Relay page chrome, annotations, and document section markers as documentation noise, not UI assets.
