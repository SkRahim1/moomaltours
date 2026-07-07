import React, { useState } from 'react';
import { Sparkles, Heart, Compass, Check, ArrowRight, ShieldCheck, Camera, Star } from 'lucide-react';

export default function RoyalExperience() {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const message = `Hello Moomal Tours! I would like to book the signature *Moomal Royal Desert Experience*:
• Name: ${guestName}
• Phone: ${guestPhone}
• Preferred Date: ${travelDate}
Please verify availability for this private dunes luxury experience.`;
    
    const whatsappUrl = `https://wa.me/919352803009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="royal-experience-page">
      {/* Hero Header */}
      <section className="royal-hero-banner" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(18,17,15,0.95) 100%), url(/sam_sand_dunes.png)` }}>
        <div className="container royal-hero-content">
          <span className="royal-kicker-script"><Star size={16} className="inline text-[#C5A059] mr-2" /> Signature Experience <Star size={16} className="inline text-[#C5A059] ml-2" /></span>
          <h1 className="royal-title">Moomal Royal Desert Experience</h1>
          <p className="royal-tagline">An exclusive, high-touch overnight escape in the heart of the Thar Desert sand dunes.</p>
          <div className="royal-meta">
            <span>₹15,000 / Couple</span>
            <span className="dot-divider">|</span>
            <span>100% Private Setup</span>
          </div>
          <a href="#booking-form" className="btn-primary" style={{ marginTop: '24px' }}>Book the Signature Journey</a>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="royal-narrative-section section-padding bg-[#12110F] text-white">
        <div className="container">
          <div className="section-header">
            <span className="section-accent-title" style={{ color: 'var(--color-primary-gold)' }}>The Desert Dream</span>
            <h2 className="section-title-light">The Narrative of Your Evening</h2>
            <div className="section-divider" style={{ backgroundColor: 'var(--color-primary-gold)' }}></div>
            <p className="section-desc-light">
              We believe luxury lies in isolation, details, and heritage. Here is how your signature royal desert evening unfolds.
            </p>
          </div>

          <div className="narrative-blocks">
            
            {/* Block 1 */}
            <div className="narrative-block-row">
              <div className="block-text">
                <span className="block-number">01</span>
                <h3>The Private Dunes Isolation</h3>
                <p>
                  Your journey starts with a private transfer in an air-conditioned SUV to a secret dunes location, far from commercial tourist packages. You will arrive at a private sand oasis where clean, wind-swept sands stretch to the horizon in complete silence.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <Compass size={40} className="text-[#C5A059]" />
              </div>
            </div>

            {/* Block 2 */}
            <div className="narrative-block-row reverse">
              <div className="block-text">
                <span className="block-number">02</span>
                <h3>Twilight Refreshments & Sunset High Tea</h3>
                <p>
                  Sit on soft, handcrafted Rajasthani rugs and cushions. Our team serves freshly brewed local masala tea, coffee, hot samosas, kachoris, and sweets as the desert sun dips low, painting the sky in crimson and gold.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <Sparkles size={40} className="text-[#C5A059]" />
              </div>
            </div>

            {/* Block 3 */}
            <div className="narrative-block-row">
              <div className="block-text">
                <span className="block-number">03</span>
                <h3>Manganiyar Folk Harmony & Kalbelia Dance</h3>
                <p>
                  As lanterns glow, enjoy a private, soulful performance by hereditary Manganiyar singers. Witness the mesmerizing, acrobatic spins of Kalbelia folk dancers around a roaring bonfire.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <Music size={40} className="text-[#C5A059]" />
              </div>
            </div>

            {/* Block 4 */}
            <div className="narrative-block-row reverse">
              <div className="block-text">
                <span className="block-number">04</span>
                <h3>Candlelight Gourmet Banquet</h3>
                <p>
                  Dine on a low table illuminated by candles and torches. A dedicated chef cooks hot charcoal seekh-kebabs, paneer tikkas, and local delicacies like Ker Sangri and Laal Maas, served fresh under the stars.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <Heart size={40} className="text-[#C5A059]" />
              </div>
            </div>

            {/* Block 5 */}
            <div className="narrative-block-row">
              <div className="block-text">
                <span className="block-number">05</span>
                <h3>Astronomy & Stargazing</h3>
                <p>
                  The Thar Desert sky offers a stunning canopy of stars. Peer through a professional telescope as our guide points out Saturn's rings, deep-sky nebulae, and major constellations.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <Star size={40} className="text-[#C5A059]" />
              </div>
            </div>

            {/* Block 6 */}
            <div className="narrative-block-row reverse">
              <div className="block-text">
                <span className="block-number">06</span>
                <h3>Luxury Camp Stay & Sunrise Breakfast</h3>
                <p>
                  Retire to our premium, air-conditioned canvas suite featuring ensuite sandstone bathrooms and plush beds. Wake up to a magical sunrise breakfast on the dunes before checking out.
                </p>
              </div>
              <div className="block-icon-wrapper">
                <ShieldCheck size={40} className="text-[#C5A059]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specifications & Booking */}
      <section id="booking-form" className="section-padding bg-[#FCFBF9]">
        <div className="container royal-booking-grid">
          
          {/* Details side */}
          <div className="royal-details-card">
            <h2 className="section-title-dark">Experience Inclusions</h2>
            <p style={{ marginBottom: '24px', fontSize: '0.95rem' }}>
              The Moomal Royal Desert Experience is managed by our senior team to guarantee impeccable hospitality, security, and an unforgettable journey.
            </p>

            <ul className="royal-inclusions-list">
              <li><Check size={18} className="text-[#C5A059]" /> Private AC SUV Transfers throughout the experience.</li>
              <li><Check size={18} className="text-[#C5A059]" /> 100% private, isolated sand dune setup.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Sunset high tea with hot Rajasthani snacks.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Private Manganiyar music and Kalbelia dance.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Multi-course candlelight dinner cooked on-site.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Roaring bonfire and guided stargazing with telescope.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Overnight stay in an AC Luxury Tent with private bath.</li>
              <li><Check size={18} className="text-[#C5A059]" /> Sunrise hot buffet breakfast at the camp.</li>
              <li><Check size={18} className="text-[#C5A059]" /> <em>Optional:</em> Professional Drone & DSLR Photography (+₹4,500).</li>
            </ul>
          </div>

          {/* Form side */}
          <div className="booking-card royal-form-card">
            <h4 className="booking-card-title">Reserve the Royal Suite</h4>
            <div className="booking-price-box">
              <span className="booking-price-label">Signature Package Rate</span>
              <span className="booking-price-val">₹15,000 / couple</span>
            </div>

            <form onSubmit={handleInquirySubmit} className="booking-card-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required 
                  placeholder="e.g. Alexandra Daddario" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  required 
                  placeholder="e.g. +91 98765 43210" 
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Travel Date</label>
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  required 
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Secure Royal Booking <ArrowRight size={16} />
              </button>
            </form>

            <div className="booking-direct-links">
              <div className="divider-or"><span>OR</span></div>
              <a 
                href={`https://wa.me/919352803009?text=${encodeURIComponent(`Hello Moomal Tours! I would like to book the *Moomal Royal Desert Experience*. Please let me know details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-whatsapp"
              >
                Inquire on WhatsApp
              </a>
              <a href="tel:+919352803009" className="btn-outline-call">
                Call Royal Desk: +919352803009
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
