import { useState } from 'react'

/* ============ 主题色 ============ */
const C = {
  brand: '#4c6ef5',
  brand2: '#7048e8',
  green: '#2f9e44',
  teal: '#0ca678',
  orange: '#f59f00',
  red: '#e8590c',
  pink: '#e64980',
  cyan: '#1098ad',
}

/* ============ 假数据 ============ */
const RANGES = ['近 7 天', '近 30 天', '本季度']

const coreKpis = [
  { label: '日活用户 DAU', value: '1,284', delta: 8.6, up: true, spark: [820, 900, 880, 1010, 1120, 1180, 1284], color: C.brand },
  { label: '本月项目数', value: '86', delta: 16.2, up: true, spark: [52, 60, 58, 66, 74, 80, 86], color: C.brand2 },
  { label: 'AI 调用次数', value: '12.6k', delta: 23.4, up: true, spark: [6.2, 7.1, 8.0, 9.2, 10.4, 11.5, 12.6], color: C.teal },
  { label: 'GMV', value: '￥4,820万', delta: 6.2, up: true, spark: [3.6, 3.9, 4.1, 4.3, 4.5, 4.7, 4.82], color: C.pink },
]

const businessMetrics = [
  { label: 'PV', value: '3,860万', delta: 5.2, up: true },
  { label: 'UV', value: '920万', delta: 4.1, up: true },
  { label: 'CTR', value: '12.4%', delta: 1.8, up: true, unit: 'pt' },
  { label: 'CVR', value: '6.2%', delta: 0.9, up: true, unit: 'pt' },
  { label: 'GMV', value: '￥4,820万', delta: 6.2, up: true },
  { label: '客单价', value: '￥328', delta: 2.3, up: true },
  { label: '加购率', value: '9.8%', delta: 1.1, up: true, unit: 'pt' },
  { label: '收藏率', value: '5.6%', delta: 0.4, up: true, unit: 'pt' },
  { label: '停留时长', value: '86s', delta: 7, up: true, unit: 's' },
  { label: '跳出率', value: '32.1%', delta: 2.4, up: false, unit: 'pt', good: true },
]

const moduleEffects = [
  { name: '价格区', metrics: [['CTR', '28.7%'], ['转化贡献', '42%']], pct: 42, color: C.brand },
  { name: '腰带区', metrics: [['曝光量', '3,860万'], ['CTR', '6.8%'], ['转化提升', '+12.1%']], pct: 68, color: C.pink },
  { name: '优惠区', metrics: [['领取率', '18.3%'], ['使用率', '64%']], pct: 64, color: C.orange },
  { name: '搭配购', metrics: [['CTR', '21.3%'], ['下单率', '5.1%']], pct: 51, color: C.teal },
  { name: '评价区', metrics: [['查看率', '38%'], ['转化贡献', '18%']], pct: 38, color: C.brand2 },
]

const trendMonths = ['1月', '2月', '3月', '4月', '5月', '6月']
const trendSeries = [
  { name: 'CTR (%)', color: C.brand, data: [10.2, 10.8, 11.3, 11.6, 12.0, 12.4] },
  { name: 'CVR (%)', color: C.pink, data: [4.8, 5.1, 5.4, 5.7, 5.9, 6.2] },
  { name: 'GMV (亿)', color: C.teal, data: [3.6, 3.9, 4.1, 4.3, 4.6, 4.82] },
]

const projectStats = [
  { label: '本月需求数', value: '86' },
  { label: '上线需求数', value: '72' },
  { label: '大促项目数', value: '14' },
  { label: '优化项目数', value: '38' },
]
const assetStats = [
  { label: '设计稿数量', value: '312' },
  { label: '组件调用次数', value: '5,840' },
  { label: '模板使用次数', value: '1,260' },
  { label: '腰带生成数量', value: '486' },
  { label: '标签生成数量', value: '1,024' },
]
const topBelts = [
  { name: '618 满减红金腰带', value: '486 次', bar: 100, sub: '转化 +14.2%' },
  { name: '百亿补贴蓝腰带', value: '420 次', bar: 86, sub: '转化 +11.8%' },
  { name: '限时秒杀橙腰带', value: '368 次', bar: 76, sub: '转化 +10.3%' },
  { name: '新品首发紫腰带', value: '290 次', bar: 60, sub: '转化 +8.6%' },
  { name: '心动购物季腰带', value: '232 次', bar: 48, sub: '转化 +7.1%' },
]
const topLabels = [
  { name: '限时直降标签', value: '1,024 次', bar: 100, sub: 'CTR 9.2%' },
  { name: '满减标签', value: '880 次', bar: 86, sub: 'CTR 8.1%' },
  { name: '百亿补贴标签', value: '720 次', bar: 70, sub: 'CTR 7.6%' },
  { name: '券后价标签', value: '560 次', bar: 55, sub: 'CTR 6.9%' },
  { name: '新品标签', value: '410 次', bar: 40, sub: 'CTR 5.4%' },
]
const topComponents = [
  { name: '价格区组件', value: '5,840 次', bar: 100, sub: 'GMV ￥1,860万' },
  { name: '腰带组件', value: '3,860 次', bar: 66, sub: 'GMV ￥1,240万' },
  { name: '优惠券组件', value: '2,480 次', bar: 42, sub: 'GMV ￥820万' },
  { name: '搭配购组件', value: '1,920 次', bar: 33, sub: 'GMV ￥560万' },
  { name: '评价摘要组件', value: '1,260 次', bar: 22, sub: 'GMV ￥320万' },
]

const aiUsage = [
  { label: '总问答次数', value: '128,600' },
  { label: '日活 DAU', value: '1,284' },
  { label: '周活 WAU', value: '3,210' },
  { label: '月活 MAU', value: '6,480' },
]
const skillRank = [
  { name: '需求考古', value: 4280, bar: 100 },
  { name: '设计建议', value: 3860, bar: 90 },
  { name: '竞品分析', value: 3120, bar: 73 },
  { name: '腰带生成', value: 2480, bar: 58 },
  { name: '自动审核', value: 2210, bar: 52 },
  { name: '标签生成', value: 1980, bar: 46 },
]
const aiValue = [
  { label: '节省工时', value: '1,860h', pct: 86, color: C.teal },
  { label: '替代查询次数', value: '24,800', pct: 78, color: C.brand },
  { label: '减少重复设计', value: '38%', pct: 38, color: C.orange },
  { label: '自动审核覆盖率', value: '82%', pct: 82, color: C.brand2 },
]
const aiSatisfaction = [
  { label: '回答采纳率', value: '76%', pct: 76, color: C.brand },
  { label: '用户评分', value: '4.6 / 5', pct: 92, color: C.green },
  { label: '二次追问率', value: '18%', pct: 18, color: C.orange },
]

const knowledgeScale = [
  { label: '案例总数', value: '1,860' },
  { label: '规范总数', value: '420' },
  { label: '组件总数', value: '168' },
  { label: '审核规则数', value: '96' },
]
const weekGrowth = [
  { label: '案例', value: 42 }, { label: '规范', value: 6 },
  { label: '组件', value: 3 }, { label: '决策记录', value: 9 },
]
const monthGrowth = [
  { label: '案例', value: 186 }, { label: '规范', value: 28 }, { label: '审核规则', value: 12 },
]
const retrieval = [
  { label: '知识命中率', value: '91%', pct: 91, color: C.teal },
  { label: '搜索成功率', value: '88%', pct: 88, color: C.brand },
  { label: '推荐准确率', value: '84%', pct: 84, color: C.brand2 },
  { label: '采纳率', value: '71%', pct: 71, color: C.orange },
]

const autoAudit = [
  { label: '审核次数', value: '8,640' },
  { label: '拦截次数', value: '1,280' },
  { label: '问题发现率', value: '14.8%' },
]
const riskCategories = [
  { group: '视觉规范', color: C.brand, items: [['颜色不合规', 320], ['Logo 超限', 180], ['标签超限', 140], ['字号异常', 96]] },
  { group: '内容规范', color: C.pink, items: [['文案超长', 210], ['信息缺失', 130], ['优先级错误', 88]] },
  { group: '交互规范', color: C.orange, items: [['状态缺失', 76], ['操作链路异常', 54]] },
]
const a11y = [
  { label: '对比度问题', value: '142' },
  { label: '字体问题', value: '88' },
  { label: '点击区域问题', value: '64' },
  { label: '无障碍通过率', value: '86%' },
]
const riskLevels = [
  { label: '高风险', value: 12, color: C.red },
  { label: '中风险', value: 34, color: C.orange },
  { label: '低风险', value: 54, color: C.teal },
]

const efficiency = [
  { label: '需求分析', before: 120, after: 10, beforeT: '2h', afterT: '10min' },
  { label: '竞品分析', before: 60, after: 5, beforeT: '1h', afterT: '5min' },
  { label: '规范查询', before: 20, after: 0.5, beforeT: '20min', afterT: '30s' },
  { label: '腰带设计', before: 30, after: 2, beforeT: '30min', afterT: '2min' },
  { label: '标签设计', before: 15, after: 1, beforeT: '15min', afterT: '1min' },
  { label: '页面审核', before: 60, after: 5, beforeT: '1h', afterT: '5min' },
]
const timeSaving = [
  { label: '本月节省工时', value: '1,860h' },
  { label: '人均节省工时', value: '62h' },
  { label: '自动完成任务数', value: '4,820' },
  { label: '效率提升比例', value: '+68%' },
]

const TABS = [
  { id: 'overview', label: '总览' },
  { id: 'business', label: '业务效果' },
  { id: 'production', label: '设计生产' },
  { id: 'ai', label: 'AI 能力' },
  { id: 'knowledge', label: '知识资产' },
  { id: 'governance', label: '风险治理' },
  { id: 'efficiency', label: '团队效率' },
]

/* ============ 通用图表组件 ============ */
function Delta({ delta, up, unit = '%', good }) {
  const positive = good ? !up ? true : up : up
  const isGood = good ? !up : up
  const color = isGood ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'
  const arrow = up ? '↑' : '↓'
  return (
    <span className={`inline-flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded ${color}`}>
      {arrow} {Math.abs(delta)}{unit}
    </span>
  )
}

function Sparkline({ data, color = C.brand, w = 120, h = 36 }) {
  const min = Math.min(...data), max = Math.max(...data)
  const span = max - min || 1
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / span) * (h - 4) - 2
    return [x, y]
  })
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
  const area = `${line} L${w} ${h} L0 ${h} Z`
  const id = `sp-${color.replace('#', '')}-${Math.round(data[0] * 100)}`
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatCard({ label, value, delta, up, unit, good, spark, color = C.brand, big }) {
  return (
    <div className="glass-panel rounded-2xl p-4 hover:bg-surface-container/40 transition-shadow">
      <div className="text-xs text-on-surface-variant mb-1.5">{label}</div>
      <div className="flex items-end justify-between gap-2">
        <div className={`font-bold text-on-surface tracking-tight ${big ? 'text-2xl' : 'text-xl'}`}>{value}</div>
        {delta != null && <Delta delta={delta} up={up} unit={unit} good={good} />}
      </div>
      {spark && <div className="mt-2 -mb-1"><Sparkline data={spark} color={color} w={big ? 200 : 140} /></div>}
    </div>
  )
}

function LineChart({ months, series, h = 150 }) {
  const w = 480
  const padB = 22, padL = 4
  const all = series.flatMap(s => s.data)
  const min = Math.min(...all), max = Math.max(...all)
  const span = max - min || 1
  const innerH = h - padB
  const x = (i) => padL + (i / (months.length - 1)) * (w - padL * 2)
  const y = (v) => innerH - ((v - min) / span) * (innerH - 10) - 5
  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="block">
        {[0, 0.5, 1].map((g, i) => (
          <line key={i} x1={padL} x2={w - padL} y1={5 + g * (innerH - 10)} y2={5 + g * (innerH - 10)} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        {series.map((s, si) => {
          const line = s.data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
          return (
            <g key={si}>
              <path d={line} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {s.data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#0c1324" stroke={s.color} strokeWidth="2" />)}
            </g>
          )
        })}
        {months.map((m, i) => (
          <text key={i} x={x(i)} y={h - 6} textAnchor="middle" fontSize="11" fill="#9aa1ab">{m}</text>
        ))}
      </svg>
      <div className="flex items-center gap-4 mt-2 flex-wrap">
        {series.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant">
            <span className="w-3 h-1.5 rounded-full" style={{ background: s.color }} />{s.name}
          </span>
        ))}
      </div>
    </div>
  )
}

function Bars({ data, color = C.brand, unit = '' }) {
  const max = Math.max(...data.map(d => d.value))
  return (
    <div className="flex items-end gap-3 h-40 pt-2">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end gap-2 h-full">
          <span className="text-xs font-semibold text-on-surface">{d.value}{unit}</span>
          <div className="w-full rounded-t-lg transition-all" style={{ height: `${(d.value / max) * 100}%`, background: `linear-gradient(180deg, ${color}, ${color}99)`, minHeight: 6 }} />
          <span className="text-[11px] text-on-surface-variant text-center leading-tight">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

function Donut({ pct, color = C.brand, label, sub, size = 120 }) {
  const r = size / 2 - 10
  const circ = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * circ} ${circ}`} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-on-surface">{pct}%</span>
        </div>
      </div>
      {label && <div className="text-sm font-medium text-on-surface mt-2">{label}</div>}
      {sub && <div className="text-xs text-on-surface-variant">{sub}</div>}
    </div>
  )
}

function RankList({ items, color = C.brand, accent }) {
  return (
    <div className="space-y-2.5">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className={`shrink-0 w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center ${i < 3 ? 'text-white' : 'text-on-surface-variant bg-surface-container-high/40'}`}
            style={i < 3 ? { background: accent || color } : {}}>{i + 1}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-on-surface truncate">{it.name}</span>
              <span className="text-xs font-medium text-on-surface-variant shrink-0 ml-2">{it.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-container-highest/60 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${it.bar}%`, background: `linear-gradient(90deg, ${color}, ${color}aa)` }} />
            </div>
          </div>
          {it.sub && <span className="shrink-0 text-[11px] text-on-surface-variant w-20 text-right">{it.sub}</span>}
        </div>
      ))}
    </div>
  )
}

function ProgressRow({ label, value, pct, color = C.brand }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-on-surface-variant">{label}</span>
        <span className="text-sm font-semibold text-on-surface">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-surface-container-highest/60 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}bb)` }} />
      </div>
    </div>
  )
}

function Card({ title, desc, children, className = '', action }) {
  return (
    <div className={`glass-panel rounded-2xl p-5 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-on-surface">{title}</h3>
            {desc && <p className="text-xs text-on-surface-variant mt-0.5">{desc}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="bg-surface-container-high/40 rounded-xl px-3 py-2.5">
      <div className="text-lg font-bold text-on-surface leading-tight">{value}</div>
      <div className="text-[11px] text-on-surface-variant mt-0.5">{label}</div>
    </div>
  )
}

/* ============ 主页面 ============ */
export default function DataBoard() {
  const [tab, setTab] = useState('overview')
  const [range, setRange] = useState(RANGES[1])

  return (
    <div className="min-h-full bg-transparent theme-dark">
      {/* Header */}
      <div className="px-6 pt-6 pb-3 sticky top-0 bg-background/80 backdrop-blur-sm z-20">
        <div className="flex items-center justify-between mb-1">
          <div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
              <span>数据看板</span>
            </div>
            <h1 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              <span className="text-xl">📊</span> 商详数据监测中心
            </h1>
            <p className="text-sm text-on-surface-variant mt-1">评估设计效果 · AI 价值 · 知识沉淀 · 风险治理 · 团队效率</p>
          </div>
          <div className="flex items-center gap-1 glass-panel rounded-xl p-1">
            {RANGES.map(r => (
              <button key={r} onClick={() => setRange(r)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${range === r ? 'bg-primary text-slate-900 font-medium' : 'text-on-surface-variant hover:bg-surface-container-high/40'}`}>
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mt-4 border-b border-outline-variant/30 -mb-3 overflow-x-auto">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`relative text-sm px-3.5 py-2.5 whitespace-nowrap transition-colors ${tab === t.id ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t.label}
              {tab === t.id && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5">
        {/* 核心指标条 - 始终显示 */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {coreKpis.map((k, i) => <StatCard key={i} {...k} big />)}
        </div>

        {tab === 'overview' && <Overview />}
        {tab === 'business' && <Business />}
        {tab === 'production' && <Production />}
        {tab === 'ai' && <AICapability />}
        {tab === 'knowledge' && <Knowledge />}
        {tab === 'governance' && <Governance />}
        {tab === 'efficiency' && <Efficiency />}
      </div>
    </div>
  )
}

/* ============ 总览（首页推荐布局） ============ */
function Overview() {
  return (
    <div className="space-y-5">
      <Card title="业务效果趋势" desc="CTR · CVR · GMV 近 6 个月走势">
        <LineChart months={trendMonths} series={trendSeries} />
      </Card>

      <div className="grid grid-cols-2 gap-5">
        <Card title="AI 能力分析" desc="Skill 调用量 · 活跃用户">
          <RankList items={skillRank.slice(0, 5).map(s => ({ ...s, value: `${s.value}` }))} color={C.teal} />
          <div className="grid grid-cols-3 gap-2 mt-4">
            <MiniStat label="DAU" value="1,284" />
            <MiniStat label="WAU" value="3,210" />
            <MiniStat label="MAU" value="6,480" />
          </div>
        </Card>

        <Card title="知识资产增长" desc="案例 · 规范 · 组件">
          <Bars data={[{ label: '案例', value: 1860 }, { label: '规范', value: 420 }, { label: '组件', value: 168 }, { label: '审核规则', value: 96 }]} color={C.brand2} />
          <div className="text-xs text-on-surface-variant mt-2">本月新增 案例 +186 · 规范 +28 · 审核规则 +12</div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Card title="风险治理" desc="自动审核 · A11y · 风险发现">
          <div className="flex items-center justify-around">
            <Donut pct={86} color={C.teal} label="无障碍通过率" />
            <div className="space-y-3 flex-1 max-w-[200px]">
              <ProgressRow label="自动审核覆盖率" value="82%" pct={82} color={C.brand} />
              <ProgressRow label="问题发现率" value="14.8%" pct={15} color={C.orange} />
              <div className="grid grid-cols-2 gap-2">
                <MiniStat label="审核次数" value="8,640" />
                <MiniStat label="拦截次数" value="1,280" />
              </div>
            </div>
          </div>
        </Card>

        <Card title="团队效率" desc="节省工时 · 效率提升">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {timeSaving.map((t, i) => <MiniStat key={i} {...t} />)}
          </div>
          <ProgressRow label="整体效率提升" value="+68%" pct={68} color={C.green} />
        </Card>
      </div>
    </div>
  )
}

/* ============ 业务效果 ============ */
function Business() {
  return (
    <div className="space-y-5">
      <Card title="核心指标">
        <div className="grid grid-cols-5 gap-3">
          {businessMetrics.map((m, i) => (
            <div key={i} className="bg-surface-container-high/40 rounded-xl p-3">
              <div className="text-xs text-on-surface-variant mb-1">{m.label}</div>
              <div className="text-lg font-bold text-on-surface">{m.value}</div>
              <div className="mt-1"><Delta delta={m.delta} up={m.up} unit={m.unit} good={m.good} /></div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-5">
        <Card title="业务效果趋势" className="col-span-2" desc="近 6 个月">
          <LineChart months={trendMonths} series={trendSeries} />
        </Card>
        <Card title="模块转化贡献" desc="各模块占比">
          <div className="space-y-3">
            {moduleEffects.map((m, i) => (
              <ProgressRow key={i} label={m.name} value={`${m.pct}%`} pct={m.pct} color={m.color} />
            ))}
          </div>
        </Card>
      </div>

      <Card title="模块效果分析">
        <div className="grid grid-cols-5 gap-3">
          {moduleEffects.map((m, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                <span className="text-sm font-semibold text-on-surface">{m.name}</span>
              </div>
              <div className="space-y-2">
                {m.metrics.map(([k, v], j) => (
                  <div key={j} className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">{k}</span>
                    <span className="text-sm font-medium text-on-surface">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

/* ============ 设计生产 ============ */
function Production() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-5">
        <Card title="项目统计" desc="本月">
          <div className="grid grid-cols-2 gap-3">
            {projectStats.map((p, i) => <MiniStat key={i} {...p} />)}
          </div>
        </Card>
        <Card title="设计资产生产" desc="本月产出">
          <div className="grid grid-cols-5 gap-2">
            {assetStats.map((a, i) => <MiniStat key={i} {...a} />)}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Card title="TOP 腰带" desc="使用次数 · 转化">
          <RankList items={topBelts} color={C.pink} />
        </Card>
        <Card title="TOP 标签" desc="使用次数 · 点击率">
          <RankList items={topLabels} color={C.brand} />
        </Card>
        <Card title="TOP 营销组件" desc="使用频率 · GMV 贡献">
          <RankList items={topComponents} color={C.teal} />
        </Card>
      </div>
    </div>
  )
}

/* ============ AI 能力 ============ */
function AICapability() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-3">
        {aiUsage.map((a, i) => <MiniStat key={i} {...a} />)}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Card title="Skill 调用排行" desc="累计调用次数">
          <RankList items={skillRank.map(s => ({ ...s, value: `${s.value} 次` }))} color={C.brand} />
        </Card>
        <Card title="AI 价值指标" desc="量化 AI 产生的价值">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {aiValue.map((v, i) => <MiniStat key={i} label={v.label} value={v.value} />)}
          </div>
          <div className="space-y-3">
            {aiValue.map((v, i) => <ProgressRow key={i} label={v.label} value={v.value} pct={v.pct} color={v.color} />)}
          </div>
        </Card>
      </div>

      <Card title="用户满意度" desc="AI 回答质量评估">
        <div className="grid grid-cols-3 gap-6">
          {aiSatisfaction.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <Donut pct={s.pct} color={s.color} size={96} />
              <div>
                <div className="text-lg font-bold text-on-surface">{s.value}</div>
                <div className="text-xs text-on-surface-variant">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

/* ============ 知识资产 ============ */
function Knowledge() {
  return (
    <div className="space-y-5">
      <Card title="知识规模">
        <div className="grid grid-cols-4 gap-3">
          {knowledgeScale.map((k, i) => (
            <div key={i} className="bg-surface-container-high/40 border border-outline-variant/30 rounded-xl p-4">
              <div className="text-2xl font-bold text-on-surface">{k.value}</div>
              <div className="text-xs text-on-surface-variant mt-1">{k.label}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-5">
        <Card title="本周新增">
          <Bars data={weekGrowth} color={C.brand} />
        </Card>
        <Card title="本月新增">
          <Bars data={monthGrowth} color={C.brand2} />
        </Card>
        <Card title="检索效果" desc="知识检索质量">
          <div className="space-y-3.5 pt-2">
            {retrieval.map((r, i) => <ProgressRow key={i} label={r.label} value={r.value} pct={r.pct} color={r.color} />)}
          </div>
        </Card>
      </div>
    </div>
  )
}

/* ============ 风险治理 ============ */
function Governance() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        <Card title="自动审核">
          <div className="space-y-3">
            {autoAudit.map((a, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant">{a.label}</span>
                <span className="text-lg font-bold text-on-surface">{a.value}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card title="无障碍检测 A11y">
          <div className="grid grid-cols-2 gap-3">
            {a11y.map((a, i) => <MiniStat key={i} {...a} />)}
          </div>
        </Card>
        <Card title="风险等级分布">
          <div className="flex items-center justify-center gap-5">
            <Donut pct={54} color={C.teal} label="低风险占比" />
            <div className="space-y-2.5">
              {riskLevels.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                  <span className="text-sm text-on-surface-variant w-16">{r.label}</span>
                  <span className="text-sm font-semibold text-on-surface">{r.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card title="风险问题分类" desc="按规范类型统计发现的问题数">
        <div className="grid grid-cols-3 gap-5">
          {riskCategories.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span className="text-sm font-semibold text-on-surface">{cat.group}</span>
              </div>
              <div className="space-y-2.5">
                {cat.items.map(([name, val], j) => {
                  const max = Math.max(...cat.items.map(it => it[1]))
                  return (
                    <div key={j}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-on-surface-variant">{name}</span>
                        <span className="text-xs font-medium text-on-surface-variant">{val}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface-container-highest/60 overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${(val / max) * 100}%`, background: cat.color }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

/* ============ 团队效率 ============ */
function Efficiency() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4 gap-3">
        {timeSaving.map((t, i) => (
          <div key={i} className="bg-surface-container-high/40 border border-outline-variant/30 rounded-2xl p-4">
            <div className="text-2xl font-bold text-on-surface">{t.value}</div>
            <div className="text-xs text-on-surface-variant mt-1">{t.label}</div>
          </div>
        ))}
      </div>

      <Card title="效率对比" desc="使用 AI 前 vs 使用 AI 后（单任务耗时）">
        <div className="space-y-4">
          {efficiency.map((e, i) => {
            const save = Math.round((1 - e.after / e.before) * 100)
            return (
              <div key={i} className="flex items-center gap-4">
                <span className="w-20 shrink-0 text-sm text-on-surface">{e.label}</span>
                <div className="flex-1">
                  <div className="relative h-6 rounded-lg bg-surface-container-highest/60 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-surface-container-highest flex items-center" style={{ width: '100%' }}>
                      <span className="text-[11px] text-on-surface-variant px-2">前 {e.beforeT}</span>
                    </div>
                    <div className="absolute inset-y-0 left-0 rounded-lg flex items-center" style={{ width: `${Math.max((e.after / e.before) * 100, 6)}%`, background: `linear-gradient(90deg, ${C.teal}, ${C.green})` }}>
                      <span className="text-[11px] text-white px-2 whitespace-nowrap font-medium">后 {e.afterT}</span>
                    </div>
                  </div>
                </div>
                <span className="w-16 shrink-0 text-right text-sm font-bold text-green-400">-{save}%</span>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
