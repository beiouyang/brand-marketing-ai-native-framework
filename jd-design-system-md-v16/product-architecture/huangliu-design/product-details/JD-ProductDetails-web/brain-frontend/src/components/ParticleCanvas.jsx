import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const count = 100
    const connectDist = 150
    const mouseRadius = 120
    let particles = []
    let raf = 0

    class Particle {
      constructor() { this.init() }
      init() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.size = Math.random() * 1.5 + 0.5
      }
      update() {
        const { x: mx, y: my } = mouseRef.current
        if (mx != null) {
          const dx = mx - this.x
          const dy = my - this.y
          const dist = Math.hypot(dx, dy)
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius
            this.vx -= (dx / dist) * force * 0.05
            this.vy -= (dy / dist) * force * 0.05
          }
        }
        this.x += this.vx
        this.y += this.vy
        this.vx *= 0.99
        this.vy *= 0.99
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }
      draw() {
        ctx.fillStyle = '#22d3ee'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resize = () => {
      const parent = canvas.parentElement
      canvas.width = parent?.clientWidth || window.innerWidth
      canvas.height = parent?.clientHeight || window.innerHeight
      particles = Array.from({ length: count }, () => new Particle())
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < connectDist) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - dist / connectDist)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0c1324' }}
    />
  )
}
