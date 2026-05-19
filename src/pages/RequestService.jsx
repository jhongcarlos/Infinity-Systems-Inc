import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const EMPTY = { name: '', email: '', phone: '', billingAddress: '', requestedBy: '', serviceLocation: '', locationContact: '', message: '' }

export default function RequestService() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => { document.title = 'Request Service | Infinity Systems Inc' }, [])
  const navigate = useNavigate()

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const formData = new FormData(e.target)
      formData.append('access_key', '4aca8940-9e42-4040-b45a-d067d3ecfc7e')
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        setForm(EMPTY)
        navigate('/thank-you')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }, [navigate])

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* ── PAGE HERO ── */}
      <header className="page-hero">
        <span className="page-hero-label">Get In Touch</span>
        <h1>Request Service</h1>
        <p>
          Request expert mechanical contracting services tailored to your project — efficient, reliable, and built to last.
        </p>
      </header>

      {/* ── CONTENT ── */}
      <section className="request-page" aria-labelledby="request-heading">
        <div className="container">
          <div className="request-grid">

            {/* Info column */}
            <div className="request-info">
              <h2 id="request-heading">Your Next Project Starts Here</h2>
              <p>
                Whether you're ready to start your project or have questions about our services, we're here to help. Fill out the service request form or reach out directly using the contact information below.
              </p>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.08z"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  <a href="tel:+17136828200">+1 (713) 682-8200</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Email</strong>
                  <a href="mailto:service@infinity-tx.com">service@infinity-tx.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Address</strong>
                  <address style={{ fontStyle: 'normal' }}>
                    12014 Windfern Road,<br />Houston, Texas 77064
                  </address>
                </div>
              </div>

              <a
                href="https://maps.google.com/maps?q=12014+Windfern+Rd+Houston,+TX+77064+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="map-static"
                aria-label="Open location in Google Maps"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div className="map-static-text">
                  <strong>12014 Windfern Road</strong>
                  <span>Houston, Texas 77064</span>
                  <span className="map-static-cta">View on Google Maps →</span>
                </div>
              </a>
            </div>

            {/* Form column */}
            <div className="form-card">
              <h2>Send a Service Request</h2>

              {status === 'success' && (
                <div className="form-success" role="alert">
                  Thank you for your message. It has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="form-error" role="alert">
                  There was an error trying to send your message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name*"
                    autoComplete="name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email*"
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone No."
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="billingAddress"
                      name="billingAddress"
                      type="text"
                      value={form.billingAddress}
                      onChange={handleChange}
                      required
                      placeholder="Billing Address*"
                      autoComplete="street-address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="requestedBy"
                      name="requestedBy"
                      type="text"
                      value={form.requestedBy}
                      onChange={handleChange}
                      required
                      placeholder="Requested By*"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      id="serviceLocation"
                      name="serviceLocation"
                      type="text"
                      value={form.serviceLocation}
                      onChange={handleChange}
                      required
                      placeholder="Service Location*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="locationContact"
                      name="locationContact"
                      type="text"
                      value={form.locationContact}
                      onChange={handleChange}
                      required
                      placeholder="Location Contact*"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Description of Service Requested"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Sending…' : 'Send Request'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
