import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import ServicesSection from './components/ServicesSection';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import CommandMenu from './components/CommandMenu';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [theme, setTheme] = useState(() => {
    // 1. Check saved user preference in localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lovey-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      // 2. Fall back to system OS color scheme
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Apply theme to document element and update mobile browser theme-color
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0B0D12' : '#FAFAFA');
    }
  }, [theme]);

  // Dynamically adapt when OS theme switches if user hasn't explicitly overridden it
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const saved = localStorage.getItem('lovey-theme');
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('lovey-theme', next);
      } catch {
        // Ignore storage exceptions if unavailable
      }
      return next;
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Luxury Studio Custom Cursor (Pointer & Magnetic Aura) */}
      <CustomCursor />

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
