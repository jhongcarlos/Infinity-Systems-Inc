import { Link } from 'react-router-dom'

const LOGO = 'https://infinity-tx.com/wp-content/uploads/2025/01/default-90-1.png'

export default function Footer() {
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
                <span className="ico" aria-hidden="true">📞</span>
                <a href="tel:+17136828200">+1 (713) 682-8200</a>
              </li>
              <li>
                <span className="ico" aria-hidden="true">✉️</span>
                <a href="mailto:service@infinity-tx.com">service@infinity-tx.com</a>
              </li>
              <li>
                <span className="ico" aria-hidden="true">📍</span>
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
}
