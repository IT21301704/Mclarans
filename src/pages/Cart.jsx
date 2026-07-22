import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { shop, formatPrice } from '../data/shop.js'

const emptyDetails = {
  name: '',
  phone: '',
  method: 'pickup',
  date: '',
  address: '',
  notes: '',
}

function buildOrderMessage(items, total, details, orderRef) {
  const lines = [
    `🎂 NEW ORDER — ${shop.name}`,
    `Order Ref: ${orderRef}`,
    '',
    'Items:',
    ...items.map(
      (item) =>
        `• ${item.name} (${item.sizeLabel}) x${item.qty} — ${formatPrice(item.price * item.qty)}`,
    ),
    '',
    `Total: ${formatPrice(total)}`,
    '',
    `Customer: ${details.name}`,
    `Phone: ${details.phone}`,
    `Method: ${details.method === 'pickup' ? 'Pickup' : 'Delivery'}`,
    `Needed on: ${details.date}`,
  ]
  if (details.method === 'delivery' && details.address) {
    lines.push(`Address: ${details.address}`)
  }
  if (details.notes) {
    lines.push(`Notes: ${details.notes}`)
  }
  return lines.join('\n')
}

export default function Cart() {
  const { items, total, updateQty, removeItem, clearCart } = useCart()
  const [details, setDetails] = useState(emptyDetails)
  const [placedOrder, setPlacedOrder] = useState(null)

  const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)

  const handleChange = (e) =>
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const orderRef = `MC-${Date.now().toString(36).toUpperCase()}`
    const message = buildOrderMessage(items, total, details, orderRef)
    setPlacedOrder({
      orderRef,
      message,
      whatsappUrl: `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`,
      mailtoUrl: `mailto:${shop.email}?subject=${encodeURIComponent(
        `Cake Order ${orderRef}`,
      )}&body=${encodeURIComponent(message)}`,
    })
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (placedOrder) {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <h1>Order Ready to Send! 🎉</h1>
            <p>One last step — send your order so we receive it.</p>
          </div>
        </section>
        <section className="section">
          <div className="container order-confirm">
            <div className="form-success">
              <div className="card-icon">✅</div>
              <h3>Your order reference is {placedOrder.orderRef}</h3>
              <p>
                Tap a button below to send your order to us on WhatsApp
                (fastest) or by email. We&apos;ll reply to confirm your order and
                share payment details.
              </p>
              <div className="hero-actions confirm-actions">
                <a
                  href={placedOrder.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  📲 Send via WhatsApp
                </a>
                <a href={placedOrder.mailtoUrl} className="btn btn-outline">
                  ✉️ Send via Email
                </a>
              </div>
              <details className="order-preview">
                <summary>View order summary</summary>
                <pre>{placedOrder.message}</pre>
              </details>
              <p>
                <Link to="/menu">← Back to the menu</Link>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Your Cart</h1>
          <p>Review your cakes and place your order below.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div className="form-success empty-cart">
              <div className="card-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Head over to the menu and pick something sweet.</p>
              <Link to="/menu" className="btn btn-primary">Browse Cakes</Link>
            </div>
          ) : (
            <div className="checkout-grid">
              <div className="cart-panel">
                <h3>Order Items</h3>
                <ul className="cart-list">
                  {items.map((item) => (
                    <li key={item.key} className="cart-item">
                      <span className="cart-item-emoji">{item.emoji}</span>
                      <div className="cart-item-info">
                        <strong>{item.name}</strong>
                        <span>{item.sizeLabel} · {formatPrice(item.price)}</span>
                      </div>
                      <div className="qty-controls">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQty(item.key, item.qty - 1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQty(item.key, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-total">
                        {formatPrice(item.price * item.qty)}
                      </span>
                      <button
                        type="button"
                        className="cart-remove"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.key)}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="cart-total-row">
                  <span>Total</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Your Details</h3>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      name="name"
                      required
                      value={details.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={details.phone}
                      onChange={handleChange}
                      placeholder="07X XXX XXXX"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Pickup or Delivery
                    <select name="method" value={details.method} onChange={handleChange}>
                      <option value="pickup">Pickup</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </label>
                  <label>
                    Date Needed
                    <input
                      name="date"
                      type="date"
                      required
                      min={minDate}
                      value={details.date}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                {details.method === 'delivery' && (
                  <label>
                    Delivery Address
                    <textarea
                      name="address"
                      rows="2"
                      required
                      value={details.address}
                      onChange={handleChange}
                      placeholder="Street, city"
                    />
                  </label>
                )}
                <label>
                  Notes (optional)
                  <textarea
                    name="notes"
                    rows="3"
                    value={details.notes}
                    onChange={handleChange}
                    placeholder="Message on the cake, allergies, candles…"
                  />
                </label>
                <button type="submit" className="btn btn-primary btn-block">
                  Place Order — {formatPrice(total)}
                </button>
                <p className="checkout-note">
                  Your order is sent to us on WhatsApp or email — no online
                  payment needed now. We&apos;ll confirm and arrange payment with
                  you directly.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
