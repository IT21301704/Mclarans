import { useState } from 'react'
import { shop } from '../data/shop.js'

const emptyForm = {
  name: '',
  phone: '',
  occasion: 'Birthday',
  flavor: 'Chocolate',
  size: '1kg',
  date: '',
  message: '',
  ideas: '',
}

function buildRequestMessage(form) {
  return [
    `🎨 CUSTOM CAKE REQUEST — ${shop.name}`,
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Occasion: ${form.occasion}`,
    `Flavour: ${form.flavor}`,
    `Size: ${form.size}`,
    `Needed on: ${form.date}`,
    form.message ? `Message on cake: ${form.message}` : null,
    form.ideas ? `Design ideas: ${form.ideas}` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

export default function CustomCake() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(null)

  const minDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = buildRequestMessage(form)
    setSent({
      whatsappUrl: `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`,
      mailtoUrl: `mailto:${shop.email}?subject=${encodeURIComponent(
        'Custom Cake Request',
      )}&body=${encodeURIComponent(message)}`,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Custom Cakes</h1>
          <p>
            Dream it, we bake it — themed birthday cakes, anniversary cakes,
            and anything in between. {shop.leadTimeNote}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card contact-card">
              <div className="card-icon">🎨</div>
              <h3>Any theme</h3>
              <p>
                Cartoon characters, florals, drip cakes, photo cakes — send us
                your inspiration pictures on WhatsApp after you submit.
              </p>
            </div>
            <div className="card contact-card">
              <div className="card-icon">🍫</div>
              <h3>Your flavours</h3>
              <p>
                Chocolate, vanilla, ribbon, red velvet, butterscotch, or mix
                and match layers.
              </p>
            </div>
            <div className="card contact-card">
              <div className="card-icon">💰</div>
              <h3>Free quote</h3>
              <p>
                Custom cakes are priced by size and design. We&apos;ll send you a
                quote before you commit — no surprises.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="form-success">
              <div className="card-icon">✅</div>
              <h3>Almost there!</h3>
              <p>
                Send your request to us on WhatsApp or email and we&apos;ll get
                back to you with a quote.
              </p>
              <div className="hero-actions confirm-actions">
                <a
                  href={sent.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  📲 Send via WhatsApp
                </a>
                <a href={sent.mailtoUrl} className="btn btn-outline">
                  ✉️ Send via Email
                </a>
              </div>
              <p>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setSent(null)}
                >
                  ← Edit my request
                </button>
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Tell us about your cake</h3>
              <div className="form-row">
                <label>
                  Name
                  <input
                    name="name"
                    required
                    value={form.name}
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
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07X XXX XXXX"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Occasion
                  <select name="occasion" value={form.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Wedding</option>
                    <option>Baby Shower</option>
                    <option>Graduation</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Flavour
                  <select name="flavor" value={form.flavor} onChange={handleChange}>
                    <option>Chocolate</option>
                    <option>Vanilla</option>
                    <option>Ribbon</option>
                    <option>Red Velvet</option>
                    <option>Butterscotch</option>
                    <option>Fruit &amp; Cream</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  Approximate Size
                  <select name="size" value={form.size} onChange={handleChange}>
                    <option>1kg</option>
                    <option>1.5kg</option>
                    <option>2kg</option>
                    <option>3kg</option>
                    <option>Multi-tier</option>
                  </select>
                </label>
                <label>
                  Date Needed
                  <input
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label>
                Message on the cake (optional)
                <input
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Happy Birthday Amara!"
                />
              </label>
              <label>
                Design ideas
                <textarea
                  name="ideas"
                  rows="4"
                  required
                  value={form.ideas}
                  onChange={handleChange}
                  placeholder="Theme, colours, decorations, anything you have in mind…"
                />
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                Request a Quote
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
