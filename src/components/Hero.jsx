import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Compass, Activity, Clock } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .from('.hero-line-1', {
        y: 40,
        opacity: 0,
        duration: 0.9,
      }, '-=0.5')
      .from('.hero-line-2', {
        y: 50,
        opacity: 0,
        duration: 1.1,
      }, '-=0.7')
      .from('.hero-desc', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta-group', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-telemetry-badge', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-charbon"
    >
      {/* Background Image: Deep Organic Forest & Atmospheric Botanical Texture (Preset A) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=2400&q=85"
          alt="Ambiance Organique & Texture Végétale"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
        />
        {/* Heavy Primary to Black / Charcoal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charbon via-mousse/80 to-charbon/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-charbon/90 via-mousse/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-mousse-deep/90 via-transparent to-transparent" />
      </div>

      {/* Floating Dakar Geo Telemetry Coordinates (Upper Right) */}
      <div className="absolute top-28 right-6 sm:right-12 z-10 hidden lg:flex flex-col items-end gap-1 font-mono text-[11px] text-creme/60 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-creme/90 font-medium">DAKAR VECTOR GRID // ACTIF</span>
        </div>
        <span>COORD: 14°41'37"N 17°26'38"W</span>
        <span className="text-argile-light">TEMPS MOYEN COURSE: 38 MIN</span>
      </div>

      {/* Hero Content Pushed to Lower Third Left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-16 sm:pb-24 pt-36">
        <div className="max-w-4xl">
          {/* Subtle Tag / Identity Pill */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-creme/10 border border-creme/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-argile" />
            <span className="font-mono text-xs uppercase tracking-widest text-creme/90 font-medium">
              Boutique Logistique Dakar • Haute Précision
            </span>
          </div>

          {/* Hero Title Following Preset A Pattern: [Nom concept] est le (Sans) / [Mot puissant]. (Serif Italique Massif) */}
          <h1 className="flex flex-col tracking-tight">
            <span className="hero-line-1 font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-creme/90 uppercase tracking-tight">
              LivrExpress est le
            </span>
            <span className="hero-line-2 font-dramatic italic font-normal text-6xl sm:text-8xl lg:text-[10rem] text-creme leading-[0.85] mt-2 mb-6 drop-shadow-lg selection:text-argile">
              Vecteur Vital.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc font-sans text-base sm:text-xl text-creme/80 max-w-2xl font-light leading-relaxed mb-8">
            L'instrument de distribution rapide taillé pour Dakar. Livraison express en 2 heures chrono, 
            scellé télémétrique en temps réel et permanence opérationnelle 24h/24 sans interruption.
          </p>

          {/* Action CTA & Micro Metrics */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenQuote}
              className="btn-magnetic btn-slide px-8 py-4 rounded-full bg-argile text-creme font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-argile/30 group"
            >
              <span className="slide-bg bg-mousse-dark" />
              <span className="relative z-10 flex items-center gap-2">
                Demander un devis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href="#protocol"
              className="hover-lift inline-flex items-center gap-2 px-6 py-4 rounded-full border border-creme/30 text-creme font-medium text-sm sm:text-base backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4 text-argile-light" />
              Explorer le protocole
            </a>
          </div>

          {/* Telemetry Micro Status Badges */}
          <div className="mt-12 pt-8 border-t border-creme/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="hero-telemetry-badge flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-argile-light">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-creme">≤ 120 min</div>
                <div className="text-[11px] font-mono text-creme/60 uppercase">Délai Garanti Intra-Dakar</div>
              </div>
            </div>

            <div className="hero-telemetry-badge flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-creme">24/7 / 365</div>
                <div className="text-[11px] font-mono text-creme/60 uppercase">Permanence Absolue</div>
              </div>
            </div>

            <div className="hero-telemetry-badge hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-argile">
                <span className="font-mono font-bold text-xs">99.9%</span>
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-creme">Zéro Perte</div>
                <div className="text-[11px] font-mono text-creme/60 uppercase">Scellé Cryptographique</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
