const ITEMS = [
  { img: '555463629_18501688651067197_7819142980240641913_n.jpg', tag: 'Площадка', title: 'Традиционная архитектура' },
  { img: '565509706_18504178282067197_2574394821311971499_n.jpg', tag: 'Культура', title: 'Церемонии Кералы' },
  { img: '566819793_18505474354067197_7077739552198589325_n.jpg', tag: 'Традиции', title: 'Дия и цветы' },
  { img: '588641068_18515150749067197_6015761939366639498_n.jpg', tag: 'Природа', title: 'Озеро Вембанад' },
  { img: '471586196_10165488629073849_5869490648229420148_n.jpg', tag: 'Культура', title: 'Традиции Кералы' },
  { img: '474060693_18456308590067197_5325787142270197550_n.jpg', tag: 'Медицина', title: 'Широдхара — аюрведа' },
  { img: '628212696_18527052808067197_360916497577840031_n.jpg', tag: 'Площадка', title: 'Вид на залив' },
  { img: '534381667_18494206549067197_5549747777762738054_n.jpg', tag: 'Природа', title: 'Поле лотосов' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Атмосфера</span>
          <h2 className="section-title">Керала — место силы</h2>
        </div>
        <div className="gallery-masonry reveal">
          {ITEMS.map((item, i) => (
            <div className="gallery-item" key={i}>
              <img src={`/img/${item.img}`} alt={item.title} loading="lazy" />
              <div className="gallery-caption">
                <div className="g-cap-tag">{item.tag}</div>
                <div className="g-cap-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
