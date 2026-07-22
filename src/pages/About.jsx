import { Link } from 'react-router-dom'

const values = [
  {
    icon: '🥚',
    title: 'Real Ingredients',
    text: 'Real butter, fresh eggs, and proper Belgian chocolate — never shortcuts.',
  },
  {
    icon: '🔥',
    title: 'Baked to Order',
    text: 'Nothing sits on a shelf. Every cake is baked fresh for your order date.',
  },
  {
    icon: '🤝',
    title: 'Personal Touch',
    text: 'You talk directly to the baker — from first message to final delivery.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Mclarans Cakes</h1>
          <p>A home bakery built on one belief: everyone deserves great cake.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>From our kitchen to your celebration</h2>
            <p>
              Mclarans Cakes started as a passion for baking shared with family
              and friends. Word spread, orders grew, and today we bake
              birthday cakes, celebration centrepieces, and everyday treats for
            customers across the area.
            </p>
            <p>
              We keep things simple: quality ingredients, honest prices, and
              cakes that taste as good as they look. When you order from us,
              you&apos;re not buying from a factory — you&apos;re getting a cake baked
              just for you.
            </p>
            <Link to="/menu" className="btn btn-primary">Order Your Cake</Link>
          </div>
          <div className="about-visual">
            <span>👩‍🍳</span>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>What We Stand For</h2>
          </div>
          <div className="card-grid">
            {values.map((value) => (
              <div className="card" key={value.title}>
                <div className="card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
