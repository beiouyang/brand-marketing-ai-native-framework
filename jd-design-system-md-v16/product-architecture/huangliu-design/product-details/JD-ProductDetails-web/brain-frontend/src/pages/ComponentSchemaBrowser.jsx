import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from '../components/Icon'

const schemaFiles = {
  instances: 'design-schema/instances.json',
  ytype: 'design-schema/Ytype.json',
  xtype: 'design-schema/Xtype.json',
  scene: 'design-schema/scene.json',
  rules: 'design-schema/display-rules.json',
  docs: 'design-schema/spec-docs.json',
  samples: 'design-schema/sample-content.json',
}

const depthOrder = ['universalFloors', 'secondaryLayers']

// 预览图为绝对路径(/pics/...)，子路径(/brain/)部署下会 404；统一按 BASE_URL 解析
function resolveAsset(p) {
  if (!p || /^https?:\/\//.test(p)) return p
  return `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
}

export default function ComponentSchemaBrowser({ hideHeader = false } = {}) {
  const [schema, setSchema] = useState(null)
  const [loadError, setLoadError] = useState('')
  const [primaryTab, setPrimaryTab] = useState('general')
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const [activeReadingId, setActiveReadingId] = useState(null)
  const refs = useRef({})
  const indexRefs = useRef({})
  const previewScrollRef = useRef(null)
  const programmaticScrollRef = useRef(false)

  useEffect(() => {
    let disposed = false
    async function loadSchema() {
      try {
        const entries = await Promise.all(
          Object.entries(schemaFiles).map(async ([key, file]) => {
            const response = await fetch(`${import.meta.env.BASE_URL}${file}`, { cache: 'no-store' })
            if (!response.ok) throw new Error(`${file} 加载失败`)
            return [key, await response.json()]
          })
        )
        if (!disposed) setSchema(Object.fromEntries(entries))
      } catch (error) {
        if (!disposed) setLoadError(error.message || 'design-schema 加载失败')
      }
    }
    loadSchema()
    return () => { disposed = true }
  }, [])

  const model = useMemo(() => {
    if (!schema) return null
    const instances = normalizeInstances(schema.instances)
    const sceneIndex = buildSceneIndex(schema.scene)
    const display = instances.map((instance) => ({
      ...instance,
      ...getDisplayResult(instance, { primaryTab, selectedBusiness }),
      scenes: sceneIndex[instance.instanceId] || [],
      docs: schema.docs.filter((doc) => doc.relatedInstanceIds?.includes(instance.instanceId)),
      samples: schema.samples.filter((sample) => sample.instanceId === instance.instanceId),
    }))
    const visible = sortByDisplayOrder(display.filter((item) => item.visible), schema.rules)
    return {
      instances,
      display,
      visible,
      hidden: display.filter((item) => !item.visible),
      businessItems: schema.ytype.business.items,
      ytypeLabelMap: buildYtypeLabelMap(schema.ytype),
      xtypeLabelMap: buildXtypeLabelMap(schema.xtype),
      stats: {
        modules: instances.length,
        areas: new Set(instances.map((item) => `${item.depthKey}.${item.areaKey}`)).size,
        scenes: countScenes(schema.scene),
      },
    }
  }, [schema, primaryTab, selectedBusiness])

  const selected = model?.display.find((item) => item.instanceId === selectedId)

  useEffect(() => {
    if (!model?.visible.length) {
      setSelectedId(null)
      setActiveReadingId(null)
      return
    }
    setSelectedId(null)
    setActiveReadingId(model.visible[0].instanceId)
    previewScrollRef.current?.scrollTo({ top: 0 })
  }, [model?.visible])

  useEffect(() => {
    if (!model?.visible.length || !previewScrollRef.current) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (programmaticScrollRef.current) return

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const ratioDiff = b.intersectionRatio - a.intersectionRatio
            if (Math.abs(ratioDiff) > 0.08) return ratioDiff
            return a.boundingClientRect.top - b.boundingClientRect.top
          })

        const currentId = visibleEntries[0]?.target?.dataset?.instanceId
        if (currentId) setActiveReadingId(currentId)
      },
      {
        root: previewScrollRef.current,
        threshold: [0.25, 0.5, 0.75],
      }
    )

    const observedIds = new Set()
    model.visible.filter((item) => !isFixedPreviewLayer(item.instanceId, schema.rules)).forEach((item) => {
      const anchorId = getPreviewAnchorId(item.instanceId, schema.rules)
      if (observedIds.has(anchorId)) return
      observedIds.add(anchorId)
      const node = refs.current[anchorId]
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [model?.visible, schema?.rules])

  useEffect(() => {
    if (!activeReadingId) return
    indexRefs.current[activeReadingId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [activeReadingId])

  const handleBusinessTab = () => {
    setPrimaryTab('business')
  }

  const handleGeneralTab = () => {
    setPrimaryTab('general')
    setSelectedBusiness(null)
  }

  const handleSelectInstance = (instanceId) => {
    if (isFixedPreviewLayer(instanceId, schema.rules)) {
      setSelectedId(instanceId)
      setActiveReadingId(instanceId)
      return
    }
    const anchorId = getPreviewAnchorId(instanceId, schema.rules)
    setSelectedId(instanceId)
    setActiveReadingId(instanceId)
    programmaticScrollRef.current = true
    refs.current[anchorId]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    window.setTimeout(() => {
      programmaticScrollRef.current = false
    }, 500)
  }

  if (loadError) {
    return (
      <div className="glass-panel rounded-xl p-6 text-sm text-error">
        {loadError}
      </div>
    )
  }

  if (!model) {
    return (
      <div className="glass-panel rounded-xl p-6 text-sm text-on-surface-variant">
        正在读取 design-schema...
      </div>
    )
  }

  return (
    <div className="min-h-full theme-dark text-on-surface">
      {!hideHeader && (
        <div className="mb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
                <span>知识库</span>
                <span>/</span>
                <span>组件库</span>
                <span>/</span>
                <span className="text-on-surface">商详场域阅览</span>
              </div>
              <h2 className="text-2xl font-bold">商详场域组件库可交互阅览</h2>
              <p className="text-sm text-on-surface-variant mt-2">
                由 design-schema 公共命名、展示规则资产和规范文档索引驱动，只读查看商详楼层展示关系。
              </p>
            </div>
            <SchemaStats stats={model.stats} />
          </div>
        </div>
      )}

      <div className="space-y-4">
        {hideHeader && (
          <div className="flex justify-start">
            <SchemaStats stats={model.stats} />
          </div>
        )}
        <div>
          <div className="inline-flex rounded-lg bg-surface-container-high/40 border border-outline-variant/25 p-1">
            <button
              type="button"
              onClick={handleGeneralTab}
              className={`h-9 px-5 rounded-md text-sm transition-colors ${primaryTab === 'general' ? 'bg-primary/15 text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              通用
            </button>
            <button
              type="button"
              onClick={handleBusinessTab}
              className={`h-9 px-5 rounded-md text-sm transition-colors ${primaryTab === 'business' ? 'bg-primary/15 text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              事业群
            </button>
          </div>

          {primaryTab === 'business' && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                {Object.entries(model.businessItems).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedBusiness(key)}
                    className={`h-8 px-3 rounded-lg border text-xs transition-colors ${selectedBusiness === key ? 'border-secondary/30 bg-secondary/15 text-secondary' : 'border-outline-variant/25 bg-surface-container-high/40 text-on-surface-variant hover:text-on-surface hover:border-outline-variant/50'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {!selectedBusiness && (
                <div className="mt-3 text-xs text-on-surface-variant">
                  请选择具体事业群查看垂类楼层；未选择时仍保持通用楼层展示。
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[423px_minmax(0,1fr)] gap-4">
          <PreviewPane
            visible={model.visible}
            rules={schema.rules}
            hoveredId={hoveredId}
            selectedId={selectedId}
            activeReadingId={activeReadingId}
            setHoveredId={setHoveredId}
            onSelect={handleSelectInstance}
            refs={refs}
            scrollRef={previewScrollRef}
          />
          <LayerIndex
            visible={model.visible}
            hidden={model.hidden}
            hoveredId={hoveredId}
            selectedId={selectedId}
            activeReadingId={activeReadingId}
            indexRefs={indexRefs}
            ytypeLabelMap={model.ytypeLabelMap}
            xtypeLabelMap={model.xtypeLabelMap}
            onSelect={handleSelectInstance}
          />
        </div>

        {selected && (
          <DetailDrawer
            selected={selected}
            rules={schema.rules}
            ytypeLabelMap={model.ytypeLabelMap}
            xtypeLabelMap={model.xtypeLabelMap}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </div>
  )
}

function PreviewPane({ visible, rules, hoveredId, selectedId, activeReadingId, setHoveredId, onSelect, refs, scrollRef }) {
  const [isPreviewScrolling, setIsPreviewScrolling] = useState(false)
  const previewScrollTimerRef = useRef(null)
  const previewLayout = buildPreviewLayout(visible, rules)
  const blocks = buildPreviewBlocks(previewLayout.scrollItems, rules)

  const handlePreviewScroll = () => {
    setIsPreviewScrolling(true)
    if (previewScrollTimerRef.current) window.clearTimeout(previewScrollTimerRef.current)
    previewScrollTimerRef.current = window.setTimeout(() => {
      setIsPreviewScrolling(false)
    }, 900)
  }

  const renderFloor = (item, options = {}) => {
    const active = selectedId === item.instanceId
    const reading = activeReadingId === item.instanceId
    const hovered = hoveredId === item.instanceId
    return (
      <button
        key={item.instanceId}
        data-instance-id={item.instanceId}
        ref={(node) => { refs.current[item.instanceId] = node }}
        type="button"
        onMouseEnter={() => setHoveredId(item.instanceId)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={() => onSelect(item.instanceId)}
        className={getPreviewItemClassName({ item, active, reading, hovered, overlay: options.overlay })}
        style={options.style}
      >
        {item.img ? (
          <>
            <img
              src={item.img}
              alt={item.standardName}
              className={options.fixedSize ? 'block w-full h-full object-fill' : 'block w-full h-auto'}
            />
            <PreviewStateOverlay item={item} active={active} hovered={hovered} />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold">{item.standardName}</span>
              <span className="text-[10px] text-slate-500">{item.instanceId}</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">{item.displayReason}</div>
            <div className="mt-2 text-xs text-slate-600 rounded-lg bg-slate-50 px-2 py-1.5">
              {item.samples[0]?.content || '真实商详内容样例待补充'}
            </div>
          </>
        )}
      </button>
    )
  }

  return (
    <section className="glass-panel rounded-xl p-4 min-h-[620px] w-full lg:w-[423px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-semibold">真实内容阅览区</div>
          <div className="text-xs text-on-surface-variant mt-1">仅展示当前规则命中的楼层</div>
        </div>
        <span className="text-xs text-primary bg-primary/10 rounded-lg px-2 py-1">只读模式</span>
      </div>
      <div className="relative w-[375px] h-[812px] mx-auto rounded-2xl bg-[#f5f6f8] text-slate-900 overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handlePreviewScroll}
            className={`preview-scroll h-full overflow-y-auto p-0 pb-[122px] ${isPreviewScrolling ? 'is-scrolling' : ''}`}
          >
            {blocks.map((block) => {
              if (block.type === 'layerGroup') {
                return (
                  <div key={block.key} className="relative w-full">
                    {renderFloor(block.base)}
                    {block.overlays.map(({ item, relation }) => (
                      <div
                        key={item.instanceId}
                        className={getOverlayPositionClassName(relation)}
                        style={getOverlayStyle(relation)}
                      >
                        {renderFloor(item, {
                          overlay: true,
                          fixedSize: hasOverlayFixedSize(relation),
                        })}
                      </div>
                    ))}
                  </div>
                )
              }
              return renderFloor(block.item)
            })}
          </div>
          {previewLayout.fixedBottomItems.length > 0 && (
            <div className="absolute left-0 right-0 bottom-0 z-40">
              {previewLayout.fixedBottomItems.map((item) => renderFloor(item, { fixed: true }))}
            </div>
          )}
      </div>
    </section>
  )
}

function SchemaStats({ stats }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-on-surface-variant">
      <span className="rounded-lg border border-secondary/20 bg-secondary/10 text-secondary px-2.5 py-1">Schema 已校验</span>
      <span>{stats.modules} 个模块</span>
      <span>/</span>
      <span>{stats.areas} 个区域</span>
      <span>/</span>
      <span>{stats.scenes} 个场景</span>
    </div>
  )
}

function PreviewStateOverlay({ item, active, hovered }) {
  if (!active && !hovered) return null

  return (
    <span
      className={`pointer-events-none absolute inset-0 z-30 flex items-center justify-center ${
        active
          ? 'bg-[#2563eb]/30 ring-2 ring-inset ring-[#2563eb]'
          : 'bg-slate-950/40 ring-2 ring-inset ring-[#22d3ee]'
      }`}
    >
      <span className="rounded-md bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
        {item.standardName}
      </span>
    </span>
  )
}

function LayerIndex({ visible, hidden, hoveredId, selectedId, activeReadingId, indexRefs, ytypeLabelMap, xtypeLabelMap, onSelect }) {
  return (
    <section className="glass-panel rounded-xl p-4 h-[716px] overflow-hidden flex flex-col">
      <div className="mb-4">
        <div className="text-sm font-semibold">楼层索引</div>
        <div className="text-xs text-on-surface-variant mt-1">
          展示 {visible.length} 个 / 隐藏 {hidden.length} 个
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2">
          {visible.map((item) => (
            <IndexItem
              key={item.instanceId}
              item={item}
              active={selectedId === item.instanceId}
              reading={activeReadingId === item.instanceId}
              hovered={hoveredId === item.instanceId}
              nodeRef={(node) => { indexRefs.current[item.instanceId] = node }}
              ytypeLabelMap={ytypeLabelMap}
              xtypeLabelMap={xtypeLabelMap}
              onClick={() => onSelect(item.instanceId)}
            />
          ))}
        </div>
        <div className="pt-3 mt-3 border-t border-outline-variant/35">
          <div className="text-xs font-semibold text-on-surface-variant mb-2">未展示说明</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2">
            {hidden.slice(0, 8).map((item) => (
              <IndexItem
                key={item.instanceId}
                item={item}
                muted
                nodeRef={(node) => { indexRefs.current[item.instanceId] = node }}
                ytypeLabelMap={ytypeLabelMap}
                xtypeLabelMap={xtypeLabelMap}
                onClick={() => onSelect(item.instanceId)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndexItem({ item, active, reading, hovered, muted, nodeRef, ytypeLabelMap, xtypeLabelMap, onClick }) {
  return (
    <button
      type="button"
      ref={nodeRef}
      onClick={onClick}
      className={`w-full min-h-[116px] rounded-lg border p-3 text-left transition-colors ${
        active
          ? 'border-primary bg-primary/10'
          : reading
            ? 'border-secondary/70 bg-secondary/10'
          : hovered
            ? 'border-primary/60 bg-surface-container-high/50'
            : muted
              ? 'border-outline-variant/20 bg-surface-container/30 opacity-70'
              : 'border-outline-variant/35 bg-surface-container/50 hover:border-primary/40'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">{item.standardName}</span>
        <span className="text-[10px] text-on-surface-variant">{item.instanceId}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        <Tag>{ytypeLabelMap[item.ytype] || item.ytype}</Tag>
        <Tag>{`横切：${xtypeLabelMap[item.xtype] || item.xtype}`}</Tag>
      </div>
      <div className="text-xs text-on-surface-variant leading-5 mt-2 line-clamp-2">{item.displayReason}</div>
    </button>
  )
}

function DetailDrawer({ selected, rules, ytypeLabelMap, xtypeLabelMap, onClose }) {
  const matchedRule = rules.find((rule) => rule.ruleId === selected.ruleId)
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="关闭详情遮罩"
        className="absolute inset-0 bg-black/45"
        onClick={onClose}
      />
      <aside className="drawer-panel relative w-[520px] max-w-[92vw] h-full glass-panel shadow-drawer overflow-y-auto p-5">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <div className="text-xs text-primary mb-1">二级详情抽屉</div>
            <h3 className="text-xl font-bold">{selected.standardName}</h3>
            <div className="text-xs text-on-surface-variant mt-1">{selected.instanceId}</div>
          </div>
          <button
            type="button"
            aria-label="关闭详情抽屉"
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant"
          >
            <Icon name="close" className="text-lg" />
          </button>
        </div>

        <DetailSection title="标准信息">
          <InfoRow label="层级" value={selected.depthName} />
          <InfoRow label="区域" value={selected.areaName} />
          <InfoRow label="Ytype" value={`${ytypeLabelMap[selected.ytype] || selected.ytype} / ${selected.ytype}`} />
          <InfoRow label="Xtype" value={`${xtypeLabelMap[selected.xtype] || selected.xtype} / ${selected.xtype}`} />
        </DetailSection>

        <DetailSection title="展示判断">
          <div className={`rounded-lg px-3 py-2 text-sm ${selected.visible ? 'bg-secondary/10 text-secondary' : 'bg-amber-300/10 text-amber-200'}`}>
            {selected.visible ? '当前展示' : '当前不展示'}
          </div>
          <p className="text-sm text-on-surface-variant leading-6 mt-3">{selected.displayReason}</p>
          {matchedRule && (
            <div className="mt-3 rounded-lg bg-surface-container-high/40 border border-outline-variant/35 p-3">
              <div className="text-xs text-on-surface-variant">命中规则</div>
              <div className="text-sm font-medium mt-1">{matchedRule.ruleName}</div>
              <div className="text-xs text-on-surface-variant leading-5 mt-1">{matchedRule.example}</div>
              {matchedRule.displayOrder?.length > 0 && (
                <div className="mt-3 border-t border-outline-variant/25 pt-3">
                  <div className="text-xs text-on-surface-variant mb-2">展示顺序</div>
                  <ol className="space-y-1.5">
                    {matchedRule.displayOrder.map((item, index) => (
                      <li key={`${item.instanceId}-${index}`} className="flex items-start gap-2 text-xs text-on-surface-variant leading-5">
                        <span className="mt-0.5 w-5 h-5 rounded bg-primary/10 text-primary inline-flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <span>
                          <span className="text-on-surface">{item.name}</span>
                          {item.placement && <span> · {item.placement}</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}
        </DetailSection>

        <DetailSection title="场景关联">
          {selected.scenes.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selected.scenes.map((scene) => <Tag key={scene.key}>{scene.label}</Tag>)}
            </div>
          ) : (
            <p className="text-sm text-on-surface-variant">暂无 scene 关联</p>
          )}
        </DetailSection>

        <DetailSection title="规范文档">
          {selected.docs.length > 0 ? (
            <div className="space-y-2">
              {selected.docs.map((doc) => (
                <div key={doc.docId} className="rounded-lg bg-surface-container-high/40 border border-outline-variant/35 p-3">
                  <div className="text-sm font-medium">{doc.title}</div>
                  <div className="text-xs text-on-surface-variant leading-5 mt-1">{doc.summary}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-on-surface-variant">暂无规范 MD 文档关联</p>
          )}
        </DetailSection>

        <DetailSection title="真实内容">
          {selected.samples.length > 0 ? (
            selected.samples.map((sample) => (
              <div key={sample.sampleId} className="rounded-lg bg-surface-container-high/40 border border-outline-variant/35 p-3">
                <div className="text-sm font-medium">{sample.title}</div>
                <div className="text-xs text-on-surface-variant leading-5 mt-1">{sample.content}</div>
              </div>
            ))
          ) : (
            <p className="text-sm text-on-surface-variant">真实内容样例待补充</p>
          )}
        </DetailSection>
      </aside>
    </div>
  )
}

function DetailSection({ title, children }) {
  return (
    <section className="mb-5">
      <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3">{title}</h4>
      {children}
    </section>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-outline-variant/25 text-sm last:border-b-0">
      <span className="text-on-surface-variant">{label}</span>
      <span className="text-on-surface text-right">{value}</span>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded bg-primary/10 text-primary px-1.5 py-0.5 text-[11px]">
      {children}
    </span>
  )
}

function normalizeInstances(instancesJson) {
  const result = []
  for (const depthKey of depthOrder) {
    const depth = instancesJson[depthKey]
    if (!depth) continue
    Object.entries(depth).forEach(([areaKey, area]) => {
      if (areaKey === 'label' || !Array.isArray(area.items)) return
      area.items.forEach((item, index) => {
        result.push({
          instanceId: item.id,
          standardName: item.name,
          depthKey,
          depthName: depth.label,
          areaKey,
          areaName: area.label,
          ytype: item.ytype,
          xtype: String(item.xtype),
          img: resolveAsset(item.img),
          order: index,
        })
      })
    })
  }
  return result
}

function getDisplayResult(instance, state) {
  if (instance.ytype === 'general') {
    return {
      visible: true,
      displayReason: '通用楼层，默认展示',
      ruleId: 'display-general-default',
    }
  }

  if (state.primaryTab !== 'business' || !state.selectedBusiness) {
    return {
      visible: false,
      displayReason: '事业群楼层，需选择具体事业群',
      ruleId: 'hide-business-before-selected',
    }
  }

  if (instance.ytype !== state.selectedBusiness) {
    return {
      visible: false,
      displayReason: '不属于当前事业群，不展示',
      ruleId: 'hide-other-business',
    }
  }

  if (String(instance.xtype) === '1') {
    return {
      visible: false,
      displayReason: '当前事业群命中，但 xtype = 1，不进入阅览区展示',
      ruleId: 'hide-business-xtype-cross',
    }
  }

  return {
    visible: true,
    displayReason: '当前事业群命中，且 xtype = 0',
    ruleId: 'display-business-with-general',
  }
}

function buildYtypeLabelMap(ytypeJson) {
  const map = { general: ytypeJson.general.label }
  Object.entries(ytypeJson.business.items).forEach(([key, item]) => {
    map[key] = item.label
  })
  return map
}

function buildXtypeLabelMap(xtypeJson) {
  return Object.fromEntries(
    Object.entries(xtypeJson)
      .filter(([key]) => !key.startsWith('_'))
      .map(([key, value]) => [key, value.label])
  )
}

function buildSceneIndex(sceneJson) {
  const index = {}
  for (const groupKey of ['strategies', 'bizScene']) {
    const group = sceneJson[groupKey]
    Object.entries(group).forEach(([key, scene]) => {
      if (key === 'label' || !Array.isArray(scene.instances)) return
      scene.instances.forEach((instanceId) => {
        if (!index[instanceId]) index[instanceId] = []
        index[instanceId].push({ key, label: scene.label, group: group.label })
      })
    })
  }
  return index
}

function countScenes(sceneJson) {
  return ['strategies', 'bizScene'].reduce((total, groupKey) => {
    return total + Object.entries(sceneJson[groupKey]).filter(([key]) => key !== 'label').length
  }, 0)
}

function sortByDisplayOrder(items, rules) {
  const bottomOrder = new Map([
    ['bottomTip', Number.MAX_SAFE_INTEGER - 1],
    ['bottomBar', Number.MAX_SAFE_INTEGER],
  ])
  const orderMap = new Map()
  rules
    .flatMap((rule) => rule.displayOrder || [])
    .forEach((item, index) => {
      if (!orderMap.has(item.instanceId)) orderMap.set(item.instanceId, index)
    })

  return [...items].sort((a, b) => {
    const aOrder = bottomOrder.has(a.instanceId)
      ? bottomOrder.get(a.instanceId)
      : orderMap.has(a.instanceId)
        ? orderMap.get(a.instanceId)
        : 10000
    const bOrder = bottomOrder.has(b.instanceId)
      ? bottomOrder.get(b.instanceId)
      : orderMap.has(b.instanceId)
        ? orderMap.get(b.instanceId)
        : 10000
    if (aOrder !== bOrder) return aOrder - bOrder
    if (a.depthKey !== b.depthKey) return depthOrder.indexOf(a.depthKey) - depthOrder.indexOf(b.depthKey)
    if (a.areaKey !== b.areaKey) return a.areaKey.localeCompare(b.areaKey)
    return a.order - b.order
  })
}

function buildPreviewLayout(items, rules) {
  const fixedLayerMap = new Map(getFixedLayers(rules).map((layer) => [layer.id, layer]))
  const fixedBottomItems = []
  const scrollItems = []

  items.forEach((item) => {
    const fixedLayer = fixedLayerMap.get(item.instanceId)
    if (fixedLayer?.position === 'bottom') {
      fixedBottomItems.push({ ...item, fixedOrder: fixedLayer.order ?? 0 })
    } else {
      scrollItems.push(item)
    }
  })

  fixedBottomItems.sort((a, b) => a.fixedOrder - b.fixedOrder)

  return {
    scrollItems,
    fixedBottomItems,
  }
}

function buildPreviewBlocks(items, rules) {
  const itemMap = new Map(items.map((item) => [item.instanceId, item]))
  const relationByBase = new Map()
  const overlayIds = new Set()

  getLayerRelations(rules).forEach((relation) => {
    const base = itemMap.get(relation.base)
    if (!base?.img || relationByBase.has(relation.base)) return
    const overlays = (relation.overlays || [])
      .map((overlay) => ({
        relation: overlay,
        item: itemMap.get(overlay.id),
      }))
      .filter(({ item }) => item?.img)

    if (!overlays.length) return
    overlays.forEach(({ item }) => overlayIds.add(item.instanceId))
    relationByBase.set(relation.base, { base, overlays })
  })

  return items.reduce((blocks, item) => {
    if (overlayIds.has(item.instanceId)) return blocks
    const layerGroup = relationByBase.get(item.instanceId)
    if (layerGroup) {
      blocks.push({
        type: 'layerGroup',
        key: `${item.instanceId}-layer`,
        ...layerGroup,
      })
    } else {
      blocks.push({
        type: 'floor',
        key: item.instanceId,
        item,
      })
    }
    return blocks
  }, [])
}

function isFixedPreviewLayer(instanceId, rules) {
  return getFixedLayers(rules).some((layer) => layer.id === instanceId)
}

function getFixedLayers(rules) {
  const seen = new Set()
  return rules.flatMap((rule) => rule.fixedLayers || []).filter((layer) => {
    if (seen.has(layer.id)) return false
    seen.add(layer.id)
    return true
  })
}

function getPreviewAnchorId(instanceId, rules) {
  const relation = getLayerRelations(rules).find((item) => {
    return (item.overlays || []).some((overlay) => overlay.id === instanceId)
  })
  return relation?.base || instanceId
}

function getLayerRelations(rules) {
  const seen = new Set()
  return rules.flatMap((rule) => rule.layerRelations || []).filter((relation) => {
    const overlayKey = (relation.overlays || []).map((overlay) => overlay.id).join(',')
    const key = `${relation.base}:${overlayKey}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function getPreviewItemClassName({ item, active, reading, hovered, overlay }) {
  if (item.img) {
    const stateClassName = active
      ? 'ring-2 ring-inset ring-[#2563eb]'
      : reading
        ? 'ring-2 ring-inset ring-[#10b981]'
      : hovered
        ? 'ring-2 ring-inset ring-[#22d3ee]'
        : ''
    return `relative w-full text-left block bg-transparent p-0 transition-all focus:outline-none ${stateClassName}`
  }

  const stateClassName = active
    ? 'border-[#2563eb] shadow-[0_0_0_3px_rgba(37,99,235,0.16)]'
    : reading
      ? 'border-[#10b981] shadow-[0_0_0_2px_rgba(16,185,129,0.14)]'
    : hovered
      ? 'border-[#22d3ee] shadow-[0_0_0_2px_rgba(34,211,238,0.16)]'
      : 'border-slate-200'
  return `w-full text-left bg-white border transition-all p-3 focus:outline-none ${stateClassName}`
}

function getOverlayPositionClassName(relation) {
  if (relation.position === 'absolute') return 'absolute z-20'
  if (relation.position === 'top-right') return 'absolute top-0 right-0 z-20'
  if (relation.position === 'top') return 'absolute top-0 left-0 right-0 z-10'
  return 'absolute top-0 left-0 z-10'
}

function getOverlayStyle(relation) {
  if (relation.position === 'absolute') {
    const style = {}
    for (const key of ['top', 'right', 'bottom', 'left']) {
      if (relation.offset?.[key] != null) style[key] = `${relation.offset[key]}px`
    }
    if (relation.size?.width != null) style.width = `${relation.size.width}px`
    if (relation.size?.height != null) style.height = `${relation.size.height}px`
    return style
  }
  if (relation.widthRatio) return { width: `${relation.widthRatio * 100}%` }
  return undefined
}

function hasOverlayFixedSize(relation) {
  return relation.size?.width != null || relation.size?.height != null
}
