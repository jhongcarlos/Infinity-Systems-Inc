import { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'

const IMAGES = [
  '/images/DSC_3346-G.webp',
  '/images/DSC_3362-G.webp',
  '/images/DSC_3405-GM.webp',
  '/images/DSC_3408-GM.webp',
  '/images/DSC_3425-G.webp',
  '/images/DSC_3433-G.webp',
  '/images/DSC_3366-G.webp',
  '/images/DSC_3348-G.webp',
  '/images/DSC_3373-G.webp',
  '/images/DSC_3465-G.webp',
  '/images/DSC_3500-G.webp',
  '/images/DSC_3515-G.webp',
  '/images/DSC_3368-G.webp',
  '/images/DSC_3437-G.webp',
  '/images/DSC_3426-G.webp',
  '/images/DSC_3556-G.webp',
  '/images/DSC_3382-G.webp',
  '/images/DSC_3364-G.webp',
  '/images/DSC_3417-GM.webp',
  '/images/DSC_3339-G.webp',
  '/images/DSC_3472-G-1.webp',
]

const PortfolioItem = memo(function PortfolioItem({ src, index, total, onOpen }) {
  const handleKey = useCallback(e => {
    if (e.key === 'Enter') onOpen(src)
  }, [src, onOpen])

  return (
    <div
      className="portfolio-item"
      role="listitem"
      onClick={() => onOpen(src)}
      onKeyDown={handleKey}
      tabIndex={0}
      aria-label={`View project photo ${index + 1} of ${total}`}
    >
      <img
        src={src}
        alt={`Mechanical contracting project ${index + 1}`}
        width="400"
        height="300"
        loading={index < 6 ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
})

export default function Portfolio() {
  useEffect(() => { document.title = 'Portfolio | Infinity Systems Inc' }, [])
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
      <header className="page-hero">
        <span className="page-hero-label">Our Work</span>
        <h1>Portfolio</h1>
        <p>
          Explore our portfolio showcasing innovative mechanical contracting projects across Texas. See how we deliver quality and excellence in every solution.
        </p>
      </header>

      <section className="portfolio-intro" aria-labelledby="portfolio-heading">
        <div className="container">
          <h2 id="portfolio-heading" className="section-title">Showcasing Excellence in Mechanical Contracting</h2>
          <p className="section-text">
            We take pride in our work, delivering mechanical contracting solutions for diverse industries across Texas. Our portfolio highlights our expertise and dedication to quality.
          </p>
          <Link to="/request-service" className="btn btn-primary">Contact Now</Link>
        </div>
      </section>

      <div className="container">
        <div className="portfolio-grid" role="list">
          {IMAGES.map((src, i) => (
            <PortfolioItem
              key={src}
              src={src}
              index={i}
              total={IMAGES.length}
              onOpen={setLightbox}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Project photo lightbox"
        >
          <img src={lightbox} alt="Project detail view" onClick={e => e.stopPropagation()} />
          <button className="lightbox-close" onClick={close} aria-label="Close lightbox">×</button>
        </div>
      )}
    </div>
  )
}
