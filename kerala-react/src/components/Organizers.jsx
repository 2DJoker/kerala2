const PEOPLE = [
  {
    photo: 'https://res.cloudinary.com/dndorvlpa/image/upload/v1776080413/kxem3q7dpkjsykjp1j5w.png',
    name: 'Чанди Омен',
    role: 'Руководитель программы',
    desc: 'Координатор международного направления, представитель штата Керала.',
    color: '#15803d',
    photoStyle: { transform: 'scale(0.78)', transformOrigin: 'center center' },
  },
  {
    photo: 'https://res.cloudinary.com/dndorvlpa/image/upload/v1776067273/jm8ogcrfonia9pnxties.png',
    name: 'Дмитрий Кузнецов',
    role: 'Руководитель делегации',
    desc: 'Организатор форумов БРИКС, эксперт в сфере международного сотрудничества.',
    color: '#1d4ed8',
    photoStyle: { objectPosition: '40% 10%' },
    photoClass: 'org-photo-dmitry',
  },
  {
    photo: 'https://res.cloudinary.com/dndorvlpa/image/upload/v1776066947/bxhdgyzc4fuafkbwo8qy.png',
    name: 'Мария Марьясова',
    role: 'Программный директор',
    desc: 'Специалист в области превентивной медицины и wellness-индустрии.',
    color: '#dc2626',
  },
  {
    photo: 'https://res.cloudinary.com/dndorvlpa/image/upload/v1776066953/esv0ccgaiqpx3bsol7yw.png',
    name: 'Владимир Зуев',
    role: 'Стратегический советник',
    desc: 'Эксперт в области медицинского туризма и инвестиций в оздоровительную инфраструктуру.',
    color: '#b45309',
  },
]

export default function Organizers() {
  return (
    <section id="organizers" style={{ padding: '7rem 5rem', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(74,124,63,.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-strip">
            <span className="strip-green" /><span className="strip-blue" /><span className="strip-red" /><span className="strip-yellow" />
          </div>
          <span className="section-tag">Команда</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Организаторы</h2>
        </div>

        <div className="organizers-grid">
          {PEOPLE.map((p, i) => (
            <div
              className="org-card reveal"
              key={p.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="org-avatar org-avatar--photo">
                <img src={p.photo} alt={p.name} style={p.photoStyle || {}} className={p.photoClass || ''} />
              </div>
              <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${p.color}, var(--gold2))`, borderRadius: 2, margin: '1.4rem auto .8rem' }} />
              <div className="org-name">{p.name}</div>
              <div className="org-role">{p.role}</div>
              <div className="org-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
