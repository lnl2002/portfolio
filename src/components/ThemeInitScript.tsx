const INIT = `(function(){try{var d=document.documentElement;var ls=window.localStorage;d.dataset.theme=ls.getItem('theme')||'dark';d.dataset.accent=ls.getItem('accent')||'sky';d.dataset.density=ls.getItem('density')||'cozy';d.dataset.grid=ls.getItem('grid')||'on';d.lang=location.pathname.indexOf('/vi')===0?'vi':'en';}catch(e){var d=document.documentElement;d.dataset.theme='dark';d.dataset.accent='sky';d.dataset.density='cozy';d.dataset.grid='on';}})();`;

export function ThemeInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: INIT }} />;
}
