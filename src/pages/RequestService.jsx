import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAnimate from '../hooks/useAnimate'

const EMPTY = { name: '', email: '', phone: '', billingAddress: '', requestedBy: '', serviceLocation: '', locationContact: '', message: '' }

export default function RequestService() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useAnimate()

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
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
  }

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      {/* ── PAGE HERO ── */}
      <header className="page-hero">
        <span className="page-hero-label" data-animate>Get In Touch</span>
        <h1 data-animate>Request Service</h1>
        <p>
          Request expert mechanical contracting services tailored to your project — efficient, reliable, and built to last.
        </p>
      </header>

      {/* ── CONTENT ── */}
      <section className="request-page" aria-labelledby="request-heading">
        <div className="container">
          <div className="request-grid">

            {/* Info column */}
            <div className="request-info" data-animate="left">
              <h2 id="request-heading">Your Next Project Starts Here</h2>
              <p>
                Whether you're ready to start your project or have questions about our services, we're here to help. Fill out the service request form or reach out directly using the contact information below.
              </p>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true"><i className="fa-solid fa-phone" /></div>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  <a href="tel:+17136828200">+1 (713) 682-8200</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true"><i className="fa-solid fa-envelope" /></div>
                <div className="contact-item-text">
                  <strong>Email</strong>
                  <a href="mailto:service@infinity-tx.com">service@infinity-tx.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon" aria-hidden="true"><i className="fa-solid fa-location-dot" /></div>
                <div className="contact-item-text">
                  <strong>Address</strong>
                  <address style={{ fontStyle: 'normal' }}>
                    12014 Windfern Road,<br />Houston, Texas 77064
                  </address>
                </div>
              </div>

              <div className="map-embed">
                <iframe
                  title="Infinity Systems Inc location"
                  src="https://maps.google.com/maps?q=12014+Windfern+Rd+Houston,+TX+77064+USA&z=15&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form column */}
            <div className="form-card" data-animate="right">
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
