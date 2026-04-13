const PARTNERS = [
  { name: 'ТАСС',     desc: 'Информационный партнёр', icon: 'fa-newspaper' },
  { name: 'ТВ БРИКС', desc: 'Медиапартнёр',           icon: 'fa-tv' },
]

export default function Partners() {
  return (
    <section id="partners" style={{ padding: '6rem 5rem', background: 'var(--cream2)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Партнёры</span>
          <h2 className="section-title">Партнёры конференции</h2>
          <div className="divider" style={{ margin: '1.8rem auto' }} />
        </div>

        <div className="reveal partners-cards" style={{ transitionDelay: '.1s' }}>
          {PARTNERS.map(p => (
            <div key={p.name} className="partner-card">
              <div className="partner-icon">
                <i className={`fas ${p.icon}`} />
              </div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-desc">{p.desc}</div>
            </div>
          ))}

          <div className="partner-card partner-card--join">
            <div className="partner-icon partner-icon--dashed">
              <i className="fas fa-plus" />
            </div>
            <div className="partner-name">Ваш бренд</div>
            <div className="partner-desc">Стать партнёром конференции</div>
          </div>
        </div>
      </div>
    </section>
  )
}
