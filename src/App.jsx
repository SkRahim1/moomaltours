import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Itineraries from './components/Itineraries';
import Experiences from './components/Experiences';
import TripPlanner from './components/TripPlanner';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerVibe, setPlannerVibe] = useState('');

  const handleOpenPlanner = () => {
    setPlannerVibe('');
    setIsPlannerOpen(true);
  };

  const handleSelectItinerary = (vibe) => {
    setPlannerVibe(vibe);
    setIsPlannerOpen(true);
  };

  const handleClosePlanner = () => {
    setIsPlannerOpen(false);
    setPlannerVibe('');
  };

  return (
    <div className="relative min-h-screen bg-[#FCFBF9] text-[#2C2925] flex flex-col justify-between">
      {/* Header Navigation */}
      <Header onOpenPlanner={handleOpenPlanner} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Banner */}
        <Hero onOpenPlanner={handleOpenPlanner} />

        {/* Staggered Highlights Section */}
        <Destinations />

        {/* Signature Itineraries Tabs Section */}
        <Itineraries onSelectItinerary={handleSelectItinerary} />

        {/* Culture & Stargazing Activities Section */}
        <Experiences />
      </main>

      {/* Footer Branding & Commitments */}
      <Footer />

      {/* Multi-step Travel Planner Wizard Modal */}
      <TripPlanner 
        isOpen={isPlannerOpen} 
        onClose={handleClosePlanner} 
        initialVibe={plannerVibe}
      />
    </div>
  );
}

export default App;
