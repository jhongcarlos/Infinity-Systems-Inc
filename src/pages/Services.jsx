import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAnimate from '../hooks/useAnimate'

export default function Services() {
  useEffect(() => { document.title = 'Services | Infinity Systems Inc' }, [])
  useAnimate()
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* ── PAGE HERO ── */}
      <header className="page-hero">
        <span className="page-hero-label" data-animate>What We Offer</span>
        <h1 data-animate>Services</h1>
        <p data-animate>
          Our full suite of mechanical contracting services addresses a wide range of client needs. From initial design to long-term system optimization, we execute every project with a focus on accuracy, efficiency, and professional standards.
        </p>
      </header>

      {/* ── SERVICE 1: New Construction ── */}
      <section className="service-full" aria-labelledby="svc1-heading">
        <div className="container">
          <div className="service-full-grid">
            <img
              data-animate="left"
              src="https://infinity-tx.com/wp-content/uploads/2024/12/architecture-bureau-worker-drawing-sketches-office_1098-18821.jpg"
              alt="New Construction and Renovation Services — engineering design"
              width="700"
              height="420"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 id="svc1-heading" data-animate="right">New Construction and Renovation Services</h2>
              <p>
                We specialize in custom mechanical system design and seamless installations for new construction and renovation services.
              </p>
              <p>
                Infinity Systems provides end-to-end mechanical solutions for both new construction and renovation projects. From custom system design to seamless installation, we provide efficient, code-compliant solutions tailored to your building's unique needs. Trust us to build it right — from the ground up or the inside out.
              </p>
              <Link to="/request-service" className="btn btn-primary">Contact Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: Maintenance ── */}
      <section className="service-full section-alt" aria-labelledby="svc2-heading">
        <div className="container">
          <div className="service-full-grid">
            {/* Text first on this row for visual variety */}
            <div>
              <h2 id="svc2-heading" data-animate="left">System Maintenance and Repairs</h2>
              <p>
                We offer dependable maintenance and repair services to keep your mechanical systems operating at peak performance. Our preventative approach minimizes downtime, extends system life, and promotes both safety and efficiency. From routine servicing to emergency repairs, we've got you covered.
              </p>
              <ul className="service-bullets">
                <li>Preventative Maintenance</li>
                <li>Repairs to keep your systems running smoothly</li>
                <li>Emergency repair services available 24/7</li>
                <li>System inspection and diagnostics</li>
              </ul>
              <Link to="/request-service" className="btn btn-primary">Request Service</Link>
            </div>
            <img
              data-animate="right"
              src="https://infinity-tx.com/wp-content/uploads/2025/06/DSC_3475-G.jpg"
              alt="System Maintenance and Repairs — mechanical systems work"
              width="700"
              height="420"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <span className="section-label" data-animate>Ready to Start?</span>
          <h2 className="section-title" data-animate>Let's Work on Your Project Together</h2>
          <p className="section-text" data-animate>
            Contact Infinity Systems today for tailored mechanical contracting solutions, expert guidance, and dependable service across Texas.
          </p>
          <Link to="/request-service" className="btn btn-outline" style={{ marginTop: '8px' }}>Contact Now</Link>
        </div>
      </section>
    </div>
  )
}
