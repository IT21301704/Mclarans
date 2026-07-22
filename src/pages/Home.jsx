import { Link } from 'react-router-dom'
import CakeCard from '../components/CakeCard.jsx'
import { cakes } from '../data/cakes.js'
import { shop } from '../data/shop.js'

const featured = ['chocolate-fudge', 'birthday-sprinkle', 'red-velvet']

const steps = [
  {
    icon: '🍰',
    title: 'Pick your cake',
    text: 'Browse the menu, choose a size, and add your favourites to the cart.',
  },
  {
    icon: '📝',
    title: 'Place your order',
    text: 'Tell us your name, pickup or delivery details, and the date you need it.',
  },
  {
    icon: '📲',
    title: 'We confirm on WhatsApp',
    text: 'Your order reaches us instantly and we confirm with payment details.',
  },
  {
    icon: '🎉',
    title: 'Enjoy fresh cake',
    text: 'Collect your cake or get it delivered — baked fresh for your day.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">Homemade &amp; Baked Fresh</span>
            <h1>
              Delicious cakes,{' '}
              <span className="text-gradient">ordered in minutes</span>
            </h1>
            <p>
              From birthday centrepieces to tea-time butter cake, every Mclarans
              cake is baked to order with real butter, real chocolate, and a lot
              of love. Order online and we&apos;ll have it ready for your big day.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">Order a Cake</Link>
              <Link to="/custom" className="btn btn-light">Design a Custom Cake</Link>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-cake">🎂</span>
            <span className="float-treat treat-1">🧁</span>
            <span className="float-treat treat-2">🍓</span>
            <span className="float-treat treat-3">🍫</span>
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div>
            <span className="stat-value">100%</span>
            <span className="stat-label">Baked to Order</span>
          </div>
          <div>
            <span className="stat-value">9+</span>
            <span className="stat-label">Signature Cakes</span>
          </div>
          <div>
            <span className="stat-value">2 Days</span>
            <span className="stat-label">Custom Cake Lead Time</span>
          </div>
          <div>
            <span className="stat-value">★ 5.0</span>
            <span className="stat-label">Loved by Customers</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Customer Favourites</h2>
            <p>The cakes our customers keep coming back for.</p>
          </div>
          <div className="cake-grid">
            {cakes
              .filter((cake) => featured.includes(cake.id))
              .map((cake) => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
          </div>
          <div className="center-cta">
            <Link to="/menu" className="btn btn-outline">See the Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>How Ordering Works</h2>
            <p>Four simple steps from craving to cake.</p>
          </div>
          <div className="card-grid">
            {steps.map((step) => (
              <div className="card" key={step.title}>
                <div className="card-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2>Planning a celebration?</h2>
          <p>
            Tell us your theme, flavours, and date — we&apos;ll bake a custom cake
            that steals the show. {shop.leadTimeNote}
          </p>
          <Link to="/custom" className="btn btn-primary">Request a Custom Cake</Link>
        </div>
      </section>
    </>
  )
}
