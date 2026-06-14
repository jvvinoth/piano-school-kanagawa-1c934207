import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
