import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { shop } from '../data/shop.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <Logo />
            <span className="brand-name">
              Mclarans<span className="brand-accent"> Cakes</span>
            </span>
          </div>
          <p>
            Freshly baked cakes made with love — order online for birthdays,
            celebrations, or just because you deserve a treat.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/menu">Cake Menu</Link></li>
            <li><Link to="/custom">Custom Cakes</Link></li>
            <li><Link to="/cart">Your Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp: {shop.whatsappDisplay}
              </a>
            </li>
            <li><a href={`mailto:${shop.email}`}>{shop.email}</a></li>
            <li>{shop.address}</li>
            <li>{shop.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {shop.name}. Baked fresh, always. 🧁</p>
      </div>
    </footer>
  )
}
