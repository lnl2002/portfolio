"use client";

type Props = { label: string; title: string };

export function ThemeToggle({ label, title }: Props) {
  function onClick(e: React.MouseEvent) {
    const root = document.documentElement;
    const current = root.dataset.theme === "light" ? "light" : "dark";
    const next: "dark" | "light" = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
      document.body.classList.remove("theme-flash");
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.body.offsetWidth;
      document.body.classList.add("theme-flash");
      window.setTimeout(() => document.body.classList.remove("theme-flash"), 900);
    }
  }

  return (
    <button
      type="button"
      id="themeToggle"
      className="theme-toggle"
      aria-label={label}
      title={title}
      onClick={onClick}
    >
      <span className="tt-track">
        <span className="tt-sun" aria-hidden>
          <svg viewBox="0 0 24 24" width="14" height="14">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M12 3v2" />
              <path d="M12 19v2" />
              <path d="M3 12h2" />
              <path d="M19 12h2" />
              <path d="M5.6 5.6l1.4 1.4" />
              <path d="M17 17l1.4 1.4" />
              <path d="M5.6 18.4l1.4-1.4" />
              <path d="M17 7l1.4-1.4" />
            </g>
          </svg>
        </span>
        <span className="tt-moon" aria-hidden>
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor" />
          </svg>
        </span>
        <span className="tt-thumb" aria-hidden />
      </span>
    </button>
  );
}
