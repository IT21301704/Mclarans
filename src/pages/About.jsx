import { Link } from 'react-router-dom'

const values = [
  {
    icon: '🤝',
    title: 'Customer First',
    text: 'Every decision starts with our customers. Real people answer our phones, and real engineers fix problems fast.',
  },
  {
    icon: '🔧',
    title: 'Reliability',
    text: 'We build and maintain our own network infrastructure so we can stand behind our 99.9% uptime promise.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    text: 'From fiber rollouts to 5G and IoT, we invest continuously so our customers always stay ahead.',
  },
  {
    icon: '🌍',
    title: 'Community',
    text: 'We connect schools, hospitals, and rural communities — because everyone deserves great connectivity.',
  },
]

const milestones = [
  { year: '2010', text: 'Mclarans founded with a single exchange and a promise: honest, reliable telecom service.' },
  { year: '2014', text: 'Launched nationwide mobile service on our own 4G network.' },
  { year: '2018', text: 'Began our fiber-to-the-home rollout, reaching 100,000 premises in the first two years.' },
  { year: '2022', text: '5G network launched in major cities; enterprise SD-WAN portfolio introduced.' },
  { year: '2025', text: 'Passed 500,000 connected customers with 99.9% measured network uptime.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Mclarans</h1>
          <p>
            For over 15 years, we&apos;ve been building the networks that keep
            homes, businesses, and communities connected.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Our Mission</h2>
            <p>
              Mclarans Telecommunications exists to make world-class
              connectivity simple, affordable, and dependable. We own and
              operate our infrastructure end-to-end — from fiber in the ground
              to towers in the air — so we never have to compromise on the
              quality of service we deliver.
            </p>
            <p>
              Today we serve more than half a million homes and thousands of
              businesses, backed by local support teams who pick up the phone
              24 hours a day.
            </p>
            <Link to="/contact" className="btn btn-primary">Work With Us</Link>
          </div>
          <div className="card-grid two-col">
            {values.map(({ icon, title, text }) => (
              <div className="card" key={title}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Journey</h2>
            <p>Key milestones on the road to connecting half a million customers.</p>
          </div>
          <div className="timeline">
            {milestones.map(({ year, text }) => (
              <div className="timeline-item" key={year}>
                <span className="timeline-year">{year}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2>Join the Mclarans Family</h2>
          <p>Experience telecom service the way it should be.</p>
          <Link to="/plans" className="btn btn-light">See Our Plans</Link>
        </div>
      </section>
    </>
  )
}
