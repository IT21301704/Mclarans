import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <Logo />
            <span className="brand-name">
              Mclarans<span className="brand-accent"> Telecom</span>
            </span>
          </div>
          <p>
            Reliable fiber, mobile, and enterprise connectivity — keeping homes
            and businesses connected around the clock.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/plans">Plans &amp; Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Fiber Broadband</Link></li>
            <li><Link to="/services">Mobile Plans</Link></li>
            <li><Link to="/services">Enterprise Solutions</Link></li>
            <li><Link to="/services">Cloud PBX</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="tel:+94112000000">Hotline: +94 11 200 0000</a></li>
            <li><a href="mailto:support@mclarans.com">support@mclarans.com</a></li>
            <li>24/7 Customer Care</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Mclarans Telecommunications. All rights reserved.</p>
      </div>
    </footer>
  )
}
