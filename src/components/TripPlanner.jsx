import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Compass, Calendar, Home, User, Sparkles } from 'lucide-react';

export default function TripPlanner({ isOpen, onClose, initialVibe }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vibe: '',
    duration: '4-5 Days',
    season: 'Winter (Oct - Feb)',
    accommodation: 'Ultra-Luxury Blend',
    name: '',
    email: '',
    guests: '2 Guests',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialVibe if set from the parent component (e.g. Itinerary selection)
  useEffect(() => {
    if (initialVibe) {
      setFormData(prev => ({ ...prev, vibe: initialVibe }));
      setStep(2); // Jump straight to step 2 if vibe is pre-selected
    }
  }, [initialVibe, isOpen]);

  if (!isOpen) return null;

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }

    const message = `Hello Moomal Tours! I would like to design a bespoke Jaisalmer journey:
• Travel Vibe: ${formData.vibe}
• Duration: ${formData.duration}
• Season: ${formData.season}
• Lodging Style: ${formData.accommodation}
• Guests Count: ${formData.guests}
• Guest Name: ${formData.name}
• Email: ${formData.email}
${formData.notes ? `• Custom Requests: ${formData.notes}` : ''}`;

    const whatsappUrl = `https://wa.me/919352803009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      vibe: '',
      duration: '4-5 Days',
      season: 'Winter (Oct - Feb)',
      accommodation: 'Ultra-Luxury Blend',
      name: '',
      email: '',
      guests: '2 Guests',
      notes: ''
    });
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="modal-header-accent">Bespoke Trip Designer</span>
            <h3 className="modal-header-title">Moomal Tours</h3>
          </div>
          <button 
            onClick={onClose}
            className="modal-close-btn"
          >
            <X size={22} />
          </button>
        </div>

        {/* Wizard Progress Bar */}
        {!isSubmitted && (
          <div className="modal-progress-bar">
            <div 
              className="modal-progress-fill"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Modal Content Area */}
        <div className="modal-body">
          {isSubmitted ? (
            /* SUCCESS SUBMISSION STATE */
            <div className="success-display">
              <div className="success-icon-wrapper">
                <Check size={32} />
              </div>
              <h3 className="success-title">Your Journey is being Prepared</h3>
              <p className="success-desc">
                Thank you, <span className="success-desc-name">{formData.name}</span>. Our specialist is assembling a custom Rajasthan travel itinerary for you. We will contact you at <span className="success-desc-email">{formData.email}</span> within 24 hours.
              </p>

              {/* Summary Summary Card */}
              <div className="summary-blueprint-card">
                {/* Accent line */}
                <div className="summary-card-accent-bar"></div>
                
                <h4 className="summary-card-header">
                  <Sparkles size={14} /> Design Blueprint
                </h4>
                
                <ul className="summary-card-list">
                  <li className="summary-card-item">
                    <strong>Travel Style:</strong> {formData.vibe}
                  </li>
                  <li className="summary-card-item">
                    <strong>Duration & Season:</strong> {formData.duration} ({formData.season})
                  </li>
                  <li className="summary-card-item">
                    <strong>Accommodations:</strong> {formData.accommodation}
                  </li>
                  <li className="summary-card-item">
                    <strong>Travelers:</strong> {formData.guests}
                  </li>
                  {formData.notes && (
                    <li className="summary-notes-divider">
                      "{formData.notes}"
                    </li>
                  )}
                </ul>
              </div>

              <button 
                onClick={handleReset}
                className="btn-secondary"
                style={{ padding: '12px 32px' }}
              >
                Close Planner
              </button>
            </div>
          ) : (
            /* WIZARD FORM STEPS */
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: CHOOSE YOUR VIBE */}
              {step === 1 && (
                <div className="vibe-selector-list">
                  <div className="wizard-step-header">
                    <span className="wizard-step-kicker">
                      <Compass size={14} /> Step 01
                    </span>
                    <h4 className="wizard-step-title">What style of journey inspires you?</h4>
                  </div>
                  
                  <div className="vibe-selector-list">
                    {[
                      {
                        title: 'Safari & Wildlife',
                        desc: 'Camel safaris across high dunes, private starry skies campfire banquet, and stays in luxury air-conditioned canvas suites.',
                        vibe: 'Safari & Wildlife'
                      },
                      {
                        title: 'Cultural Heritage',
                        desc: 'Deep architecture dives, private guides, visits to ancient havelis, and staying in boutique royal palace fort suites.',
                        vibe: 'Cultural Heritage'
                      },
                      {
                        title: 'Romantic Escapes',
                        desc: 'Private candlelit sands dinners, peaceful lake sunrise boat rides, private stargazing, and exclusive royal hospitality.',
                        vibe: 'Romantic Escapes'
                      }
                    ].map((opt) => (
                      <div 
                        key={opt.vibe}
                        onClick={() => handleSelect('vibe', opt.vibe)}
                        className={`selector-option-card ${formData.vibe === opt.vibe ? 'selected' : ''}`}
                      >
                        <h5 className="option-card-title">{opt.title}</h5>
                        <p className="option-card-desc">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: DURATION & SEASON */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div>
                    <span className="wizard-step-kicker">
                      <Calendar size={14} /> Step 02
                    </span>
                    <h4 className="wizard-step-title">Duration & Season</h4>
                  </div>

                  {/* Duration Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label className="form-label">
                      Target Trip Duration
                    </label>
                    <div className="wizard-grid-3">
                      {['2-3 Days', '4-5 Days', '6+ Days'].map((dur) => (
                        <button
                          type="button"
                          key={dur}
                          onClick={() => handleSelect('duration', dur)}
                          className={`button-option-select ${formData.duration === dur ? 'selected' : ''}`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Season Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label className="form-label">
                      Best Time to Travel
                    </label>
                    <div className="wizard-grid-3">
                      {['Winter (Oct - Feb)', 'Spring (Mar - Apr)', 'Monsoon (Jul - Sep)'].map((seas) => (
                        <button
                          type="button"
                          key={seas}
                          onClick={() => handleSelect('season', seas)}
                          className={`button-option-select ${formData.season === seas ? 'selected' : ''}`}
                        >
                          {seas}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: ACCOMMODATION STYLE */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <span className="wizard-step-kicker">
                      <Home size={14} /> Step 03
                    </span>
                    <h4 className="wizard-step-title">Select Accommodation Vibe</h4>
                  </div>

                  <div className="vibe-selector-list">
                    {[
                      {
                        title: 'Heritage Havelis & Palaces',
                        desc: 'Boutique luxury stone suites within historic fortress walls and restored mansions.',
                        val: 'Heritage Havelis'
                      },
                      {
                        title: 'Luxury Desert Glamping Canvas Suites',
                        desc: 'Five-star tented camp setups in dunes, showcasing outdoor bath hubs and glowing fire banquets.',
                        val: 'Luxury Desert Camps'
                      },
                      {
                        title: 'The Ultimate Royal Blend',
                        desc: 'Spend half your journey immersed in camp luxury, and the rest resting inside historical stone suites.',
                        val: 'Ultra-Luxury Blend'
                      }
                    ].map((opt) => (
                      <div 
                        key={opt.val}
                        onClick={() => handleSelect('accommodation', opt.val)}
                        className={`accommodation-card-radio ${formData.accommodation === opt.val ? 'selected' : ''}`}
                      >
                        <div className="radio-circle">
                          {formData.accommodation === opt.val && <div className="radio-inner-fill"></div>}
                        </div>
                        <div>
                          <h5 className="option-card-title">{opt.title}</h5>
                          <p className="option-card-desc">{opt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & DETAILS */}
              {step === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <span className="wizard-step-kicker">
                      <User size={14} /> Step 04
                    </span>
                    <h4 className="wizard-step-title">Final Touches</h4>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Evelyn Thorne"
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
                        placeholder="e.g. evelyn@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Number of Guests</label>
                    <select 
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {['1 Guest', '2 Guests', '3-4 Guests', '5+ Guests'].map(cnt => (
                        <option key={cnt} value={cnt}>{cnt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Special Requests / Notes</label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. Dietary requirements, dietary allergies, accessibility needs, celebration trips..."
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons Panel */}
              <div className="wizard-footer">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="wizard-back-btn"
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
                    disabled={step === 1 && !formData.vibe}
                    className="btn-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: (step === 1 && !formData.vibe) ? 0.5 : 1, cursor: (step === 1 && !formData.vibe) ? 'not-allowed' : 'pointer' }}
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn-primary"
                    style={{ backgroundColor: '#FF4B3A' }}
                  >
                    Complete Proposal Request
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
