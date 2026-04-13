import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { id: 'about',      label: 'О конференции' },
  { id: 'kerala',     label: 'Место' },
  { id: 'program',    label: 'Программа' },
  { id: 'forum',      label: 'Фотолента' },
  { id: 'organizers', label: 'Организаторы' },
]

export default function Navbar({ scrolled, scrollTo: parentScrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (parentScrollTo) { parentScrollTo(id); return }
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a
          href="#"
          className="nav-logo"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <img
            src="/logo-emblem.png"
            alt="Present and Future of Preventive Medicine"
            className="nav-logo-img"
          />
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
            </li>
          ))}
        </ul>

        <button className="btn-cta nav-cta-main" onClick={() => scrollTo('contact')}>
          <span className="btn-shine" />
          Подать заявку
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Оверлей — клик закрывает */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Закрыть меню"
        >
          <i className="fas fa-times" />
        </button>

        <img
          src="/logo-emblem.png"
          alt="PMF"
          style={{ width: 100, marginBottom: '1.5rem', borderRadius: 12 }}
        />

        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => { e.preventDefault(); scrollTo(id) }}
          >
            {label}
          </a>
        ))}

        <button className="btn-cta" onClick={() => scrollTo('contact')} style={{ fontSize: '.72rem', padding: '1rem 2rem' }}>
          <span className="btn-shine" />
          Подать заявку
        </button>
      </div>
    </>
  )
}
