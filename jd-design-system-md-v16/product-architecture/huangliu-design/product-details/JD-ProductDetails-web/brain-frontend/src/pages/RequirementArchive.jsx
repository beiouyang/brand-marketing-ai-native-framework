import { useState } from 'react'
import { requirements, components } from '../data/mockData'

const statusFilters = ['全部', '已上线', '进行中', '已废弃']
const moduleFilters = ['全部', '头图区', '价格区', '评价区', '推荐区', '详情信息区', '底部操作栏']

export default function RequirementArchive({ onNavigate }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('全部')
  const [moduleFilter, setModuleFilter] = useState('全部')
  const [selected, setSelected] = useState(null)
  const [showEntry, setShowEntry] = useState(false)

  const filtered = requirements.filter(r => {
    if (statusFilter !== '全部' && r.status !== statusFilter) return false
    if (moduleFilter !== '全部' && r.module !== moduleFilter) return false
    if (search && !r.title.includes(search) && !r.prdSummary.includes(search)) return false
    return true
  })

  const statusBadge = (status) => {
    const colors = {
      '已上线': 'bg-green-50 text-green-600 border-green-200',
      '进行中': 'bg-blue-50 text-blue-600 border-blue-200',
      '已废弃': 'bg-gray-50 text-gray-400 border-gray-200',
    }
    return <span className={`text-[10px] px-2 py-0.5 rounded-full border ${colors[status]}`}>{status}</span>
  }

  return (
    <div className="p-8 min-h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span>知识库</span><span>/</span><span className="text-gray-600">需求档案</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">需求档案</h1>
          <p className="text-sm text-gray-500 mt-1">所有历史需求的完整记录，共 {requirements.length} 条</p>
        </div>
        <button
          onClick={() => setShowEntry(true)}
          className="px-4 py-2.5 bg-[#4c6ef5] hover:bg-[#4263eb] text-white text-sm font-medium rounded-xl transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          录入需求
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="搜索需求..."
            className="pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#4c6ef5]/40 transition-colors w-56"
          />
        </div>

        {/* Module Filter */}
        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
          {moduleFilters.map(m => (
            <button
              key={m}
              onClick={() => setModuleFilter(m)}
              className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                moduleFilter === m ? 'bg-[#4c6ef5] text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >{m}</button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
          {statusFilters.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                statusFilter === s ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >{s}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">需求标题</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">状态</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">模块</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">上线日期</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">CTR变化</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider">转化变化</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((req, idx) => (
              <tr
                key={req.id}
                onClick={() => setSelected(req)}
                className="border-b border-gray-50 hover:bg-gray-50/50 cursor-pointer transition-colors"
              >
                <td className="px-5 py-3.5">
                  <div className="text-sm font-medium text-gray-800">{req.title}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">需求 #{req.id}</div>
                </td>
                <td className="px-5 py-3.5">{statusBadge(req.status)}</td>
                <td className="px-5 py-3.5 text-sm text-gray-600">{req.module}</td>
                <td className="px-5 py-3.5 text-sm text-gray-600">{req.date}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-sm font-medium ${req.dataEffect.ctr.startsWith('+') ? 'text-green-600' : 'text-gray-400'}`}>
                    {req.dataEffect.ctr}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`text-sm font-medium ${req.dataEffect.conversion.startsWith('+') ? 'text-green-600' : 'text-gray-400'}`}>
                    {req.dataEffect.conversion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Requirement Detail Drawer */}
      {selected && (
        <RequirementDetail
          req={selected}
          onClose={() => setSelected(null)}
          onNavigate={onNavigate}
        />
      )}

      {/* Requirement Entry Modal */}
      {showEntry && (
        <RequirementEntry
          onClose={() => setShowEntry(false)}
        />
      )}
    </div>
  )
}

function RequirementDetail({ req, onClose, onNavigate }) {
  const [tab, setTab] = useState('prd')
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="drawer-overlay absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="drawer-panel relative w-[560px] bg-white shadow-drawer overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] text-gray-400 font-mono">需求 #{req.id}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                req.status === '已上线' ? 'bg-green-50 text-green-600 border-green-200' :
                req.status === '进行中' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                'bg-gray-50 text-gray-400 border-gray-200'
              }`}>{req.status}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900">{req.title}</h2>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
              <span>{req.module}</span>
              <span>·</span>
              <span>{req.date}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-5">
            {[
              { id: 'prd', label: 'PRD摘要' },
              { id: 'designs', label: '设计稿件' },
              { id: 'data', label: '数据效果' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
                  tab === t.id
                    ? 'border-[#4c6ef5] text-[#4c6ef5]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >{t.label}</button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === 'prd' && (
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {req.prdSummary}
            </div>
          )}

          {tab === 'designs' && (
            <div className="space-y-3">
              {req.designs.map((d, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">设计稿 {i + 1}</div>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 text-center text-sm text-gray-400">
                    🖼️ {d.includes('3D') ? '3D入口交互稿' :
                       d.includes('Flash') ? '限时降价标签设计' :
                       d.includes('AI') ? 'AI评价摘要设计' :
                       d.includes('Brand') ? '品牌入口改版设计' :
                       d.includes('Protection') ? '价保标识设计' : '设计稿预览'}
                    <div className="text-[10px] text-gray-300 mt-1">点击查看大图</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'data' && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-[10px] text-green-500 uppercase tracking-wider mb-1">CTR 变化</div>
                  <div className="text-2xl font-bold text-green-600">{req.dataEffect.ctr}</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-[10px] text-blue-500 uppercase tracking-wider mb-1">转化变化</div>
                  <div className="text-2xl font-bold text-blue-600">{req.dataEffect.conversion}</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-xs text-gray-400 mb-1">统计周期</div>
                <div className="text-sm text-gray-700">{req.dataEffect.period}</div>
              </div>
              {req.dataEffect.note && (
                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="text-xs text-amber-600 mb-1">备注</div>
                  <div className="text-sm text-amber-800">{req.dataEffect.note}</div>
                </div>
              )}
            </div>
          )}

          {/* Sidebar - Related Components */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">关联组件</h3>
            <div className="space-y-1.5">
              {req.relatedComponents.map(cid => {
                const comp = components.find(c => c.id === cid)
                return comp ? (
                  <button
                    key={cid}
                    onClick={() => { onClose(); onNavigate('kb-component') }}
                    className="w-full text-left px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <div className="text-sm text-gray-700">{comp.name}</div>
                    <div className="text-[11px] text-[#4c6ef5] mt-0.5">在组件库中查看 →</div>
                  </button>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RequirementEntry({ onClose }) {
  const [step, setStep] = useState(1)
  const [title, setTitle] = useState('')
  const [prd, setPrd] = useState('')
  const [type, setType] = useState('')
  const [selectedComps, setSelectedComps] = useState([])
  const [done, setDone] = useState(false)

  const toggleComp = (id) => {
    setSelectedComps(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const handleSubmit = () => {
    setDone(true)
  }

  if (done) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="drawer-overlay absolute inset-0 bg-black/30" onClick={onClose} />
        <div className="relative bg-white rounded-2xl p-10 shadow-xl max-w-sm w-full mx-4 text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">录入成功！</h2>
          <p className="text-sm text-gray-500 mb-6">需求已归档至需求档案，关联组件已更新</p>
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#4c6ef5] hover:bg-[#4263eb] text-white rounded-xl text-sm font-medium transition-colors"
          >
            完成
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="drawer-overlay absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-[580px] max-h-[80vh] overflow-y-auto mx-4">
        {/* Header */}
        <div className="px-8 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">录入需求</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          {/* Stepper */}
          <div className="flex items-center gap-3 mt-4">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step > s ? 'bg-green-500 text-white' :
                  step === s ? 'bg-[#4c6ef5] text-white' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {step > s ? '✓' : s}
                </div>
                <span className={`text-xs font-medium ${step >= s ? 'text-gray-800' : 'text-gray-300'}`}>
                  {s === 1 ? '基础信息' : s === 2 ? 'AI辅助解析' : '补充归档'}
                </span>
                {s < 3 && <div className={`w-8 h-px ${step > s ? 'bg-green-400' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="px-8 py-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">需求标题</label>
                <input
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="输入需求标题..."
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#4c6ef5]/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">PRD内容</label>
                <textarea
                  value={prd}
                  onChange={e => setPrd(e.target.value)}
                  placeholder="粘贴PRD内容，AI将自动提取关键信息..."
                  rows={5}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#4c6ef5]/40 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">需求类型</label>
                <div className="flex gap-2">
                  {['新增功能', '优化迭代', '问题修复'].map(t => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                        type === t ? 'border-[#4c6ef5] bg-[#4c6ef5]/5 text-[#4c6ef5]' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                    >{t}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                AI已根据PRD内容，识别出以下可能受影响的组件，请确认或调整：
              </p>
              <div className="space-y-2">
                {components.map(comp => (
                  <label key={comp.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedComps.includes(comp.id)}
                      onChange={() => toggleComp(comp.id)}
                      className="w-4 h-4 rounded border-gray-300 text-[#4c6ef5]"
                    />
                    <span className="text-sm text-gray-700">{comp.name}</span>
                    <span className="text-[10px] text-gray-400 ml-auto">{comp.version}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">设计稿件</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-gray-300 transition-colors">
                  <div className="text-2xl mb-2">📎</div>
                  <div className="text-sm text-gray-500">拖拽文件到此处，或点击上传</div>
                  <div className="text-[10px] text-gray-300 mt-1">支持 PNG/JPG/PDF/Markdown</div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">预期效果指标</label>
                <textarea
                  placeholder="预期CTR提升、转化率变化等..."
                  rows={2}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#4c6ef5]/40 transition-colors resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-100 flex justify-between">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            className={`px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors ${step === 1 ? 'invisible' : ''}`}
          >
            上一步
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={(step === 1 && !title.trim())}
              className="px-6 py-2.5 bg-[#4c6ef5] hover:bg-[#4263eb] disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-colors"
            >
              下一步
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-xl transition-colors"
            >
              提交归档
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
