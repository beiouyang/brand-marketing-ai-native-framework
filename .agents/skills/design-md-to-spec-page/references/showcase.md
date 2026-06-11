# 交互式 showcase 契约（v2.2）

§3 设计属性的「演示 stage」从静态平铺升级为**可交互组件展示台**。外壳 CSS + JS 已在 [templates/spec-page.html](../templates/spec-page.html) 内置（generic，所有组件复用）；本文件定义模型在 §3 内**作者侧要产出的 HTML 结构**与组件视觉 CSS 约定。

## 4 种内置交互（外壳已实现，作者只需按结构产出 HTML）

| 交互 | 触发 | 作者要做 |
|---|---|---|
| 浅 / 暗主题切换 | `.showcase` 顶栏 `[data-theme-set]` 按钮 | 组件视觉 CSS 以 `.showcase[data-theme="light"] X` / `[data-theme="dark"] X` 作主题锚；showcase 根写 `data-theme="light"` 默认 |
| 变体切换 tabs | 顶栏 `.seg [data-variant="N"]` 按钮 | 每变体一个 `.variant-panel[data-variant="N"]`，默认变体加 `.is-active` |
| 内容底衬 `.sc-screen` | —（纯展示） | 组件视觉直接放 `.variant-panel > .sc-screen` 居中，**不套手机外框**（device-frame 默认不用，见下「约定与边界」） |
| token 复制 + 悬停高亮 | `.tok` 点击复制；`.tok[data-hl]` 悬停高亮 `[data-hl-target]` | token 值用 `<code class="tok" data-copy="#FF0F23">#FF0F23</code>`；要联动高亮再加 `data-hl="x"` ↔ 舞台元素 `data-hl-target="x"` |

## 标准结构

```html
<div class="showcase" data-theme="light">
  <div class="showcase__bar">
    <div class="showcase__title">{场景名}</div>
    <div class="showcase__controls">
      <div class="seg">
        <button class="seg__btn is-active" data-theme-set="light">浅色</button>
        <button class="seg__btn" data-theme-set="dark">暗色</button>
      </div>
      <div class="seg">
        <button class="seg__btn is-active" data-variant="0">{变体0名}</button>
        <button class="seg__btn" data-variant="1">{变体1名}</button>
      </div>
    </div>
  </div>
  <div class="showcase__stage">
    <div class="variant-panel is-active" data-variant="0">
      <div class="variant-panel__cap">{变体0 一句话}</div>
      <div class="sc-screen"> {组件变体0 视觉 HTML} </div>   <!-- 直接放，无手机框 -->
    </div>
    <div class="variant-panel" data-variant="1"> … 变体1 … </div>
  </div>
</div>
```

## 约定与边界

- **主题锚**：组件视觉 CSS 不再用页面级 `.light`/`.dark` 祖先，统一用 `.showcase[data-theme=...]`。一个 showcase 同时只显示一个主题（toggle 切换），DOM 不复制浅/暗两份，只切 CSS。
- **组件视觉 CSS 内联在 §3**：showcase 外壳是 generic 的；具体组件长什么样（bar/按钮/结算栏等）由该 spec-page 在 §3 顶部用一个 `<style>` 内联（连同 @font-face / 图标 base64 mask）。skill 不 hardcode 任何具体组件视觉。
- **变体数 = tabs 数 = panel 数**，一一对应；默认变体 `.is-active` 只有一个。
- **device-frame 默认不套（2026-06-02 起）**：组件视觉直接放 `.variant-panel` 里居中，**不要手机外框**。手机框是装饰、占空间、对通览无价值——设计师明确不要。仅当某组件确实必须靠"手机语境"才能读懂（极少）才显式套 `.device-frame`，且需在 PR 说明理由。底部贴底类（toolbar/tabbar）也**不套**：给 `.variant-panel` 一个浅/暗的内容底衬即可（如 `.sc-screen` 容器），把贴底组件贴在容器底。
- **token 复制**：§3 token 表里的 hex / 尺寸值尽量用 `<code class="tok" data-copy="…">`，让设计师一键拷。
- **降级**：JS 不跑时，`.variant-panel.is-active` 仍显示默认变体、主题停留浅色 —— 不白屏。

## 何时用 showcase vs 静态 stage

- 有**多变体 / 双主题 / 移动端场景**的组件 → showcase（toolbar / tabbar / 卡片 / 输入态）。
- 单一静态视觉（如一张 token 色板、字阶 ladder）→ 仍用原 `.stage` / `.color-swatch-grid` 等，不必套 showcase。
