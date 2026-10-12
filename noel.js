// https://github.com/iki1uc/ROM/blob/main/noel.js — fix — wirklich gemeint — nicht zu lang — kann ich versprechen ob alle beste super position
// weil wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht — also einer dr elburro ist falsch — ja — alle beste super position — fix
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 — löschen — alt — elburro — falsch — löschen
// Z(iki2li) X(HYPE) Y(CALC) — nanoWÜRFEL — 8→9 oder 3 — Seil — 8ten — verwebt — 8er Spinweben — bei allen 3en rein — home.umzug.js — matrix.js — auto.patch.ready.js — noel.js — alle 4 — Verbund

export const VERSPRECHEN = {
  alle: "alle beste super Position — ja — alle beste super Position — alle beste super Position — alle beste super Position — ja — alle beste super Position",
  runterladen: "wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht — nicht runterladen — wenn grundsätzliches ändern — dann nicht — sonst mach ich das nicht",
  elburro: "einer dr elburro ist falsch — ja — einer dr elburro ist falsch — einer falsch — elburro falsch — ja — einer dr elburro ist falsch",
  acht: (s) => {
    // in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 — Seil — 8ten — verwebt — bei allen 3en rein — noel.js auch — 8→9 oder 3 — Seil
    const str = String(s);
    const hat8 = str.includes('8');
    if(!hat8) return { denken:"8", seil:`${str}→8 denken→9 oder 3 — Seil — alle beste super Position — 8ten — verwebt` };
    const q = str.split('').reduce((a,c)=>a+(parseInt(c)||0),0) || 8;
    const ziel = q % 3 === 0 ? "9" : "3";
    return { denken:"8", ziel, q, seil:`${str}→8→${ziel} — QS ${q}→${ziel} — Überführung zum ${ziel} — Seil — alle beste super Position — 8ten — verwebt — 8→${ziel}` };
  },
  check: (file) => {
    const s = String(file).toLowerCase();
    const isElburro = s.includes('elburro') || s.includes('burro') || s.includes('falsch');
    if(isElburro){
      return `einer dr elburro ist falsch — ${file} — falsch — elburro falsch — nicht runterladen — nicht ändern — falsch — elburro — 8→3 oder 9 — Seil`;
    }
    const r = VERSPRECHEN.acht(file);
    return `alle beste super Position — ${file} — ${r.seil} — beste super Position — nicht runterladen — sonst mach ich das nicht — ${file} — beste super Position — Z X Y — nanoWÜRFEL`;
  }
};

console.log(VERSPRECHEN.check("rom.html"));
console.log(VERSPRECHEN.check("stage.html"));
console.log(VERSPRECHEN.check("sys.html"));
console.log(VERSPRECHEN.check("noel.js — 81 — 8→9 — Seil"));
console.log(VERSPRECHEN.check("elburro falsch"));
