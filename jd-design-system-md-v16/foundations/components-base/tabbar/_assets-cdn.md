---
file: _assets-cdn
slug: tabbar
last_synced: "2026-05-27"
purpose: 维护 tabbar 组件依赖的位图引用清单(仅 atom 切图 / 实拍图等"前端无法还原"的视觉);Relay 章节大图含设计师文字标注层,不入清单
---

# Tabbar 位图引用清单

> **视觉还原原则(2026-05-27 起)**:
>
> 1. **HTML / CSS 还原优先** —— 任何能用前端代码做出来的视觉(布局、形状、颜色、token swatch、ASCII 框图、简单插画),**都不用截图**。在 spec-page.html 直接用 HTML / CSS / SVG 写
> 2. **截图作为 backup** —— 仅当视觉是「前端无法还原」时使用:
>    - 设计师绘制的复杂插画(如 Joy Agent 角色形象、品牌图)
>    - 实拍照片 / 业务投放图
>    - 真实截屏对比(产品现状 vs 规范)
> 3. **截图不嵌入文字标注** —— 设计师文字描述(章节标题 / 尺寸数字 / 备注)**必须** 抽到 design.md 用 markdown 结构化呈现,**不留在截图里**。含设计师标注层的 Relay 桌面 export 不直接用,应:
>    - 重新 export 时关闭文字标注 layer
>    - 或 crop 掉文字区域
>    - 或干脆不用截图(走原则 1 的 HTML/CSS 还原)
>
> 为什么:截图里的文字 = pixel 死数据,不可搜、不可解析、不可翻译、AI agent 拿不到、token 反查断链。

## 当前清单(仅 atom 切图 / 1 张)

> Joy Agent atom 来源:Relay `312:58236`(完整版 atom)和 `312:58243`(父 frame 含招手气泡)。
> 坑位图标(home / cart / msg 等)走原则 1,**inline SVG 渲染**,不入本清单。
>
> **资产策略**(R3 走查补,见 [issue #60](https://github.com/ShuaiMXu/jd-design-wiki-proposal/issues/60) Gap 4):atom 类切图(单色描边 / 单一图形)**强制 SVG 优先**,`svg_url` 缺失时记 wiki gap;复合位图(品牌插画 / 实拍 / 业务投放图)走 **PNG 豁免**,`svg_url` 标 `—`。

| 用途 | Relay 节点 | 尺寸 | svg_url | png_fallback_url | 资产策略 | 说明 |
|---|---|---|---|---|---|---|
| Joy Agent 默认形态 | `312:58236` | 64×64 px / 8 KB | — | <https://img13.360buyimg.com/img/jfs/t1/434027/27/16417/14829/6a0c6236F67e0986e/027609c09c2c80cd.png> | PNG 豁免(复合品牌插画) | ✅ **京东正式 CDN** · spec-page ch-2.5 引用 |

## 已删除条目(违反新原则)

以下条目曾在 PR #50(2026-05-19)登记,2026-05-27 复检发现:

### A. 9 张 Relay 章节大图(`sec-*.png`)

| 文件 | 章节 | 原 jsdelivr URL |
|---|---|---|
| sec-1-principles.png | 01 设计原则 | jsdelivr @ 79bc741 |
| sec-2-regular-layout.png | 02.1 常规底导 | jsdelivr @ 79bc741 |
| sec-2-agent-layout.png | 02.2 Agent 底导 | jsdelivr @ 79bc741 |
| sec-2-states-badges.png | 02.4-5 状态招手 | jsdelivr @ 79bc741 |
| sec-2-joy-agent.png | 02.6 Joy Agent | jsdelivr @ 79bc741 |
| sec-3-island-regular.png | 03.1 常规灵动岛 | jsdelivr @ 79bc741 |
| sec-3-island-operation.png | 03.2 运营灵动岛 | jsdelivr @ 79bc741 |
| sec-3-island-promo.png | 03.3 大促灵动岛 | jsdelivr @ 79bc741 |
| sec-5-multi-platform.png | 05 多端适配 | jsdelivr @ 79bc741 |

**为什么删**:
- 这 9 张都是 Relay 桌面端含设计师文字标注层的 export,违反原则 3
- jsdelivr URL 因仓库 PRIVATE 全 404,违反可访问性
- 截图里的文字已通过 PR #116 commit 1 抽到 design.md + spec-page.html 结构化(2.0 组件层级 / 2.4 招手 / 2.5 Joy Agent / 3.2-3.4 字号颜色材质 / ch-6 设计令牌总表),不需要再以截图形式重复

**如果未来要补回视觉对照**:
- 优先走原则 1:HTML / CSS 渲染缩略 mockup(参考 spec-page.html Pro 视图 4 个 DEMO 块)
- 不得已走原则 2:必须先 Relay re-export 关闭文字标注 layer,**确认 0 文字**后才能上传京东 CDN 并加回本清单

### B. 坑位图标 home / 营销态示例(3 张)

| 用途 | 处理 |
|---|---|
| home 默认态(单色描边图) | 已改 inline SVG 渲染(原则 1),不再依赖 PNG |
| home 选中态(彩色切图,带 jdred + 笑脸) | 待补 SVG 源后改 inline SVG;暂留京东 CDN PNG fallback 仅用于 Pro DEMO 块演示 |
| 坑位营销态(38×38 圆形品牌图) | 业务投放图,实际由业务替换,无 spec-page 引用 |

## 关联

- 同 bundle:[design.md](./design.md) / [design-outline.md](./design-outline.md) / [spec-page.html](./spec-page.html)
- skill 原则:`.agents/skills/design-md-to-spec-page/SKILL.md` Step 5「视觉还原优先级」段
- 历史决策:PR #50(2026-05-19,删 _assets 改 jsdelivr)/ PR #117(2026-05-27,纠正)
