import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Heart, Clock, ArrowRight, ArrowLeft, Check, Calendar, Home, User, ShieldCheck } from 'lucide-react';

const ACTIVITIES = [
  { id: 'private-dunes-dinner', label: 'Private Dune Dinner', price: 4500, desc: 'Isolated dunes, candlelight chef cooking' },
  { id: 'jeep-safari', label: '4x4 Jeep Dune Bashing', price: 1500, desc: 'Thrilling off-road sand racing' },
  { id: 'stargazing', label: 'Astronomer Stargazing', price: 1200, desc: 'Professional telescope exploration' },
  { id: 'drone-photos', label: 'Drone & DSLR Photoshoot', price: 4500, desc: 'High-res photos and aerial videos' },
  { id: 'camel-safari', label: 'Sunset Camel Ride', price: 800, desc: 'Classic sunset ridge caravan' },
  { id: 'heritage-walk', label: 'Fort Historical Walk', price: 1200, desc: 'Guided palace & temple tour' },
  { id: 'food-tour', label: 'Rajasthani Street Food Tour', price: 1000, desc: '6+ authentic desert dish tastings' },
  { id: 'shopping-tour', label: 'Artisan Handicraft Tour', price: 800, desc: 'Direct weavers and carvers access' }
];

export default function BuildTourWizard() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    vibe: 'Couple / Romance',
    accommodation: 'Royal Blend (Haveli + Camp)',
    duration: '3 Days / 2 Nights',
    guests: 2,
    travelDate: '',
    activities: [],
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Calculate pricing estimates dynamically
  useEffect(() => {
    let basePrice = 0;
    
    // Base pricing based on vibe and accommodation
    if (formData.vibe.includes('Couple') || formData.vibe.includes('Honeymoon')) {
      basePrice = 12000; // Base per couple
    } else {
      basePrice = 4500 * formData.guests; // Base per person
    }

    // Adjust base based on lodging
    if (formData.accommodation.includes('Luxury')) {
      basePrice += 2000 * (formData.vibe.includes('Couple') ? 1 : formData.guests / 2);
    } else if (formData.accommodation.includes('Royal')) {
      basePrice += 3000 * (formData.vibe.includes('Couple') ? 1 : formData.guests / 2);
    }

    // Add activity costs
    let activityCost = 0;
    formData.activities.forEach(actId => {
      const act = ACTIVITIES.find(a => a.id === actId);
      if (act) {
        // Dinner / Photos are flat event rates, others are per person
        if (actId === 'private-dunes-dinner' || actId === 'drone-photos') {
          activityCost += act.price;
        } else {
          activityCost += act.price * formData.guests;
        }
      }
    });

    setEstimatedPrice(basePrice + activityCost);
  }, [formData.vibe, formData.accommodation, formData.guests, formData.activities]);

  const handleSelectVibe = (vibe) => setFormData(prev => ({ ...prev, vibe }));
  const handleSelectLodging = (accommodation) => setFormData(prev => ({ ...prev, accommodation }));
  const handleSelectDuration = (duration) => setFormData(prev => ({ ...prev, duration }));
  
  const handleActivityToggle = (actId) => {
    setFormData(prev => {
      const exists = prev.activities.includes(actId);
      const newActivities = exists 
        ? prev.activities.filter(id => id !== actId) 
        : [...prev.activities, actId];
      return { ...prev, activities: newActivities };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in your name, phone, and email address.");
      return;
    }

    // Gather chosen activities labels
    const chosenActivities = formData.activities.map(actId => {
      const act = ACTIVITIES.find(a => a.id === actId);
      return act ? act.label : actId;
    }).join(', ');

    const message = `Hello Moomal Tours! I built a custom Jaisalmer package online:
• Package Vibe: ${formData.vibe}
• Stays Choice: ${formData.accommodation}
• Duration: ${formData.duration}
• Guests Count: ${formData.guests}
• Target Date: ${formData.travelDate}
• Activities: ${chosenActivities || 'None selected'}
• Guest Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}
${formData.notes ? `• Custom Requests: ${formData.notes}` : ''}`;

    const whatsappUrl = `https://wa.me/919352803009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="build-tour-wizard-page section-padding">
      <div className="container" style={{ maxWidth: '780px' }}>
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-accent-title">Bespoke Trip Designer</span>
          <h1 className="section-title-dark">Build Your Custom Jaisalmer Tour</h1>
          <div className="section-divider"></div>
          <p>Configure your stays, transport, and toggled activities in four simple steps to receive an instant estimate.</p>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="wizard-progress-bar-wrapper" style={{ marginBottom: '40px', backgroundColor: 'var(--color-border)', height: '4px', borderRadius: '2px', overflow: 'hidden' }}>
            <div 
              style={{ width: `${(step / 4) * 100}%`, height: '100%', backgroundColor: 'var(--color-primary-gold)', transition: 'width 0.4s ease' }}
            ></div>
          </div>
        )}

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="success-display" style={{ textAlign: 'center', padding: '40px 24px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <div className="success-icon-wrapper" style={{ width: '64px', height: '64px', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', color: 'var(--color-primary-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--color-text-dark)' }}>Blueprint Sent to Royal Desk</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px auto' }}>
              Thank you, <strong>{formData.name}</strong>. Your custom blueprint has been formatted and shared. A booking specialist will reach out to you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to finalize prices within 24 hours.
            </p>

            <div className="receipt-box" style={{ maxWidth: '440px', margin: '0 auto 32px auto', border: '1px solid rgba(197,160,89,0.3)', borderRadius: '8px', padding: '24px', textAlign: 'left', backgroundColor: 'var(--color-secondary-sand)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: 'var(--color-primary-gold)' }}></div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-primary-gold)', marginBottom: '16px', letterSpacing: '0.1em' }}>Chosen Blueprint Details</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><strong>Vibe & Guests:</strong> {formData.vibe} ({formData.guests} Travelers)</li>
                <li><strong>Accommodation:</strong> {formData.accommodation}</li>
                <li><strong>Length of Stay:</strong> {formData.duration}</li>
                <li><strong>Date of Travel:</strong> {formData.travelDate || 'Not selected'}</li>
              </ul>
            </div>

            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="btn-primary"
            >
              Build Another Itinerary
            </button>
          </div>
        ) : (
          /* ACTIVE WIZARD */
          <form onSubmit={handleSubmit} className="wizard-form-box" style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '32px', boxShadow: 'var(--shadow-subtle)' }}>
            
            {/* STEP 1: VIBE & ACCOMMODATION */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', display: 'block', marginBottom: '4px' }}>Step 01 of 04</span>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Select Your Travel Vibe</h3>
                </div>

                <div className="options-grid-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Couple / Romance', desc: 'Secluded dunes, private dinners, couple safaris' },
                    { label: 'Family Travel', desc: 'Comfortable SUV cabs, kid-friendly safaris, adjoining tents' },
                    { label: 'Friends / Group Adventure', desc: 'Jeep safari dune bashing, quad biking, group bonfire' },
                    { label: 'Corporate Retreat', desc: 'Large Swiss tents, team events, AV setup meetings' }
                  ].map(item => (
                    <div 
                      key={item.label}
                      onClick={() => handleSelectVibe(item.label)}
                      className={`wizard-selection-card ${formData.vibe === item.label ? 'selected' : ''}`}
                      style={{
                        padding: '16px 20px',
                        border: `2px solid ${formData.vibe === item.label ? 'var(--color-primary-gold)' : 'var(--color-border)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        backgroundColor: formData.vibe === item.label ? 'rgba(197, 160, 89, 0.04)' : '#ffffff',
                        transition: 'all 0.3s'
                      }}
                    >
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-dark)' }}>{item.label}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '12px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '12px' }}>Lodging Preference</h4>
                  <div className="options-grid-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { label: 'Boutique Heritage Haveli', desc: 'Historical yellow stone rooms inside fort walls' },
                      { label: 'Luxury Glamping Tents', desc: 'AC Swiss suites with ensuite concrete bathrooms' },
                      { label: 'Royal Blend (Haveli + Camp)', desc: '1 night in heritage hotel, 1 night in desert tent' }
                    ].map(item => (
                      <div 
                        key={item.label}
                        onClick={() => handleSelectLodging(item.label)}
                        className={`wizard-selection-card ${formData.accommodation === item.label ? 'selected' : ''}`}
                        style={{
                          padding: '16px 20px',
                          border: `2px solid ${formData.accommodation === item.label ? 'var(--color-primary-gold)' : 'var(--color-border)'}`,
                          borderRadius: '6px',
                          cursor: 'pointer',
                          backgroundColor: formData.accommodation === item.label ? 'rgba(197, 160, 89, 0.04)' : '#ffffff',
                          transition: 'all 0.3s'
                        }}
                      >
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--color-text-dark)' }}>{item.label}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: DURATION & GUESTS */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', display: 'block', marginBottom: '4px' }}>Step 02 of 04</span>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Travelers & Dates</h3>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ marginBottom: '8px' }}>Number of Guests</label>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {[1, 2, 3, 4, 5, '6+'].map(val => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setFormData(prev => ({ ...prev, guests: typeof val === 'number' ? val : 6 }))}
                        className={`select-btn ${formData.guests === (typeof val === 'number' ? val : 6) ? 'selected' : ''}`}
                        style={{
                          flex: 1,
                          minWidth: '50px',
                          padding: '12px',
                          backgroundColor: formData.guests === (typeof val === 'number' ? val : 6) ? 'var(--color-primary-gold)' : '#ffffff',
                          color: formData.guests === (typeof val === 'number' ? val : 6) ? '#ffffff' : 'var(--color-text-dark)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'all 0.3s'
                        }}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ marginBottom: '8px' }}>Length of Stay</label>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {['2 Days / 1 Night', '3 Days / 2 Nights', '4 Days / 3 Nights', '5+ Days'].map(val => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => handleSelectDuration(val)}
                        className={`select-btn ${formData.duration === val ? 'selected' : ''}`}
                        style={{
                          flex: 1,
                          minWidth: '130px',
                          padding: '12px',
                          backgroundColor: formData.duration === val ? 'var(--color-primary-gold)' : '#ffffff',
                          color: formData.duration === val ? '#ffffff' : 'var(--color-text-dark)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          transition: 'all 0.3s'
                        }}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Start Date</label>
                  <input 
                    type="date" 
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: SELECT EXPERIENCES */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', display: 'block', marginBottom: '4px' }}>Step 03 of 04</span>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Toggle Bespoke Activities</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Choose any signature activities you wish to add to your Jaisalmer itinerary.</p>
                </div>

                <div className="activities-toggle-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '350px', overflowY: 'auto', paddingRight: '8px' }}>
                  {ACTIVITIES.map(act => {
                    const isChecked = formData.activities.includes(act.id);
                    return (
                      <div
                        key={act.id}
                        onClick={() => handleActivityToggle(act.id)}
                        className={`activity-toggle-card ${isChecked ? 'active' : ''}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '14px 18px',
                          border: `1px solid ${isChecked ? 'var(--color-primary-gold)' : 'var(--color-border)'}`,
                          borderRadius: '6px',
                          cursor: 'pointer',
                          backgroundColor: isChecked ? 'rgba(197, 160, 89, 0.03)' : '#ffffff',
                          transition: 'all 0.3s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => {}} // Controlled by click wrapper
                            style={{ accentColor: 'var(--color-primary-gold)', cursor: 'pointer' }}
                          />
                          <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-text-dark)', display: 'block' }}>{act.label}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.desc}</span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT & ESTIMATE */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-gold)', display: 'block', marginBottom: '4px' }}>Step 04 of 04</span>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>Finalize & Share Itinerary</h3>
                </div>

                {/* Itinerary Summary Receipt */}
                <div className="receipt-box" style={{ border: '1px solid rgba(197,160,89,0.3)', borderRadius: '8px', padding: '24px', backgroundColor: 'var(--color-secondary-sand)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', backgroundColor: 'var(--color-primary-gold)' }}></div>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-primary-gold)', marginBottom: '16px', letterSpacing: '0.10em' }}>Bespoke Itinerary Summary</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                    <li><strong>Itinerary Theme:</strong> {formData.vibe}</li>
                    <li><strong>Stay Style:</strong> {formData.accommodation}</li>
                    <li><strong>Guests:</strong> {formData.guests} Travelers</li>
                    <li><strong>Length:</strong> {formData.duration}</li>
                  </ul>
                </div>

                {/* Contacts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="e.g. Scarlett Johansson" 
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
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="e.g. scarlett@example.com" 
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Special requests / Notes</label>
                    <textarea 
                      name="notes" 
                      value={formData.notes} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Food allergies, specific flight landing times, customization details..." 
                      rows={2} 
                      className="form-textarea"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="wizard-footer">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                >
                  Continue <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn-primary"
                  style={{ backgroundColor: '#FF4B3A', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
                >
                  Request Quote on WhatsApp <ArrowRight size={16} />
                </button>
              )}
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
