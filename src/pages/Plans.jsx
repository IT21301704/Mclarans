import { Link } from 'react-router-dom'

const fiberPlans = [
  {
    name: 'Home Lite',
    price: 29,
    speed: '100 Mbps',
    features: ['Unlimited data', 'Free Wi-Fi router', 'Free installation', 'Standard support'],
    featured: false,
  },
  {
    name: 'Home Plus',
    price: 49,
    speed: '300 Mbps',
    features: ['Unlimited data', 'Wi-Fi 6 router included', 'Free installation', 'Priority support'],
    featured: true,
  },
  {
    name: 'Home Max',
    price: 79,
    speed: '1 Gbps',
    features: ['Unlimited data', 'Wi-Fi 6 mesh (2 units)', 'Free installation', '24/7 priority support'],
    featured: false,
  },
]

const mobilePlans = [
  {
    name: 'Mobile Go',
    price: 15,
    speed: '20 GB data',
    features: ['Unlimited local calls', 'Unlimited SMS', '4G/5G access', 'Data rollover'],
    featured: false,
  },
  {
    name: 'Mobile Pro',
    price: 25,
    speed: '60 GB data',
    features: ['Unlimited local calls', 'Unlimited SMS', '4G/5G access', 'Hotspot sharing'],
    featured: true,
  },
  {
    name: 'Mobile Unlimited',
    price: 40,
    speed: 'Unlimited data',
    features: ['Unlimited everything', '5G priority speeds', 'Roaming bundle included', 'Hotspot sharing'],
    featured: false,
  },
]

function PlanGroup({ title, subtitle, plans, unit }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="plan-grid">
          {plans.map(({ name, price, speed, features, featured }) => (
            <div className={`plan-card ${featured ? 'featured' : ''}`} key={name}>
              {featured && <span className="plan-badge">Most Popular</span>}
              <h3>{name}</h3>
              <p className="plan-speed">{speed}</p>
              <p className="plan-price">
                ${price}
                <span>/{unit}</span>
              </p>
              <ul className="check-list small">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${featured ? 'btn-primary' : 'btn-outline'}`}>
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Plans() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Plans &amp; Pricing</h1>
          <p>
            Simple, transparent pricing with no hidden fees. All plans are
            contract-free — upgrade or downgrade anytime.
          </p>
        </div>
      </section>

      <PlanGroup
        title="Fiber Broadband Plans"
        subtitle="Ultra-fast home internet with unlimited data on every plan."
        plans={fiberPlans}
        unit="month"
      />

      <div className="container"><hr className="divider" /></div>

      <PlanGroup
        title="Mobile Plans"
        subtitle="Stay connected on the go with our nationwide 4G/5G network."
        plans={mobilePlans}
        unit="month"
      />

      <section className="section cta-band">
        <div className="container center">
          <h2>Need a Business Solution?</h2>
          <p>
            Enterprise plans are tailored to your needs — dedicated bandwidth,
            SLAs, and volume pricing.
          </p>
          <Link to="/contact" className="btn btn-light">Request a Custom Quote</Link>
        </div>
      </section>
    </>
  )
}
