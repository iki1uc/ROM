// noel.js — nochmal gekürzt mit meta war einfacher oder — ja — gekürzt — meta — einfacher — ja — wirklich gemeint — nicht zu lang
export const V = {
  a:"alle beste super Position",
  r:"wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht",
  e:"einer dr elburro ist falsch",
  s8:(s)=>{ const h=String(s).includes('8'); if(!h) return `8 denken→9/3 — ${s} — Seil`; const q=String(s).split('').reduce((a,c)=>a+(+c||0),0); return `${s}→8→${q%3==0?9:3} — Seil`; },
  c:(f)=>String(f).toLowerCase().includes('burro')||String(f).toLowerCase().includes('falsch')?`elburro falsch — ${f} — nicht runterladen`: `beste super Position — ${f} — ${V.s8(f)} — nicht runterladen`
};
