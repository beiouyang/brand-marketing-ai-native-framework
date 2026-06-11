import { useState, useRef, useEffect } from 'react'
import { components } from '../data/mockData'
import ParticleCanvas from '../components/ParticleCanvas'
import HeroParticles from '../components/HeroParticles'
import Icon from '../components/Icon'
import { streamChat, checkChatHealth } from '../api/chat'
import { dailyReports, eventIndex, appProfiles } from '../data/industryMonitorData'

const slashCommands = [
  { cmd: '/查询规范', desc: '查询设计规范' },
  { cmd: '/评审需求', desc: '评估需求合理性' },
  { cmd: '/分析竞品', desc: '竞品对比分析' },
  { cmd: '/录入需求', desc: '新建需求归档' },
  { cmd: '/走查对比', desc: '设计稿vs线上对比' },
]

const quickAsks = [
  '头图区规范是什么？',
  '最近有什么变动？',
  '竞品价格区怎么做的？',
]

// 趋势更新 · 行业趋势：外露「行业动态监测」最新日报的 Top 事件
const appNameMap = Object.fromEntries(appProfiles.map(a => [a.id, a.name]))
const eventMap = Object.fromEntries(eventIndex.map(e => [e.id, e]))
const latestReport = dailyReports[0] || null
const trendAccents = ['primary', 'secondary', 'tertiary']
const industryTrends = (latestReport?.topEventIds || [])
  .map((id, i) => {
    const e = eventMap[id]
    if (!e) return null
    return {
      platform: appNameMap[e.appIds?.[0]] || e.module,
      title: e.title,
      summary: e.summary,
      type: e.type,
      time: (e.eventDate || '').slice(5),
      accent: trendAccents[i % trendAccents.length],
    }
  })
  .filter(Boolean)

// 趋势更新 · 昨日数据（接黄金眼）
const dailyData = [
  { label: '商详 UV', value: '90,013,288', delta: '+2.1%', up: true, icon: 'visibility', accent: 'primary' },
  { label: '转化率', value: '26.36%', delta: '+0.8%', up: true, icon: 'trending_up', accent: 'secondary' },
  { label: '提袋率', value: '39.04%', delta: '-0.3%', up: false, icon: 'shopping_bag', accent: 'tertiary' },
]

// 趋势更新 · 用户洞察（接用户之声）
const experienceIssues = {
  total: 12,
  items: [
    { title: '价格区划线价展示逻辑不清晰', tag: '价格区', level: '高频' },
    { title: '规格选择切换无明显反馈', tag: '详情区', level: '中频' },
    { title: '评价图片加载较慢', tag: '评价区', level: '低频' },
  ],
}
const userFeedbacks = {
  total: 8,
  items: [
    { title: '希望增加以旧换新价格预估', source: '用户之声' },
    { title: '国补腰带信息太多看不清', source: '用户之声' },
    { title: '3D 预览希望支持手势缩放', source: '用户之声' },
  ],
}

// 趋势更新 · 商详动态（自家商详迭代）
const recentLaunches = [
  { module: '主图', change: '新增"问东东"入口', experiment: '切量 3% 中', time: '06-01', accent: 'primary' },
  { module: '价格区', change: '到手价增加放大动效', experiment: '切量 10% 中', time: '05-30', accent: 'secondary' },
  { module: '详情区', change: '规格选择改为图文卡片', experiment: '已全量', time: '05-28', accent: 'tertiary' },
]
const versionPlan = { next: '6.30', label: '下一版本' }
const trafficChanges = [
  { name: '新增"明日发"标签', latest: '扩量至 70%', history: '切量 50% 时，转化率提升 0.14pp' },
  { name: '评价区 AI 智能摘要', latest: '扩量至 100%', history: '切量 30% 时，停留时长 -18%' },
]

// 最近任务
const recentTasks = [
  { type: '素材生成 · 腰带素材', name: '低价包邮腰带', start: '06-01 19:25', status: '已完成', href: 'gen-material' },
  { type: '上线跟踪 · 设计走查', name: '618 头图改版走查', start: '06-01 14:10', status: '进行中', href: 'gov-walkthrough' },
  { type: '数据洞察 · 体验策略', name: '预约预售升级专项', start: '05-31 10:30', status: '已完成', href: 'insight-experience' },
]

const mockHistorySessions = [
  { id: 'h1', title: '价格区限时降价标签讨论', date: '2025-05-28', preview: '讨论了限时降价标签的样式优化方案和数据回测结果...', messages: [
    { role: 'user', text: '价格区最近一次改了什么？效果怎么样？', time: '5月28日' },
    { role: 'ai', text: '价格区最近一次改动是在 **2025年4月18日**，以下是详情：', time: '5月28日', card: { type: 'requirement', data: { id: 'r2', title: '限时降价标签样式优化', status: '已上线', module: '价格区', date: '2025-04-18', dataEffect: { ctr: '+12.1%', conversion: '+3.5%' } } } },
  ]},
  { id: 'h2', title: '头图区规范咨询', date: '2025-05-25', preview: '了解了头图区的设计规范和最近变更历史...', messages: [
    { role: 'user', text: '头图区的设计规范是什么？', time: '5月25日' },
    { role: 'ai', text: '根据知识库检索，以下是相关设计规范：', time: '5月25日', cards: [{ type: 'spec', data: components[0] }, { type: 'spec', data: components[3] }] },
  ]},
  { id: 'h3', title: '竞品价格区分析', date: '2025-05-20', preview: '对比了京东、拼多多、天猫的商详页价格区设计...', messages: [
    { role: 'user', text: '竞品价格区是怎么做的？', time: '5月20日' },
    { role: 'ai', text: '根据竞品数据库分析：\n\n**京东商详**：头图区支持3D预览 + 视频，价格区促销标签样式更加突出\n**拼多多商详**：强拼团氛围，价格区信息密度高\n**天猫商详**：品牌氛围更强，推荐区个性化程度高', time: '5月20日' },
  ]},
  { id: 'h4', title: '需求评审辅助', date: '2025-05-18', preview: '对新增限时秒杀倒计时组件进行了合理性评估...', messages: [
    { role: 'user', text: '帮我评审这个需求：新增一个限时秒杀倒计时组件', time: '5月18日' },
    { role: 'ai', text: '请粘贴PRD内容，或使用 `/评审需求` 指令上传完整文档，我会基于知识库中的规范和历叏数据给出评估。', time: '5月18日' },
  ]},
]

export default function ChatView({ onNavigate }) {
  const [hasStarted, setHasStarted] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [showCommands, setShowCommands] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [historySessions, setHistorySessions] = useState(mockHistorySessions)
  const [activeCommand, setActiveCommand] = useState(null)
  const [busy, setBusy] = useState(false)
  const [apiReady, setApiReady] = useState(null)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)
  const abortRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  useEffect(() => {
    checkChatHealth()
      .then(d => setApiReady(d))
      .catch(() => setApiReady({ ok: false, hasKey: false }))
  }, [])

  const handleInputChange = (e) => {
    const val = e.target.value
    setInput(val)
    // Only show command suggestions if no tag is active and user types "/"
    if (!activeCommand) {
      setShowCommands(val.startsWith('/') && val.length <= 6)
    } else {
      setShowCommands(false)
    }
  }

  const handleCommandSelect = (cmd) => {
    setActiveCommand(cmd)
    setInput('')
    setShowCommands(false)
    inputRef.current?.focus()
  }

  const removeCommand = () => {
    setActiveCommand(null)
    setInput('')
    inputRef.current?.focus()
  }

  const sendToAI = async (query) => {
    const fullText = (typeof query === 'string' ? query : '').trim()
    if (!fullText || busy) return
    if (!hasStarted) setHasStarted(true)

    const userMsg = { role: 'user', text: fullText, time: '刚刚' }
    const aiPlaceholder = { role: 'ai', text: '', time: '刚刚', streaming: true, sources: [] }
    setMessages(prev => [...prev, userMsg, aiPlaceholder])
    setBusy(true)

    const controller = new AbortController()
    abortRef.current = controller

    const patchLastAI = (patch) => {
      setMessages(prev => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last?.role === 'ai') next[next.length - 1] = { ...last, ...patch }
        return next
      })
    }

    const appendAI = (chunk) => {
      setMessages(prev => {
        const next = [...prev]
        const last = next[next.length - 1]
        if (last?.role === 'ai') next[next.length - 1] = { ...last, text: (last.text || '') + chunk }
        return next
      })
    }

    try {
      const history = messages.filter(m => !m.streaming)
      await streamChat({
        message: fullText,
        history,
        signal: controller.signal,
        onSources: (sources) => patchLastAI({ sources }),
        onDelta: (text) => appendAI(text),
        onError: (msg) => patchLastAI({ text: `❌ ${msg}`, error: true, streaming: false }),
        onDone: () => patchLastAI({ streaming: false }),
      })
    } catch (err) {
      if (err.name === 'AbortError') {
        patchLastAI({ streaming: false })
      } else {
        patchLastAI({
          text: `❌ ${err.message || '请求失败'}。请确认已运行 npm run dev 且 .env 中配置了 DEEPSEEK_API_KEY。`,
          error: true,
          streaming: false,
        })
      }
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  const handleSend = () => {
    const fullText = activeCommand
      ? (activeCommand + ' ' + input).trim()
      : input.trim()
    if (!fullText) return
    setInput('')
    setActiveCommand(null)
    setShowCommands(false)
    sendToAI(fullText)
  }

  const handleShowcaseClick = (showcase) => {
    if (showcase.href) { onNavigate?.(showcase.href); return }
    setActiveCommand(null)
    sendToAI(showcase.quick)
  }

  const handleQuickAsk = (question) => {
    sendToAI(question)
  }

  const stopGeneration = () => abortRef.current?.abort()

  const handleNewChat = () => {
    setHasStarted(false)
    setMessages([])
    setInput('')
    setActiveCommand(null)
    setShowCommands(false)
  }

  const handleLoadSession = (session) => {
    setMessages(session.messages)
    setActiveCommand(null)
    setHasStarted(true)
    setShowHistory(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && !input && activeCommand) {
      e.preventDefault()
      removeCommand()
      return
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-full bg-background theme-dark relative">
      {hasStarted ? (
        <>
          {/* 背景氛围光晕 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary-container/10 blur-[120px]" />
            <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-secondary/10 blur-[120px]" />
          </div>

          {/* Context Bar */}
          <div className="relative z-10 px-6 py-3 border-b border-outline-variant/30 flex items-center gap-3 shrink-0">
            <button
              onClick={handleNewChat}
              className="w-7 h-7 rounded-lg hover:bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              title="新建对话"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className={`w-1.5 h-1.5 rounded-full ${apiReady?.hasKey ? 'bg-secondary animate-pulse' : 'bg-amber-400'}`}></span>
              <span>{apiReady?.hasKey ? 'AI 已接入知识库 · DeepSeek' : 'AI 待配置 · 请填写 .env'}</span>
            </div>
            <div className="flex-1"></div>
            <button
              onClick={() => setShowHistory(true)}
              className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5V8.5L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>历史对话</span>
            </button>
          </div>

          {/* Messages */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 py-5 space-y-5">
            <div className="max-w-[860px] w-full mx-auto space-y-5">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-sm text-on-surface-variant">
                开始提问吧
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`msg-anim flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[680px] ${msg.role === 'user' ? 'w-fit' : 'w-full'}`}>
                    {msg.role === 'user' ? (
                      <div className="bg-primary-container text-on-primary-container font-medium px-4 py-2.5 rounded-2xl rounded-br-md text-sm leading-relaxed">
                        {msg.text}
                      </div>
                    ) : (
                      <MessageContent msg={msg} />
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={bottomRef} />
            </div>
          </div>

          {/* Suggestions + Input */}
          <div className="relative z-10 px-6 pb-5 pt-1">
            <div className="max-w-[860px] w-full mx-auto">
            {/* Quick Ask */}
            <div className="flex gap-2 flex-wrap mb-2">
              {quickAsks.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickAsk(q)}
                  className="text-xs text-on-surface-variant hover:text-on-surface bg-surface-container-high/40 hover:bg-surface-container-high/70 border border-outline-variant/30 px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="relative">
              {showCommands && (
                <div className="absolute bottom-full left-0 right-0 mb-2 glass-panel rounded-xl overflow-hidden z-50">
                  {slashCommands.map((sc, i) => (
                    <button
                      key={i}
                      onClick={() => handleCommandSelect(sc.cmd)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-high/50 text-left transition-colors"
                    >
                      <span className="text-sm font-medium text-primary w-[90px]">{sc.cmd}</span>
                      <span className="text-xs text-on-surface-variant">{sc.desc}</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-end gap-2 bg-surface-elevated/60 border border-outline-variant/50 rounded-2xl px-4 py-2.5 focus-within:border-primary/50 transition-all shadow-2xl">
                {activeCommand && (
                  <span className="inline-flex items-center shrink-0 bg-primary/10 text-primary border border-primary/30 rounded-lg px-2.5 py-1 text-sm font-medium select-none">
                    {activeCommand.replace('/', '')}
                  </span>
                )}
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={activeCommand ? '继续输入补充内容...' : '输入 "/" 使用快捷指令，Enter 发送'}
                  rows={1}
                  className="flex-1 bg-transparent outline-none text-sm resize-none py-1.5 placeholder-on-surface-variant/50 text-on-surface max-h-[120px]"
                />
                <button
                  onClick={busy ? stopGeneration : handleSend}
                  disabled={!busy && !input.trim() && !activeCommand}
                  className="shrink-0 w-9 h-9 rounded-xl bg-primary-container text-on-primary-container hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                >
                  {busy ? (
                    <Icon name="stop" className="text-[18px]" />
                  ) : (
                    <Icon name="send" className="text-[18px]" />
                  )}
                </button>
              </div>
            </div>
            </div>
          </div>
        </>
      ) : (
        <WelcomePage
          input={input} setInput={setInput}
          activeCommand={activeCommand} removeCommand={removeCommand}
          showCommands={showCommands} setShowCommands={setShowCommands}
          inputRef={inputRef}
          onSend={handleSend}
          onCommandSelect={handleCommandSelect}
          onShowcaseClick={handleShowcaseClick}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          onOpenHistory={() => setShowHistory(true)}
          onNavigate={onNavigate}
          busy={busy}
          apiReady={apiReady}
        />
      )}

      {/* History Drawer */}
      {showHistory && (
        <HistoryDrawer
          sessions={historySessions}
          onClose={() => setShowHistory(false)}
          onLoad={handleLoadSession}
          onNew={handleNewChat}
        />
      )}
    </div>
  )
}

/* ====== Welcome Page / 主工作台 ====== */
const statusStylesDark = {
  '已完成': 'bg-primary/10 text-primary border border-primary/20',
  '进行中': 'bg-secondary/10 text-secondary border border-secondary/20',
  '草稿': 'bg-outline-variant/30 text-on-surface-variant border border-outline-variant/50',
}

const levelStyles = {
  '高频': 'bg-error/10 text-error border border-error/20',
  '中频': 'bg-orange-400/10 text-orange-400 border border-orange-400/20',
  '低频': 'bg-outline-variant/30 text-on-surface-variant border border-outline-variant/50',
}

const accentMap = {
  primary: { text: 'text-primary', bg: 'bg-primary/10', hover: 'group-hover:bg-primary/20', border: 'border-primary/20' },
  secondary: { text: 'text-secondary', bg: 'bg-secondary/10', hover: 'group-hover:bg-secondary/20', border: 'border-secondary/20' },
  tertiary: { text: 'text-tertiary', bg: 'bg-tertiary/10', hover: 'group-hover:bg-tertiary/20', border: 'border-tertiary/20' },
  error: { text: 'text-error', bg: 'bg-error/10', hover: 'group-hover:bg-error/20', border: 'border-error/20' },
  'orange-400': { text: 'text-orange-400', bg: 'bg-orange-400/10', hover: 'group-hover:bg-orange-400/20', border: 'border-orange-400/20' },
  'purple-400': { text: 'text-purple-400', bg: 'bg-purple-400/10', hover: 'group-hover:bg-purple-400/20', border: 'border-purple-400/20' },
  'blue-400': { text: 'text-blue-400', bg: 'bg-blue-400/10', hover: 'group-hover:bg-blue-400/20', border: 'border-blue-400/20' },
}

function WelcomePage({ input, activeCommand, showCommands, inputRef, onSend, onCommandSelect, onShowcaseClick, handleInputChange, handleKeyDown, onOpenHistory, onNavigate, busy, apiReady }) {
  return (
    <div className="relative min-h-full theme-dark">
      {/* 背景层：粒子 + 氛围光晕，单独裁剪不影响内容滚动 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParticleCanvas />
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary-container/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-secondary/10 blur-[120px]" />
      </div>
      <div className="relative z-10 px-8 py-8 min-h-full flex flex-col">
        <div className="flex-1 max-w-[1400px] w-full mx-auto">

          {/* Hero */}
          <section className="mb-12">
            <div className="glass-panel relative rounded-3xl p-10 overflow-hidden group">
              <div className="pointer-events-none absolute -top-24 right-10 w-72 h-72 rounded-full bg-primary-container/10 blur-3xl z-0" />
              {/* 右侧流场粒子动画 */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[58%] z-0 opacity-90 hidden md:block"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, #000 42%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 42%)',
                }}
              >
                <HeroParticles />
              </div>
              <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-medium tracking-wide">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${apiReady?.hasKey ? 'bg-secondary animate-pulse' : 'bg-amber-400'}`} />
                    {apiReady?.hasKey
                      ? `AI 已接入知识库 · ${apiReady.knowledgeChunks || 0} 片段`
                      : 'AI 待配置 · 请在 .env 填写 DEEPSEEK_API_KEY'}
                  </span>
                  <button
                    onClick={onOpenHistory}
                    className="text-on-surface-variant hover:text-primary transition-colors text-[11px] flex items-center gap-1 ml-auto"
                  >
                    <Icon name="history" className="text-sm" />
                    历史对话
                  </button>
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-primary/20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 flex items-center justify-center text-3xl">
                    🧠
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">你好，我是商详大脑</h1>
                    <p className="text-on-surface-variant text-base">商品详情页 AI 设计搭档 • 查规范 / 溯历史 / 评需求 / 生成</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-xl opacity-50 group-hover:opacity-80 transition-opacity rounded-2xl" />
                  <div className="relative">
                    {showCommands && (
                      <div className="absolute bottom-full left-0 right-0 mb-2 glass-panel rounded-xl overflow-hidden z-50">
                        {slashCommands.map((sc, i) => (
                          <button
                            key={i}
                            onClick={() => onCommandSelect(sc.cmd)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-high/50 text-left transition-colors"
                          >
                            <span className="text-sm font-medium text-primary w-[90px]">{sc.cmd}</span>
                            <span className="text-xs text-on-surface-variant">{sc.desc}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="relative flex items-center bg-surface-elevated/60 border border-outline-variant/50 rounded-2xl p-4 gap-3 focus-within:border-primary/50 transition-all shadow-2xl">
                      {activeCommand && (
                        <span className="inline-flex items-center shrink-0 bg-primary/10 text-primary border border-primary/30 rounded-lg px-2.5 py-1 text-sm font-medium select-none">
                          {activeCommand.replace('/', '')}
                        </span>
                      )}
                      <Icon name="auto_awesome" className="text-primary text-xl shrink-0" />
                      <textarea
                        ref={inputRef}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={activeCommand ? '继续输入补充内容...' : '问我任何商详设计问题，或输入 "/" 使用快捷指令'}
                        rows={1}
                        className="flex-1 bg-transparent border-none outline-none resize-none text-on-surface placeholder-on-surface-variant/50 text-base max-h-[120px] py-0.5"
                      />
                      <button
                        onClick={onSend}
                        disabled={(!input.trim() && !activeCommand) || busy}
                        className="bg-primary-container w-11 h-11 flex items-center justify-center rounded-xl text-on-primary-container hover:brightness-110 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                      >
                        <Icon name={busy ? 'hourglass_top' : 'send'} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {quickAsks.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => onShowcaseClick({ quick: q })}
                      className="px-4 py-1.5 rounded-full bg-surface-container-highest/30 border border-outline-variant/30 text-xs text-on-surface-variant hover:bg-surface-container-high transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 趋势更新 */}
          <section className="mb-12">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-2xl font-semibold text-on-surface">趋势更新</h2>
              <span className="text-xs text-on-surface-variant">每日自动同步 · 行业 / 数据 / 用户之声</span>
            </div>

            {/* 行业趋势：外露「行业动态监测」最新日报 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="insights" className="text-primary text-lg" />
                <h3 className="text-base font-semibold text-on-surface">行业趋势</h3>
                <span className="text-xs text-on-surface-variant">
                  · 来自行业动态监测{latestReport ? ` · ${latestReport.date}` : ''}
                </span>
                <button
                  onClick={() => onNavigate?.('monitor-industry')}
                  className="ml-auto text-xs text-primary hover:underline flex items-center gap-0.5"
                >
                  查看全部 <Icon name="arrow_forward" className="text-sm" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {industryTrends.map((t, i) => {
                  const ac = accentMap[t.accent]
                  return (
                    <button
                      key={i}
                      onClick={() => onNavigate?.('monitor-industry')}
                      className="glass-panel rounded-2xl p-5 text-left flex flex-col group hover:bg-surface-container/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${ac.bg} ${ac.text}`}>{t.platform}</span>
                        <span className="text-[11px] text-on-surface-variant">{t.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-on-surface mb-2">
                        <Icon name="bolt" className="text-on-surface-variant text-base mt-0.5 shrink-0" />
                        <span className="font-medium leading-snug line-clamp-2">{t.title}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-3 flex-1">{t.summary}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-on-surface-variant/70">{t.type}</span>
                        <span className="text-[11px] text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                          查看详情 <Icon name="arrow_forward" className="text-xs" />
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 昨日数据 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="monitoring" className="text-secondary text-lg" />
                <h3 className="text-base font-semibold text-on-surface">昨日数据</h3>
                <span className="text-xs text-on-surface-variant">· 接黄金眼</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dailyData.map((d, i) => {
                  const ac = accentMap[d.accent]
                  return (
                    <div key={i} className="glass-panel rounded-2xl p-6 header-strip relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform pointer-events-none">
                        <Icon name={d.icon} className={`text-6xl ${ac.text}`} />
                      </div>
                      <div className="relative">
                        <p className="text-on-surface-variant text-sm mb-3">{d.label}</p>
                        <div className="flex items-end gap-3">
                          <span className="text-3xl font-bold text-on-surface">{d.value}</span>
                          <span className={`text-sm font-medium mb-1 flex items-center ${d.up ? 'text-primary' : 'text-error'}`}>
                            <Icon name={d.up ? 'arrow_upward' : 'arrow_downward'} className="text-sm" />{d.delta}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 用户洞察 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="forum" className="text-tertiary text-lg" />
                <h3 className="text-base font-semibold text-on-surface">用户洞察</h3>
                <span className="text-xs text-on-surface-variant">· 接用户之声</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 近7日体验问题 */}
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-on-surface">近 7 日体验问题</span>
                    <span className="text-xs text-on-surface-variant">共 {experienceIssues.total} 条 · 预览 3 条</span>
                  </div>
                  <div className="space-y-2">
                    {experienceIssues.items.map((it, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high/30 hover:bg-surface-container-high/50 transition-colors">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${levelStyles[it.level]}`}>{it.level}</span>
                        <span className="text-sm text-on-surface flex-1 truncate">{it.title}</span>
                        <span className="text-[11px] text-on-surface-variant shrink-0">{it.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 昨日用户反馈 */}
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-on-surface">昨日用户反馈</span>
                    <span className="text-xs text-on-surface-variant">新增 {userFeedbacks.total} 条 · 预览 3 条</span>
                  </div>
                  <div className="space-y-2">
                    {userFeedbacks.items.map((it, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-high/30 hover:bg-surface-container-high/50 transition-colors">
                        <Icon name="chat_bubble" className="text-tertiary text-base shrink-0" />
                        <span className="text-sm text-on-surface flex-1 truncate">{it.title}</span>
                        <span className="text-[11px] text-on-surface-variant shrink-0">{it.source}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* 商详动态 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="dataset" className="text-primary text-lg" />
                <h3 className="text-base font-semibold text-on-surface">商详动态</h3>
                <span className="text-xs text-on-surface-variant">· 自家商详迭代</span>
              </div>

              {/* 最近上线需求 */}
              <p className="text-xs font-medium text-on-surface-variant mb-2">最近上线需求</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {recentLaunches.map((l, i) => {
                  const ac = accentMap[l.accent]
                  return (
                    <div key={i} className="glass-panel rounded-2xl p-5 hover:bg-surface-container/40 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${ac.bg} ${ac.text}`}>{l.module}</span>
                        <span className="text-[11px] text-on-surface-variant">{l.time}</span>
                      </div>
                      <p className="text-sm text-on-surface font-medium leading-relaxed mb-3">{l.change}</p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-on-surface-variant bg-surface-container-high/40 border border-outline-variant/30 rounded-lg px-2 py-1">
                        <Icon name="science" className="text-sm" />{l.experiment}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* 版本计划 + 切量变动 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 版本计划 */}
                <div className="glass-panel rounded-2xl p-5 header-strip flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="event_upcoming" className="text-secondary text-lg" />
                    <span className="text-sm font-semibold text-on-surface">版本计划</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-1">{versionPlan.label}</p>
                  <span className="text-3xl font-bold text-on-surface">{versionPlan.next}</span>
                </div>
                {/* 切量变动 */}
                <div className="glass-panel rounded-2xl p-5 md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="tune" className="text-tertiary text-lg" />
                    <span className="text-sm font-semibold text-on-surface">切量变动</span>
                  </div>
                  <div className="space-y-3">
                    {trafficChanges.map((t, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-high/30">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-on-surface font-medium mb-1 truncate">{t.name}</div>
                          <div className="text-[11px] text-on-surface-variant">历史：{t.history}</div>
                        </div>
                        <span className="px-2 py-1 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                          {t.latest}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 最近任务 */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-on-surface">最近任务</h2>
              <button onClick={onOpenHistory} className="text-xs text-primary hover:underline">查看全部</button>
            </div>
            <div className="glass-panel rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-surface-container-high/30 text-xs font-mono uppercase tracking-widest text-on-surface-variant">
                  <tr>
                    <th className="px-6 py-4 font-medium">任务类型</th>
                    <th className="px-6 py-4 font-medium">任务名</th>
                    <th className="px-6 py-4 font-medium">开始时间</th>
                    <th className="px-6 py-4 font-medium">状态</th>
                    <th className="px-6 py-4 text-right font-medium">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-sm">
                  {recentTasks.map((t, i) => (
                    <tr
                      key={i}
                      onClick={() => onNavigate?.(t.href)}
                      className="hover:bg-surface-container-low/40 transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4 text-on-surface-variant">{t.type}</td>
                      <td className="px-6 py-4 font-medium text-on-surface">{t.name}</td>
                      <td className="px-6 py-4 text-on-surface-variant font-mono text-xs">{t.start}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-medium ${statusStylesDark[t.status] || statusStylesDark['草稿']}`}>
                          {t.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Icon name="arrow_forward" className="text-on-surface-variant group-hover:text-primary transition-colors" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span className="font-bold text-on-surface text-sm">© 2024 PDP Brain Engine v1.0. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span className="font-mono text-xs text-slate-400">System Status: Operational</span>
            <span className="font-mono text-xs text-slate-400 hover:text-on-surface transition-opacity cursor-pointer">Privacy Policy</span>
            <span className="font-mono text-xs text-slate-400 hover:text-on-surface transition-opacity cursor-pointer">Technical Logs</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

/* ====== History Drawer ====== */
function HistoryDrawer({ sessions, onClose, onLoad, onNew }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end theme-dark">
      <div className="drawer-overlay absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="drawer-panel relative w-[400px] bg-surface-container border-l border-outline-variant/30 shadow-drawer overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-outline-variant/30 flex items-center justify-between shrink-0">
          <h2 className="text-base font-bold text-on-surface">历史对话</h2>
          <div className="flex items-center gap-1">
            <button
              onClick={onNew}
              className="w-8 h-8 rounded-lg hover:bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              title="新建对话"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Session list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {sessions.length === 0 ? (
            <div className="text-center py-16 text-sm text-on-surface-variant">暂无历史对话</div>
          ) : (
            sessions.map(s => (
              <button
                key={s.id}
                onClick={() => onLoad(s)}
                className="w-full text-left p-3 rounded-xl hover:bg-surface-container-high/50 transition-colors group"
              >
                <div className="text-sm font-medium text-on-surface mb-1 group-hover:text-primary transition-colors">
                  {s.title}
                </div>
                <div className="text-xs text-on-surface-variant line-clamp-1 mb-1.5">{s.preview}</div>
                <div className="text-[10px] text-on-surface-variant/60">{s.date}</div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

/* ====== Message Content ====== */
function MessageContent({ msg }) {
  return (
    <div className="space-y-3">
      <div className={`text-sm leading-relaxed whitespace-pre-line ${msg.error ? 'text-error' : 'text-on-surface'}`}>
        {msg.text || (msg.streaming ? '正在检索知识库并生成回答…' : '')}
        {msg.streaming && msg.text && <span className="inline-block w-0.5 h-4 bg-primary-container ml-0.5 align-middle animate-pulse" />}
      </div>
      {msg.sources?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {msg.sources.map((s, i) => (
            <span key={i} className="text-[10px] text-on-surface-variant bg-surface-container-high/50 border border-outline-variant/30 rounded px-2 py-0.5" title={s.source}>
              📎 {s.title}
            </span>
          ))}
        </div>
      )}
      {msg.card && msg.card.type === 'requirement' && (
        <div className="glass-panel rounded-xl p-4 transition-colors">
          <RequirementCard req={msg.card.data} />
        </div>
      )}
      {msg.cards && (
        <div className="space-y-3">
          {msg.cards.map((card, ci) => (
            <div key={ci} className="glass-panel rounded-xl p-4 transition-colors">
              {card.type === 'spec' && <SpecCard comp={card.data} />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ====== Cards ====== */
function RequirementCard({ req }) {
  const statusColors = {
    '已上线': 'bg-secondary/10 text-secondary border-secondary/20',
    '进行中': 'bg-primary/10 text-primary border-primary/20',
    '已废弃': 'bg-outline-variant/30 text-on-surface-variant border-outline-variant/50',
  }
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-on-surface">📄 {req.title}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${statusColors[req.status] || statusColors['已上线']}`}>
          {req.status}
        </span>
      </div>
      <div className="text-xs text-on-surface-variant space-x-4">
        <span>模块：{req.module}</span>
        <span>上线：{req.date}</span>
        <span>CTR {req.dataEffect.ctr} | 转化 {req.dataEffect.conversion}</span>
      </div>
    </div>
  )
}

function SpecCard({ comp }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-on-surface">🧩 {comp.name}</span>
        <span className="text-[10px] text-on-surface-variant bg-surface-container-high/60 rounded px-1.5 py-0.5">{comp.version}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {comp.specs.slice(0, 3).map((s, i) => (
          <span key={i} className="text-xs text-on-surface-variant bg-surface-container-high/40 border border-outline-variant/30 rounded px-2 py-1">
            {s.label}: {s.value}
          </span>
        ))}
      </div>
      <div className="text-xs text-on-surface-variant mt-2">
        关联需求 {comp.relatedRequirements.length} 个 | 近30日 CTR {comp.metrics.ctr}
      </div>
    </div>
  )
}
