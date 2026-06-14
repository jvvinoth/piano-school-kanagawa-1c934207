import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', age: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-background py-20 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">
            {siteContent.contact.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {siteContent.contact.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-1 space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-surface rounded-3xl p-8 space-y-6">
              <h3 className="font-heading text-xl font-semibold text-text mb-6">
                Get in Touch
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Email</p>
                  <a
                    href={`mailto:${siteContent.contact.info.email}`}
                    className="text-base text-text hover:text-primary transition-colors"
                  >
                    {siteContent.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Phone</p>
                  <a
                    href={`tel:${siteContent.contact.info.phone.replace(/\s/g, '')}`}
                    className="text-base text-text hover:text-primary transition-colors"
                  >
                    {siteContent.contact.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Location</p>
                  <p className="text-base text-text">
                    {siteContent.contact.info.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-3xl p-8 md:p-10 shadow-sm"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Yuki Tanaka"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-2xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yuki@example.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-2xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+81 90-1234-5678"
                    className="w-full px-4 py-3 bg-background border border-border rounded-2xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Age/Level */}
                <div>
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Student Age / Level *
                  </label>
                  <input
                    type="text"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g., 7 years old, beginner / Adult, returning player"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-2xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your goals or any questions you have..."
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-2xl text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-primary hover:shadow-lg transition-all duration-300"
                >
                  {siteContent.contact.form.submitText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
