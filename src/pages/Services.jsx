import { Link } from 'react-router-dom'

const services = [
  {
    icon: '⚡',
    title: 'Fiber Broadband',
    text: 'Fiber-to-the-home and fiber-to-the-business with symmetrical speeds up to 1 Gbps. Unlimited data plans, free professional installation, and a Wi-Fi 6 router included.',
    points: ['Up to 1 Gbps symmetrical', 'Unlimited data options', 'Wi-Fi 6 router included'],
  },
  {
    icon: '📱',
    title: 'Mobile Plans',
    text: 'Prepaid and postpaid mobile plans on our nationwide 4G/5G network. Generous data bundles, unlimited calls, and international roaming in 100+ countries.',
    points: ['Nationwide 4G/5G coverage', 'Prepaid & postpaid options', 'Roaming in 100+ countries'],
  },
  {
    icon: '🏢',
    title: 'Enterprise Connectivity',
    text: 'Dedicated internet access, leased lines, MPLS, and SD-WAN engineered for business-critical operations, with SLAs up to 99.99% and proactive monitoring.',
    points: ['Dedicated leased lines', 'SD-WAN & MPLS', '99.99% SLA available'],
  },
  {
    icon: '☁️',
    title: 'Cloud & Hosted PBX',
    text: 'Cloud telephony, hosted PBX, and unified communications. Keep your numbers, add lines in minutes, and connect remote teams on any device.',
    points: ['Hosted PBX & SIP trunks', 'Video & team messaging', 'Scale lines on demand'],
  },
  {
    icon: '🌐',
    title: 'IoT Connectivity',
    text: 'Managed SIM and LPWAN connectivity for fleets, sensors, and smart devices, with a central dashboard to monitor every connection in real time.',
    points: ['Managed IoT SIMs', 'Fleet & sensor networks', 'Real-time dashboards'],
  },
  {
    icon: '🛡️',
    title: 'Network Security',
    text: 'Managed firewalls, DDoS protection, and secure remote access to keep your connectivity — and your business — protected around the clock.',
    points: ['Managed firewall', 'DDoS protection', 'Secure remote access'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Complete telecommunications solutions for homes, businesses, and
            everything in between.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map(({ icon, title, text, points }) => (
              <div className="card service-card" key={title}>
                <div className="card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="check-list small">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2>Not Sure Which Service Fits?</h2>
          <p>Our team will help you find the right solution for your needs.</p>
          <Link to="/contact" className="btn btn-light">Get a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
