import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Compass, HelpCircle, FileText, Send, Check } from 'lucide-react';

export default function AboutContactFAQ({ activeSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello Moomal Tours! I would like to make an enquiry:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Travel Date: ${formData.date}
• Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919352803009?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the best time of year to visit Jaisalmer?',
      a: 'The winter months between October and March are ideal. Temperatures range from 20°C to 28°C during the day, which is perfect for sightseeing and safaris. Nights can drop to 5°C, so pack warm layers.'
    },
    {
      q: 'Are your desert camps safe for families and children?',
      a: 'Yes, absolutely. Our luxury camps feature fenced boundaries, 24/7 security staff, concrete ensuite bathrooms, and direct vehicle road access. We also offer specialized double-riding saddles and carts for children on camel safaris.'
    },
    {
      q: 'What is the difference between Sam Sand Dunes and Khuri Sand Dunes?',
      a: 'Sam Sand Dunes are larger, wind-carved ridges perfect for high-speed jeep dune bashing and adventure sports. They have a lively festival feel. Khuri is a quieter, rustic desert village ideal for stargazing, campfires, and peaceful relaxation.'
    },
    {
      q: 'Do your drivers and guides carry official licenses?',
      a: 'Yes. All our guides are certified local historians approved by the tourism board. Our off-road 4x4 drivers undergo yearly defensive desert driving courses and carry commercial vehicle permits.'
    },
    {
      q: 'What should we pack for a desert camp stay?',
      a: 'For winters (Oct-Feb), pack a heavy jacket, sweaters, thermal wear, and a scarf for cold nights. For daytime, light cotton clothing, sunglasses, sunscreen, and wide-brimmed hats are highly recommended.'
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="about-view" style={{ textAlign: 'left' }}>
            <h1 className="section-title-dark" style={{ marginBottom: '24px' }}>Our Desert Legacy</h1>
            <p className="package-long-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
              Moomal Tours was founded by native desert guides born and raised in Jaisalmer. For over a decade, we have dedicated ourselves to offering travelers a raw, authentic connection to the Thar Desert, combined with premium luxury hospitality. 
            </p>
            <p className="package-long-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
              Unlike mass commercial tourism, we focus on private, secluded setups. We co-design every itinerary, matching your pace and interests. Whether you are sleeping in a high-end canvas suite or dining on a quiet, candlelit sand ridge, you are supported by local experts.
            </p>

            <div className="impact-box" style={{ backgroundColor: 'var(--color-dark-charcoal)', color: '#ffffff', padding: '32px', borderRadius: '8px', marginBottom: '48px' }}>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-gold)', marginBottom: '12px' }}>Our Sustainable Travel Promise</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', lineHeight: '1.6' }}>
                We believe travel should enrich local communities. We pledge 1% of all booking revenues to sand dune conservation in Rajasthan. We also guarantee fair-trade wages and hire only local village cooks, guides, camel riders, and Manganiyar musicians, ensuring tourism benefits remain in the desert.
              </p>
            </div>

            <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '10px' }}>Local Heritage Hosts</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Our team contains storyteller guides born within Jaisalmer Fort walls, sharing authentic oral legends.</p>
              </div>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '10px' }}>Elite Handpicked Lodging</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>We audit every boutique hotel and camp weekly to guarantee hygiene, hot water pressure, and premium linen.</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="contact-view">
            <h1 className="section-title-dark" style={{ marginBottom: '12px', textAlign: 'left' }}>Contact Travel Desk</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', textAlign: 'left' }}>Have questions about itineraries or pricing? Reach our support team instantly.</p>

            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '48px' }}>
              
              {/* Office Details */}
              <div className="office-details-side" style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '24px' }}>Desert Head Office</h3>
                
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <MapPin size={22} className="text-[#C5A059] flex-shrink-0" />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>Office Address</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Sam Sand Dunes Road, Jaisalmer, Rajasthan, 345001 India</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Phone size={22} className="text-[#C5A059] flex-shrink-0" />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>Direct Calls & WhatsApp</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>+919352803009 (Available 24/7)</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <Mail size={22} className="text-[#C5A059] flex-shrink-0" />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.9rem' }}>Enquiry Mailbox</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>inquire@moomaltours.com</span>
                    </div>
                  </li>
                </ul>

                <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'var(--color-secondary-sand)', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Instant Travel Assistance</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>Need immediate booking confirmation? Click below to chat directly with our reservation specialist.</p>
                  <a 
                    href="https://wa.me/919352803009?text=Hello%20Moomal%20Tours!%20I'd%20like%20to%20plan%20a%20Jaisalmer%20trip."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', padding: '8px 16px' }}
                  >
                    Start Chat <Send size={12} />
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="form-side" style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '32px', textAlign: 'left', boxShadow: 'var(--shadow-subtle)' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(197,160,89,0.1)', borderRadius: '50%', color: 'var(--color-primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', border: '1px solid rgba(197,160,89,0.2)' }}>
                      <Check size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Enquiry Shared</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Thank you. Your details have been shared with our team on WhatsApp. We will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="e.g. Brad Pitt" 
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="e.g. brad@example.com" 
                        className="form-input"
                      />
                    </div>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. +91 98765 43210" 
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Travel Date</label>
                        <input 
                          type="date" 
                          name="date" 
                          value={formData.date} 
                          onChange={handleInputChange} 
                          required 
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message / Details</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Share details about what package or activities you are looking to book..." 
                        rows={3} 
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                      Send Enquiry via WhatsApp <Send size={14} />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        );

      case 'cancellation':
        return (
          <div className="cancellation-view" style={{ textAlign: 'left' }}>
            <h1 className="section-title-dark" style={{ marginBottom: '24px' }}><FileText size={32} className="inline mr-2 text-[#C86B45]" /> Cancellation & Booking Policy</h1>
            <p className="package-long-desc" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '32px' }}>
              At Moomal Tours, we believe in complete transparency. Below are our direct terms regarding cancellations, refunds, and rescheduling to give you absolute peace of mind.
            </p>

            <div className="policy-list-boxes" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={18} className="text-green-600" /> Free Cancellation (Up to 15 Days)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cancellations made 15 days or more before your scheduled arrival date will receive a 100% refund of the advance deposit (minus a 5% credit card/banking processing fee).</p>
              </div>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '8px' }}>Partial Refund (7 to 14 Days)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cancellations made between 7 and 14 days before arrival will receive a 50% refund of the total booking value, or you can opt for free rescheduling.</p>
              </div>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '8px' }}>No Refund (Under 7 Days)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cancellations made less than 7 days before arrival are non-refundable. However, we will coordinate with partners to transfer credit to future bookings depending on occupancy.</p>
              </div>
              <div style={{ border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px', backgroundColor: '#ffffff' }}>
                <h4 style={{ fontWeight: 'bold', color: 'var(--color-text-dark)', marginBottom: '8px' }}>Flexible Rescheduling Policy</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>We offer free rescheduling (subject to availability) up to 7 days before travel. Rescheduled dates must be within 12 months of the original booking date.</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-secondary-sand)', border: '1px solid var(--color-border)', padding: '24px', borderRadius: '6px' }}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Questions about your booking?</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>Contact our customer desk directly to discuss custom adjustment options, deposits, or cancellation queries.</p>
              <a href="tel:+919352803009" className="btn-secondary" style={{ fontSize: '11px', padding: '8px 16px' }}>Call Support: +919352803009</a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="about-contact-faq-page section-padding">
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Render Primary View */}
        <div style={{ marginBottom: '64px' }}>
          {renderSection()}
        </div>

        {/* Accordion FAQ Section */}
        <div className="faq-wrapper" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '64px', textAlign: 'left' }}>
          <h2 className="section-title-dark" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><HelpCircle size={28} className="text-[#C5A059]" /> Frequently Asked Questions</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>Everything you need to know about planning, safety, clothing, and camps in Jaisalmer.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="faq-accordion-item"
                style={{ 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '6px', 
                  backgroundColor: '#ffffff',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-dark)'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--color-primary-gold)' }}>
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
