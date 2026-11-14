import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoverState, setHoverState] = useState('default'); // 'default' | 'link' | 'card' | 'magnetic'

  useEffect(() => {
    // Only enable custom cursor on devices that support hover / fine pointers
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check what element we are hovering over
      const target = e.target;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      const card = target.closest('.card-clean, .bento-grid > div');
      const magneticBtn = target.closest('.magnetic-target');

      if (magneticBtn) {
        setHoverState('magnetic');
      } else if (interactive) {
        setHoverState('link');
      } else if (card) {
        setHoverState('card');
      } else {
        setHoverState('default');
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Smooth Lerp animation loop for the outer trailing ring
    const render = () => {
      // 0.16 interpolation factor for fluid organic lag
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId = requestAnimationFrame(render);

    // Magnetic physics for elements with `.magnetic-target`
    const magneticElements = document.querySelectorAll('.magnetic-target');
    const cleanups = [];

    magneticElements.forEach((el) => {
      const handleMagneticMove = (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.28;
        const deltaY = (e.clientY - centerY) * 0.28;

        el.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      };

      const handleMagneticLeave = () => {
        el.style.transform = `translate3d(0, 0, 0)`;
      };

      el.addEventListener('mousemove', handleMagneticMove);
      el.addEventListener('mouseleave', handleMagneticLeave);

      cleanups.push(() => {
        el.removeEventListener('mousemove', handleMagneticMove);
        el.removeEventListener('mouseleave', handleMagneticLeave);
      });
    });

    // 3D Tilt perspective effect for service and bento cards
    const tiltCards = document.querySelectorAll('.card-clean');
    tiltCards.forEach((card) => {
      const handleTiltMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      };

      const handleTiltLeave = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      };

      card.addEventListener('mousemove', handleTiltMove);
      card.addEventListener('mouseleave', handleTiltLeave);

      cleanups.push(() => {
        card.removeEventListener('mousemove', handleTiltMove);
        card.removeEventListener('mouseleave', handleTiltLeave);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${visible ? 'is-visible' : ''} ${clicked ? 'is-clicked' : ''}`}
        aria-hidden="true"
      />

      {/* Trailing Vermilion Aura Ring */}
      <div
        ref={cursorRingRef}
        className={`custom-cursor-ring ${visible ? 'is-visible' : ''} ${clicked ? 'is-clicked' : ''} is-${hoverState}`}
        aria-hidden="true"
      />
    </>
  );
}
