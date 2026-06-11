import Icon from './Icon'

export default function TopHeader() {
  return (
    <header className="shrink-0 z-20 h-16 flex justify-between items-center px-8 border-b border-outline-variant/30 bg-surface/60 backdrop-blur-xl">
      <div className="flex items-center gap-8" />
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block group">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" />
          <input
            type="text"
            placeholder="Search resources..."
            className="bg-surface-container-low/50 border border-outline-variant/50 rounded-full pl-10 pr-4 py-1.5 w-64 focus:ring-1 focus:ring-primary outline-none text-sm text-on-surface placeholder-on-surface-variant/50 transition-all"
          />
        </div>
        <div className="flex items-center gap-4">
          <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="notifications" />
          </button>
          <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="settings" />
          </button>
          <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="help" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
            W
          </div>
        </div>
      </div>
    </header>
  )
}
