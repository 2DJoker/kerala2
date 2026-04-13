export default function Hero({ scrollTo }) {
  return (
    <section id="hero">
      <div
        className="hero-slide active"
        style={{ backgroundImage: 'url(/7794974c-8660-4561-bbba-c7e738ae3a35.png)', position: 'absolute', inset: 0 }}
      />
      <div className="hero-overlay" />

      <div className="hero-particles" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="particle" style={{
            '--i': i,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--d': `${(Math.random() * 6 + 4).toFixed(1)}s`,
            '--size': `${(Math.random() * 6 + 3).toFixed(1)}px`,
          }} />
        ))}
      </div>

      <div className="floating-badge">
        <div className="badge-num">2026</div>
        <div className="badge-text">ноябрь<br />Керала</div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="eline" />
          Международная конференция стран БРИКС
          <span className="eline" />
        </p>
        <h1 className="hero-title">
          Настоящее<br />и будущее<br />превентивной<br />медицины
        </h1>
        <p className="hero-sub">
          📍 Ноябрь 2026 · Керала, Индия
        </p>
        <p className="hero-lead">
          Создаём будущее здоровья уже сегодня. Присоединяйтесь к ключевому событию
          в сфере превентивной и интегративной медицины.
        </p>
        <div className="hero-actions">
          <button className="btn-cta" onClick={() => scrollTo('contact')}>
            <span className="btn-shine" />
            Подать заявку
            <i className="fas fa-arrow-right" style={{ fontSize: '.75rem' }} />
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('program')}>
            Программа
          </button>
        </div>
      </div>

      <div className="hero-stats">
        {[
          { num: 'БРИКС', label: 'страны-участницы',     color: '#22c55e' },
          { num: '2026',  label: 'ноябрь, Керала',       color: '#fbbf24' },
          { num: '360°',  label: 'очно + онлайн',        color: '#60a5fa' },
          { num: 'B2B',   label: 'сессии и партнёрства', color: '#f87171' },
        ].map((s, i) => (
          <div className="stat" key={s.label} style={{ '--stat-color': s.color, animationDelay: `${1.2 + i * 0.1}s` }}>
            <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--cream2)" />
        </svg>
      </div>
    </section>
  )
}
