window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-jt-code'] = {
  slug: 'app-national-subsidy-jt-code',
  feature_name: '京通资格码领取及回填简化',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:507680&node_id=6:544706',
  keywords: ['国补','京通','资格码','跨端','自动回填','4步引导','绑定','领取','站内闭环','跳转','scheme'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '国补腰带及弹层基础框架来源；本 Case 复用弹层框架，新增资格码领取引导' }
  ],
  sections: {
    background: '**用户问题（来源：PRD §4.1.1 购新立减·北京8大类）：**\n- 北京购新立减场景领取资格需跳转至政府平台「京通」App，再返回京东使用，链路长达 12 步\n- 资格码需用户手动回填，跨端操作体验割裂\n\n**业务目标：** 从 12 步缩短至 5 步甚至 1 步（站内闭环直接领取，可前置在商详体现国补后价格）。竞对线上 1 步领取，但无国补后价格感知。',
    decisions: [
      { title: '弹层内新增 4 步引导图 + 自动回填资格码', decision: '弹层展示「立即绑定」→跳转京通→回调返回京东→自动填入资格码串；展示码串（如 `78ccc75dae9bfe10egl`）+ 自动核销', reason: '来源：PRD §4.1.1 + 设计稿区块标注。4步引导降低跨端认知门槛，自动回填减少手动操作', excluded: '完全站内闭环——京通资格码由政府平台管理，必须跳转', impact: '商详腰带：绑定前展示到手价 ¥8500，国家补贴 -¥888.00' }
    ],
    states: [
      { name: '商详腰带·绑定前', visual: '绿色腰带，展示到手价 ¥8500，国家补贴 -¥888.00', note: '来源：设计稿商详区块', star: false },
      { name: '弹层·绑定资格码前', visual: '4步流程引导图 + 「立即绑定」按钮', note: '', star: false },
      { name: '弹层·绑定资格码后', visual: '码串展示 + 自动核销，优惠汇总「共减¥888.00」', note: '', star: false },
      { name: '⭐ 跳转京通失败', visual: 'TODO: 待设计（用户未安装京通/网络异常时的降级提示）', note: '设计稿未覆盖，上线风险高', star: true },
      { name: '⭐ 用户中途返回·码串未回传', visual: 'TODO: 待设计（码串未自动填入时的引导或手动填写入口）', note: '设计稿未覆盖，上线风险高', star: true },
      { name: '码串过期/失效', visual: 'TODO: 待设计', note: '', star: false }
    ],
    issues: [
      { problem: '跳转京通失败时的降级提示设计', owner: 'UI（阮蓝蝶）', status: '⏳ 高优先级，上线前必须补充' },
      { problem: '用户中途返回码串未回传时的手动填写入口', owner: 'UI（阮蓝蝶）', status: '⏳ 高优先级，上线前必须补充' },
      { problem: '资格码有效期规则（码串是否会过期）', owner: '产品（王金）', status: '⏳ 待确认' }
    ],
    patterns: []
  }
};
