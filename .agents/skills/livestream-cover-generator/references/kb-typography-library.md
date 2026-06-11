# KB-C · 主题文案与花字库(Typography & Assets Library)

> 决定文字的 **视觉形态** 和 **承载容器**。解决「**信息传达**」的问题。
> 调用逻辑:按 **营销文案的紧迫度** + **已选风格库(KB-A)** 组合。

## 命中规则

按营销文案语义判定:

| 文案紧迫度 / 类型 | 推荐花字 ID |
|------------------|----------|
| 强促销 / 倒计时 / 价格冲击(满 99 减 50 / 限时秒杀 / 9.9 包邮) | **T-01** 大促/炸场 |
| 新品发布 / 高端感(新品首发 / 黑科技 / 旗舰款)| **T-02** 新品/首发 |
| 节日 / 传统(春节 / 中秋 / 国货)| **T-03** 国风/节日 |
| 日常种草 / 推荐(测评 / 攻略 / 选购指南)| **T-04** 日常/种草 |
| 品牌日 / 高奢(品牌日 / 奢品 / 限量)| **T-05** 奢品/格调 |

如果用户没明确文案紧迫度,看营销主题命中关键词(参考 SKILL.md Step 1.2)。

## 花字表

| ID | 营销场景 | 花字风格 | 容器 / 装饰 | Prompt Keywords(英) |
|---|---|---|---|---|
| **T-01** | 大促 / 炸场<br/>(特价 / 秒杀) | 膨胀字体<br/>(Inflatable 3D) | 爆炸贴纸 / 警示带<br/>(Burst sticker / Caution tape) | `3D balloon font`, `Glossy plastic texture`, `High saturation Red/Yellow`, `Pop art sticker` |
| **T-02** | 新品 / 首发<br/>(黑科技 / 高端) | 极简无衬线<br/>(Bold Sans-serif) | 毛玻璃卡片 / 细线框<br/>(Frosted glass / Thin stroke) | `Minimalist typography`, `Translucent glass card`, `Futuristic UI elements`, `Glowing edges` |
| **T-03** | 国风 / 节日<br/>(春节 / 中秋) | 书法体 / 宋体<br/>(Calligraphy/Serif) | 卷轴 / 匾额 / 祥云<br/>(Scroll / Plaque / Cloud pattern) | `Chinese calligraphy`, `Gold foil texture`, `Traditional seal`, `Floating silk ribbons` |
| **T-04** | 日常 / 种草<br/>(推荐 / 攻略) | 手写体 / 圆体<br/>(Handwritten/Rounded) | 气泡框 / 撕纸 / 便利贴<br/>(Speech bubble / Ripped paper) | `Hand-drawn doodle style`, `Marker pen font`, `Notepad paper texture`, `Cute stickers` |
| **T-05** | 奢品 / 格调<br/>(品牌日) | 高奢衬线体<br/>(Didot/Bodoni) | 无容器 / 镂空<br/>(No container / Cutout) | `Elegant Serif font`, `Metallic gold/silver texture`, `Floating 3D letters`, `Clean layout` |

## 风格(KB-A) × 花字(KB-C) 兼容矩阵

✅ 推荐组合 / 🟡 谨慎使用 / ❌ 视觉冲突,避免

|  | T-01 大促 | T-02 新品 | T-03 国风 | T-04 日常 | T-05 奢品 |
|---|---|---|---|---|---|
| **S-01** 先锋杂志 | 🟡 | ✅ | 🟡 | ❌ | ✅ |
| **S-02** 酸性街头 | ✅ | 🟡 | ❌ | ✅ | ❌ |
| **S-03** 新国潮 | 🟡 | 🟡 | ✅ | 🟡 | 🟡 |
| **S-04** 3D 超现实 | ✅ | ✅ | 🟡 | ✅ | 🟡 |
| **S-05** 硬核科技 | 🟡 | ✅ | ❌ | 🟡 | 🟡 |
| **S-06** 清新生活 | ❌ | 🟡 | 🟡 | ✅ | 🟡 |

**冲突处理**:用户指定的组合 + 矩阵显示 ❌ 时,在 outline 输出「待设计师确认」段警告。

## Prompt 拼装示例

T-01 大促花字 + 文案"满 99 减 50":
```text
3D render of text "满99减50",
3D balloon font, Glossy plastic texture,
High saturation Red and Yellow palette,
Pop art burst sticker behind the text,
Isolated on solid black background,
--ar 1:1 --quality 2
```

T-03 国风花字 + 文案"新年新福"(配合 S-03 新国潮):
```text
3D render of Chinese calligraphy "新年新福",
Traditional brush stroke style, Gold foil texture,
Floating silk ribbons around the text,
Red lacquer plaque container behind,
Isolated on solid black background,
--ar 1:1
```

## 花字位置 → 构图配合

| 构图 | 花字建议位置 |
|------|----------|
| L-01 商品型 | 侧边竖排,占画面 15% |
| L-02 主播型 | 下方一行,占画面 20% |
| L-03 文字型 | 撑满,占 90%+ |
| L-04 商品+文字 | 右侧 / 基座下方,占 40% |
| L-05 主播+文字 | 全屏背景,主播部分遮挡 |
| L-06 全能型 | 顶部 + 底部双排,占 30% |

## 多语言支持(v0.2 规划)

| 文案语言 | 当前 | H1 计划 |
|---------|------|--------|
| 简中 | ✅ | 维护 |
| 繁中 | 🟡 部分 | ✅ |
| 英文 | 🟡 部分 | ✅ |
| 日文 / 韩文 | ❌ | 🟡 v0.2 |
