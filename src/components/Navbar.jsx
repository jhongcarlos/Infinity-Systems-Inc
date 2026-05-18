import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const LOGO = 'https://infinity-tx.com/wp-content/uploads/2025/01/default-90-1.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" aria-label="Infinity Systems Inc – Home">
            <img
              src={LOGO}
              alt="Infinity Systems Inc"
              width="160"
              height="50"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          <ul className="navbar-links" role="list">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <Link to="/request-service" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '12px' }}>
              Request Service
            </Link>
          </div>

          <button
            className={`navbar-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-nav" className={`navbar-mobile${open ? ' open' : ''}`} aria-hidden={!open}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/request-service">Request Service</NavLink>
      </div>
    </>
  )
}
