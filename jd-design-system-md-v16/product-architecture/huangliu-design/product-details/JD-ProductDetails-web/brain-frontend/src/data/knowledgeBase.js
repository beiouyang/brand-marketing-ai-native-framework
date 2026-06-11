// 设计知识库目录（源自 design-knowledge-base，内容托管在 public/design-kb/）
// 路径均相对站点根，配合 import.meta.env.BASE_URL 拼接。
// type: 'md'（默认，Markdown 文档）| 'html'（整页 iframe 嵌入）
// preview: 案例对应的可视化预览页（独立 HTML），存在时文档页提供「可视化预览」切换。
export const kbMeta = {
  title: '设计知识库',
  subtitle: 'Design Knowledge Base',
  desc: '把团队历史设计决策结构化沉淀，让 AI 在设计师提出新需求时给出有历史依据的建议。',
  caseCount: 14,
}

const PV = 'knowledge/preview'

export const kbGroups = [
  {
    group: '商详 · 促销组件',
    items: [
      { file: 'knowledge/pdp/promotion/app-national-subsidy-multisku-reasoning.md', title: 'App国补多商品', platform: 'App', updated: '2024-12-19', preview: `${PV}/app-national-subsidy-multisku.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-tradein-reasoning.md', title: '国补叠加以旧换新利益点感知提升', platform: 'App', updated: '2026-05-22', preview: `${PV}/app-national-subsidy-tradein.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-tradein-bigpromo-reasoning.md', title: '以旧换新国补大促前台感知强化', platform: 'App', updated: '2026-05-29' },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-final-price-reasoning.md', title: '国补到手价', platform: 'App', updated: '2026-05-25', preview: `${PV}/app-national-subsidy-final-price.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-address-switch-reasoning.md', title: '国补弹层支持切换地址', platform: 'App', updated: '2026-05-25' },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-jt-code-reasoning.md', title: '京通资格码领取及回填简化', platform: 'App', updated: '2026-05-25', preview: `${PV}/app-national-subsidy-jt-code.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-ysf-countdown-reasoning.md', title: '云闪付浙江资格码倒计时', platform: 'App', updated: '2026-05-25', preview: `${PV}/app-national-subsidy-ysf-countdown.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-validity-countdown-reasoning.md', title: '国补资格增加有效期 & 倒计时', platform: 'Both', updated: '2025-05-25', preview: `${PV}/app-national-subsidy-validity-countdown.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-virtual-bundle-reasoning.md', title: '国补支持新虚拟组套', platform: 'App', updated: '2026-05-29' },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-rebind-copy-reasoning.md', title: '国补资格弹层换绑场景文案兼容小屏', platform: 'App', updated: '2026-05-29' },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-two-wheel-reasoning.md', title: '二轮车国补感知强化及能力闭环', platform: 'App', updated: '2026-05-25', preview: `${PV}/app-national-subsidy-two-wheel.html` },
      { file: 'knowledge/pdp/promotion/app-national-subsidy-lottery-reasoning.md', title: '国补商详弹层 · 摇号模式（单资格）', platform: 'App', updated: '2025-09-28' },
      { file: 'knowledge/pdp/promotion/pc-national-subsidy-reasoning.md', title: 'PC 接入国补', platform: 'Both', updated: '2024-12-05', preview: `${PV}/pc-national-subsidy.html` },
    ],
  },
  {
    group: '商详 · 以旧换新',
    items: [
      { file: 'knowledge/pdp/trade-in/app-trade-in-v15-reasoning.md', title: '以旧换新国补促销 v15.0 样式升级', platform: 'App', updated: '2025-01-14', preview: `${PV}/app-trade-in-v15.html` },
    ],
  },
  {
    group: '可视化预览',
    items: [
      { file: `${PV}/kanban.html`, title: '需求看板', platform: '看板', type: 'html' },
    ],
  },
  {
    group: '设计建议 / 文档',
    items: [
      { file: 'docs/国补与以旧换新双重优惠弹层设计建议.md', title: '国补与以旧换新双重优惠弹层设计建议', platform: '文档', updated: '2026-05' },
      { file: 'advisor-output/国补商品搭配组合优惠-2026-05-29.md', title: '国补商品搭配组合优惠', platform: '产出', updated: '2026-05-29' },
    ],
  },
  {
    group: '索引 / 维护',
    items: [
      { file: 'README.md', title: '知识库说明 README', platform: '总览', updated: '' },
      { file: 'knowledge/INDEX.md', title: '案例索引 INDEX', platform: '索引', updated: '' },
      { file: 'knowledge/component-naming.md', title: '组件命名表', platform: '规范', updated: '' },
      { file: 'knowledge/floor-naming.md', title: '楼层命名表', platform: '规范', updated: '' },
      { file: 'knowledge/registry.md', title: '素材登记表', platform: '登记', updated: '' },
      { file: 'knowledge/CHANGELOG.md', title: '变更日志 CHANGELOG', platform: '日志', updated: '' },
      { file: 'knowledge/TODO.md', title: '待补充清单 TODO', platform: '清单', updated: '' },
    ],
  },
]
