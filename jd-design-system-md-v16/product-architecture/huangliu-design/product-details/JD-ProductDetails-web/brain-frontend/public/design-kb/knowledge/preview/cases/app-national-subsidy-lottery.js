window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-lottery'] = {
  slug: 'app-national-subsidy-lottery',
  feature_name: '国补商详弹层·摇号模式（单资格）',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-31',
  relay_url: '',
  keywords: ['摇号','步骤条','报名Toast','国补','国补·摇号','二级弹层·优惠弹层'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '优惠弹层基础结构参考' },
    { slug: 'app-national-subsidy-validity-countdown', note: '倒计时组件设计参考' },
    { slug: 'app-national-subsidy-jt-code', note: '多步骤引导流程参考' }
  ],
  sections: {
    background: '部分城市国补采用摇号模式发放资格，原有弹层仅覆盖「有资格/无资格」两态，不支持摇号全流程状态设计。\n\n**用户问题：** 用户在摇号各阶段（未报名、等待中、中签、未中签）看到的弹层内容相同，无法感知当前处于哪个阶段，也不清楚下一步应做什么，导致放弃参与或错过领取窗口。\n\n**业务影响：** 摇号城市用户转化率显著低于非摇号城市，用户投诉集中在「不知道有摇号」和「中签后不知道怎么领」。',
    goal: '为摇号模式设计完整的全状态弹层方案，覆盖「未报名→等待摇号→中签→未中签→已领取」完整流程，每个阶段给出清晰的状态说明和行动引导，提升摇号城市国补转化率。\n\n**明确不做的事：**\n- 不覆盖多资格摇号（如一人可摇多个品类）\n- 不设计摇号规则详情页\n- 不修改商详主页腰带逻辑（中签后复用普通资格已领取态）',
    constraints: [
      { type: '业务约束', content: '仅覆盖单资格摇号场景；摇号规则由地方政府制定，弹层文案需保持中立，不承诺中签率' },
      { type: '技术约束', content: '摇号状态由后端接口下发，前端根据状态字段渲染对应弹层内容' },
      { type: '平台约束', content: 'App 端，375px 宽度；弹层为二级弹层（非全屏），不遮挡底Bar' }
    ],
    states: [
      { name: '⭐ 未报名', visual: '弹层展示摇号规则说明 + 「立即报名」CTA，说明摇号时间、参与条件', note: '首要目标：让用户了解并参与报名', star: true },
      { name: '⭐ 等待摇号', visual: '倒计时展示距摇号开始的剩余时间，底部有「报名提醒」Toast 触发入口', note: '已报名用户进入等待态，倒计时消除焦虑感', star: true },
      { name: '⭐ 中签', visual: '步骤条展示领取进度（确认资格→绑定身份→完成领取），当前步骤高亮，引导用户逐步完成', note: '步骤条降低领取流程的认知门槛', star: true },
      { name: '⭐ 未中签', visual: '友好告知未中签结果，提供「查看其他补贴」次级入口，不直接关闭弹层', note: '降低挫败感，保留用户继续消费的意愿', star: true },
      { name: '已中签·已领取', visual: '腰带切换为普通国补「已领取」态（再减 xxx），弹层内展示已享受的国补权益', note: '复用普通国补已领取态设计，无需新增状态', star: false }
    ],
    patterns: [
      {
        title: '摇号全状态流程步骤条',
        applies: '需要引导用户完成多步骤线性流程（3步以上）；每步有明确操作和完成标志；用户可能在任意步骤中断后返回',
        not_applies: '步骤少于3步；步骤之间非线性（可跳步或回退）；步骤完成后无需确认',
        principle: '步骤条需覆盖全部状态（待完成/进行中/已完成/异常）；当前步骤高亮，已完成步骤打勾，未到达步骤置灰；异常态（如超时）需在对应步骤上标注而非整体报错。'
      },
      {
        title: 'Toast 报名提醒时机与样式',
        applies: '有明确时间节点的一次性提醒（摇号开始、资格即将过期、倒计时归零等）',
        not_applies: '持续性状态信息（应使用常驻 UI 元素如腰带、标签）；需要用户交互确认的操作（应使用 Dialog）',
        principle: 'Toast 展示时长建议 2–3s，自动消失；不遮挡核心可点击区域（底Bar、主要 CTA）；同一场景下 Toast 文案保持一致，不随机变化。'
      }
    ],
    exclusions: '- 不覆盖多资格摇号场景（一人多品类）\n- 不设计摇号规则详情独立页面\n- 中签后的商详主页腰带状态复用普通国补方案，本需求不新增腰带状态\n- 不覆盖摇号资格接口异常的兜底态（后续迭代）',
    issues: [
      { problem: '等待摇号阶段的倒计时精度（分/秒 vs 天/时）', owner: '产品', status: '⏳ 待确认' },
      { problem: '未中签后「查看其他补贴」跳转目标页面', owner: '产品', status: '⏳ 待补充' },
      { problem: '资格接口异常时的兜底展示方案', owner: 'UI + 开发', status: '⏳ 后续迭代' }
    ]
  }
};
