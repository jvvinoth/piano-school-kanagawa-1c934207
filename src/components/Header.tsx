import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-bold text-primary font-heading"
            >
              {siteContent.header.brandName}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-text hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteContent.header.cta.href}
                onClick={(e) => handleNavClick(e, siteContent.header.cta.href)}
                className="bg-accent text-white px-6 py-2.5 rounded-full hover:bg-primary shadow-md transition-all duration-200 font-medium"
              >
                {siteContent.header.cta.text}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary text-4xl"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {siteContent.header.nav.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-4xl font-semibold font-heading text-text hover:text-primary transition-colors"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteContent.header.cta.href}
                onClick={(e) => handleNavClick(e, siteContent.header.cta.href)}
                className="bg-accent text-white px-8 py-4 rounded-full text-xl font-medium shadow-lg mt-4"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${siteContent.header.nav.length * 0.08}s both`,
                }}
              >
                {siteContent.header.cta.text}
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
