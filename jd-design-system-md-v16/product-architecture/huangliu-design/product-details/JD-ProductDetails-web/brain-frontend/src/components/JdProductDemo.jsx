import { useState, useRef, useCallback, useEffect } from 'react'

const sections = [
  { id: 'c1', label: '头图区' },
  { id: 'c2', label: '价格区' },
  { id: 'c5', label: '详情信息区' },
  { id: 'c3', label: '评价区' },
  { id: 'c4', label: '推荐区' },
  { id: 'c6', label: '底部操作栏' },
]

export default function JdProductDemo({ activeId, hoveredId, onComponentClick, onComponentHover, onComponentLeave }) {
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 })
  const timerRef = useRef(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const callbacksRef = useRef({ onComponentHover, onComponentLeave, onComponentClick })
  callbacksRef.current = { onComponentHover, onComponentLeave, onComponentClick }

  // 清理 hover 状态
  const clearHover = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setTooltip(prev => prev.show ? { ...prev, show: false } : prev)
    callbacksRef.current.onComponentLeave?.()
  }, [])

  // 安全网：鼠标离开整个容器时强制清理
  const handleContainerLeave = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setTooltip({ show: false, text: '', x: 0, y: 0 })
    callbacksRef.current.onComponentLeave?.()
  }, [])

  // 统一处理鼠标移动 — 更新坐标并检查当前所在的 section
  const handleContainerMouseMove = useCallback((e) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY }

    // 如果 tooltip 已显示，跟随鼠标
    setTooltip(prev => {
      if (!prev.show) return prev
      return { ...prev, x: e.clientX, y: e.clientY }
    })
  }, [])

  // SectionWrap 的事件处理
  const handleSectionEnter = useCallback((componentId) => {
    callbacksRef.current.onComponentHover?.(componentId)

    const label = sections.find(s => s.id === componentId)?.label || ''

    // 清除旧的 timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    timerRef.current = setTimeout(() => {
      const pos = mousePosRef.current
      setTooltip({ show: true, text: label, x: pos.x, y: pos.y })
    }, 1000)
  }, [])

  const handleSectionLeave = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setTooltip(prev => prev.show ? { ...prev, show: false } : prev)
    callbacksRef.current.onComponentLeave?.()
  }, [])

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const SectionWrap = ({ componentId, children, className = '' }) => {
    const isActive = activeId === componentId
    const isHovered = hoveredId === componentId && !isActive

    return (
      <div
        data-component-id={componentId}
        className={`relative cursor-pointer transition-all duration-200 ${className}
          ${isActive ? 'ring-2 ring-[#4c6ef5] ring-inset' : ''}
          ${isHovered ? 'ring-1 ring-[#4c6ef5]/60 ring-inset' : ''}`}
        onClick={() => callbacksRef.current.onComponentClick?.(componentId)}
        onMouseEnter={() => handleSectionEnter(componentId)}
        onMouseLeave={handleSectionLeave}
      >
        {children}
      </div>
    )
  }

  return (
    <>
      {/* Tooltip — 全局 fixed 定位，跟随鼠标 */}
      {tooltip.show && (
        <div
          className="fixed z-[100] pointer-events-none bg-gray-900/90 text-white text-xs px-2.5 py-1 rounded-lg shadow-lg backdrop-blur-sm"
          style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
        >
          {tooltip.text}
          <div className="absolute left-1 top-full w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-gray-900/90" />
        </div>
      )}

      <div
        className="w-[375px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 flex flex-col select-none"
        style={{ height: 'calc(100vh - 120px)', maxHeight: 780 }}
        onMouseMove={handleContainerMouseMove}
        onMouseLeave={handleContainerLeave}
      >

        {/* 状态栏 */}
        <div className="h-7 bg-black/80 flex items-center justify-between px-6 text-white text-[10px]">
          <span>6:18</span>
          <div className="flex items-center gap-1">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0.5" y="7" width="13" height="2.5" rx="0.5" fill="white"/><rect x="2" y="4" width="10" height="2.5" rx="0.5" fill="white"/><rect x="3.5" y="1" width="7" height="2.5" rx="0.5" fill="white"/></svg>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><rect x="0.5" y="2" width="12" height="6" rx="1" stroke="white" strokeWidth="1"/><rect x="2" y="4" width="8" height="2" rx="0.5" fill="white"/><path d="M14 4V6C14.5 6 15 5.5 15 5C15 4.5 14.5 4 14 4Z" fill="white"/></svg>
          </div>
        </div>

        {/* 可滚动内容区 */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'none' }}>

          {/* 头图区 */}
          <SectionWrap componentId="c1">
            {/* 顶部导航 */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2.5 pointer-events-none">
              <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm pointer-events-auto">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm pointer-events-auto">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3.5C6.5 2 4 2.5 3 4C2 5.5 2.5 7.5 4 9L8 13L12 9C13.5 7.5 14 5.5 13 4C12 2.5 9.5 2 8 3.5Z" stroke="white" strokeWidth="1.5" fill="none"/></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm pointer-events-auto">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8C3 8 5 4 8 4C11 4 13 8 13 8C13 8 11 12 8 12C5 12 3 8 3 8Z" stroke="white" strokeWidth="1.5"/><circle cx="8" cy="8" r="1.5" stroke="white" strokeWidth="1.5"/></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center backdrop-blur-sm text-white text-xs font-bold pointer-events-auto">···</button>
              </div>
            </div>

            {/* 商品大图 */}
            <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-[#2a3028] to-[#1a1f18] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1610945265078-3858a0828671?w=600&h=800&fit=crop"
                alt="手机"
                className="w-3/4 h-auto object-contain drop-shadow-2xl"
              />
              {/* 图集标签 */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <span className="text-[11px] text-white/80 bg-black/40 px-2 py-0.5 rounded">图集 1/3</span>
                <span className="text-[11px] text-white/80 bg-black/40 px-2 py-0.5 rounded">口碑</span>
                <span className="text-[11px] text-white/80 bg-black/40 px-2 py-0.5 rounded">搭配</span>
              </div>
            </div>

            {/* SKU颜色选择 */}
            <div className="px-3 py-2.5 flex items-center gap-2 bg-white border-b border-gray-100">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-[#e4393c] bg-[#fff5f5]">
                <div className="w-5 h-7 rounded bg-gradient-to-b from-[#3a4a3a] to-[#2a3a2a]"></div>
                <span className="text-[11px] text-[#e4393c]">黛影绿</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200">
                <div className="w-5 h-7 rounded bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]"></div>
                <span className="text-[11px] text-gray-600">水墨黑</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200">
                <div className="w-5 h-7 rounded bg-gradient-to-b from-[#b0b0b0] to-[#909090]"></div>
                <span className="text-[11px] text-gray-600">雅岩灰</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-gray-200 ml-auto">
                <span className="text-[11px] text-gray-600">8款可选</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3L5 5L7 3" stroke="#999" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
            </div>

            {/* 套餐选择 */}
            <div className="px-3 py-2 flex items-center gap-2 bg-white">
              <div className="px-2.5 py-1 rounded-full border border-[#e4393c] text-[11px] text-[#e4393c] font-medium bg-[#fff5f5]">官方标配</div>
              <div className="px-2.5 py-1 rounded-full border border-gray-200 text-[11px] text-gray-600">以旧换新 <span className="text-[#e4393c]">补贴立减200</span></div>
              <div className="px-2.5 py-1 rounded-full border border-gray-200 text-[11px] text-gray-600">购机补贴</div>
            </div>
          </SectionWrap>

          {/* 价格区 */}
          <SectionWrap componentId="c2" className="mt-1">
            <div className="bg-[#f2270c] px-3 py-3">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[13px] text-white/90">¥</span>
                <span className="text-[28px] font-bold text-white leading-none" style={{ fontFamily: 'DIN Alternate, Arial' }}>8996.12</span>
                <span className="text-[11px] text-white/90 bg-white/20 px-1.5 py-0.5 rounded ml-1">到手价</span>
                <div className="ml-auto text-right">
                  <div className="text-[11px] text-white/90 bg-white/10 px-2 py-0.5 rounded inline-block">
                    <span className="font-bold">11.11</span>
                  </div>
                  <div className="text-[10px] text-white/80 mt-0.5">今晚8点火热开抢</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] text-white/70 line-through">¥9990</span>
                <span className="text-[11px] text-white/80">| 已售3000+</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] text-white/90">已享受:</span>
                <span className="text-[10px] text-white bg-white/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1L4.5 3H6.5L5 4.5L5.5 6.5L4 5.5L2.5 6.5L3 4.5L1.5 3H3.5L4 1Z" fill="white"/></svg>
                  官方直降12元
                </span>
                <span className="text-[10px] text-white/80">限时立减15元 29:20</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-auto"><path d="M3 3L5 5L7 3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[11px] text-white/90">可再享:</span>
                <span className="text-[10px] text-white bg-white/20 px-1.5 py-0.5 rounded">满10000立减800</span>
                <span className="text-[10px] text-white/80">满500减50</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-auto"><path d="M3 3L5 5L7 3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-white/90">开通享:</span>
                <span className="text-[11px] text-white/90">开通PLUS等，再省¥91.58，享24期免息</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-auto"><path d="M3 3L5 5L7 3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </div>
            </div>
          </SectionWrap>

          {/* 详情信息区 */}
          <SectionWrap componentId="c5" className="mt-1">
            <div className="bg-white px-3 py-3">
              <div className="flex items-start gap-1.5 mb-2">
                <span className="text-[10px] text-white bg-[#e4393c] px-1 py-0.5 rounded font-medium mt-0.5 shrink-0">自营</span>
                <h1 className="text-[14px] font-medium text-gray-900 leading-snug">
                  三星 Samsung Galaxy S25 AI手机 5000万拍照像素 256GB 黛影绿 支持移动联通电信5G双待
                </h1>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <div className="flex items-center gap-0.5 bg-[#fff8f0] px-2 py-1 rounded">
                  <span className="text-[10px] bg-[#e4393c] text-white px-1 rounded">榜</span>
                  <span className="text-[11px] text-[#e67e22]">旗舰手机金榜 · 第2名</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3L5 5L7 3" stroke="#e67e22" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <span className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded">7天加保</span>
                <span className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded">闪电退款</span>
                <span className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded">我买</span>
              </div>
            </div>
          </SectionWrap>

          {/* 评价区入口 */}
          <SectionWrap componentId="c3" className="mt-1">
            <div className="bg-white px-3 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-gray-900">商品评价</span>
                  <span className="text-[11px] text-gray-400">5000+条评价</span>
                  <span className="text-[11px] text-[#e4393c]">99%好评</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">拍照清晰 (1200+)</span>
                <span className="text-[10px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">运行流畅 (800+)</span>
                <span className="text-[10px] text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">外观好看 (600+)</span>
              </div>
            </div>
          </SectionWrap>

          {/* 推荐区入口 */}
          <SectionWrap componentId="c4" className="mt-1">
            <div className="bg-white px-3 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-bold text-gray-900">搭配推荐</span>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-gray-400">查看全部</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {[1,2,3].map(i => (
                  <div key={i} className="shrink-0 w-20">
                    <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center mb-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#ddd" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="#ddd" strokeWidth="1.5"/></svg>
                    </div>
                    <div className="text-[10px] text-gray-500 truncate">配件{i}</div>
                    <div className="text-[11px] text-[#e4393c] font-bold">¥99</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrap>

          {/* 底部占位 */}
          <div className="h-14" />
        </div>

        {/* 底部操作栏 */}
        <SectionWrap componentId="c6">
          <div className="h-14 bg-white border-t border-gray-100 flex items-center px-2">
            <div className="flex items-center gap-3 px-3">
              <div className="flex flex-col items-center gap-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="6" width="14" height="10" rx="1" stroke="#666" strokeWidth="1.2"/><path d="M6 6V4C6 2.5 7 1.5 9 1.5C11 1.5 12 2.5 12 4V6" stroke="#666" strokeWidth="1.2"/></svg>
                <span className="text-[9px] text-gray-600">店铺</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="8" r="3" stroke="#666" strokeWidth="1.2"/><path d="M3 15C3 12 5 11 9 11C13 11 15 12 15 15" stroke="#666" strokeWidth="1.2"/></svg>
                <span className="text-[9px] text-gray-600">客服</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 4H15L14 13C14 13.5 13.5 14 13 14H5C4.5 14 4 13.5 4 13L3 4Z" stroke="#666" strokeWidth="1.2"/><path d="M6 4V3C6 2 7 1 9 1C11 1 12 2 12 3V4" stroke="#666" strokeWidth="1.2"/></svg>
                <span className="text-[9px] text-gray-600">购物车</span>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-1.5 ml-2">
              <button className="flex-1 h-9 rounded-full bg-[#ffca28] text-[13px] font-medium text-gray-900">加入购物车</button>
              <button className="flex-1 h-9 rounded-full bg-[#f2270c] text-[13px] font-medium text-white">立即购买</button>
            </div>
          </div>
        </SectionWrap>
      </div>
    </>
  )
}
