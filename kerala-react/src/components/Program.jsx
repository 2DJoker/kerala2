const BLOCKS = [
  {
    icon: 'fa-microphone',
    title: 'Пленарные сессии',
    desc: 'Ключевые доклады ведущих экспертов стран БРИКС в сфере превентивной и интегративной медицины.',
    tags: ['Эксперты БРИКС', 'Стратегия'],
  },
  {
    icon: 'fa-comments',
    title: 'Панельные дискуссии',
    desc: 'Тематические сессии по интеграции традиционных медицинских систем, wellness-туризму и инвестициям.',
    tags: ['Аюрведа', 'ТКМ', 'Wellness'],
  },
  {
    icon: 'fa-handshake',
    title: 'B2B-встречи',
    desc: 'Прямые деловые встречи между клиниками, инвесторами, производителями и туроператорами.',
    tags: ['Бизнес', 'Партнёрства'],
  },
  {
    icon: 'fa-earth-americas',
    title: 'Круглый стол',
    desc: 'Создание Сети центров традиционной медицины БРИКС и концепция «Оздоровительный хаб БРИКС».',
    tags: ['Сеть БРИКС', 'Сотрудничество'],
  },
  {
    icon: 'fa-hospital',
    title: 'Выездные визиты',
    desc: 'Посещение ведущих аюрведических центров и медицинских учреждений Кералы.',
    tags: ['Аюрведа', 'Керала'],
  },
  {
    icon: 'fa-file-lines',
    title: 'Итоговая резолюция',
    desc: 'Итоги мероприятия войдут в официальный трек председательства Индии в БРИКС 2026.',
    tags: ['БРИКС 2026', 'Официальный трек'],
  },
]

export default function Program({ scrollTo }) {
  return (
    <section id="program">
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 40% at 50% 0%,rgba(74,124,63,.12) 0%,transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="section-strip">
            <span className="strip-blue" /><span className="strip-green" /><span className="strip-yellow" /><span className="strip-red" />
          </div>
          <span className="section-tag">Программа</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Что вас ждёт</h2>
        </div>
        <p className="reveal" style={{ textAlign: 'center', fontSize: '.87rem', color: 'rgba(255,255,255,.45)', fontWeight: 300, maxWidth: 700, margin: '0 auto 3.5rem', lineHeight: 1.85, transitionDelay: '.1s' }}>
          Пленарные сессии · Панельные дискуссии · B2B-встречи · Выездные визиты в аюрведические центры Кералы
        </p>
        <div className="program-grid">
          {BLOCKS.map((d, i) => (
            <div className="program-card reveal" key={d.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className="program-icon-wrap">
                <i className={`fas ${d.icon}`} />
              </div>
              <div className="program-title">{d.title}</div>
              <div className="program-desc">{d.desc}</div>
              <div className="program-tags">
                {d.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', transitionDelay: '.3s' }}>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.55)', fontWeight: 300, marginBottom: '1.8rem', lineHeight: 1.7 }}>
            Станьте частью международной системы здоровья будущего.
          </p>
          <button className="btn-cta" onClick={() => scrollTo('contact')}>
            <span className="btn-shine" />
            Подать заявку
            <i className="fas fa-arrow-right" style={{ fontSize: '.75rem' }} />
          </button>
        </div>
      </div>
    </section>
  )
}
