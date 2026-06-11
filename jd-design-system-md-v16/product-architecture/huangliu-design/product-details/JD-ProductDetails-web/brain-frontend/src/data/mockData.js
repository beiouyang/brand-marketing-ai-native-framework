// 导航结构遵循《平台框架》信息架构：
// 工作台 / 知识库 / 工具集(监测与洞察·素材生产·审核工具·上线跟踪)
export const navItems = [
  {
    section: '',
    items: [
      { id: 'chat', label: '工作台', icon: '💬' },
    ]
  },
  {
    section: '知识库',
    emoji: '📚',
    micon: 'menu_book',
    items: [
      { id: 'kb-component', label: '组件库', icon: '🧩' },
      { id: 'insight-archaeology', label: '需求档案', icon: '📋' },
      { id: 'data-board', label: '数据看板', icon: '📊' },
    ]
  },
  {
    section: '工具集',
    emoji: '🛠️',
    micon: 'handyman',
    groups: [
      {
        title: '数据洞察及分析',
        emoji: '🛰️',
        micon: 'insights',
        items: [
          { id: 'monitor-industry', label: '行业动态监测', icon: '📡' },
          { id: 'monitor-user', label: '用户分析洞察', icon: '👥' },
          { id: 'insight-experience', label: '体验策略设计', icon: '🧭' },
        ]
      },
      {
        title: '素材生成',
        emoji: '🎨',
        micon: 'palette',
        items: [
          { id: 'gen-material', label: '腰带素材', icon: '🎨' },
          { id: 'gen-mindset-floor', label: '心智加盖楼层', icon: '🏬' },
          { id: 'gen-tag', label: '标签', icon: '🏷️' },
        ]
      },
      {
        title: '审核工具',
        emoji: '🛡️',
        micon: 'verified_user',
        items: [
          { id: 'audit-image-match', label: '1+1配图审核', icon: '🖼️' },
          { id: 'audit-celebrity', label: '明星头形挂件', icon: '⭐' },
          { id: 'audit-luxury', label: '奢品商家审核', icon: '💎' },
        ]
      },
      {
        title: '上线跟踪',
        emoji: '🚀',
        micon: 'rocket_launch',
        items: [
          { id: 'gov-walkthrough', label: '设计走查', icon: '🔍' },
          { id: 'track-review', label: '数据分析复盘', icon: '📈' },
        ]
      },
    ]
  }
]

export const components = [
  {
    id: 'c1',
    name: '头图区',
    demoSection: 'gallery',
    description: '商品主图展示、视频、3D预览、图片轮播、SKU颜色选择',
    status: 'active',
    version: 'v3.2.1',
    specs: [
      { label: '主图尺寸', value: '750×750px' },
      { label: '轮播数量', value: '1-8张' },
      { label: '视频时长', value: '≤60s' },
      { label: '手势交互', value: '左右滑动、双指缩放' },
    ],
    timeline: [
      { date: '2025.05.20', version: 'v3.2.1', change: '新增3D预览入口', reason: '部分品类需展示立体效果', effect: '3D品类转化率+8.2%' },
      { date: '2025.01.15', version: 'v3.1.0', change: '视频自动播放策略调整', reason: '降低流量消耗', effect: '首屏加载速度提升23%' },
      { date: '2024.09.10', version: 'v2.8.0', change: '支持沉浸式全屏轮播', reason: '提升浏览体验', effect: '图片点击率+15.6%' },
      { date: '2024.06.20', version: 'v2.5.0', change: '主图从竖版改为横版', reason: '对齐行业主流宽度', effect: '页面跳出率-4.2%' },
    ],
    relatedRequirements: ['r1', 'r4'],
    metrics: { ctr: '12.4%', conversion: '3.8%', notes: '近30日数据' }
  },
  {
    id: 'c2',
    name: '价格区',
    demoSection: 'price',
    description: '售价展示、优惠信息、促销标签、分期信息',
    status: 'active',
    version: 'v2.8.0',
    specs: [
      { label: '价格字体', value: 'DIN Bold 36px' },
      { label: '划线价规则', value: '高于现价时展示' },
      { label: '标签上限', value: '最多3个' },
      { label: '分期展示', value: '≥300元时展示' },
    ],
    timeline: [
      { date: '2025.04.18', version: 'v2.8.0', change: '新增"限时直降"标签样式', reason: '配合大促活动', effect: '标签点击率+12.1%' },
      { date: '2025.02.28', version: 'v2.7.0', change: '优化价格对比展示逻辑', reason: '用户反馈价格不够直观', effect: '加购率+5.8%' },
      { date: '2024.11.05', version: 'v2.5.0', change: '加入分期免息入口', reason: '提升高客单转化', effect: '高客单转化+3.2%' },
    ],
    relatedRequirements: ['r2', 'r5'],
    metrics: { ctr: '28.7%', conversion: '6.2%', notes: '近30日数据' }
  },
  {
    id: 'c3',
    name: '评价区',
    demoSection: 'review',
    description: '用户评价展示、评分、标签筛选、图片评价',
    status: 'active',
    version: 'v3.0.1',
    specs: [
      { label: '评价展示数', value: '默认3条优质评价' },
      { label: '评分精度', value: '保留一位小数' },
      { label: '图片评价', value: '支持9宫格预览' },
      { label: '标签筛选', value: '最多展示6个高频标签' },
    ],
    timeline: [
      { date: '2025.06.02', version: 'v3.0.1', change: '新增AI评价摘要', reason: '提升用户阅读效率', effect: '评价区停留时长-18%' },
      { date: '2025.03.10', version: 'v2.9.0', change: '评价标签支持手动配置', reason: '运营需要灵活调整', effect: '标签点击量+22%' },
      { date: '2024.12.01', version: 'v2.6.0', change: '增加"有图"快速筛选', reason: '用户倾向看图评价', effect: '筛选使用率35%' },
    ],
    relatedRequirements: ['r3'],
    metrics: { ctr: '18.9%', conversion: '4.5%', notes: '近30日数据' }
  },
  {
    id: 'c4',
    name: '推荐区',
    demoSection: 'recommend',
    description: '相关商品推荐、搭配购买、看了又看',
    status: 'active',
    version: 'v2.4.0',
    specs: [
      { label: '推荐位数量', value: '4-12个' },
      { label: '推荐策略', value: '协同过滤+实时兴趣' },
      { label: '卡片样式', value: '双列瀑布流' },
      { label: '刷新机制', value: '下拉刷新，最多3轮' },
    ],
    timeline: [
      { date: '2025.04.01', version: 'v2.4.0', change: '推荐策略升级为实时兴趣模型', reason: '提升推荐精准度', effect: '推荐区CTR+8.3%' },
      { date: '2024.10.15', version: 'v2.1.0', change: '新增搭配购买模块', reason: '提升连带率', effect: '连带购买率+11%' },
    ],
    relatedRequirements: [],
    metrics: { ctr: '21.3%', conversion: '5.1%', notes: '近30日数据' }
  },
  {
    id: 'c5',
    name: '详情信息区',
    demoSection: 'detail',
    description: '商品参数、规格选择、服务说明、品牌信息、商品标题',
    status: 'active',
    version: 'v2.6.0',
    specs: [
      { label: '参数展示', value: '折叠展开，默认6条' },
      { label: '规格选择', value: '图文卡片+库存提示' },
      { label: '服务标签', value: '最多4个图标' },
      { label: '品牌入口', value: 'LOGO+名称+关注按钮' },
    ],
    timeline: [
      { date: '2025.05.08', version: 'v2.6.0', change: '规格选择改为图文卡片', reason: '提升选品体验', effect: '规格点击率+15%' },
      { date: '2025.01.20', version: 'v2.4.0', change: '新增服务保障模块', reason: '用户对售后关注度高', effect: '服务标签点击率8%' },
    ],
    relatedRequirements: ['r4'],
    metrics: { ctr: '32.1%', conversion: '7.8%', notes: '近30日数据' }
  },
  {
    id: 'c6',
    name: '底部操作栏',
    demoSection: 'action',
    description: '加购、收藏、客服、店铺入口、立即购买',
    status: 'active',
    version: 'v2.2.0',
    specs: [
      { label: '操作按钮', value: '加购+收藏+客服+店铺' },
      { label: '加购样式', value: '主按钮，品牌色填充' },
      { label: '吸底逻辑', value: '页面滚动>200px后吸底' },
      { label: '气泡提示', value: '加购成功toast+收藏动效' },
    ],
    timeline: [
      { date: '2025.04.25', version: 'v2.2.0', change: '加购按钮加大，增加动效', reason: '提升操作转化', effect: '加购率+6.7%' },
      { date: '2024.08.12', version: 'v1.8.0', change: '新增客服入口', reason: '售后咨询需求增多', effect: '客服点击率4%' },
    ],
    relatedRequirements: ['r5'],
    metrics: { ctr: '45.6%', conversion: '9.2%', notes: '近30日数据' }
  },
]

export const requirements = [
  {
    id: 'r1',
    title: '头图区新增3D预览功能',
    status: '已上线',
    module: '头图区',
    relatedComponents: ['c1'],
    date: '2025-05-20',
    prdSummary: '部分品类（鞋靴、箱包）用户对立体展示需求强烈，希望在商详页头图区增加3D模型预览入口。入口以3D图标形式展示在主图右下角，点击后全屏展示可旋转的3D模型。优先覆盖鞋靴和箱包品类。',
    designs: ['https://placehold.co/800x600/e8f0fe/4c6ef5?text=3D+Preview+Design+Draft', 'https://placehold.co/800x600/e8f0fe/4c6ef5?text=3D+Detail+Interaction'],
    dataEffect: { ctr: '+8.2%', conversion: '+2.1%', period: '上线后30日', note: '3D入口点击率4.3%，预期略低于目标5%' }
  },
  {
    id: 'r2',
    title: '限时降价标签样式优化',
    status: '已上线',
    module: '价格区',
    relatedComponents: ['c2'],
    date: '2025-04-18',
    prdSummary: '当前限时降价采用红色文字标识，辨识度不够。需优化为带背景色的醒目标签样式，并增加倒计时组件。展示逻辑：当商品参与限时降价且剩余时间>0时展示标签和倒计时。',
    designs: ['https://placehold.co/800x400/fef3e0/f59e0b?text=Flash+Sale+Tag+Design'],
    dataEffect: { ctr: '+12.1%', conversion: '+3.5%', period: '上线后30日', note: '标签点击转化显著提升' }
  },
  {
    id: 'r3',
    title: '评价区AI智能摘要',
    status: '已上线',
    module: '评价区',
    relatedComponents: ['c3'],
    date: '2025-06-02',
    prdSummary: '用户阅读评价耗时较长，需在评价区顶部增加AI生成的评价摘要，提炼用户关注的高频关键词和情感倾向。一键生成的摘要需覆盖商品质量、物流速度、包装等维度。',
    designs: ['https://placehold.co/800x400/f0fdf4/10b981?text=AI+Review+Summary'],
    dataEffect: { ctr: '+5.2%', conversion: '+1.8%', period: '上线后15日', note: '评价区停留时长-18%，信息获取效率明显提升' }
  },
  {
    id: 'r4',
    title: '详情信息区品牌入口改版',
    status: '进行中',
    module: '详情信息区',
    relatedComponents: ['c5', 'c1'],
    date: '2025-06-15',
    prdSummary: '当前品牌信息展示单薄，仅展示品牌LOGO和名称。计划升级为品牌卡片，包含品牌故事、热销商品、关注引导。同时影响头图区需增加品牌标识水印。',
    designs: ['https://placehold.co/800x400/f3e8ff/8b5cf6?text=Brand+Card+Redesign'],
    dataEffect: { ctr: '-', conversion: '-', period: '待上线', note: '预计品牌关注率提升20%' }
  },
  {
    id: 'r5',
    title: '大促价保标识及动效',
    status: '已上线',
    module: '价格区',
    relatedComponents: ['c2', 'c6'],
    date: '2025-03-20',
    prdSummary: '大促期间需增加价保标识增强用户下单信心。价保标签在价格区展示，点击弹出价保规则说明弹窗。同时底部操作栏增加价保入口快捷按钮。',
    designs: ['https://placehold.co/800x400/e0f2fe/0ea5e9?text=Price+Protection+Design'],
    dataEffect: { ctr: '+9.8%', conversion: '+4.2%', period: '上线后30日', note: '大促期间数据，价保标签点击率6.5%' }
  },
]

export const pageConfigs = {
  // 工作台
  'workbench-tasks': {
    group: '工作台',
    icon: '⚡',
    title: '常用任务',
    description: '快速发起高频设计任务，一键直达常用工具',
    placeholder: '搜索任务，例如："生成价格区促销腰带"'
  },
  'workbench-recent': {
    group: '工作台',
    icon: '🕒',
    title: '最近项目',
    description: '查看最近处理过的需求、方案和生成记录',
    placeholder: '搜索最近项目，例如："618大促头图改版"'
  },

  // 数据洞察及分析
  'monitor-industry': {
    group: '数据洞察及分析',
    icon: '📡',
    title: '行业动态监测',
    description: '实时聚合行业资讯与平台动态，捕捉商详设计相关的趋势变化',
    placeholder: '请输入监测维度，例如："近一个月家电行业商详页改版动态"'
  },
  'monitor-user': {
    group: '数据洞察及分析',
    icon: '👥',
    title: '用户分析洞察',
    description: '分析商详页用户行为与反馈，洞察体验问题与设计机会点',
    placeholder: '请输入分析对象，例如："价格区用户停留与转化漏斗分析"'
  },
  'insight-experience': {
    group: '数据洞察及分析',
    icon: '🧭',
    title: '体验策略设计',
    description: '围绕目标用户、行为路径与用户反馈，快速识别体验问题并提炼可落地的优化方向',
    placeholder: '请填写业务场景、用户任务与用户之声材料，生成结构化用户分析',
    embed: 'experience-strategy/index.html'
  },

  // 素材生成
  'gen-tag': {
    group: '素材生成',
    icon: '🏷️',
    title: '标签',
    description: '商详标签设计规范与标准知识库：标签类型 / 样式规范 / 使用场景',
    embed: 'tag/index.html'
  },
  'gen-mindset-floor': {
    group: '素材生成',
    icon: '🏬',
    title: '心智加盖楼层',
    description: '基于卖点心智与楼层规范，智能生成商详页加盖楼层素材',
    placeholder: '请描述楼层需求，例如："为这款扫地机生成卖点心智楼层"'
  },

  // 设计生产
  'gen-label': {
    group: '设计生产',
    icon: '🏷️',
    title: '标签生成',
    description: '基于价格区规范，批量生成促销/权益标签',
    placeholder: '请描述标签需求，例如："限时直降标签，带倒计时"'
  },
  'gen-material': {
    group: '素材生成',
    icon: '🎨',
    title: '腰带素材',
    description: '京东商详腰带AI改造工具：HEX / 场景 / 取色 → OKLCH → 腰带输出',
    embed: 'belt/index.html'
  },

  // 审核工具
  'audit-image-match': {
    group: '审核工具',
    icon: '🖼️',
    title: '1+1配图审核',
    description: '智能校验商详 1+1 配图的规范性：尺寸 / 留白 / 主体 / 文案合规',
    placeholder: '请上传配图，或粘贴配图链接进行审核',
    embed: 'image-match/index.html'
  },
  'audit-celebrity': {
    group: '审核工具',
    icon: '⭐',
    title: '明星头形挂件',
    description: '审核明星头形挂件素材的合规与适配，避免肖像与版式风险',
    placeholder: '请上传挂件素材，或粘贴素材链接进行审核',
    embed: 'celebrity/index.html'
  },
  'audit-luxury': {
    group: '审核工具',
    icon: '💎',
    title: '奢品商家审核',
    description: '针对奢品商家商详页的专项审核：品牌调性 / 资质 / 视觉规范',
    placeholder: '请输入商家或商品链接进行奢品专项审核'
  },
  'gen-copy': {
    group: '设计生产',
    icon: '✍️',
    title: '文案生成',
    description: '结合卖点与品类规范，生成商详页营销文案',
    placeholder: '请输入商品卖点，例如："为这款保温杯生成头图主标题文案"'
  },

  // 设计评审
  'review-requirement': {
    group: '设计评审',
    icon: '📋',
    title: '需求评审',
    description: '基于知识库规范与历史数据，评估新需求的合理性',
    placeholder: '请粘贴PRD内容，或上传完整需求文档'
  },
  'review-solution': {
    group: '设计评审',
    icon: '🧐',
    title: '方案评审',
    description: '上传设计方案，AI对照规范与历史案例给出评审意见',
    placeholder: '请上传设计稿，或粘贴方案链接'
  },
  'review-a11y': {
    group: '设计评审',
    icon: '♿',
    title: 'A11y检测',
    description: '检测对比度、字号、可点击区域等无障碍设计问题',
    placeholder: '请上传设计稿或页面截图进行无障碍检测'
  },

  // 上线跟踪
  'gov-walkthrough': {
    group: '上线跟踪',
    icon: '🔍',
    title: '设计走查',
    description: '上传设计稿与线上页面截图，AI自动对比差异并生成走查报告',
    placeholder: '请上传设计稿截图和线上页面截图，或粘贴页面链接'
  },
  'track-review': {
    group: '上线跟踪',
    icon: '📈',
    title: '数据分析复盘',
    description: '复盘上线后的数据表现，沉淀改版效果与设计经验',
    placeholder: '请输入复盘对象，例如："618头图改版上线后转化复盘"'
  },
  'gov-audit': {
    group: '设计治理',
    icon: '✅',
    title: '自动审核',
    description: '对线上商详页进行规范合规性自动巡检与告警',
    placeholder: '请输入需要审核的页面链接或品类'
  },
  'gov-multiend': {
    group: '设计治理',
    icon: '📱',
    title: '多端适配',
    description: '检查商详页在 App、小程序、H5 等多端的适配一致性',
    placeholder: '请上传多端截图，或粘贴各端页面链接'
  },

  // 知识中心
  'kb-spec': {
    group: '知识中心',
    icon: '📐',
    title: '规范库',
    description: '沉淀商详页各模块的设计规范与使用约束',
    placeholder: '搜索规范，例如："头图区主图尺寸规范"'
  },
  'kb-case': {
    group: '知识中心',
    icon: '💡',
    title: '案例库',
    description: '收录优秀商详页设计案例与改版前后对比',
    placeholder: '搜索案例，例如："价格区限时降价优秀案例"'
  },
  'kb-decision': {
    group: '知识中心',
    icon: '⚖️',
    title: '决策库',
    description: '记录关键设计决策的背景、依据与结论',
    placeholder: '搜索决策，例如："主图为何从竖版改为横版"'
  },

  // 知识库 · 数据看板
  'data-board': {
    group: '知识库',
    icon: '📊',
    title: '数据看板',
    description: '汇总各模块设计指标与改版效果的数据总览',
    placeholder: '搜索指标，例如："价格区近30日转化率"'
  },
}
