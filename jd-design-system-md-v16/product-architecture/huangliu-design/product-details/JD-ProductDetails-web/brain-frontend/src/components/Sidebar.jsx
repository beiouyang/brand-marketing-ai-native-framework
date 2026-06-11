import { useState } from 'react'
import { navItems } from '../data/mockData'
import Icon from './Icon'

const NAV_ICONS = {
  chat: 'forum',
  // 知识库
  'kb-component': 'widgets',
  'insight-archaeology': 'inventory_2',
  'data-board': 'bar_chart',
  // 数据洞察及分析
  'monitor-industry': 'radar',
  'monitor-user': 'groups',
  'insight-experience': 'explore',
  // 素材生成
  'gen-material': 'view_carousel',
  'gen-mindset-floor': 'dashboard_customize',
  'gen-tag': 'sell',
  // 审核工具
  'audit-image-match': 'compare',
  'audit-celebrity': 'star',
  'audit-luxury': 'diamond',
  // 上线跟踪
  'gov-walkthrough': 'fact_check',
  'track-review': 'monitoring',
}

export default function Sidebar({ activePage, onNavigate, variant = 'light' }) {
  const isDark = variant === 'dark'
  const [collapsed, setCollapsed] = useState({})
  const toggle = (key) => setCollapsed(c => ({ ...c, [key]: !c[key] }))

  // ── 暗色（surface 色板，工作台首页使用）──
  if (isDark) {
    const topBtn = (item) => {
      const active = activePage === item.id
      return (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
            active
              ? 'bg-primary/20 text-white font-medium border border-primary/40'
              : 'text-on-surface hover:bg-surface-container-highest border border-transparent'
          }`}
        >
          <Icon name={NAV_ICONS[item.id] || 'circle'} className={`text-xl ${active ? 'text-primary' : 'text-on-surface-variant'}`} />
          <span>{item.label}</span>
        </button>
      )
    }
    const leafBtn = (item) => {
      const active = activePage === item.id
      return (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`w-full text-left pl-11 pr-3 py-1.5 rounded-lg text-[13px] transition-colors ${
            active
              ? 'bg-primary/20 text-white font-medium'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
          }`}
        >
          {item.label}
        </button>
      )
    }
    return (
      <aside className="w-64 min-w-[256px] bg-surface-container border-r border-outline-variant/50 flex flex-col select-none theme-dark shadow-[2px_0_28px_rgba(0,0,0,0.45)]">
        <div className="px-6 pt-6 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 text-lg">
              🧠
            </div>
            <div>
              <h3 className="font-semibold text-on-surface text-sm">商详大脑</h3>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Product Detail Brain</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {navItems.map((section, si) => {
            // 工作台（顶级单项）
            if (section.section === '') return <div key={si}>{section.items.map(topBtn)}</div>
            return (
              <div key={si}>
                <div className="flex items-center gap-3 px-3 py-1.5 text-sm font-semibold text-on-surface">
                  {section.micon && <Icon name={section.micon} className="text-xl text-primary/90" />}
                  <span>{section.section}</span>
                </div>
                {section.groups ? (
                  <div className="mt-1 space-y-1">
                    {section.groups.map((g, gi) => {
                      const open = !collapsed[g.title]
                      return (
                        <div key={gi}>
                          <button
                            onClick={() => toggle(g.title)}
                            className="w-full flex items-center gap-2.5 pl-7 pr-3 py-1.5 rounded-lg text-[13px] text-on-surface/90 hover:bg-surface-container-highest transition-colors"
                          >
                            {g.micon && <Icon name={g.micon} className="text-lg text-on-surface-variant" />}
                            <span className="flex-1 text-left">{g.title}</span>
                            <Icon name="expand_more" className={`text-base text-on-surface-variant transition-transform ${open ? '' : '-rotate-90'}`} />
                          </button>
                          {open && <div className="mt-0.5 space-y-0.5">{g.items.map(leafBtn)}</div>}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="mt-1 space-y-0.5">
                    {section.items.map(item => {
                      const active = activePage === item.id
                      return (
                        <button
                          key={item.id}
                          onClick={() => onNavigate(item.id)}
                          className={`w-full flex items-center gap-3 pl-7 pr-3 py-1.5 rounded-lg text-[13px] transition-colors ${
                            active
                              ? 'bg-primary/20 text-white font-medium'
                              : 'text-on-surface/90 hover:bg-surface-container-highest'
                          }`}
                        >
                          <Icon name={NAV_ICONS[item.id] || 'circle'} className={`text-lg ${active ? 'text-primary' : 'text-on-surface-variant'}`} />
                          <span>{item.label}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant/40 bg-surface-container-lowest/50">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('settings')} className="flex items-center gap-3 flex-1 min-w-0 text-left">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shrink-0">W</div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-on-surface truncate">王静怡</p>
                <p className="text-[10px] text-on-surface-variant">体验设计师</p>
              </div>
            </button>
            <button onClick={() => onNavigate('settings')} className="text-on-surface-variant hover:text-primary transition-colors shrink-0 ml-2" title="设置">
              <Icon name="settings" />
            </button>
          </div>
        </div>
      </aside>
    )
  }

  // ── 浅色变体（深底 #0f1117，emoji 图标，工具页使用）──
  const topBtn = (item) => {
    const active = activePage === item.id
    return (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id)}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
          active ? 'bg-white/10 text-white font-medium' : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        <span className="text-base">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    )
  }
  const iconItem = (item) => {
    const active = activePage === item.id
    return (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id)}
        className={`w-full flex items-center gap-3 pl-7 pr-3 py-1.5 rounded-lg text-[13px] transition-all duration-150 ${
          active ? 'bg-white/10 text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
      >
        <span className="text-sm">{item.icon}</span>
        <span>{item.label}</span>
      </button>
    )
  }
  const leafItem = (item) => {
    const active = activePage === item.id
    return (
      <button
        key={item.id}
        onClick={() => onNavigate(item.id)}
        className={`w-full text-left pl-12 pr-3 py-1.5 rounded-lg text-[13px] transition-all duration-150 ${
          active ? 'bg-white/10 text-white font-medium' : 'text-white/45 hover:text-white/90 hover:bg-white/5'
        }`}
      >
        {item.label}
      </button>
    )
  }

  return (
    <aside className="w-[230px] min-w-[230px] bg-[#0f1117] text-white flex flex-col select-none">
      <div className="px-5 py-5 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4c6ef5] to-[#748ffc] flex items-center justify-center text-sm">🧠</div>
          <div>
            <div className="text-sm font-semibold leading-tight">商详大脑</div>
            <div className="text-[10px] text-white/35 leading-tight">Product Detail Brain</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-2">
        {navItems.map((section, si) => {
          if (section.section === '') return <div key={si}>{section.items.map(topBtn)}</div>
          return (
            <div key={si}>
              <div className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-white/90">
                {section.emoji && <span className="text-base">{section.emoji}</span>}
                <span>{section.section}</span>
              </div>
              {section.groups ? (
                <div className="space-y-0.5">
                  {section.groups.map((g, gi) => {
                    const open = !collapsed[g.title]
                    return (
                      <div key={gi}>
                        <button
                          onClick={() => toggle(g.title)}
                          className="w-full flex items-center gap-2.5 pl-7 pr-3 py-1.5 rounded-lg text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {g.emoji && <span className="text-sm">{g.emoji}</span>}
                          <span className="flex-1 text-left">{g.title}</span>
                          <Icon name="expand_more" className={`text-base text-white/40 transition-transform ${open ? '' : '-rotate-90'}`} />
                        </button>
                        {open && <div className="mt-0.5 space-y-0.5">{g.items.map(leafItem)}</div>}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="space-y-0.5">{section.items.map(iconItem)}</div>
              )}
            </div>
          )
        })}
      </nav>
      <div className="px-3 py-3 border-t border-white/5">
        <button
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-2.5 px-2 py-2 rounded-lg transition-colors ${activePage === 'settings' ? 'bg-white/10' : 'hover:bg-white/5'}`}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">W</div>
          <div className="text-left flex-1">
            <div className="text-xs font-medium text-white/70">王静怡</div>
            <div className="text-[10px] text-white/30">体验设计师</div>
          </div>
          <span className="text-white/30 text-sm">⚙️</span>
        </button>
      </div>
    </aside>
  )
}
