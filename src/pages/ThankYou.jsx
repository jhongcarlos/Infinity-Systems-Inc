import { Link } from 'react-router-dom'
import useAnimate from '../hooks/useAnimate'

export default function ThankYou() {
  useAnimate()
  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="thankyou-page">
        <div className="container">
          <div className="thankyou-inner" data-animate>
            <div className="thankyou-icon" aria-hidden="true">
              <i className="fa-solid fa-circle-check" />
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
