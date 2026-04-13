import { useRef, useCallback } from 'react'

// 12 фото — разбиваем на 2 ряда по 6
const ROW1 = [
  'IMG-20250916-WA0034.jpg',
  'IMG-20250916-WA0035.jpg',
  'IMG-20250916-WA0039.jpg',
  'IMG-20250916-WA0051.jpg',
  'IMG-20250916-WA0078.jpg',
  'IMG-20250916-WA0079.jpg',
]
const ROW2 = [
  'IMG-20250916-WA0104.jpg',
  'IMG-20250916-WA0107.jpg',
  'IMG-20250916-WA0184.jpg',
  'IMG-20250916-WA0186.jpg',
  'IMG-20250916-WA0187.jpg',
  'IMG-20250916-WA0029.jpg',
]

function ScrollRow({ photos }) {
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
    <div
      className="forum-scroll-row kerala-scroll"
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {photos.map((file, i) => (
        <div className="forum-scroll-card" key={i}>
          <img src={`/img2/${file}`} alt="" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  )
}

export default function ForumGallery() {
  return (
    <section id="forum" style={{ padding: '7rem 0', background: 'var(--dark2)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 80% 50%,rgba(74,124,63,.07) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 5rem', marginBottom: '3rem' }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag">История мероприятий</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Форум БРИКС — Бразилия 2025</h2>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.35)', marginTop: '1rem', fontWeight: 300, letterSpacing: '.08em' }}>
            II BRICS Forum · Traditional Values · Бразилиа, сентябрь 2025
          </p>
        </div>
      </div>

      {/* Ряд 1 */}
      <ScrollRow photos={ROW1} />
      {/* Ряд 2 */}
      <div style={{ marginTop: '1rem' }}>
        <ScrollRow photos={ROW2} />
      </div>
    </section>
  )
}
