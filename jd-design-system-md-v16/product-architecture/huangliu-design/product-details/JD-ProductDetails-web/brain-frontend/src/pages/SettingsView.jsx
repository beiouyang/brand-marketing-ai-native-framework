export default function SettingsView() {
  return (
    <div className="p-8 min-h-full bg-transparent theme-dark">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
          <span className="text-on-surface-variant">设置</span>
        </div>
        <h1 className="text-2xl font-bold text-on-surface mt-1">设置</h1>
        <p className="text-sm text-on-surface-variant mt-1">管理知识库配置和偏好设置</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Knowledge Base */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-sm font-semibold text-on-surface mb-4">知识库配置</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm text-on-surface">自动同步设计稿</div>
                <div className="text-xs text-on-surface-variant mt-0.5">从Figma/设计工具自动同步设计稿件到需求档案</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-9 h-5 bg-surface-container-high/40 peer-checked:bg-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-outline-variant/30">
              <div>
                <div className="text-sm text-on-surface">AI自动解析PRD</div>
                <div className="text-xs text-on-surface-variant mt-0.5">录入需求时自动提取PRD关键信息并关联组件</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-9 h-5 bg-surface-container-high/40 peer-checked:bg-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* General */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-sm font-semibold text-on-surface mb-4">通用设置</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm text-on-surface">通知提醒</div>
                <div className="text-xs text-on-surface-variant mt-0.5">需求状态变更、组件变动时推送通知</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-surface-container-high/40 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-on-surface-variant">
          商详大脑 Demo v0.1.0 · React + Vite + Tailwind CSS
        </div>
      </div>
    </div>
  )
}
