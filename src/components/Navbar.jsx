import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Morph when scrolled past ~80px or past hero top
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Télémétrie', href: '#features' },
    { name: 'Manifeste', href: '#philosophy' },
    { name: 'Protocole', href: '#protocol' },
    { name: 'Tarifs', href: '#pricing' },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-5 py-3 rounded-full border ${
          isScrolled
            ? 'bg-creme/80 backdrop-blur-xl border-mousse/15 shadow-[0_12px_40px_rgba(26,26,26,0.08)] text-charbon w-full max-w-4xl'
            : 'bg-charbon/30 backdrop-blur-md border-white/15 text-creme shadow-[0_8px_32px_rgba(0,0,0,0.15)] w-full max-w-5xl'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-argile flex items-center justify-center text-creme shadow-sm group-hover:scale-105 transition-transform duration-300">
            <span className="font-mono text-xs font-bold tracking-tighter">LX</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-tight text-lg leading-none">
              LivrExpress
            </span>
            <span
              className={`text-[9px] font-mono tracking-widest uppercase ${
                isScrolled ? 'text-mousse/60' : 'text-creme/60'
              }`}
            >
              Dakar • 24/7
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover-lift text-xs font-medium tracking-wide uppercase transition-colors ${
                isScrolled
                  ? 'text-charbon/80 hover:text-argile'
                  : 'text-creme/85 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="btn-magnetic btn-slide px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-argile shadow-md shadow-argile/25"
          >
            <span className="slide-bg bg-mousse" />
            <span className="relative z-10 flex items-center gap-1.5">
              Demander un devis
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full border transition-colors ${
              isScrolled
                ? 'border-mousse/15 text-charbon hover:bg-mousse/5'
                : 'border-white/20 text-creme hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-creme/95 backdrop-blur-2xl border border-mousse/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-charbon animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-mousse/10">
            <span className="font-mono text-xs text-mousse/70 uppercase tracking-wider">Navigation Dakar</span>
            <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Ligne Ouverte
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-1 text-charbon hover:text-argile transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full mt-2 py-3 rounded-2xl bg-argile text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-argile/20"
          >
            Demander un devis immédiat
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
