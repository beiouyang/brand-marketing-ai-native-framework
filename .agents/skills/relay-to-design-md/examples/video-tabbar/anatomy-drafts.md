# 视觉解剖草稿 v3 · 基于 fills + imageHash + autoLayout dump 反推

> **v1**（已废弃）：靠肉眼看截图归因，选中态 / Joy Agent 头像形状 / 气泡都猜错。
>
> **v2**（已废弃）：fills dump 替代肉眼，但仍有 4 处事实错（Joy Agent overlap / 灵动岛尺寸 / 选中-数字混淆 COMPONENT / icon vs 营销态判据）。
>
> **v3**（本文档）：补 imageHash + autoLayout dump，修 v2 的 4 处事实错，加 2 处更严谨的描述。每条描述都附 fills/hash/layout 兜底。
>
> **v3 相对 v2 的修正点**：
> 1. **「icon 态 vs 营销态结构相同, 差异在位图」错** —— 实际**全部 8 个 COMPONENT（icon×2 + 营销×4 + 误命名的选中-数字/文字×2）共用同一张占位图** `5a1335315329f2a709a6afd0690d61f05798a8d5`（绿底山水照），**视觉完全无差异**。这 8 个变体在当前稿件下**根本无法区分**。
> 2. **「Joy Agent + tabbar overlap -24」错** —— 真实 autoLayout 是 HORIZONTAL spacing **8**，Joy Agent 在父容器 x=**-16**（左缘外伸 padding 16px）。不是 overlap，是「头像突破父 padding 往左外伸」+ 「8px 间距 + tabbar 主体」。
> 3. **「大促灵动岛 144×44」简化错** —— 实际 INSTANCE 容器 **144×44**，内含子 frame **124×38**，Union 矢量画稿 **144×52**（溢出 8px 被容器 clip）。
> 4. **「选中-数字/选中-文字派生 INSTANCE」错位** —— 这两个 COMPONENT (286:17212/17218) 命名「底导类型=选中,招手类型=数字/文字」但**结构完全是营销/icon 态**（38×38 圆形位图 + badge，**无 video icon、无「逛逛」**），稿件混乱。
> 5. **变体矩阵不规整**：12 COMPONENT 不是干净的 3 类 × 4 招手；实际「默认×4 + icon×2(缺数字/文字) + 选中×3(无/数字-错/文字-错) + 选中态×3(红点/数字/文字)」。
> 6. **「icon 区 20×20」不严谨** —— 槽位「透明层」FRAME 是 20×20，icon「video」VECTOR 本身是 20×17（5×6 内白）。

> **回填指引**：你 review 改完后，每段插到对应 design.md 的 `## 交互` 段之前、新建 `## 视觉解剖` 段。

---

## ① video-tabbar-atom · 视觉解剖

### 单坑骨架

每个原子 44×44，**垂直布局**：

- icon **槽位**「透明层」FRAME 20×20（含 `#FFFFFF@90% + IMAGE` 占位位图作为 icon 底层）
- icon **本体**「video」VECTOR 20×17（在槽位内）
- `spacing.4` 间距
- 文案 10pt PingFang SC「逛逛」/「文案」高约 14

44 总高 = 6 (top padding) + 20 (icon slot) + 4 (gap) + 14 (text) ≈ 44，左右对齐居中。

### 默认态（4 变体：无 / 红点 / 数字 / 文字）

| 元素 | 节点类型 | fill / 文字色 | 尺寸 / 圆角 |
|---|---|---|---|
| 容器 | COMPONENT | **无 fill（透明）** | 44×44 |
| icon 占位「透明层」 | FRAME | `#FFFFFF@90% + IMAGE` | 20×20 |
| icon「video」 | VECTOR | `#11141A` 黑色单色实心 ▶ | 20×17 |
| 文案「逛逛」 | TEXT | `#11141A` 10pt PingFang SC **Regular** | 44×14 |

### 选中态（1 主变体 286:16714 + 3 派生 INSTANCE）

| 元素 | 节点类型 | fill / 文字色 | 尺寸 / 圆角 |
|---|---|---|---|
| 容器 | COMPONENT | **`#F2F4F7` 淡灰** | 44×44 r=12 |
| icon 占位 | FRAME | `#FFFFFF@90% + IMAGE` | 20×20 |
| icon「video」外 | VECTOR | **`#FF0000` 实心红** | 20×17 |
| icon「video」内 | VECTOR | `#FFFFFF` 小白三角 | 5×6 |
| 文案「逛逛」 | TEXT | **`#FF0F23` 红** 10pt PingFang SC **Semibold** | 44×14 |

> **选中态视觉信号 = 3 处叠加**：①容器淡灰 ②icon 单色黑 → 红白双色 ③文字色黑→红 + weight Regular→Semibold。
>
> **没有「红方块外框」独立元素** —— 看到的红方块就是 video icon 本身在选中态的形状（同一个 video icon 的 line 版 vs filled 版）。

⚠️ **稿件 bug**：3 个派生 INSTANCE（286:17255/17266/17292「底导类型=状态=选中态,招手类型=X」）的「逛逛」文字 weight 写成 **Regular** 而非 Semibold，且节点里**重复 stack 了多个 video icon**（看 dump 有多组「透明层 + 联集 73/74 + video」），结构混乱，应整理。

### icon 态 / 营销态 / 选中-数字-错位 / 选中-文字-错位（8 个 COMPONENT，结构完全一致 + 共用同一占位图）

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| 「营销图」 | FRAME | `#11141A@2% + IMAGE` | 38×38 r=100（圆形） |

- **无 video icon、无「逛逛」文案** —— 只有圆形位图头像
- 招手 badge 叠加（红点 6×6 / 数字 12×12 / 文字 41×12，同 default 规格）

> ⚠️ **8 个 COMPONENT 视觉完全无差异**：
>   - icon-默认 (`286:17214`) / icon-红点 (`286:17216`)
>   - 营销-无 (`286:17206`) / 营销-红点 (`286:17207`) / 营销-数字 (`286:17208`) / 营销-文字 (`286:17209`)
>   - **错位**：选中-数字 (`286:17212`) / 选中-文字 (`286:17218`) —— 命名是「选中」，但内部是这个营销/icon 结构，**无 video icon、无「逛逛」**
>
> 8 个 COMPONENT 的「营销图」FRAME 全部 imageHash = `5a1335315329f2a709a6afd0690d61f05798a8d5`（同一张绿底山水照占位图）。**靠 imageHash / fills / 结构都无法区分**。
>
> 这意味着稿件当前状态下，这 8 个变体在最终渲染时**视觉完全一样**（除了招手 badge 差异）。设计师必须：
>   - 要么澄清「icon 态 vs 营销态」的真实视觉差异（不同 imageHash？不同底色？不同 badge 形状？）
>   - 要么承认稿件占位状态，对每个 COMPONENT 内的「营销图」用不同 imageHash 替换
>   - 要么删冗余 variant 改用单一 `图像位` 变体 + slot 注入

### 招手 badge 规格（4 类型统一）

| 类型 | 容器 fill | 容器尺寸 / 圆角 | 文字 |
|---|---|---|---|
| 红点 | `#FF0F23` | 6×6 r=3 | 无 |
| 数字 | `#FF0F23` | 12×12 r=8 | 9pt 京东正黑 `#FFFFFF` 「8」 |
| 文字 | `#FF0F23` | 41×12 r=8 | 9pt PingFang SC `#FFFFFF`「最多四字」 |

⚠️ atom 抽到的 `#FF0000` 仅出现在 video icon 实心红那个 VECTOR，飘新红点用 `#FF0F23` —— **两个红不统一**。建议红点 fill 改 `#FF0F23` 对齐 `color_primary`。

---

## ② video-tabbar-joy-agent-atom · 视觉解剖

### 头像骨架（52×52 圆角矩形 r=16，**不是圆形**）

每个状态的头像都是**三层堆叠** + 内部内容：

| 层 | 元素 | 节点 | fill |
|---|---|---|---|
| 1（底） | `Fill + Shadow` 玻璃感底 | FRAME 52×52 r=16 | `#F5F5F5@60% + #262626`（半透灰 + 深底 shadow） |
| 2（中） | `fill` 紫渐变光晕 | FRAME 52×52 r=16 | `lin-grad(#FFFFFF@0% → #7F00FF@20%) + #FFFFFF`（白底 + 顶部紫色光晕） |
| 3（上） | 内容层 | 见下 4 状态差异 | |

### 4 状态视觉差异

#### 默认 / 招手（用位图实现）
| 元素 | 节点类型 | fill |
|---|---|---|
| 「image 4」位图 | RECTANGLE 56×34 | IMAGE（云朵 + 笑脸切图） |
| 「Vector」星星 | VECTOR 10×10 | `#7F00FF` 紫色 ✨ |

#### 默认新 / 招手新（**头像本身用矢量重画**，更复杂）
| 元素 | 节点类型 | fill |
|---|---|---|
| 「底部头」 | BOOLEAN_OPERATION 49×30 | **6 层径向渐变叠白底**：青/紫/粉三色 (`#2ECEFF` / `#7E17E6` / `#FF1476`) × 不同强度 |
| 「左」 / 「右」椭圆耳朵 | VECTOR 16×25 each | `lin-grad(#FFFFFF → #DADADA)` 白灰渐变 |
| 「Ellipse 9926」白底 | VECTOR 34×30 | `#FFFFFF` |
| 「圆形 1110」 | ELLIPSE 24×23 | `#FFFFFF` |
| 「Ellipse 149」眼睛 | ELLIPSE 4×8 | `#000000` |
| 「Vector」升级 ✨ | VECTOR 8×8 | `lin-grad(#FF6BE8 → #B56CFF → #9F89FF) + #7E17E6 + #7F00FF` 紫粉渐变 |
| **「AI」徽章 `容器 20121213258/9`** | FRAME 20×18 | `rad-grad(#A468FF → #6B36FA → #0C4BF7) + #FFFFFF` 蓝紫径向渐变 |
| AI 徽章内「AI」字样 | 2 个 VECTOR 7×8 + 1×8 | `#FFFFFF` |

> **「新」= 头像本体从位图 → 矢量重画 + 底部加蓝紫径向渐变「AI」徽章**。⚠️ 业务含义待澄清（升级版 / A/B / 账号等级）。

#### 招手 / 招手新（额外的招手气泡）

紧贴头像右缘的 **复合渐变胶囊气泡**（不是简单紫色块！）：

| 元素 | 节点类型 | fill |
|---|---|---|
| 气泡容器「容器 111169619」 | FRAME 232×24 r=100（胶囊） | **3 层 fill 叠加**：底 `lin-grad(#8F39E6 → #6A59FF)` 蓝紫线性 + 中 `rad-grad(#FF66FF@80% → #FF66FF@0%)` 粉色径向光晕 + 顶 `rad-grad(#33FFFF → #33FFFF@0%)` 青色径向光晕 |
| 尾巴「Vector」 | VECTOR 14×12 | `#933EEA` 紫色三角，指向头像 |
| 文字 | TEXT 12pt Semibold | `#FFFFFF` 白「这里是一条开启引导最多展示十八个汉字」 |

> 招手气泡不是单色，是 **蓝紫底 + 粉色径向 + 青色径向 = 三色叠加**，呈现「魔法/AI」感。⚠️ design.md 原描述「紫色实色气泡」错。

---

## ③ video-tabbar-default · 视觉解剖

### Tabbar 容器（普通形态 light）

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| wrapper「Fill + Shadow」 | FRAME | `#F5F5F5@60% + #262626` 半透灰 + 深底 shadow | **351×52 r=16** |
| 选中 slot 容器 | INSTANCE | `#F2F4F7` 淡灰 | 72×44 **r=12** |
| 默认 slot「文案」TEXT | TEXT 10pt Regular | `#11141A` | 72×14 |
| 选中 slot「逛逛」TEXT | TEXT 10pt Semibold | `#FF0F23` 红 | 72×14 |
| home icon（每个 slot 内） | INSTANCE | （引用 V16 icon library，待录入） | 20×20 |

> ⚠️ **两层圆角不一致**：tabbar wrapper r=16 ≠ atom 容器 r=12。这是有意设计还是稿件不一致？设计师确认。
>
> Tabbar 主体宽 **351**（不是 375）—— 375 是 viewport，两侧各留 12px 安全距给 home indicator。

### Tabbar 容器（普通形态 dark）

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| wrapper「Liquid Glass - Medium」 | INSTANCE | — | 351×52 |
| ↳ 内「Fill + Shadow」 | FRAME | **3 层 fill 模拟玻璃**：顶 `#FFFFFF@6%` 半透白薄层（玻璃高光）+ 中 `#000000@60%` 半透黑底 + 底 `#CCCCCC` 边线 | 351×52 r=16 |
| 选中 slot atom「原子-基础状态」 | FRAME | `#14171A` 深灰（**与 light 的 `#F2F4F7` 不同**） | 72×44 r=12 |
| 默认 slot「文案」TEXT | TEXT 10pt Regular | `#E1E6EB` 灰白（**非纯白**） | 72×14 |
| 选中 slot「逛逛」TEXT | TEXT 10pt Semibold | `#FF0F23` 红（与 light 同） | 72×14 |

> dark 模式 Liquid Glass 是**3 层 fill 叠加**模拟（半透白高光 + 半透黑底 + 浅灰边线）。实际渲染依赖 `backdrop-filter: blur(...)` —— Relay 截图无 blur 是因为画板背景是纯白，模糊不可见。

### 灵动岛 - 默认型

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| 容器「原子-灵动岛」 | INSTANCE | `lin-grad(#DDFFCC → #B7FA96) + #F0F2F7` **浅绿渐变** | 131×44 r=12 |
| 位图 1「Frame 1940686315」 | RECTANGLE | IMAGE 切图（产品缩略） | 23×23 |
| 位图 2「容器 111169618」 | FRAME | IMAGE 切图（emoji / icon 装饰） | 32×32 |
| 主文案「抢5折商品」 | TEXT 14pt | **`#019508` 绿** | 81×22 |
| 副文案「京东超市」 | TEXT 10pt Semibold | **`#019508` 绿** | 81×14 |

> 默认灵动岛是 **统一绿色文字**（不是常见的黑/灰），强化「促销绿」语义。⚠️ 此 `#019508` 偏离 V16 successgreen.2 `#00D900`，需设计组对齐。

### 灵动岛 - 大促型

| 元素 | 节点类型 | fill | 尺寸 / 圆角 |
|---|---|---|---|
| INSTANCE 容器「原子-灵动岛」 | INSTANCE | （继承自 master） | **144×44**（容器外框）|
| ↳ 内层「容器 20121213212」 | FRAME | （透明） | 124×38（可见区域）|
| ↳ 视觉主体「Union」 | VECTOR | `lin-grad(#FEF0ED → #FFAEA8) + #F0F2F7` **浅橙红渐变** | **144×52** ⚠️ **矢量画稿溢出容器 8px，被 144×44 容器 clip** |
| 左侧位图 | FRAME | IMAGE（礼物盒/营销图） | 34×34 |
| 主文案「领取专属福利」 | TEXT 14pt Semibold | `#FF0F23` 红 | 84×22 |
| 副文案 badge「容器 20121213214」 | FRAME | `lin-grad(#FF0F23 → #FF4252)` 红色渐变 | 68×16 r=100 胶囊 |
| ↳ badge 内「抢万元红包」 | TEXT 10pt Semibold | `#FFE6D9` 浅橙 | 50×14 |
| ↳ badge 右小圆「容器 20121213216」 | FRAME | `#FFE6D9` 浅橙 | 8×8 **r=66.67** ⚠️ |
| ↳ 小圆内 vector 箭头 | VECTOR | `#FF0F23` 红 | 2×4 |

> 大促灵动岛 = **三色橙红组合**：浅橙渐变底 + 红色主文 + 红渐变胶囊 badge + badge 内浅橙副文 + 红箭头。比默认型权重更强。
>
> ⚠️ 异常 `radius 66.6667` 出现在 badge 右小圆 8×8 上，几何上意味着 `8 × 0.83 ≈ 6.67`，可能是「容器宽 8 × 圆角比例 0.83」的计算残留 —— 应改 `radius_l 8`（完美圆）或 `radius.full` 胶囊。

---

## ④ video-tabbar-joy-agent · 视觉解剖

### 组合空间关系

实际 autoLayout（父「数量=5个」FRAME 375×69，HORIZONTAL，itemSpacing **8**，padding `12/0/12/17`）：

| 子节点 | x | size | 说明 |
|---|---|---|---|
| `原子-Joy Agent` | **-16** | 52×52 | **左缘外伸父容器 padding 16px**（突破 left padding 12）|
| `容器 20121213198`（tabbar 主体） | 44 | 319×52 | 在 Joy Agent 右侧 8px gap |

```
父 375 wide [12 padding][.....Joy Agent x=-16 突出.....][tabbar 319 wide....][17 padding]
            ↑          ↑                                ↑
            0          -16 (Joy Agent 左缘)             44 (tabbar 左缘)
```

视觉效果：**Joy Agent 头像左缘几乎贴屏幕左缘（-16 < 12 padding）**，与 tabbar 主体保持 8px 横向 gap。两个**视觉独立的圆角矩形**（头像 r=16，tabbar wrapper r=16）。

> ⚠️ **不是 overlap**：之前 v2 写「Joy Agent 与 tabbar overlap -24」是把别的容器的 -24 itemSpacing 错归因到这里。真实关系是「Joy Agent 头像 x=-16 突破父容器 left padding」+ 「与 tabbar 主体 8px 间距」。

### Tabbar 主体差异（vs 普通形态）

| 维度 | 普通 (default) | Joy Agent (本组件) |
|---|---|---|
| Tabbar 主体宽 | 351 | **319**（让出 32 给 Joy Agent + overlap） |
| 5 数量时单 slot 宽 | 72 | 65（更窄） |
| 灵动岛宽 | 131 / 144 | 131 / **大促 144 时主体反扩 351** ⚠️ |
| 材质 | light 无 / dark 用 Liquid Glass | **light + dark 都用 Liquid Glass** |

### Joy Agent 头像在 light/dark 的差异

头像本体**结构完全一致**（同一 INSTANCE，3 层堆叠 + 内容）。在 dark 模式下：

- 头像本体 fills 不变（紫色光晕底 + 白色云朵 / 矢量耳朵眼睛 / AI 徽章）
- **暗黑 tabbar 底变深**（`Fill + Shadow` 3 层）→ 头像紫光晕**视觉反衬更亮**
- 头像独立有阴影（`Fill + Shadow` 底层 `#262626` shadow）

### Dark 模式 Liquid Glass 完整结构

| 层 | fill |
|---|---|
| wrapper「Liquid Glass - Medium」 | INSTANCE 319×52 |
| ↳「Fill + Shadow」 | `#FFFFFF@6% + #000000@60% + #CCCCCC` r=16 |

3 层效果：玻璃高光 + 暗黑底 + 浅灰边线。

### 招手气泡在组合内的 z-index

招手态触发时，**紫色复合渐变气泡从 Joy Agent 头像右侧外溢覆盖到 tabbar 容器之上**（z-index 高于 tabbar）。气泡尾巴指向 Joy Agent 头像中心右缘。**气泡宽度自适应文案**，最长 18 字。

---

## ⚠️ 集中待澄清（v3 合并）

### 稿件结构问题（最严重）

- [ ] **8 个 COMPONENT 共用同一占位 imageHash** `5a1335315329f2a709a6afd0690d61f05798a8d5`，视觉完全无差异：icon-默认/红点 + 营销-无/红点/数字/文字 + **错位的选中-数字/选中-文字**。要么补真实位图、要么删冗余 variant
- [ ] **选中-数字 (286:17212) / 选中-文字 (286:17218)** 命名是「选中」但结构是营销/icon 态（无 video icon、无「逛逛」）—— 稿件混乱，应改名或重画
- [ ] **变体矩阵不规整**：12 COMPONENT 不形成干净 3×4 / 4×4 网格。实际：默认×4 + icon×2(缺数字/文字) + 选中×3(无/数字-错/文字-错) + 选中态×3(红点/数字/文字)
- [ ] **派生原子未入 set**：4 个营销态 INSTANCE + 5 个选中态招手 INSTANCE 应整理收进 COMPONENT_SET
- [ ] **选中态派生 INSTANCE weight 不一致**（286:17255/17266/17292 是 Regular，主变体 286:16714 是 Semibold）

### 业务语义待澄清

- [ ] **Joy Agent「新」业务含义**：升级版 / A/B / 账号等级？「头像本体重画 + AI 徽章」对应什么业务事件？
- [ ] **icon 态 vs 营销态的真实视觉差异**（占位状态外）
- [ ] **招手气泡最长 18 字**：截断方式 / 多行 / 自动收起？
- [ ] **大促灵动岛 light 主体宽 319→351**（Joy Agent 形态）异常 —— Joy Agent 临时收起 / 大促场景独立布局？
- [ ] **灵动岛默认/大促触发条件 + 文案最大长度**

### Token / 视觉对齐

- [ ] **飘新红 vs jdred 不统一**：飘新红点节点 `#FF0000`，badge 用 `#FF0F23`，需统一为 `color_primary`
- [ ] **Tabbar wrapper r=16 vs atom 容器 r=12**：两层圆角不一致是有意还是稿件不一致？
- [ ] **灵动岛默认绿 `#019508` vs V16 successgreen.2 `#00D900` 偏离**：是否需要在 V16 加场景 token？
- [ ] **dark 文案 `#E1E6EB`** 是否对齐 V16 暗黑文字 atom（V16 gray.1.dark = `#E6E6E6`，偏 5 字节）
- [ ] **大促灵动岛 badge 小圆 r=66.67** 异常计算残留（8×8 容器 r=66.67 远超 min(w,h)/2=4），应改 r=8 或 r=full
- [ ] **大促灵动岛 Union 矢量 144×52 vs 容器 144×44**：矢量画稿溢出 8px 是有意 clip 还是稿件不一致？
- [ ] **dark mode home icon** 是否切换 dark 版（V16 icon library 暗模式支持）

---

## 修正点全表（v1 → v2 → v3）

| 子节点 | v1 错的描述 | v2 修正 | v3 进一步修正 |
|---|---|---|---|
| **atom 选中态** | 「红色圆角小方块包白 ▶」 | 红方块 = video icon 本身形状；容器是 `#F2F4F7` 淡灰；选中信号 = 容器灰 + icon 红白 + 文字红 Semibold | （v2 正确）|
| **atom 营销态** | 「icon 区整块变红色矩形」 | 营销态实际**没有 video icon、没有「逛逛」**，结构与 icon 态一致 | **8 个 COMPONENT 共用同一占位 imageHash**，视觉完全无差异；含 2 个错位命名的「选中-数字/文字」|
| **Joy Agent 头像** | 「圆角矩形 + 紫光晕 + 简化笑脸」 | 默认/招手用位图，新版用矢量重画 + AI 徽章 | （v2 正确）|
| **招手气泡** | 「紫色椭圆胶囊 + 白字」 | 3 层渐变叠加 | （v2 正确）|
| **灵动岛默认** | 「浅灰绿底 + 灰字 + emoji」 | 浅绿渐变 + 全绿字 `#019508`，无 emoji | （v2 正确）|
| **灵动岛大促** | 「红色渐变底 + 白字 + 红色 badge」 | 浅橙红渐变底 + 红色主文 + 红渐变胶囊 badge | **容器实际 144×44（非 144×52）**，Union 矢量画稿 144×52 溢出被 clip |
| **Tabbar 圆角** | 12px | wrapper r=16，atom r=12 | （v2 正确）|
| **Tabbar 主体宽** | 375 | 351 | （v2 正确）|
| **Dark 玻璃** | 「半透白 + 黑底」 | 3 层 fill 叠加 | （v2 正确）|
| **选中态字重** | 「全部 Semibold」 | 仅主变体 Semibold，3 派生 INSTANCE Regular | （v2 正确）|
| **Joy Agent + tabbar 关系** | （v1 未提）| 「overlap -24，头像左缘压 tabbar」 | **不是 overlap**！实际 autoLayout HORIZONTAL spacing **8**，Joy Agent x=**-16**（突破父 padding 16px），与 tabbar 主体保持 8px gap |
| **icon 区尺寸** | （v1 未提）| 「20×20」 | **槽位 20×20**（透明层 FRAME），**icon 本体 20×17**（video VECTOR + 内 5×6 白） |

---

## 回填指引

每段 anatomy v3 草稿对应回填位置：

```
{slug}/design.md
  ## 交互（现有）
  ↓ 在此之前插入
  ## 视觉解剖
  <粘贴对应章节，去掉「### X. ... · 视觉解剖」一级标题>
```
