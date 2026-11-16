import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Package, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  PhoneCall,
  Sparkles
} from 'lucide-react';

const DAKAR_ZONES = [
  'Plateau (Centre des Affaires)',
  'Almadies / Ngor / Virage',
  'Point E / Fann Résidence',
  'Mermoz / Sacré-Cœur',
  'Ouakam / Mamelles',
  'Yoff / Ouest Foire',
  'Médina / Gueule Tapée',
  'Grand Dakar / Liberté 6',
  'Hann Maristes / Bel Air',
  'Pikine / Guédiawaye',
  'Rufisque / Bargny',
  'Diamniadio / Pôle Urbain / AIBD',
];

const PACKAGE_TYPES = [
  { id: 'doc', label: 'Pli / Document Confidentiel', basePrice: 2000, baseMinutes: 30 },
  { id: 'standard', label: 'Colis Standard (< 5 kg)', basePrice: 2500, baseMinutes: 45 },
  { id: 'fragile', label: 'Matériel Électronique / Fragile', basePrice: 3500, baseMinutes: 40 },
  { id: 'urgent24', label: 'Urgence Vitale / Médicale 24/7', basePrice: 4000, baseMinutes: 25 },
];

export default function QuoteModal({ isOpen, onClose, preselectedPlan = '' }) {
  const [depart, setDepart] = useState(DAKAR_ZONES[0]);
  const [arrivee, setArrivee] = useState(DAKAR_ZONES[1]);
  const [pkgType, setPkgType] = useState(PACKAGE_TYPES[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  if (!isOpen) return null;

  // Real-time calculation of distance/price heuristic
  const selectedType = PACKAGE_TYPES.find((p) => p.id === pkgType) || PACKAGE_TYPES[0];
  const isAIBD = depart.includes('Diamniadio') || arrivee.includes('Diamniadio');
  const isRufisque = depart.includes('Rufisque') || arrivee.includes('Rufisque');
  
  let multiplier = 1;
  let addedMinutes = 0;
  if (isAIBD) {
    multiplier = 2.4;
    addedMinutes = 35;
  } else if (isRufisque) {
    multiplier = 1.6;
    addedMinutes = 20;
  } else if (depart !== arrivee) {
    multiplier = 1.2;
    addedMinutes = 10;
  }

  const estimatedPrice = Math.round((selectedType.basePrice * multiplier) / 500) * 500;
  const estimatedTime = selectedType.baseMinutes + addedMinutes;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = 'LX-DKR-' + Math.floor(10000 + Math.random() * 90000);
    setTrackingId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charbon/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-creme-light rounded-[2.5rem] border border-mousse/20 shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-charbon/5 hover:bg-charbon/10 text-charbon transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-argile/10 text-argile font-mono text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Simulateur Télémétrique Dakar
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charbon">
                Demander un devis immédiat
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charbon/70 mt-1">
                Calcul en temps réel de votre délai garanti et de votre tarif selon les artères de la presqu'île.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Departure and Arrival Zone selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-charbon/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-mousse" /> Zone d'Enlèvement
                  </label>
                  <select
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                    className="w-full bg-white border border-mousse/20 rounded-2xl p-3 text-xs sm:text-sm font-sans text-charbon focus:outline-none focus:ring-2 focus:ring-argile"
                  >
                    {DAKAR_ZONES.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-charbon/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-argile" /> Zone de Destination
                  </label>
                  <select
                    value={arrivee}
                    onChange={(e) => setArrivee(e.target.value)}
                    className="w-full bg-white border border-mousse/20 rounded-2xl p-3 text-xs sm:text-sm font-sans text-charbon focus:outline-none focus:ring-2 focus:ring-argile"
                  >
                    {DAKAR_ZONES.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Package Type */}
              <div>
                <label className="block font-mono text-xs text-charbon/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-mousse" /> Typologie de Colis
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PACKAGE_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setPkgType(type.id)}
                      className={`p-3 rounded-2xl border text-left transition-all text-xs font-sans flex items-center justify-between ${
                        pkgType === type.id
                          ? 'border-argile bg-argile/10 text-charbon font-semibold shadow-sm'
                          : 'border-mousse/15 bg-white text-charbon/80 hover:bg-mousse/5'
                      }`}
                    >
                      <span>{type.label}</span>
                      <span className="font-mono text-[11px] text-argile font-bold">
                        {type.basePrice.toLocaleString()} F
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Telemetry Calculation Display */}
              <div className="bg-mousse text-creme rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-creme/60">
                    Estimation Garantie
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-mono font-bold text-2xl sm:text-3xl text-argile-light">
                      {estimatedPrice.toLocaleString()}
                    </span>
                    <span className="font-mono text-sm text-creme">FCFA</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-creme/60">
                    Délai d'Arrivée
                  </div>
                  <div className="flex items-center gap-1 justify-end font-mono font-bold text-lg sm:text-xl text-creme mt-1">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>≤ {estimatedTime} min</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-charbon/70 mb-1">
                    Votre Nom complet / Entreprise
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ibrahima Diop (Cabinet Dakar)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-mousse/20 rounded-2xl p-3 text-xs font-sans text-charbon focus:outline-none focus:ring-2 focus:ring-argile"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-charbon/70 mb-1">
                    Téléphone (WhatsApp actif au Sénégal)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+221 77 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-mousse/20 rounded-2xl p-3 text-xs font-sans text-charbon focus:outline-none focus:ring-2 focus:ring-argile"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-charbon/70 mb-1">
                  Instructions ou précisions de scellage (Optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Colis scellé à récupérer à l'accueil avant 15h..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-mousse/20 rounded-2xl p-3 text-xs font-sans text-charbon focus:outline-none focus:ring-2 focus:ring-argile resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-magnetic btn-slide w-full py-4 rounded-2xl bg-argile text-creme font-semibold text-xs tracking-wider uppercase shadow-xl shadow-argile/25 flex items-center justify-center gap-2"
              >
                <span className="slide-bg bg-mousse" />
                <span className="relative z-10 flex items-center gap-2">
                  Valider et recevoir mon devis officiel
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        ) : (
          /* Submission Confirmation Screen */
          <div className="py-8 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-mousse font-bold">
              Devis Télémétrique Transmis
            </span>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charbon mt-2 mb-3">
              Demande enregistrée avec succès !
            </h3>

            <p className="font-sans text-xs sm:text-sm text-charbon/70 max-w-md mx-auto mb-6">
              Merci <strong className="text-charbon">{fullName || 'cher client'}</strong>. Votre devis estimatif de{' '}
              <strong className="text-argile">{estimatedPrice.toLocaleString()} FCFA</strong> pour le trajet{' '}
              <strong className="text-charbon">{depart.split(' ')[0]} → {arrivee.split(' ')[0]}</strong> a été pris en compte.
            </p>

            <div className="bg-white border border-mousse/15 rounded-2xl p-5 max-w-md mx-auto text-left mb-6 space-y-2 font-mono text-xs">
              <div className="flex justify-between pb-2 border-b border-mousse/10">
                <span className="text-charbon/60">ID Télémétrique :</span>
                <span className="text-argile font-bold">{trackingId}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-mousse/10">
                <span className="text-charbon/60">Délai estimé :</span>
                <span className="text-mousse font-bold">≤ {estimatedTime} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charbon/60">Statut :</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Coursier en pré-affectation
                </span>
              </div>
            </div>

            <p className="font-mono text-xs text-charbon/60 mb-6">
              Notre coordinateur de dispatch vous contacte au <span className="text-charbon font-bold">{phone}</span> sous 3 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-mousse text-creme font-mono text-xs font-semibold hover:bg-mousse-dark transition-colors"
              >
                Fermer cette fenêtre
              </button>
              <a
                href={`https://wa.me/221770000000?text=Bonjour%20LivrExpress,%20je%20souhaite%20confirmer%20mon%20devis%20${trackingId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white font-mono text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Confirmer sur WhatsApp Direct
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
