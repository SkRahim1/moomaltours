import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/jaisalmer_fort_hero.png',
  '/camel_sunset.png',
  '/sam_sand_dunes.png'
];

export default function Hero({ onOpenPlanner }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image Carousel with cross-fade */}
      <div className="hero-bg-carousel">
        {HERO_IMAGES.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`hero-bg-image-wrapper ${index === currentIdx ? 'active' : ''}`}
          >
            <img 
              src={`${import.meta.env.BASE_URL}${imgUrl.slice(1)}`} 
              alt="Rajasthan Desert Landscape" 
              className="hero-bg-image"
            />
          </div>
        ))}
      </div>

      {/* Dark luxury gradient overlays */}
      <div className="hero-overlay-gradient"></div>

      {/* Hero Content */}
      <div className="container hero-content">
        <span className="hero-tagline">
          Moomal Tours
        </span>
        
        <h1 className="hero-title">
          Bespoke Journeys into the <br />
          <span className="hero-title-italic">Golden City</span> of Thar
        </h1>

        <p className="hero-desc">
          Uncover the ancient secrets of Jaisalmer Fort, venture deep into the shimmering dunes of Sam, and experience Rajasthani hospitality in its most luxurious form.
        </p>

        <div className="hero-actions">
          <a 
            href="#/build-your-tour"
            className="btn-primary"
            style={{ flex: 1, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Design Your Journey
          </a>
          
          <a 
            href="#itineraries" 
            className="hero-btn-outline"
            style={{ flex: 1, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Explore Itineraries
          </a>
        </div>
      </div>

      {/* Luxury scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line-container">
          <div className="scroll-line-active"></div>
        </div>
      </div>
    </section>
  );
}
