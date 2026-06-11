# 4 Phase 工作链路详解

> Skill 的核心调度结构。**每个 Phase 的产出是下一 Phase 的输入**。

```
[用户输入]
    ↓
Phase 1 · The Brain          意图解析与全局规划
    ↓ (产出: Design Blueprint 设计蓝图)
Phase 2 · The Library        知识库匹配
    ↓ (产出: 风格 ID + 构图 ID + 花字 ID)
Phase 3 · The Factory        分布式素材生成
    ↓ (产出: 3 段独立 Prompt)
Phase 4 · The Assembly       最终合成 + 多尺寸
    ↓
[输出: 1 张 1:1 海报 + N 张多尺寸]
```

## Phase 1 · The Brain · 意图解析与全局规划

### 1.1 输入

| 输入 | 必填 | 来源 |
|------|-----|------|
| 直播类型(采销 / 达人 / 品牌 / 预热) | ✅ | 用户 |
| 营销主题 + 文案 | ✅ | 用户 |
| 素材描述(主播 / 商品) | ⚠️ 至少一项 | 用户 |
| 风格偏好 | ❌ 可选 | 用户 |

### 1.2 全局架构师(AI Agent)动作

```python
# 伪代码 - 实际由 LLM 推理
def phase_1_brain(user_input):
    intent = analyze_intent(user_input)  # 解析意图
    constraints = extract_constraints(intent)  # 抽取约束(品类、合规、紧迫度)

    blueprint = {
        "live_type": intent.live_type,
        "kb_a_query": {"category": intent.product_category, "theme": intent.theme},
        "kb_b_query": {"live_type": intent.live_type, "materials": intent.materials},
        "kb_c_query": {"urgency": intent.urgency, "style_hint": user_input.style_preference},
        "constraints": constraints,
    }
    return blueprint
```

### 1.3 产出 · Design Blueprint(草稿)

蓝图此时只有"查询参数",还没填具体 ID,等 Phase 2 填。

## Phase 2 · The Library · 知识库匹配

### 2.1 三库并行查询

```
Blueprint --> KB-A 风格库 ---> S-xx 风格 ID
          --> KB-B 构图库 ---> L-xx 构图 ID
          --> KB-C 文案库 ---> T-xx 花字 ID
```

详见:
- [kb-style-library.md](./kb-style-library.md)(命中规则 + 6 风格)
- [kb-composition-library.md](./kb-composition-library.md)(命中规则 + 6 构图)
- [kb-typography-library.md](./kb-typography-library.md)(命中规则 + 5 花字 + 兼容矩阵)

### 2.2 兼容性校验

Phase 2 末尾必须校验 KB-A × KB-C **兼容矩阵**(`kb-typography-library.md` 末段):

- ✅ 推荐 → 直接进 Phase 3
- 🟡 谨慎 → 进 Phase 3,但在 Final Output 加 review 标记
- ❌ 冲突 → 不进入 Phase 3,**回 Phase 2 重选**(优先按 KB-A 风格保留,重新选 T-xx)

### 2.3 产出 · Design Blueprint(完整版)

```yaml
Global_Plan:
  live_type: 采销直播
  composition_id: L-04 基座/分割式
  style_id: S-03 新国潮东方
  typography_id: T-03 国风/节日
  compatibility: ✅ (S-03 × T-03)
  layering_strategy: ...
  focal_point: 60% 商品 / 40% 文字
  rationale: |
    采销直播需突出货品 + 文案促销,选 L-04 基座式;
    商品是黄金珠宝走 S-03 新国潮;
    营销主题"中秋特惠"匹配 T-03 国风花字。
```

## Phase 3 · The Factory · 分布式素材生成

**3 个 Generator 并行**(因为彼此独立),产出 3 段 Prompt + 1 段合成指导。

详细模板:[prompt-templates.md](./prompt-templates.md)。

### 3.1 Generator A(背景层)

输入:
- 风格 ID(S-xx)的 keywords
- 构图 ID(L-xx)的 layering L1 说明
- 主体留白方向(留给商品 / 主播)

输出:
- Prompt A(英文,带 `Clean negative space for [Subject]` + `--no text --ar 1:1`)

### 3.2 Generator B(信息层)

输入:
- 花字 ID(T-xx)的 keywords + 容器
- 营销文案(主标 + 副标)

输出:
- Prompt B(英文,带 `Isolated on solid black background` 方便后续抠 alpha)

### 3.3 Processor C(素材层)

输入:
- 用户上传素材(主播 / 商品)
- 选定风格(S-xx)的 lighting 风格

输出:
- Prompt C 或处理指令(给抠图 / Relighting 工具,如 ZeroBG / PhotoMaker 等)

### 3.4 Final Synthesis(合成指导)

输入:
- 上面 3 段 Prompt 的核心 keyword
- 构图 ID(L-xx)的 Z 轴堆叠规则

输出:
- Prompt D(英文,描述各层 Z 轴堆叠 + 各层互动方式)

## Phase 4 · The Assembly · 最终合成 + 多尺寸

### 4.1 主输出

按照 Z 轴顺序堆叠:
```
[最后渲染] L4 信息花字(顶)
            ↑
            L3 主体(用户素材 relighted)
            ↑
            L2 素材层氛围
            ↑
[最先渲染] L1 背景
```

输出:1:1 / 750×750px

### 4.2 多尺寸适配(7 商业化点位)

详见 [multi-size-adaptation.md](./multi-size-adaptation.md)。

主输出完成后,按 7 个点位的尺寸 + 安全区:
- **不重新生成 L1 背景**(开销大)
- **重排 L3 主体位置**(适应不同 aspect ratio)
- **重排 L4 信息花字**(避开平台 UI 安全区)

## 失败与回滚

| 失败场景 | 回滚到 |
|---------|------|
| Phase 1 用户输入残缺 | 阻塞,提示补输入 |
| Phase 2 KB 命中冲突 | 回 Phase 2 重选(KB-A 优先) |
| Phase 2 兼容矩阵 ❌ | 回 Phase 2 重选 T-xx |
| Phase 3 Prompt 生成出错 | 回 Phase 2,标 review |
| Phase 4 合成失败 | 不回滚,输出 3 段独立 Prompt 让人工合成 |

## 跟现有 Skill 工作链路的差异

| Skill | 工作链路 |
|-------|--------|
| `relay-to-design-md` | **抽取 + 转换**(已有设计稿 → md)|
| `design-review` | **校验**(设计稿 + 规范 → 合规报告)|
| `senior-adaptation-tool` | **变换**(原稿 → 大字版 / 长辈版)|
| **本 skill** | **编排 + 生成**(意图 → 3 段独立 Prompt)|

本 skill 是**生成型 Skill**,工作链路更接近"作曲家" + "调度器",而不是"翻译"或"校对"。
