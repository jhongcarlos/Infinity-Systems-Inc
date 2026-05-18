import { memo } from 'react'
import { Link } from 'react-router-dom'

const LOGO = 'https://infinity-tx.com/wp-content/uploads/2025/01/default-90-1.png'

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.08z"/>
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const Footer = memo(function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/">
              <img src={LOGO} alt="Infinity Systems Inc" className="footer-logo" width="140" height="46" loading="lazy" />
            </Link>
            <p className="footer-desc">
              Have questions or need expert mechanical contracting solutions? Reach out to Infinity Systems — we're here to help every step of the way.
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Working Hours</h2>
            <ul className="footer-hours">
              <li>
                <strong>Monday – Friday</strong>
                07:00 am – 06:00 pm
              </li>
              <li>
                <strong>24Hr Service</strong>
                Emergency service available
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="footer-contact">
              <li>
                <span className="ico" aria-hidden="true"><IconPhone /></span>
                <a href="tel:+17136828200">+1 (713) 682-8200</a>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><IconMail /></span>
                <a href="mailto:service@infinity-tx.com">service@infinity-tx.com</a>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><IconPin /></span>
                <address style={{ fontStyle: 'normal' }}>
                  12014 Windfern Road,<br />Houston, Texas 77064
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © 2024 | Infinity Systems Inc | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
