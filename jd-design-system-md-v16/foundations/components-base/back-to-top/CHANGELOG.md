# 返回顶部 · 变更记录

> bundle_part_of: design.md
> 跨 bundle（design / spec / variants / behaviors）的版本演进。最新在上，每个 PR 一条。

| 时间 | 版本 | 操作 | 来源 | 备注 |
|---|---|---|---|---|
| 2026-06-03 | 0.2 | code-review 修正 | 多 agent review | 4 修：uses_components 误标材质→改 uses_materials；spec-page 暗态投影/底色 CSS 对齐 token 表（.40→.12 / .55→.60）；design.md 去「(选中)/(未选中)」歧义→(pressed)；清理悬停高亮噪音 |
| 2026-06-03 | 0.2 | spec-page 生成 + 还原度验证 | design-md-to-spec-page v2.3 | 渲染 4 要素 spec-page.html（Schema A，浅/暗 × 默认/点击 交互式 showcase，真实材质参数复刻）；无头 Chrome 4 态对照验证还原度一致 |
| 2026-06-03 | 0.2 | v1.2 bundle 化 + 图标导出 | skill v1.2 | 从单份 design.md 迁为 4 md + CHANGELOG bundle；导出箭头真 SVG → assets/icons/arrow-up.svg（currentColor，4 态共用）+ _assets-cdn.md 清单 |
| 2026-06-03 | 0.1 | 创建 | skill（单份） | Relay 1382:4932「导航类-返回顶部」抽取，普通形态 / 浅+暗双态 / 默认+点击双状态 |
