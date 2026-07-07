import React from 'react';
import { Compass, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Brand Panel */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrapper">
              <Logo isDarkHeader={true} />
            </div>
            <p className="footer-brand-desc">
              Moomal Tours is a bespoke luxury destination specialist centered in Jaisalmer. We curate personalized private desert expeditions, camp safaris, and heritage tours with high-touch local expertise.
            </p>
            
            {/* Social Icons */}
            <div className="footer-social-wrapper">
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-column-title">Explore</h4>
            <ul className="footer-links-list">
              <li><a href="#destinations" className="footer-link-anchor">Destinations</a></li>
              <li><a href="#itineraries" className="footer-link-anchor">Curated Itineraries</a></li>
              <li><a href="#experiences" className="footer-link-anchor">Desert Camp Vibe</a></li>
              <li><a href="#why-us" className="footer-link-anchor">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-column-title">Desert Office</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span>Sam Sand Dunes Road, Jaisalmer, Rajasthan, 345001 India</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <span>+919352803009</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span>inquire@moomaltours.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="footer-column-title">Stay Inspired</h4>
            <p className="footer-newsletter-desc">
              Subscribe to receive seasonal travel guides, secret dune locations, and luxury campaign offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="footer-newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                className="footer-input"
              />
              <button 
                type="submit" 
                className="btn-primary footer-subscribe-btn"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Eco-Tourism commitment banner */}
        <div className="footer-bottom-bar">
          <div className="footer-impact-banner">
            <div className="footer-impact-icon-wrapper">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h5 className="footer-impact-title">Positive Impact Initiative</h5>
              <p className="footer-impact-desc">
                We pledge 1% of all booking revenues to sand dune conservation in Rajasthan and direct financial support to desert artisan weaver cooperatives.
              </p>
            </div>
          </div>
          
          <div className="footer-copyright">
            © {new Date().getFullYear()} Moomal Tours Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
