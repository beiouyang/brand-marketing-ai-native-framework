# Prompt 模板(PE v16 → Skill 化)

> 本文件是 4 段 Prompt 的标准模板。
> Skill 在 Phase 3 输出时,**按这里的格式填空**。

## 通用约束

| 约束 | 适用 |
|------|------|
| 所有 Prompt **用英文** | SD / MJ / 灵创平台对英文识别率最高 |
| 禁止包含 **品牌名 / 名人名 / 政治符号** | 平台合规 + 版权 |
| 1:1 输出 → 加 `--ar 1:1` | Midjourney 语法,SD 走 width=height=750 |
| 数字越大 = 质量越高(MJ) | 默认 `--quality 2`,需要 hero 图加 `--quality 5` |
| 中文文案在 Prompt 里**用引号包起来** | 例 `"满99减50"`,避免 LLM 自由翻译 |

---

## 模板 A · 背景层 Prompt(Generator A)

### 结构

```text
Live stream cover background,
[STYLE_KEYWORDS · from KB-A S-xx],
[MATERIAL_LIGHT · from KB-A S-xx],
[LAYERING L1 · from KB-B L-xx 第一行],
Clean negative space for [SUBJECT · 主播 or 商品 or 文字],
[OPTIONAL: 季节 / 场景 hint, e.g., "Summer beach atmosphere"],
--no text --ar 1:1 --quality 2
```

### 示例 · 采销直播 + 黄金珠宝 + 中秋特惠

KB-A: **S-03 新国潮东方** · KB-B: **L-04 基座/分割式** · KB-C: **T-03 国风**

```text
Live stream cover background,
Neo-Chinese style, Song Dynasty aesthetics,
Symmetrical composition, Red and Gold palette, Ethereal atmosphere,
Soft global light, Warm atmosphere, Matte red lacquer texture, Silk, Gold foil,
Stylized stage scene with subtle Chinese cloud patterns in upper area,
Clean negative space in lower-center for a Gold Jewelry product,
Mid-Autumn festival hint with floating moon and clouds in background,
--no text --ar 1:1 --quality 2 --style raw
```

---

## 模板 B · 信息层 Prompt(Generator B)

### 结构

```text
3D render of text "[MARKETING_TEXT · 中文文案]",
[TYPOGRAPHY_KEYWORDS · from KB-C T-xx 花字风格],
[MATERIAL · from KB-C T-xx 材质],
[CONTAINER · from KB-C T-xx 容器装饰],
[OPTIONAL: 营销 emoji / 装饰元素 hint],
Isolated on solid black background,
--ar 1:1 --quality 2
```

### 示例 · T-03 国风 + "中秋特惠 5 折起"

```text
3D render of Chinese calligraphy "中秋特惠5折起",
Traditional brush stroke style, Calligraphy serif font,
Gold foil texture, Metallic shine,
Red lacquer plaque container behind the text,
Floating silk ribbons in red and gold,
Subtle moon icon in upper corner,
Isolated on solid black background,
--ar 1:1 --quality 2
```

### 多行文案处理

主标 + 副标 → 分两段 prompt 或单段用 `with subtitle "副标"`:

```text
3D render of main text "黄金大促",
with smaller subtitle "全场5折起" below,
[Typography keywords],
Isolated on solid black background,
--ar 1:1
```

---

## 模板 C · 素材处理 Prompt(Processor C)

### 结构(Relighting + 抠图指引)

不直接给绘图 AI,而是给**抠图 / Relighting 工具**(ZeroBG / PhotoMaker / BRIA / 灵创素材层):

```text
Source: [USER_UPLOADED_IMAGE]
Processing:
  1. Background removal (high precision, preserve hair details if portrait)
  2. Relighting:
     - Direction: [LIGHTING_DIRECTION · from KB-A S-xx 光]
     - Quality: [LIGHTING_QUALITY · soft/hard, warm/cool]
     - Match: 与 Generator A 输出的背景光一致
  3. Output:
     - PNG with transparent background
     - Subject occupies [POSITION · from KB-B L-xx · L2 位置]
     - Resolution: 750x750 or higher
```

### 示例 · 用户上传"金色项链" + S-03 新国潮光

```text
Source: 用户上传的项链产品图
Processing:
  1. Background removal:
     - High precision抠图,保留金属反射边缘
     - 链条细节防丢失
  2. Relighting:
     - Direction: Soft global light from upper-left
     - Quality: Warm atmosphere, gentle highlights on gold
     - Match: 跟 S-03 新国潮的红金色背景光一致
  3. Output:
     - PNG transparent
     - Subject 居中,占画面 50% 高
     - 750x750+ 分辨率
```

---

## 模板 D · Final Synthesis Prompt(合成指导)

### 结构

```text
Final composition · live stream cover,
Background: [BACKGROUND_DESCRIPTION · from Prompt A 简化版],
Subject: [USER_SUBJECT] positioned [POSITION · from KB-B L-xx · L2 描述],
Text: "[MARKETING_TEXT]" positioned [TEXT_POSITION · from KB-C × KB-B 配合 · 详见 KB-C 末段 "花字位置 → 构图配合"],
Interaction: [INTERACTION_MODE · from KB-B L-xx · L4 行为, 例 "on a pedestal" / "floating around" / "in hand"],
Visual hierarchy: [FOCAL_POINT · from KB-B L-xx],
--ar 1:1 --quality 2
```

### 示例 · 采销直播 + 黄金 + 中秋

```text
Final composition · live stream cover,
Background: Neo-Chinese stylized stage with soft red lacquer and gold foil details,
Subject: Gold necklace product positioned at the center-left,
        floating on a stylized lacquer pedestal,
Text: "中秋特惠5折起" in calligraphy 3D,
      positioned at center-right on a red plaque,
Interaction: Floating silk ribbons connect the product and the text plaque,
Visual hierarchy: 60% Product (left) / 40% Text (right) split,
Strong vertical symmetry,
--ar 1:1 --quality 2 --style raw
```

---

## 安全 + 合规 Prompt

某些场景必须在 Prompt 末尾追加合规约束:

| 场景 | Prompt 追加 |
|------|------------|
| 美容 / 医美 | `, do not show specific cosmetic procedure, generic skincare context only` |
| 药品 / 保健品 | `, do not show medical claims, lifestyle visual only` |
| 真人主播肖像 | `, generic stylized portrait, do not replicate specific person identity` |
| 金融 / 理财 | `, do not show specific financial returns, generic concept only` |

---

## H1 灵创平台对接(规划)

| 当前 v0.1 | H1 灵创版 |
|---|---|
| 输出 4 段 Prompt 文本 | 输出 + 调灵创平台 `POST /api/generate/{layer}` 直出图 |
| 抠图 / Relighting 文本指引 | 调灵创素材层模块 API |
| 合成由人工 / 第三方做 | 调灵创合成层 API,自动堆叠 |
| 7 尺寸由人工微调 | 调灵创多尺寸模块,一键拓展 |

接口幂等:本 Skill 始终输出 Prompt 文本(向后兼容);灵创平台接入后**新增**直出图能力。
