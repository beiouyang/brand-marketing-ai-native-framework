const BASE = import.meta.env.BASE_URL || '/'

// 直接全屏嵌入「设计案例库」预览门户（自带搜索 / 功能区 / 标签筛选 / 案例详情）
export default function KnowledgeBase() {
  const src = encodeURI(`${BASE}design-kb/knowledge/preview/library.html`)
  return (
    <div className="h-full w-full bg-background theme-dark">
      <iframe
        src={src}
        title="设计知识库"
        className="w-full h-full border-0"
        allow="clipboard-read; clipboard-write"
      />
    </div>
  )
}
