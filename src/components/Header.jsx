import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Calendar, BookOpen, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Header({ onOpenPlanner }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : 'transparent'} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container header-inner">
        {/* Premium Framed Logo */}
        <a href="#/" className="logo-link" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logo-wrapper">
            <Logo isDarkHeader={!isScrolled || isMobileMenuOpen} />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop">
          <a href="#/" className="nav-link-item">
            Home
          </a>
          <a href="#/packages" className="nav-link-item">
            Tour Packages
          </a>
          <a href="#/experiences" className="nav-link-item">
            Desert Experiences
          </a>
          <a href="#/signature-experience" className="nav-link-item">
            Royal Experience
          </a>
          <a href="#/blog" className="nav-link-item">
            Travel Blog
          </a>
          <a href="#/about" className="nav-link-item">
            About Us
          </a>
          
          {/* Contact Dropdown Menu */}
          <div className="contact-dropdown-wrapper" style={{ position: 'relative' }}>
            <button className="nav-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              Contact
            </button>
            <div className="contact-dropdown-menu">
              <a href="#/contact" className="dropdown-link">
                Online Enquiry
              </a>
              <a 
                href="https://wa.me/919414149876?text=Hello%20Moomal%20Tours!%20I'd%20like%20to%20inquire%20about%20your%20desert%20safari%20and%20tours." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dropdown-link"
              >
                WhatsApp Chat
              </a>
              <a href="tel:+919414149876" className="dropdown-link">
                Direct Call Us
              </a>
            </div>
          </div>
        </nav>

        {/* Desktop Call to Action */}
        <div className="header-cta">
          <a 
            href="#/build-your-tour"
            className="btn-primary header-btn"
          >
            Build Your Tour
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          style={{ 
            color: (isMobileMenuOpen || !isScrolled) ? '#FFFFFF' : '#2C2925',
            zIndex: 101,
            position: 'relative'
          }}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`mobile-drawer-menu ${isMobileMenuOpen ? 'open' : ''}`}
        style={{ backgroundColor: '#12110F', color: '#ffffff' }}
      >
        <div className="mobile-drawer-header" style={{ marginBottom: '14px', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', paddingBottom: '8px' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', display: 'block', marginBottom: '4px' }}>Moomal Tours Jaisalmer</span>
          <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-muted-light)', fontStyle: 'italic' }}>Hereditary Thar Safari Guides</span>
        </div>

        <div className="mobile-nav-links">
          {[
            { path: '#/', label: 'Home', num: '01' },
            { path: '#/packages', label: 'Tour Packages', num: '02' },
            { path: '#/experiences', label: 'Desert Experiences', num: '03' },
            { path: '#/signature-experience', label: 'Royal Experience', num: '04' },
            { path: '#/blog', label: 'Travel Blog', num: '05' },
            { path: '#/about', label: 'About Us', num: '06' },
            { path: '#/contact', label: 'Contact Us', num: '07' }
          ].map(item => (
            <a 
              key={item.path}
              href={item.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-nav-link-modern"
            >
              <span className="mobile-nav-link-num">{item.num}</span>
              <span className="mobile-nav-link-text">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="mobile-drawer-footer-card" style={{ marginTop: '14px', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(197,160,89,0.12)', borderRadius: '6px' }}>
          <h4 style={{ fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-primary-gold)', marginBottom: '4px', letterSpacing: '0.08em' }}>Direct Concierge Desk</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
            <li>
              <a href="tel:+919414149876" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted-light)', textDecoration: 'none' }}>
                <Phone size={12} className="text-[#C5A059]" /> Call: +91 94141 49876
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/919414149876?text=Hello%20Moomal%20Tours!%20I'd%20like%20to%20inquire%20about%20a%20desert%20safari%20and%20tours." 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted-light)', textDecoration: 'none' }}
              >
                <Compass size={12} className="text-[#C5A059]" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div style={{ marginTop: '12px' }}>
          <a 
            href="#/build-your-tour"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary"
            style={{ display: 'block', width: '100%', padding: '10px 0', textAlign: 'center', borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem' }}
          >
            Build Your Tour
          </a>
        </div>
      </div>
    </header>
  );
}
