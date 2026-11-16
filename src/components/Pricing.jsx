import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, Building2, User } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  const tiers = [
    {
      name: 'Course Sprint',
      subtitle: 'Particuliers & Urgences Ponctuelles',
      price: '2 500',
      currency: 'FCFA',
      period: '/ course',
      description: "Idéal pour l'envoi immédiat de plis, passeports, clés ou petits colis urgents à Dakar.",
      features: [
        'Prise en charge sous 20 minutes',
        'Délai garanti intra-muros ≤ 90 min',
        'Scellé de sécurité standard',
        'Suivi radar par SMS & WhatsApp',
        "Preuve d'émargement photo instantanée",
      ],
      isPopular: false,
      ctaText: 'Commander une course',
      accentColor: 'border-mousse/15 bg-creme-light text-charbon',
    },
    {
      name: 'Flotte Pro Dakar',
      subtitle: 'PME, Boutiques & Cabinets',
      price: '45 000',
      currency: 'FCFA',
      period: '/ carnet 20 courses',
      description: 'La solution préférée des e-commerçants et professionnels exigeants. Coursiers dédiés et priorité absolue.',
      features: [
        'Priorité de dispatching Niveau 1',
        'Délai garanti intra-muros ≤ 60 min',
        'Scellé cryptographique biométrique',
        'Tableau de bord télémétrique dédié',
        'Facturation mensuelle consolidée',
        'Support concierge WhatsApp dédié 24/7',
      ],
      isPopular: true,
      ctaText: 'Demander un devis Pro',
      accentColor: 'bg-mousse text-creme border-mousse-light shadow-2xl scale-105 z-10',
    },
    {
      name: 'Grand Compte Dédié',
      subtitle: 'Industrie, Banques & Cliniques',
      price: 'Sur Mesure',
      currency: '',
      period: '',
      description: "Flotte privatisée, liaisons régulières programmées et intégration directe à vos systèmes d'information.",
      features: [
        'Livreurs dédiés en uniforme à vos couleurs',
        'Intégration API e-commerce & ERP',
        'Transport sécurisé sous température dirigée',
        "Garantie d'assurance marchandise jusqu'à 25M FCFA",
        'Gestionnaire de compte opérationnel 24/7',
        'SLA contractuel de 99.98% de ponctualité',
      ],
      isPopular: false,
      ctaText: 'Étudier mon cahier des charges',
      accentColor: 'border-mousse/15 bg-creme-light text-charbon',
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-creme relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mousse/10 border border-mousse/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-argile" />
            <span className="font-mono text-xs uppercase tracking-widest text-mousse font-semibold">
              Tarification Transparente // FCFA
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charbon tracking-tight">
            Des forfaits pensés pour{' '}
            <span className="font-dramatic italic font-normal text-mousse">
              l'exigence dakaroise.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-charbon/70 font-light mt-4">
            Zéro frais dissimulés. Choisissez entre la flexibilité à la course ou la puissance d'une flotte d'entreprise attitrée.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 relative ${tier.accentColor}`}
            >
              {/* Popular Badge on Center Card */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-argile text-creme font-mono text-[11px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md flex items-center gap-1.5">
                  <Zap className="w-3 h-3 fill-creme" />
                  Le Plus Plébiscité
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-wider ${
                      tier.isPopular ? 'text-argile-light' : 'text-argile'
                    }`}
                  >
                    {tier.name}
                  </span>
                  {index === 0 && <User className="w-4 h-4 opacity-50" />}
                  {index === 1 && <Zap className="w-4 h-4 text-argile-light" />}
                  {index === 2 && <Building2 className="w-4 h-4 opacity-50" />}
                </div>

                <div className="text-sm font-sans opacity-70 mb-6">{tier.subtitle}</div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-mono font-bold text-4xl sm:text-5xl tracking-tight">
                    {tier.price}
                  </span>
                  {tier.currency && (
                    <span className="font-mono text-lg font-semibold ml-1">{tier.currency}</span>
                  )}
                  {tier.period && (
                    <span className="font-sans text-xs opacity-60 ml-1">{tier.period}</span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-sans font-light leading-relaxed mb-8 opacity-80 border-b pb-6 border-current/10">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                          tier.isPopular
                            ? 'bg-argile/20 text-argile-light'
                            : 'bg-mousse/10 text-mousse'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenQuote(tier.name)}
                className={`btn-magnetic btn-slide w-full py-4 rounded-2xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-transform ${
                  tier.isPopular
                    ? 'bg-argile text-creme shadow-argile/30'
                    : 'bg-charbon text-creme hover:bg-mousse'
                }`}
              >
                <span className={`slide-bg ${tier.isPopular ? 'bg-mousse-deep' : 'bg-argile'}`} />
                <span className="relative z-10 flex items-center gap-2">
                  {tier.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
