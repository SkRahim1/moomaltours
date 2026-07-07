import React, { useState } from 'react';
import { Calendar, User, Star, Utensils, Shield, ArrowRight, Check, X, Phone, Compass } from 'lucide-react';

const PACKAGES_DATA = {
  couple: {
    title: 'Jaisalmer Couple Tour Package | Romantic Desert Safari',
    tagline: 'Private candlelit dunes and romantic camel caravans under the desert moon.',
    duration: '3 Days / 2 Nights',
    price: '₹12,500 / couple',
    vibe: 'Romantic & Secluded',
    img: '/sam_sand_dunes.png',
    bgStyle: 'couple-theme',
    description: 'Designed exclusively for couples seeking romance and privacy in the Golden City. Stroll through the sand dunes hand-in-hand, dine on a secluded private dune with hot charcoal delicacies, and stay in our premium air-conditioned canvas suites.',
    inclusions: [
      'Airport / Railway Station pick-up & drop in private AC Cab.',
      'Boutique Heritage Haveli hotel in city & luxury desert camp stay.',
      'Secluded couple camel caravan at sunset with private sitting setup.',
      'Private candlelight dunes banquet with a dedicated chef.',
      'MAP Plan (Traditional breakfast and romantic dinners).',
      'Private sightseeing tour with a local historian guide.',
      'Welcome drinks, fresh flowers, and mocktails at camp.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Romantic Sightseeing',
        desc: 'Meet our driver at the Jaisalmer airport or railway station for a warm welcome. Transfer to your boutique heritage haveli hotel. After relaxing, take a private tour of Gadisar Lake for a peaceful sunset boat ride, followed by a visit to the Golden Fort and a candlelight complimentary dinner by Moomal Tours.',
        img: '/gadisar_lake.png'
      },
      {
        day: 2,
        title: 'Desert Drive & Candlelight Dunes Dinner',
        desc: 'After breakfast, check out and drive towards the Sam Sand Dunes. On the way, tour the ruins of Kuldhara and Khaba Fort. Check in at our luxury desert camp with a royal Rajasthani welcome. In the evening, ride your private camel into a secluded dune spot. Sit on rich carpets and enjoy sunset high tea, followed by live folk music, Kalbelia dance, and a gourmet candlelight dinner under the stars.',
        img: '/guest_dunes_dinner.png'
      },
      {
        day: 3,
        title: 'Sunrise Caravan & Departure',
        desc: 'Enjoy a magical sunrise breakfast at the camp. Drive back to the city for some handicraft and souvenir shopping at Sadar Bazaar. Visit Patwon Ki Haveli and Salim Singh Haveli before our driver transfers you to the airport or railway station for your departure.',
        img: '/guest_camel_ride.png'
      }
    ]
  },
  honeymoon: {
    title: 'Jaisalmer Honeymoon Package | Luxury Desert Camp & Stargazing',
    tagline: 'The ultimate fairytale escape with flower-decorated suites and private stargazing.',
    duration: '3 Days / 2 Nights',
    price: '₹18,000 / couple',
    vibe: 'Ultra-Luxury Romance',
    img: '/camel_sunset.png',
    bgStyle: 'honeymoon-theme',
    description: 'A luxurious celebration of love. Celebrate your new journey with premium details: flower-decorated suites, a welcoming honeymoon cake, a private desert dinner with a live local musician, and professional drone/camera photography to capture your memories.',
    inclusions: [
      'Private luxury SUV transport (Innova Crysta) throughout the tour.',
      'Honeymoon suite decoration with fresh rose petals and candles.',
      'Welcoming cake, sparkling mocktails, and fresh fruit basket.',
      'Private candlelight sand dune dinner with a live musician.',
      'Professional drone photography session at sunset.',
      'Camel Safari & 4x4 Jeep dune bashing adventure.',
      'Royal Rajasthani welcome, cultural folk show, and MAP dining plan.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Airport Welcome & Fort Exploration',
        desc: 'Receive a royal welcome with flowers at the airport or station. Transfer in a luxury SUV to your premium suite. Take a guided heritage walk of Jaisalmer Fort, exploring medieval alleys and Jain temples. Enjoy sunset tea at a rooftop cafe overlooking the fort, followed by a complimentary multi-course dinner.',
        img: '/guest_fort_walk.png'
      },
      {
        day: 2,
        title: 'Jeep Safari & Exclusive Dune Dinner',
        desc: 'Savor breakfast in bed, then checkout for Sam Dunes. Take an off-road 4x4 Jeep Safari for thrilling dune bashing, followed by a private camel caravan. Arrive at a dedicated dune oasis decorated with lanterns. Enjoy a private folk music serenade and a candlelight dinner, then sleep in a flower-decorated luxury camp suite.',
        img: '/jeep_safari.png'
      },
      {
        day: 3,
        title: 'Sunrise Breakfast & Departure',
        desc: 'Watch the sunrise over the golden sands with fresh coffee and breakfast. Check out and return to the city. Have free time to visit Bada Bagh Cenotaphs for photos. Our SUV will drop you at the airport/station with a special souvenir gift from Moomal Tours.',
        img: '/camel_sunset.png'
      }
    ]
  },
  family: {
    title: 'Jaisalmer Family Tour Package | Desert Safari & Heritage Stays',
    tagline: 'Create lifelong memories with heritage walks, desert camps, and thrilling safaris.',
    duration: '3 Days / 2 Nights',
    price: '₹4,500 / person',
    vibe: 'Comfort & Family Bonding',
    img: '/haveli_heritage.png',
    bgStyle: 'family-theme',
    description: 'Designed for families of all generations. Focuses on safe, comfortable travel in private cabs, kid-friendly camel and jeep safaris, spacious adjoining luxury camp tents, and lively cultural dances that kids and parents will both adore.',
    inclusions: [
      'Spacious AC family cab (SUV/Sedan) for all tours and transfers.',
      'Comfortable family suites in a heritage hotel and desert camp.',
      'Safe Camel Safari for kids and adults, plus an optional Jeep Safari.',
      'Guided historical tours of Jaisalmer Fort, Kuldhara, and Haveli.',
      'Cultural evening with traditional Rajasthani folk dances, fire show, and snacks.',
      'MAP Plan: Multi-cuisine breakfasts and gala dinners.',
      '24/7 dedicated support representative on-call.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Family Welcome & Sightseeing',
        desc: 'Our representative greets your family at the station or airport. Check in to your spacious family room in the city. In the afternoon, visit Jaisalmer Fort (Sone Kila) and the lakeside. Kids can enjoy bird feeding and a boat ride. End the day with a delicious family dinner featuring local desserts.',
        img: '/jaisalmer_fort_hero.png'
      },
      {
        day: 2,
        title: 'Kuldhara Village & Luxury Desert Camp',
        desc: 'Check out and drive to Sam. Stop at the abandoned Kuldhara Ghost Village—a fascinating story that children love—and Khaba Fort. Check in at the desert camp with traditional red-carpet welcome, drum beats, and tikka. In the evening, do a family camel ride on the dunes, watch folk performances, and enjoy a rich Rajasthani buffet dinner.',
        img: '/guest_camp_bonfire.png'
      },
      {
        day: 3,
        title: 'Desert Sunrise & Departure',
        desc: 'Wake up to the cool desert breeze. Have a hearty breakfast at camp and check out. Return to Jaisalmer city. Visit Patwon Ki Haveli and shop for leather items, puppets, and spices. Private transfer to the airport or station for departure.',
        img: '/haveli_heritage.png'
      }
    ]
  },
  friends: {
    title: 'Jaisalmer Adventure Group Tour | 4x4 Jeep Safari & Quad Biking',
    tagline: 'Thrilling 4x4 dune bashing, quad biking, and midnight bonfires under the stars.',
    duration: '3 Days / 2 Nights',
    price: '₹3,800 / person',
    vibe: 'Adventure & Fun',
    img: '/jaisalmer_fort_hero.png',
    bgStyle: 'friends-theme',
    description: 'Pack your bags with your squad for the ultimate desert adventure! Enjoy high-speed 4x4 dune bashing, exhilarating quad biking across high ridges, sunset photography, and a night of music, snacks, and a cozy bonfire under the clear night sky.',
    inclusions: [
      'Group transport in private AC Traveller or SUV.',
      'Camp stays in shared luxury swiss tents (twin/triple sharing).',
      '4x4 Jeep Safari for high-speed dune bashing.',
      'Sunset Camel Safari caravan with group photo spots.',
      'Group bonfire session with local snacks, cold drinks, and music.',
      'MAP Plan (Hearty buffet breakfasts and Rajasthani gala dinners).',
      'Guided heritage walk through Fort alleys and local food spots.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival, Fort Walk & Rooftop Vibe',
        desc: 'Group arrival at Jaisalmer station/airport. Check-in to your city hotel. Take a walking tour inside the fort walls, checking out hidden street art and historic viewpoints. Head to a rooftop cafe for sunset mocktails and a group dinner with stunning views of the illuminated fort.',
        img: '/guest_fort_walk.png'
      },
      {
        day: 2,
        title: 'Dune Bashing, Quad Biking & Bonfire Night',
        desc: 'Have breakfast and drive to Sam. En route, explore the abandoned ruins of Kuldhara. Check-in to the desert camp. Board a 4x4 jeep for high-speed dune bashing. Experience optional quad biking (at extra cost) on the high dunes. Return to the camp for a high-energy folk dance performance, followed by a private group bonfire under the stars.',
        img: '/jeep_safari.png'
      },
      {
        day: 3,
        title: 'Dune Sunrise & Shopping Trails',
        desc: 'Wake up early for photography in the golden morning light. Savor breakfast, check out, and head to Jaisalmer. Visit the Bada Bagh cenotaphs and spend time shopping for Rajasthani textiles and handicraft. Transfer to airport/station for departure.',
        img: '/shopping_tours.png'
      }
    ]
  },
  corporate: {
    title: 'Jaisalmer Corporate Tour | Desert Team Building & Gala Night',
    tagline: 'Foster collaboration with desert camping, team challenges, and gala evenings.',
    duration: '3 Days / 2 Nights',
    price: '₹3,500 / person',
    vibe: 'Team Building & Collaboration',
    img: '/sam_sand_dunes.png',
    bgStyle: 'corporate-theme',
    description: 'Bespoke packages designed for corporate groups and retreats. Combines comfortable meeting/presentation setups at our luxury camps, adventure-based team activities (treasure hunts in Kuldhara, dune racing), and elegant gala dinner evenings with folk performances.',
    inclusions: [
      'Group transfers in AC Coaches (Tempo Traveller / Bus).',
      'Spacious AC Swiss Tents with ensuite bathrooms.',
      'Dedicated team building coordination on dunes.',
      '4x4 Jeep Safari and Camel Caravan included.',
      'Traditional Rajasthani welcome with flowers and local drums.',
      'Gala dinner featuring local organic cuisine, snacks, and unlimited water.',
      'Audio-visual setup at camp for presentations / activities.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Team Ice-breaker',
        desc: 'Group arrival. Transfer to the hotel/resort. Afternoon guided orientation walk inside Jaisalmer Fort, followed by team ice-breaker games at a scenic rooftop deck.',
        img: '/jaisalmer_fort_hero.png'
      },
      {
        day: 2,
        title: 'Treasure Hunt & Gala Desert Night',
        desc: 'After breakfast, drive to Kuldhara ruins for a team-building scavenger hunt. Drive to Sam Sand Dunes and check in at our luxury camp. Afternoon off-road Jeep Safari. Evening corporate gala, including local folk music, Kalbelia dances, awards/fun sessions, and a signature Rajasthani gala dinner.',
        img: '/guest_camp_bonfire.png'
      },
      {
        day: 3,
        title: 'Breakfast & Airport Drop',
        desc: 'Breakfast at the camp. Checkout and drive back to Jaisalmer for quick shopping. Group transfer to Jaisalmer airport or railway station.',
        img: '/sam_sand_dunes.png'
      }
    ]
  },
  'rajasthan-multi-city': {
    title: 'Rajasthan Heritage Tour Package | Jodhpur, Udaipur & Jaisalmer',
    tagline: 'Discover the palaces of Jodhpur, lakes of Udaipur, and sands of Jaisalmer.',
    duration: '7 Days / 6 Nights',
    price: 'Custom Pricing / Inquire',
    vibe: 'Heritage, Culture & Royalty',
    img: '/haveli_heritage.png',
    bgStyle: 'multicity-theme',
    description: 'A majestic journey across the desert kingdom of Rajasthan. Connect the Blue City of Jodhpur (Mehrangarh Fort, Umaid Bhawan), the romantic lake city of Udaipur (City Palace, Lake Pichola), and the Golden City of Jaisalmer (Thar Desert safari, sand-dunes overnight camp). Highly customizable.',
    inclusions: [
      'Private AC Cab throughout the 7-day multi-city journey.',
      '6 nights accommodation in premium 4-star/5-star heritage hotels and camps.',
      'Daily breakfast and dinner (MAP Plan) at all hotels.',
      'Guided historical tours in Jodhpur, Udaipur, and Jaisalmer.',
      'Sunset boat cruise on Lake Pichola in Udaipur.',
      'Overnight luxury camping experience in Jaisalmer Thar desert.',
      'All toll taxes, state taxes, driver allowance, and parking charges.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jodhpur Arrival & Fort Tour',
        desc: 'Arrive in Jodhpur. Welcome by Moomal Tours driver. Transfer to your heritage hotel. Visit the grand Mehrangarh Fort and Jaswant Thada cenotaph. Dinner in a heritage courtyard.',
        img: '/haveli_heritage.png'
      },
      {
        day: 2,
        title: 'Drive to Udaipur (Lake Pichola)',
        desc: 'Drive to Udaipur, visiting the famous Ranakpur Jain Temples on the way. Check in to your lakeside hotel in Udaipur. Enjoy a tranquil sunset boat ride on Lake Pichola.',
        img: '/gadisar_lake.png'
      },
      {
        day: 3,
        title: 'Udaipur Palace & Lakes Exploration',
        desc: 'Take a guided tour of the City Palace, Saheliyon-ki-Bari, and Jagdish Temple. Evening free for shopping around the old markets.',
        img: '/haveli_heritage.png'
      },
      {
        day: 4,
        title: 'Udaipur to Jaisalmer Drive',
        desc: 'Drive from Udaipur to Jaisalmer. Arrive in the evening and check in to your golden sandstone hotel. Relax with a complimentary Rajasthani thali dinner.',
        img: '/jaisalmer_fort_hero.png'
      },
      {
        day: 5,
        title: 'Jaisalmer Sightseeing & Sand Dunes',
        desc: 'Explore Jaisalmer Fort and Havelis. In the afternoon, drive to Sam Sand Dunes. Ride camels into the sunset, watch traditional folk performances, and overnight at luxury tents.',
        img: '/camel_sunset.png'
      },
      {
        day: 6,
        title: 'Kuldhara & Bada Bagh Tour',
        desc: 'Check out of camp. Visit Kuldhara village, Khaba Fort, and Bada Bagh Cenotaphs. Return to Jaisalmer city for a relaxing overnight stay.',
        img: '/guest_camel_ride.png'
      },
      {
        day: 7,
        title: 'Departure from Jodhpur/Jaisalmer',
        desc: 'Breakfast at the hotel, check out, and transfer to Jaisalmer/Jodhpur airport or station for your departure.',
        img: '/sam_sand_dunes.png'
      }
    ]
  },
  custom: {
    title: 'Custom Jaisalmer Trip Planner | Tailored Rajasthan Tour',
    tagline: 'Your pace, your choice of stays, and customized desert activities.',
    duration: 'Tailored to you',
    price: 'Custom Quotation',
    vibe: '100% Tailored & Bespoke',
    img: '/camel_sunset.png',
    bgStyle: 'custom-theme',
    description: 'Create your dream Jaisalmer and Rajasthan vacation. Choose your own dates, your preferred style of hotels (from rustic camps to 5-star fort palaces), and select only the activities that interest you. Our travel specialists will design the blueprint and manage everything.',
    inclusions: [
      'Tailored selection of premium transport (Sedan, SUV, Luxury Coach).',
      'Flexible booking of luxury sand dunes tents or heritage haveli hotels.',
      'Choice of experiences: Stargazing, Dinner on Dunes, Drone Photos, Quad Biking.',
      'Customized meals (EP, CP, MAP, or AP plans available).',
      'Dedicated personal trip coordinator on call 24/7.',
      'Flexible itinerary adjustments during the tour.'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Customized Day 1',
        desc: 'Your custom arrival schedule, greeting, accommodation check-in, and sightseeing activities based on your selected package preferences.',
        img: '/jaisalmer_fort_hero.png'
      },
      {
        day: 2,
        title: 'Customized Day 2',
        desc: 'Bespoke Thar desert activities: optional camel caravan, candlelight dinner setup, jeep safaris, or off-the-beaten-path village explorations.',
        img: '/camel_sunset.png'
      },
      {
        day: 3,
        title: 'Customized Day 3',
        desc: 'Departure arrangements, shopping trails, flexible sightseeing timings, and private transfers matching your flight/train schedule.',
        img: '/guest_camel_ride.png'
      }
    ]
  }
};

export default function PackagesPage({ activeId }) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');

  // If activeId is specified, render the package landing page
  if (activeId && PACKAGES_DATA[activeId]) {
    const pkg = PACKAGES_DATA[activeId];

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const message = `Hello Moomal Tours! I would like to book the *${pkg.title}* (${pkg.duration}):
• Name: ${inquiryName}
• Phone: ${inquiryPhone}
• Travel Date: ${inquiryDate}
• Price Estimate: ${pkg.price}
Please share availability and details.`;
      
      const whatsappUrl = `https://wa.me/919352803009?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className={`package-detail-page ${pkg.bgStyle}`}>
        {/* Banner Section */}
        <section className="package-banner" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(28,26,23,0.95) 100%), url(${pkg.img})` }}>
          <div className="container banner-content">
            <span className="package-vibe-tag">{pkg.vibe}</span>
            <h1 className="package-banner-title">{pkg.title}</h1>
            <p className="package-banner-desc">{pkg.tagline}</p>
            <div className="package-banner-meta">
              <span className="meta-item"><Calendar size={18} /> {pkg.duration}</span>
              <span className="meta-item"><Star size={18} /> Premium Guarantees</span>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="package-body-section section-padding">
          <div className="container package-grid-layout">
            
            {/* Left side details */}
            <div className="package-info-side">
              <h2 className="section-title-dark">Experience Blueprint</h2>
              <p className="package-long-desc">{pkg.description}</p>

              {/* Itinerary Timeline */}
              <h3 className="package-section-title">Day-by-Day Journey</h3>
              <div className="itinerary-timeline">
                {pkg.itinerary.map((dayPlan) => (
                  <div key={dayPlan.day} className="timeline-day-card" style={{ marginBottom: '32px' }}>
                    <div className="timeline-dot-wrapper">
                      <div className="timeline-dot"></div>
                      <span className="timeline-day-num">Day {dayPlan.day}</span>
                    </div>
                    <div className="timeline-day-content">
                      <h4 className="timeline-day-title" style={{ marginBottom: '12px' }}>{dayPlan.title}</h4>
                      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <p className="timeline-day-desc" style={{ flex: '1', minWidth: '250px', margin: 0 }}>{dayPlan.desc}</p>
                        {dayPlan.img && (
                          <div className="timeline-day-image-box" style={{ width: '220px', height: '130px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-border)' }}>
                            <img 
                              src={`${import.meta.env.BASE_URL}${dayPlan.img.slice(1)}`} 
                              alt={dayPlan.title} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions & Exclusions */}
              <div className="inclusions-exclusions-grid">
                <div className="inc-box">
                  <h4 className="inc-exc-title"><Check size={20} className="text-[#C5A059]" /> Package Inclusions</h4>
                  <ul className="inc-exc-list">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="inc-exc-item">
                        <span className="bullet-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exc-box">
                  <h4 className="inc-exc-title"><X size={20} className="text-[#C86B45]" /> Package Exclusions</h4>
                  <ul className="inc-exc-list">
                    <li className="inc-exc-item">
                      <span className="bullet-cross">✗</span>
                      <span>Jeep Safari at Sam Dunes (available at an optional extra charge of ₹1,500/jeep).</span>
                    </li>
                    <li className="inc-exc-item">
                      <span className="bullet-cross">✗</span>
                      <span>Airfare / Train tickets to and from Jaisalmer.</span>
                    </li>
                    <li className="inc-exc-item">
                      <span className="bullet-cross">✗</span>
                      <span>Personal expenses like telephone calls, laundry, soft drinks, camera fees, and tips.</span>
                    </li>
                    <li className="inc-exc-item">
                      <span className="bullet-cross">✗</span>
                      <span>Any items not explicitly listed under "Package Inclusions".</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side booking card */}
            <div className="package-sidebar-side">
              <div className="booking-card">
                <h4 className="booking-card-title">Book This Package</h4>


                <form onSubmit={handleFormSubmit} className="booking-card-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required 
                      placeholder="e.g. Liam Neeson" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      required 
                      placeholder="e.g. +91 98765 43210" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Date of Travel</label>
                    <input 
                      type="date" 
                      value={inquiryDate}
                      onChange={(e) => setInquiryDate(e.target.value)}
                      required 
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    Request Booking via WhatsApp <ArrowRight size={16} />
                  </button>
                </form>

                <div className="booking-direct-links">
                  <div className="divider-or"><span>OR</span></div>
                  <a 
                    href={`https://wa.me/919352803009?text=${encodeURIComponent(`Hello Moomal Tours! I'd like to chat about the ${pkg.title} Jaisalmer itinerary.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-whatsapp"
                  >
                    Chat Directly with Expert
                  </a>
                  <a href="tel:+919352803009" className="btn-outline-call">
                    Call: +919352803009
                  </a>
                </div>

                <div className="booking-trust-badges">
                  <div className="badge-item">
                    <Shield size={16} className="badge-icon" />
                    <span>Secure Booking</span>
                  </div>
                  <div className="badge-item">
                    <User size={16} className="badge-icon" />
                    <span>Verified Guides</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Back Link */}
        <section className="section-padding" style={{ paddingTop: 0, textAlign: 'center' }}>
          <a href="#/packages" className="btn-secondary">View All Packages</a>
        </section>
      </div>
    );
  }

  // If activeId is null, render the packages listing hub
  return (
    <div className="packages-hub-page section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Curated Desert Stays</span>
          <h1 className="section-title-dark">Jaisalmer Luxury Tour Packages</h1>
          <div className="section-divider"></div>
          <p>
            Choose from our specialized themes designed to offer the ultimate combination of luxury, adventure, culture, and privacy in the Thar desert.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-hub-grid">
          {Object.entries(PACKAGES_DATA).map(([id, pkg]) => (
            <div key={id} className="package-hub-card">
              <div className="card-image-box">
                <img 
                  src={`${import.meta.env.BASE_URL}${pkg.img.slice(1)}`} 
                  alt={pkg.title} 
                  className="card-img"
                />
                <span className="card-badge">{pkg.vibe}</span>
              </div>
              <div className="card-content-box">
                <span className="card-duration">{pkg.duration}</span>
                <h3 className="card-title">{pkg.title}</h3>
                <p className="card-desc">{pkg.tagline}</p>
                <div className="card-footer-box">
                  <div>
                    <span className="price-tag-label">Category</span>
                    <span className="price-tag-val" style={{ fontSize: '0.85rem' }}>{pkg.vibe}</span>
                  </div>
                  <a href={`#/packages/${id}`} className="btn-primary btn-sm-flat">
                    Explore Details <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="custom-tour-banner-box">
          <div className="banner-text">
            <h3>Want a 100% Customized Rajasthan Experience?</h3>
            <p>Select your own transport, choose heritage hotels, and toggle desert experiences to design a blueprint that fits your budget.</p>
          </div>
          <a href="#/build-your-tour" className="btn-primary">
            Build Your Own Tour <Compass size={16} style={{ marginLeft: '8px' }} />
          </a>
        </div>

      </div>
    </div>
  );
}
