import React from 'react';
import { Instagram, Facebook, LucideIcon } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
};

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
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
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              {siteContent.footer.brandName}
            </h3>
            <p className="text-base text-text-muted leading-relaxed mb-6">
              {siteContent.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {siteContent.footer.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.platform}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          {siteContent.footer.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base font-semibold text-text mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-base text-text-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-text-muted text-center">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>

      {/* Accent Strip */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </footer>
  );
};
