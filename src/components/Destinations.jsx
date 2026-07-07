import React from 'react';
import { Landmark, Compass, Eye, ShieldCheck } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 'fort',
    title: 'The Golden Living Fort',
    subtitle: 'Jaisalmer Fort',
    img: '/jaisalmer_fort_hero.png',
    desc: 'The only living fort in India, where a quarter of the city’s population resides within its golden sandstone walls. A labyrinth of medieval streets, Jain temples, and old havelis.',
    tags: ['12th Century', 'World Heritage', 'Royalty'],
    icon: Landmark
  },
  {
    id: 'dunes',
    title: 'The Shimmering Sands',
    subtitle: 'Sam Sand Dunes',
    img: '/sam_sand_dunes.png',
    desc: 'Vast sweeps of wind-carved desert dunes. Home to luxury desert glamping, camel safaris at twilight, and mesmerizing folk music under the Thar desert sky.',
    tags: ['Desert Safari', 'Luxury Glamping', 'Stargazing'],
    icon: Compass
  },
  {
    id: 'haveli',
    title: 'Sandstone Lace & Stone Carving',
    subtitle: 'Patwon Ki Haveli',
    img: '/haveli_heritage.png',
    desc: 'A cluster of five magnificent havelis built by wealthy merchants. Known for their incredibly fine, lace-like carvings in golden sandstone that defy the density of stone.',
    tags: ['Heritage Walk', 'Rajasthani Architecture', 'Intricate Art'],
    icon: Eye
  },
  {
    id: 'lake',
    title: 'Sacred Oasis of Jaisalmer',
    subtitle: 'Gadisar Lake',
    img: '/gadisar_lake.png',
    desc: 'A man-made water reservoir constructed in 1367 AD, framed by artistic shrines, ghats, and yellow sandstone archways (Tillon ki Pol). A tranquil sanctuary in the dry desert.',
    tags: ['Tranquil Boating', 'Migratory Birds', 'Ancient Shrines'],
    icon: ShieldCheck
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-[#FCFBF9]">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Sacred Spaces & Legacies</span>
          <h2 className="section-title-dark">Explore the Wonders of Jaisalmer</h2>
          <div className="section-divider"></div>
          <p>
            Every sandstone block in Jaisalmer tells a story of royalty, resilient merchants, and the nomadic romance of the Thar. Discover our curated destination hubs.
          </p>
        </div>

        {/* Grid Layout - Premium staggered card designs */}
        <div className="destinations-grid">
          {DESTINATIONS.map((dest, idx) => {
            const Icon = dest.icon;
            // Add a staggered effect on desktop (even cards shifted slightly down)
            const isStaggered = idx % 2 === 1;
            return (
              <div 
                key={dest.id}
                className={`destination-card ${isStaggered ? 'staggered' : ''}`}
              >
                {/* Image Container with Zoom effect */}
                <div className="dest-image-wrapper">
                  <img 
                    src={`${import.meta.env.BASE_URL}${dest.img.slice(1)}`} 
                    alt={dest.subtitle}
                    className="dest-img"
                  />
                  <div className="dest-gradient-overlay"></div>
                  
                  {/* Floating Icon */}
                  <div className="dest-icon-badge">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Overlay/Section */}
                <div className="dest-content">
                  <span className="dest-kicker">
                    {dest.title}
                  </span>
                  <h3 className="dest-title">
                    {dest.subtitle}
                  </h3>
                  <p className="dest-desc">
                    {dest.desc}
                  </p>

                  {/* Tags and Direct WhatsApp Inquiry */}
                  <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div className="dest-tags">
                      {dest.tags.map((tag) => (
                        <span key={tag} className="dest-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`https://wa.me/919414149876?text=${encodeURIComponent(`Hello Moomal Tours! I'm interested in booking a private guided tour to ${dest.subtitle} (${dest.title}). Could you please send me pricing and details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold"
                      style={{ fontSize: '10px', padding: '8px 16px', borderRadius: '4px' }}
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom padding adjustment for staggered layout */}
        <div style={{ height: '80px' }}></div>
      </div>
    </section>
  );
}
