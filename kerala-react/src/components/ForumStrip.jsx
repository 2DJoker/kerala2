import { useRef, useCallback } from 'react'

const PHOTOS = [
  'IMG-20250916-WA0029.jpg',
  'IMG-20250916-WA0034.jpg',
  'IMG-20250916-WA0035.jpg',
  'IMG-20250916-WA0037.jpg',
  'IMG-20250916-WA0039.jpg',
  'IMG-20250916-WA0051.jpg',
  'IMG-20250916-WA0078.jpg',
  'IMG-20250916-WA0079.jpg',
  'IMG-20250916-WA0089.jpg',
  'IMG-20250916-WA0090.jpg',
  'IMG-20250916-WA0104.jpg',
  'IMG-20250916-WA0107.jpg',
  'IMG-20250916-WA0184.jpg',
  'IMG-20250916-WA0186.jpg',
  'IMG-20250916-WA0187.jpg',
]

function useDrag(ref) {
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = useCallback(e => {
    drag.current = { down: true, startX: e.pageX - ref.current.offsetLeft, scrollLeft: ref.current.scrollLeft }
    ref.current.classList.add('dragging')
  }, [ref])
  const onMouseLeave = useCallback(() => { drag.current.down = false; ref.current?.classList.remove('dragging') }, [ref])
  const onMouseUp = useCallback(() => { drag.current.down = false; ref.current?.classList.remove('dragging') }, [ref])
  const onMouseMove = useCallback(e => {
    if (!drag.current.down) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.4
  }, [ref])
  const onTouchStart = useCallback(e => {
    drag.current = { down: true, startX: e.touches[0].pageX - ref.current.offsetLeft, scrollLeft: ref.current.scrollLeft }
  }, [ref])
  const onTouchMove = useCallback(e => {
    if (!drag.current.down) return
    const x = e.touches[0].pageX - ref.current.offsetLeft
    ref.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX)
  }, [ref])
  const onTouchEnd = useCallback(() => { drag.current.down = false }, [])

  return { onMouseDown, onMouseLeave, onMouseUp, onMouseMove, onTouchStart, onTouchMove, onTouchEnd }
}

export default function ForumStrip() {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  const row1Handlers = useDrag(row1Ref)
  const row2Handlers = useDrag(row2Ref)

  const mid = Math.ceil(PHOTOS.length / 2)
  const row1 = PHOTOS.slice(0, mid)
  const row2 = PHOTOS.slice(mid)

  return (
    <section id="forum">
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34,197,94,.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="forum-header reveal" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 5rem', textAlign: 'center', marginBottom: '3.5rem' }}>
        <div className="section-strip">
          <span className="strip-green" /><span className="strip-yellow" /><span className="strip-red" /><span className="strip-blue" />
        </div>
        <span className="section-tag">Фотохроника</span>
        <h2 className="section-title" style={{ color: '#fff' }}>Форум БРИКС 2025</h2>
        <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.38)', marginTop: '.8rem', fontWeight: 300, letterSpacing: '.06em' }}>
          Листайте вправо — перетащите или смахните
        </p>
      </div>

      {/* Первый ряд */}
      <div
        className="forum-strip-row"
        ref={row1Ref}
        {...row1Handlers}
      >
        {row1.map((img, i) => (
          <div className="forum-strip-card" key={i}>
            <img src={`/img2/${img}`} alt="Форум БРИКС 2025" loading="lazy" draggable={false} />
          </div>
        ))}
      </div>

      {/* Второй ряд (смещён для эффекта) */}
      <div
        className="forum-strip-row forum-strip-row--offset"
        ref={row2Ref}
        {...row2Handlers}
      >
        {row2.map((img, i) => (
          <div className="forum-strip-card" key={i}>
            <img src={`/img2/${img}`} alt="Форум БРИКС 2025" loading="lazy" draggable={false} />
          </div>
        ))}
      </div>
    </section>
  )
}
