import { useRef, useCallback } from 'react'

const CARDS = [
  { img: '471586196_10165488629073849_5869490648229420148_n.jpg', tag: 'Культура', title: 'Традиции Кералы' },
  { img: '486613485_1153659666805969_91478250888743607_n.jpg', tag: 'Площадка', title: 'Kumarakom Lake Resort' },
  { img: '487416550_1153947816777154_8235584851956403501_n.jpg', tag: 'Атмосфера', title: 'Ресторан на воде' },
  { img: '488192955_1156810446490891_9220028367130614272_n.jpg', tag: 'Размещение', title: 'Премиум-виллы' },
  { img: '534381667_18494206549067197_5549747777762738054_n.jpg', tag: 'Природа', title: 'Озеро Вембанад' },
  { img: '535015355_18494206507067197_837972879471719389_n.jpg', tag: 'Природа', title: 'Водный рай Кералы' },
  { img: '491461530_18474024205067197_8295436087009573318_n.jpg', tag: 'Инфраструктура', title: 'Бассейны и спа' },
]

export default function Kerala() {
  const scrollRef = useRef(null)
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = useCallback(e => {
    drag.current = { down: true, startX: e.pageX - scrollRef.current.offsetLeft, scrollLeft: scrollRef.current.scrollLeft }
    scrollRef.current.classList.add('dragging')
  }, [])

  const onMouseLeave = useCallback(() => {
    drag.current.down = false
    scrollRef.current?.classList.remove('dragging')
  }, [])

  const onMouseUp = useCallback(() => {
    drag.current.down = false
    scrollRef.current?.classList.remove('dragging')
  }, [])

  const onMouseMove = useCallback(e => {
    if (!drag.current.down) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - drag.current.startX) * 1.5
    scrollRef.current.scrollLeft = drag.current.scrollLeft - walk
  }, [])

  const onTouchStart = useCallback(e => {
    drag.current = {
      down: true,
      startX: e.touches[0].pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    }
  }, [])

  const onTouchMove = useCallback(e => {
    if (!drag.current.down) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - drag.current.startX) * 1
    scrollRef.current.scrollLeft = drag.current.scrollLeft - walk
  }, [])

  const onTouchEnd = useCallback(() => {
    drag.current.down = false
  }, [])

  return (
    <section id="kerala">
      <div className="kerala-header reveal">
        <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>Место проведения</span>
        <h2 className="section-title" style={{ color: '#fff', textAlign: 'center' }}>Кумараком, Керала</h2>
        <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)', marginTop: '1rem', fontWeight: 300, letterSpacing: '.1em', textAlign: 'center' }}>
          Коттаям · Озеро Вембанад · Kumarakom Lake Resort
        </p>
      </div>

      <div
        className="kerala-scroll"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {CARDS.map((c, i) => (
          <div className="kerala-card" key={i}>
            <img src={`/img/${c.img}`} alt={c.title} loading="lazy" draggable={false} />
            <div className="kerala-caption">
              <div className="kerala-cap-tag">{c.tag}</div>
              <div className="kerala-cap-title">{c.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
