import React, { useState } from 'react';
import { Calendar, User, Star, Utensils, Shield, ArrowRight } from 'lucide-react';

const ITINERARIES = [
  {
    id: 'safari',
    title: 'The Nomad Royal Safari',
    duration: '3 Days / 2 Nights',
    style: 'Luxury Glamping & Wilderness',
    priceEstimate: 'From $1,200 / person',
    img: '/sam_sand_dunes.png',
    summary: 'A dramatic plunge into the Thar desert sand dunes. Spend your days on camel-back under the golden sun, and sleep in ultra-luxury air-conditioned canvas suites with private decks.',
    highlights: [
      'Private sunset camel caravan across Sam Dunes',
      'Candlelight gourmet Rajasthani dinner on a secluded dune',
      'Folk performance by local Manganiyar musicians around the campfire',
      'Overnight in a luxury camp with private ensuite bathrooms',
      'Guided historical tour of Jaisalmer Fort & Royal Palace'
    ],
    vibe: 'Safari & Wildlife'
  },
  {
    id: 'heritage',
    title: 'Desert Heritage & Haveli Trail',
    duration: '4 Days / 3 Nights',
    style: 'Boutique Heritage & Culture',
    priceEstimate: 'From $1,800 / person',
    img: '/haveli_heritage.png',
    summary: 'Uncover the wealth and artistic grandeur of old-world merchants. Stay in a restored 18th-century sand-stone haveli and explore intricate medieval architecture with local historians.',
    highlights: [
      'Architectural masterclass tour of Patwon & Salim Singh Havelis',
      'Tranquil sunrise boat ride on Gadisar Lake with musical flute accompaniment',
      'Private cooking workshop with a Royal Chef in a Haveli kitchen',
      'Guided heritage walk of the ruins of Kuldhara (abandoned village)',
      'Star-gazing session with an astronomer in the Thar desert wilderness'
    ],
    vibe: 'Cultural Heritage'
  },
  {
    id: 'mystique',
    title: 'Grand Thar Mystique',
    duration: '5 Days / 4 Nights',
    style: 'Ultra-Luxury Bespoke',
    priceEstimate: 'From $2,900 / person',
    img: '/jaisalmer_fort_hero.png',
    summary: 'The ultimate royal Rajasthani experience. Seamless luxury, private luxury transport, local hosts, and exclusive entries to heritage sights, combining fort palaces and remote desert camps.',
    highlights: [
      'Private helicopter arrival or luxury SUV transfers from Jodhpur',
      'Stay in the ultra-luxury fort hotel & boutique desert suites',
      'Champagne toast at the ancient Royal Cenotaphs (Bada Bagh) at sunset',
      'Off-road 4x4 desert adventure to the untouched Khuri Dunes',
      'Private audience with desert craftsmen and local folk artists'
    ],
    vibe: 'Romantic Escapes'
  }
];

export default function Itineraries({ onSelectItinerary }) {
  const [activeTab, setActiveTab] = useState(ITINERARIES[0].id);
  const activeItinerary = ITINERARIES.find(it => it.id === activeTab);

  return (
    <section id="itineraries" className="section-padding itineraries-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Curated Journeys</span>
          <h2 className="section-title-light">Signature Itineraries</h2>
          <div className="section-divider"></div>
          <p className="section-desc-light">
            Crafted as a starting point. Every itinerary can be customized to your precise desires, pace, and accommodation preferences.
          </p>
        </div>

        {/* Tabs Controls */}
        <div className="itineraries-tabs-wrapper">
          {ITINERARIES.map((it) => (
            <button
              key={it.id}
              onClick={() => setActiveTab(it.id)}
              className={`itinerary-tab-btn ${activeTab === it.id ? 'active' : ''}`}
            >
              {it.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="itinerary-display-grid">
          {/* Visual Showcase */}
          <div className="itinerary-visual-card">
            <div className="itinerary-visual-ratio">
              <img 
                src={activeItinerary.img} 
                alt={activeItinerary.title}
                className="itinerary-visual-img"
              />
              <div className="itinerary-visual-gradient"></div>
              
              {/* Badge */}
              <div className="itinerary-visual-overlay">
                <span className="itinerary-style-badge">
                  {activeItinerary.style}
                </span>
                <h4 className="itinerary-duration-text">
                  {activeItinerary.duration}
                </h4>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="itinerary-details-wrapper">
            <div>
              <span className="itinerary-style-kicker">
                {activeItinerary.style}
              </span>
              <h3 className="itinerary-details-title">
                {activeItinerary.title}
              </h3>
              <p className="itinerary-details-desc">
                {activeItinerary.summary}
              </p>

              {/* Highlights List */}
              <h4 className="itinerary-highlights-label">
                Experience Highlights
              </h4>
              <ul className="itinerary-highlights-list">
                {activeItinerary.highlights.map((highlight, idx) => (
                  <li key={idx} className="itinerary-highlight-item">
                    <span className="itinerary-bullet"></span>
                    <span className="itinerary-highlight-text">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA and Price Panel */}
            <div className="itinerary-cta-panel">
              <div>
                <span className="price-label">Estimated Cost</span>
                <span className="price-value">{activeItinerary.priceEstimate}</span>
              </div>
              
              <button 
                onClick={() => onSelectItinerary(activeItinerary.vibe)}
                className="btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                Inquire & Customize <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Key Luxury Inclusions (Horizontal list) */}
        <div className="inclusions-grid">
          <div className="inclusion-card">
            <User size={24} className="inclusion-icon" />
            <span className="inclusion-label">Private Guide</span>
            <span className="inclusion-desc">1-on-1 expert hosts</span>
          </div>
          <div className="inclusion-card">
            <Star size={24} className="inclusion-icon" />
            <span className="inclusion-label">Elite Lodging</span>
            <span className="inclusion-desc">Heritage havelis & camps</span>
          </div>
          <div className="inclusion-card">
            <Utensils size={24} className="inclusion-icon" />
            <span className="inclusion-label">Bespoke Dining</span>
            <span className="inclusion-desc">Private sands banquet</span>
          </div>
          <div className="inclusion-card">
            <Shield size={24} className="inclusion-icon" />
            <span className="inclusion-label">Peace of Mind</span>
            <span className="inclusion-desc">24/7 dedicated support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
