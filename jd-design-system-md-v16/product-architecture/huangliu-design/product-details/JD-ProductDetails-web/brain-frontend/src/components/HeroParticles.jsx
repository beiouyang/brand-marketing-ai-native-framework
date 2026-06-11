import { useEffect, useRef } from 'react'

/**
 * 流场粒子动画（参考 trae.cn hero）
 * 青(#22d3ee) → 绿(#43fb95) 发光粒子沿伪噪声流场飘动，带拖尾。
 * 自适应父容器尺寸，建议放在一个 overflow-hidden 的相对/绝对容器内。
 */
export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    let t = 0
    let w = 0
    let h = 0
    let particles = []
    const COUNT = 170

    const resize = () => {
      const parent = canvas.parentElement
      w = parent?.clientWidth || 400
      h = parent?.clientHeight || 300
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#0c1324'
      ctx.fillRect(0, 0, w, h)
    }

    const reset = (p, spawn = false) => {
      p.x = spawn ? Math.random() * w : w * (0.15 + Math.random() * 0.85)
      p.y = Math.random() * h
      p.life = 0
      p.maxLife = 120 + Math.random() * 160
      p.speed = 0.35 + Math.random() * 0.95
      p.hue = Math.random()
      return p
    }

    particles = Array.from({ length: COUNT }, () => reset({}, true))

    // 伪噪声流场：多层正弦叠加得到角度
    const field = (x, y, time) => {
      const a = Math.sin(x * 0.0065 + time * 0.0009) + Math.cos(y * 0.0072 - time * 0.0012)
      const b = Math.sin((x + y) * 0.0038 + time * 0.0007)
      return (a + b) * Math.PI
    }

    const tick = () => {
      t += 1
      // 半透明叠加形成拖尾
      ctx.fillStyle = 'rgba(12, 19, 36, 0.10)'
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      ctx.lineWidth = 1.3

      for (const p of particles) {
        const ang = field(p.x, p.y, t)
        const px = p.x
        const py = p.y
        p.x += Math.cos(ang) * p.speed
        p.y += Math.sin(ang) * p.speed
        p.life += 1

        const ratio = p.life / p.maxLife
        const alpha = Math.sin(ratio * Math.PI) * 0.55
        const r = Math.round(34 + (67 - 34) * p.hue)
        const g = Math.round(211 + (251 - 211) * p.hue)
        const b = Math.round(238 + (149 - 238) * p.hue)

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()

        if (p.life > p.maxLife || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
          reset(p)
        }
      }

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="block w-full h-full" />
}
