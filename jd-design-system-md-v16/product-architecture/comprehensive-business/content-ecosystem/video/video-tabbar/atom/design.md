---
file: design
level: page
zone: product-architecture
design_dept: comprehensive-business
business: content-ecosystem
sub_business: video
owner_team: 综合业务组
bg: retail
slug: video-tabbar-atom
name_zh: "视频场域底导-单坑原子"
name_en: "Video Tabbar / Slot Atom"

owner: "@xushui2018"
contributors: []
status: draft
version: "0.1"
last_synced: "2026-05-26"

auto_detected:
  level: page
  bg: retail
  slug: "video-tabbar-atom"
  # ⚠️ 3 项均为 fallback (skill R5 → flow 矫正为 page; file_id 不在 bg-mapping; slug exact/parts 无命中)

relay_source:
  file_id: "1976604323748007938"
  page_id: "286:1"
  page_name: "新逛底导设计"
  node_id: "286:16020"
  node_name: "容器 20121213882"
  node_type: FRAME
  bounds: { w: 1376, h: 3666 }
  url: "https://relay.jd.com/file/design?id=1976604323748007938&page_id=286%3A1&node_id=286%3A16020&mode=dev"
  source_nodes:
    slot_atom: "286:17175"      # 逛底导基础状态, 12 个 44×44 单坑变体
    joy_agent_atom: "286:17330" # Joy Agent, 4 个 52×52 头像状态
    regular_form: "286:17512"   # 组件-普通形态
    agent_form: "286:17382"     # 组件-Joy Agent 形态

inherits_from:
  # 通用底导规范继承自 horizontal tabbar，本组件只定义视频场域 atom 差异
  - jd-design-system-md-v16/foundations/components-base/tabbar

references:
  uses_components:
    - jd-design-system-md-v16/foundations/components-base/tabbar  # 通用底导规范（容器/形态/坑位数）
    # 注：icon 引用 V16 icon library，待 foundations/components-base/icon-* 批量录入
  uses_tokens:
    colors:
      - color_primary             # #FF0F23 选中态主色
      - color_primary_text        # #FFFFFF 红底反白（如未来选中态背景升级用红）
      - color_title               # #171A26 默认态文字
      - color_background_overlay  # #FFFFFF 容器底
      - color_background          # #F2F4F7 选中态淡灰容器
      - color_background_component # #F0F2F7 父级选中/灵动岛底色
      - gray_1                    # #11141A icon 默认色 / 部分稿件文案色
      - gray_10                   # #11141A@2% 营销图薄层
    typography:
      - pingfang_regular/font_size_10_400   # 默认态「逛逛」/「文案」
      - pingfang_semibold/font_size_10_600  # 选中态「逛逛」
      # ⚠️ 设计稿使用 9pt 飘新数字/文字；V16 正文阶梯以 10pt 起，需设计组确认是否保留特例
    radius:
      - radius_l    # 8px  数字 / 文字 badge
      - radius_xl   # 12px 选中态容器
      # 100px 用作胶囊/圆形几何写法，消费时按 radius.full / 圆形处理
      # 3px 跳过（< 4，图标内部矢量曲率，不需要 token）
    spacing:
      - spacing.4   # icon-文案纵向
      # ⚠️ half-step: spacing.10 (icon 形态横向布局，V16 无 10 atom 建议归 8/12)
    materials: []  # 单坑原子不挂材质，材质在父级 video-tabbar-default / video-tabbar-joy-agent dark 模式 wrapper

used_by: []  # deprecated (issue #45)
---

# 视频场域底导-单坑原子 · Video Tabbar / Slot Atom

> 校准来源 2026-05-26 · Relay [`286:16020`](https://relay.jd.com/file/design?id=1976604323748007938&page_id=286%3A1&node_id=286%3A16020&mode=dev)「导航类-逛底导状态」完整设计板。本文聚焦其中 `286:17175` 逛底导基础状态与 `286:17330` Joy Agent atom；普通形态 / Joy Agent 形态作为应用场景引用。

## 一句话定义

<!-- TODO: 设计师补充。一句话讲清这个组件是什么、解决什么问题。 -->

视频场域底导单坑原子是逛 / 视频频道在底部导航中的 44×44 slot 内容。它继承通用 tabbar 的容器、坑位数和安全区规则，只补充视频场域自己的单坑视觉：默认态为黑色 video icon + 文案，选中态为淡灰容器 + 红白实心 video icon + 红字 Semibold；icon / 营销态则替换为 38×38 圆形位图插槽。

## 应用场景

### ✅ 用

<!-- TODO: 设计师列举什么场景下用 -->

### ❌ 不用

<!-- TODO: 设计师列举什么场景下不能用 -->

## 视觉

### 预览

视频场域 atom 在通用 tabbar 内的渲染（参考下方两图）：

![双列场景 light - default form](./preview-double-default.jpg)
*双列商品瀑布场景，default 形态，5 个单坑（中间选中态）*

![沉浸视频场景 dark - default form](./preview-immersive-default.png)
*沉浸视频场景，default 形态 + Liquid Glass dark，5 个单坑*

完整切图清单见 [_assets-cdn.md](./_assets-cdn.md)。

### 色彩

| 用途 | Token | 实际 hex | 备注 |
|---|---|---|---|
| 容器底（默认 / icon / 营销） | — | 无 fill (透明) | 继承父 tabbar 底色 |
| 容器底（选中态） | `color_background` | `#F2F4F7` | 淡灰高亮 |
| icon `video` 默认色 | `gray_1` / `文本 Text/color_title` | `#11141A` | 黑色单色 video icon（线性版） |
| icon `video` 选中外 | 待统一 | `#FF0000` | 红色矩形（实心版 video icon 外框），建议与 `color_primary` 对齐 |
| icon `video` 选中内 | `color_primary_text` | `#FFFFFF` | 白色小三角 ▶ |
| 文字「逛逛」/「文案」默认 | `color_title` | `#171A26` | atom.gray.1 |
| 文字「逛逛」选中 | `color_primary` | `#FF0F23` | atom.jdred.6 |
| 营销图淡黑薄层 | `gray_10` / `color_mask_fault_toleran` | `#11141A@2%` | 营销 / icon 圆形头像底叠加 |
| 飘新红点 | `color_primary` | `#FF0F23` | badge 红统一使用主色 |
| Badge 容器（数字 / 文字 / 红点） | `color_primary` | `#FF0F23` | atom.jdred.6 |
| Badge 内文字 | `color_primary_text` | `#FFFFFF` | 白色反白 |

`286:16020` 变量反查显示，淡灰底、默认黑、营销薄层和 badge 红均可映射到 V16 变量；仅 `#FF0000` 的 video 实心图标红需继续与 `color_primary #FF0F23` 统一。

### 文字

| 用途 | Token | fontSize × style |
|---|---|---|
| 默认态文案 | `pingfang_regular/font_size_10_400` | 10pt PingFang SC Regular |
| 选中态文案 | `pingfang_semibold/font_size_10_600` | 10pt PingFang SC Semibold |
| 数字飘新「8」 | 特例待确认 | 9pt 京东正黑-V2.3 Regular（V16 size atom 无 9pt）|
| 文字飘新「最多四字」 | 特例待确认 | 9pt PingFang SC Regular |

### 圆角

| 用途 | Token | 实际值 |
|---|---|---|
| 选中态容器 | `radius_xl` | 12px |
| 数字 badge | `radius_l` | 8px |
| 文字 badge | `radius_l` | 8px |
| 红点 badge 外圈 | 圆形几何 | 100px（消费时按圆形 / radius.full 处理）|
| 营销 / icon 圆形头像 | — | 100% 圆形 (r=100 px) |
| 图标内部矢量 | — | 3px (< 4 跳过) |

### 间距 / 布局

| 用途 | Token | 实际值 |
|---|---|---|
| icon-文案纵向 | `spacing.4` | 4px |
| icon 形态横向布局 | ⚠️ half-step | 10px (V16 无 10 atom，建议归 8 或 12) |
| 营销态内部 | `spacing.6` | 6px |

### 材质

slot 原子层不挂玻璃材质。light / dark 的玻璃、阴影与容器底色由父级普通形态 / Joy Agent 形态承载（Relay `286:17512` / `286:17382`）。

## 交互

<!-- TODO: 设计师描述手势、转场、状态切换、边界情况 -->

> 提示：12 COMPONENT 在 root COMPONENT_SET 下，按「底导类型 × 招手类型」二维切换。设计师补：
> - 默认 → 选中 的转场（颜色 / 缩放 / 反馈）
> - 招手类型切换规则（红点 / 数字 / 文字 / 营销 的触发条件）
> - icon 形态 vs 文字形态的运用约束

## 变体 Variants

子 frame 「逛底导、/默认态/无」(`286:17175`, 349×282) 含 12 个 44×44 单坑 symbol：

| # | 节点 ID | 底导类型 | 招手类型 | 完整 |
|---|---|---|---|---|
| 1 | `286:16681` | 默认 | 无 | ✓ |
| 2 | `286:17177` | 默认 | 红点 | ✓ |
| 3 | `286:16689` | 默认 | 数字 | ✓ |
| 4 | `286:17195` | 默认 | 文字 | ✓ |
| 5 | `286:17214` | icon / 营销 | 无 | ✓ |
| 6 | `286:17216` | icon / 营销 | 红点 | ✓ |
| 7 | `286:17212` | icon / 营销 | 数字 | ⚠️ 属性名写作「选中」，结构实际为营销态 |
| 8 | `286:17218` | icon / 营销 | 文字 | ⚠️ 同上 |
| 9 | `286:16714` | 选中 | 无 | ✓ |
| 10 | `286:17255` | 选中 | 红点 | ✓（属性名冗余为「状态=选中态」） |
| 11 | `286:17266` | 选中 | 数字 | ✓（同上） |
| 12 | `286:17292` | 选中 | 文字 | ✓（同上） |

矩阵可以按 **3 类底导类型 × 4 类招手类型** 消费：默认、icon / 营销、选中。当前 Relay 属性名仍有两处历史残留：`286:17212` / `286:17218` 属性名写作「选中」但结构为营销态；`286:17255` / `286:17266` / `286:17292` 属性名写作「状态=选中态」。实现时按结构归类即可。

## 视觉解剖

> 基于 Relay `286:16020` metadata / variables / screenshot 校准。

### 单坑骨架（44×44 垂直布局）

- icon **槽位**「透明层」FRAME 20×20 (含 `#FFFFFF@90% + IMAGE` 占位位图作为 icon 底层)
- icon **本体**「video」VECTOR 20×17 (在槽位内)
- `spacing.4` 间距
- 文案 10pt PingFang SC「逛逛」/「文案」高约 14

44 总高 ≈ 6 (top padding) + 20 (icon slot) + 4 (gap) + 14 (text)，左右居中。

### 默认态（4 变体：无 / 红点 / 数字 / 文字）

| 元素 | 节点类型 | fill / 文字色 |
|---|---|---|
| 容器 | COMPONENT | 无 fill (透明) |
| icon 占位「透明层」 | FRAME | `#FFFFFF@90% + IMAGE` 20×20 |
| icon「video」 | VECTOR | `#11141A` 黑色单色实心 ▶  20×17 |
| 文案「逛逛」 | TEXT | `#11141A` 10pt **Regular** |

### 选中态（主变体 + 派生 INSTANCE）

| 元素 | 节点类型 | fill / 文字色 |
|---|---|---|
| 容器 | COMPONENT | **`#F2F4F7` 淡灰** r=12 |
| icon 占位「透明层」 | FRAME | `#FFFFFF@90% + IMAGE` |
| icon「video」外 | VECTOR | **`#FF0000` 实心红** 20×17 |
| icon「video」内 | VECTOR | `#FFFFFF` 小白三角 ▶ 5×6 |
| 文案「逛逛」 | TEXT | **`#FF0F23` 红** 10pt **Semibold** |

> **选中态视觉信号 = 3 处叠加**：①容器淡灰底 ②icon 单色黑 → 红白双色 ③文字色黑 → 红 + weight Regular → Semibold。
>
> **没有「红方块外框」独立元素** —— 看到的红方块就是 video icon 本身在选中态的形状（同一 video icon 的 line 版 vs filled 版）。

### icon / 营销态（圆形位图插槽）

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| 「营销图」 | FRAME | `#11141A@2% + IMAGE` | 38×38 r=100 圆形 |

- **无 video icon、无「逛逛」文案** —— 只有 38×38 圆形位图
- 招手 badge 叠加（红点 6×6 / 数字 12×12 / 文字 41×12）

> 当前稿件中 icon / 营销态复用同一张占位图。生产实现时不要把占位图写死，应暴露为业务位图插槽：icon 态可注入频道 / 用户头像，营销态可注入商品或活动图。

### 招手 badge 规格（4 类型统一）

| 类型 | 容器 fill | 容器尺寸 / 圆角 | 文字 |
|---|---|---|---|
| 红点 | `#FF0F23` | 6×6 r=3 | 无 |
| 数字 | `#FF0F23` | 12×12 r=8 | 9pt 京东正黑 `#FFFFFF`「8」 |
| 文字 | `#FF0F23` | 41×12 r=8 | 9pt PingFang SC `#FFFFFF`「最多四字」 |

⚠️ 抽到的 `#FF0000` 仅出现在 video icon 实心红那个 VECTOR，飘新红点和 badge 实际用 `#FF0F23` —— `#FF0000` vs `#FF0F23` **两个红需统一为 `color_primary`**。

## Donts

<!-- TODO: 设计师列举常见误用 -->

## AI Schema

```yaml
# TODO: 设计师补充
component_type: video-tabbar-atom
states:
  default: TODO
  selected: TODO   # 容器淡灰 + 红白 video icon + 红字 Semibold
  icon: TODO       # 圆形位图插槽（注入频道头像）
  marketing: TODO  # 圆形位图插槽（注入商品营销图）
slots:
  icon: TODO       # 20×20 video icon (默认黑/选中红白)
  label: TODO      # 10pt 文案 (默认黑/选中红 Semibold)
  badge: TODO      # 招手位 (红点 / 数字 / 文字)
  image: TODO      # icon/营销态的圆形位图插槽 (44×44)
events:
  on_press: TODO
  on_select: TODO
```

## 关联

- 此组件归属：`level: page`, `bg: retail`，挂 `product-architecture/comprehensive-business/content-ecosystem/video/`
- **继承**：通用底导 [foundations/components-base/tabbar](../../../../../../foundations/components-base/tabbar/design.md)（容器 / 形态 / 坑位数等基础规范），本组件只定义视频场域 atom 差异
- 父级形态复用本 atom：
  - Relay `286:17512` 组件-普通形态（2~5 坑 + 灵动岛 / 大促）
  - Relay `286:17382` 组件-Joy Agent 形态（左侧 Joy Agent + 右侧 tabbar 主体）
- 同板原子：`286:17330` Joy Agent（52×52 头像，4 状态；本文 HTML 中作为对照预览）
- V16 Foundation 引用：见 frontmatter `references.uses_tokens`
- 位图切图清单：[_assets-cdn.md](./_assets-cdn.md)

## 变更记录

| 时间 | 操作 | 来源 | 备注 |
|---|---|---|---|
| 2026-05-26 | 收拢校准 (基于 286:16020 完整设计板) | Codex + zero-design MCP | 统一来源为新逛底导设计板；按 286 节点更新变体表、token 反查和 Joy Agent 描述 |
| 2026-05-26 | 重写 (基于 306 wiki 源) | skill relay-to-design-md v0.5.4 | 按 horizontal/tabbar 5 章节风格重写；删 7 章节模板版本 |
| 2026-05-25 | 初版 (基于 286 迭代页) | 同上 | 已废弃 |

---

## 本次自动同步发现的待办

- ⚠️ 待确认：video 实心图标外层 `#FF0000` 是否统一收敛到 `color_primary #FF0F23`
- ⚠️ typography 9pt：飘新文字（V16 size atom 无 9pt，建议改 10）
- ⚠️ spacing 10：half-step，建议归 spacing.8 或 spacing.12
- ⚠️ 变体属性名仍有历史残留（营销态数字/文字命名为选中；选中派生写作状态=选中态）
- ⚠️ icon 透明层占位 99 处复用：应改 V16 icon library（待 `foundations/components-base/icon-*` 录入）
