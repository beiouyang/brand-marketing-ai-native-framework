window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-virtual-bundle'] = {
  slug: 'app-national-subsidy-virtual-bundle',
  feature_name: '国补支持新虚拟组套',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-29',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:44579&node_id=6:49261',
  keywords: ['国补','虚拟组套','国家补贴','App商详','套装详情','弹层','补贴状态','全部未领','部分未领','全部已领','全部已用','重决策','腰带','暗黑模式','线下门店降级','非国补商品','组套楼层'],
  screenshots: [
    { label: '国补支持新虚拟组套·设计稿全览', url: 'https://ling-cdn.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/ling-material-image/1990724210050437121/27a07d85e80c172e880595fe75541298.png' }
  ],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '同一设计文件体系，国补腰带+弹层基础框架直接复用，本 Case 是多商品国补的延伸。' },
    { slug: 'app-national-subsidy-tradein', note: '三态状态机（未领/部分已领/已领）逻辑来源，本 Case 复用该状态分层框架。' },
    { slug: 'app-national-subsidy-final-price', note: '价格行展示逻辑和优惠弹层结构参考。' }
  ],
  sections: {
    background: '**核心问题：** 国补政策带来国补商品引流优势，但非国补关联商品缺乏联动销售机制，营收边界受限。\n\n**核心痛点及目标：** 将国补商品与非国补关联商品打包为虚拟组套，借助国补流量带动非国补商品销售，拓宽营收边界。\n\n> 来源：设计稿背景标注——「为借助国补政策红利与国补商品引流优势，特推出新虚拟组套。将国补商品与非国补关联商品打包售卖，带动非国补商品销售，拓宽营收边界。」',
    decisions: [
      {
        title: '核心举措：商详新增虚拟组套楼层 + 套装详情弹层',
        decision: '在商详页新增「虚拟组套」楼层模块，将 1 件国补商品与 1～4 件非国补关联商品打包，通过套装详情弹层承载补贴领取和组套购买流程。楼层按实际组套商品数量适配展示（含5件/含2件两种规格）。',
        reason: '- 商详楼层是流量最集中的曝光位，在此新增组套入口可最大化带动非国补商品的连带购买\n- 以弹层形式承载套装详情，保持商详主页结构不变，降低对既有楼层布局的干扰\n\n来源：设计稿背景标注',
        excluded: '（设计稿中无明确记录）',
        impact: '- 底部工具栏：新增「领取国补」按钮入口，适配白天/暗黑双模式\n- 国补腰带：楼层需支持无腰带状态的兜底展示\n- 价格楼层：领取全部补贴后展示最低到手价（设计稿标注：「领取全部商品补贴后可享最低价」）'
      },
      {
        title: '多套方案：含5件/含2件楼层规格 + 重决策弹层6变体',
        decision: '楼层展示规格「含5件商品」与「含2件商品」非互斥选用，按实际组套内商品数量动态适配。重决策弹层有6个变体并行输出。',
        reason: '商品数量影响楼层布局，需要分别出图供开发参考。',
        excluded: '',
        impact: '最终选用方案：TODO: 待评审确认。重决策弹层6变体的具体触发条件 TODO: 待产品确认。'
      }
    ],
    states: [
      { name: '商详楼层·含5件商品', visual: '展示5件商品图+价格行+补贴行', note: '', star: false },
      { name: '商详楼层·含2件商品', visual: '展示2件商品图+价格行+补贴行', note: '', star: false },
      { name: '商详楼层·无腰带', visual: '无国补腰带时的楼层展示兜底态', note: '', star: false },
      { name: '套装详情弹层·全部未领时', visual: '所有商品补贴均未领取，展示「领取国补」按钮', note: '', star: false },
      { name: '套装详情弹层·部分未领时', visual: '混合展示已领/未领状态，区分商品行样式', note: '', star: false },
      { name: '套装详情弹层·全部已领时', visual: '所有补贴已领，展示最低到手价', note: '', star: false },
      { name: '⭐ 套装详情弹层·全部已用', visual: '补贴已全部使用的兜底状态', note: '历史易遗漏的终态', star: true },
      { name: '商品卡·补贴商品', visual: '展示国补价格行（补贴前/后价格对比）', note: '', star: false },
      { name: '商品卡·非补贴商品', visual: '无国补价格标注，展示常规价格行', note: '', star: false },
      { name: '底部工具栏·白天模式', visual: '常规配色按钮', note: '', star: false },
      { name: '底部工具栏·暗黑模式', visual: '暗黑适配按钮样式', note: '', star: false },
      { name: '重决策弹层·6个变体', visual: 'TODO: 待确认各变体触发条件', note: '', star: false },
      { name: '站内享·领取后', visual: '站内享补贴领取完成状态的展示', note: '', star: false },
      { name: '线下门店·降级方案', visual: '线下门店场景的降级展示', note: 'TODO: 触发条件待确认', star: false },
      { name: '药品套装·特殊处理', visual: 'TODO: 药品类虚拟组套特殊视觉处理待补充', note: '', star: false }
    ],
    flow: '**主流程：**\n商详主页（虚拟组套楼层）→ 点击「领取国补」/ 补贴详情按钮 → 触发套装详情弹层 → 在弹层内领取补贴 → 领取完成后展示最低到手价 → 点击底部按钮完成购买\n\n**分支逻辑：**\n\n| 触发条件 | 动作 | 结果 |\n|---|---|---|\n| 点击商详楼层右侧补贴详情按钮 | 唤起套装详情弹层 | 进入套装详情弹层 |\n| 弹层内存在未领补贴商品 | 展示「领取国补」按钮 | 全部未领 / 部分未领 状态 |\n| 弹层内所有商品均已领补贴 | 展示最低到手价 | 全部已领状态 |\n| 补贴已全部使用 | 展示兜底状态 | 全部已用状态 |\n| 点击弹层关闭按钮 | 关闭弹层 | 返回商详主页 |\n| 商品卡区域 | 热区：无触区，不可点击跳转商详 | 来源：设计稿标注 |',
    issues: [
      { problem: '重决策弹层6个变体的具体触发条件是什么', owner: '产品（马兰）', status: '⏳ 待确认' },
      { problem: '「全部已用」与「全部已领」的视觉区分逻辑', owner: '产品（马兰）', status: '⏳ 待确认' },
      { problem: '线下门店降级方案的触发条件（判断来源）', owner: '产品（马兰）', status: '⏳ 待确认' },
      { problem: '药品套装是否有特殊补贴逻辑或资质门槛', owner: '产品（马兰）', status: '⏳ 待确认' }
    ],
    patterns: [
      {
        title: 'Pattern 1：国补虚拟组套补贴三态分层',
        applies: '商详页存在多件需独立领取补贴资格的商品时，用「全部未领 → 部分未领 → 全部已领」三态递进，明确告知用户当前的补贴进度。',
        not_applies: '单件国补商品（无需分层，直接展示领取/已领状态即可）。',
        principle: '每一态都要给用户一个明确的下一步行动指引，避免用户不知道还需要操作什么。'
      }
    ]
  }
};
