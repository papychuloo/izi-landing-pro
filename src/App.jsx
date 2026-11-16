import React, { useState } from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleOpenQuote = (plan = '') => {
    setSelectedPlan(plan);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-creme font-sans text-charbon selection:bg-argile selection:text-white">
      {/* Global CSS Noise Overlay using inline SVG feTurbulence (Preset A requirement) */}
      <NoiseOverlay />

      {/* Floating Island Morphing Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Hero Section — Le Plan d'Ouverture */}
      <Hero onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Functional Artefacts — 3 Sales Arguments */}
      <Features onOpenQuote={() => handleOpenQuote()} />

      {/* Manifesto / Philosophy — Contrasting Statements with Parallax */}
      <Philosophy />

      {/* Sticky Stacked Archive Protocol — 3 Canvas/SVG Animated Stages */}
      <Protocol onOpenQuote={() => handleOpenQuote()} />

      {/* Pricing / Tiers with Dakar Rates */}
      <Pricing onOpenQuote={handleOpenQuote} />

      {/* Footer — Deep Charcoal with Operational Pulse */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quote Simulator Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedPlan={selectedPlan}
      />
    </div>
  );
}
