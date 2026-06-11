window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-tradein-bigpromo'] = {
  slug: 'app-national-subsidy-tradein-bigpromo',
  feature_name: '以旧换新国补大促前台感知强化',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-29',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:58100&node_id=6:726169',
  keywords: ['国补','以旧换新','大促','前台感知','App商详','以旧换新弹层','有tab','无tab','未领取','已领取','自补','换新国补','辅助决策信息条','16.0','15.0'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-tradein', note: '直接上下游：同为国补×以旧换新叠加场景，本 Case 是大促节点的感知强化版本' },
    { slug: 'app-national-subsidy-multisku', note: '国补弹层基础框架、有tab/无tab 结构的来源' },
    { slug: 'app-trade-in-v15', note: '以旧换新弹层 v15.0 样式规范来源，本 Case 在此基础上叠加国补感知强化' }
  ],
  sections: {
    background: '**核心问题（来自设计稿背景标注）：**\n3C 以旧换新下单链路线上数据梳理可以看出用户流失主要环节是报价-结算、结算-提交，在品牌方换新补贴投入大幅增长的情况下，用户下单链路中换新补贴优势未充分表达。\n\n同时，陕西和天津等地已有明确政策要求限制国补资金用于以旧换新场景，后续国补资金将更多向以旧换新倾斜，26年可能会全面要求必须走以旧换新才能享受国补优惠。\n\n**大促背景：** 本次家群主推国补与以旧换新叠加，以旧换新至高再减1000元，覆盖国补超品日+中秋国庆全周期，超同期4倍曝光资源量级。',
    decisions: [
      { title: '以旧换新弹层内强化国补叠加利益点感知', decision: '在以旧换新弹层中新增/强化国补权益展示区块，适配「有tab/无tab」两种弹层结构。设计稿提供 BEFORE（线上样式）vs AFTER（本期方案）对比帧。', reason: '用户在选旧机流程（弹层）中是换新决策的关键节点，此处强化国补信息可直接影响报价-结算环节的流失。来源：设计稿背景标注', excluded: '（设计稿保留线上样式作为 Before 基准对比）', impact: '底部工具栏联动；辅助决策信息条联动；页面价格区域联动' }
    ],
    states: [
      { name: '有tab·未领取（iOS 16.0/15.0）', visual: '弹层内有 tab 结构，展示国补未领取态', note: '', star: false },
      { name: '有tab·已领取（iOS 16.0/15.0）', visual: '弹层内有 tab 结构，展示国补已领取态', note: '', star: false },
      { name: '无tab·只有换新国补·未领取（iOS 16.0/15.0）', visual: '无 tab 结构，仅换新国补下发时的展示', note: '', star: false },
      { name: '⭐ 无tab·自补+换新国补同时下发·已领取', visual: '两类补贴同时下发时的叠加展示', note: '易遗漏的复合场景', star: true },
      { name: '国补弹层·独立弹层', visual: 'TODO: 触发条件待确认', note: '', star: false },
      { name: '辅助决策信息条', visual: 'TODO: 触发条件及样式待确认', note: '', star: false }
    ],
    issues: [
      { problem: '有tab 场景中 tab 的切换内容是什么（另一个 tab 是什么）', owner: '产品（王亚欧）', status: '⏳ 待确认' },
      { problem: '自补+仅换新国补同时下发时，两类补贴的优先级/展示规则', owner: '产品（王亚欧）', status: '⏳ 待确认' },
      { problem: '国补弹层（独立于以旧换新弹层）的触发入口和触发条件', owner: '产品（王亚欧）', status: '⏳ 待确认' },
      { problem: '辅助决策信息条的触发条件及与以旧换新弹层的联动逻辑', owner: '产品（王亚欧）', status: '⏳ 待确认' }
    ],
    patterns: [
      { title: 'Pattern 1：大促节点的 Before/After 对比设计稿规范', applies: '大促迭代中在现有线上方案基础上做感知强化，需保留「线上样式」作对比基准', not_applies: '全新功能首次上线（无线上基准可对比）', principle: 'Before 帧必须忠实还原线上现状，不得美化；After 帧只标注本次变化的模块，让评审聚焦在改动点上' }
    ]
  }
};
