---
file: design-outline
level: component-business
bg: horizontal
slug: joy-agent
name_zh: "Joy Agent"
name_en: "Joy Agent"
last_synced: "2026-06-02"

auto_detected:
  level: component-business
  bg: horizontal
  slug: "joy-agent"

relay_source:
  file_id: "2029484645871009793"
  page_id: "31:1"
  node_id: "266:227"
  node_name: "原子-Joy Agent"
  node_type: COMPONENT_SET
  bounds: { w: 1022, h: 212 }
  url: "https://relay.jd.com/file/design?id=2029484645871009793&page_id=31%3A1&node_id=266%3A227"
---

# Joy Agent · Outline

> 自动同步 2026-06-02 · skill v1.4 · Relay [`266:227`](https://relay.jd.com/file/design?id=2029484645871009793&page_id=31%3A1&node_id=266%3A227)

## 稿件预检

🔍 稿件预检：⚠️ 待补充（仅命名维度有 1 处机械告警，不阻断）

| 维度 | 结论 | 说明 |
|---|---|---|
| ① 节点规模 | ✅ 通过 | h=212、nodeCount=296，远低于阈值，单次抽取无截断风险 |
| ② 命名可信度 | ⚠️ 待补充 | 变体名 `618 joy` 含纯数字串 `618`，机械规则触发；几乎可确定是 JD 618 大促形象命名，非旧草稿尺寸残留。以截图渲染文本为准 |
| ③ 标注完整度 | ✅ 通过 | 非 page-doc 模式，本维度不适用 |
| ④ 截图可得性 | ✅ 通过 | bounds 合法（1022×212），preview 可导出 |
| ⑤ 结构清晰度 | ✅ 通过 | root.type=COMPONENT_SET，标准组件根节点 |
| ⑥ 命名漂移率 | ✅ 通过 | 带名节点少且无单一占位值霸屏，maxShare ≤ 0.5 |

整体：⚠️（仅 ② 一处弱告警），**不阻断**，可进入正式录入。

## 本次识别范围

- **节点**：`原子-Joy Agent`（COMPONENT_SET，1022×212，含 7 个变体）
- **组件性质**：L2 横向业务组件——APP 内 AI 助手「Joy」入口形象（吉祥物头像 + 招手引导气泡 + 节日/大促换肤）
- **覆盖**：7 个变体形象 + 1 条引导气泡文案 + 矢量五官/帽子/飘带/AI 徽标等图标件 + 3 张位图切图
- **未覆盖（需设计师补）**：交互行为（点击跳转 / 气泡出现时机 / 招手动画）、暗色态、各变体出现的业务条件

## 结构大纲

```
原子-Joy Agent (COMPONENT_SET 1022×212)
├── 默认            (266:223, 52×52)   纯头像，无气泡
├── 招手            (266:225, 52×52)   头像 + 引导气泡
├── 常规joy         (1543:634, 52×52)
├── 常规joy+招手    (312:58243, 52×52)
├── 生日joy         (1545:139, 52×52)  生日帽换肤
├── 大促joy         (1545:263, 52×52)  大促换肤
└── 618 joy         (1545:388, 52×52)  618 紫帽 + 飘带换肤
```

- 单个变体物理尺寸统一 **52×52 DP**（圆形头像）
- COMPONENT_SET 容器的 1022×212 是 7 变体横向陈列板尺寸，**非组件规格**
- 51 个 iconNodes：底部头（BOOLEAN_OPERATION）、五官件、紫帽/红帽（618/大促）、飘带、AI 徽标容器等矢量

## 变体 / 状态维度

抽取到 7 个并列变体，疑似由 **2 个维度** 组合（待设计师确认拆分）：

- **形象类型**：常规 joy / 生日 joy / 大促 joy / 618 joy（4 类换肤）
- **招手状态**：默认（无气泡）/ 招手（带引导气泡）

| # | 变体名 | 节点 | 尺寸 |
|---|---|---|---|
| 1 | 默认 | 266:223 | 52×52 |
| 2 | 招手 | 266:225 | 52×52 |
| 3 | 常规joy | 1543:634 | 52×52 |
| 4 | 常规joy+招手 | 312:58243 | 52×52 |
| 5 | 生日joy | 1545:139 | 52×52 |
| 6 | 大促joy | 1545:263 | 52×52 |
| 7 | 618 joy | 1545:388 | 52×52 |

> 暗色态：本次 `darkModeDetected=false`，稿件未提供暗色变体 → 暗色 token 缺，记 ⚠️ wiki gap。

## 组合形态

- **头像 + 招手气泡**：招手态在头像旁挂一条引导气泡，文案「这里是一条开启引导最多展示十八个汉字」——即气泡文案上限 **18 个汉字**
- **换肤层**：节日/大促形象在基础头像上叠加帽子（生日帽 / 大促帽 / 618 紫帽）、飘带、AI 徽标等装饰件

## 已识别 Tokens / 材质 / 子组件

### 颜色（22 unique fills）

| 实际值 | 反查 token | 状态 |
|---|---|---|
| `#FFFFFF` | `color.white` / `text 端点·恒白` | ✅ |
| `#000000` | `color.black` | ✅ |
| `#7F00FF` | — | ⚠️ token-miss（AI 品牌紫，主色） |
| `#933EEA` | — | ⚠️ token-miss（紫渐变） |
| `#972FFF` | — | ⚠️ token-miss（紫渐变） |
| `#CD50FE` | — | ⚠️ token-miss（亮紫渐变） |
| `#F71594` | — | ⚠️ token-miss（品牌洋红） |
| `#FCD500` | — | ⚠️ token-miss（黄，徽标/装饰） |
| `#FC004F` | — | ⚠️ token-miss（红，618/大促） |
| `#FF1515` | — | ⚠️ token-miss（红，疑似近 JD 主红但未对齐 token） |

> AI/Joy 品牌的紫-洋红渐变系全部不在 V16 token catalog 内。**不臆造新 token**，逐条标 ⚠️ token-miss 待设计 system 组确认是否纳入色板。

### 字体

| 实际值 | 反查 token | 状态 |
|---|---|---|
| PingFang SC · Semibold · 12px | `typography.role.pingfang_semibold.font_size_12_600` | ✅（候选，待确认行高） |

### 圆角

| 实际值 | 反查 token | 状态 |
|---|---|---|
| 8 | `radius.l` (8px) | ✅ |
| 16 | `radius.xxl` (16px) | ✅ |
| 100 | `radius.full`（胶囊/全圆，V16 标 deprecated） | ⚠️ 52×52 圆形头像走全圆角，full token 已弃用，「Avatar/胶囊形方案待确认」 |
| 0.3 / 0.52 / 0.75 | —（矢量五官几何，非容器圆角） | 忽略 |

### 布局

- root autoLayout：HORIZONTAL，padding {80,80,80,80}，spacing 80 → **变体陈列板间距，非组件规格**，勿录入为组件 spacing

### 材质 / 子组件

- 矢量图标件（五官 / 帽子 / 飘带 / AI 徽标），随换肤变体切换；无标准 material.* INSTANCE 引用命中

## 切图清单（待上传 CDN）

| # | 用途 | Relay 节点 | 尺寸 | imageHash | CDN |
|---|---|---|---|---|---|
| 1 | 切图（266:206 / 266:213 复用同一张） | 266:206、266:213 | 56×34 | `771ee781…fb22a6` | ⏳ 待上传 CDN |
| 2 | 切图（618 装饰位图） | 1545:447 | 14×17 | `5dcf165e…cc302` | ⏳ 待上传 CDN |

> 3 个 IMAGE fill 节点去重后为 2 张位图。位图切图 token / 矢量都无法表达，必须 CDN 托管；确认录入后在 Step 8.5 登记到 `_assets-cdn.md`。

## 待设计师确认

1. **变体维度拆分**：7 变体是否应规范为「形象类型(常规/生日/大促/618) × 招手状态(默认/招手)」二维？目前稿件是扁平 7 个，缺「常规joy 默认」等组合的完整矩阵
2. **暗色态**：稿件无暗色变体，AI 紫/红在暗底下取值需补
3. **品牌色入库**：紫-洋红渐变系（#7F00FF / #F71594 等）是否纳入 V16 token，还是作为业务专属色单列
4. **交互行为**：点击 Joy 跳转目标、招手气泡的出现/消失时机与动画、引导文案 18 字溢出降级——稿件均未标注
5. **气泡文案规则**：「最多展示十八个汉字」是硬截断还是省略号？超长行为待定
6. **全圆角方案**：52×52 头像走 radius.full（已 deprecated），确认 Avatar 形组件的圆角 token 走向

## 自动发现的风险

- ⚠️ **token-miss ×8**：AI 品牌紫-洋红-红黄色系全部未命中 V16 catalog（见颜色表），转换出的 spec 这些色值会带 ⚠️ 注释
- ⚠️ **暗色缺失**：darkModeDetected=false，暗色 token 整列缺，需设计师补抽
- ⚠️ **radius.full deprecated**：头像全圆角依赖已弃用 token
- ⚠️ **命名机械告警**：`618 joy` 含数字串（见预检 ②），渲染以截图为准
- ℹ️ **变体矩阵不完整**：7 个扁平变体非规整二维矩阵，正式录入前建议设计师补齐组合

## 说明

- 本文件用于正式 `design.md` 生成前的确认门
- 未确认前，不写 `design.md` / `INDEX.md`（`used_by` 已 deprecated，skill 不再维护，见 issue #45）
- 未确认前，不回写 Relay sharedPluginData
- 确认后重跑加 `--confirm-outline`，将生成 5 文件 bundle（design/spec/variants/behaviors/CHANGELOG）
