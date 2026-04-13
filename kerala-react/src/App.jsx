import { useState, useEffect, useCallback } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Kerala from './components/Kerala'
import Program from './components/Program'
import ContactForm from './components/ContactForm'
import ForumStrip from './components/ForumStrip'
import Organizers from './components/Organizers'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [progress, setProgress] = useState(0)

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const target = el.getBoundingClientRect().top + window.scrollY - 80
    const start = window.scrollY
    const dist = target - start
    const duration = Math.min(Math.max(Math.abs(dist) * 0.4, 400), 900)
    let startTime = null

    const easeInOutCubic = t =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (ts) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, start + dist * easeInOutCubic(progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      setScrolled(sy > 60)
      setShowTop(sy > 400)
      setProgress(max > 0 ? (sy / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })

  return (
    <>
      <div id="readProgress" style={{ width: `${progress}%` }} />

      <Navbar scrolled={scrolled} scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Kerala />
        <Program scrollTo={scrollTo} />
        <Organizers />
        <Partners />
        <ContactForm />
        <ForumStrip />
      </main>

      <Footer scrollTo={scrollTo} />

      <button
        id="scrollTop"
        className={showTop ? 'visible' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Наверх"
      >
        <i className="fas fa-arrow-up" style={{ fontSize: '.85rem' }} />
      </button>
    </>
  )
}
