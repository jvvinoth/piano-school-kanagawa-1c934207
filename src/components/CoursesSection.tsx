import React, { useEffect, useRef, useState } from 'react';
import { Baby, GraduationCap, Music, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Baby,
  GraduationCap,
  Music,
};

export const CoursesSection: React.FC = () => {
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
      id="courses"
      ref={sectionRef}
      className="bg-background py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">
            {siteContent.courses.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {siteContent.courses.subtext}
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {siteContent.courses.items.map((course, index) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={index}
                className={`bg-surface rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-semibold text-text mb-4">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-muted leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {course.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-muted flex items-start gap-2"
                    >
                      <span className="text-secondary mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
