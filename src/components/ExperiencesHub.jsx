import React, { useState } from 'react';
import { Compass, Sparkles, Heart, Camera, MapPin, Music, Coffee, Clock, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const EXPERIENCES_DATA = {
  'private-desert-dinner': {
    title: 'Private Desert Dinner',
    category: 'Dining & Romance',
    img: '/guest_dunes_dinner.png',
    desc: 'Dine in a private sand dunes oasis, completely secluded from others. A personal chef prepares hot charcoal kebabs and traditional Rajasthani dishes served on a candlelit low table.',
    pricing: 'From ₹4,500 / person',
    duration: '4 Hours (Evening)',
    highlights: ['100% private sand dune setup away from tourist crowds', 'Dedicated chef & waiter at your service', 'Traditional low mattress seating or table options', 'Live barbecue and multi-course desert banquet'],
    details: 'Immerse yourself in complete isolation in the Thar Desert. We pick you up in a private vehicle and drive you to a secret dune location. Watch the sunset in silence, and then walk into a candlelit setup where lanterns glow in the sand. Enjoy hot soup, charcoal-grilled appetizers, and a rich main course, ending with traditional sweets.'
  },
  'candlelight-dinner': {
    title: 'Candlelight Dinner at Camp',
    category: 'Dining & Romance',
    img: '/guest_dunes_dinner.png',
    desc: 'A romantic candlelight dinner set up in a beautiful corner of our luxury desert resort, decorated with lanterns, fresh flowers, and aromatic candles.',
    pricing: 'From ₹2,500 / couple',
    duration: '2-3 Hours',
    highlights: ['Beautifully decorated table at our premium camp grounds', 'Personalized menu selection', 'Complimentary wine or sparkling mocktails', 'Soft instrumental music accompaniment'],
    details: 'Perfect for couples celebrating their togetherness. We set up an exclusive, lantern-lit table in a private pocket of our resort under the starry desert sky. Indulge in premium service with a dedicated waiter, enjoying authentic Rajasthani specialities or continental dishes tailored to your preference.'
  },
  'proposal-setup': {
    title: 'Romantic Proposal Setup',
    category: 'Dining & Romance',
    img: '/camel_sunset.png',
    desc: 'Pop the question in the middle of the Thar desert with a spectacular flower arch, glowing "MARRY ME" letters, champagne, and musicians.',
    pricing: 'From ₹12,000 / setup',
    duration: '3-4 Hours',
    highlights: ['Custom floral decoration & lit signage on private dunes', 'Champagne/mocktail toast and proposal cake included', 'Live local guitarist playing romantic melodies', 'Secret planning and coordination by Moomal Tours team'],
    details: 'Make it a moment that will be told for generations. We custom-design a breathtaking proposal setup on an isolated sand dune. With path-lighting, luxury seating, flowers, and local musicians playing in the background, we handle everything from secret pick-ups to the perfect reveal at twilight.'
  },
  'anniversary-birthday': {
    title: 'Anniversary & Birthday Celebrations',
    category: 'Dining & Romance',
    img: '/guest_camp_bonfire.png',
    desc: 'Celebrate milestone dates in royal style with decorated tents, private cake cutting, folk dances, and dedicated photo sessions.',
    pricing: 'From ₹3,500 / event',
    duration: 'Flexible',
    highlights: ['Decorated tent or dining area with balloon/flower setup', 'Special custom-flavoured celebration cake', 'Traditional royal tilak welcome for the hosts', 'Exclusive performance dedication by folk artists'],
    details: 'Whether it is your wedding anniversary or a birthday, we turn it into a desert festival. Enjoy a dedicated cake-cutting ceremony under the stars, followed by a personalized performance by our Manganiyar musicians, and custom menu elements designed to delight.'
  },
  'luxury-camps': {
    title: 'Luxury Desert Camps',
    category: 'Adventure & Stays',
    img: '/sam_sand_dunes.png',
    desc: 'Stay in premium, air-conditioned canvas suites showcasing handcrafted sandstone bathrooms, private decks, and five-star hospitality.',
    pricing: 'From ₹5,500 / night',
    duration: 'Overnight Stay',
    highlights: ['Air-conditioned luxury tents with ensuite tiled bathrooms', 'Private wooden decks looking out to the desert wilderness', 'Access to resort swimming pool and dining hall', 'Traditional evening cultural show and buffet dinner included'],
    details: 'Our luxury camps combine the rugged romance of the desert with modern five-star comfort. Sleep under high-quality canvas on king-sized beds, enjoy hot and cold running water in beautifully tiled bathrooms, and relax on your private deck watching the stars.'
  },
  'camel-safari': {
    title: 'Sunset Camel Safari',
    category: 'Adventure & Stays',
    img: '/guest_camel_ride.png',
    desc: 'Ride into the sunset on a camel caravan across the high sand dunes of Sam, experiencing the traditional nomadic style of Thar travel.',
    pricing: 'From ₹800 / person',
    duration: '1.5 Hours',
    highlights: ['Traditional camel ride guided by local expert handlers', 'Stunning photographic viewpoints on high dunes', 'Sunset stop for tea/refreshments', 'Safe and child-friendly activity'],
    details: 'No trip to Jaisalmer is complete without a camel safari. Climb aboard our well-cared-for camels and join a caravan crossing the wind-swept ridges. Stop on top of a high dune to watch the sun slip below the horizon, painting the sands in shades of orange and gold.'
  },
  'jeep-safari': {
    title: '4x4 Off-Road Jeep Safari',
    category: 'Adventure & Stays',
    img: '/jeep_safari.png',
    desc: 'An adrenaline-pumping off-road 4x4 Jeep ride over the steep sand dunes of Sam, featuring thrilling drops and high-speed dune bashing.',
    pricing: 'From ₹1,500 / jeep',
    duration: '1 Hour',
    highlights: ['High-speed 4x4 dune bashing with expert licensed drivers', 'Spectacular viewpoints for sunset photography', 'Thrilling drops and steep sand crest navigation', 'Fits up to 6 people per vehicle'],
    details: 'For the thrill-seekers. Board our modified open-top 4x4 Jeeps and hold on tight as our expert drivers navigate the massive sand waves of the Thar. Experience the roller-coaster dips and climbs of dune bashing, ending at a scenic spot for panoramic views.'
  },
  'stargazing': {
    title: 'Thar Stargazing Wilderness',
    category: 'Adventure & Stays',
    img: '/stargazing.png',
    desc: 'Explore the night sky away from light pollution. Features a professional telescope and a local guide pointing out constellations, planets, and galaxies.',
    pricing: 'From ₹1,200 / person',
    duration: '2 Hours (Night)',
    highlights: ['Zero light pollution coordinates deep in Thar', 'High-end professional telescope equipment', 'Guided exploration of constellations and stars', 'Warm bonfire sitting with local herbal tea'],
    details: 'The desert sky is an astronomical wonder. Sit around a cozy fire and peer through a high-definition telescope to view Jupiter’s moons, Saturn’s rings, and distant nebulae. Our astronomy guide shares fascinating stories behind ancient constellations.'
  },
  'bonfire': {
    title: 'Desert Camp Bonfire & Stories',
    category: 'Adventure & Stays',
    img: '/guest_camp_bonfire.png',
    desc: 'Relax around a warm, glowing campfire at night, sharing travel stories, enjoying hot appetizers, and listening to desert folk tunes.',
    pricing: 'Complimentary for camp guests',
    duration: 'Every evening',
    highlights: ['Cozy bonfire circle with comfortable seating', 'Freshly roasted desert snacks and tea/coffee', 'Folk storytelling session by local village elders', 'Under the open night sky'],
    details: 'As night falls and the desert air turns cool, gather around the crackling bonfire. Sip warm masala chai or local desert herb tea, roast snacks, and listen as our local guides recount tales of warriors, kings, and mystical sightings in the dunes.'
  },
  'folk-music': {
    title: 'Manganiyar Folk Music Recital',
    category: 'Culture & Arts',
    img: '/folk_music.png',
    desc: 'Soulful ballads played by hereditary musicians using instruments like the Kamaicha and Khartal. Recounts legends of the Thar desert.',
    pricing: 'Included in packages',
    duration: '1.5 Hours (Evening)',
    highlights: ['Hereditary Manganiyar musicians performing live', 'Traditional instruments (Kamaicha, Khartal, Dholak)', 'Immersive storytelling translation by guides', 'Interactive workshop to try the instruments'],
    details: 'Immerse yourself in centuries-old melodies. The Manganiyars are royal court musicians who have passed their songs down through generations. Their powerful voices and intricate rhythms recount historical epics, love stories, and prayers for rain.'
  },
  'kalbelia-dance': {
    title: 'Traditional Kalbelia Dance Show',
    category: 'Culture & Arts',
    img: '/kalbelia_dance.png',
    desc: 'Witness the mesmerizing, high-energy snake charmer dance performed by nomadic women in swirling, embroidered black skirts.',
    pricing: 'Included in packages',
    duration: '1 Hour (Evening)',
    highlights: ['Verified local Kalbelia dance performers', 'Acrobatic fire stunts and fast-paced spins', 'Stunning traditional black costumes with mirrors', 'Audience participation welcome!'],
    details: 'Watch in awe as Kalbelia dancers spin and bend with snake-like fluidity to the fast beats of the Been and Dholak. Witness thrilling fire-eating and balancing stunts, and feel free to step onto the floor and learn a few steps yourself.'
  },
  'sunrise-breakfast': {
    title: 'Thar Sunrise Breakfast',
    category: 'Dining & Romance',
    img: '/guest_dunes_dinner.png',
    desc: 'Watch the desert wake up while sipping fresh coffee and eating hot, freshly prepared breakfasts on a quiet dune peak in the morning light.',
    pricing: 'From ₹1,800 / person',
    duration: '2 Hours (Morning)',
    highlights: ['Sunrise viewing from a private sand ridge', 'Freshly brewed coffee/tea and hot live kitchen stations', 'Tranquil morning environment away from safari traffic', 'Comfortable carpet and cushion setup'],
    details: 'Start your day in heaven. As the cold morning sand changes from purple to gold, enjoy a peaceful breakfast. Feast on fresh fruits, juices, hot parathas, eggs cooked to order, and freshly brewed coffee, surrounded by silence.'
  },
  'sunset-high-tea': {
    title: 'Sunset High Tea on Dunes',
    category: 'Dining & Romance',
    img: '/camel_sunset.png',
    desc: 'A premium afternoon tea setup on high dunes, featuring traditional Rajasthani snacks, fine teas, and biscuits as the sun sets.',
    pricing: 'From ₹1,500 / person',
    duration: '2 Hours (Afternoon)',
    highlights: ['Premium tea/coffee menu (Masala Chai, Darjeeling, etc.)', 'Fresh local hot snacks (Samosas, Mirchi Bada, sweets)', 'Perfect photography backdrop', 'Relaxing lounge carpets in the sand'],
    details: 'Take a break from exploring and relax on top of the dunes. We lay out elegant rugs and low tables, serving hot local teas and savory delicacies. It is the perfect, relaxed way to watch the Thar transform under the sunset hues.'
  },
  'desert-picnic': {
    title: 'Oasis & Desert Picnic',
    category: 'Dining & Romance',
    img: '/desert_picnic.png',
    desc: 'Enjoy a shaded afternoon picnic near a natural desert oasis or historical ruins, complete with chilled juices, fresh sandwiches, and fruits.',
    pricing: 'From ₹2,000 / person',
    duration: '3 Hours (Mid-day)',
    highlights: ['Shaded, comfortable setup near green oasis spots', 'Fresh, cooling summer menu with salads & juices', 'Lawn games and relaxing environment', 'Private transport and host included'],
    details: 'Escape the heat in a classic nomadic style. We set up a private, shaded picnic under local Acacia trees near a peaceful desert water body. Read a book, play board games, and enjoy a fresh lunch menu featuring cold-pressed juices and salads.'
  },
  'drone-photography': {
    title: 'Drone & Creative Photography',
    category: 'Culture & Arts',
    img: '/camel_sunset.png',
    desc: 'A professional photographer captures high-end aerial drone shots and portraits of you on the sand dunes, creating stunning social media content.',
    pricing: 'From ₹4,500 / session',
    duration: '1-2 Hours',
    highlights: ['Professional photographer and drone operator', '4K high-resolution aerial footage and edited photos', 'Sunset/sunrise timing for optimal lighting', 'Deliverable link sent within 48 hours'],
    details: 'Take home cinematic memories. Our professional photography team guides you through the best poses on the ridgeline, capturing breathtaking drone panoramas and intimate golden-hour portraits. Perfect for honeymooners and families.'
  },
  'heritage-walks': {
    title: 'Jaisalmer Fort Heritage Walk',
    category: 'Culture & Arts',
    img: '/guest_fort_walk.png',
    desc: 'A deep guided walk through the labyrinth streets of the living fort, visiting royal palaces, medieval havelis, and ancient Jain temples.',
    pricing: 'From ₹1,200 / guide',
    duration: '3 Hours',
    highlights: ['Guided by certified local historian guides', 'Visits to private, non-commercial haveli rooms', 'Deep dives into sandstone architecture and carvings', 'Entry fees to historic temples included'],
    details: 'Uncover the living history of Jaisalmer. Walk through the giant gateways of the 12th-century fort. Explore narrow lanes where locals have lived for 800 years, admire the incredible sandstone carvings of the havelis, and discover the spiritual art inside the Jain Temples.'
  },
  'food-tours': {
    title: 'Rajasthani Street Food Tour',
    category: 'Culture & Arts',
    img: '/food_tours.png',
    desc: 'A guided culinary trail through Jaisalmer old town, tasting local specialities like Pyaz Kachori, Ghotua Ladoo, and Makhaniya Lassi.',
    pricing: 'From ₹1,000 / person',
    duration: '2 Hours',
    highlights: ['Taste 6+ authentic desert dishes and sweets', 'Visit heritage sweet-makers active for over a century', 'Learn about desert spices and cooking techniques', 'Includes bottled water and hand sanitizer hygiene kits'],
    details: 'Discover the rich flavors of Thar cuisine. Taste the spicy onion kachoris, learn how Ghotua (a royal chickpea dessert) is beaten by hand, and drink a thick, cardamom-infused Makhaniya Lassi served in traditional clay cups.'
  },
  'shopping-tours': {
    title: 'Guided Textile & Handicraft Tour',
    category: 'Culture & Arts',
    img: '/shopping_tours.png',
    desc: 'Visit verified weavers, stone carvers, and leather artisans, buying authentic local goods directly from the makers at transparent prices.',
    pricing: 'From ₹800 / group',
    duration: '3 Hours',
    highlights: ['Direct access to weaver cooperatives and stone workshops', 'Authentic items (camel leather bags, mirror-work quilts, yellow sandstone cups)', 'Safe shipping arrangements to your home country', 'Zero tourist traps/forced shopping policies'],
    details: 'Shop with confidence. Jaisalmer is famous for its unique embroidery, rugs, and yellow sandstone items. We take you to certified local artisan guilds where you can see weavers at work, buy authentic souvenirs, and avoid inflated tourist commission shops.'
  }
};

export default function ExperiencesHub({ activeId }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Dining & Romance', 'Adventure & Stays', 'Culture & Arts'];

  const filteredExperiences = Object.entries(EXPERIENCES_DATA).filter(([id, exp]) => {
    const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exp.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If activeId is specified, render the experience landing page
  if (activeId && EXPERIENCES_DATA[activeId]) {
    const exp = EXPERIENCES_DATA[activeId];

    return (
      <div className="experience-detail-page section-padding">
        <div className="container">
          
          {/* Breadcrumb / Back link */}
          <div style={{ marginBottom: '32px' }}>
            <a href="#/experiences" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', padding: '8px 16px' }}>
              ← Back to All Experiences
            </a>
          </div>

          <div className="experience-detail-grid">
            
            {/* Left side details */}
            <div className="exp-detail-info">
              <span className="exp-detail-category-tag">{exp.category}</span>
              <h1 className="exp-detail-title">{exp.title}</h1>
              
              <div className="exp-meta-bar">
                <span className="meta-item"><Clock size={16} /> {exp.duration}</span>
              </div>

              <div className="section-divider" style={{ margin: '24px 0', width: '80px' }}></div>

              {exp.img && (
                <div className="exp-detail-image-box" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', aspectRatio: '16/9', boxShadow: 'var(--shadow-premium)' }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}${exp.img.slice(1)}`} 
                    alt={exp.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              )}

              <p className="exp-detail-description-lead">{exp.desc}</p>
              <p className="exp-detail-description-body">{exp.details}</p>

              {/* What is included checklist */}
              <h3 className="exp-highlights-title" style={{ marginTop: '32px', marginBottom: '16px', fontSize: '1.25rem', fontWeight: '600' }}>Experience Highlights</h3>
              <ul className="exp-highlights-list">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="exp-highlight-item" style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    <Check size={18} className="text-[#C5A059] flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side booking inquiry */}
            <div className="exp-detail-sidebar">
              <div className="booking-card">
                <h4 className="booking-card-title">Book This Experience</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                  Add this experience to your custom package or book it as a standalone activity with Moomal Tours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a 
                    href={`https://wa.me/919414149876?text=${encodeURIComponent(`Hello Moomal Tours! I would like to book the desert activity: *${exp.title}* (${exp.pricing}). Please share booking dates and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', textAlign: 'center', display: 'block' }}
                  >
                    Inquire on WhatsApp
                  </a>

                  <a 
                    href="#/build-your-tour"
                    className="btn-secondary"
                    style={{ width: '100%', textAlign: 'center', display: 'block' }}
                  >
                    Build in Custom Trip
                  </a>
                </div>

                <div className="booking-trust-badges" style={{ marginTop: '24px' }}>
                  <div className="badge-item">
                    <ShieldCheck size={16} className="badge-icon" />
                    <span>Verified Safety Setup</span>
                  </div>
                  <div className="badge-item">
                    <MapPin size={16} className="badge-icon" />
                    <span>Local Desert Guides</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Listing Hub View
  return (
    <div className="experiences-hub-page section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Authentic Thar Moments</span>
          <h1 className="section-title-dark">Desert Experiences & Activities</h1>
          <div className="section-divider"></div>
          <p>
            From candlelight dinners on private dunes to high-speed jeep safaris and guided heritage walks, shape your Jaisalmer trip with our 18 premium activities.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="filters-wrapper">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-box">
            <input 
              type="text" 
              placeholder="Search experiences..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="experiences-grid-hub">
          {filteredExperiences.map(([id, exp]) => {
            // Pick corresponding icon
            let Icon = Compass;
            if (exp.category === 'Dining & Romance') Icon = Heart;
            else if (exp.category === 'Adventure & Stays') Icon = Sparkles;
            else if (exp.title.includes('Music') || exp.title.includes('Dance')) Icon = Music;
            else if (exp.title.includes('Photography')) Icon = Camera;

            return (
              <div key={id} className="experience-hub-card" style={{ padding: 0, overflow: 'hidden' }}>
                {exp.img && (
                  <div className="card-image-box" style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={`${import.meta.env.BASE_URL}${exp.img.slice(1)}`} 
                      alt={exp.title} 
                      className="card-img"
                    />
                    <span className="card-badge" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(28, 26, 23, 0.85)', backdropFilter: 'blur(4px)', color: 'var(--color-primary-gold)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '4px 8px', borderRadius: '20px', fontSize: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {exp.category}
                    </span>
                  </div>
                )}
                <div className="card-body-box" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    {!exp.img && (
                      <div className="card-header-icon-box" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div className="icon-wrapper">
                          <Icon size={24} />
                        </div>
                        <span className="category-kicker">{exp.category}</span>
                      </div>
                    )}
                    <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '500', color: 'var(--color-text-dark)' }}>{exp.title}</h3>
                    <p className="card-desc" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>{exp.desc}</p>
                  </div>
                  <div className="card-footer-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>Pricing</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-gold)' }}>{exp.pricing.replace('From ', '')}</span>
                    </div>
                    <a href={`#/experiences/${id}`} className="btn-primary btn-sm-flat" style={{ fontSize: '10px', padding: '6px 12px' }}>
                      Details <ArrowRight size={12} style={{ marginLeft: '4px' }} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredExperiences.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
              <p>No experiences match your search filters. Try selecting another category.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
