# KB-A · 风格映射库(Visual Style Library)

> 决定画面的 **调性、色彩、光影、材质**。解决「**好看**」的问题。
> 调用逻辑:**商品品类** 或 **营销主题** 命中。

## 命中规则

| 命中维度 | 优先级 |
|---------|------|
| 1. 用户显式 `风格偏好` | 最高 |
| 2. 商品品类 | 中 |
| 3. 营销主题关键词 | 低 |
| 4. 都未命中 | → S-06 清新生活(兜底) |

如果多个维度同时命中**不同风格**,按本表**列顺序优先**(先列先选)。

## 风格表

| 风格 ID | 风格名称 | 适用场景 | Prompt Keywords(英) | 材质与光影 |
|---|---|---|---|---|
| **S-01** | 先锋杂志风<br/>(High Fashion) | 奢侈品 / 大牌美妆 / 时装周 | `Avant-garde`, `Editorial photography`, `Wide-angle lens`, `Fisheye distortion`, `Minimalist`, `Vogue Italia style` | 光: `Hard flash`, `High contrast`<br/>质: `Film grain`, `Concrete texture` |
| **S-02** | 酸性街头风<br/>(Y2K Street) | 潮牌 / 滑板 / 运动鞋 / 嘻哈 | `Y2K aesthetic`, `Mixed media collage`, `Scrapbook art`, `Ripped paper edges`, `Duct tape`, `High saturation` | 光: `Direct sunlight`, `Snapshot`<br/>质: `Paper fiber`, `Glossy sticker`, `Halftone dots` |
| **S-03** | 新国潮东方<br/>(Neo-Chinese) | 节日大促 / 汉服 / 茶饮 / 黄金珠宝 | `Neo-Chinese style`, `Song Dynasty aesthetics`, `Symmetrical composition`, `Red and Gold palette`, `Ethereal` | 光: `Soft global light`, `Warm atmosphere`<br/>质: `Matte red lacquer`, `Silk`, `Gold foil` |
| **S-04** | 3D 超现实<br/>(Surreal 3D) | 母婴 / 零食 / 个护 / 可爱小物 | `C4D render`, `Octane render`, `Macaron color palette`, `Soft shapes`, `Dreamy landscape`, `Floating elements` | 光: `Volumetric lighting`, `Softbox`<br/>质: `Claymorphism`, `Liquid metal`, `Fluffy`, `Glass` |
| **S-05** | 硬核科技风<br/>(Cyberpunk) | 数码家电 / 手机 / 电竞外设 | `Cyberpunk`, `Industrial design`, `Futurism`, `Data visualization`, `Neon grid`, `Glitch art` | 光: `Blue/Purple rim light`, `Neon glow`<br/>质: `Brushed metal`, `Circuit board`, `Holographic` |
| **S-06** | 清新生活风<br/>(Lifestyle) | 家居日用 / 生鲜水果 / 收纳 | `Japanese Muji style`, `Kinfolk magazine`, `Natural sunlight`, `Airy`, `Clean background`, `High-key photography` | 光: `Natural window light`, `Dappled shadows`<br/>质: `Wood`, `Linen`, `Water droplets`, `Fresh plants` |

## 商品品类 → 风格 默认映射

| 商品品类 | 主选风格 | 备选 |
|---------|--------|------|
| 奢侈品 / 大牌美妆 / 服饰 | S-01 | S-03(国潮高端) |
| 潮牌 / 滑板 / 运动鞋 | S-02 | S-05(科技感) |
| 节日大促 / 汉服 / 茶饮 / 黄金 | S-03 | S-04 |
| 母婴 / 零食 / 个护 / 可爱小物 | S-04 | S-06 |
| 数码 / 家电 / 电竞 | S-05 | S-01 |
| 家居 / 日用 / 生鲜 / 收纳 | S-06 | S-04 |

## Prompt 拼装示例

调 S-03 新国潮 + 茶饮品类:
```text
Live stream cover, Neo-Chinese style, Song Dynasty aesthetics,
Symmetrical composition, Red and Gold palette, Ethereal atmosphere,
Soft global light, Warm tone, Matte red lacquer texture,
Silk and Gold foil details,
Clean negative space for [Tea Product] in the center,
--no text --ar 1:1 --style raw
```

## 未来 · H1 灵创迁移

| 项 | v0.1(当前) | H1 灵创版 |
|---|---|---|
| KB-A 数据源 | 本 markdown | 灵创平台 API `/api/kb/styles?id=S-xx` |
| 风格图示 | 文字描述 | 平台拉真实示例图(每个风格 3-5 张) |
| 商家自定义风格 | 不支持 | 平台支持商家上传私有风格(企业版) |

接口幂等:无论数据源是 md 还是 API,Skill 都按 `S-xx` ID 调用。
