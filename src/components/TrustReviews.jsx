import React from 'react';
import { Star, ShieldCheck, UserCheck, Compass, CheckCircle } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Emily Watson',
    country: 'United Kingdom',
    pkg: 'Royal Honeymoon Desert Retreat',
    rating: 5,
    date: 'Dec 2025',
    text: 'An absolute dream! Moomal Tours arranged a private candlelight dinner on the sand dunes that was completely isolated from everyone else. The Manganiyar musicians played beautiful songs around the bonfire. Unforgettable hospitality.'
  },
  {
    name: 'Rahul Sharma',
    country: 'Mumbai, India',
    pkg: 'Thar Heritage Family Safari',
    rating: 5,
    date: 'Jan 2026',
    text: 'Highly recommend for families. Our driver was extremely polite and professional, and the SUV was clean and spacious. The kids loved the ghost village treasure hunt and the safe camel ride at Sam Dunes.'
  },
  {
    name: 'Marc & Chloe',
    country: 'France',
    pkg: 'Moomal Couple Desert Getaway',
    rating: 5,
    date: 'Feb 2026',
    text: 'The best local experience in Jaisalmer! Booking through WhatsApp was instant. Our local guide took us to hidden sections of the Fort and local weavers without any high-pressure shopping pressure. 10/10.'
  }
];

const TRUST_ELEMENTS = [
  {
    icon: UserCheck,
    title: 'Hereditary Local Guides',
    desc: 'Our guides are Jaisalmer natives carrying generations of local stories, community contacts, and historical knowledge.'
  },
  {
    icon: ShieldCheck,
    title: 'Licensed Desert Drivers',
    desc: 'Our off-road 4x4 jeep drivers are fully licensed and undergo safety training to guarantee secure dune-bashing.'
  },
  {
    icon: Compass,
    title: 'Zero Tourist Traps',
    desc: 'We follow a strict transparent policy with no forced stops at high-commission tourist souvenir shops or fake camp sites.'
  },
  {
    icon: CheckCircle,
    title: 'Secure Payment Badges',
    desc: 'Safe direct banking transfers, transparent deposit terms, and clear, passenger-friendly cancellation refund policies.'
  }
];

export default function TrustReviews() {
  return (
    <section className="trust-reviews-section section-padding bg-[#FCFBF9] border-t border-[#EAE6DF]">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Guest Chronicles</span>
          <h2 className="section-title-dark">Trust & Verified Reviews</h2>
          <div className="section-divider"></div>
          <p>Read about actual desert expeditions designed for couples, families, and solo travelers exploring Jaisalmer.</p>
        </div>

        {/* Google review summary panel */}
        <div className="google-rating-summary-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '24px', backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', maxWidth: '440px', margin: '0 auto 48px auto', boxShadow: 'var(--shadow-subtle)' }}>
          <div style={{ backgroundColor: '#4285F4', padding: '14px', borderRadius: '50%', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.111 4.114a5.855 5.855 0 01-5.855-5.857 5.855 5.855 0 015.855-5.856c1.617 0 3.08.562 4.223 1.492l3.057-3.056C19.347 3.518 16.035 2 12.24 2 6.58 2 2 6.58 2 12.24s4.58 10.24 10.24 10.24c5.795 0 10.24-4.114 10.24-10.24 0-.648-.073-1.285-.202-1.955H12.24z"/>
            </svg>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-text-dark)' }}>Google Reviews Rating</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#F4B400' }}>4.9</span>
              <div style={{ display: 'flex', color: '#F4B400' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Based on 342 verified guests reviews</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px', marginBottom: '64px' }}>
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="review-card-item" style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', padding: '30px', borderRadius: '8px', boxShadow: 'var(--shadow-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
              <div>
                <div style={{ display: 'flex', color: '#F4B400', gap: '2px', marginBottom: '14px' }}>
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#3A3530', marginBottom: '24px', lineHeight: '1.6' }}>
                  "{rev.text}"
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--color-text-dark)', display: 'block' }}>{rev.name}</span>
                  <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>{rev.country}</span>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', border: '1px solid rgba(197, 160, 89, 0.3)', padding: '2px 8px', borderRadius: '4px' }}>
                  {rev.pkg.replace('Package', '')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust pillars layout */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '64px' }}>
          <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', marginBottom: '40px' }}>Our Trust Commitments</h3>
          <div className="trust-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
            {TRUST_ELEMENTS.map((el, idx) => {
              const Icon = el.icon;
              return (
                <div key={idx} className="trust-pillar-card" style={{ textAlign: 'left' }}>
                  <div style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-primary-gold)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '8px' }}>{el.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{el.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
