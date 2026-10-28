import React, { useEffect, useRef } from 'react';

export default function SakuraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const petals = [];
    const basePetalCount = 42;
    const maxPetals = 75;

    // Mouse state for interactive wind & swirl physics
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      vx: 0,
      vy: 0,
      active: false,
      radius: 150,
    };

    class Petal {
      constructor(spawnX, spawnY, burst = false) {
        this.reset(true, spawnX, spawnY, burst);
      }

      reset(init = false, spawnX, spawnY, burst = false) {
        this.baseX = spawnX !== undefined ? spawnX : Math.random() * width;
        this.x = this.baseX;
        this.y = spawnY !== undefined ? spawnY : init ? Math.random() * height : -24;
        this.size = Math.random() * 8 + 7.5;
        this.speedX = Math.random() * 1.3 - 0.45;
        this.speedY = Math.random() * 1.15 + 0.75;
        // Extra velocity from mouse breeze or burst
        this.vx = burst ? (Math.random() - 0.5) * 4.5 + mouse.vx * 0.25 : 0;
        this.vy = burst ? (Math.random() - 0.7) * 3.5 + mouse.vy * 0.2 : 0;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.extraSpin = burst ? (Math.random() - 0.5) * 0.14 : 0;
        this.oscillationSpeed = Math.random() * 0.02 + 0.012;
        this.oscillationDistance = Math.random() * 26 + 10;
        this.time = Math.random() * 100;
        this.opacity = Math.random() * 0.45 + 0.38;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.012;
        this.extraFlip = burst ? (Math.random() - 0.5) * 0.12 : 0;
        this.isBurst = burst;
      }

      update() {
        this.time += this.oscillationSpeed;

        // Interactive cursor wind & repulsion
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = mouse.radius;

          if (distSq < maxDist * maxDist && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist);
            const nx = dx / dist;
            const ny = dy / dist;

            // Gentle outward push + carry along with cursor breeze velocity
            this.vx += (nx * 0.55 + mouse.vx * 0.045) * force;
            this.vy += (ny * 0.45 + mouse.vy * 0.04 - 0.12) * force;

            // Flutter & spin faster when disturbed by the cursor
            this.extraSpin += (nx * 0.012) * force;
            this.extraFlip += 0.018 * force;
          }
        }

        // Apply air resistance to breeze velocity
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.extraSpin *= 0.95;
        this.extraFlip *= 0.95;

        this.baseX += this.speedX + this.vx;
        this.x = this.baseX + Math.sin(this.time) * this.oscillationDistance;
        this.y += this.speedY + this.vy;

        this.rotation += this.rotationSpeed + this.extraSpin;
        this.flip += this.flipSpeed + this.extraFlip;

        // Recycle or remove off-screen petals
        if (this.y > height + 30 || this.x > width + 50 || this.x < -50 || this.y < -80) {
          if (this.isBurst && petals.length > basePetalCount) {
            return false; // signal removal of temporary burst petal
          }
          this.reset(false);
        }
        return true;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.scale(1, Math.cos(this.flip));

        ctx.fillStyle = `rgba(244, 114, 182, ${this.opacity})`;
        ctx.beginPath();
        // Delicate curved sakura petal shape with notched tip
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size * 0.5, -this.size * 0.5, this.size, -this.size * 0.25, this.size, 0);
        ctx.bezierCurveTo(this.size, this.size * 0.5, this.size * 0.5, this.size, 0, this.size);
        ctx.bezierCurveTo(-this.size * 0.35, this.size * 0.5, -this.size * 0.25, this.size * 0.25, 0, 0);
        ctx.fill();

        // Inner petal highlight gradient
        ctx.fillStyle = `rgba(251, 207, 232, ${this.opacity * 0.65})`;
        ctx.beginPath();
        ctx.arc(this.size * 0.4, this.size * 0.2, this.size * 0.25, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    for (let i = 0; i < basePetalCount; i++) {
      petals.push(new Petal());
    }

    let lastSpawnTime = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if cursor is inside the Hero canvas bounds
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        if (mouse.active && mouse.prevX !== -9999) {
          mouse.vx = Math.max(-18, Math.min(18, x - mouse.prevX));
          mouse.vy = Math.max(-18, Math.min(18, y - mouse.prevY));
        }
        mouse.prevX = x;
        mouse.prevY = y;
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;

        // Spawn a delicate breeze petal when sweeping the cursor briskly
        const speed = Math.hypot(mouse.vx, mouse.vy);
        const now = performance.now();
        if (speed > 9 && petals.length < maxPetals && now - lastSpawnTime > 90) {
          lastSpawnTime = now;
          petals.push(
            new Petal(
              x + (Math.random() - 0.5) * 24,
              y + (Math.random() - 0.5) * 24,
              true
            )
          );
        }
      } else {
        mouse.active = false;
      }
    };

    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        // Burst 4 petals on click inside hero
        for (let i = 0; i < 4; i++) {
          if (petals.length < maxPetals) {
            petals.push(
              new Petal(
                x + (Math.random() - 0.5) * 20,
                y + (Math.random() - 0.5) * 20,
                true
              )
            );
          }
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Decay mouse velocity smoothly when cursor stops moving
      mouse.vx *= 0.85;
      mouse.vy *= 0.85;

      for (let i = petals.length - 1; i >= 0; i--) {
        const alive = petals[i].update();
        if (!alive) {
          petals.splice(i, 1);
        } else {
          petals[i].draw();
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}
