import React from 'react';
import { ArrowUp, Radio, Shield, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charbon text-creme rounded-t-[4rem] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mousse-deep/40 via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-argile flex items-center justify-center text-creme font-mono font-bold text-xs">
                LX
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-creme">
                LivrExpress
              </span>
            </div>
            
            <p className="font-sans text-sm text-creme/70 font-light max-w-sm leading-relaxed">
              La cinétique de haute précision appliquée à la logistique dakaroise. Livraison express en 2h chrono, sécurité sous scellé et disponibilité ininterrompue 24h/24.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-magnetic btn-slide px-5 py-2.5 rounded-full bg-argile text-creme text-xs font-semibold tracking-wide shadow-md shadow-argile/20"
              >
                <span className="slide-bg bg-mousse" />
                <span className="relative z-10">Demander un devis immédiat</span>
              </button>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-argile-light font-semibold mb-4">
              Services & Flotte
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-creme/70">
              <li><a href="#features" className="hover-lift hover:text-white">Course Sprint 2H</a></li>
              <li><a href="#features" className="hover-lift hover:text-white">Flotte Dédiée Entreprise</a></li>
              <li><a href="#features" className="hover-lift hover:text-white">Liaison VIP & Plis Scellés</a></li>
              <li><a href="#features" className="hover-lift hover:text-white">Urgence Médicale 24/7</a></li>
              <li><a href="#features" className="hover-lift hover:text-white">Navette Aéroport AIBD</a></li>
            </ul>
          </div>

          {/* Column 2: Territoires couverts */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-argile-light font-semibold mb-4">
              Périmètre Dakar
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-creme/70">
              <li><span className="opacity-90">Plateau • Centre Ville</span></li>
              <li><span className="opacity-90">Almadies • Ngor • Ouakam</span></li>
              <li><span className="opacity-90">Mermoz • Point E • Fann</span></li>
              <li><span className="opacity-90">Grand Dakar • VDN</span></li>
              <li><span className="opacity-90">Diamniadio • Pôle Urbain</span></li>
            </ul>
          </div>

          {/* Column 3: Contact & Permanence */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-argile-light font-semibold mb-4">
              Permanence 24/7
            </h4>
            <ul className="space-y-3 font-mono text-xs text-creme/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-argile" />
                <span>Corniche Ouest, Dakar</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-argile" />
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-argile" />
                <span>dispatch@livrexpress.sn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Operational Status & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Operational Status with Pulsing Green Dot (Required by GEMINI.md) */}
          <div className="flex items-center gap-2.5 bg-black/40 border border-white/10 px-4 py-2 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] text-emerald-400 font-medium uppercase tracking-wider">
              SYSTÈME OPÉRATIONNEL // DISPATCH 24/7 ACTIF
            </span>
          </div>

          {/* Copyright & Legal */}
          <div className="font-mono text-[11px] text-creme/50 text-center sm:text-right">
            © {new Date().getFullYear()} LivrExpress SN. Tous droits réservés. Haute Précision Urbaine.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-creme/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
