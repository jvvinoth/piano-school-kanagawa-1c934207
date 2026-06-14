import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const TestimonialsSection: React.FC = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="bg-surface py-20 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">
            {siteContent.testimonials.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {siteContent.testimonials.subtext}
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background rounded-3xl p-8 md:p-10 shadow-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.15}s` : '0s',
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} className="text-primary/30" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-text leading-relaxed mb-6 font-light">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-base font-semibold text-text">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
