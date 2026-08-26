import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import { DonationModal, ProgramFinderModal, StoryModal } from './components/Modals';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Tournaments from './pages/Tournaments';
import OurImpact from './pages/OurImpact';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isProgramFinderOpen, setIsProgramFinderOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  // Sync scroll on page transition
  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-900 selection:bg-[#CDFF00] selection:text-[#0F392B]">
      
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Global Navigation Header */}
      <Header 
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="flex-1 w-full animate-fadeIn">
        {activePage === 'home' && (
          <Home 
            setActivePage={handlePageChange}
            onOpenDonate={() => setIsDonateOpen(true)}
            onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {activePage === 'about' && (
          <About 
            setActivePage={handlePageChange}
            onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
          />
        )}

        {activePage === 'programs' && (
          <Programs 
            setActivePage={handlePageChange}
            onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activePage === 'tournaments' && (
          <Tournaments 
            setActivePage={handlePageChange}
            onOpenTournamentRegister={() => setIsDonateOpen(true)}
          />
        )}

        {(activePage === 'impact' || activePage === 'testimonials') && (
          <OurImpact 
            setActivePage={handlePageChange}
            onSelectStory={(story) => setSelectedStory(story)}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activePage === 'involved' && (
          <GetInvolved 
            setActivePage={handlePageChange}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
      />

      {/* Modals and Overlays */}
      <DonationModal 
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <ProgramFinderModal 
        isOpen={isProgramFinderOpen}
        onClose={() => setIsProgramFinderOpen(false)}
        onSelectProgram={(targetPage) => handlePageChange(targetPage)}
      />

      <StoryModal 
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

    </div>
  );
}
