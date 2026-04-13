export default function Footer({ scrollTo }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrap">
              <img src="/logo-full.png" alt="Present and Future of Preventive Medicine" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Международная конференция стран БРИКС.<br />
              Ноябрь 2026, Керала, Индия.
            </p>
            <div className="social-btns">
              <a href="#" className="social-btn" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
              <a href="#" className="social-btn" aria-label="Telegram"><i className="fab fa-telegram" /></a>
              <a href="#" className="social-btn" aria-label="Email"><i className="fas fa-envelope" /></a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Разделы</div>
            <ul className="footer-links">
              {[
                ['about',      'О конференции'],
                ['kerala',     'Место проведения'],
                ['program',    'Программа'],
                ['organizers', 'Организаторы'],
                ['partners',   'Партнёры'],
                ['contact',    'Подать заявку'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="footer-link"
                    onClick={e => { e.preventDefault(); scrollTo(id) }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Контакты</div>
            <div className="footer-contact-item"><i className="fab fa-telegram" />Написать в Telegram</div>
            <div className="footer-contact-item"><i className="fab fa-whatsapp" />Написать в WhatsApp</div>
            <div className="footer-contact-item"><i className="fas fa-envelope" />info@pmfbrics.org</div>
            <div className="footer-contact-item"><i className="fas fa-map-marker-alt" />Кумараком, Керала, Индия</div>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-cta"
              style={{ marginTop: '1.8rem', fontSize: '.68rem', padding: '1rem 2.4rem' }}
            >
              <span className="btn-shine" />
              Подать заявку
              <i className="fas fa-arrow-right" style={{ fontSize: '.65rem' }} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Present and Future of Preventive Medicine. Все права защищены.</p>
          <div className="footer-legal">
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
