window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-two-wheel'] = {
  slug: 'app-national-subsidy-two-wheel',
  feature_name: '二轮车国补感知强化及能力闭环',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:507680&node_id=6:555153',
  keywords: ['国补','二轮车','换新','申请材料','车架号','电机号','车牌号','以旧换新','申领','表单','旧品回收'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-tradein', note: '换新+国补叠加场景的状态框架来源' },
    { slug: 'app-national-subsidy-multisku', note: '国补腰带基础设计及弹层框架' }
  ],
  sections: {
    background: '**用户问题（来源：PRD §4.1.1 二轮车场景）：**\n- 天津二轮车换新+云闪付资格领取链路长达 11 步，跨端体验割裂\n- 重庆二轮车换新+后置申领链路长达 10 步\n- 二轮车国补需要提交车架号、电机号、车牌号等政策要求的资质材料，常规国补流程不适用\n\n**业务目标：** 天津：11步→2步；重庆：10步→4步。',
    decisions: [
      { title: '新增申请信息填写页，站内闭环材料采集', decision: '在以旧换新流程内新增材料采集步骤，支持填写车架号、电机号、车牌号、蓄电池分类等字段；天津走云闪付跳转+站内填写，重庆走后置申领站内闭环', reason: '来源：PRD §4.1.1 二轮车具体方案表', excluded: '', impact: '国补弹层新增「旧品类目选择」tab（大家电/平板电脑/电动车）' }
    ],
    states: [
      { name: '商详·有资格未领取', visual: '国补腰带展示，引导领取', note: '', star: false },
      { name: '商详·已领取', visual: '国补腰带文案切换，按钮消失', note: '', star: false },
      { name: '国补弹层·旧品类目选择', visual: 'tab 切换：大家电/平板电脑/电动车', note: '来源：设计稿弹层区块', star: false },
      { name: '申请信息填写页·正常态', visual: '各字段空白待填写', note: '', star: false },
      { name: '⭐ 申请信息填写页·字段格式校验失败', visual: 'TODO: 待补充（设计稿未展开错误态样式）', note: '键盘遮挡问题待设计', star: true },
      { name: '⭐ 旧品回收成功后状态更新', visual: 'TODO: 待补充（方案二中订单页 CTA 如何变化）', note: '设计稿未展开', star: true },
      { name: '申请提交失败/接口异常', visual: 'TODO: 待补充', note: '', star: false }
    ],
    issues: [
      { problem: '申请信息填写页字段格式校验失败的错误态样式', owner: 'UI（刘迎）', status: '⏳ 待补充' },
      { problem: '协议 checkbox 未勾选时「提交申请」按钮是否禁用', owner: '研发', status: '⏳ 待确认' }
    ],
    patterns: []
  }
};
