'use client'

import { useEffect, useRef } from 'react'

const phrases = [
  'Web Developer',
  'Full-Stack Engineer',
  'Game Dev Background',
  'Agency Founder',
  'AI Builder',
]

export default function Hero() {
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let pi = 0
    let ci = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    function type() {
      const el = elRef.current
      if (!el) return
      const word = phrases[pi]
      if (!deleting) {
        el.textContent = word.slice(0, ci + 1)
        ci++
        if (ci === word.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = word.slice(0, ci - 1)
        ci--
        if (ci === 0) {
          deleting = false
          pi = (pi + 1) % phrases.length
          timer = setTimeout(type, 300)
          return
        }
      }
      timer = setTimeout(type, deleting ? 60 : 90)
    }

    timer = setTimeout(type, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-bg-text" aria-hidden="true">DEV</div>
      <p className="hero-eyebrow">// Full-Stack Developer · Abuja, Nigeria</p>
      <h1 className="hero-name">
        EMMANUEL<br /><span>IFEANYI</span>
      </h1>
      <p className="hero-title">
        <span ref={elRef}>Web Developer</span>
        <span className="cursor" aria-hidden="true" />
      </p>
      <p className="hero-desc">
        4+ years building digital products — from game engines to full-stack web
        apps. I design, ship, and scale things people actually use.
      </p>
      <div className="hero-meta">
        <div className="hero-stat">
          <div className="num">4+</div>
          <div className="label">Years in tech</div>
        </div>
        <div className="hero-stat">
          <div className="num">6+</div>
          <div className="label">Live projects</div>
        </div>
        <div className="hero-stat">
          <div className="num">01</div>
          <div className="label">Agency founded</div>
        </div>
      </div>
      <div className="cta-row">
        <a className="btn btn-primary" href="#projects">View projects</a>
        <a className="btn btn-ghost" href="#contact">Get in touch</a>
      </div>
    </section>
  )
}
