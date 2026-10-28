import React from 'react';

export default function PhilosophySection() {
  const principles = [
    {
      kanji: '心',
      romaji: 'Kodawari · こだわり',
      title: 'Perfection in Unseen Details',
      desc: 'The greatest craftsmanship lives where users rarely look consciously—spring physics, fluid layout shifts, and clean zero-bloat code architecture that compounds into an experience people love without knowing why.',
    },
    {
      kanji: '渋',
      romaji: 'Shibui · 渋い',
      title: 'Restrained, Timeless Elegance',
      desc: 'Avoiding loud, passing tech gimmicks. Crafting clean, enduring aesthetics that celebrate pristine typography, harmonious spatial balance, and purposeful motion.',
    },
    {
      kanji: '改',
      romaji: 'Kaizen · 改善',
      title: 'Continuous Micro-Optimization',
      desc: 'Treating performance not as an afterthought, but as a core design material. Relentless tuning of the critical rendering path to maintain sub-16ms GPU composite budgets.',
    },
    {
      kanji: '作',
      romaji: 'Monozukuri · ものづくり',
      title: 'The Artisan Maker Spirit',
      desc: 'Taking deep personal pride in every digital artifact shipped. Bringing the patience, respect, and mastery of Japanese woodblock and joinery masters into digital software.',
    },
  ];

  return (
    <section id="philosophy" style={{ padding: '3rem 0 4.5rem 0', background: 'var(--bg-card-subtle)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <span className="hanko-stamp" style={{ width: '28px', height: '28px', fontSize: '0.95rem' }}>道</span>
            <span className="section-label" style={{ color: 'var(--brand-crimson)' }}>
              The Craft Way
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--ink-primary)', marginBottom: '1rem' }}>
            Engineering Guided by Artisan Principles.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            In a digital world overflowing with cookie-cutter templates and disposable code, we create software with soul, intention, and longevity.
          </p>
        </div>

        {/* 4 Philosophy Cards */}
        <div className="responsive-card-grid">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: 'serif', fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-crimson)' }}>
                  {item.kanji}
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-tertiary)', letterSpacing: '0.04em' }}>
                  {item.romaji}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '0.65rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--ink-secondary)', lineHeight: 1.6, flex: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
