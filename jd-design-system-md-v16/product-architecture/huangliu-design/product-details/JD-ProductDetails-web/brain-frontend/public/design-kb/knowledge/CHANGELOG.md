# 知识库变更日志

> 由 /knowledge-update 自动维护，禁止手动编辑。

---

## 2026-05-25 — /design-reasoning-input --confirm

**新增 Case（1 个）**
- `pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md`：国补资格增加有效期&倒计时（pdp/promotion · Both）

**INDEX.md 变动**
- Case 总数：4 → 5
- 新增条目：商详 · 促销组件第 4 条
- 新增关键词：资格有效期,倒计时,被动解绑,领取弹层,底部黄条,24小时,过期时间,云闪付,站内闭环

**component-naming.md 变动**
- 新增组件：资格有效期行（别名：倒计时行、过期时间行、有效期提示行）⚠️ 别名待人工确认
- 新增组件：底部黄条（倒计时）（别名：国补黄条、倒计时浮条）⚠️ 别名待人工确认

**待补充项（4 条）**
- `pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md` § 5. 状态覆盖表：接口异常/过期时间获取失败的兜底方案
- `pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md` § 9. 遗留问题：商详方案一 vs 方案二最终落地结果
- `pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md` § 9. 遗留问题：广东住建黑名单后续维护机制
- `pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md` § 6. 文案决策：倒计时文案是否随活动配置动态下发

---

## 2026-05-22 — 全量扫描

**新增 Case（1 个）**
- `pdp/promotion/app-national-subsidy-tradein-reasoning.md`：国补叠加以旧换新利益点感知提升（pdp/promotion · App）

**INDEX.md 变动**
- Case 总数：3 → 4
- 新增分组行：商详 · 促销组件 第 3 条
- 新增关键词：以旧换新,利益点感知,国补叠加,无资格,有资格未领取,资格已领取,服务金,E卡,线下门店降级

**component-naming.md 变动**
- 新增组件：优惠弹层（别名：优惠详情弹层、促销弹层）⚠️ 别名待人工确认
- 新增组件：聚合利益点区块（别名：叠加优惠区块、双优惠到手价区块）⚠️ 别名待人工确认

**待补充项（17 条）**
- `pdp/promotion/pc-national-subsidy-reasoning.md`：4 条（tooltip 文案×3，兜底状态×1，无变化）
- `pdp/promotion/app-national-subsidy-tradein-reasoning.md`：8 条（角色信息、业务数据、降级形态、弹层结构×2、文案规则等）
- `pdp/trade-in/app-trade-in-v15-reasoning.md`：5 条（业务数据、技术约束、暗黑模式、兜底方案等）

---

## 2026-05-21 — /design-reasoning-input --confirm

**新增 Case（1 个）**
- `pdp/trade-in/app-trade-in-v15-reasoning.md`：以旧换新国补促销 v15.0样式升级（pdp/trade-in · App）

**INDEX.md 变动**
- Case 总数：2 → 3
- 新增功能区分组：商详 · 以旧换新
- 新增关键词：以旧换新,旧机估价,选旧机,自动识别,v15.0样式升级,购买时间,运行情况,换新利益点,暗黑适配,历史标签

**component-naming.md 变动**
- 新增组件：选旧机弹层（别名：旧机选择弹层、换新选机弹层）
- 新增组件：旧机估价弹层（别名：旧机估值弹层、换新估价弹层）
- 新增组件：自动识别标签（别名：自动识别 badge、自动填充标记）
- 新增组件：运行情况选项组（别名：机况选择、设备状态选项）

**待补充项（7 条）**
- `pdp/promotion/pc-national-subsidy-reasoning.md`：4 条（tooltip 文案×3，兜底状态×1，无变化）
- `pdp/trade-in/app-trade-in-v15-reasoning.md`：3 条（暗黑模式，自动识别失败兜底，业务影响数据）

---

## 2026-05-21 — 全量扫描（第二次）

扫描完成，知识库无新增内容。
- Case 总数：2，待补充项：4（来自 pc-national-subsidy-reasoning.md）

---

## 2026-05-21 — /design-reasoning-input --confirm

**新增 Case（1 个）**
- `pdp/promotion/app-national-subsidy-multisku-reasoning.md`：App国补多商品（pdp/promotion · App）

**INDEX.md 变动**
- Case 总数：1 → 2
- 新增关键词：国补腰带、App商详、站内享、优惠弹层、附件弹层、领取前、领取后、附件价值、多商品、国补说明弹窗
- pc-national-subsidy-reasoning.md 平台字段修正：Both → PC

**component-naming.md 变动**
- 新增组件：国补腰带（别名：国补banner、绿色banner、国补活动banner）
- 新增组件：国补说明弹窗（别名：国补计算规则弹窗、小i弹窗、附件价值说明弹窗）

**待补充项（4 条，来自 pc-national-subsidy-reasoning.md，无变化）**
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 4. Decision 3：tooltip 文案
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 5. 状态覆盖表：tooltip 文案（hover 小i）
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 5. 状态覆盖表：兜底状态设计
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 9. 遗留问题：hover tooltip 具体文案

---

## 2026-05-21 — 全量扫描

**扫描结果**
- Case 总数：1

**Case 清单**
- `pdp/promotion/pc-national-subsidy-reasoning.md`：PC接入国补（pdp/promotion · Both）

**INDEX.md 变动**
- 更新条目：1 条（同步 last_updated 时间戳）

**component-naming.md 变动**
- 无新增组件（3 个已有条目，别名待人工确认）

**待补充项（4 条）**
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 4. Decision 3：tooltip 文案（行内）
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 5. 状态覆盖表：tooltip 文案（有资格·hover 小i 行）
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 5. 状态覆盖表：兜底状态设计（资格接口超时/异常）
- `pdp/promotion/pc-national-subsidy-reasoning.md` § 9. 遗留问题：hover tooltip 具体文案
