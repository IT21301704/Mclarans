import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/shop.js'

export default function CakeCard({ cake }) {
  const { addItem } = useCart()
  const [sizeId, setSizeId] = useState(cake.sizes[0].id)
  const [added, setAdded] = useState(false)

  const size = cake.sizes.find((s) => s.id === sizeId)

  const handleAdd = () => {
    addItem(cake, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="cake-card">
      <div className="cake-image" style={{ background: cake.tint }}>
        <span role="img" aria-label={cake.name}>{cake.emoji}</span>
      </div>
      <div className="cake-body">
        <h3>{cake.name}</h3>
        <p>{cake.description}</p>
        <div className="cake-order-row">
          <label className="cake-size">
            Size
            <select value={sizeId} onChange={(e) => setSizeId(e.target.value)}>
              {cake.sizes.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label} — {formatPrice(s.price)}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className={`btn btn-primary btn-add ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}
