import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  useEffect(() => { document.title = 'Services | Infinity Systems Inc' }, [])
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <header className="page-hero">
        <span className="page-hero-label">What We Offer</span>
        <h1>Services</h1>
        <p>
          Our full suite of mechanical contracting services addresses a wide range of client needs. From initial design to long-term system optimization, we execute every project with a focus on accuracy, efficiency, and professional standards.
        </p>
      </header>

      <section className="service-full" aria-labelledby="svc1-heading">
        <div className="container">
          <div className="service-full-grid">
            <img
              src="/images/architecture-bureau-worker-drawing-sketches-office_1098-18821.jpg"
              alt="New Construction and Renovation Services — engineering design"
              width="700"
              height="420"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 id="svc1-heading">New Construction and Renovation Services</h2>
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

      <section className="service-full section-alt" aria-labelledby="svc2-heading">
        <div className="container">
          <div className="service-full-grid">
            <div>
              <h2 id="svc2-heading">System Maintenance and Repairs</h2>
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
              src="/images/DSC_3475-G.jpg"
              alt="System Maintenance and Repairs — mechanical systems work"
              width="700"
              height="420"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <span className="section-label">Ready to Start?</span>
          <h2 className="section-title">Let's Work on Your Project Together</h2>
          <p className="section-text">
            Contact Infinity Systems today for tailored mechanical contracting solutions, expert guidance, and dependable service across Texas.
          </p>
          <Link to="/request-service" className="btn btn-outline" style={{ marginTop: '8px' }}>Contact Now</Link>
        </div>
      </section>
    </div>
  )
}
