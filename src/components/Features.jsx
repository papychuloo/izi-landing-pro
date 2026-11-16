import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Terminal, 
  CalendarClock, 
  ChevronRight, 
  Radio, 
  MousePointer2, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* CARTE 1 : Mélangeur Diagnostique (Livraison Rapide)                       */
/* Logic: array.unshift(array.pop()) every 3 seconds with elastic bounce     */
/* -------------------------------------------------------------------------- */
const initialShuffleCards = [
  {
    id: 1,
    axe: 'Plateau → Almadies (Corniche Ouest)',
    eta: '24 min',
    status: 'Transit Prioritaire Alpha',
    matricule: 'MOTO-08 // COURSIER ÉLITE',
    urgency: 'Haute Vélocité',
    dist: '14.8 km',
  },
  {
    id: 2,
    axe: 'Port Autonome → Point E / Fann',
    eta: '31 min',
    status: 'Scellé Maritime Garanti',
    matricule: 'FOURGON-02 // CHRONO',
    urgency: 'Pli Confidentiel',
    dist: '7.2 km',
  },
  {
    id: 3,
    axe: 'Aéroport AIBD → Dakar Centre VDN',
    eta: '49 min',
    status: 'Couloir Rapide Dégagé',
    matricule: 'EXPRESS-14 // SPRINT',
    urgency: 'Liaison Stratégique',
    dist: '46.0 km',
  },
];

function DiagnosticShuffler() {
  const [cards, setCards] = useState(initialShuffleCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center pt-4">
      {cards.map((card, index) => {
        // Stack styling based on position index
        const isTop = index === 0;
        const isMiddle = index === 1;
        const isBottom = index === 2;

        let transformStyle = '';
        let zIndex = 30 - index * 10;
        let opacity = 1;
        let scale = 1;

        if (isTop) {
          transformStyle = 'translateY(0px)';
          scale = 1;
          opacity = 1;
        } else if (isMiddle) {
          transformStyle = 'translateY(16px)';
          scale = 0.94;
          opacity = 0.85;
        } else {
          transformStyle = 'translateY(32px)';
          scale = 0.88;
          opacity = 0.65;
        }

        return (
          <div
            key={card.id}
            style={{
              transform: `${transformStyle} scale(${scale})`,
              zIndex,
              opacity,
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className="absolute w-[92%] sm:w-[94%] bg-white/95 rounded-3xl p-5 border border-mousse/15 shadow-[0_12px_32px_rgba(46,64,54,0.08)] backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-mousse/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-argile animate-ping" />
                <span className="font-mono text-xs font-semibold text-mousse">
                  {card.matricule}
                </span>
              </div>
              <span className="font-mono text-[11px] bg-argile/10 text-argile font-medium px-2.5 py-0.5 rounded-full">
                {card.urgency}
              </span>
            </div>

            <div className="mb-3">
              <div className="text-[11px] font-mono text-charbon/50 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-argile" /> Vecteur de livraison
              </div>
              <div className="font-heading font-bold text-sm text-charbon truncate">
                {card.axe}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-mousse/5 font-mono text-xs">
              <span className="text-charbon/70">{card.status}</span>
              <div className="flex items-center gap-1 text-mousse font-bold text-sm">
                <Zap className="w-3.5 h-3.5 text-argile fill-argile" />
                <span>{card.eta}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CARTE 2 : Machine à Écrire Télémétrie (Service Professionnel)             */
/* Live typewriter console with pulsating status and blinking accent cursor  */
/* -------------------------------------------------------------------------- */
const telemetryLogs = [
  '[SYS] INITIALISATION PROTOCOLE LIVREXPRESS DAKAR',
  '[09:14:02] SCELLÉ INVIOLABLE #LX-9402 ACTIVÉ — Clé OTP cryptographique émise.',
  '[09:14:19] COURSIER LIVREXPRESS ÉLITE DK-402 EN TRANSIT CORNICHE OUEST.',
  '[09:14:38] TÉLÉMÉTRIE : Capteur inclinaison 0.1° | Température 22.4°C stabilisée.',
  '[09:15:02] PROTOCOLE CONFIDENTIALITÉ VIP VALIDÉ — Zéro ouverture intermédiaire.',
  '[09:15:28] DESTINATAIRE NOTIFIÉ PAR SMS / WHATSAPP AVEC LIEN RADAR LIVE.',
];

function TelemetryTypewriter() {
  const [logIndex, setLogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = telemetryLogs[logIndex];
    let timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 35);
    } else if (!isDeleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentLine.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 15);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, logIndex]);

  return (
    <div className="w-full bg-charbon rounded-3xl p-5 border border-mousse/30 shadow-inner flex flex-col justify-between h-[320px]">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-semibold text-creme/90 uppercase tracking-widest flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-argile" /> Flux en Direct
          </span>
        </div>
        <span className="font-mono text-[10px] text-creme/50 uppercase">
          Canal Crypté • 256-bit
        </span>
      </div>

      {/* Live Stream Area */}
      <div className="my-auto py-3 font-mono text-xs sm:text-sm text-emerald-400/90 leading-relaxed min-h-[110px] flex items-center bg-black/40 rounded-2xl p-4 border border-white/5">
        <div>
          <span>{displayedText}</span>
          <span className="inline-block w-2.5 h-4 ml-1 bg-argile align-middle animate-pulse" />
        </div>
      </div>

      {/* Console Footer Stats */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 font-mono text-[11px]">
        <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center justify-between text-creme/70">
          <span>Contrôle Intégrité :</span>
          <span className="text-emerald-400 font-bold">100% OK</span>
        </div>
        <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center justify-between text-creme/70">
          <span>Chiffrement :</span>
          <span className="text-argile-light font-bold">SHA-256</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CARTE 3 : Planificateur Protocole Curseur (Disponible 24h/24)             */
/* Animated SVG cursor clicks day, highlights accent, clicks save button     */
/* -------------------------------------------------------------------------- */
const daysOfWeek = [
  { short: 'L', full: 'Lun', hours: '24/7' },
  { short: 'M', full: 'Mar', hours: '24/7' },
  { short: 'M', full: 'Mer', hours: '24/7' },
  { short: 'J', full: 'Jeu', hours: '24/7' },
  { short: 'V', full: 'Ven', hours: '24/7' },
  { short: 'S', full: 'Sam', hours: '24/7' },
  { short: 'D', full: 'Dim', hours: '24/7' },
];

function CursorProtocolScheduler() {
  const [activeDay, setActiveDay] = useState(2); // Wednesday by default
  const [cursorPhase, setCursorPhase] = useState('movingToDay'); // 'movingToDay' | 'clickingDay' | 'movingToSave' | 'clickingSave'
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let timer1, timer2, timer3, timer4, loop;

    const runSequence = () => {
      // Step 1: Cursor moves to a target day
      setCursorPhase('movingToDay');
      setIsSaved(false);

      timer1 = setTimeout(() => {
        // Step 2: Cursor clicks day
        setCursorPhase('clickingDay');
        setActiveDay((prev) => (prev + 1) % 7);

        timer2 = setTimeout(() => {
          // Step 3: Cursor moves to save button
          setCursorPhase('movingToSave');

          timer3 = setTimeout(() => {
            // Step 4: Cursor clicks save button
            setCursorPhase('clickingSave');
            setIsSaved(true);

            timer4 = setTimeout(() => {
              // Reset / loop
              setCursorPhase('idle');
            }, 800);
          }, 1000);
        }, 600);
      }, 1200);
    };

    runSequence();
    loop = setInterval(runSequence, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(loop);
    };
  }, []);

  // Compute cursor position based on phase
  let cursorX = 45; // percentage or pixels
  let cursorY = 40;
  let cursorScale = 1;

  if (cursorPhase === 'movingToDay') {
    cursorX = 48;
    cursorY = 38;
    cursorScale = 1;
  } else if (cursorPhase === 'clickingDay') {
    cursorX = 48;
    cursorY = 38;
    cursorScale = 0.85;
  } else if (cursorPhase === 'movingToSave') {
    cursorX = 72;
    cursorY = 82;
    cursorScale = 1;
  } else if (cursorPhase === 'clickingSave') {
    cursorX = 72;
    cursorY = 82;
    cursorScale = 0.85;
  } else {
    cursorX = 85;
    cursorY = 90;
    cursorScale = 0.7;
  }

  return (
    <div className="relative w-full bg-white/90 rounded-3xl p-5 border border-mousse/15 shadow-[0_12px_32px_rgba(46,64,54,0.06)] flex flex-col justify-between h-[320px] overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-mousse" />
            <span className="font-mono text-xs font-semibold text-mousse uppercase tracking-wider">
              Disponibilité 24h/24 & 7j/7
            </span>
          </div>
          <span className="text-[11px] font-mono bg-mousse/10 text-mousse px-2 py-0.5 rounded-full">
            Permanence Dakar
          </span>
        </div>

        {/* Days of Week Grid (L M M J V S D) */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-4">
          {daysOfWeek.map((day, idx) => {
            const isSelected = idx === activeDay;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center py-2.5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-argile text-creme border-argile shadow-md scale-105'
                    : 'bg-creme/60 text-charbon/70 border-mousse/10 hover:bg-creme'
                }`}
              >
                <span className="font-heading font-bold text-xs">{day.short}</span>
                <span className="text-[9px] font-mono mt-0.5 opacity-80">{day.hours}</span>
              </div>
            );
          })}
        </div>

        {/* Night / Day Active Badge */}
        <div className="bg-creme/70 rounded-2xl p-3 border border-mousse/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-charbon/80">
            <CalendarClock className="w-4 h-4 text-argile" />
            <span>Créneau Nocturne & Heures de Pointe :</span>
          </div>
          <span className="font-mono text-xs font-bold text-mousse bg-white px-2 py-0.5 rounded-lg border border-mousse/10">
            Opérationnel
          </span>
        </div>
      </div>

      {/* Save Action Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-mousse/10">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-charbon/60">
          <CheckCircle2 className={`w-3.5 h-3.5 ${isSaved ? 'text-emerald-500' : 'text-mousse/40'}`} />
          <span>{isSaved ? 'Créneau 24/7 Enregistré' : 'Affectation en attente'}</span>
        </div>

        <button
          className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-300 shadow-sm ${
            isSaved
              ? 'bg-mousse text-creme scale-95'
              : 'bg-argile text-white hover:bg-argile-hover'
          }`}
        >
          {isSaved ? '✓ Confirmé 24/7' : 'Sauvegarder'}
        </button>
      </div>

      {/* Animated SVG Cursor */}
      <div
        className="pointer-events-none absolute z-40 transition-all duration-700 ease-out"
        style={{
          left: `${cursorX}%`,
          top: `${cursorY}%`,
          transform: `scale(${cursorScale})`,
        }}
      >
        <svg
          className="w-7 h-7 text-charbon drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L5.85 2.36a.5.5 0 0 0-.35.85Z"
            fill="#1A1A1A"
            stroke="#F2F0E9"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN SECTION EXPORT : Fonctionnalités (Artefacts Fonctionnels)             */
/* -------------------------------------------------------------------------- */
export default function Features({ onOpenQuote }) {
  return (
    <section id="features" className="py-24 sm:py-32 bg-creme relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mousse/10 border border-mousse/15 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-argile" />
              <span className="font-mono text-xs uppercase tracking-wider text-mousse font-semibold">
                Ingénierie & Vélocité Dakaroise
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charbon tracking-tight">
              Trois artefacts fonctionnels.{' '}
              <span className="font-dramatic italic font-normal text-mousse">
                Zéro compromis.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-charbon/70 max-w-md font-light leading-relaxed">
            Chaque carte est un instrument actif de notre réseau. Suivez le flux en direct, observez la cinétique urbaine et planifiez vos envois critiques sans latence.
          </p>
        </div>

        {/* 3 Interactive Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Diagnostic Shuffler (Livraison Rapide) */}
          <div className="bg-creme-light rounded-[2.5rem] p-7 border border-mousse/15 shadow-[0_12px_40px_rgba(46,64,54,0.05)] flex flex-col justify-between hover:border-mousse/30 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-argile uppercase tracking-wider">
                  Argument 01 // Vélocité
                </span>
                <span className="font-mono text-xs text-charbon/50">≤ 120 min</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-charbon mb-2">
                Livraison Ultra-Rapide
              </h3>
              <p className="font-sans text-sm text-charbon/70 font-light mb-6">
                Mélangeur diagnostique en temps réel. Nos coursiers contournent les goulets d'étranglement de Dakar pour vous garantir un délai record.
              </p>
            </div>
            <DiagnosticShuffler />
          </div>

          {/* Card 2: Telemetry Typewriter (Service Professionnel) */}
          <div className="bg-creme-light rounded-[2.5rem] p-7 border border-mousse/15 shadow-[0_12px_40px_rgba(46,64,54,0.05)] flex flex-col justify-between hover:border-mousse/30 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-mousse uppercase tracking-wider">
                  Argument 02 // Rigueur
                </span>
                <span className="font-mono text-xs text-emerald-600 font-bold">100% Certifié</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-charbon mb-2">
                Service Professionnel
              </h3>
              <p className="font-sans text-sm text-charbon/70 font-light mb-6">
                Console télémétrique en direct. Scellé inviolable, coursiers en tenue protocolaire et suivi cryptographique de chaque kilomètre.
              </p>
            </div>
            <TelemetryTypewriter />
          </div>

          {/* Card 3: Cursor Scheduler (Disponible 24h/24) */}
          <div className="bg-creme-light rounded-[2.5rem] p-7 border border-mousse/15 shadow-[0_12px_40px_rgba(46,64,54,0.05)] flex flex-col justify-between hover:border-mousse/30 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold text-argile uppercase tracking-wider">
                  Argument 03 // Permanence
                </span>
                <span className="font-mono text-xs text-charbon/50">24/7 / 365</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-charbon mb-2">
                Disponible 24h/24
              </h3>
              <p className="font-sans text-sm text-charbon/70 font-light mb-6">
                Planificateur protocolaire interactif. Du pic d'activité diurne aux urgences médicales en pleine nuit, la ligne ne dort jamais.
              </p>
            </div>
            <CursorProtocolScheduler />
          </div>
        </div>
      </div>
    </section>
  );
}
