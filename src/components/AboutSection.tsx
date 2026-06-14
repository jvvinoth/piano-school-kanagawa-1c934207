import React, { useEffect, useRef, useState } from 'react';
import { Check, Music } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-surface py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - 60% Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Overline */}
              <p className="text-secondary uppercase tracking-wider text-sm font-medium mb-4">
                {siteContent.about.overline}
              </p>

              {/* Headline */}
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-6">
                {siteContent.about.headline}
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-4 max-w-xl">
                {siteContent.about.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features List */}
              <div className="mt-8 space-y-3">
                {siteContent.about.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.5s ease-out ${0.2 + index * 0.1}s both`
                        : 'none',
                    }}
                  >
                    <Check size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-base text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 40% Image */}
          <div
            className={`lg:col-span-5 order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={siteContent.about.image.src}
                alt={siteContent.about.image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Fallback */}
              <div className="absolute inset-0 bg-background flex items-center justify-center -z-10">
                <Music size={64} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
