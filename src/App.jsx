import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import ServicesSection from './components/ServicesSection';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import CommandMenu from './components/CommandMenu';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Floating Modern Header */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenCommandMenu={() => setIsCommandOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />

        <BentoSection />

        <ServicesSection />

        <PhilosophySection />

        <ContactSection />
      </main>

      {/* Command Palette (Cmd + K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onToggleTheme={handleToggleTheme}
        theme={theme}
      />
    </div>
  );
}
