import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', participantType: '', request: '', privacy: false })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { id, value, type, checked } = e.target
    setForm(f => ({ ...f, [id]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.privacy) { alert('Пожалуйста, согласитесь с политикой конфиденциальности'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div style={{ position: 'absolute', top: -150, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(74,124,63,.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Забронируйте участие</span>
          <h2 className="section-title">Подать заявку</h2>
          <p style={{ fontSize: '.87rem', color: '#999', fontWeight: 300, marginTop: '1rem', lineHeight: 1.85 }}>
            После заявки организаторы свяжутся с вами для уточнения деталей участия.
          </p>
        </div>

        <div className="form-wrap reveal">
          <div className="urgency-bar">
            <div className="urgency-dot" />
            <p style={{ fontSize: '.78rem', color: '#886a20', fontWeight: 400, letterSpacing: '.08em' }}>
              Ноябрь 2026 · Кумараком, Керала · Ранняя регистрация открыта
            </p>
          </div>

          {submitted ? (
            <div className="form-success">
              <i className="fas fa-check-circle" style={{ marginRight: '.5rem' }} />
              Заявка принята! Организаторы свяжутся с вами в ближайшее время.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label className="form-label" htmlFor="fname">Имя</label>
                  <input className="form-input" type="text" id="fname" placeholder="Ваше имя" value={form.fname} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="lname">Фамилия</label>
                  <input className="form-input" type="text" id="lname" placeholder="Фамилия" value={form.lname} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-input" type="email" id="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Телефон / WhatsApp</label>
                  <input className="form-input" type="tel" id="phone" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="participantType">Кто вы?</label>
                <select className="form-select" id="participantType" value={form.participantType} onChange={handleChange}>
                  <option value="">Выберите категорию</option>
                  <option>Представитель органов власти</option>
                  <option>Руководитель клиники / санатория</option>
                  <option>Инвестор / Девелопер</option>
                  <option>Производитель натуральной продукции</option>
                  <option>Представитель науки / университета</option>
                  <option>Туроператор / Агентство</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="request">Комментарий</label>
                <textarea className="form-input" rows={3} id="request" placeholder="Ваши вопросы или пожелания..." value={form.request} onChange={handleChange} style={{ resize: 'none' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.8rem', marginBottom: '2rem' }}>
                <input type="checkbox" id="privacy" checked={form.privacy} onChange={handleChange} style={{ accentColor: 'var(--sage)', width: 18, height: 18, marginTop: 2, flexShrink: 0 }} />
                <label htmlFor="privacy" style={{ fontSize: '.78rem', color: '#aaa', fontWeight: 300, lineHeight: 1.6 }}>
                  Согласен(на) с{' '}
                  <a href="#" style={{ color: 'var(--sage)' }}>политикой конфиденциальности</a>
                  {' '}и обработкой персональных данных
                </label>
              </div>
              <button type="submit" className="btn-sage" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem', fontSize: '.75rem' }} disabled={loading}>
                {loading ? 'Отправляем...' : <><span>Отправить заявку</span><i className="fas fa-arrow-right" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
