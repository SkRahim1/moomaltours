import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const BLOG_POSTS = {
  'best-desert-camp': {
    title: 'How to Choose the Best Desert Camp in Jaisalmer',
    category: 'Accommodation',
    date: 'Oct 12, 2026',
    author: 'S. K. Rahim',
    readTime: '5 min read',
    img: '/sam_sand_dunes.png',
    summary: 'A complete breakdown of luxury glamping options in Sam vs Khuri, what amenities to expect, and how to avoid local tourist scams.',
    content: `Choosing the right desert camp can make or break your Jaisalmer vacation. With hundreds of operators shouting on booking websites, making the right choice requires looking past photo filters.

### 1. The Location Factor: Sam vs Khuri
The Sam Sand Dunes are the most famous, offering massive golden ridges and high-speed dune bashing. However, they can get noisy during peak winter months. If you want high-energy cultural programs, luxury amenities, and quad biking, Sam is the place. Khuri, on the other hand, is quieter, offers a peaceful local village feel, and is ideal for travelers seeking stargazing and silence.

### 2. Amenities to Check
A true luxury camp should feature:
- Air-conditioning or heating (desert nights in winter drop to 5°C).
- Concrete, ensuite bathrooms with hot water running.
- Private decks or sitting verandas.
- Verified local folk musicians rather than pre-recorded tracks.

At Moomal Tours, our Luxury Desert Camps are located in exclusive corners of Sam, offering solid concrete-tiled bathrooms, warm beds, and private sunset sand dunes away from the tourist corridors.`
  },
  'jaisalmer-itinerary-2-3-days': {
    title: 'The Ultimate Jaisalmer Itinerary: 2 to 3 Days Guide',
    category: 'Itineraries',
    date: 'Sep 28, 2026',
    author: 'Moomal Tours Guide',
    readTime: '6 min read',
    img: '/haveli_heritage.png',
    summary: 'Optimized hour-by-hour roadmap for first-time visitors, combining heritage fort walks and sand dune camping.',
    content: `If you have 2 to 3 days to spend in Jaisalmer, here is how you can maximize every single hour without feeling rushed.

### Day 1: The Golden Living Fort & Havelis
Start your day early inside the Jaisalmer Fort. Wander through its residential streets (it is India's only living fort!), visit the intricate Jain Temples, and view the city from Cannon Point. In the afternoon, explore Patwon Ki Haveli and finish with a peaceful sunset boat ride at Gadisar Lake.

### Day 2: The Desert Wilderness
After a hearty breakfast, checkout and drive towards the dunes. En route, stop at the Kuldhara Ghost Village and Khaba Fort. Check in to your desert camp by 4:00 PM. Take a camel safari across the high sand ridges to watch the sunset. Return for a night of traditional Rajasthani folk music, Kalbelia dance, and a gala dinner.

### Day 3: Sunrise & Departure
Enjoy a quiet sunrise over the sand dunes. Head back to the city for souvenir shopping or to visit the Bada Bagh royal cenotaphs before catching your train or flight.

*Check out our pre-packaged [3-Day Jaisalmer Itineraries](#/packages) for hassle-free private cab and guide bookings.*`
  },
  'best-time-to-visit': {
    title: 'Best Time to Visit Jaisalmer: Weather & Festivals',
    category: 'Travel Tips',
    date: 'Aug 15, 2026',
    author: 'Local Desk',
    readTime: '4 min read',
    img: '/camel_sunset.png',
    summary: 'An honest review of seasonal desert temperatures, the Desert Festival calendar, and the summer survival tips.',
    content: `Jaisalmer is located in the Thar Desert, meaning its weather is extreme. Planning your trip during the correct month is vital to enjoy the desert safaris.

### Winter (October to February) - Peak Season
This is the golden window. Daytime temperatures hover around a comfortable 20°C to 28°C, making it perfect for sightseeing. Nights can get cold (dropping to 5°C), so packing heavy woollens is required. The famous **Jaisalmer Desert Festival** takes place in February, showcasing camel races, turban tying, and traditional Rajasthani sports.

### Spring & Monsoon (March to September)
March and April are hot, with temperatures reaching 38°C. Monsoons bring slight humidity and occasional cool desert rains, turning sections of the sand green—a beautiful sight! However, summer (May to June) should be avoided as temperatures cross 45°C and desert safaris are closed.`
  },
  'sam-vs-khuri': {
    title: 'Sam vs Khuri Sand Dunes: Which is Better for Safari?',
    category: 'Desert Guide',
    date: 'Jul 22, 2026',
    author: 'Thar Specialist',
    readTime: '5 min read',
    img: '/sam_sand_dunes.png',
    summary: 'A head-to-head comparison of dune height, activity level, crowd density, and accommodation style.',
    content: `When booking a Jaisalmer safari, you must decide between the two major dune hubs: Sam and Khuri. Here is a direct comparison to help you choose.

### Sam Sand Dunes
- **Pros**: Massive, wind-swept golden ridges; home to high-speed 4x4 Jeep dune bashing, quad biking, and paragliding; vibrant festival vibe.
- **Cons**: Can get crowded and noisy during weekends in November and December.
- **Best For**: Thrill-seekers, groups of friends, and travelers looking for luxury glamping.

### Khuri Sand Dunes
- **Pros**: Calm, peaceful environment; clean sands with almost zero tourist noise; authentic rustic village stays; perfect coordinates for stargazing.
- **Cons**: Lower dune heights; very limited options for adventure sports.
- **Best For**: Writers, couples seeking privacy, and off-beat explorers.

At Moomal Tours, we offer both! Our [Royal Experience](#/signature-experience) combines the grandeur of Sam's dunes with a private, isolated setup to give you the best of both worlds.`
  },
  'top-things-to-do': {
    title: 'Top 10 Things to Do in the Golden City',
    category: 'Sightseeing',
    date: 'Jun 10, 2026',
    author: 'Moomal Tours Guide',
    readTime: '7 min read',
    img: '/jaisalmer_fort_hero.png',
    summary: 'From quad biking to traditional lassi tastings, here are the absolute must-do activities in Jaisalmer.',
    content: `Here are the top 10 things you must do when visiting Jaisalmer:

1. **Explore Jaisalmer Fort**: Wander through the fort where 5,000 people still live.
2. **Ride a 4x4 Jeep**: Go dune-bashing on the high ridges of Sam.
3. **Dine on the Dunes**: Experience a private candlelight dinner under the stars.
4. **Stargaze in Thar**: View planets and nebulae through a professional telescope.
5. **Visit Patwon Ki Haveli**: Admire the lace-like yellow sandstone carvings.
6. **Sunset Boat Ride**: Float past historic archways on Gadisar Lake.
7. **Walk through Kuldhara**: Explore the ruins of the abandoned ghost village.
8. **Taste local sweets**: Indulge in Ghotua Ladoo and Makhaniya Lassi.
9. **Watch Kalbelia Dance**: Experience the high-energy folk performances around a bonfire.
10. **Shop Sadar Bazaar**: Buy camel leather crafts and embroidery quilts.

*Check out our [Experiences Hub](#/experiences) to book any of these activities individually or as a package.*`
  },
  'shopping-guide': {
    title: 'Jaisalmer Shopping Guide: What & Where to Buy',
    category: 'Shopping',
    date: 'May 04, 2026',
    author: 'Local Explorer',
    readTime: '4 min read',
    img: '/haveli_heritage.png',
    summary: 'A local guide to authentic camel leather, Rajasthani embroidery quilts, and yellow sandstone cups.',
    content: `Jaisalmer is a shopper's paradise, but avoiding overpriced replica goods requires local knowledge. Here is what to buy and where to buy it.

### 1. Camel Leather Goods
- **What to buy**: Bags, boots, wallets, and journal diaries.
- **Where**: Sadar Bazaar or Sonaron Ka Bas. Ensure the leather is soft and carries a natural smoky smell (indicative of authentic local curing).

### 2. Rajasthani Handloom and Embroidery
- **What to buy**: Patchwork bedspreads, mirror-work quilts, and woollen shawls.
- **Where**: Pansari Bazaar. Check the weight of mirror-work—hand-stitched mirrors are heavier and more secure than glued ones.

### 3. Golden Sandstone (Habur Stone)
- **What to buy**: Sandstone cups, plates, and fossil stone structures. Fossil stone cups can naturally turn milk into yogurt overnight due to local minerals!
- **Where**: Shops near the fort entrance.`
  },
  'food-guide': {
    title: 'Food Guide: Authentic Rajasthani Dishes in Jaisalmer',
    category: 'Food & Dining',
    date: 'Apr 18, 2026',
    author: 'Chef Local',
    readTime: '5 min read',
    img: '/camel_sunset.png',
    summary: 'Discover the rich flavors of Ker Sangri, Laal Maas, and the sweet Ghotua Ladoo in the Golden City.',
    content: `Desert cuisine is unique. Since water and fresh vegetables are scarce in the dry sand dunes, traditional Rajasthani dishes rely heavily on local wild beans, berries, milk, and ghee.

### 1. Ker Sangri
A classic desert dish made from the berries (Ker) and beans (Sangri) of the local Khejri tree. It is cooked with mustard oil, red chillies, and local spices, creating a tangy dish that pairs perfectly with Bajra (millet) roti.

### 2. Rajasthani Laal Maas
For non-vegetarians, this is a legendary dish. Mutton cooked in a fiery gravy flavored with dry Mathania red chillies and yogurt, smoked using hot charcoal.

### 3. Ghotua Ladoo
Jaisalmer's signature sweet made from chickpea flour, condensed milk, saffron, and cardamoms. It has a rich, melt-in-your-mouth texture. Taste it at the famous Dhanraj Ranmal Bhatia shop active since 1910!`
  },
  'honeymoon-guide': {
    title: 'The Romantic Honeymoon Guide to Jaisalmer',
    category: 'Romance',
    date: 'Mar 09, 2026',
    author: 'Romance Expert',
    readTime: '5 min read',
    img: '/camel_sunset.png',
    summary: 'How to plan a dreamy honeymoon in Jaisalmer: private setups, luxury camps, and scenic photo shoots.',
    content: `Jaisalmer's golden hues, old-world fort view, and quiet sand dunes make it a dreamy destination for newlyweds. Here is how you can craft the perfect honeymoon.

### 1. Book a Private Dunes Dinner
Commercial camp dinners can get crowded. For a honeymoon, request a private dinner set up on a secluded dune, lit by candles and stars. At Moomal Tours, our [Honeymoon Package](#/packages/honeymoon) includes a private dunes dinner with a dedicated chef and a live musician playing just for you.

### 2. Capture the Memories
The sand ridges at golden hour are stunning. Hire a drone photographer for a 1-hour session on the dunes. The contrast of flowing sands and bright traditional costumes makes for beautiful, cinematic photos.

### 3. Sleep in Luxury
Skip the basic tents and book a luxury canvas suite with a private wooden deck. Watch the stars from your deck with a glass of mocktail.`
  },
  'family-guide': {
    title: 'Family Travel Guide to the Golden City',
    category: 'Family Travel',
    date: 'Feb 14, 2026',
    author: 'Moomal Tours Team',
    readTime: '4 min read',
    img: '/haveli_heritage.png',
    summary: 'Travel advice for families: choosing safe camel rides, children-friendly fort tours, and luxury camps.',
    content: `Traveling to the desert with children or elderly parents requires extra planning. Here are our top tips for a safe, comfortable family vacation in Jaisalmer.

### 1. Opt for SUV Transport
Jaisalmer's roads are well-connected, but long drives can be tiring. Booking a spacious SUV (like an Innova) ensures everyone travels comfortably with enough room for luggage and children to rest.

### 2. Child-Safe Desert Safaris
If you are doing a camel safari, request a camel cart or ride double with a local handler to ensure children are safe. In the evening, choose a family-friendly luxury camp that provides proper heating, running hot water, and a fenced camp layout.

### 3. Keep Sightseeing Timings Relaxed
Instead of trying to visit multiple spots, stick to two attractions a day. Spend your morning at the Fort, rest in the afternoon, and visit the desert camps or Gadisar Lake in the evening when temperatures are cool.`
  },
  'hidden-places': {
    title: '10 Hidden & Offbeat Places in Jaisalmer',
    category: 'Exploration',
    date: 'Jan 05, 2026',
    author: 'Thar Explorer',
    readTime: '6 min read',
    img: '/jaisalmer_fort_hero.png',
    summary: 'Discover abandoned checkposts, fossil parks, and ancient water harvesting oases away from crowds.',
    content: `Want to skip the tourist trails? Here are 10 hidden gems in and around Jaisalmer that most travel websites miss:

1. **Khaba Fort Ruins**: An abandoned Paliwal Brahmin fort offering stunning views of a ruined village.
2. **Akal Wood Fossil Park**: 180-million-year-old tree fossils demonstrating that the Thar was once a lush forest.
3. **Lodurva Jain Temples**: The ancient capital of Jaisalmer, known for intricate stone arches and historic ruins.
4. **Tanot Mata Temple**: A temple near the Indo-Pak border where unexploded bombs from the 1965 war are displayed.
5. **Kuldhara stepwells**: Explore the ancient water harvesting systems designed by Paliwals.
6. **Bada Bagh Cenotaphs**: Royal sandstone chhatris that glow golden at sunset.
7. **Jaisalmer War Museum**: Displays actual military tanks and jet fighter details.
8. **Desert National Park**: Spot the endangered Great Indian Bustard and chinkaras.
9. **Amar Sagar Palace**: A beautiful lakeside palace featuring sandstone pavilions.
10. **Dunes of Khuri**: Quiet, untouched sand ridges that feel like a private wilderness.`
  }
};

export default function BlogSystem({ activeId }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', 'Itineraries', 'Accommodation', 'Travel Tips', 'Desert Guide', 'Sightseeing', 'Shopping', 'Food & Dining', 'Romance', 'Family Travel', 'Exploration'];

  const filteredPosts = Object.entries(BLOG_POSTS).filter(([id, post]) => {
    return selectedTag === 'All' || post.category === selectedTag;
  });

  // If activeId is specified, render the blog article details
  if (activeId && BLOG_POSTS[activeId]) {
    const post = BLOG_POSTS[activeId];

    return (
      <div className="blog-article-detail-page section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Back button */}
          <div style={{ marginBottom: '32px' }}>
            <a href="#/blog" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', padding: '8px 16px' }}>
              ← Back to Blog
            </a>
          </div>

          {/* Article Header */}
          <article className="blog-full-article">
            <span className="blog-article-cat-tag">{post.category}</span>
            <h1 className="blog-article-title" style={{ marginTop: '12px', marginBottom: '20px', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--color-text-dark)' }}>
              {post.title}
            </h1>
            
            <div className="blog-meta-row" style={{ display: 'flex', gap: '16px', color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '32px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
              <span className="meta-item"><User size={14} className="inline mr-1" /> By {post.author}</span>
              <span className="meta-item"><Calendar size={14} className="inline mr-1" /> {post.date}</span>
              <span className="meta-item"><Clock size={14} className="inline mr-1" /> {post.readTime}</span>
            </div>

            {/* Banner Image */}
            <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '40px', aspectRatio: '16/9' }}>
              <img 
                src={`${import.meta.env.BASE_URL}${post.img.slice(1)}`} 
                alt={post.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Body Content */}
            <div className="blog-content-body-formatted" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#3A3530' }}>
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('###')) {
                  return <h3 key={index} style={{ fontSize: '1.4rem', marginTop: '32px', marginBottom: '16px', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}>{paragraph.replace('###', '').trim()}</h3>;
                }
                if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                  const listItems = paragraph.split('\n');
                  return (
                    <ul key={index} style={{ paddingLeft: '24px', marginBottom: '24px', listStyleType: paragraph.startsWith('1.') ? 'decimal' : 'disc' }}>
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} style={{ marginBottom: '8px' }}>
                          {item.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '').replace(/\*\*([^*]+)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Handle basic internal markup for links
                if (paragraph.includes('[') && paragraph.includes(']')) {
                  // Basic parse link markdown e.g. [3-Day Jaisalmer Itineraries](#/packages)
                  const match = paragraph.match(/\[([^\]]+)\]\(([^)]+)\)/);
                  if (match) {
                    const textBefore = paragraph.substring(0, match.index);
                    const linkText = match[1];
                    const linkHref = match[2];
                    const textAfter = paragraph.substring(match.index + match[0].length);
                    return (
                      <p key={index} style={{ marginBottom: '20px' }}>
                        {textBefore}
                        <a href={linkHref} style={{ color: 'var(--color-primary-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>{linkText}</a>
                        {textAfter}
                      </p>
                    );
                  }
                }
                return <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>;
              })}
            </div>
          </article>

          {/* CTA Box inside blog */}
          <div className="blog-article-cta-box" style={{ marginTop: '56px', padding: '32px', backgroundColor: 'var(--color-dark-charcoal)', color: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Ready to experience Jaisalmer?</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px auto' }}>
              Let our local guides shape an incredible, custom-tailored package that fits your pace, budget, and travel dreams.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#/build-your-tour" className="btn-primary">Build Your Custom Itinerary</a>
              <a href="#/packages" className="btn-secondary" style={{ borderColor: '#ffffff', color: '#ffffff' }}>Explore Packages</a>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Blog Listing Hub
  return (
    <div className="blog-hub-page section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Thar Chronicles</span>
          <h1 className="section-title-dark">Jaisalmer Travel Handbook</h1>
          <div className="section-divider"></div>
          <p>
            Get authentic local tips, packing guides, itinerary builders, and cultural insights straight from our local specialists in the Golden City.
          </p>
        </div>

        {/* Filter tags */}
        <div className="blog-categories-wrapper" style={{ marginBottom: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`tag-btn-filter ${selectedTag === cat ? 'active' : ''}`}
              style={{
                backgroundColor: selectedTag === cat ? 'var(--color-primary-gold)' : '#ffffff',
                color: selectedTag === cat ? '#ffffff' : 'var(--color-text-dark)',
                border: '1px solid var(--color-border)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post cards */}
        <div className="blog-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {filteredPosts.map(([id, post]) => (
            <div key={id} className="blog-card-item" style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-subtle)' }}>
              <div className="blog-card-img-box" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={`${import.meta.env.BASE_URL}${post.img.slice(1)}`} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="blog-card-cat-badge" style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: 'var(--color-primary-gold)', color: '#ffffff', fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>
                  {post.category}
                </span>
              </div>

              <div className="blog-card-content-box" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div className="blog-card-meta" style={{ display: 'flex', gap: '12px', color: 'var(--color-text-muted)', fontSize: '0.75rem', marginBottom: '12px' }}>
                    <span><Calendar size={12} className="inline mr-1" /> {post.date}</span>
                    <span><Clock size={12} className="inline mr-1" /> {post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)', lineHeight: '1.3' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '20px', lineBreak: 'strict' }}>
                    {post.summary}
                  </p>
                </div>

                <a href={`#/blog/${id}`} className="btn-explore-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-gold)', textDecoration: 'none' }}>
                  Read Article <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
