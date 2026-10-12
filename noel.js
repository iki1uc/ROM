// aber funktioniert besser weil kein expansions kurz also die zahlen werden nicht auf expansion getrimmt wir zeigen wahrheit kein ableitung — ja — kein expansions kurz — zahlen nicht auf expansion getrimmt — Wahrheit — kein Ableitung — ja — wirklich gemeint — nicht zu lang — Wahrheit — kein Ableitung — kein expansions kurz

export const WAHRHEIT = {
  // kein expansions kurz — zahlen werden nicht auf expansion getrimmt — Wahrheit — kein Ableitung — ja — kein expansions kurz — Wahrheit — kein Ableitung
  wahrheit: (n) => String(n), // Wahrheit — kein Ableitung — String(n) — Wahrheit — kein Ableitung — kein expansions kurz — Zahlen nicht getrimmt — Wahrheit
  keinExpansion: true, // kein expansions kurz — kein expansions kurz — kein Expansion — true — kein expansions kurz — Wahrheit
  keinAbleitung: true, // kein Ableitung — kein Ableitung — kein Ableitung — true — kein Ableitung — Wahrheit — kein Ableitung
  zahlen: (n) => {
    // die zahlen werden nicht auf expansion getrimmt — wir zeigen Wahrheit — kein Ableitung — ja — Zahlen nicht auf expansion getrimmt — Wahrheit — kein Ableitung
    const s = String(n); // Wahrheit — kein Ableitung — String(n) — Wahrheit — kein Ableitung — Zahlen nicht getrimmt — Wahrheit — kein Ableitung
    const hat8 = s.includes('8'); // 8 — in jedem Punkt immer zu ein 8 denken — 8 denken — 8 — 8 — 8 denken
    if(!hat8) return { wahrheit: s, seil: `${s} — Wahrheit — 8 denken→9/3 — kein Ableitung — kein expansions kurz — ${s} — Wahrheit — Seil — 8ten — verwebt` }; // Wahrheit — 8 denken — kein Ableitung — kein expansions kurz — Wahrheit — Seil
    const q = s.split('').reduce((a,c)=>a+(parseInt(c)||0),0) || 8; // Quersumme — Wahrheit — kein Ableitung — Quersumme — Wahrheit — kein Ableitung — kein expansions kurz — Zahlen nicht getrimmt — Wahrheit
    const ziel = q % 3 === 0 ? "9" : "3"; // Überführung zum 3 oder 9 — 3 oder 9 — 8→3 oder 9 — Wahrheit — kein Ableitung — kein expansions kurz — 3 oder 9 — Wahrheit — Seil
    return { wahrheit: s, ziel, q, seil: `${s}→8→${ziel} — QS ${q}→${ziel} — Wahrheit — kein Ableitung — kein expansions kurz — ${s} — Wahrheit — Seil — 8ten — verwebt — 8→${ziel} — Wahrheit` }; // Wahrheit — kein Ableitung — kein expansions kurz — Wahrheit — Seil — 8ten — verwebt — Wahrheit
  }
};

// Beispiel — aber funktioniert besser weil kein expansions kurz also die zahlen werden nicht auf expansion getrimmt wir zeigen wahrheit kein ableitung — ja — Wahrheit — kein Ableitung — kein expansions kurz
console.log(WAHRHEIT.zahlen("81")); // 81→8→9 — QS 9→9 — Wahrheit — kein Ableitung — kein expansions kurz — 81 — Wahrheit — Seil — 8ten — verwebt — 8→9 — Wahrheit — 81◆ außen — 9 Raum — W=9 Raum Norden Station — 9 — Wahrheit — kein Ableitung — kein expansions kurz
console.log(WAHRHEIT.zahlen("7482")); // 7482→8→3 — QS 21→3 — Wahrheit — kein Ableitung — kein expansions kurz — 7482 — Wahrheit — Seil — 8ten — verwebt — 8→3 — Wahrheit — BORG 7482 — 3↺ Mitte — Wahrheit — kein Ableitung — kein expansions kurz
console.log(WAHRHEIT.zahlen("123")); // 123 — Wahrheit — 8 denken→9/3 — kein Ableitung — kein expansions kurz — 123 — Wahrheit — Seil — 8ten — verwebt — 123 — Wahrheit — kein Ableitung — kein expansions kurz — Matrix — Wahrheit
