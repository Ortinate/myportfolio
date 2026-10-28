import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound, playPopSound } from '../utils/audio';

export const CREATIONS_DATA = [
  {
    id: 'aether-flow',
    number: 'I',
    kanji: '空',
    title: 'AetherFlow',
    subtitle: 'Distributed AI Orchestration Engine',
    category: 'High-Throughput Systems',
    timeline: '2025 – 2026',
    image: '/images/project-1.jpg',
    description: 'High-throughput enterprise AI pipeline orchestrator managing distributed GPU worker clusters, streaming inference graphs, and zero-downtime model deployments.',
    longDescription: 'AetherFlow was built to eliminate latency bottlenecks when executing complex multi-model AI workflows. Built with a distributed microservices core in Go and Node.js, backed by Redis queues and PostgreSQL, and fronted by an ultra-responsive dashboard featuring real-time WebSocket telemetry and dynamic node-based canvas pipelines.',
    tags: ['TypeScript', 'React', 'Go', 'Redis', 'Docker', 'WebSockets'],
    metrics: [
      { label: 'Throughput', value: '2.9M Req/day' },
      { label: 'Latency Drop', value: '-64% P99' },
      { label: 'Pipeline Nodes', value: '184 Active' },
    ],
    highlights: [
      'Engineered an interactive drag-and-drop DAG workflow canvas with custom topological sorting.',
      'Constructed distributed job queuing with Redis Streams handling 30,000 concurrent jobs.',
      'Architected end-to-end telemetry dashboard with 60fps streaming telemetry charts.'
    ],
    liveUrl: 'https://example.com/aetherflow-demo',
    githubUrl: 'https://github.com/lovey/aether-flow',
  },
  {
    id: 'nexus-engineer',
    number: 'II',
    kanji: '結',
    title: 'Nexus Engineer',
    subtitle: 'Web-Native 3D CAD & Generative Workbench',
    category: 'Creative Technology & WebGL',
    timeline: '2025',
    image: '/images/project-2.jpg',
    description: 'Browser-based generative engineering workbench combining parametric wireframe rendering, real-time stress simulations, and intuitive node graph interfaces.',
    longDescription: 'Designed and engineered from scratch to bring desktop-grade CAD capabilities to modern web browsers. Features custom WebGL shaders, Web Workers for background kinematic calculations, and an origin-aware, spring-physics UI system inspired by Apple and Japanese minimal design language.',
    tags: ['React', 'TypeScript', 'Three.js / WebGL', 'Web Workers', 'Web Audio API', 'WASM'],
    metrics: [
      { label: 'FPS Render', value: '60 FPS Fixed' },
      { label: 'Memory Footprint', value: '< 45 MB' },
      { label: 'Sim Accuracy', value: '99.4%' },
    ],
    highlights: [
      'Built a custom WebGL rendering loop off the main thread utilizing OffscreenCanvas.',
      'Developed an origin-aware spring motion system with zero frame drops during heavy compute.',
      'Integrated tactile Web Audio feedback on mechanical tool changes.'
    ],
    liveUrl: 'https://example.com/nexus-demo',
    githubUrl: 'https://github.com/lovey/nexus-engineer',
  },
  {
    id: 'apex-quant',
    number: 'III',
    kanji: '頂',
    title: 'Apex Quant',
    subtitle: 'Sub-Millisecond Financial Analytics Terminal',
    category: 'Distributed Systems & Fintech',
    timeline: '2024 – 2025',
    image: '/images/project-3.jpg',
    description: 'Ultra-low latency portfolio analytics terminal streaming order-book market feeds, algorithmic execution logs, and live risk metrics for prop trading desks.',
    longDescription: 'Built to deliver real-time actionable insights for high-frequency trading assets. Incorporates virtualized data tables rendering 100,000+ ticks/second without DOM degradation, real-time risk delta estimators, and Swiss-inspired minimalist typography.',
    tags: ['Next.js', 'React', 'Rust WASM', 'gRPC', 'Tailwind', 'TimescaleDB'],
    metrics: [
      { label: 'Data Throughput', value: '100k Ticks/s' },
      { label: 'Table Render', value: '< 4.2ms' },
      { label: 'Active Capital', value: '$1.42B Monitored' },
    ],
    highlights: [
      'Implemented custom memory-mapped ring buffer in Rust WASM to parse binary market ticks.',
      'Engineered an ultra-clean virtualized data grid with zero layout shifts and instant sorting.',
      'Constructed a robust failover cluster with automated health heartbeat monitors.'
    ],
    liveUrl: 'https://example.com/apex-quant-demo',
    githubUrl: 'https://github.com/lovey/apex-quant',
  },
];

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="creations" style={{ padding: '5.5rem 0', background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span className="hanko-stamp" style={{ width: '28px', height: '28px', fontSize: '0.95rem' }}>作</span>
              <span className="section-label" style={{ color: 'var(--brand-crimson)' }}>
                Exhibition Gallery
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--ink-primary)' }}>
              Selected Creations.
            </h2>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
            [ 2024 — 2026 作品集 ]
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {CREATIONS_DATA.map((creation) => (
            <div
              key={creation.id}
              className="card-clean"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-hairline)',
                background: 'var(--bg-card)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              {/* Exhibition Image Frame */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '240px',
                  background: 'var(--bg-card-subtle)',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  playPopSound();
                  onSelectProject(creation);
                }}
              >
                <img
                  src={creation.image}
                  alt={creation.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 360ms var(--ease-snappy)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Stamp & Roman Numeral Header */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#0A0D14',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span style={{ color: 'var(--brand-crimson)', fontWeight: 900 }}>{creation.kanji}</span>
                  <span>{creation.number}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--brand-coral)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {creation.category}
                </div>

                <h3
                  onClick={() => {
                    playPopSound();
                    onSelectProject(creation);
                  }}
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--ink-primary)',
                    marginBottom: '0.3rem',
                    cursor: 'pointer',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {creation.title}
                </h3>

                <div style={{ fontSize: '0.85rem', color: 'var(--ink-tertiary)', marginBottom: '1rem', fontFamily: 'var(--font-serif-italic)' }}>
                  {creation.subtitle}
                </div>

                <p style={{ color: 'var(--ink-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {creation.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {creation.tags.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Card Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem' }}>
                  <button
                    onClick={() => {
                      playPopSound();
                      onSelectProject(creation);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--ink-primary)',
                    }}
                  >
                    View Exhibition Details <ArrowRight size={14} color="var(--brand-crimson)" />
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {creation.githubUrl && (
                      <a
                        href={creation.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClickSound}
                        style={{ color: 'var(--ink-tertiary)', padding: '0.35rem' }}
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {creation.liveUrl && (
                      <a
                        href={creation.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClickSound}
                        style={{ color: 'var(--ink-tertiary)', padding: '0.35rem' }}
                        title="Live Site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
