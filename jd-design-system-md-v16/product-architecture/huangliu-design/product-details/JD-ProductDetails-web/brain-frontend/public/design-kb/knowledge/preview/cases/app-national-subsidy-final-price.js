window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-final-price'] = {
  slug: 'app-national-subsidy-final-price',
  feature_name: '国补到手价',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:507680&node_id=6:549509',
  keywords: ['国补','到手价','预估价','价格行','优惠弹层','购新','以旧换新','云闪付','京东支付','政府消费券','价格锚点','近90天最低'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-tradein', note: '三态状态机及已领取态下的价格分支逻辑来源' },
    { slug: 'app-national-subsidy-multisku', note: '国补腰带及优惠弹层基础框架来源' }
  ],
  sections: {
    background: '**用户问题（PRD §4.1.2.1）：**\n- 商详无「国补到手价」标签，用户不清楚叠加国补后实际支付多少\n- 优惠弹层内国补行与其他优惠混排，用户无法快速识别\n- 以旧换新场景国补计算基数依赖旧机估价，价格有「预估」和「确定」两种状态，现有设计无区分\n\n**业务目标：** 采用「国补到手价」「N天最低」等价格营销标签，强化价格力感知；支付立减类补贴在结算前计入到手价。',
    decisions: [
      { title: '价格行新增「国补到手价」/「国补换新预估价」标签分层', decision: '购新·已领取→「国补到手价」；以旧换新·已领取·有旧机→「国补换新到手价」；以旧换新·已领取·无旧机/未领取→降级为「国补换新预估价」', reason: '以旧换新无旧机时国补计算基数未定，不能承诺确定价格，需区分「到手」与「预估」语义。来源：PRD §4.1.2.1 + 设计稿分支标注', excluded: '', impact: '价格行视觉需适配新标签；优惠弹层国补行需同步' },
      { title: '优惠弹层国补行独立展示，支付立减单独成行', decision: '云闪付已减/京东支付已减各自独立行；政府消费券按门槛状态展示；条目超出屏宽时横滑', reason: '来源：设计稿区块标注', excluded: '', impact: '弹层布局重排' }
    ],
    states: [
      { name: '购新·已领取', visual: '到手价标签 + 弹层「已领 ¥xxx」+「使用」按钮', note: '', star: false },
      { name: '购新·未领取', visual: '预估价标签 + 弹层展示可领金额 + 领取入口', note: '', star: false },
      { name: '以旧换新·已领取·有旧机', visual: '展示「国补换新到手价」', note: '', star: false },
      { name: '⭐ 以旧换新·已领取·无旧机', visual: '降级展示「国补换新预估价」', note: '易被研发简化为「已领取就显示到手价」，需在标注中显式声明', star: true },
      { name: '以旧换新·未领取', visual: '展示「国补换新预估价」', note: '', star: false },
      { name: '云闪付优惠行', visual: '单独一行展示「云闪付已减 ¥xxx」', note: '', star: false },
      { name: '京东支付优惠行', visual: '单独一行展示「京东支付已减 ¥xxx」', note: '', star: false },
      { name: '⭐ 政府消费券·未达门槛', visual: 'TODO: 待补充具体降级样式', note: '', star: true },
      { name: '优惠条目超出屏宽', visual: '横滑容器，不折叠', note: '来源：设计稿标注', star: false }
    ],
    issues: [
      { problem: '政府消费券未达门槛时的降级样式', owner: 'UI（阮蓝蝶）', status: '⏳ 待确认' },
      { problem: '以旧换新已领取·无旧机的具体视觉降级方式', owner: '产品（王金）', status: '⏳ 待确认' }
    ],
    patterns: [
      { title: 'Pattern 1：「到手价」vs「预估价」语义分层', applies: '优惠金额依赖用户操作后才能确定（如旧机估价）时', not_applies: '金额可在结算前完全确定的场景', principle: '「预估」和「到手」是不同承诺等级，混用会造成用户价格预期差' }
    ]
  }
};
