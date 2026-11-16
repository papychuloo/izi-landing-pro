import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split line reveal animations on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.manifesto-tag', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
      .from('.manifesto-common', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.3')
      .from('.manifesto-divider', {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      }, '-=0.4')
      .from('.manifesto-differentiated', {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.manifesto-signature', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      // Subtle parallax on the background texture
      gsap.to('.manifesto-bg-image', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative py-28 sm:py-40 bg-charbon text-creme overflow-hidden"
    >
      {/* Parallax Organic Texture Backdrop (Preset A: Dark Forest & Botanic Texture) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=80"
          alt="Texture Organique Parallaxe"
          className="manifesto-bg-image absolute -top-24 inset-x-0 w-full h-[130%] object-cover opacity-15 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charbon via-mousse-deep/70 to-charbon" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
        {/* Manifeste Tag */}
        <div className="manifesto-tag flex items-center justify-center gap-2 mb-12">
          <div className="w-8 h-[1px] bg-argile" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-argile-light font-medium">
            Manifeste Fondateur
          </span>
          <div className="w-8 h-[1px] bg-argile" />
        </div>

        {/* Contrasting Statement 1: Common Industry Approach (Neutral, Smaller) */}
        <div className="manifesto-common text-center mb-10 max-w-2xl mx-auto">
          <p className="font-sans text-lg sm:text-2xl text-creme/60 font-light leading-relaxed">
            « La plupart des services de livraison urbains se concentrent sur :{' '}
            <span className="text-creme/90 font-normal underline decoration-white/20 underline-offset-4">
              l'empilement aveugle de colis
            </span>{' '}
            et des promesses horaires approximatives. »
          </p>
        </div>

        {/* Clean Architectural Divider */}
        <div className="manifesto-divider w-24 h-[1px] bg-argile/40 mx-auto my-8 origin-center" />

        {/* Contrasting Statement 2: Differentiated Approach (Massive, Dramatic Serif Italic, Accent Keyword) */}
        <div className="manifesto-differentiated text-center max-w-4xl mx-auto">
          <p className="font-sans text-xs sm:text-sm font-mono uppercase tracking-widest text-creme/50 mb-4">
            Nous nous concentrons sur :
          </p>
          <h3 className="font-dramatic italic font-normal text-4xl sm:text-6xl lg:text-7xl text-creme leading-[1.05] tracking-tight">
            La cinétique de{' '}
            <span className="text-argile underline decoration-argile/30 decoration-2 underline-offset-8">
              haute précision
            </span>{' '}
            et le respect absolu de chaque seconde dakaroise.
          </h3>
        </div>

        {/* Signature & Location */}
        <div className="manifesto-signature mt-16 pt-8 border-t border-creme/10 flex flex-col sm:flex-row items-center justify-between text-creme/50 font-mono text-xs gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-argile" />
            <span>LIVREXPRESS LABS // DAKAR CORNICHE</span>
          </div>
          <div className="text-center sm:text-right">
            <span>ZÉRO RETARD TOLÉRÉ • INTÉGRITÉ SCELLÉE GARANTIE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
