import React from 'react';
import { Layout, Server, Cloud, ShieldCheck, Gauge, Smartphone, Sparkles, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const domains = [
    {
      title: 'Frontend & Design Technologist',
      icon: <Layout size={20} color="var(--brand-primary)" />,
      description: 'Crafting pixel-perfect, 60fps responsive interfaces with mathematical precision and Apple-grade micro-interactions.',
      skills: ['TypeScript', 'React', 'Next.js', 'WebGL / Canvas', 'Tailwind & Modern CSS', 'Web Audio API', 'Spring Motion Physics', 'Web Workers'],
    },
    {
      title: 'Backend & High-Throughput Systems',
      icon: <Server size={20} color="#059669" />,
      description: 'Architecting resilient microservices, streaming pipelines, and low-latency databases for high concurrency.',
      skills: ['Node.js', 'Go (Golang)', 'Python', 'Redis Streams', 'PostgreSQL', 'GraphQL / gRPC', 'Kafka', 'WebSockets'],
    },
    {
      title: 'Cloud, Infrastructure & DevOps',
      icon: <Cloud size={20} color="#6366F1" />,
      description: 'Containerized deployments with automated CI/CD, edge functions, and telemetry observability.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Cloudflare Workers', 'Vercel', 'Terraform', 'CI/CD Pipelines', 'Prometheus / Grafana'],
    },
  ];

  const pillars = [
    {
      title: 'Sub-16ms Frame Budget',
      icon: <Gauge size={18} />,
      desc: 'Enforcing composite-only transforms and GPU acceleration to prevent jank under heavy computing loads.',
    },
    {
      title: 'End-to-End Type Safety',
      icon: <ShieldCheck size={18} />,
      desc: 'Shared contract schemas across API boundaries preventing runtime regressions before they reach production.',
    },
    {
      title: 'Mobile-Native Tactility',
      icon: <Smartphone size={18} />,
      desc: 'Haptic feedback, velocity-based momentum drag, and thumb-friendly interaction design on touch hardware.',
    },
    {
      title: 'Accessible & Screen-Reader Verified',
      icon: <Sparkles size={18} />,
      desc: 'Semantic HTML5 hierarchy, WCAG 2.2 AA contrast compliance, and full keyboard navigation support.',
    },
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0', background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="section-label">Capabilities</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
              [ 02 / Core Stack ]
            </span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem' }}>
            Full-Stack breadth, specialized depth.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Building production systems requires mastery across the entire spectrum, from distributed database tuning to sub-pixel typography rendering.
          </p>
        </div>

        {/* 3 Core Architecture Domains */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
          {domains.map((domain, i) => (
            <div
              key={i}
              className="card-clean"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--bg-card-subtle)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {domain.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '0.5rem' }}>
                {domain.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                {domain.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag" style={{ background: 'var(--bg-card-subtle)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Engineering Principles Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          padding: '2rem',
          background: 'var(--bg-card)',
          borderRadius: '14px',
          border: '1px solid var(--border-hairline)',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {pillars.map((pillar, pIdx) => (
            <div key={pIdx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
                {pillar.icon}
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--ink-primary)' }}>
                  {pillar.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
