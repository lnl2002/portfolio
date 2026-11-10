export function Arrow({ width = 1.6 }: { width?: number }) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" fill="none" stroke="currentColor" strokeWidth={width} />
    </svg>
  );
}
