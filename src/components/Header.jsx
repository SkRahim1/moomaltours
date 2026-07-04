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
    <header className={`main-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container header-inner">
        {/* Premium Framed Logo */}
        <a href="#" className="logo-link">
          <div className="logo-wrapper">
            <Logo isDarkHeader={!isScrolled} />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop">
          <a href="#destinations" className="nav-link-item">
            Destinations
          </a>
          <a href="#itineraries" className="nav-link-item">
            Curated Itineraries
          </a>
          <a href="#experiences" className="nav-link-item">
            Desert Experiences
          </a>
          <a href="#why-us" className="nav-link-item">
            Our Impact
          </a>
          
          {/* Contact Dropdown Menu */}
          <div className="contact-dropdown-wrapper" style={{ position: 'relative' }}>
            <button className="nav-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              Contact Us
            </button>
            <div className="contact-dropdown-menu">
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
          <button 
            onClick={onOpenPlanner}
            className="btn-primary header-btn"
          >
            Design a Trip
          </button>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          style={{ color: isScrolled ? '#2C2925' : '#FFFFFF' }}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a 
            href="#destinations" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <Compass size={20} className="inclusion-icon" /> Destinations
          </a>
          <a 
            href="#itineraries" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <Calendar size={20} className="inclusion-icon" /> Curated Itineraries
          </a>
          <a 
            href="#experiences" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <Compass size={20} className="inclusion-icon" /> Desert Experiences
          </a>
          <a 
            href="#why-us" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-nav-link"
          >
            <BookOpen size={20} className="inclusion-icon" /> Our Impact
          </a>
          {/* Mobile direct Call & WhatsApp Links */}
          <a 
            href="https://wa.me/919414149876?text=Hello%20Moomal%20Tours!%20I'd%20like%20to%20inquire%20about%20your%20desert%20safari%20and%20tours." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Compass size={20} className="inclusion-icon" /> Chat on WhatsApp
          </a>
          <a 
            href="tel:+919414149876" 
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={20} className="inclusion-icon" /> Direct Call Us
          </a>
        </div>

        <div>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenPlanner();
            }}
            className="btn-primary"
            style={{ width: '100%', padding: '16px 0' }}
          >
            Design a Trip
          </button>
        </div>
      </div>
    </header>
  );
}
