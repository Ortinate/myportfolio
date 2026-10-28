import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Staff / Lead Software Engineer & Design Technologist',
      company: 'Aether Labs & Distributed Cloud',
      period: '2024 – Present',
      location: 'San Francisco, CA (Remote)',
      description: 'Directing the architecture of next-generation distributed inference pipelines and high-speed web apps. Reduced infrastructure latency by 45% while standardizing the engineering team on a unified design token system.',
      achievements: [
        'Designed and scaled real-time DAG pipeline engine supporting 2.9M requests daily.',
        'Mentored 8 full-stack engineers and established continuous lighthouse CI regression benchmarks.',
        'Authored internal design engineering component library with zero third-party UI dependencies.',
      ],
    },
    {
      role: 'Senior Full-Stack Engineer',
      company: 'Veloce Interactive Systems',
      period: '2022 – 2024',
      location: 'New York, NY (Hybrid)',
      description: 'Built high-concurrency client dashboards and interactive WebGL canvas modules. Architected state machines and WebSocket telemetry backends handling 50k concurrent sessions.',
      achievements: [
        'Achieved sub-16ms GPU render loops on browser-based 3D simulation tools.',
        'Migrated monolithic backend into modular Go and Node.js microservices.',
        'Spearheaded automated accessibility testing ensuring 100% WCAG 2.1 compliance.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Synthetix Digital Solutions',
      period: '2020 – 2022',
      location: 'Austin, TX',
      description: 'Developed responsive web applications with React, TypeScript, and Python. Engineered data aggregation endpoints and optimized database indexing.',
      achievements: [
        'Decreased initial page load times by 68% by optimizing bundle splitting and asset caching.',
        'Implemented secure OAuth2 authentication flow with role-based access control.',
      ],
    },
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="section-label">Trajectory</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-tertiary)', fontFamily: 'var(--font-mono)' }}>
              [ 03 / Career &amp; Experience ]
            </span>
          </div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem' }}>
            Proven record of shipping impactful software.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Over 5 years of experience delivering robust digital products, leading engineering squads, and bridging the divide between systems engineering and user experience.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="card-clean"
              style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--ink-primary)', marginBottom: '0.25rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--brand-primary)' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--ink-tertiary)', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--ink-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: 'var(--bg-card-subtle)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-hairline)' }}>
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                    <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
