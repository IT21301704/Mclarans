import { Link } from 'react-router-dom'

const highlights = [
  {
    icon: '⚡',
    title: 'Fiber Broadband',
    text: 'Ultra-fast fiber to your home or office with speeds up to 1 Gbps and unlimited data options.',
  },
  {
    icon: '📱',
    title: 'Mobile Plans',
    text: 'Flexible prepaid and postpaid mobile plans with nationwide 4G/5G coverage.',
  },
  {
    icon: '🏢',
    title: 'Enterprise Connectivity',
    text: 'Dedicated leased lines, SD-WAN, and managed networks built for business-critical uptime.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Hosted PBX',
    text: 'Modern cloud telephony and unified communications that scale with your team.',
  },
]

const stats = [
  { value: '500K+', label: 'Customers Connected' },
  { value: '99.9%', label: 'Network Uptime' },
  { value: '24/7', label: 'Customer Support' },
  { value: '15+', label: 'Years of Service' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow">Mclarans Telecommunications</span>
            <h1>
              Connecting You to <span className="text-gradient">What Matters</span>
            </h1>
            <p>
              Blazing-fast fiber broadband, dependable mobile networks, and
              enterprise-grade connectivity — all backed by round-the-clock
              local support.
            </p>
            <div className="hero-actions">
              <Link to="/plans" className="btn btn-primary">View Plans</Link>
              <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="signal-ring ring-1" />
            <div className="signal-ring ring-2" />
            <div className="signal-ring ring-3" />
            <div className="signal-core">📡</div>
          </div>
        </div>
      </section>

      <section className="section stats-band">
        <div className="container stats-grid">
          {stats.map(({ value, label }) => (
            <div className="stat" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Everything You Need to Stay Connected</h2>
            <p>
              From home internet to nationwide enterprise networks, we deliver
              telecommunications services you can count on.
            </p>
          </div>
          <div className="card-grid">
            {highlights.map(({ icon, title, text }) => (
              <div className="card" key={title}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <h2>Why Choose Mclarans?</h2>
            <ul className="check-list">
              <li>Lightning-fast fiber network with 99.9% guaranteed uptime</li>
              <li>Transparent pricing — no hidden fees, no surprises</li>
              <li>Local support teams available 24/7, every day of the year</li>
              <li>Free installation and professional on-site setup</li>
              <li>Flexible plans that grow with your home or business</li>
            </ul>
            <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
          </div>
          <div className="promo-card">
            <span className="promo-tag">Limited Offer</span>
            <h3>Fiber 300 Mbps</h3>
            <p className="promo-price">
              $39<span>/month for the first 6 months</span>
            </p>
            <p>Unlimited data · Free router · Free installation</p>
            <Link to="/plans" className="btn btn-primary">Claim This Deal</Link>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2>Ready to Get Connected?</h2>
          <p>Join over 500,000 customers who trust Mclarans every day.</p>
          <Link to="/contact" className="btn btn-light">Get Started Today</Link>
        </div>
      </section>
    </>
  )
}
