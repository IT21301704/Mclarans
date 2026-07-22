import { useState } from 'react'
import CakeCard from '../components/CakeCard.jsx'
import { cakes, categories } from '../data/cakes.js'

export default function Menu() {
  const [category, setCategory] = useState('all')

  const visible =
    category === 'all' ? cakes : cakes.filter((c) => c.category === category)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Cake Menu</h1>
          <p>
            Every cake is baked fresh to order. Pick a size, add it to your
            cart, and check out when you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-chip ${category === cat.id ? 'active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="cake-grid">
            {visible.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
