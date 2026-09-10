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
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import SimpsonCamp from './pages/SimpsonCamp';

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
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-900 selection:bg-[#8cb0bf] selection:text-white">
      
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

        {(activePage === 'about' || activePage === 'impact' || activePage === 'testimonials') && (
          <About 
            setActivePage={handlePageChange}
            onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {(activePage === 'programs' || activePage === 'lessons' || activePage === 'cours' || activePage === 'coaching') && (
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

        {activePage === 'involved' && (
          <GetInvolved 
            setActivePage={handlePageChange}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}

        {(activePage === 'simpson-camp' || activePage === 'samson-camp' || activePage === 'leadership-camp') && (
          <SimpsonCamp 
            setActivePage={handlePageChange}
            onOpenDonate={() => setIsDonateOpen(true)}
            onOpenProgramFinder={() => setIsProgramFinderOpen(true)}
          />
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
