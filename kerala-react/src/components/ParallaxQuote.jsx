export default function ParallaxQuote() {
  return (
    <section
      className="parallax-section"
      style={{
        backgroundImage: `url(/img/535015355_18494206507067197_837972879471719389_n.jpg)`,
      }}
    >
      <div className="parallax-overlay" />
      <div className="parallax-content reveal">
        <p>
          «Станьте частью международной системы<br />
          здоровья будущего.<br />
          Вклад в здоровье человечества начинается здесь.»
        </p>
        <div className="parallax-divider" />
        <p className="parallax-author">
          Международная конференция БРИКС · Ноябрь 2026 · Керала, Индия
        </p>
      </div>
    </section>
  )
}
