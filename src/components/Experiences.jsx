import React from 'react';
import { Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Thar Stargazing Wilderness',
    desc: 'Away from all light pollution, the Thar desert sky displays an astonishing dome of stars. Enjoy private stargazing with a local astronomer, using a professional telescope.',
    icon: Sparkles
  },
  {
    title: 'Manganiyar Folk Harmony',
    desc: 'Immerse in the soulful music of Jaisalmer’s traditional folk singers. These centuries-old ballads recount tales of desert legends, accompanied by traditional instruments.',
    icon: Heart
  },
  {
    title: 'Private Dunes Banquets',
    desc: 'Dine in a private sand oasis. A dedicated chef cooks hot charcoal kebabs and traditional delicacies, served on candlelit tables on top of the dunes under the moonlight.',
    icon: Compass
  }
];

const VALUES = [
  {
    title: 'Heritage Hosts',
    desc: 'Our guides are born and raised in Jaisalmer, carrying generations of local knowledge, storytelling, and exclusive community contacts.',
    icon: ShieldCheck
  },
  {
    title: 'Bespoke Customization',
    desc: 'We do not sell pre-packaged mass tours. Every trip is co-designed with you, tailored to your exact pace, preferences, and style.',
    icon: Compass
  },
  {
    title: 'Regenerative Eco-Travel',
    desc: 'We actively conserve the local ecosystems and guarantee fair-trade wages for desert camel riders, cooks, drivers, and folk performers.',
    icon: Heart
  }
];

export default function Experiences() {
  return (
    <>
      {/* Experiences Section */}
      <section id="experiences" className="section-padding bg-[#FCFBF9] border-t border-[#EAE6DF]">
        <div className="container">
          <div className="experiences-grid">
            
            {/* Text details (5 cols) */}
            <div className="experiences-text-side">
              <span className="section-accent-title">Unforgettable Thar</span>
              <h2 className="section-title-dark">Authentic Desert Experiences</h2>
              <div className="section-divider" style={{ margin: '0 0 20px 0' }}></div>
              <p className="experiences-header-desc">
                A trip to Jaisalmer is incomplete without absorbing the nomadic spirit. We design deep, high-end cultural activities that connect you directly with the people and environment of the desert.
              </p>
              
              <div className="experiences-visual-frame">
                <img 
                  src="/camel_sunset.png" 
                  alt="Twilight Camel Caravan" 
                  className="experiences-visual-img"
                />
              </div>
            </div>

            {/* Exp Cards list (7 cols) */}
            <div className="experiences-list-side">
              {EXPERIENCES.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={idx}
                    className="experience-item-card"
                  >
                    <div className="experience-item-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="experience-item-title">{exp.title}</h4>
                      <p className="experience-item-desc">{exp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section-padding bg-[#1C1A17] text-white">
        <div className="container">
          <div className="section-header">
            <span className="section-accent-title">Our Pillars</span>
            <h2 className="section-title-light">Why Moomal Tours?</h2>
            <div className="section-divider"></div>
            <p className="section-desc-light">
              Crafting premium travel experiences requires a meticulous blend of luxury standards and deep respect for local heritage.
            </p>
          </div>

          <div className="why-us-grid">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="why-us-card"
                >
                  <div className="why-us-icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h4 className="why-us-card-title">{val.title}</h4>
                  <p className="why-us-card-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
