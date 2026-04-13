const FEATURES = [
  { icon: 'fa-globe',          title: 'Новые проекты и инвестиции',  desc: 'Новые международные проекты и инвестиции в сфере здоровья',                                          color: 'var(--blue)',   color2: 'var(--blue2)'   },
  { icon: 'fa-spa',            title: 'Wellness и медтуризм',         desc: 'Выход на рынок wellness и медицинского туризма',                                                       color: 'var(--green)',  color2: 'var(--green2)'  },
  { icon: 'fa-handshake',      title: 'Партнёрства',                  desc: 'Партнёрства с клиниками, производителями и государственными структурами',                             color: 'var(--yellow)', color2: 'var(--yellow2)' },
  { icon: 'fa-earth-americas', title: 'Глобальная повестка',          desc: 'Участие в формировании глобальной повестки здоровья',                                                  color: 'var(--red)',    color2: 'var(--red2)'    },
]

const AWAITS = [
  { icon: 'fa-video',   text: 'Очное участие + онлайн-трансляции',                                    color: 'var(--red)',    color2: 'var(--red2)'    },
  { icon: 'fa-leaf',    text: 'Доступ к лучшим аюрведическим центрам Кералы',                         color: 'var(--green)',  color2: 'var(--green2)'  },
  { icon: 'fa-flask',   text: 'Реальные кейсы интеграции традиционной и современной медицины',         color: 'var(--blue)',   color2: 'var(--blue2)'   },
]

export default function About() {
  return (
    <section id="about">
      <div style={{
        position: 'absolute', top: -200, right: -200, width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(74,124,63,.06) 0%,transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>

        {/* Заголовок */}
        <div className="reveal-left" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-strip">
            <span className="strip-red" /><span className="strip-yellow" /><span className="strip-green" /><span className="strip-blue" />
          </div>
          <span className="section-tag">О конференции</span>
          <h2 className="section-title">
            Станьте частью{' '}
            <span style={{ color: 'var(--green)', fontWeight: 600 }}>международной системы<br />здоровья будущего</span>
          </h2>
          <div className="divider" style={{ margin: '2rem auto' }} />
          <p style={{ fontSize: '.9rem', lineHeight: 2, color: '#777', fontWeight: 300, textAlign: 'left' }}>
            Международная конференция объединит экспертов, бизнес и государство для запуска{' '}
            <strong>Сети центров превентивной медицины БРИКС</strong>{' '}
            и развития инновационных оздоровительных хабов.
          </p>
        </div>

        {/* Вас ждёт */}
        <div className="reveal" style={{ marginBottom: '2.5rem', transitionDelay: '.1s' }}>
          <p className="about-sub-label">Вас ждёт</p>
          <div className="awaits-list">
            {AWAITS.map(a => (
              <div
                className="awaits-item"
                key={a.text}
                style={{ '--icon-bg': `linear-gradient(135deg, ${a.color}, ${a.color2})`, '--icon-border': a.color }}
              >
                <div className="awaits-icon"><i className={`fas ${a.icon}`} /></div>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Почему это важно */}
        <div className="reveal" style={{ transitionDelay: '.2s' }}>
          <p className="about-sub-label">Почему это важно</p>
          <div className="about-features">
            {FEATURES.map((f, i) => (
              <div
                className="about-feature"
                key={f.title}
                style={{ '--feat-color': f.color, '--feat-color2': f.color2, transitionDelay: `${i * 0.08}s` }}
              >
                <div className="feature-icon"><i className={`fas ${f.icon}`} /></div>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
