/** The "Khối L" brand mark: a solid L in the current text colour and one accent square. */
export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M6 6H26V38H58V58H6Z" fill="currentColor" />
      <rect x="38" y="6" width="20" height="20" fill="#3B5BDB" />
    </svg>
  );
}
