# Example 01 · 零食节采销直播 · 一包薯片

> 这是本 Skill v0.1 的第一个 dogfood case。用 PDF 方案稿里的样例输入,跑一遍完整流程,验证 Skill 是否能产出合格的设计蓝图 + 4 段 Prompt。

## 用户输入

```yaml
直播类型: 采销直播
直播主题: 零食节, 满99减50
营销文案:
  主标: "满99减50"
  副标: "零食大狂欢"
素材描述:
  主播: (无)
  商品: "一包蓝绿色包装的薯片,正面有 logo + 产品介绍"
风格偏好: (未指定)
```

## Phase 1 · The Brain · 意图解析

| 解析项 | 值 |
|--------|---|
| live_type | 采销直播 |
| product_category | 零食(食品) |
| theme | 零食节 + 满减(强促销) |
| materials | 商品有 / 主播无 / 文字有 |
| urgency | 高(满减是强紧迫度) |
| user_style_pref | 未指定 |

## Phase 2 · The Library · 知识库匹配

### KB-A 风格 → S-04 3D 超现实

按 [kb-style-library.md](../references/kb-style-library.md) 商品品类映射:
- 零食 → 主选 **S-04 3D 超现实**(`C4D render`, `Macaron color palette`, `Floating elements`)

理由:零食是可爱小物 + 强视觉,3D 超现实最匹配。

### KB-B 构图 → L-04 基座/分割式

按 [kb-composition-library.md](../references/kb-composition-library.md) 素材判定:
- 有商品 + 无主播 + 有文字 → **L-04 基座/分割式**

理由:采销主流构图,商品左 60% + 文字右 40%。

### KB-C 花字 → T-01 大促/炸场

按 [kb-typography-library.md](../references/kb-typography-library.md) 文案紧迫度:
- "满99减50" 强促销 → **T-01 膨胀字体 + 爆炸贴纸**

### 兼容性校验

S-04 × T-01 → ✅ **推荐组合**(KB-C 末段兼容矩阵 S-04 × T-01 = ✅)

## Phase 3 · The Factory · 4 段 Prompt

### 🌅 Prompt A · 背景层

```text
Live stream cover background,
C4D render style, Octane render, Macaron color palette,
Soft pastel pink and yellow gradient, Floating geometric shapes,
Volumetric lighting, Softbox quality, Dreamy atmosphere,
Stylized stage platform on the left 60% of frame,
Clean negative space on the right 40% for marketing text,
--no text --ar 1:1 --quality 2 --style raw
```

### 🌫️ Prompt C · 素材处理(给 Relighting 工具)

```text
Source: 用户上传的薯片包装产品图
Processing:
  1. Background removal:
     - 高精度抠图,保留包装边缘细节 + 文字清晰
  2. Relighting:
     - Direction: Soft volumetric light from above
     - Quality: Pastel, warm, gentle highlights
     - Match: 跟 S-04 3D 超现实的 macaron 色调一致
  3. Output:
     - PNG transparent
     - Subject 居中偏左,放置在虚拟基座上
     - 750x750+ 分辨率
```

### 💬 Prompt B · 信息花字

```text
3D render of text "满99减50",
3D balloon font, Inflatable typography, Glossy plastic texture,
High saturation Red and Yellow palette,
Bouncy puffy letters, Stretched balloon look,
Pop art burst sticker behind the text,
Subtle "ZERO SHIPPING" decorative element,
Isolated on solid black background,
--ar 1:1 --quality 2
```

### 🎬 Prompt D · Final Synthesis

```text
Final composition · live stream cover for snack promotion,
Background: C4D pastel macaron 3D scene with floating shapes,
Subject: Single chip bag (blue-green packaging) placed on a stylized claymorphism pedestal in the left 60% of frame,
Text: "满99减50" in 3D balloon font, positioned in the right 40% of frame,
       above smaller subtitle "零食大狂欢",
Interaction: Floating macarons and candy elements connect the chip bag and the text,
Visual hierarchy: 60% Product (left) / 40% Text (right),
Strong color contrast between pastel background and saturated 3D text,
--ar 1:1 --quality 2 --style raw
```

## Phase 4 · The Assembly

输出主图(1:1 / 750×750),多尺寸按需派生:

| 点位 | 派生处理 |
|------|--------|
| P1 首页 | 主输出直接用 |
| P2 频道(4:3)| Outpainting 横向扩 70px 左右,主体保持中心 |
| P3 活动 Banner(16:9)| 文字下移,主体 + 文字并排 |
| P5 主播弹层(640×640)| 缩小到 640 + 信息层留主标即可 |
| 其他点位 | 暂不输出 |

## ⚠️ 待设计师确认

- ✅ 风格 × 花字兼容,无 review 标记
- 🟡 商品包装的 logo 是否真实可识别 → 若为客户商品,需走客户确认通道
- 🟡 "满 99 减 50" 是否符合平台促销合规(满减门槛、有效期)

## 这个 case 验证了什么

| 验证项 | 结果 |
|--------|------|
| Skill 能从模糊输入推到具体 KB ID 吗?| ✅(零食 → S-04,采销 → L-04,满减 → T-01) |
| Phase 1 → Phase 2 → Phase 3 流程能跑通吗? | ✅ |
| 4 段 Prompt 是否可被 SD/MJ 直接消费? | ✅(可拿去 Midjourney 跑) |
| 兼容矩阵校验是否生效? | ✅ S-04 × T-01 = ✅ 推荐 |
| 多尺寸派生规则是否清晰? | ✅(7 点位虽未全输出,but 派生策略明确) |

## 待补

- [ ] 真实跑 Midjourney / SD 的输出对比图(贴在本文件末尾)
- [ ] 至少再补 4 个 case:达人直播 + 国风节日 + 高奢品牌 + 预热满版
- [ ] 失败案例(如花字 × 风格 ❌ 冲突的 outline 怎么写)
