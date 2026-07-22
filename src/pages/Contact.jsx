import { useState } from 'react'
import { shop } from '../data/shop.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = [
      `💬 MESSAGE — ${shop.name}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      '',
      form.message,
    ].join('\n')
    setSent({
      whatsappUrl: `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(text)}`,
      mailtoUrl: `mailto:${shop.email}?subject=${encodeURIComponent(
        'Message from website',
      )}&body=${encodeURIComponent(text)}`,
    })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Questions about an order or a cake idea? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card contact-card">
              <div className="card-icon">📲</div>
              <h3>WhatsApp</h3>
              <p>
                <a href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer">
                  {shop.whatsappDisplay}
                </a>
              </p>
              <p>Fastest way to reach us</p>
            </div>
            <div className="card contact-card">
              <div className="card-icon">✉️</div>
              <h3>Email</h3>
              <p><a href={`mailto:${shop.email}`}>{shop.email}</a></p>
            </div>
            <div className="card contact-card">
              <div className="card-icon">📍</div>
              <h3>Find Us</h3>
              <p>{shop.address}</p>
              <p>{shop.hours}</p>
            </div>
          </div>

          {sent ? (
            <div className="form-success">
              <div className="card-icon">✅</div>
              <h3>Ready to send!</h3>
              <p>Choose how you&apos;d like to send your message.</p>
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
                  ← Edit my message
                </button>
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
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
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
