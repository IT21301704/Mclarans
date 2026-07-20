import { useState } from 'react'

const contactDetails = [
  { icon: '📞', title: 'Hotline', lines: ['+94 11 200 0000', 'Available 24/7'] },
  { icon: '✉️', title: 'Email', lines: ['support@mclarans.com', 'sales@mclarans.com'] },
  { icon: '📍', title: 'Head Office', lines: ['100 Connectivity Drive', 'Colombo, Sri Lanka'] },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Questions about coverage, plans, or your account? We&apos;re here
            around the clock.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            {contactDetails.map(({ icon, title, lines }) => (
              <div className="card contact-card" key={title}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success" role="status">
                <div className="card-icon">✅</div>
                <h3>Thanks, {form.name || 'friend'}!</h3>
                <p>
                  Your message has been received. Our team will get back to you
                  within one business day.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your full name"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Phone (optional)
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+94 7X XXX XXXX"
                    />
                  </label>
                  <label>
                    Subject
                    <select value={form.subject} onChange={update('subject')}>
                      <option>General Inquiry</option>
                      <option>New Connection</option>
                      <option>Technical Support</option>
                      <option>Billing</option>
                      <option>Enterprise Sales</option>
                    </select>
                  </label>
                </div>
                <label>
                  Message
                  <textarea
                    required
                    rows="5"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="How can we help?"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
