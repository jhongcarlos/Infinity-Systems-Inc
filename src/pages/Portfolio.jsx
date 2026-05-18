import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useAnimate from '../hooks/useAnimate'

const IMAGES = [
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3346-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3362-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3405-GM.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3408-GM.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3425-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3433-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3366-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3348-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3373-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3465-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3500-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3515-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3368-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3437-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3426-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3556-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3382-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3364-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3417-GM.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3339-G.jpg',
  'https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3472-G-1.jpg',
]

export default function Portfolio() {
  useEffect(() => { document.title = 'Portfolio | Infinity Systems Inc' }, [])
  useAnimate()
  const [lightbox, setLightbox] = useState(null)

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = e => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, close])

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* ── PAGE HERO ── */}
      <header className="page-hero">
        <span className="page-hero-label" data-animate>Our Work</span>
        <h1 data-animate>Portfolio</h1>
        <p>
          Explore our portfolio showcasing innovative mechanical contracting projects across Texas. See how we deliver quality and excellence in every solution.
        </p>
      </header>

      {/* ── INTRO ── */}
      <section className="portfolio-intro" aria-labelledby="portfolio-heading">
        <div className="container">
          <h2 id="portfolio-heading" className="section-title">Showcasing Excellence in Mechanical Contracting</h2>
          <p className="section-text">
            We take pride in our work, delivering mechanical contracting solutions for diverse industries across Texas. Our portfolio highlights our expertise and dedication to quality.
          </p>
          <Link to="/request-service" className="btn btn-primary">Contact Now</Link>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <div className="container">
        <div className="portfolio-grid" role="list">
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className="portfolio-item"
              data-animate
              role="listitem"
              onClick={() => setLightbox(src)}
              onKeyDown={e => e.key === 'Enter' && setLightbox(src)}
              tabIndex={0}
              aria-label={`View project photo ${i + 1} of ${IMAGES.length}`}
            >
              <img
                src={src}
                alt={`Mechanical contracting project ${i + 1}`}
                width="400"
                height="300"
                loading={i < 6 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Project photo lightbox"
        >
          <img
            src={lightbox}
            alt="Project detail view"
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-close" onClick={close} aria-label="Close lightbox">
            ×
          </button>
        </div>
      )}
    </div>
  )
}
