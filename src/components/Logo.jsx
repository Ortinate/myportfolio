import React from 'react';

export default function Logo({ size = 32, showWordmark = true }) {
  return (
    <span
      className="studio-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        userSelect: 'none',
      }}
    >
      {/* Custom Kamon / Hanko Monogram SVG Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="studio-logo-mark"
        style={{
          flexShrink: 0,
          transition: 'transform 280ms var(--ease-snappy)',
        }}
      >
        {/* Outer Stamp Block */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="14"
          fill="var(--logo-stamp-bg)"
        />
        {/* Inner Vermilion Hanko Seal Hairline */}
        <rect
          x="7"
          y="7"
          width="50"
          height="50"
          rx="10.5"
          stroke="var(--brand-crimson)"
          strokeWidth="2"
          strokeOpacity="0.9"
        />

        {/* Architectural Brush 'L' */}
        <path
          d="M20.5 16.5C20.5 15.3954 21.3954 14.5 22.5 14.5H26.5C27.6046 14.5 28.5 15.3954 28.5 16.5V40H43.5C44.6046 40 45.5 40.8954 45.5 42V45.5C45.5 46.6046 44.6046 47.5 43.5 47.5H22.5C21.3954 47.5 20.5 46.6046 20.5 45.5V16.5Z"
          fill="var(--logo-stamp-l)"
        />

        {/* Notched Sakura Blossom Petal inside the Crest */}
        <g className="studio-logo-petal" style={{ transformOrigin: '41px 24px', transition: 'transform 340ms var(--ease-bounce)' }}>
          <path
            d="M35.5 30.5C35.5 23.2 40.6 17.6 47.2 16.8L44.6 20.6L48.6 18.8C47.7 25.3 42.3 30.5 35.5 30.5Z"
            fill="var(--brand-crimson)"
          />
          <circle cx="34.2" cy="32.2" r="2.1" fill="var(--brand-coral)" />
        </g>
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

