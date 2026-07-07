import React, { useState } from 'react';
import { Camera, Film, Eye, Play } from 'lucide-react';

const IMAGES = [
  { src: '/guest_dunes_dinner.png', title: 'Private Candlelight Dunes Dinner' },
  { src: '/guest_camel_ride.png', title: 'Family Sunset Camel Caravan' },
  { src: '/guest_camp_bonfire.png', title: 'Campfire Harmonies around the Bonfire' },
  { src: '/guest_fort_walk.png', title: 'Exploring Medieval Haveli Passageways' }
];

const VIDEOS = [
  { 
    title: 'Thar Wilderness Expeditions', 
    desc: 'Cinematic preview of 4x4 off-road dune bashing and private sunset setups.', 
    thumbnail: '/sam_sand_dunes.png',
    duration: '2:15'
  },
  { 
    title: 'Manganiyar Folk Harmonies', 
    desc: 'Live campfire recording of traditional desert vocals and instruments.', 
    thumbnail: '/camel_sunset.png',
    duration: '1:45'
  }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="gallery-section section-padding" style={{ backgroundColor: '#1C1A17', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-accent-title">Visual Journeys</span>
          <h2 className="section-title-light">Desert Gallery & Cinematic Clips</h2>
          <div className="section-divider"></div>
          <p className="section-desc-light">
            Browse authentic moments captured during our tours. Real settings, real luxury, and raw Thar desert beauty.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
          <button
            onClick={() => { setActiveTab('photos'); setPlayingVideo(null); }}
            className={`btn-secondary ${activeTab === 'photos' ? 'active' : ''}`}
            style={{
              borderColor: activeTab === 'photos' ? 'var(--color-primary-gold)' : 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              backgroundColor: activeTab === 'photos' ? 'var(--color-primary-gold)' : 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Camera size={16} /> Guest Photos
          </button>
          <button
            onClick={() => { setActiveTab('videos'); setSelectedPhoto(null); }}
            className={`btn-secondary ${activeTab === 'videos' ? 'active' : ''}`}
            style={{
              borderColor: activeTab === 'videos' ? 'var(--color-primary-gold)' : 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              backgroundColor: activeTab === 'videos' ? 'var(--color-primary-gold)' : 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Film size={16} /> Cinematic Videos
          </button>
        </div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="photos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {IMAGES.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedPhoto(img)}
                className="photo-card-item"
                style={{
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'zoom-in',
                  aspectRatio: '4/3',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${img.src.slice(1)}`} 
                  alt={img.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                >
                  <Eye size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Showcase */}
        {activeTab === 'videos' && (
          <div className="videos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {VIDEOS.map((vid, idx) => (
              <div key={idx} className="video-card-item" style={{ textAlign: 'left' }}>
                <div 
                  onClick={() => setPlayingVideo(vid)}
                  style={{
                    position: 'relative',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    aspectRatio: '16/9',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%), url(${vid.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ backgroundColor: 'var(--color-primary-gold)', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#12110F', boxShadow: '0 4px 15px rgba(197,160,89,0.3)' }}>
                    <Play size={24} fill="currentColor" />
                  </div>
                  <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.7)', fontSize: '10px', padding: '2px 6px', borderRadius: '2px' }}>
                    {vid.duration}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', marginTop: '16px', fontWeight: 'bold' }}>{vid.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted-light)', marginTop: '4px' }}>{vid.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modals */}
        {selectedPhoto && (
          <div 
            onClick={() => setSelectedPhoto(null)}
            className="modal-overlay" 
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}
          >
            <div style={{ maxWidth: '90%', maxHeight: '80%' }} onClick={(e) => e.stopPropagation()}>
              <img 
                src={`${import.meta.env.BASE_URL}${selectedPhoto.src.slice(1)}`} 
                alt={selectedPhoto.title} 
                style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', borderRadius: '4px' }}
              />
              <h4 style={{ color: '#ffffff', textAlign: 'center', marginTop: '12px', fontSize: '1.1rem' }}>{selectedPhoto.title}</h4>
            </div>
            <button className="btn-secondary" style={{ borderColor: '#ffffff', color: '#ffffff' }}>Close View</button>
          </div>
        )}

        {playingVideo && (
          <div 
            onClick={() => setPlayingVideo(null)}
            className="modal-overlay"
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}
          >
            <div style={{ maxWidth: '800px', width: '90%', aspectRatio: '16/9', backgroundColor: '#000000', borderRadius: '6px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '12px' }}>{playingVideo.title}</h4>
                <p style={{ color: 'var(--color-text-muted-light)', fontSize: '0.85rem', marginBottom: '24px' }}>
                  Streaming media preview is load-capped. Direct full-length high-definition clips are loaded on request.
                </p>
                <a 
                  href={`https://wa.me/919352803009?text=${encodeURIComponent(`Hello Moomal Tours! I would like to see high-definition videos/recordings of: ${playingVideo.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Request Full Video via WhatsApp
                </a>
              </div>
            </div>
            <button className="btn-secondary" style={{ borderColor: '#ffffff', color: '#ffffff' }}>Close Player</button>
          </div>
        )}

      </div>
    </section>
  );
}
