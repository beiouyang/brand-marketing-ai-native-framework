window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['app-national-subsidy-ysf-countdown'] = {
  slug: 'app-national-subsidy-ysf-countdown',
  feature_name: '云闪付浙江资格码倒计时',
  product_area: 'pdp/promotion',
  platform: 'App',
  last_updated: '2026-05-25',
  relay_url: 'https://relay.jd.com/file/design?id=2046484439810203649&page_id=6:507680&node_id=6:542851',
  keywords: ['国补','云闪付','浙江','资格码','倒计时','30分钟','有效期','弹层','腰带','重新领取','默认态','领取后'],
  screenshots: [],
  related_cases: [
    { slug: 'app-national-subsidy-validity-countdown', note: '直接前身；24h 阈值规则、双方案（腰带 vs 黄条）已建立；本 Case 是 30 分钟有效期场景的扩展' },
    { slug: 'app-national-subsidy-multisku', note: '国补弹层及腰带基础框架来源' }
  ],
  sections: {
    background: '**用户问题：**\n浙江省云闪付国补资格码仅 **30 分钟**内有效（设计稿文案：「领取成功，30分钟内下单有效哦」）。用户领取后不知道时限，过期后被动解绑。\n\n**业务数据（来源：PRD §4.1.1）：** 浙江被动解绑率 67.77%。目标：浙江8大类支付立减领取链路从 10 步压缩至 4 步。',
    decisions: [
      { title: '弹层领取后展示 30 分钟倒计时红色标签块', decision: '领取成功后，弹层内展示红色块「仅剩 HH:MM:SS」；腰带同步展示倒计时；倒计时归零后展示「重新领取」按钮', reason: '30分钟有效期极短，用户必须在弹层内感知，不能仅靠 Toast。来源：设计稿「领取后」子画板', excluded: '仅用 Toast 提示——Toast 消失后用户无持续感知', impact: '腰带：同步展示倒计时状态（继承 validity-countdown 框架）' }
    ],
    states: [
      { name: '弹层·默认态（未领取）', visual: '正常领取入口，无倒计时', note: '', star: false },
      { name: '弹层·领取后·倒计时内', visual: '红色块「仅剩 HH:MM:SS」+ 已领标签', note: '', star: false },
      { name: '腰带·领取后·倒计时内', visual: '腰带同步展示倒计时状态', note: '', star: false },
      { name: '⭐ 倒计时归零·已过期', visual: '展示「重新领取」按钮', note: '来源：设计稿「重新领取」按钮标注', star: true },
      { name: '⭐ 无有效期限制的地区', visual: '不渲染倒计时行（组件需支持此状态）', note: '继承自 validity-countdown', star: true },
      { name: '接口异常/过期时间获取失败', visual: 'TODO: 待补充', note: '', star: false }
    ],
    issues: [
      { problem: '接口异常/倒计时数据获取失败时的降级展示', owner: '研发', status: '⏳ 待确认' }
    ],
    patterns: []
  }
};
