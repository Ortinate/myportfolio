import React from 'react';
import { ArrowUpRight, Sparkles, Code2, Palette, Zap, Layers } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      kanji: '美',
      title: 'Bespoke Web Experiences',
      subtitle: 'Interfaces that captivate & convert',
      description: 'Custom creative development combining fluid typography, organic animations, and 60fps micro-interactions that leave an indelible impression on visitors.',
      deliverables: ['Custom Micro-Animations', 'Responsive Fluid Design', 'Interactive Canvas & Motion', 'Brand Identity Integration'],
    },
    {
      number: '02',
      kanji: '技',
      title: 'Full-Stack Engineering',
      subtitle: 'Fast, secure, scalable infrastructure',
      description: 'Resilient web apps and distributed architectures built with TypeScript, React, Node, and Go. Engineered to sub-16ms render budgets and enterprise-grade reliability.',
      deliverables: ['End-to-End Type Safety', 'High-Throughput APIs', 'Real-Time WebSockets', 'Cloud & Database Architecture'],
    },
    {
      number: '03',
      kanji: '速',
      title: 'Performance & Search Optimization',
      subtitle: 'Sub-millisecond speed & organic discovery',
      description: 'Surgical performance audits and SEO implementations ensuring top-tier Google search ranking, instantaneous page loads, and zero layout shift.',
      deliverables: ['100/100 Lighthouse Targets', 'Core Web Vitals Mastery', 'Semantic SEO Architecture', 'Edge CDN & Caching'],
    },
    {
      number: '04',
      kanji: '創',
      title: 'Design Systems & Tooling',
      subtitle: 'Scalable foundations for your team',
      description: 'Cohesive, tokenized design systems and modular component libraries that allow your team to publish and iterate rapidly without design debt.',
      deliverables: ['Tokenized CSS Architecture', 'Accessible Components (WCAG)', 'Zero-Dependency Micro-UI', 'Full Documentation'],
    },
  ];

  return (
    <section id="services" style={{ padding: '2.5rem 0 4.5rem 0', background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span className="hanko-stamp" style={{ width: '28px', height: '28px', fontSize: '0.95rem' }}>役</span>
              <span className="section-label" style={{ color: 'var(--brand-crimson)' }}>
                Studio Services
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--ink-primary)' }}>
              What We Craft For You.
            </h2>
          </div>

          <p style={{ maxWidth: '440px', color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Every digital piece is constructed like bespoke joinery—harmonizing striking visual aesthetics with uncompromising technical rigor.
          </p>
        </div>

        {/* 4 Editorial Service Panels */}
        <div className="responsive-card-grid">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                position: 'relative',
              }}
            >
              {/* Top Row: Number & Kanji Calligraphy Seal */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--ink-tertiary)' }}>
                    {item.number}
                  </span>
                  <span style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-crimson)', opacity: 0.85 }}>
                    {item.kanji}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>

                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-coral)', marginBottom: '1rem', fontFamily: 'var(--font-serif-italic)' }}>
                  {item.subtitle}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {item.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {item.deliverables.map((d, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
                      <span style={{ color: 'var(--brand-crimson)', fontSize: '0.85rem' }}>•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
