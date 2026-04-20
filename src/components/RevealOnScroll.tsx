"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const selectors =
      ".hero-copy, .orbit, .about-lede, .about-card, .skill-card, .mission, .project, .contact-panel";
    const els = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );

    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity .7s ease ${i * 30}ms, transform .7s cubic-bezier(.2,.8,.2,1) ${i * 30}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
