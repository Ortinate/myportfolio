import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, Terminal, User, Mail, FileText, Volume2, Moon, Sun, ArrowRight } from 'lucide-react';
import { playClickSound, playPopSound } from '../utils/audio';

export default function CommandMenu({ isOpen, onClose, onToggleSound, soundEnabled, onToggleTheme, theme }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playPopSound();
        if (isOpen) onClose();
        else onClose(false); // toggle handled by parent
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    onClose();
  };

  const actions = [
    {
      id: 'bento',
      label: 'Why Build With Lovey? (Bento Grid)',
      category: 'Studio',
      icon: <FolderGit2 size={16} />,
      action: () => scrollToSection('bento'),
    },
    {
      id: 'services',
      label: 'Studio Services & Offerings',
      category: 'Capabilities',
      icon: <Terminal size={16} />,
      action: () => scrollToSection('services'),
    },
    {
      id: 'philosophy',
      label: 'The Craft Way / Artisan Philosophy',
      category: 'Philosophy',
      icon: <User size={16} />,
      action: () => scrollToSection('philosophy'),
    },
    {
      id: 'contact',
      label: 'Contact / Send a Scroll Dispatch',
      category: 'Inquiry',
      icon: <Mail size={16} />,
      action: () => scrollToSection('contact'),
    },
    {
      id: 'toggle-sound',
      label: soundEnabled ? 'Mute Tactile Audio Feedback' : 'Enable Tactile Audio Feedback',
      category: 'Preference',
      icon: <Volume2 size={16} />,
      action: () => {
        onToggleSound();
      },
    },
    {
      id: 'toggle-theme',
      label: theme === 'dark' ? 'Switch to Clean White Studio' : 'Switch to Dark Studio Mode',
      category: 'Theme',
      icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        onToggleTheme();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '540px', padding: 0, overflow: 'hidden' }}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0.9rem 1.25rem', borderBottom: '1px solid var(--border-hairline)', gap: '0.75rem' }}>
          <Search size={18} color="var(--ink-tertiary)" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or jump to..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '0.95rem',
              color: 'var(--ink-primary)',
            }}
          />
          <button
            onClick={() => { playClickSound(); onClose(); }}
            style={{ color: 'var(--ink-tertiary)', padding: '0.2rem' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Action list */}
        <div style={{ padding: '0.75rem', maxHeight: '360px', overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-tertiary)', fontSize: '0.88rem' }}>
              No actions found for "{query}"
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playClickSound();
                  item.action();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  color: 'var(--ink-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--brand-primary)', display: 'flex' }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {item.category}
                    </div>
                  </div>
                </div>
                <ArrowRight size={14} color="var(--ink-tertiary)" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1.25rem', background: 'var(--bg-main)', borderTop: '1px solid var(--border-hairline)', fontSize: '0.75rem', color: 'var(--ink-tertiary)' }}>
          <span>Navigation</span>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
