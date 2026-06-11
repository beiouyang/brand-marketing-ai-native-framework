# Outline 领域过滤规则

> SKILL.md Step 5.5 调用。目标是避免 page-doc / foundation 类长页把文档容器、表格、页头装饰的视觉属性误写成组件/规范主体。

## 1. 原则

Step 4 抽取脚本仍然保留完整原始数据：fills / textStyles / radii / layouts / instances / imageNodes 都不裁剪。过滤只发生在 outline 渲染层：

- `## 本次识别范围` 可以报告原始计数，帮助判断复杂度。
- `## 领域相关 Tokens / 材质 / 子组件` 只提升与当前规范领域相关的 token。
- 与当前领域无关的视觉值，归类为「页面容器 / 表格样式 / 标注辅助」噪声，不写成核心规范表。
- 被降级的噪声不触发 `token-miss` 风险；只有当前领域内应当 token 化但未匹配的值才写风险。

## 2. 领域判定

### 2.1 关键词表

| 关键词 | outlineDomain | 主体内容 |
|---|---|---|
| `字体` / `文字` / `Font` / `Typography` / `字阶` / `字重` / `行高` | `typography` | 字体族、字号、字重、行高、价格字体、倒计时数字 |
| `色彩` / `颜色` / `Color` | `color` | 色板、语义色、透明度、使用场景 |
| `圆角` / `Radius` | `radius` | 圆角阶梯、容器圆角、状态差异 |
| `间距` / `Spacing` / `栅格` / `Grid` | `spacing` | spacing、padding、gap、网格 |
| 其它组件名 | `component` | 组件自身颜色、文字、圆角、间距、材质、子组件 |

### 2.2 扫描顺序(由稳到不稳,**第一命中即决定**)

```
1. root name        ← page-doc 主标题,通常最稳
2. page name        ← 多页 doc 中的当前 page
3. 当前节点 name     ← 被请求生成 outline 的节点
4. 直系 chapter / frame 标题  ← 范围内最大的标题层
```

只要前一层级命中了任一关键词,就不再扫后面层级,**避免子层级里的"色彩示例"frame 把 `字体规范` 的 root 反向覆盖成 `color`**。

### 2.3 同层多关键词命中的 tie-breaking

如果**同一层级**有多个 domain 关键词同时命中(例如某 page name 同时含「字体」和「色彩」),按下表**列顺序优先**:

```
typography > color > radius > spacing > component
```

> **为什么字体优先**:字体规范常包含"价格颜色"、"金额色"等说明,反之色彩规范几乎不写字号 —— 经验上字体优先误判更少。

### 2.4 兜底

4 个层级全部未命中 → domain = `component`,**并按 §5 写 confirmation**。
如果设计师在节点的 `sharedPluginData` 里显式标了 `wiki:outlineDomain`,以 sharedPluginData 为准,**跳过自动判定**。

## 3. Typography 过滤

当 `outlineDomain = typography`：

- 保留并优先展开：font family、font size、font weight、line-height、价格/金额字体、倒计时等宽数字、单行/多行行高规则。
- 可保留为辅助说明:**字体颜色 token**(详见 §3.1 判定规则)。
- 不要提升为核心规范：表头背景色、表格描边、页面背景、页头装饰色、示意标注色、文档容器圆角、表格 cell padding、规范页布局 gap。
- 不要为上面这些页面噪声写 `token-miss`；如确需提醒，放在「自动发现的风险」里一句话说明「检测到页面容器样式，已从字体主体规范中过滤」。
- IMAGE fill 如果只是规范页头图或装饰图，切图清单可保留，但用途写明「规范页装饰，不属于字体规范主体」。

### 3.1 字体规范里出现颜色字段的处理

设计师确实会在字体规范里写「价格用红色」、「金额数字用 brand 色」这类**与字体绑定**的颜色规则。判定标准(启发式,按优先级):

| 判定 | 何时适用 | 处理 |
|---|---|---|
| ✅ **保留为字体规范主体** | 节点 name / 文字内容含「字体颜色」/「价格色」/「金额色」/「数字色」等**字体相关的颜色组合词** | 进入主体 token 摘要 |
| ✅ **保留为字体规范主体** | 颜色直接 applied 到一个 TEXT 节点的 fill 且该 TEXT 节点是字体示例(name 含「字号示例」/「字重示例」等) | 进入主体 token 摘要 |
| ⚠️ **降级为页面噪声** | 颜色 applied 到容器 / 表格 / Frame / 装饰类节点(name 含 `table` / `Frame 194...` / `容器` / `背景` / `wrapper` 等) | 不写入主体 token,也不计 token-miss |
| ❓ **不确定** | 上面任一条都不命中 | 保留在主体,但在「待设计师确认」加一行 review 标记 |

例:
- ✅ "价格字体颜色 `color_price_strong`" → 保留(含「字体颜色」)
- ✅ TEXT 节点"¥99.00"的 fill = `#E1251B`(节点 name "价格示例")→ 保留
- ❌ "表格头部背景 `#F5F5F5`" → 降级(在 table 容器上)
- ❓ Frame 顶部一片 `#FFD966` 装饰色,没明确标注 → 保留并加 review 标记

### 错误示例

字体 page-doc 的 outline 不应出现这样的主体结构：

```markdown
### 色彩
| 实测值 | 候选 token | 备注 |
...

### 圆角 / 间距 / 材质
- 圆角：36，V16 无匹配，标记 token-miss
```

### 正确示例

```markdown
### 字体
- 字体族：PingFang SC、方正兰亭黑、京东朗正体、京东正黑 V2.3
- 字号：16、18、20、22、24、26、28、30、32、33、34、36、42
- 字重：Regular / Medium / Semibold / Bold
- 行高：单行使用字体行高；多行使用字体 1.5 倍行高，奇数值减 3

页面容器样式：检测到表格背景、描边、圆角和文档布局间距，已作为规范页呈现噪声过滤，不写入字体主体 token。
```

## 4. Component 过滤

当 `outlineDomain = component` 时，颜色、圆角、间距、材质都可能是组件主体规范；照常进入 token 摘要和风险项。

仍需过滤明显页面噪声：

- 名称包含 `设计系统文档头部`、`table`、`Frame 194...` 且仅用于文档表格排版的节点。
- 位于 page-doc header / wrapper 的装饰图与背景。
- 只用于尺寸标注、箭头、红色辅助标注的临时图层。

## 5. 输出约束

- outline 中不要因为抽到了某类值就机械生成对应章节。
- 若某类值被过滤，保留一行降级说明即可，不展开 token 表。
- 「自动发现的风险」只记录会影响正式设计规范理解的问题，不记录已确认是文档容器噪声的 token-miss。

### 5.1 兜底场景的 confirmation 写法

当 §2.4 走兜底(domain = `component` 因为 4 层级全部未命中)或 §3.1 ❓ 不确定项触发时,outline 的「**待设计师确认**」段必须加一行,固定格式:

```markdown
- ⚠️ outlineDomain: 自动判定为 `<判定结果>`,置信度低
  - 原因: <一句话说明:扫描层级哪些未命中>
  - 当前作用域: <root_name> > <page_name> > <node_name>
  - 请 review: 是否正确?如有偏差请在节点 sharedPluginData 标注 `wiki:outlineDomain = <typography|color|radius|spacing|component>`,Skill 下次重跑会优先使用
```

例:
```markdown
- ⚠️ outlineDomain: 自动判定为 `component`(兜底),置信度低
  - 原因: root「营销动效专题」/ page「主视觉区」/ node「Banner v3」/ frame「头图」均未命中 typography/color/radius/spacing/Grid 关键词
  - 当前作用域: 营销动效专题 > 主视觉区 > Banner v3
  - 请 review: 是否正确?如有偏差请在节点 sharedPluginData 标注 `wiki:outlineDomain = <typography|...>`
```

## 6. Dogfood Case · V16 字体规范 page-doc

以 V16 `foundations/tokens/typography.md` 对应的 Relay page-doc(root name = `JD 16.0 设计系统 · Typography`)为例,§2.2 第 1 层 `root name` 即命中 `Typography` → `outlineDomain = typography`。

### 改动前(v1.0)outline 摘录(机械列出全部抽到的 token)

```markdown
## 已识别 Tokens / 材质 / 子组件

### 色彩
| 实测值 | 候选 token | 备注 |
| #FFFFFF | - | V16 无匹配,token-miss |
| #F5F5F5 | - | V16 无匹配,token-miss |
| #E5E5E5 | - | V16 无匹配,token-miss |
...12 项色值 risk

### 圆角 / 间距 / 材质
- 圆角:36 / 24 / 16 / 8,V16 部分 miss,token-miss
- 间距:gap=48,V16 无匹配,token-miss
...

## 自动发现的风险
- 12 项 token-miss(色彩)
- 5 项 token-miss(圆角 / 间距)
- ...
```

### 改动后(v1.0.1)outline 摘录(只展开 typography 主体 + 噪声降级)

```markdown
## 领域相关 Tokens / 材质 / 子组件

### 字体(主体)
- 字体族:PingFang SC、方正兰亭黑、京东朗正体、京东正黑 V2.3
- 字号:16, 18, 20, 22, 24, 26, 28, 30, 32, 33, 34, 36, 42
- 字重:Regular / Medium / Semibold / Bold
- 行高:单行用字体行高;多行用字体 1.5 倍行高,奇数值减 3

### 字体颜色(§3.1 启发式保留)
- 价格字体颜色 → `color_price_strong`(节点 name "价格示例")

页面容器样式:检测到表格背景、描边、圆角和文档布局间距,已作为规范页呈现噪声过滤,不写入字体主体 token,亦不计 token-miss 风险。

## 自动发现的风险
- (无;原有 17 项 token-miss 均已正确识别为页面容器噪声)
```

**核心收益**:从 outline 长度看,设计师从被 17 项 token-miss 风险淹没,变成清晰看到 4 项字体主体规范 + 1 项保留的字体颜色 → 直接可用作 design.md 草稿,无需再人工筛掉容器噪声。
