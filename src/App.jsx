import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Itineraries from './components/Itineraries';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

// New components to be created
import PackagesPage from './components/PackagesPage';
import ExperiencesHub from './components/ExperiencesHub';
import RoyalExperience from './components/RoyalExperience';
import BlogSystem from './components/BlogSystem';
import BuildTourWizard from './components/BuildTourWizard';
import TrustReviews from './components/TrustReviews';
import GallerySection from './components/GallerySection';
import AboutContactFAQ from './components/AboutContactFAQ';

import './App.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState({ path: 'home', params: {} });
  
  // Listen to hash change for custom routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      
      // If the hash is a local section anchor (doesn't start with '#/')
      if (hash.startsWith('#') && !hash.startsWith('#/')) {
        const targetId = hash.slice(1);
        setCurrentRoute({ path: 'home', params: {} });
        
        // Wait for page to render, then scroll to section
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return;
      }
      
      const pathParts = hash.replace('#/', '').split('/');
      const mainPath = pathParts[0] || 'home';
      const subPath = pathParts[1] || null;
      
      setCurrentRoute({
        path: mainPath === '' ? 'home' : mainPath,
        params: { id: subPath }
      });
      
      // Scroll to top on navigation (except when navigating to local anchors)
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on initialization
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // SEO and Meta Tags Manager
  useEffect(() => {
    let title = 'Moomal Tours | Bespoke Luxury Desert Safaris & Tours in Jaisalmer';
    let description = 'Experience the Golden City of Jaisalmer, Rajasthan with Moomal Tours. Custom-curated luxury desert safaris, boutique heritage haveli tours, and bespoke private itineraries.';
    let schemaMarkup = null;

    if (currentRoute.path === 'packages') {
      if (currentRoute.params.id) {
        const pkgId = currentRoute.params.id;
        const name = pkgId.charAt(0).toUpperCase() + pkgId.slice(1) + ' Package';
        title = `${name} Jaisalmer | Luxury 3-Day Itinerary | Moomal Tours`;
        description = `Book our premium Jaisalmer ${name}. Includes 3-Day tour, private luxury desert camping, sunset camel safari, folk cultural night, Kuldhara tour, and private transport.`;
        schemaMarkup = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `${name} Jaisalmer - Moomal Tours`,
          "description": description,
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": pkgId === 'honeymoon' ? "18000" : pkgId === 'couple' ? "12500" : pkgId === 'friends' ? "3800" : "4500",
            "priceValidUntil": "2027-12-31"
          }
        };
      } else {
        title = 'Jaisalmer Tour Packages | Couple, Family & Honeymoon Desert Stays';
        description = 'Discover Jaisalmer with our curated luxury packages. Stays in boutique heritage hotels & premium desert camps. Tailored couple, family, and group options.';
      }
    } else if (currentRoute.path === 'experiences') {
      if (currentRoute.params.id) {
        const expId = currentRoute.params.id.replace(/-/g, ' ');
        const name = expId.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        title = `${name} in Jaisalmer | Luxury Thar Desert Activities | Moomal Tours`;
        description = `Book a premium ${name} in Jaisalmer. Moomal Tours specializes in custom candlelight dinners, dune dining, stargazing, and private photo sessions.`;
      } else {
        title = 'Thar Desert Activities | Stargazing, Camel Safaris & Candlelight Dinners';
        description = 'Browse our 18 hand-crafted desert experiences in Jaisalmer. Customize your trip with sunset high tea, drone photography, food tours, and folk dances.';
      }
    } else if (currentRoute.path === 'signature-experience') {
      title = 'Moomal Royal Desert Experience | Exclusive Private Dunes Stay';
      description = 'Our signature Jaisalmer package. Stay in a luxury camp, dine in a private sand dunes oasis under the stars, with folk music, Kalbelia dance, and stargazing.';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Moomal Royal Desert Experience",
        "description": description,
        "category": "Travel / Adventure"
      };
    } else if (currentRoute.path === 'blog') {
      if (currentRoute.params.id) {
        const blogTitle = currentRoute.params.id.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        title = `${blogTitle} | Jaisalmer Travel Guide | Moomal Tours`;
        description = `Read our local expert travel tips on: ${blogTitle}. Make your Jaisalmer trip unforgettable with local recommendations.`;
      } else {
        title = 'Jaisalmer Travel Blog | Desert Camping Guides & Hidden Places';
        description = 'Tips and recommendations from Jaisalmer locals. Read about Sam vs Khuri dunes, best times to visit, things to do, and traditional food guides.';
      }
    } else if (currentRoute.path === 'about') {
      title = 'About Us | Moomal Tours - Local Experts in Jaisalmer Tourism';
      description = 'Learn about Moomal Tours, our local expert guides, licensed drivers, and commitment to sustainable tourism and community support in the Thar desert.';
    } else if (currentRoute.path === 'contact') {
      title = 'Contact Moomal Tours | Book Jaisalmer Desert Camps & Trips';
      description = 'Contact our travel experts in Jaisalmer. Request a quote, ask details about pricing, or start a WhatsApp chat for instant bookings.';
      schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Moomal Tours",
        "image": "https://moomaltours.com/logo.png",
        "telephone": "+919414149876",
        "email": "inquire@moomaltours.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sam Sand Dunes Road",
          "addressLocality": "Jaisalmer",
          "addressRegion": "Rajasthan",
          "postalCode": "345001",
          "addressCountry": "IN"
        }
      };
    } else if (currentRoute.path === 'build-your-tour') {
      title = 'Build Your Own Tour | Custom Jaisalmer Itinerary Planner';
      description = 'Design your custom Jaisalmer journey online. Select activities like camel safari, candlelight dinners, and luxury camping for an instant quote.';
    }

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    
    // Inject schema markup in head
    const existingSchema = document.getElementById('jsonld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    if (schemaMarkup) {
      const script = document.createElement('script');
      script.id = 'jsonld-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }
  }, [currentRoute]);

  // View Switcher Router
  const renderView = () => {
    switch (currentRoute.path) {
      case 'home':
        return (
          <>
            <Hero />
            <Destinations />
            <PackagesPage activeId={null} />
            <Itineraries onSelectItinerary={(vibe) => window.location.hash = '#/build-your-tour'} />
            <Experiences />
            <TrustReviews />
            <GallerySection />
          </>
        );
      case 'packages':
        return <PackagesPage activeId={currentRoute.params.id} />;
      case 'experiences':
        return <ExperiencesHub activeId={currentRoute.params.id} />;
      case 'signature-experience':
        return <RoyalExperience />;
      case 'blog':
        return <BlogSystem activeId={currentRoute.params.id} />;
      case 'about':
        return <AboutContactFAQ activeSection="about" />;
      case 'contact':
        return <AboutContactFAQ activeSection="contact" />;
      case 'build-your-tour':
        return <BuildTourWizard />;
      case 'cancellation-policy':
        return <AboutContactFAQ activeSection="cancellation" />;
      default:
        return (
          <div className="container" style={{ padding: '160px 0', textDecoration: 'none', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>404 - Page Not Found</h2>
            <p style={{ marginBottom: '32px' }}>The desert trail you are looking for has been swept away by the wind.</p>
            <a href="#/" className="btn-primary">Return Home</a>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FCFBF9] text-[#2C2925] flex flex-col justify-between">
      {/* Header Navigation */}
      <Header onOpenPlanner={() => window.location.hash = '#/build-your-tour'} />

      {/* Main Content Area */}
      <main className="flex-1 pt-[var(--header-height)]">
        {renderView()}
      </main>

      {/* Footer Branding & Commitments */}
      <Footer />

      {/* Floating WhatsApp booking button */}
      <a 
        href="https://wa.me/919414149876?text=Hello%20Moomal%20Tours!%20I%20would%20like%20to%20enquire%20about%20a%20luxury%20Jaisalmer%20package."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-float-icon" fill="currentColor">
          <path d="M16 2a13.9 13.9 0 00-12 21l-1.9 6.8 7-1.8A13.9 13.9 0 1016 2zm6.7 19.9c-.3.8-1.5 1.5-2.1 1.7-.6.1-1.3.2-3.8-.8a15.7 15.7 0 01-6.5-5.7 6.8 6.8 0 01-1.4-3.6 4 4 0 011.3-3.1c.2-.2.4-.2.6-.2s.4 0 .5.1l1.3 2.7c.1.2.1.4 0 .6l-.5.8c-.2.2-.3.4-.1.6.4.7 1.4 2.3 2.5 3.3.9.9 1.8 1.4 2.5 1.7.3.1.6 0 .8-.2l.8-1c.2-.3.5-.2.7-.1l2.8 1.4c.2.1.4.2.4.3v1.4z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
