import { useRef, useCallback } from 'react'

const GOALS = [
  {
    icon: 'fa-circle-nodes',
    title: 'Интеграция традиционных систем',
    desc: 'Аюрведа, сиддха, адыгские практики и традиционная китайская медицина — в современное здравоохранение.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Стандартизация и качество',
    desc: 'Стандартизация и обеспечение качества традиционной и превентивной медицины на международном уровне.',
  },
  {
    icon: 'fa-plane',
    title: 'Медицинский туризм',
    desc: 'Развитие международного wellness‑ и медицинского туризма как стратегического направления БРИКС.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Привлечение инвестиций',
    desc: 'Инвестиции в инфраструктуру оздоровительных центров и хабов интегративной медицины.',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Подготовка кадров',
    desc: 'Подготовка кадров и научное сопровождение интегративной медицины — совместные исследования.',
  },
  {
    icon: 'fa-briefcase',
    title: 'B2B-взаимодействие',
    desc: 'Производители, клиники, санатории и туроператоры — для развития совместного бизнеса.',
  },
]

export default function Goals() {
  const ref = useRef(null)
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = useCallback(e => {
    drag.current = { down: true, startX: e.pageX - ref.current.offsetLeft, scrollLeft: ref.current.scrollLeft }
    ref.current.classList.add('dragging')
  }, [])
  const onMouseLeave = useCallback(() => { drag.current.down = false; ref.current?.classList.remove('dragging') }, [])
  const onMouseUp = useCallback(() => { drag.current.down = false; ref.current?.classList.remove('dragging') }, [])
  const onMouseMove = useCallback(e => {
    if (!drag.current.down) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.4
  }, [])

  return (
    <section id="reviews" style={{
      padding: '7rem 0',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #162010 0%, #0b1208 100%)',
    }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,124,63,.1) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 5rem', marginBottom: '3rem', position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag">Зачем это нужно</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Цели конференции</h2>
        </div>
      </div>

      {/* Горизонтальная лента — desktop и мобайл */}
      <div
        className="goals-scroll kerala-scroll"
        ref={ref}
        style={{ padding: '0 5rem 1.5rem' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {GOALS.map((g, i) => (
          <div
            className="goal-card"
            key={g.title}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="goal-icon">
              <i className={`fas ${g.icon}`} />
            </div>
            <div className="goal-title">{g.title}</div>
            <div className="goal-desc">{g.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
