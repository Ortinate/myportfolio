import React from 'react';
import { ArrowDown } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import SakuraCanvas from './SakuraCanvas';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    playClickSound();
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
    <section id="home" className="hero-section">
      {/* Top Soft Nav Blending Gradient so Hero & Navbar transition seamlessly */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '110px',
          background: 'linear-gradient(to bottom, var(--bg-main) 25%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Falling Sakura Cherry Blossom Petals Canvas */}
      <SakuraCanvas />

      {/* Right Side / Top-Right Sakura Branch & Misty Mountain Artwork */}
      <div className="hero-artwork" />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Big Vermilion Japanese Calligraphy Stamp: 春 (Spring / Renewal) */}
          <div style={{ marginBottom: '1.1rem' }}>
            <span
              style={{
                fontFamily: 'serif',
                fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
                fontWeight: 900,
                color: 'var(--brand-crimson)',
                lineHeight: 1,
                display: 'inline-block',
                textShadow: '0 2px 12px rgba(225, 29, 72, 0.18)',
              }}
            >
              春
            </span>
          </div>

          {/* Iconic Headline matching Kigo Studio: MAKE YOUR WEBSITE cool */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.8vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              color: 'var(--ink-primary)',
              textTransform: 'uppercase',
              marginBottom: '1.35rem',
            }}
          >
            MAKE YOUR<br />
            WEBSITE <span
              style={{
                fontFamily: 'var(--font-serif-italic)',
                textTransform: 'none',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--brand-coral)',
                letterSpacing: '-0.01em',
              }}
            >
              cool
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.6vw, 1.15rem)',
              color: 'var(--ink-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '520px',
            }}
          >
            Web experiences that turn heads. App development that means business. Workflow automation that gives you your day back.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#services"
              className="btn-primary"
              onClick={(e) => scrollToSection(e, 'services')}
              style={{
                borderRadius: '8px',
                padding: '0.75rem 1.4rem',
                background: 'var(--ink-primary)',
                color: 'var(--bg-card)',
                fontWeight: 700,
              }}
            >
              Explore Services <ArrowDown size={15} />
            </a>

            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => scrollToSection(e, 'contact')}
              style={{ borderRadius: '8px', fontWeight: 600 }}
            >
              Start a Conversation →
            </a>

            <a
              href="#bento"
              className="btn-secondary"
              onClick={(e) => scrollToSection(e, 'bento')}
              style={{ borderRadius: '8px' }}
            >
              Why Choose Lovey
            </a>
          </div>

          {/* Vertical Japanese Poem / Watermark Accent (matching Kigo reference) */}
          <div
            className="kanji-watermark"
            style={{
              display: 'flex',
              gap: '1.25rem',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
              lineHeight: 1.4,
              color: 'var(--ink-primary)',
              opacity: 0.18,
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
          >
            <div>
              何<br />不
            </div>
            <div>
              希<br />望
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
