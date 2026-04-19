'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

const PARTICLE_COUNT = 80;       // number of particles
const CONNECTION_DISTANCE = 140; // max px to draw a connecting line
const MOUSE_REPEL_RADIUS = 120;  // px radius of mouse influence
const MOUSE_REPEL_FORCE = 0.4;   // how strongly particles avoid cursor
const BASE_SPEED = 0.35;         // base movement speed
const GOLD = { r: 201, g: 168, b: 76 };  // #C9A84C
const WHITE = { r: 255, g: 255, b: 255 };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const particles: Particle[] = [];

    // ── Resize ──────────────────────────────────────────────────────────────
    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Mouse ────────────────────────────────────────────────────────────────
    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // ── Spawn particles ──────────────────────────────────────────────────────
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = BASE_SPEED * (0.4 + Math.random() * 0.8);
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.2 + Math.random() * 1.8,
        opacity: 0.3 + Math.random() * 0.5,
        pulseSpeed: 0.008 + Math.random() * 0.012,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // ── Draw ─────────────────────────────────────────────────────────────────
    let tick = 0;

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update + draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_REPEL_RADIUS) * MOUSE_REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity so it doesn't accelerate forever
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Clamp speed
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpd = BASE_SPEED * 2.5;
        if (spd > maxSpd) {
          p.vx = (p.vx / spd) * maxSpd;
          p.vy = (p.vy / spd) * maxSpd;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Pulse opacity
        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset);
        const alpha = p.opacity * (0.7 + 0.3 * pulse);

        // Alternate between gold and white particles
        const isGold = particles.indexOf(p) % 3 === 0;
        const col = isGold ? GOLD : WHITE;

        // Glow
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grd.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${alpha})`);
        grd.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Core dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${col.r},${col.g},${col.b},${Math.min(alpha * 1.4, 1)})`;
        ctx!.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const lineAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
            // Gold lines near mouse, white lines elsewhere
            const mdx = (a.x + b.x) / 2 - mx;
            const mdy = (a.y + b.y) / 2 - my;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            const nearMouse = mDist < 200;
            const lc = nearMouse ? GOLD : WHITE;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${lc.r},${lc.g},${lc.b},${nearMouse ? lineAlpha * 2.5 : lineAlpha})`;
            ctx!.lineWidth = nearMouse ? 0.8 : 0.5;
            ctx!.stroke();
          }
        }
      }

      // Subtle vignette overlay
      const vignette = ctx!.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(2,6,23,0.55)');
      ctx!.fillStyle = vignette;
      ctx!.fillRect(0, 0, W, H);

      tick++;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
