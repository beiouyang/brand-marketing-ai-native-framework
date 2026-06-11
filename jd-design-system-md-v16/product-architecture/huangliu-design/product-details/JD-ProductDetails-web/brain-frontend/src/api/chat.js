/** 流式对话：SSE events = sources | delta | error | done */
export async function streamChat({ message, history, signal, onSources, onDelta, onError, onDone }) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
    signal,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `HTTP ${res.status}`)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buf = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += decoder.decode(value, { stream: true })
    const blocks = buf.split('\n\n')
    buf = blocks.pop() || ''

    for (const block of blocks) {
      let event = 'message'
      let data = ''
      for (const line of block.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim()
        else if (line.startsWith('data:')) data = line.slice(5).trim()
      }
      if (!data) continue
      try {
        const payload = JSON.parse(data)
        if (event === 'sources') onSources?.(payload)
        else if (event === 'delta') onDelta?.(payload.text || '')
        else if (event === 'error') onError?.(payload.message || '未知错误')
        else if (event === 'done') onDone?.()
      } catch { /* ignore */ }
    }
  }
  onDone?.()
}

export async function checkChatHealth() {
  const res = await fetch('/api/health')
  if (!res.ok) return { ok: false }
  return res.json()
}
