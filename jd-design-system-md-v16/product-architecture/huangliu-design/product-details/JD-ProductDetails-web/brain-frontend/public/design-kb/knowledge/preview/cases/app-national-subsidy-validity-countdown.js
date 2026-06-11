window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-validity-countdown'] = {
  slug: 'app-national-subsidy-validity-countdown',
  feature_name: '国补资格增加有效期&倒计时',
  product_area: 'pdp/promotion',
  platform: 'Both',
  last_updated: '2025-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:230440&node_id=6:238825',
  keywords: ['国补','资格有效期','倒计时','被动解绑','领取弹层','商详腰带','黄条','24小时','云闪付','站内闭环'],
  screenshots: [
    { label: '国补资格增加有效期&倒计时·设计稿全览', url: 'https://img11.360buyimg.com/img/jfs/t1/440702/25/1478/2867495/6a13c1abF3f17759d/0276000000e66227.png' }
  ],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '国补腰带基础设计来源' },
    { slug: 'app-national-subsidy-tradein', note: '国补三态状态框架来源' }
  ],
  sections: {
    background: '**用户问题（来源：PRD §1.1）：**\n1. 用户不知道资格券有时间限制\n2. 逐步切云闪付站内闭环领取，站内不提醒会导致被动解绑率更高\n3. 多次未使用被解绑后如果无法再领取，会影响转化\n\n**业务数据（来源：设计稿批注）：** 目前79%的城市设置资格使用期限，用户被动解绑率（失效过期）平均为64.24%（2025.1.1–4.10，家群12大类）。',
    decisions: [
      { title: '以 24 小时为阈值区分倒计时展示形态', decision: '距过期 < 24h：展示红色倒计时「距失效还剩 HH:MM:SS」；距过期 ≥ 24h：展示红色日期「YYYY.MM.DD HH:MM 前有效」；无有效期：不展示有效期行', reason: '来源：PRD §3.2 a-i/a-ii。< 24h 用倒计时制造紧迫感；≥ 24h 用日期降低焦虑', excluded: '统一用倒计时——≥24h 时倒计时数字过大，产生不必要焦虑', impact: '商详腰带/底部黄条均需联动展示' },
      { title: '双方案并行：腰带展示（方案一）vs 底部黄条（方案二）', decision: '方案一：倒计时信息整合进国补腰带；方案二：腰带不变，新增底部黄条浮层展示倒计时', reason: '来源：设计稿双方案标注', excluded: '', impact: '最终选用方案由评审确认，设计稿已两套都出图' }
    ],
    states: [
      { name: '领取弹层·已领取·距过期 < 24h', visual: '资格行下方展示红色倒计时「距失效还剩 HH:MM:SS」', note: '来源：PRD §3.2 a-i', star: true },
      { name: '⭐ 领取弹层·已领取·距过期 ≥ 24h', visual: '资格行下方展示红色日期「YYYY.MM.DD HH:MM 前有效」', note: '来源：PRD §3.2 a-ii', star: true },
      { name: '领取弹层·已领取·无有效期', visual: '不展示有效期行', note: '', star: false },
      { name: '商详·方案一·腰带·距过期 < 24h', visual: 'TODO: 待补充', note: '', star: false },
      { name: '商详·方案一·腰带·距过期 ≥ 24h', visual: 'TODO: 待补充', note: '', star: false },
      { name: '商详·方案二·底部黄条·距过期 < 24h', visual: 'TODO: 待补充', note: '', star: false },
      { name: '⭐ 同一活动多个资格', visual: 'TODO: 待补充（PRD §3.2 c 提到「多个资格都要加」，但取哪个时间展示未说明）', note: '需向产品确认', star: true },
      { name: '接口异常/过期时间获取失败', visual: 'TODO: 待补充', note: '', star: false }
    ],
    issues: [
      { problem: '同一活动多个资格时取哪个时间展示', owner: '产品（沈天义）', status: '⏳ 待确认' },
      { problem: '接口异常时的降级展示方案', owner: '研发', status: '⏳ 待确认' }
    ],
    patterns: [
      { title: 'Pattern 1：24h 阈值区分倒计时 vs 日期展示', applies: '时效性权益（国补资格码、优惠券等）需要提醒用户剩余有效期', not_applies: '永久有效的权益', principle: '< 24h 展示倒计时制造紧迫感；≥ 24h 展示日期降低焦虑；两者混用反而增加认知负担' }
    ]
  }
};
