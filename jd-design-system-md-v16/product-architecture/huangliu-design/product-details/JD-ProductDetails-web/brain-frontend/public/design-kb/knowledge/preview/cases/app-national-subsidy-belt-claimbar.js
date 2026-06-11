window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-belt-claimbar'] = {
  slug: 'app-national-subsidy-belt-claimbar',
  feature_name: '国补优化2.12（站内享领取后 / 腰带优惠标签 / 黄条）',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-06-04',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:463852&node_id=6:470537',
  keywords: ['领取后态','腰带','黄条','优惠标签','引导行','渐变色','多套方案','站内享'],
  screenshots: [
    { url: 'https://ling-cdn.s3-cache-accelerate.cn-north-1.jdcloud-oss.com/ling-material-image/1990724210050437121/c5f2094496da7c4d74c7f328e85177b1.png', label: '国补优化2.12·设计稿全览' }
  ],
  related_cases: [
    { slug: 'app-national-subsidy-multisku', note: '同为站内享领取后态，定义了首卡·腰带和领取后状态的基础框架' },
    { slug: 'app-national-subsidy-tradein-bigpromo', note: '同样涉及国补感知强化，辅助决策信息条引导领取的参考' }
  ],
  sections: {
    background: '国补站内享领取后态，黄条（底部提示条）缺乏明确的行动引导（无「去领取」按钮），国补腰带颜色感知不够强烈，用户领取动作转化率有待提升。\n\n本次需求分两个并行优化区域：\n- **黄条**：新增「去领取」按钮，输出三套方案供评审\n- **腰带 + 优惠标签**：颜色改为更鲜亮的绿色渐变，输出两套方案',
    goal: '通过强化黄条引导动作和提升腰带视觉感知，促进国补资格领取转化。\n\n**核心动作：**\n- 黄条新增「去领取」按钮（三套配色方案并行）\n- 腰带渐变由 `linear-gradient(180deg, #0AAD48, #14BA57)` 升级为 `linear-gradient(59deg, #0ACE5A, #14C76D)`，更饱和鲜亮\n- 优惠标签样式同步优化\n\n**明确不做的事：**\n- 不调整首卡以外的其他楼层',
    constraints: [
      { type: '视觉约束', content: '腰带渐变色值更新后需同步视觉规范文档；按钮加入后需确认与现有布局的间距规范' },
      { type: '决策约束', content: '三套黄条方案 / 两套腰带方案均为评审候选，最终选用方案待评审确认' },
      { type: '业务约束', content: '无 PRD，需求来源仅为设计稿标注；点击「去领取」的跳转逻辑待产品确认' }
    ],
    states: [
      { name: '⭐ 底部提示条·领取后（方案A：绿色空心按钮）', visual: '背景 #EFFCF3，文案「领取国家补贴，最高可省2000元！」，绿色空心按钮「去领取」+ 箭头，#138B00 描边', note: '与腰带绿色调一致，品牌感最强', star: true },
      { name: '⭐ 底部提示条·领取后（方案B：红色空心按钮）', visual: '同上布局，按钮改为红色空心 #FF0F23 描边，增强紧迫感', note: '与腰带色调对比更强', star: true },
      { name: '⭐ 底部提示条·领取后（方案C：红色实心按钮）', visual: '红色渐变实心按钮 linear-gradient(90deg, #FF475D 0%, #FF0F23 100%)，视觉权重最高', note: '点击目标最大', star: true },
      { name: '首卡·腰带·领取后（方案A：颜色更明亮）', visual: '渐变由 #0AAD48→#14BA57 改为 #0ACE5A→#14C76D，渐变角度由180deg改为59deg', note: '相比14.0版更饱和鲜亮', star: false },
      { name: '首卡·腰带·领取后（方案B：颜色+元素优化）', visual: '在方案A基础上对腰带内图标/标签元素排布进行优化', note: '具体差异 TODO: 待补充', star: false }
    ],
    patterns: [
      {
        title: '国补通知条多方案并行输出',
        applies: '需要在存量页面新增强引导按钮，但品牌色与场景调性存在方案分歧（绿色调 vs 红色调）时，同时输出多套供评审',
        not_applies: '已有明确品牌规范约束时，直接按规范落地，无需多套',
        principle: '差异集中在「按钮色彩方向」单一变量，控制其他样式一致，便于评审聚焦决策点。'
      }
    ],
    exclusions: '- 不调整领取前态黄条（仅作 Before 对比参照）\n- 不覆盖 App 以外平台\n- 不调整首卡以外楼层的视觉',
    issues: [
      { problem: '黄条「去领取」三套方案最终选用哪套', owner: '设计评审', status: '⏳ 待确认' },
      { problem: '腰带「颜色更明亮」与「元素优化」是二选一还是均需上线', owner: '产品', status: '⏳ 待确认' },
      { problem: '点击「去领取」按钮的跳转目标页', owner: '产品', status: '⏳ 待确认' }
    ]
  }
};
