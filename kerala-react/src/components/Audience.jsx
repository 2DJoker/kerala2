const CARDS = [
  {
    icon: 'fa-landmark',
    name: 'Органы власти\nи администрации',
    desc: 'Представители региональных администраций и профильных министерств здравоохранения и туризма стран БРИКС.',
    checks: ['Министерства здравоохранения', 'Региональные администрации', 'Официальный трек БРИКС'],
  },
  {
    icon: 'fa-hospital',
    name: 'Клиники\nи санатории',
    desc: 'Руководители и эксперты медицинских учреждений, заинтересованные в международном сотрудничестве и обмене практиками.',
    checks: ['Интегративная медицина', 'Аюрведические центры', 'Wellness-индустрия'],
  },
  {
    icon: 'fa-chart-line',
    name: 'Инвесторы\nи девелоперы',
    desc: 'Инвесторы и девелоперы, рассматривающие вложения в инфраструктуру оздоровительных хабов и медицинского туризма.',
    checks: ['Оздоровительные хабы', 'Медицинский туризм', 'Новые рынки БРИКС'],
  },
  {
    icon: 'fa-seedling',
    name: 'Производители\nнатуральной продукции',
    desc: 'Производители и дистрибуторы натуральной и фитопродукции, ищущие партнёрств на международных рынках.',
    checks: ['Фитопродукция', 'B2B-партнёрства', 'Экспорт в БРИКС'],
  },
  {
    icon: 'fa-flask',
    name: 'Наука\nи университеты',
    desc: 'Представители профессиональных ассоциаций, научно-исследовательских институтов и университетов стран БРИКС.',
    checks: ['НИИ и университеты', 'Совместные исследования', 'Стандартизация'],
  },
  {
    icon: 'fa-plane-departure',
    name: 'Туроператоры\nи агентства',
    desc: 'Туроператоры, специализирующиеся на медицинском и wellness-туризме, заинтересованные в новых направлениях.',
    checks: ['Медицинский туризм', 'Wellness-туры', 'Маршруты БРИКС'],
  },
]

export default function Audience() {
  return (
    <section id="audience">
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,168,75,.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="section-tag">К участию приглашаются</span>
          <h2 className="section-title">Участники конференции</h2>
        </div>
        <p className="reveal" style={{ textAlign: 'center', fontSize: '.87rem', color: '#888', fontWeight: 300, maxWidth: 680, margin: '0 auto 4rem', lineHeight: 1.85, transitionDelay: '.1s' }}>
          Конференция объединяет экспертов, бизнес и государство из стран БРИКС для создания международной системы здоровья будущего
        </p>
        <div className="audience-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {CARDS.map((c, i) => (
            <div className="audience-card reveal" key={c.icon} style={{ transitionDelay: `${(i % 3) * 0.15}s` }}>
              <div className="audience-icon"><i className={`fas ${c.icon}`} /></div>
              <div className="audience-name">
                {c.name.split('\n').map((line, j, arr) => (
                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                ))}
              </div>
              <div className="audience-divider" />
              <div className="audience-desc">{c.desc}</div>
              <div style={{ textAlign: 'left' }}>
                {c.checks.map(ch => (
                  <div className="check-item" key={ch}>
                    <i className="fas fa-check-circle" />
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
