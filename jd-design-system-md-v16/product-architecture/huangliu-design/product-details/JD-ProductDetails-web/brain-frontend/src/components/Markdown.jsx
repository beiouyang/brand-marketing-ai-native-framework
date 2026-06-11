/* 轻量无依赖 Markdown 渲染器（深色主题），用于设计知识库文档展示。
   支持：frontmatter、标题、段落、列表、表格、引用、代码块、行内代码、加粗、链接、分隔线。*/

function splitFrontmatter(src) {
  if (!src.startsWith('---')) return { meta: [], body: src }
  const end = src.indexOf('\n---', 3)
  if (end === -1) return { meta: [], body: src }
  const raw = src.slice(3, end).trim()
  const body = src.slice(end + 4).replace(/^\s*\n/, '')
  const meta = []
  for (const line of raw.split('\n')) {
    const m = /^([a-zA-Z_]+):\s*(.*)$/.exec(line)
    if (m && m[2]) meta.push({ key: m[1], value: m[2] })
  }
  return { meta, body }
}

function renderInline(text, kp) {
  const patterns = [
    { re: /`([^`]+)`/, render: (m, k) => <code key={k} className="px-1.5 py-0.5 rounded bg-surface-container-highest/70 text-primary text-[0.85em] font-mono">{m[1]}</code> },
    { re: /\*\*([^*]+)\*\*/, render: (m, k) => <strong key={k} className="font-semibold text-white">{renderInline(m[1], k + 'b')}</strong> },
    { re: /\[([^\]]+)\]\(([^)]+)\)/, render: (m, k) => <a key={k} href={m[2]} target="_blank" rel="noreferrer" className="text-primary underline decoration-primary/40 hover:decoration-primary break-all">{m[1]}</a> },
  ]
  const nodes = []
  let rest = text
  let i = 0
  while (rest) {
    let best = null
    for (const p of patterns) {
      const m = p.re.exec(rest)
      if (m && (best === null || m.index < best.m.index)) best = { p, m }
    }
    if (!best) { nodes.push(rest); break }
    if (best.m.index > 0) nodes.push(rest.slice(0, best.m.index))
    nodes.push(best.p.render(best.m, `${kp}-${i++}`))
    rest = rest.slice(best.m.index + best.m[0].length)
  }
  return nodes
}

const isTableSep = (line) => /^\|?[\s:|-]+\|?$/.test(line) && line.includes('-')
const splitRow = (line) => line.replace(/^\||\|$/g, '').split('|').map(c => c.trim())

export default function Markdown({ text }) {
  const { meta, body } = splitFrontmatter(text || '')
  const lines = body.replace(/\r\n/g, '\n').split('\n')
  const blocks = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // 代码块
    if (/^```/.test(line)) {
      const buf = []
      i++
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++ }
      i++
      blocks.push(
        <pre key={key++} className="my-3 p-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 overflow-x-auto text-xs font-mono text-on-surface-variant leading-relaxed">
          <code>{buf.join('\n')}</code>
        </pre>
      )
      continue
    }

    // 空行
    if (line.trim() === '') { i++; continue }

    // 标题
    const h = /^(#{1,6})\s+(.*)$/.exec(line)
    if (h) {
      const level = h[1].length
      const cls = {
        1: 'text-2xl font-bold text-white mt-2 mb-4',
        2: 'text-xl font-bold text-white mt-7 mb-3 pb-2 border-b border-outline-variant/30',
        3: 'text-base font-semibold text-primary mt-5 mb-2',
        4: 'text-sm font-semibold text-on-surface mt-4 mb-2',
        5: 'text-sm font-semibold text-on-surface-variant mt-3 mb-1',
        6: 'text-xs font-semibold text-on-surface-variant mt-3 mb-1',
      }[level]
      const Tag = `h${level}`
      blocks.push(<Tag key={key++} className={cls}>{renderInline(h[2], `h${key}`)}</Tag>)
      i++
      continue
    }

    // 分隔线
    if (/^(\*\*\*|---|___)\s*$/.test(line)) {
      blocks.push(<hr key={key++} className="my-6 border-outline-variant/30" />)
      i++
      continue
    }

    // 表格
    if (line.includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitRow(line)
      i += 2
      const rows = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]))
        i++
      }
      blocks.push(
        <div key={key++} className="my-4 overflow-x-auto rounded-lg border border-outline-variant/30">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-surface-container-high/50">
              <tr>{header.map((c, ci) => <th key={ci} className="px-3 py-2 font-semibold text-on-surface border-b border-outline-variant/30 whitespace-nowrap">{renderInline(c, `th${key}-${ci}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="even:bg-surface-container-low/30">
                  {r.map((c, ci) => <td key={ci} className="px-3 py-2 align-top text-on-surface-variant border-b border-outline-variant/20">{renderInline(c, `td${key}-${ri}-${ci}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    // 引用块
    if (/^>\s?/.test(line)) {
      const buf = []
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++ }
      blocks.push(
        <blockquote key={key++} className="my-3 pl-4 border-l-2 border-primary/50 text-on-surface-variant/90 text-sm italic">
          {buf.map((b, bi) => <p key={bi} className="my-0.5">{renderInline(b, `q${key}-${bi}`)}</p>)}
        </blockquote>
      )
      continue
    }

    // 列表
    if (/^\s*([-*+]|\d+\.)\s+/.test(line)) {
      const items = []
      const ordered = /^\s*\d+\.\s+/.test(line)
      while (i < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i])) {
        const indent = (/^(\s*)/.exec(lines[i])[1] || '').length
        const content = lines[i].replace(/^\s*([-*+]|\d+\.)\s+/, '')
        items.push({ indent, content })
        i++
      }
      const Tag = ordered ? 'ol' : 'ul'
      blocks.push(
        <Tag key={key++} className={`my-3 space-y-1.5 text-sm text-on-surface-variant ${ordered ? 'list-decimal' : 'list-disc'} pl-5`}>
          {items.map((it, ii) => (
            <li key={ii} style={it.indent >= 2 ? { marginLeft: `${(it.indent / 2) * 0.9}rem` } : undefined} className="leading-relaxed">
              {renderInline(it.content, `li${key}-${ii}`)}
            </li>
          ))}
        </Tag>
      )
      continue
    }

    // 段落（合并连续非空、非块级行）
    const buf = [line]
    i++
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,6})\s/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\s*([-*+]|\d+\.)\s+/.test(lines[i]) &&
      !/^(\*\*\*|---|___)\s*$/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) {
      buf.push(lines[i]); i++
    }
    blocks.push(
      <p key={key++} className="my-2.5 text-sm text-on-surface-variant leading-7">
        {renderInline(buf.join(' '), `p${key}`)}
      </p>
    )
  }

  return (
    <div>
      {meta.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {meta.map((m, mi) => (
            <span key={mi} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high/60 border border-outline-variant/30 text-[11px] text-on-surface-variant">
              <span className="text-on-surface-variant/60">{m.key}</span>
              <span className="text-on-surface">{m.value.length > 60 ? m.value.slice(0, 60) + '…' : m.value}</span>
            </span>
          ))}
        </div>
      )}
      {blocks}
    </div>
  )
}
