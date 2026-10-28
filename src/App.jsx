import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import ServicesSection from './components/ServicesSection';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import CommandMenu from './components/CommandMenu';
import { setSoundEnabled, playPopSound } from './utils/audio';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [soundEnabled, setSoundActive] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'light' ? 'Clean White Studio' : 'Dark Studio Mode'}`);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundActive(next);
    setSoundEnabled(next);
    if (next) {
      setTimeout(() => playPopSound(), 50);
      showToast('Tactile audio feedback enabled');
    } else {
      showToast('Audio muted');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'var(--ink-primary)',
            color: 'var(--bg-card)',
            padding: '0.65rem 1.15rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: 'var(--shadow-float)',
            zIndex: 1100,
            animation: 'scaleUp 180ms cubic-bezier(0.23, 1, 0.32, 1) forwards',
          }}
        >
          <Sparkles size={15} color="var(--brand-coral)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Modern Header */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
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
        onToggleSound={handleToggleSound}
        soundEnabled={soundEnabled}
        onToggleTheme={handleToggleTheme}
        theme={theme}
      />
    </div>
  );
}
