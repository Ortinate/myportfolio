import React, { useState } from 'react';
import { Check, Send, MapPin, Clock, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import confetti from 'canvas-confetti';
import { playClickSound, playPopSound } from '../utils/audio';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    serviceType: 'Bespoke Web Experience',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Bespoke Web Experience',
    'App Development',
    'Workflow Automation',
    'Performance & SEO',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    playPopSound();
    setIsSubmitting(true);

    // Celebratory cherry blossom and gold confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.75 },
      colors: ['#E11D48', '#F43F5E', '#FBBF24', '#0A0D14', '#F472B6'],
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        serviceType: 'Bespoke Web Experience',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Decorative vertical Kanji watermark in background */}
      <div
        className="kanji-watermark"
        style={{
          position: 'absolute',
          top: '5%',
          right: '4%',
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          lineHeight: 1.1,
          color: 'rgba(225, 29, 72, 0.03)',
          fontFamily: 'serif',
          fontWeight: 900,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        一期一会
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Main Japanese Stationery Card */}
        <div className="contact-stationery-card">
          {/* Top Stamp Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '1.25rem', marginBottom: '2.25rem', flexWrap: 'wrap', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="hanko-stamp">文</span>
              <div>
                <span className="section-label" style={{ color: 'var(--brand-crimson)', fontSize: '0.75rem' }}>
                  ご相談 · Studio Inquiries
                </span>
                <div style={{ fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)', fontFamily: 'var(--font-mono)', color: 'var(--ink-tertiary)' }}>
                  ICHIGO ICHIE [ 一期一会 · Treasure Every Encounter ]
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Stationery Grid */}
          <div className="contact-grid">
            {/* Left Column: Letterhead & Direct Line */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.85rem, 4vw, 3.1rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.035em',
                  color: 'var(--ink-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '1.15rem',
                }}
              >
                Let’s make it <br />
                unforgettable<span style={{ color: 'var(--brand-coral)', fontFamily: 'var(--font-serif-italic)', textTransform: 'none', fontStyle: 'italic', fontWeight: 600 }}>.</span>
              </h2>

              <p style={{ color: 'var(--ink-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '440px' }}>
                Have an ambitious product to launch, a high-speed system to architect, or want to consult on design engineering? Send a direct dispatch.
              </p>

              {/* Studio Metadata List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                  <MapPin size={15} color="var(--brand-crimson)" style={{ flexShrink: 0 }} />
                  <span>Tarkwa, Western Region, Ghana (Global Remote)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                  <Clock size={15} color="var(--brand-crimson)" style={{ flexShrink: 0 }} />
                  <span>Replies typically dispatched within 24 hours</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem', color: 'var(--ink-secondary)' }}>
                  <Calendar size={15} color="var(--brand-crimson)" style={{ flexShrink: 0 }} />
                  <span>Tailored project sprints, full builds &amp; ongoing studio support</span>
                </div>
              </div>

              {/* Japanese Seal Social Channels */}
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Online Channels · 連絡網
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    onClick={playClickSound}
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '6px' }}
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    onClick={playClickSound}
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '6px' }}
                  >
                    <LinkedinIcon size={14} /> LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    onClick={playClickSound}
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '6px' }}
                  >
                    <TwitterIcon size={14} /> Twitter / X
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Japanese Stationery Inquiry Scroll */}
            <div className="contact-scroll-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '1px dashed var(--border-hairline)', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-primary)' }}>
                  Inquiry Scroll · 書簡
                </span>
                <span className="hanko-stamp" style={{ width: '28px', height: '28px', fontSize: '0.9rem' }}>
                  納
                </span>
              </div>

              {submitted ? (
                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '2.5rem 1.5rem', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    <Check size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065F46', marginBottom: '0.5rem' }}>
                    Dispatch Delivered! · 受理完了
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#047857', lineHeight: 1.6 }}>
                    Thank you. Your message has reached Lovey Studio. A thoughtful reply will be sent to your inbox shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Field 01: Name */}
                  <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '0.5rem' }}>
                      <span>01. YOUR NAME</span>
                      <span style={{ color: 'var(--ink-tertiary)', fontFamily: 'serif' }}>ご芳名</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kenji Tanaka or Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--bg-card)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--ink-primary)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-crimson)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-strong)')}
                    />
                  </div>

                  {/* Field 02: Email */}
                  <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '0.5rem' }}>
                      <span>02. EMAIL ADDRESS</span>
                      <span style={{ color: 'var(--ink-tertiary)', fontFamily: 'serif' }}>返信先</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--bg-card)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--ink-primary)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-crimson)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-strong)')}
                    />
                  </div>

                  {/* Field 03: Service Type Tags */}
                  <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '0.65rem' }}>
                      <span>03. INQUIRY FOCUS</span>
                      <span style={{ color: 'var(--ink-tertiary)', fontFamily: 'serif' }}>ご依頼内容</span>
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            playClickSound();
                            setFormState({ ...formState, serviceType: opt });
                          }}
                          style={{
                            padding: '0.4rem 0.8rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            border: formState.serviceType === opt ? '1.5px solid var(--brand-crimson)' : '1px solid var(--border-hairline)',
                            background: formState.serviceType === opt ? 'var(--brand-sakura)' : 'var(--bg-card)',
                            color: formState.serviceType === opt ? 'var(--brand-crimson)' : 'var(--ink-secondary)',
                            transition: 'all 140ms ease',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 04: Message */}
                  <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink-primary)', marginBottom: '0.5rem' }}>
                      <span>04. PROJECT VISION &amp; TIMELINE</span>
                      <span style={{ color: 'var(--ink-tertiary)', fontFamily: 'serif' }}>詳細</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your goals, scope, timeline, or engineering challenge..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-strong)',
                        background: 'var(--bg-card)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--ink-primary)',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--brand-crimson)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-strong)')}
                    />
                  </div>

                  {/* Dispatch Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '8px',
                      background: 'var(--ink-primary)',
                      color: 'var(--bg-card)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {isSubmitting ? (
                      <span>Dispatching Scroll...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>DISPATCH INQUIRY 送信</span>
                        <span style={{ color: 'var(--brand-crimson)', fontWeight: 800 }}>押</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Studio Colophon & Footer */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--ink-tertiary)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontWeight: 800, color: 'var(--ink-primary)' }}>Lovey.</span>
            <span>Crafted with Japanese Aesthetic Harmony · React &amp; Modern CSS.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--brand-crimson)', fontWeight: 600 }}>
              <span className="hanko-stamp" style={{ width: '22px', height: '22px', fontSize: '0.75rem', borderWidth: '1px' }}>愛</span>
              Lovey Artisan Seal
            </span>
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ color: 'var(--ink-primary)', fontWeight: 700 }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
