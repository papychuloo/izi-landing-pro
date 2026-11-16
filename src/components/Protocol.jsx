import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Cpu, Activity, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      // Setup sticky pinned stack with ScrollTrigger
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];

          ScrollTrigger.create({
            trigger: nextCard,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              // Underneath card scales to 0.9, blurs, and fades to 0.5
              gsap.to(card, {
                scale: 1 - progress * 0.1, // scale 1 -> 0.9
                filter: `blur(${progress * 16}px)`,
                opacity: 1 - progress * 0.5, // opacity 1 -> 0.5
                duration: 0.1,
                ease: 'none',
              });
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="protocol" className="relative bg-creme-dark/40 py-20">
      {/* Protocol Intro Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mousse/10 border border-mousse/15 mb-4">
          <span className="w-2 h-2 rounded-full bg-argile" />
          <span className="font-mono text-xs uppercase tracking-widest text-mousse font-semibold">
            Processus Opérationnel // 3 Phases
          </span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charbon tracking-tight">
          L'Archive Protocolaire.{' '}
          <span className="font-dramatic italic font-normal text-mousse">
            Rigueur mathématique.
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-charbon/70 max-w-xl mx-auto font-light mt-3">
          Trois étapes irréversibles de la collecte à l'émargement. Aucun intermédiaire imprévu, aucune rupture de chaîne.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        {/* ========================================================================= */}
        {/* CARTE 01 : Motif Géométrique Concentrique en Rotation Lente               */}
        {/* ========================================================================= */}
        <div
          ref={card1Ref}
          className="sticky top-24 min-h-[520px] rounded-[3rem] bg-mousse text-creme p-8 sm:p-14 border border-mousse-light/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden transition-all"
        >
          {/* Card Left Info */}
          <div className="max-w-md z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-argile-light uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/15">
                ÉTAPE // 01
              </span>
              <span className="font-mono text-xs text-creme/60">Télémétrie d'Origine</span>
            </div>

            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-creme mb-4 leading-tight">
              Ingestion Numérique & Scellé Inviolable
            </h3>

            <p className="font-sans text-creme/80 text-base font-light leading-relaxed mb-6">
              Dès la remise, le colis reçoit un identifiant cryptographique unique. Le scellé physique biométrique est scanné et appairé à l'adresse GPS exacte de départ à Dakar.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-xs text-creme/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Horodatage atomique certifié</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Validation par code à usage unique</span>
              </div>
            </div>
          </div>

          {/* Card Right Animation: Concentric Rings & Slow Rotation */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* SVG Slow Rotating Pattern */}
            <svg
              className="w-full h-full animate-[spin_24s_linear_infinite]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Concentric Circles */}
              <circle cx="100" cy="100" r="90" stroke="#F2F0E9" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="100" cy="100" r="74" stroke="#CC5833" strokeOpacity="0.4" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="58" stroke="#F2F0E9" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="8 4" />
              <circle cx="100" cy="100" r="42" stroke="#CC5833" strokeOpacity="0.6" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="26" stroke="#F2F0E9" strokeOpacity="0.5" strokeWidth="1" />
              {/* Radial crosshairs */}
              <line x1="100" y1="5" x2="100" y2="195" stroke="#F2F0E9" strokeOpacity="0.2" strokeWidth="1" />
              <line x1="5" y1="100" x2="195" y2="100" stroke="#F2F0E9" strokeOpacity="0.2" strokeWidth="1" />
              {/* Geometric markers */}
              <rect x="96" y="8" width="8" height="8" fill="#CC5833" />
              <rect x="96" y="184" width="8" height="8" fill="#CC5833" />
              <rect x="8" y="96" width="8" height="8" fill="#CC5833" />
              <rect x="184" y="96" width="8" height="8" fill="#CC5833" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-argile/20 border border-argile flex items-center justify-center">
                <Shield className="w-7 h-7 text-argile-light" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARTE 02 : Ligne Laser Balayage Horizontal sur Grille Matricielle         */}
        {/* ========================================================================= */}
        <div
          ref={card2Ref}
          className="sticky top-28 min-h-[520px] rounded-[3rem] bg-charbon text-creme p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden transition-all"
        >
          {/* Card Left Info */}
          <div className="max-w-md z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-argile-light uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/15">
                ÉTAPE // 02
              </span>
              <span className="font-mono text-xs text-creme/60">Cinétique Vectorielle</span>
            </div>

            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-creme mb-4 leading-tight">
              Routage Algorithmique Prédictif
            </h3>

            <p className="font-sans text-creme/80 text-base font-light leading-relaxed mb-6">
              Nos algorithmes scannent en direct la fluidité des axes Dakarois (Corniche Ouest, VDN, Autoroute de l'Avenir, Voie de Dégagement) pour recalibrer le vecteur du coursier en temps réel.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-xs text-creme/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Contournement prédictif des congestions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Télémétrie gyroscopique anti-secousses</span>
              </div>
            </div>
          </div>

          {/* Card Right Animation: Horizontal Laser Sweep across Dot Matrix Grid */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-black/60 rounded-3xl p-6 border border-white/10 flex flex-col justify-between overflow-hidden">
            {/* Dot Matrix Grid */}
            <div className="grid grid-cols-8 gap-3 sm:gap-4 w-full h-full my-auto opacity-40">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-creme/60" />
                </div>
              ))}
            </div>

            {/* Horizontal Sweeping Laser Line with Glow */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-argile to-transparent shadow-[0_0_20px_#CC5833] animate-[bounce_4s_easeInOut_infinite] top-0 pointer-events-none" />

            {/* Grid Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-argile-light bg-black/80 px-3 py-1.5 rounded-xl border border-white/10">
              <span>SCAN // AXE VDN DAKAR</span>
              <span className="text-emerald-400">FLUIDITÉ 98%</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARTE 03 : Forme d'Onde Pulsante ECG avec stroke-dashoffset               */}
        {/* ========================================================================= */}
        <div
          ref={card3Ref}
          className="sticky top-32 min-h-[520px] rounded-[3rem] bg-mousse-deep text-creme p-8 sm:p-14 border border-mousse/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden transition-all"
        >
          {/* Card Left Info */}
          <div className="max-w-md z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-bold text-argile-light uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/15">
                ÉTAPE // 03
              </span>
              <span className="font-mono text-xs text-creme/60">Clôture Immuable</span>
            </div>

            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-creme mb-4 leading-tight">
              Remise en Main Propre & Preuve Cryptographique
            </h3>

            <p className="font-sans text-creme/80 text-base font-light leading-relaxed mb-6">
              Le pli ou colis est remis exclusivement contre validation du code dynamique par le destinataire. Émargement sécurisé, horodatage au milliardième et rapport de livraison PDF instantané.
            </p>

            <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-xs text-creme/70">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Rapport de course scellé envoyé par email/WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Archivage légal garanti 5 ans</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="mt-8 btn-magnetic btn-slide px-6 py-3.5 rounded-full bg-argile text-creme font-semibold text-xs tracking-wider uppercase shadow-lg shadow-argile/25 inline-flex items-center gap-2"
            >
              <span className="slide-bg bg-mousse" />
              <span className="relative z-10 flex items-center gap-2">
                Initier un envoi avec ce protocole
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Card Right Animation: Pulsing ECG Waveform SVG with stroke-dashoffset */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-black/50 rounded-3xl p-6 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full flex items-center justify-between mb-2 font-mono text-[10px] text-creme/50">
              <span>CARDIO-LOGISTIQUE</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                RYTHME CONTINU
              </span>
            </div>

            {/* SVG ECG Waveform */}
            <svg
              className="w-full h-36"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background faint guideline */}
              <line x1="0" y1="50" x2="300" y2="50" stroke="#F2F0E9" strokeOpacity="0.1" strokeDasharray="3 3" />
              
              {/* Animated ECG Pulse Path */}
              <path
                d="M0 50 L60 50 L75 50 L85 20 L95 85 L105 10 L115 65 L125 50 L180 50 L195 50 L205 30 L215 75 L225 25 L235 55 L245 50 L300 50"
                stroke="#CC5833"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: '350',
                  strokeDashoffset: '350',
                  animation: 'ecgPulse 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                }}
              />
            </svg>

            <style>{`
              @keyframes ecgPulse {
                0% { stroke-dashoffset: 350; }
                50% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -350; }
              }
            `}</style>

            <div className="w-full text-center mt-2 font-mono text-xs text-creme/60">
              SIGNAL VALIDATION DESTINATAIRE : ACTIF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
