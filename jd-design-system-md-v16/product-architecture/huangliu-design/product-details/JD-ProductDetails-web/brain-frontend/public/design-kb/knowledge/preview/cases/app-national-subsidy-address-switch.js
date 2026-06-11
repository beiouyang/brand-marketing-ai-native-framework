window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-address-switch'] = {
  slug: 'app-national-subsidy-address-switch',
  feature_name: '国补弹层支持切换地址',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:507680&node_id=6:527584',
  keywords: ['国补','地址切换','弹层','资格匹配','可用地址','不可用地址','腰带','黄条','国补感知','领错地区'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '国补腰带及弹层基础框架来源；本 Case 在其基础上新增弹层内地址切换能力' },
    { slug: 'app-national-subsidy-rebind-copy', note: '本 Case 的后续迭代：在换绑场景新增解绑引导文案和小屏适配' }
  ],
  sections: {
    background: '**用户问题（来源：设计稿需求背景标注）：**\n1. 用户感知不到当前商品可参加国补——当前收货地址下无国补活动，但切换地址后可参加，用户无法感知\n2. 领取资格流程跳转步骤过长——需要从全国会场→省会场→市会场才能完成领取\n3. 资格领错地区后用户无法识别\n\n**业务影响（来源：PRD §3.1）：** 国补触点少，场景未完全覆盖，损失可转化机会；国补互斥性导致用户体验差、割裂感强。',
    decisions: [
      { title: '弹层内新增地址切换能力，当前地址不可用时引导切换', decision: '弹层顶部展示当前收货地址 + 国补匹配状态；不可用时展示可切换地址列表；切换后刷新国补匹配结果', reason: '来源：PRD §4.1.2.2。弹层内闭环地址切换，无需跳出购买流程', excluded: '腰带处切换——腰带曝光时机晚，用户可能已放弃', impact: '腰带：当收货地址不可用但有可用地址时，腰带展示切换引导；底部黄条联动' }
    ],
    states: [
      { name: '弹层·当前地址可用', visual: '弹层标题「可享国家补贴」，直接展示领取入口「立即领取」', note: '', star: false },
      { name: '弹层·当前地址不可用·有可用地址', visual: '展示地址切换引导，「去领取」按钮', note: '', star: false },
      { name: '弹层·完全不可用', visual: '提示「当前地址不可用」，无领取 CTA', note: '', star: false },
      { name: '腰带·隐藏后黄条弹出', visual: '页面上滑至腰带不可见，黄条从底部弹出', note: '来源：设计稿展示逻辑标注', star: false },
      { name: '⭐ 已领错地区的识别与修正', visual: 'TODO: 待补充（PRD/设计稿明确列为问题3，但无对应设计方案）', note: '高优先级待设计', star: true },
      { name: '地址切换后资格重新匹配中', visual: 'TODO: 待补充（loading 态或即时切换）', note: '待与研发确认接口响应时间', star: false }
    ],
    issues: [
      { problem: '已领错地区场景的识别与引导设计', owner: 'UI（阮蓝蝶）', status: '⏳ 待补充' },
      { problem: '地址切换后资格匹配的 loading 态处理', owner: '研发', status: '⏳ 待确认' }
    ],
    patterns: []
  }
};
