import ComponentSchemaBrowser from './ComponentSchemaBrowser'

export default function ComponentLibrary() {
  return (
    <div className="p-6 min-h-full bg-transparent theme-dark">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-1">
          <span>知识库</span>
          <span>/</span>
          <span className="text-on-surface">组件库</span>
        </div>
        <h1 className="text-2xl font-bold text-on-surface mt-1">组件库</h1>
        <p className="text-sm text-on-surface-variant mt-1">
          由 design-schema 公共命名、展示规则资产和规范文档索引驱动，只读查看商详楼层展示关系。
        </p>
      </div>

      <ComponentSchemaBrowser hideHeader />
    </div>
  )
}
