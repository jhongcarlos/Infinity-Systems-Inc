import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAnimate from '../hooks/useAnimate'

const IMG = {
  hero:          'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3500-G.jpg',
  about1:        'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3362-G.jpg',
  about2:        'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3433-G.jpg',
  about3:        'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3522-G.jpg',
  service1:      'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3364-G.jpg',
  service2:      'https://www.infinity-tx.com/wp-content/uploads/2025/06/DSC_3475-G.jpg',
  expertise:     'https://infinity-tx.com/wp-content/uploads/2025/01/review-1.png',
  creativity:    'https://infinity-tx.com/wp-content/uploads/2025/01/creativity-1.png',
  quality:       'https://infinity-tx.com/wp-content/uploads/2025/01/badge-1.png',
}

export default function Home() {
  useEffect(() => { document.title = 'Infinity Systems Inc | Mechanical Contracting Solutions in Texas' }, [])
  useAnimate()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-image-wrap">
          <img
            src={IMG.hero}
            alt="Infinity Systems Inc — mechanical contracting project"
            className="hero-bg"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="sync"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <h1 className="hero-title" data-animate="fade">Precision, Innovation, Reliability</h1>
            <p className="hero-desc" data-animate="fade" data-delay="1">
              Delivering cutting-edge mechanical contracting solutions across Texas. From design to construction and maintenance, we deliver efficient, high-quality results in every project.
            </p>
            <Link to="/request-service" className="btn-hero" data-animate="fade" data-delay="2">Request Service</Link>
          </div>
        </div>
        <div className="hero-since-band">
          <span className="hero-since-icon" aria-hidden="true" />
          <span className="hero-since-text">Serving Houston &amp; Surrounding Areas since 1991</span>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div data-animate="left">
              <span className="section-label">Who We Are</span>
              <h2 id="about-heading" className="section-title">Your Trusted Partner in Mechanical Contracting</h2>
              <p className="section-text">
                Welcome to Infinity Systems Inc, your trusted partner for comprehensive mechanical contracting solutions in Texas. With a commitment to precision and excellence, we deliver customized services for projects of all sizes, from installations and maintenance to complex system designs. Whether you're constructing a new facility or optimizing existing systems, our skilled team prioritizes efficiency and reliability at every stage.
              </p>
              <div className="about-commitment">
                <h3>Commitment to Excellence</h3>
                <p>
                  We are more than just a mechanical contracting company — we are a dedicated team committed to delivering innovative and dependable solutions. Guided by our core values, we have built a reputation for quality, integrity &amp; professionalism, ensuring every project meets &amp; exceeds client expectations.
                </p>
              </div>
            </div>
            <div className="about-img-grid" aria-hidden="true" data-animate="right">
              <img src={IMG.about1} alt="Infinity Systems project" width="600" height="338" loading="lazy" decoding="async" />
              <div className="about-img-row">
                <img src={IMG.about2} alt="Mechanical system installation" width="290" height="200" loading="lazy" decoding="async" />
                <img src={IMG.about3} alt="System construction work" width="290" height="200" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="mission-section" aria-labelledby="mission-heading">
        <div className="container">
          <div className="mission-inner" data-animate>
            <span className="section-label">Our Mission</span>
            <h2 id="mission-heading" className="section-title">Building Trust with Every Project</h2>
            <p className="section-text">
              Our mission is to create value for our clients by providing exceptional mechanical contracting services. Through continuous improvement and strong relationships, we aim to set the standard for excellence in the industry. Browse our portfolio to see the quality and impact of our work.
            </p>
            <Link to="/portfolio" className="btn btn-outline">View Our Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="section section-alt" aria-labelledby="values-heading">
        <div className="container text-center">
          <span className="section-label" data-animate>Our Core Values</span>
          <h2 id="values-heading" className="section-title" data-animate>Guiding Principles That Drive Our Success</h2>
          <p className="section-text" data-animate>
            Our core values shape everything we do — transparency, integrity, innovation, and reliability. We deliver exceptional results while building strong partnerships rooted in trust and collaboration. These values are reflected in the professionalism and dedication behind every project.
          </p>
          <div className="values-grid">
            {[
              { img: 'https://www.infinity-tx.com/wp-content/uploads/2026/05/transparency.png',  title: 'Transparency',  desc: 'Clear and open communication with our clients.' },
              { img: 'https://infinity-tx.com/wp-content/uploads/2025/01/honesty-1.png',         title: 'Integrity',     desc: 'Upholding the highest ethical standards in all that we do.' },
              { img: 'https://infinity-tx.com/wp-content/uploads/2025/01/secure-shield-1.png',   title: 'Reliability',   desc: 'Meeting deadlines & exceeding expectations with dependable service.' },
              { img: 'https://www.infinity-tx.com/wp-content/uploads/2026/05/collaborate.png',   title: 'Collaboration', desc: 'Working together to achieve project success.' },
            ].map((v, i) => (
              <div key={v.title} className="value-card" data-animate data-delay={i + 1}>
                <img src={v.img} alt={v.title} width="50" height="50" loading="lazy" decoding="async" />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container" data-animate>
          <span className="section-label">Get Started</span>
          <h2 id="cta-heading" className="section-title">Let's Bring Your Project to Life</h2>
          <p className="section-subtitle">Get in Touch with Our Experts Today</p>
          <p className="section-text">
            Ready to start your next mechanical contracting project? Contact Infinity Systems for tailored solutions, expert guidance, and dependable service.
          </p>
          <Link to="/request-service" className="btn btn-outline">Contact Now</Link>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="text-center" data-animate>
            <span className="section-label">Our Services</span>
            <h2 id="services-heading" className="section-title">Innovative Solutions for Projects of All Sizes</h2>
            <p className="section-text">
              We offer a full spectrum of mechanical contracting services, from design and installation to maintenance and optimization. Our expert team provides precise, efficient solutions with results customized to your goals.
            </p>
          </div>
          <div className="services-grid">
            <article className="service-card" data-animate="left">
              <img
                src={IMG.service1}
                alt="New Construction and Renovation Services"
                className="service-card-img"
                width="600"
                height="260"
                loading="lazy"
                decoding="async"
              />
              <div className="service-card-body">
                <h3>New Construction and Renovation Services</h3>
                <p>
                  Infinity Systems provides end-to-end mechanical solutions for both new construction and renovation projects. From custom system design to seamless installation, we provide efficient, code-compliant solutions tailored to your building's unique needs. Trust us to build it right — from the ground up or the inside out.
                </p>
                <Link to="/services" className="learn-more">Learn More</Link>
              </div>
            </article>
            <article className="service-card" data-animate="right">
              <img
                src={IMG.service2}
                alt="System Maintenance and Repairs"
                className="service-card-img"
                width="600"
                height="260"
                loading="lazy"
                decoding="async"
              />
              <div className="service-card-body">
                <h3>System Maintenance and Repairs</h3>
                <p>
                  We offer dependable maintenance and repair services to keep your mechanical systems operating at peak performance. Our preventative approach minimizes downtime, extends system life, and promotes both safety and efficiency. From routine servicing to emergency repairs, we've got you covered.
                </p>
                <Link to="/services" className="learn-more">Learn More</Link>
              </div>
            </article>
          </div>
          <div className="services-cta-note" data-animate>
            <p>Discover how our expert services can elevate your project — <strong>Explore all we offer today!</strong></p>
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="section section-alt" aria-labelledby="why-heading">
        <div className="container text-center">
          <span className="section-label" data-animate>Why Choose Infinity Systems?</span>
          <h2 id="why-heading" className="section-title" data-animate>Dependability You Can Trust, Results You Can Rely On</h2>
          <p className="section-text" data-animate>
            With a proven track record of innovation, precision, and reliability, we deliver mechanical contracting solutions that exceed expectations. Partner with us for unmatched expertise and a commitment to quality.
          </p>
          <div className="features-grid">
            {[
              { img: 'https://www.infinity-tx.com/wp-content/uploads/2026/05/costumer.png', alt: 'Expertise', title: 'Expertise You Can Trust',  desc: 'Years of experience & technical proficiency in every project.' },
              { img: IMG.creativity, alt: 'Solutions',  title: 'Customized Solutions',      desc: 'Tailored services to meet your unique project needs.' },
              { img: IMG.quality,    alt: 'Quality',    title: 'Quality & Reliability',     desc: 'Commitment to excellence at every stage of your project.' },
            ].map((f, i) => (
              <div key={f.title} className="feature-item" data-animate data-delay={i + 1}>
                <img src={f.img} alt={f.alt} width="52" height="52" loading="lazy" decoding="async" />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
