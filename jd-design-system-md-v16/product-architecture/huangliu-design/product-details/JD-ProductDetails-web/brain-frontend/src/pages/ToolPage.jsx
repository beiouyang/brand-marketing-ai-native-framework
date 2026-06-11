export default function ToolPage({ config }) {
  if (!config) return null

  if (config.embed) return <EmbedPage config={config} />

  return (
    <div className="p-8 min-h-full theme-dark">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
          {config.group && (
            <>
              <span>{config.group}</span>
              <span>/</span>
            </>
          )}
          <span className="text-on-surface">{config.title}</span>
        </div>
        <h1 className="text-2xl font-bold text-on-surface mt-1">{config.title}</h1>
        <p className="text-sm text-on-surface-variant mt-1">{config.description}</p>
      </div>

      {/* Tool Content Placeholder */}
      <div className="glass-panel rounded-2xl p-10">
        <div className="text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-3xl mx-auto mb-5">
            {config.icon || '🛠️'}
          </div>
          <h2 className="text-lg font-semibold text-on-surface mb-2">{config.title}</h2>
          <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6">{config.description}</p>

          {/* Placeholder Input */}
          <div className="max-w-md mx-auto">
            <div className="flex items-end gap-2 bg-surface-container-high/40 border border-outline-variant/40 rounded-xl px-4 py-3 focus-within:border-primary/50 transition-colors">
              <textarea
                placeholder={config.placeholder}
                rows={3}
                className="w-full bg-transparent outline-none text-sm resize-none placeholder-on-surface-variant/50 text-on-surface"
              />
            </div>
            <p className="text-[10px] text-on-surface-variant/60 mt-2">* 此功能为 Demo 占位，实际将接入 AI 能力</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmbedPage({ config }) {
  return (
    <div className="flex flex-col h-full bg-background theme-dark">
      {/* Compact header */}
      <div className="px-6 py-3 border-b border-outline-variant/40 bg-surface-container/70 backdrop-blur-xl flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg shrink-0">{config.icon || '🛠️'}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant leading-none">
              {config.group && (
                <>
                  <span>{config.group}</span>
                  <span>/</span>
                </>
              )}
              <span className="text-on-surface">{config.title}</span>
            </div>
            <div className="text-sm font-semibold text-on-surface leading-tight mt-0.5 truncate">
              {config.title}
            </div>
          </div>
        </div>
        <div className="flex-1" />
        <a
          href={config.embed}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 px-2.5 py-1.5 rounded-lg transition-colors shrink-0"
          title="在新窗口打开"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M9 2H14V7M14 2L7 9M12 9.5V13A1 1 0 0 1 11 14H3A1 1 0 0 1 2 13V5A1 1 0 0 1 3 4H6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>新窗口打开</span>
        </a>
      </div>

      {/* Embedded tool */}
      <iframe
        src={config.embed}
        title={config.title}
        className="flex-1 w-full border-0"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  )
}
