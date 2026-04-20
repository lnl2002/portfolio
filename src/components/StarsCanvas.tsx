"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number; dir: number; dpr: number };
type Shoot = { x: number; y: number; vx: number; vy: number; life: number; max: number };

export function StarsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    const shooting: Shoot[] = [];
    let running = true;
    let raf = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.floor((window.innerWidth * window.innerHeight) / 3200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        tw: Math.random() * 0.02 + 0.005,
        dir: Math.random() > 0.5 ? 1 : -1,
        dpr,
      }));
    }

    function maybeShoot() {
      if (Math.random() < 0.004 && shooting.length < 2) {
        shooting.push({
          x: Math.random() * w * 0.6,
          y: Math.random() * h * 0.4,
          vx: 8 + Math.random() * 6,
          vy: 3 + Math.random() * 3,
          life: 0,
          max: 60 + Math.random() * 30,
        });
      }
    }

    function tick() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.a += s.tw * s.dir;
        if (s.a > 0.95 || s.a < 0.15) s.dir *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(220, 230, 255, ${s.a})`;
        ctx.arc(s.x, s.y, s.r * s.dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      maybeShoot();
      for (let i = shooting.length - 1; i >= 0; i--) {
        const sh = shooting[i];
        sh.life++;
        sh.x += sh.vx;
        sh.y += sh.vy;
        const trailLen = 80;
        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 10, sh.y - sh.vy * 10);
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 10, sh.y - sh.vy * 10);
        ctx.stroke();
        if (sh.life > sh.max || sh.x > w + trailLen || sh.y > h + trailLen) shooting.splice(i, 1);
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="stars" ref={ref} />;
}
