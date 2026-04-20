"use client";

import { useEffect } from "react";

const SELECTORS =
  ".hero-copy, .orbit, .about-lede, .about-card, .skill-card, .mission, .project, .contact-panel";

export function RevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    if (!els.length) return;

    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity .7s ease ${i * 30}ms, transform .7s cubic-bezier(.2,.8,.2,1) ${i * 30}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Safety net: if anything's still hidden after 2.5s, reveal it so
    // screenshots / slow browsers / print don't render blank sections.
    const timer = window.setTimeout(() => {
      els.forEach((el) => {
        if (el.style.opacity === "0") reveal(el);
      });
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
