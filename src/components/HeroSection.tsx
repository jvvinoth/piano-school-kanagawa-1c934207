import React, { useEffect, useRef, useState } from 'react';
import { Piano } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-surface/30 pt-20"
    >
      {/* Banner Image with Text Overlay */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={siteContent.hero.banner.src}
          alt={siteContent.hero.banner.alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center max-w-4xl leading-relaxed hero-tagline-shadow">
            {siteContent.hero.banner.tagline}
          </h2>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column - 55% */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div
              className={`inline-block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span className="inline-block bg-surface text-primary px-4 py-2 rounded-full text-sm font-medium">
                {siteContent.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {siteContent.hero.headline.main}{' '}
              <span className="text-primary">{siteContent.hero.headline.emphasis}</span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg md:text-xl text-text-muted leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <a
                href={siteContent.hero.cta.primary.href}
                onClick={(e) => handleCtaClick(e, siteContent.hero.cta.primary.href)}
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-primary hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {siteContent.hero.cta.primary.text}
              </a>
              <a
                href={siteContent.hero.cta.secondary.href}
                onClick={(e) => handleCtaClick(e, siteContent.hero.cta.secondary.href)}
                className="text-primary font-medium text-lg hover:text-accent transition-colors duration-200"
              >
                {siteContent.hero.cta.secondary.text}
              </a>
            </div>
          </div>

          {/* Right Column - 45% */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={siteContent.hero.image.src}
                alt={siteContent.hero.image.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Fallback if image fails to load */}
              <div className="absolute inset-0 bg-surface flex items-center justify-center -z-10">
                <Piano size={64} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
