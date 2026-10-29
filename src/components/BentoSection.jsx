import React from 'react';

export default function BentoSection() {
  return (
    <section id="bento" style={{ padding: '1.5rem 0 3.5rem 0', background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Main Bento Frame Container matching Kigo Studio Image 2 */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border-hairline)',
            borderRadius: '16px',
            padding: 'clamp(1.25rem, 3.5vw, 2.75rem)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background pine tree silhouette */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-10%',
              width: '600px',
              height: '600px',
              backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* The Authentic Kigo Bento Mosaic */}
          <div
            className="bento-grid"
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Top Left Card: Big Headline "WHY BUILD YOUR WEBSITE WITH LOVEY?" */}
            <div
              className="bento-card-headline"
              style={{
                background: 'var(--bento-stone-bg)',
                borderRadius: '10px',
                padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1.25rem, 2vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid var(--bento-stone-border)',
                transition: 'background-color 200ms ease, border-color 200ms ease',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.35rem)',
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: '-0.035em',
                  color: 'var(--bento-stone-ink)',
                  textTransform: 'uppercase',
                  transition: 'color 200ms ease',
                }}
              >
                Why build your<br />
                website with lovey?
              </h2>
            </div>

            {/* Top Center: Mount Fuji Woodblock Print (Full-bleed, clean art!) */}
            <div
              className="bento-card-fuji"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                minHeight: '210px',
                border: '1px solid var(--border-hairline)',
              }}
            >
              <img
                src="/images/fuji-woodblock.jpg"
                alt="Mount Fuji Woodblock Print"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Right Side: The Elegant Character Portrait (Full-height, NO floating badges!) */}
            <div
              className="bento-card-portrait"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                background: 'var(--bento-portrait-bg)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 200ms ease',
              }}
            >
              <img
                src="/images/kigo-character.jpg"
                alt="Lovey Studio Artisan"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>

            {/* Row 2 Left: Red Ukiyo-e Woman Woodblock Print */}
            <div
              className="bento-card-woman"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                minHeight: '180px',
                border: '1px solid var(--border-hairline)',
              }}
            >
              <img
                src="/images/red-ukiyo-woman.jpg"
                alt="Ukiyo-e Woman"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Row 2 Center: 03 Search Engine Friendly Card (Dark Pine Green) */}
            <div
              className="bento-card-seo"
              style={{
                background: '#034E3E',
                color: '#FFFFFF',
                borderRadius: '10px',
                padding: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', opacity: 0.85, marginBottom: '0.4rem' }}>
                03 SEARCH ENGINE FRIENDLY
              </div>
              <p style={{ fontSize: '0.82rem', opacity: 0.92, lineHeight: 1.5 }}>
                We build your website with the necessary specifications so it shows up on Google and other search engines.
              </p>
            </div>

            {/* Row 3 Left: 04 Self-Manage Your Site (Warm Stone) */}
            <div
              className="bento-card-manage"
              style={{
                background: 'var(--bento-stone-bg)',
                color: 'var(--bento-stone-ink)',
                borderRadius: '10px',
                padding: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid var(--bento-stone-border)',
                transition: 'background-color 200ms ease, color 200ms ease, border-color 200ms ease',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--bento-stone-muted)', marginBottom: '0.4rem', transition: 'color 200ms ease' }}>
                04 SELF-MANAGE YOUR SITE
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--bento-stone-sub)', lineHeight: 1.5, transition: 'color 200ms ease' }}>
                We use a platform so you or your team can change and publish updates without depending on anyone.
              </p>
            </div>

            {/* Row 3 Center: 05 Real Support (Terracotta / Coral) */}
            <div
              className="bento-card-support"
              style={{
                background: '#DE6551',
                color: '#FFFFFF',
                borderRadius: '10px',
                padding: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', opacity: 0.85, marginBottom: '0.4rem' }}>
                05 REAL SUPPORT
              </div>
              <p style={{ fontSize: '0.82rem', opacity: 0.92, lineHeight: 1.5 }}>
                We stay with you after publishing to ensure everything works and you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
