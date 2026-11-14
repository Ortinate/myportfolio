import React from 'react';

export default function Logo({ size = 32, showWordmark = true }) {
  return (
    <span
      className="studio-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        userSelect: 'none',
        textDecoration: 'none',
      }}
    >
      {/* Minimalist Geometric Japanese Kamon Crest with Interlocking Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="studio-logo-mark"
        style={{
          flexShrink: 0,
          transition: 'transform 320ms var(--ease-snappy)',
        }}
      >
        <defs>
          <linearGradient id="kamonBorderGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--brand-crimson)" />
            <stop offset="100%" stopColor="var(--brand-coral)" />
          </linearGradient>
        </defs>

        {/* Circular Outer Kamon Disc (theme-adaptive) */}
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="var(--logo-stamp-bg)"
        />

        {/* Minimalist Orbit / Hairline Crest Ring */}
        <circle
          cx="32"
          cy="32"
          r="25"
          stroke="url(#kamonBorderGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          strokeOpacity="0.85"
          className="studio-kamon-ring"
        />

        {/* Geometric Origami Sakura Blossom Crest (5 stylized facets) */}
        <g
          className="studio-origami-blossom"
          transform="translate(32, 28)"
          style={{
            transformOrigin: '32px 28px',
            transition: 'transform 450ms var(--ease-bounce)',
          }}
        >
          {/* Top Petal */}
          <path d="M0 -15 L4 -6 L0 0 L-4 -6 Z" fill="var(--brand-crimson)" opacity="0.95" />
          {/* Top-Right Petal */}
          <path d="M14 -5 L7 -1 L0 0 L6 -8 Z" fill="var(--brand-coral)" opacity="0.9" />
          {/* Bottom-Right Petal */}
          <path d="M9 12 L3 5 L0 0 L10 2 Z" fill="var(--brand-crimson)" opacity="0.85" />
          {/* Bottom-Left Petal */}
          <path d="M-9 12 L-10 2 L0 0 L-3 5 Z" fill="var(--brand-coral)" opacity="0.9" />
          {/* Top-Left Petal */}
          <path d="M-14 -5 L-6 -8 L0 0 L-7 -1 Z" fill="var(--brand-crimson)" opacity="0.95" />
          {/* Center Dew Core */}
          <circle cx="0" cy="0" r="2.2" fill="var(--bg-card)" />
        </g>

        {/* Precision Modern Interlocking 'L' Studio Monogram */}
        <path
          d="M20 22 C20 20.895 20.895 20 22 20 H25.5 C26.605 20 27.5 20.895 27.5 22 V42 H42 C43.105 42 44 42.895 44 44 V46 C44 47.105 43.105 48 42 48 H22 C20.895 48 20 47.105 20 46 Z"
          fill="var(--logo-stamp-l)"
        />

        {/* Accent Point at Monogram Terminal */}
        <circle cx="43.5" cy="43.5" r="2" fill="var(--brand-crimson)" />
      </svg>

      {/* Wordmark: Lovey. */}
      {showWordmark && (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '2px',
          }}
        >
          <span
            style={{
              fontSize: size >= 30 ? '1.42rem' : '1.15rem',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: 'var(--ink-primary)',
              lineHeight: 1,
            }}
          >
            Lovey
          </span>
          <span
            style={{
              width: size >= 30 ? '6px' : '5px',
              height: size >= 30 ? '6px' : '5px',
              borderRadius: '50%',
              background: 'var(--brand-crimson)',
              display: 'inline-block',
            }}
          />
        </span>
      )}
    </span>
  );
}
