import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  useEffect(() => { document.title = 'Thank You | Infinity Systems Inc' }, [])
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="thankyou-page">
        <div className="container">
          <div className="thankyou-inner">
            <div className="thankyou-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
            <span className="section-label">Form Submitted</span>
            <h1>Thank You!</h1>
            <p>
              Your service request has been received. A member of our team will review your submission and get back to you as soon as possible.
            </p>
            <div className="thankyou-actions">
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <Link to="/services" className="btn btn-outline-primary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
