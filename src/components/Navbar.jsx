import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', kanji: '家', href: '#home' },
  { id: 'bento', label: 'Why Lovey', kanji: '匠', href: '#bento' },
  { id: 'services', label: 'Services ↓', kanji: '役', href: '#services' },
  { id: 'philosophy', label: 'Philosophy', kanji: '道', href: '#philosophy' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = ['home', 'bento', 'services', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 140;

      // If scrolled near the very bottom of the page, highlight 'contact'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'EN' ? 'JA' : 'EN'));
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 60;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`site-header${scrolled || mobileMenuOpen ? ' is-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        {/* Brand: Lovey with vermilion crimson dot */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          style={{ display: 'flex', alignItems: 'baseline', gap: '2px', userSelect: 'none' }}
        >
          <span style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink-primary)' }}>
            Lovey
          </span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-crimson)', display: 'inline-block' }} />
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link-item${activeSection === item.id ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Japanese CONTACT button with red Hanko stamp */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.42rem 0.85rem',
              borderRadius: '6px',
              border: '1.5px solid var(--ink-primary)',
              background: activeSection === 'contact' ? 'var(--ink-primary)' : 'var(--bg-card)',
              color: activeSection === 'contact' ? 'var(--bg-card)' : 'var(--ink-primary)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              transition: 'background-color 200ms var(--ease-snappy), color 200ms var(--ease-snappy), transform 160ms var(--ease-snappy)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ink-primary)';
              e.currentTarget.style.color = 'var(--bg-card)';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== 'contact') {
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.style.color = 'var(--ink-primary)';
              }
            }}
          >
            CONTACT <span style={{ color: 'var(--brand-crimson)', fontWeight: 800 }}>押</span>
          </a>

          {/* Language Switcher pill (Desktop) */}
          <button
            onClick={toggleLang}
            className="desktop-only-tool"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--ink-secondary)',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              border: '1px solid var(--border-hairline)',
              background: 'var(--bg-card)',
            }}
            title="Toggle language"
          >
            <Globe size={13} />
            <span>{lang === 'EN' ? 'EN' : '日本語'}</span>
          </button>

          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '6px',
              border: '1px solid var(--border-hairline)',
              background: 'var(--bg-card)',
              color: 'var(--ink-secondary)',
            }}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {[...NAV_ITEMS, { id: 'contact', label: 'Contact Inquiry', kanji: '文', href: '#contact' }].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`mobile-nav-link${activeSection === item.id ? ' is-active' : ''}`}
            >
              <span>{item.label}</span>
              <span style={{ fontFamily: 'serif', color: 'var(--brand-crimson)', fontWeight: 800 }}>
                {item.kanji}
              </span>
            </a>
          ))}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              paddingTop: '0.75rem',
              marginTop: '0.5rem',
              borderTop: '1px solid var(--border-hairline)',
            }}
          >
            <button
              onClick={toggleLang}
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--ink-secondary)',
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-hairline)',
                background: 'var(--bg-main)',
              }}
            >
              <Globe size={14} />
              <span>{lang === 'EN' ? 'Language: EN' : '言語: 日本語'}</span>
            </button>

            <button
              onClick={onToggleTheme}
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-hairline)',
                background: 'var(--bg-main)',
                color: 'var(--ink-secondary)',
              }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
