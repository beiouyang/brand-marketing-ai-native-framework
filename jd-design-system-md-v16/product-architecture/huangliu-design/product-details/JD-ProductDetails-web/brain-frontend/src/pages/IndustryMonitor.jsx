import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from '../components/Icon'
import { appProfiles, dailyReports, eventIndex, followUps } from '../data/industryMonitorData'
import { streamChat } from '../api/chat'

const tabs = [
  { id: 'daily', label: '日报档案', icon: 'article' },
  { id: 'apps', label: 'App动态', icon: 'apps' },
  { id: 'index', label: '事件索引', icon: 'format_list_bulleted' },
  { id: 'follow', label: '待跟踪', icon: 'flag' },
]

const moduleOrder = ['AI电商&导购', '海外AI产品', '国内大厂产品', 'UED设计&体验案例', '行业数据&报告']
const capabilityLabels = {
  search: '搜索',
  recommendation: '推荐',
  compare: '比价',
  detail: '详情',
  order: '下单',
  payment: '支付',
  afterSale: '售后',
}

export default function IndustryMonitor({ navContext }) {
  const [activeTab, setActiveTab] = useState(navContext?.tab || 'daily')
  const [selectedDate, setSelectedDate] = useState(dailyReports[0].date)
  const [selectedAppId, setSelectedAppId] = useState(navContext?.appId || 'kuaishou')
  const [filters, setFilters] = useState({
    app: 'all',
    module: 'all',
    status: 'all',
    type: 'all',
    date: 'all',
    keyword: '',
  })

  useEffect(() => {
    if (!navContext) return
    if (navContext.tab) setActiveTab(navContext.tab)
    if (navContext.appId) setSelectedAppId(navContext.appId)
  }, [navContext])

  const currentReport = dailyReports.find((report) => report.date === selectedDate) || dailyReports[0]
  const selectedApp = appProfiles.find((app) => app.id === selectedAppId) || appProfiles[0]
  const currentReportEvents = eventIndex.filter((event) => currentReport.eventIds.includes(event.id))
  const currentReportFollowUps = followUps.filter((item) => currentReport.followUpIds?.includes(item.id))

  const eventsByModule = useMemo(() => {
    return moduleOrder.map((module) => ({
      module,
      events: currentReportEvents.filter((event) => event.module === module),
    })).filter((group) => group.events.length > 0)
  }, [currentReportEvents])

  const filteredEvents = useMemo(() => {
    const keyword = filters.keyword.trim().toLowerCase()
    const dateEventIds = filters.date === 'all'
      ? null
      : dailyReports.find((report) => report.date === filters.date)?.eventIds || []

    return eventIndex.filter((event) => {
      const matchApp = filters.app === 'all' || event.appIds.includes(filters.app)
      const matchModule = filters.module === 'all' || event.module === filters.module
      const matchStatus = filters.status === 'all' || event.status === filters.status
      const matchType = filters.type === 'all' || event.type === filters.type
      const matchDate = !dateEventIds || dateEventIds.includes(event.id)
      const matchKeyword = !keyword || `${event.title}${event.summary}${event.insight}`.toLowerCase().includes(keyword)
      return matchApp && matchModule && matchStatus && matchType && matchDate && matchKeyword
    })
  }, [filters])

  return (
    <div className="min-h-full bg-background theme-dark text-on-surface">
      <div className="px-8 py-6 border-b border-outline-variant/40 bg-surface-container/60">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex-1 min-w-[320px]">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
              <span>数据洞察及分析</span>
              <span>/</span>
              <span className="text-on-surface">行业动态监测</span>
            </div>
            <h1 className="text-2xl font-bold tracking-normal">行业动态监测</h1>
            <p className="text-sm text-on-surface-variant mt-2 max-w-3xl">
              按日报记录行业变化，并按 App / 平台沉淀持续动态，辅助商详设计预研和体验策略判断。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="h-9 bg-surface-container-high border border-outline-variant/60 rounded-lg px-3 text-sm outline-none"
            >
              {dailyReports.map((report) => (
                <option key={report.date} value={report.date}>{report.date}</option>
              ))}
            </select>
            <button className="h-9 inline-flex items-center gap-1.5 px-3 rounded-lg border border-outline-variant/60 bg-surface-container-high text-sm text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors">
              <Icon name="sync" className="text-base" />
              手动刷新
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-on-surface-variant">
          <span>已接入 {dailyReports.length} 天日报</span>
          <span className="text-outline-variant">/</span>
          <span>当前日报 {currentReportEvents.length} 条事件</span>
          <span className="text-outline-variant">/</span>
          <span>覆盖 {appProfiles.length} 个 App</span>
          <span className="text-outline-variant">/</span>
          <span>{followUps.length} 条待跟踪</span>
        </div>
      </div>

      <div className="px-8 pt-4">
        <div className="flex flex-wrap gap-2 border-b border-outline-variant/40">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-10 inline-flex items-center gap-2 px-3 border-b-2 text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Icon name={tab.icon} className="text-base" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8">
        {activeTab === 'daily' && (
          <ReportArchiveView
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            report={currentReport}
            eventsByModule={eventsByModule}
            reportEvents={currentReportEvents}
            reportFollowUps={currentReportFollowUps}
          />
        )}
        {activeTab === 'apps' && (
          <AppDynamicsView selectedApp={selectedApp} selectedAppId={selectedAppId} setSelectedAppId={setSelectedAppId} />
        )}
        {activeTab === 'index' && (
          <EventIndexView filters={filters} setFilters={setFilters} events={filteredEvents} />
        )}
        {activeTab === 'follow' && (
          <FollowUpView />
        )}
      </div>

      <IndustryAssistant report={currentReport} reportEvents={currentReportEvents} />
    </div>
  )
}

function buildIntelContext(report, reportEvents) {
  const eventsText = reportEvents.map((event) => {
    const apps = event.appIds.map((id) => appProfiles.find((a) => a.id === id)?.name || id).join('、')
    return `- 【${event.module}/${event.status}】${event.title}（${apps}）\n  摘要：${event.summary}\n  启发：${event.insight}`
  }).join('\n')

  return `以下是「行业动态监测」当前选中日报的情报，请优先基于这些情报作答，并结合商详（商品详情页）设计视角给出建议：

## ${report.date} 日报
标题：${report.headline}
核心判断：${report.coreJudgement}

### 今日事件（${reportEvents.length} 条）
${eventsText}

### 今日启发
${report.inspirations.map((t) => `- ${t}`).join('\n')}`
}

function IndustryAssistant({ report, reportEvents }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const bottomRef = useRef(null)
  const abortRef = useRef(null)

  const quickAsks = [
    '总结今日行业动态的核心结论',
    '哪些事件最值得商详设计关注？',
    'AI 导购趋势对商详页有什么启发？',
  ]

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async (text) => {
    const msg = (typeof text === 'string' ? text : input).trim()
    if (!msg || busy) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: msg }, { role: 'ai', text: '', streaming: true, sources: [] }])
    setBusy(true)

    const controller = new AbortController()
    abortRef.current = controller

    const patchAI = (patch) => {
      setMessages((prev) => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last?.role === 'ai') next[next.length - 1] = { ...last, ...patch }
        return next
      })
    }
    const appendAI = (chunk) => {
      setMessages((prev) => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last?.role === 'ai') next[next.length - 1] = { ...last, text: (last.text || '') + chunk }
        return next
      })
    }

    const contextualMsg = `${buildIntelContext(report, reportEvents)}\n\n---\n用户问题：${msg}`

    try {
      await streamChat({
        message: contextualMsg,
        history: [],
        signal: controller.signal,
        onSources: (sources) => patchAI({ sources }),
        onDelta: (t) => appendAI(t),
        onError: (m) => patchAI({ text: `❌ ${m}`, error: true, streaming: false }),
        onDone: () => patchAI({ streaming: false }),
      })
    } catch (err) {
      if (err.name === 'AbortError') {
        patchAI({ streaming: false })
      } else {
        patchAI({ text: `❌ ${err.message || '请求失败'}。本地需运行 npm run dev 且 .env 配置了 DEEPSEEK_API_KEY。`, error: true, streaming: false })
      }
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 h-12 px-4 inline-flex items-center gap-2 rounded-full bg-primary-container text-on-primary-container font-medium shadow-2xl hover:brightness-110 active:scale-95 transition-all"
        >
          <Icon name="smart_toy" className="text-xl" />
          情报助手
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-[380px] max-w-[calc(100vw-3rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col theme-dark">
          <div className="glass-panel rounded-2xl flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="shrink-0 flex items-center gap-2 px-4 py-3 border-b border-outline-variant/30">
              <span className="w-7 h-7 rounded-lg bg-primary-container/20 border border-primary-container/30 flex items-center justify-center">
                <Icon name="smart_toy" className="text-[18px] text-primary" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-on-surface leading-tight">情报助手</div>
                <div className="text-[11px] text-on-surface-variant">基于 {report.date} 日报 · DeepSeek</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant"
                title="收起"
              >
                <Icon name="close" className="text-[18px]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-2">
                  <span className="w-12 h-12 rounded-2xl bg-primary-container/15 border border-primary-container/25 flex items-center justify-center text-2xl mb-3">🛰️</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    我已读取当前日报的 {reportEvents.length} 条情报，可以帮你总结结论、提炼对商详设计的启发。
                  </p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`msg-anim flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'user' ? (
                      <div className="max-w-[85%] bg-primary-container text-on-primary-container font-medium px-3 py-2 rounded-2xl rounded-br-md text-sm leading-relaxed">
                        {msg.text}
                      </div>
                    ) : (
                      <div className={`max-w-[90%] text-sm leading-relaxed whitespace-pre-line ${msg.error ? 'text-error' : 'text-on-surface'}`}>
                        {msg.text || (msg.streaming ? '正在分析情报…' : '')}
                        {msg.streaming && msg.text && <span className="inline-block w-0.5 h-4 bg-primary-container ml-0.5 align-middle animate-pulse" />}
                      </div>
                    )}
                  </div>
                ))
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick asks + input */}
            <div className="shrink-0 px-3 pb-3 pt-1">
              {messages.length === 0 && (
                <div className="flex flex-col gap-1.5 mb-2">
                  {quickAsks.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => send(q)}
                      disabled={busy}
                      className="text-left text-xs text-on-surface-variant hover:text-on-surface bg-surface-container-high/40 hover:bg-surface-container-high/70 border border-outline-variant/30 px-3 py-2 rounded-lg transition-colors disabled:opacity-40"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-end gap-2 bg-surface-elevated/60 border border-outline-variant/50 rounded-xl px-3 py-2 focus-within:border-primary/50 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="问问当前行业情报…"
                  rows={1}
                  className="flex-1 bg-transparent outline-none resize-none text-sm text-on-surface placeholder-on-surface-variant/50 max-h-[88px] py-0.5"
                />
                <button
                  onClick={busy ? () => abortRef.current?.abort() : () => send()}
                  disabled={!busy && !input.trim()}
                  className="shrink-0 w-8 h-8 rounded-lg bg-primary-container text-on-primary-container hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                >
                  <Icon name={busy ? 'stop' : 'send'} className="text-[16px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ReportArchiveView({ selectedDate, setSelectedDate, report, eventsByModule, reportEvents, reportFollowUps }) {
  const [historyOpen, setHistoryOpen] = useState(false)
  const topEvents = report.topEventIds.map((id) => eventIndex.find((event) => event.id === id)).filter(Boolean)
  const latestDate = dailyReports[0].date
  const isLatest = selectedDate === latestDate

  return (
    <div className="space-y-5">
      <section className="glass-panel rounded-lg p-4">
        <button
          onClick={() => setHistoryOpen(!historyOpen)}
          className="w-full flex items-center justify-between gap-4 text-left"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Icon name="history" className="text-lg text-primary" />
              <span className="text-sm font-semibold">更多日报</span>
              <span className="text-xs text-on-surface-variant">{dailyReports.length} 天已归档</span>
              {!isLatest && <StatusPill status="正在查看更多日报" />}
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              默认展示最新日报，需要回看时展开选择历史日期。
            </p>
          </div>
          <Icon name={historyOpen ? 'expand_less' : 'expand_more'} className="text-xl text-on-surface-variant shrink-0" />
        </button>
        {historyOpen && (
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-2 mt-4 pt-4 border-t border-outline-variant/35">
            {dailyReports.map((item) => {
              const count = item.eventIds.length
              return (
                <button
                  key={item.date}
                  onClick={() => {
                    setSelectedDate(item.date)
                    setHistoryOpen(false)
                  }}
                  className={`px-3 py-3 rounded-lg text-left transition-colors ${
                    selectedDate === item.date ? 'bg-primary/15 text-primary' : 'bg-surface-container/60 text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium">{item.date}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-surface-container-highest/70">{count}</span>
                  </div>
                  <div className="text-xs leading-5 mt-1 line-clamp-2">{item.headline}</div>
                </button>
              )
            })}
          </div>
        )}
      </section>

      <div className="space-y-6">
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4">
          <div className="glass-panel rounded-lg p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-primary mb-2">
              <span>{report.date}</span>
              <span>/</span>
              <span>{report.generatedAt}</span>
            </div>
            <h2 className="text-xl font-semibold leading-8">{report.headline}</h2>
            <p className="text-sm text-on-surface-variant leading-7 mt-4">{report.coreJudgement}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <StatusPill status={`${reportEvents.length} 条事件`} tone="info" />
              <StatusPill status={`${new Set(reportEvents.flatMap((event) => event.appIds)).size} 个App`} tone="info" />
            </div>
          </div>
          <div className="glass-panel rounded-lg p-5">
            <div className="text-xs text-secondary mb-3">今日启发</div>
            <div className="space-y-3">
              {report.inspirations.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  <span className="text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionTitle icon="looks_3" title="Top 3" />
          <div className="grid lg:grid-cols-3 gap-4">
            {topEvents.map((event, index) => (
              <EventCard key={event.id} event={event} rank={`TOP ${index + 1}`} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle icon="view_week" title="分模块情报" />
          {eventsByModule.map((group) => (
            <div key={group.module} className="glass-panel rounded-lg p-5">
              <h3 className="text-base font-semibold mb-4">{group.module}</h3>
              <div className="divide-y divide-outline-variant/35">
                {group.events.map((event) => (
                  <CompactEvent key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {reportFollowUps.length > 0 && (
          <section className="glass-panel rounded-lg p-5">
            <SectionTitle icon="flag" title="本日报待跟踪" compact />
            <div className="grid lg:grid-cols-2 gap-3 mt-4">
              {reportFollowUps.map((item) => (
                <FollowUpCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function AppDynamicsView({ selectedApp, selectedAppId, setSelectedAppId }) {
  const appEvents = eventIndex.filter((event) => event.appIds.includes(selectedApp.id))
  const appFollowUps = followUps.filter((item) => item.appId === selectedApp.id)

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-5">
      <aside className="glass-panel rounded-lg p-3 h-fit">
        <div className="px-2 py-2 text-xs text-on-surface-variant">App 列表</div>
        <div className="space-y-1">
          {appProfiles.map((app) => {
            const count = eventIndex.filter((event) => event.appIds.includes(app.id)).length
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  selectedAppId === app.id ? 'bg-primary/15 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface'
                }`}
              >
                <span className="text-sm font-medium">{app.name}</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-surface-container-highest/70">{count}</span>
              </button>
            )
          })}
        </div>
      </aside>

      <div className="space-y-5">
        <section className="glass-panel rounded-lg p-5">
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex-1 min-w-[280px]">
              <div className="text-xs text-primary mb-1">App 动态档案</div>
              <h2 className="text-2xl font-semibold">{selectedApp.name}</h2>
              <p className="text-sm text-on-surface-variant mt-2">{selectedApp.type}</p>
            </div>
            <StatusPill status={selectedApp.stage} tone="info" />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedApp.focus.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-lg bg-surface-container-high/70 border border-outline-variant/40 text-xs text-on-surface-variant">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="glass-panel rounded-lg p-5">
          <SectionTitle icon="hub" title="能力地图" compact />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-4">
            {Object.entries(selectedApp.capabilityMap).map(([key, value]) => (
              <div key={key} className="rounded-lg border border-outline-variant/40 bg-surface-container/60 p-3">
                <div className="text-xs text-on-surface-variant">{capabilityLabels[key]}</div>
                <div className="text-sm font-semibold mt-1">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid xl:grid-cols-[1fr_320px] gap-5">
          <div className="glass-panel rounded-lg p-5">
            <SectionTitle icon="dynamic_feed" title="最新动态" compact />
            <div className="space-y-3 mt-4">
              {appEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-lg p-5">
            <SectionTitle icon="timeline" title="时间线" compact />
            <div className="space-y-4 mt-4">
              {appEvents.map((event) => (
                <div key={event.id} className="relative pl-5">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="text-xs text-on-surface-variant">{event.eventDate}</div>
                  <div className="text-sm font-medium mt-1">{event.title}</div>
                  <div className="mt-1"><StatusPill status={event.status} /></div>
                </div>
              ))}
              {appFollowUps.map((item) => (
                <div key={item.id} className="relative pl-5">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <div className="text-xs text-on-surface-variant">{item.nextCheck}</div>
                  <div className="text-sm font-medium mt-1">{item.title}</div>
                  <div className="text-xs text-on-surface-variant mt-1">{item.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function EventIndexView({ filters, setFilters, events }) {
  const modules = [...new Set(eventIndex.map((event) => event.module))]
  const statuses = [...new Set(eventIndex.map((event) => event.status))]
  const types = [...new Set(eventIndex.map((event) => event.type))]

  return (
    <div className="space-y-4">
      <div className="glass-panel rounded-lg p-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-3">
          <FilterSelect label="日期" value={filters.date} onChange={(date) => setFilters({ ...filters, date })}>
            <option value="all">全部日期</option>
            {dailyReports.map((report) => <option key={report.date} value={report.date}>{report.date}</option>)}
          </FilterSelect>
          <FilterSelect label="App" value={filters.app} onChange={(app) => setFilters({ ...filters, app })}>
            <option value="all">全部App</option>
            {appProfiles.map((app) => <option key={app.id} value={app.id}>{app.name}</option>)}
          </FilterSelect>
          <FilterSelect label="模块" value={filters.module} onChange={(module) => setFilters({ ...filters, module })}>
            <option value="all">全部模块</option>
            {modules.map((module) => <option key={module} value={module}>{module}</option>)}
          </FilterSelect>
          <FilterSelect label="状态" value={filters.status} onChange={(status) => setFilters({ ...filters, status })}>
            <option value="all">全部状态</option>
            {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
          </FilterSelect>
          <FilterSelect label="类型" value={filters.type} onChange={(type) => setFilters({ ...filters, type })}>
            <option value="all">全部类型</option>
            {types.map((type) => <option key={type} value={type}>{type}</option>)}
          </FilterSelect>
          <label className="block">
            <span className="text-xs text-on-surface-variant">关键词</span>
            <input
              value={filters.keyword}
              onChange={(event) => setFilters({ ...filters, keyword: event.target.value })}
              placeholder="搜索事件"
              className="mt-1 h-9 w-full bg-surface-container-high border border-outline-variant/60 rounded-lg px-3 text-sm outline-none focus:border-primary/60"
            />
          </label>
        </div>
      </div>

      <div className="glass-panel rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.6fr_0.6fr] gap-3 px-4 py-3 bg-surface-container-high/60 text-xs text-on-surface-variant">
          <span>事件标题</span>
          <span>App</span>
          <span>模块</span>
          <span>状态</span>
          <span>更新</span>
        </div>
        <div className="divide-y divide-outline-variant/35">
          {events.map((event) => (
            <div key={event.id} className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.6fr_0.6fr] gap-3 px-4 py-3 text-sm items-center">
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-xs text-on-surface-variant mt-1">{event.type}</div>
              </div>
              <div className="flex flex-wrap gap-1">{event.appIds.map((id) => <AppTag key={id} appId={id} />)}</div>
              <span className="text-on-surface-variant">{event.module}</span>
              <StatusPill status={event.status} />
              <span className="text-on-surface-variant">{event.collectedDate.slice(5)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FollowUpView() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {followUps.map((item) => <FollowUpCard key={item.id} item={item} framed />)}
    </div>
  )
}

function FollowUpCard({ item, framed }) {
  const event = eventIndex.find((entry) => entry.id === item.eventId)
  return (
    <div className={framed ? 'glass-panel rounded-lg p-5' : 'rounded-lg border border-outline-variant/40 bg-surface-container/60 p-4'}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <AppTag appId={item.appId} />
            <span className="text-xs text-on-surface-variant">下次检查：{item.nextCheck}</span>
          </div>
          <h3 className="text-base font-semibold mt-3">{item.title}</h3>
        </div>
        <button className="h-8 px-3 rounded-lg border border-outline-variant/60 text-xs text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors shrink-0">
          标记已跟踪
        </button>
      </div>
      <p className="text-sm text-on-surface-variant leading-6 mt-3">{item.reason}</p>
      {event && (
        <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary mt-4 hover:underline">
          查看来源
          <Icon name="open_in_new" className="text-sm" />
        </a>
      )}
    </div>
  )
}

function EventCard({ event, rank }) {
  return (
    <article className="rounded-lg border border-outline-variant/40 bg-surface-container/60 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {rank && <span className="text-xs text-primary">{rank}</span>}
        <StatusPill status={event.status} />
        <span className="text-xs text-on-surface-variant">{event.type}</span>
      </div>
      <h3 className="text-base font-semibold leading-6 mt-3">{event.title}</h3>
      <div className="flex flex-wrap gap-1.5 mt-3">{event.appIds.map((id) => <AppTag key={id} appId={id} />)}</div>
      <p className="text-sm text-on-surface-variant leading-6 mt-3">{event.summary}</p>
      <p className="text-sm text-on-surface leading-6 mt-3">{event.insight}</p>
      <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary mt-4 hover:underline">
        {event.sourceName}
        <Icon name="open_in_new" className="text-sm" />
      </a>
    </article>
  )
}

function CompactEvent({ event }) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-semibold text-sm">{event.title}</h4>
        <StatusPill status={event.status} />
        {event.appIds.map((id) => <AppTag key={id} appId={id} />)}
      </div>
      <p className="text-sm text-on-surface-variant leading-6 mt-2">{event.summary}</p>
      <p className="text-sm text-on-surface leading-6 mt-2">{event.insight}</p>
    </div>
  )
}

function SectionTitle({ icon, title, compact }) {
  return (
    <div className={`flex items-center gap-2 ${compact ? '' : 'mb-3'}`}>
      <Icon name={icon} className="text-lg text-primary" />
      <h2 className={compact ? 'text-base font-semibold' : 'text-lg font-semibold'}>{title}</h2>
    </div>
  )
}

function FilterSelect({ label, value, onChange, children }) {
  return (
    <label className="block">
      <span className="text-xs text-on-surface-variant">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 h-9 w-full bg-surface-container-high border border-outline-variant/60 rounded-lg px-3 text-sm outline-none focus:border-primary/60"
      >
        {children}
      </select>
    </label>
  )
}

function AppTag({ appId }) {
  const app = appProfiles.find((item) => item.id === appId)
  return (
    <span className="inline-flex items-center rounded bg-primary/10 text-primary px-1.5 py-0.5 text-[11px]">
      {app?.name || appId}
    </span>
  )
}

function StatusPill({ status, tone }) {
  const color = tone === 'info'
    ? 'bg-primary/10 text-primary border-primary/20'
    : status === '新增'
      ? 'bg-secondary/10 text-secondary border-secondary/20'
      : status === '后续进展'
        ? 'bg-amber-300/10 text-amber-200 border-amber-300/20'
        : 'bg-surface-container-high text-on-surface-variant border-outline-variant/50'

  return (
    <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs ${color}`}>
      {status}
    </span>
  )
}
