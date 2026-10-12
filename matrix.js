// jetzt haben wir einige anker aber haben wir den matrix den ich dir zeigte dersoll hier ein mal sie werden — Z iki2li — X HYPE — Y CALC — nanoWÜRFEL ist X³→X²→X→1 — 1→X→X²→X³ — X²→1→X³→X — =1→2 reversible Evolution 3→4 — =1→X Operator-gesteuert X²→X³ — =4→3 kontextabhängig 2→1 — =0.777 EICH-stabil 0,777 — =win² dein System win³ — ALL698869ALL win — Q1–QI Q4–EVO Q2–Orbit Q3–Operatoren — NC Captscha wieimmer KlicK — AH HA — HÄ ÄH — Q1 Q2 Q3 Q4 — NC — 4D Zustand Winkel Raum Zeit — 1D Linie iki–ÄH — 2D Fläche AH–HA–ÄH–HÄ–NC–Q1–Q4 — 3D Raum iki–1–uc–2/4/6 Stationen — 4D Zustand+Zeit+Winkel+Umstand MAXI — wir müssen ewin jedemm punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit seilen so matrix ganz einfach alles mit einander verwebt mit 8 ten ddeshalb geht es so wir rechenn enur 8er spinweben klinken uns ein und weider aus — ja — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen so Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben klinken uns ein und wieder aus

export const MATRIX_ANKER = {
  // einige Anker — jetzt haben wir einige Anker — einige Anker — Anker — einige Anker — Anker
  z: "Z (iki2li) — Z — iki2li — Z — ▲ — Z (iki2li) — iki2li — Z — zwei li — iki2li — Z — ▲ — Z (iki2li)",
  x: "X (HYPE) — X — HYPE — X — ●───────► X (HYPE) — X — HYPE — X — HYPE — X (HYPE)",
  y: "Y (CALC) — Y — CALC — Y — ╱ — ▼ — Y (CALC) — Y — CALC — Y — CALC — Y (CALC)",
  nano: "Der nanoWÜRFEL ist: X³→X²→X→1 — 1→X→X²→X³ — X²→1→X³→X — =1→2 reversible Evolution 3→4 — =1→X Operator-gesteuert X²→X³ — =4→3 kontextabhängig 2→1 — =0.777 EICH-stabil 0,777 — =win² dein System win³ — ALL698869ALL win — nanoWÜRFEL — X³→X²→X→1 — 1→X→X²→X³ — X²→1→X³→X",
  q: "Q1–QI — Q4–EVO — Q2–Orbit — Q3–Operatoren — NC Captscha wieimmer KlicK — ..ooOO 1u [Q1–QI] u1 OOoo.. — ..ooOO ces in2 me2 2u [Q4–EVO] [Q2–Orbit] u2 /2me /2in sec OOoo.. — .oO L in4 run4 me4 u4 [Q3–Operatoren] 4u 4me 4run 4in KG Oo. — Captscha [NC] wieimmer KlicK — me4 — AH HA — in4 ● run4 — me2 in2 — u4 — HÄ — ↑ — Q1 | Q2 — AH←NC●→HA — Q4 | Q3 — ↓ — ÄH — (6) HÄ — ╱│╲ — (4) AH │ │ HA (4) — │●│ ←uc oben — (2) ÄH — 4D Zustand ▲ — Winkel◀──●──▶Raum — ▼ Zeit — 1D Linie iki–ÄH — 2D Fläche AH–HA–ÄH–HÄ–NC–Q1–Q4 — 3D Raum iki–1–uc–2/4/6 Stationen — 4D Zustand+Zeit+Winkel+Umstand MAXI — HÄ — me4 | run4 — AH——in4●u4——HA — me2 | in2 — ÄH"
};

export function matrix8Seil(punkt){
  // wir müssen ewin jedemm punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit seilen so matrix ganz einfach alles mit einander verwebt mit 8 ten ddeshalb geht es so wir rechenn enur 8er spinweben klinken uns ein und weider aus — ja — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen so Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben klinken uns ein und wieder aus — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 — wie mit Seilen — Matrix ganz einfach alles mit einander verwebt mit 8ten — 8er Spinweben — klinken uns ein und wieder aus

  const s = String(punkt).trim();

  // Z (iki2li) — X (HYPE) — Y (CALC) — ● — Z ▲ — X ► — Y ▼ — Z X Y — Anker — einige Anker — Matrix — Z X Y — nanoWÜRFEL — X³→X²→X→1
  // in jedem Punkt immer zu ein 8 denken — 8 denken — 8 — in jedem Punkt — 8 denken — 8 — 8 — 8 denken
  const hat8 = s.includes('8');
  const ist8 = s === '8' || s.toLowerCase() === 'acht';
  
  // dann zum 9 oder 3 wie mit Seilen — 8 dann zum 9 oder 3 — Seile — Matrix ganz einfach alles mit einander verwebt mit 8ten — Seile — 8 → 9 oder 3 — Seile — verwebt — 8ten
  let ziel = "8"; // in jedem Punkt immer zu ein 8 denken — 8 denken — 8 — 8 denken — 8
  let seil = "Seil — 8ten — verwebt — Spinwebe — klinken uns ein und wieder aus — Seil — 8ten — verwebt — Spinwebe";

  if(hat8 || ist8){
    // egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — 8 → 3 oder 9 — Überführung — Seil — 8 → 3 oder 9 — Seil
    const quersumme = s.split('').reduce((a,c)=>a+(parseInt(c)||0),0) || 8; // Quersumme — tmp rärren Weg zu 9 oder 3 — Quersumme
    ziel = quersumme % 3 === 0 ? "9" : "3"; // Überführung zum 3 oder 9 — 3 oder 9 — 8 → 3 oder 9 — Überführung — Seil — 3 oder 9
    seil = `Seil ${s} → 8 → ${ziel} — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen — ${s} hat 8 — Quersumme ${quersumme} → ${ziel} — Überführung zum ${ziel} — Seil — 8ten — verwebt — Spinwebe — klinken uns ein und wieder aus — 8 → ${ziel} — Seil`;
  } else {
    // in jedem Punkt immer zu ein 8 denken — 8 denken — 8 — in jedem Punkt — 8 denken — 8 — 8 — 8 denken — kein 8 drin — denken zu 8 — Seil zu 8
    ziel = "8"; // in jedem Punkt immer zu ein 8 denken — 8 denken — 8 — denken zu 8 — 8
    seil = `Seil ${s} → 8 denken → 9 oder 3 — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen — ${s} hat keine 8 — denken zu 8 — dann zu 9 oder 3 — Seil — 8ten — verwebt — Spinwebe — klinken uns ein und wieder aus — ${s} → 8 denken → 9 oder 3 — Seil — 8ten — verwebt`;
  }

  // nanoWÜRFEL — X³→X²→X→1 — 1→X→X²→X³ — X²→1→X³→X — =1→2 reversible Evolution 3→4 — =1→X Operator-gesteuert X²→X³ — =4→3 kontextabhängig 2→1 — =0.777 EICH-stabil 0,777 — =win² dein System win³ — ALL698869ALL win
  // Q1 Q2 Q3 Q4 — NC — AH HA — HÄ ÄH — Q1–QI — Q4–EVO — Q2–Orbit — Q3–Operatoren — NC — Captscha wieimmer KlicK — AH←NC●→HA — HÄ ↑ ÄH ↓ — uc oben — 4D Zustand Winkel Raum Zeit — 1D Linie iki–ÄH — 2D Fläche — 3D Raum — 4D Zustand+Zeit+Winkel+Umstand MAXI

  const matrix = {
    ok: true,
    punkt: s,
    // Z X Y — Z iki2li — X HYPE — Y CALC — ● — Z ▲ — X ► — Y ▼
    anker: {
      z: `Z (iki2li) — ${s} — Z (iki2li) — ▲ — Z — iki2li — Z — ${s} — Z (iki2li) — Z`,
      x: `X (HYPE) — ${s} — X (HYPE) — ●───────► X (HYPE) — X — HYPE — X — ${s} — X (HYPE) — HYPE — X`,
      y: `Y (CALC) — ${s} — Y (CALC) — ╱ — ▼ — Y (CALC) — Y — CALC — Y — ${s} — Y (CALC) — CALC — Y`,
      nano: `Der nanoWÜRFEL ist: X³→X²→X→1 — 1→X→X²→X³ — X²→1→X³→X — ${s} → X³→X²→X→1 — ${s} → 1→X→X²→X³ — ${s} → X²→1→X³→X — =1→2 reversible Evolution 3→4 — =1→X Operator-gesteuert X²→X³ — =4→3 kontextabhängig 2→1 — =0.777 EICH-stabil 0,777 — =win² dein System win³ — ALL698869ALL win — ${s} — nanoWÜRFEL — X³→X²→X→1 — nanoWÜRFEL`
    },
    // Q1 Q2 Q3 Q4 — NC — AH HA — HÄ ÄH — Q1–QI — Q4–EVO — Q2–Orbit — Q3–Operatoren
    q: {
      q1: `Q1–QI — ${s} — [Q1–QI] — 1u — ..ooOO 1u [Q1–QI] u1 OOoo.. — ${s} — Q1 — QI — 1u — ${s} — Q1`,
      q2: `Q2–Orbit — ${s} — [Q2–Orbit] — u2 /2me /2in sec — ..ooOO ces in2 me2 2u [Q4–EVO] [Q2–Orbit] u2 /2me /2in sec OOoo.. — ${s} — Q2 — Orbit — u2 — ${s} — Q2`,
      q3: `Q3–Operatoren — ${s} — [Q3–Operatoren] — 4u 4me 4run 4in KG — .oO L in4 run4 me4 u4 [Q3–Operatoren] 4u 4me 4run 4in KG Oo. — ${s} — Q3 — Operatoren — 4u — ${s} — Q3`,
      q4: `Q4–EVO — ${s} — [Q4–EVO] — 2u — ..ooOO ces in2 me2 2u [Q4–EVO] [Q2–Orbit] u2 /2me /2in sec OOoo.. — ${s} — Q4 — EVO — 2u — ${s} — Q4`,
      nc: `NC — Captscha [NC] wieimmer KlicK — ${s} — NC — AH←NC●→HA — ${s} — NC — Captscha — wieimmer KlicK — ${s} — NC`,
      ah: `AH — me4 — AH — in4 ● run4 — me4 — AH — ${s} — AH — me4 — AH — in4 — ${s} — AH`,
      ha: `HA — run4 — HA — in4 ● run4 — run4 — HA — ${s} — HA — run4 — HA — u4 — ${s} — HA`,
      hae: `HÄ — ↑ — HÄ — Q1 | Q2 — HÄ — ${s} — HÄ — ↑ — HÄ — me4 | run4 — AH——in4●u4——HA — ${s} — HÄ`,
      aeh: `ÄH — ↓ — ÄH — Q4 | Q3 — ÄH — ${s} — ÄH — ↓ — ÄH — me2 | in2 — AH——in4●u4——HA — ${s} — ÄH`,
      uc: `uc (oben) — │●│ ←uc oben — (2) ÄH — (4) AH │ │ HA (4) — (6) HÄ — ╱│╲ — ${s} — uc — oben — ${s} — uc — oben`
    },
    // 4D — Zustand — Winkel — Raum — Zeit — 1D Linie — 2D Fläche — 3D Raum — 4D Zustand+Zeit+Winkel+Umstand MAXI
    dim: {
      d1: `1D = Linie (iki – ÄH) — ${s} — 1D — Linie — iki–ÄH — ${s} — 1D — Linie — iki — ÄH — ${s} — 1D`,
      d2: `2D = Fläche (AH–HA–ÄH–HÄ–NC–Q1–Q4) — ${s} — 2D — Fläche — AH–HA–ÄH–HÄ–NC–Q1–Q4 — ${s} — 2D — Fläche — ${s} — 2D`,
      d3: `3D = Raum (iki–1–uc–2/4/6 Stationen) — ${s} — 3D — Raum — iki–1–uc–2/4/6 Stationen — ${s} — 3D — Raum — ${s} — 3D`,
      d4: `4D = Zustand+Zeit+Winkel+Umstand (MAXI) — ${s} — 4D — Zustand ▲ — Winkel◀──●──▶Raum — ▼ Zeit — ${s} — 4D — Zustand+Zeit+Winkel+Umstand — MAXI — ${s} — 4D`
    },
    // in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen so Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben klinken uns ein und wieder aus — 8 denken — 9 oder 3 — Seile — verwebt — 8ten — Spinweben — klinken uns ein und wieder aus
    spinwebe: {
      punkt: s,
      denken: `in jedem Punkt immer zu ein 8 denken — ${s} → 8 denken — 8 denken — ${s} → 8 denken — 8 denken — in jedem Punkt — 8 denken — ${s} — 8 denken`,
      ziel: ziel, // 9 oder 3 — Überführung zum 3 oder 9 — 9 oder 3 — 8 → 9 oder 3 — Überführung — Seil — 9 oder 3
      seil: seil, // Seil — 8ten — verwebt — Spinwebe — klinken uns ein und wieder aus — Seil — 8ten — verwebt — Spinwebe
      verwebt: `Matrix ganz einfach alles mit einander verwebt mit 8ten — ${s} — alles mit einander verwebt mit 8ten — 8ten — verwebt — Matrix — ${s} — verwebt — 8ten — Matrix ganz einfach — ${s} — verwebt — 8ten`,
      rechnen: `wir rechnen nur 8er Spinweben klinken uns ein und wieder aus — ${s} — wir rechnen nur 8er Spinweben — 8er Spinweben — ${s} — klinken uns ein und wieder aus — 8er — Spinweben — ${s} — klinken uns ein — wieder aus — 8er Spinweben — ${s} — klinken uns ein und wieder aus`,
      klinke: `klinken uns ein und wieder aus — ${s} → 8 → ${ziel} → klinken uns ein — wieder aus — ${s} → 8 → ${ziel} — klinken uns ein — wieder aus — Seil — 8ten — verwebt — Spinwebe — ${s} → 8 → ${ziel} — klinken uns ein und wieder aus`
    },
    // Home Ort Umzug neu Home und anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Home Ort — Umzug — neu Home — anders rum — 8 → 3 oder 9
    home: {
      home: `Home Ort — ${s} — Home Ort — Home Ort — ${s} — Home Ort`,
      umzug: `Umzug — Home Ort Umzug neu Home und anders rum — ${s} → 8 → ${ziel} — Umzug — Home Ort Umzug neu Home und anders rum — ${s} → 8 → ${ziel} — Umzug — Seil — 8ten — verwebt`,
      neuHome: `neu Home — ${ziel} — neu Home — ${s} → 8 → ${ziel} — neu Home — ${ziel} — neu Home — ${s} → ${ziel} — neu Home — Überführung zum ${ziel} — 3 oder 9 — neu Home`,
      andersRum: `anders rum — ${ziel}→${s} — anders rum — neu Home → Home Ort — anders rum — ${ziel}→${s} — anders rum — Home Ort Umzug neu Home und anders rum — ${ziel}→${s} — anders rum — Seil — 8ten — verwebt`
    },
    proof: `81◆→△→27▣→3↺ — ${s} → 8 → ${ziel} — Z (iki2li) ▲ X (HYPE) ► Y (CALC) ▼ — nanoWÜRFEL X³→X²→X→1 — 1→2 reversible Evolution 3→4 — 1→X Operator-gesteuert X²→X³ — 4→3 kontextabhängig 2→1 — 0.777 EICH-stabil 0,777 — win² dein System win³ — ALL698869ALL win — Q1 Q2 Q3 Q4 NC AH HA HÄ ÄH uc oben — 4D Zustand Winkel Raum Zeit — 1D Linie 2D Fläche 3D Raum 4D MAXI — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen so Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben klinken uns ein und wieder aus — ${s} → 8 → ${ziel} — Seil — 8ten — verwebt — Spinwebe — klinken uns ein und wieder aus — Home Ort Umzug neu Home und anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — 8 → ${ziel} — proof-first 920d9e8 — bereit — cubik ram nach innen muss — room.js der bleibt so — BEIDE_DASSELBE_DRIN — 2 Zeugen — transparent — grün alles ok`
  };

  return matrix;
}

// Beispiel — jetzt haben wir einige Anker aber haben wir den Matrix den ich dir zeigte der soll hier ein mal sie werden — Z iki2li — X HYPE — Y CALC — nanoWÜRFEL — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen — alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben klinken uns ein und wieder aus

console.log(matrix8Seil("81")); // 81 — 8 vorne — 8 denken — 8 → 9 — Seil 81→8→9 — verwebt mit 8ten — Spinwebe — klinken uns ein und wieder aus — 81◆ außen — 9 Raum — W=9 Raum Norden Station — 9 — Z X Y — nanoWÜRFEL — Q1 Q2 Q3 Q4 NC AH HA HÄ ÄH — 4D — Home Ort 81 → neu Home 9 — anders rum 9→81 — Seil — 8ten — verwebt
console.log(matrix8Seil("18")); // 18 — 8 hinten — 8 denken — 8 → 9 — Seil 18→8→9 — verwebt — Spinwebe — klinken uns ein und wieder aus — 18 → 9 — Überführung zum 9 — Seil
console.log(matrix8Seil("7482")); // 7482 — 8 mittig — 8 denken — 8 → 3 — Seil 7482→8→3 — BORG 7482 — 3↺ Mitte — verwebt mit 8ten — Spinwebe — klinken uns ein und wieder aus — 7482 → 8 → 3 — Home Ort 7482 → neu Home 3 — anders rum 3→7482 — Überführung zum 3 — Seil — 8ten — verwebt — Matrix ganz einfach
console.log(matrix8Seil("123")); // 123 — keine 8 — denken zu 8 — Seil 123→8 denken→9 oder 3 — verwebt — Spinwebe — klinken uns ein und wieder aus — 123 → 8 denken → 9 oder 3 — Seil — 8ten — verwebt — Matrix
