# livestream-cover-generator

> 直播间封面 AI 生成 Skill · v0.1 · 2026-05-29
> Owner: 综合业务设计部 · AI 核心产品设计部
> Status: experimental · 三大知识库 H1 阶段迁移到灵创平台

## 这是干嘛的

把"直播间封面"从手工拼图升级为 AI 编排:

```
[用户输入]               [本 Skill]                    [下游生成]
直播类型 + 主题 + 素材  →  设计蓝图 + 4 段 Prompt  →  SD/MJ/灵创平台
```

**Skill 不直接生成图**,它是**总导演**,产出可被算法工程消费的 Prompt 编排。

## 核心设计哲学(4 层 Z 轴)

```
🌅 背景层 → 底层基调 · AI 生成
🌫️ 素材层 → 中层氛围 · 用户素材 + Relighting
🎯 主体层 → 上层焦点 · 用户上传 (主播/商品)
💬 信息层 → 顶层价值 · AI 生成 (花字 + 容器)
```

## 三大知识库

| 库 | 决定 | 6 / 5 个分类 |
|---|---|---|
| KB-A 风格 | 调性 | 先锋杂志 / 酸性街头 / 新国潮 / 3D 超现实 / 硬核科技 / 清新生活 |
| KB-B 构图 | 骨架 | 商品型 / 主播型 / 文字型 / 商品+文字 / 主播+文字 / 全能型 |
| KB-C 花字 | 装饰 | 大促 / 新品 / 国风 / 日常 / 奢品 |

## 怎么用 · 30 秒上手

在 Claude Code / 灵创平台 / 任何支持 agentskills.io 协议的 host 里:

```
你: 用 livestream-cover-generator 生成封面:
    直播类型: 采销直播
    主题: 零食节, 满 99 减 50
    素材: 一包薯片(蓝绿色包装)

Skill: [输出 Design Blueprint + 4 段 Prompt]
你: [把 Prompt 喂给 Midjourney / 灵创平台生成图]
```

详细 input / output 见 [SKILL.md](./SKILL.md)。

## 输入

```yaml
直播类型: 采销 | 达人 | 品牌 | 预热
直播主题: <2-10 字>
营销文案:
  主标: <例 "满 99 减 50">
  副标: <例 "全场低至 5 折">
素材描述:
  主播: <可选>
  商品: <可选>
风格偏好: <可选>
```

## 输出

1. **Design Blueprint** · 1 段结构化决策(风格 ID + 构图 ID + 花字 ID + 视觉重心 + 设计逻辑)
2. **Prompt A · 背景层** · 英文 SD/MJ Prompt
3. **Prompt B · 信息花字** · 英文 SD/MJ Prompt
4. **Prompt C · 素材处理** · Relighting 指引
5. **Prompt D · Final Synthesis** · Z 轴堆叠合成指导
6. **待设计师确认** · 兜底 / 低置信度的项
7. **多尺寸拓展(可选)** · 7 商业化点位适配建议

## 7 商业化点位

| 点位 | 尺寸 | 信息层重排 |
|------|------|----------|
| 首页 | 详见 references | 简化文案 |
| 频道 | ... | ... |
| 活动组件 | ... | ... |
| 预告聚合页 | ... | ... |
| 主播弹层 | ... | ... |
| 个人页 - 直播 Tab | ... | ... |
| 个人预告页 | ... | ... |

详见 [references/multi-size-adaptation.md](./references/multi-size-adaptation.md)。

## 与其他 Skill 的关系

| Skill | 关系 |
|------|------|
| `relay-to-design-md` | **AI 转化型**(已有设计稿 → md)· 本 skill 是 **AI 生成型**(从零生成) |
| `design-review` | 可对本 skill 输出的合成图做合规检查 |
| `senior-adaptation-tool` | 共享 Z 轴堆叠 + 多尺寸适配理念 |

## 待办

- [ ] 真实 dogfood case 至少 5 张(预热 / 采销 / 达人 / 品牌 / 节日各 1)
- [ ] 失败案例库 `examples/fail-cases/`(版权 / 合规 / 风格不匹配 等)
- [ ] 接入灵创平台 API(三大 KB 拉云端)
- [ ] 7 商业化点位的精确尺寸 + 安全区 + 信息密度规则
- [ ] 跟 `design-review` skill 联动(生成 → 合规审 → 上线)
- [ ] 跟「PDP 大赛」类比,做一次「直播封面大赛」试水

## 协议

`agentskills.io v0.1` · 与京东 wiki / Skill 体系兼容

## 贡献

欢迎设计师 / 算法工程 / 运营提 PR。优先:补 case / 调 prompt / 加平台合规规则。
