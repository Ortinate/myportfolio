import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playClickSound();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ position: 'relative' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '240px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
          />
          <button
            onClick={() => { playClickSound(); onClose(); }}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A0D14',
              boxShadow: 'var(--shadow-md)',
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span className="section-label">{project.category}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
              {project.timeline}
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>

          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {project.longDescription || project.description}
          </p>

          {/* Key Metrics Bento */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
            {project.metrics?.map((metric, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card-subtle)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-primary)', marginBottom: '0.3rem' }}>
                  <BarChart3 size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{metric.label}</span>
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture & Engineering Highlights */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ink-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Cpu size={16} color="var(--brand-primary)" /> Engineering Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights?.map((hl, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--ink-secondary)' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
              Technologies Deployed
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tags.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
                onClick={playClickSound}
                style={{ flex: 1, minWidth: '160px' }}
              >
                <ExternalLink size={16} /> Live Application
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                onClick={playClickSound}
                style={{ flex: 1, minWidth: '160px' }}
              >
                <GithubIcon size={16} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
