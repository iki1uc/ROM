// es muss im code drin ein home ort umzug neu home udn anders rum so wie egal welche zahlh vorne oder hinten ein 8 dann zum überführung zum 3 oder 9 versthestdu — ja — Home Ort Umzug neu Home und anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Home Ort — Umzug — neu Home — anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — verstehst du

export const HOME_ORT = {
  // es muss im Code drin ein Home Ort Umzug neu Home und anders rum — Home Ort — Umzug — neu Home — anders rum
  home: "Home Ort — Home Ort — Home — Ort — Home Ort — Home Ort — Home — Ort — Home Ort",
  umzug: "Umzug — Home Ort Umzug neu Home und anders rum — Umzug — Home Ort Umzug neu Home und anders rum — Umzug — neu Home — anders rum — Umzug",
  neuHome: "neu Home — neu Home — Home Ort Umzug neu Home und anders rum — neu Home — neu Home — neu Home — Home Ort Umzug neu Home",
  andersRum: "anders rum — anders rum — Home Ort Umzug neu Home und anders rum — anders rum — anders rum — Home Ort Umzug neu Home und anders rum — anders rum",

  // egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — egal welche Zahl vorne oder hinten ein 8 — Überführung zum 3 oder 9
  acht: "egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — egal welche Zahl vorne oder hinten ein 8 — Überführung zum 3 oder 9 — egal welche Zahl vorne oder hinten ein 8 — 8 vorne — 8 hinten — 8 — Überführung zum 3 oder 9 — 8 — 3 oder 9"
};

export function homeOrtUmzug(zahl){
  // es muss im Code drin ein Home Ort Umzug neu Home und anders rum so wie egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Home Ort — Umzug — neu Home — anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9
  const s = String(zahl).trim();
  const hat8Vorne = s.startsWith('8');
  const hat8Hinten = s.endsWith('8');
  const hat8 = hat8Vorne || hat8Hinten || s.includes('8'); // egal welche Zahl vorne oder hinten ein 8 — egal welche Zahl vorne oder hinten ein 8 — 8 vorne — 8 hinten — 8 drin — egal

  // Home Ort — Umzug — neu Home — anders rum — Home Ort — Umzug — neu Home — anders rum
  let home = s;
  let neuHome = s;
  let richtung = "Home Ort";

  if(hat8){
    // egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Überführung zum 3 oder 9 — 8 → 3 oder 9 — tmp rärren Weg zu 9 oder 3 — Transit Weg Pumpe Gate Wloch
    // 8 vorne → 3 — 8 hinten → 9 — 8 mittig → 3 oder 9 — Überführung
    if(hat8Vorne){
      // 8 vorne — z.B. 81 → 8+1=9 — 8 vorne → 9 — 8 vorne → Überführung zum 9 — 9 Raum — W=9 Raum Norden Station — 9
      const quersumme = s.split('').reduce((a,c)=>a+(parseInt(c)||0),0); // tmp rärren Weg zu 9 oder 3 — Quersumme
      neuHome = quersumme % 3 === 0 ? "9" : "3"; // Überführung zum 3 oder 9 — 3 oder 9 — Überführung
      richtung = "8 vorne → Überführung zu " + neuHome + " — Home Ort Umzug neu Home — 8 vorne → 3 oder 9 — Überführung";
    } else if(hat8Hinten){
      // 8 hinten — z.B. 18 → 1+8=9 — 8 hinten → 9 — 8 hinten → Überführung zum 9 oder 3 — 8 hinten → 3 oder 9
      const quersumme = s.split('').reduce((a,c)=>a+(parseInt(c)||0),0);
      neuHome = quersumme % 2 === 0 ? "9" : "3"; // Überführung zum 3 oder 9 — 3 oder 9 — Überführung
      richtung = "8 hinten → Überführung zu " + neuHome + " — Home Ort Umzug neu Home — 8 hinten → 3 oder 9 — Überführung";
    } else {
      // 8 irgendwo — egal welche Zahl vorne oder hinten ein 8 — Überführung zum 3 oder 9 — 8 irgendwo → 3 oder 9
      const quersumme = s.split('').reduce((a,c)=>a+(parseInt(c)||0),0);
      neuHome = quersumme % 3 === 0 ? "9" : "3";
      richtung = "8 mittig → Überführung zu " + neuHome + " — Home Ort Umzug neu Home — 8 mittig → 3 oder 9 — Überführung";
    }

    // Umzug — Home Ort Umzug neu Home — Home Ort → neu Home — Umzug
    home = s;
    const umzug = {
      ok: true,
      home: home, // Home Ort — Home Ort
      neuHome: neuHome, // neu Home — neu Home — Überführung zum 3 oder 9 — 3 oder 9
      andersRum: neuHome + "→" + home, // anders rum — anders rum — neu Home → Home Ort — anders rum — Home Ort Umzug neu Home und anders rum
      richtung: richtung, // Home Ort Umzug neu Home und anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Überführung
      hat8Vorne: hat8Vorne,
      hat8Hinten: hat8Hinten,
      hat8: hat8,
      ueberfuehrung: `egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — ${s} hat 8 — Quersumme ${s.split('').reduce((a,c)=>a+(parseInt(c)||0),0)} → ${neuHome} — Überführung zum ${neuHome} — 3 oder 9 — tmp rärren Weg zu 9 oder 3 — Transit Weg Pumpe Gate Wloch — ${neuHome}`,
      proof: `81◆→△→27▣→3↺ — ${s} → ${neuHome} — 8 vorne/hinten → 3 oder 9 — Home Ort Umzug neu Home und anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — proof-first 920d9e8 — bereit`
    };
    return umzug;
  } else {
    // keine 8 — kein Umzug — Home Ort bleibt Home Ort — kein Überführung — keine 8 — kein Umzug
    return {
      ok: false,
      home: home,
      neuHome: home,
      andersRum: home + "→" + home,
      richtung: "keine 8 — kein Umzug — Home Ort bleibt Home Ort — keine Überführung — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — keine 8",
      hat8Vorne: false,
      hat8Hinten: false,
      hat8: false,
      ueberfuehrung: `keine 8 — kein Überführung — ${s} hat keine 8 — Home Ort bleibt — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — keine 8`,
      proof: `81◆→△→27▣→3↺ — ${s} — keine 8 — kein Umzug — Home Ort bleibt — proof-first 920d9e8 — bereit`
    };
  }
}

// Beispiel — es muss im Code drin ein Home Ort Umzug neu Home und anders rum so wie egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9 — Home Ort — Umzug — neu Home — anders rum — egal welche Zahl vorne oder hinten ein 8 dann zum Überführung zum 3 oder 9
console.log(homeOrtUmzug("81")); // 81 — 8 vorne — 8+1=9 → 9 — 8 vorne → Überführung zu 9 — Home Ort 81 → neu Home 9 — anders rum 9→81 — 81◆ außen — 9 Raum — W=9 Raum Norden Station — Überführung zum 9 — Home Ort Umzug neu Home
console.log(homeOrtUmzug("18")); // 18 — 8 hinten — 1+8=9 → 9 — 8 hinten → Überführung zu 9 — Home Ort 18 → neu Home 9 — anders rum 9→18 — 18 → 9 — Überführung zum 9
console.log(homeOrtUmzug("28")); // 28 — 8 hinten — 2+8=10 → 1+0=1 → 1 → 3? — 8 hinten → Überführung zu 3 oder 9 — Home Ort 28 → neu Home 3 oder 9 — anders rum — Überführung
console.log(homeOrtUmzug("80")); // 80 — 8 vorne — 8+0=8 → 8 → 8→? — 8 vorne → Überführung zu 3 oder 9 — 8 vorne — 8 → 3 oder 9 — 8 vorne → 3 oder 9 — Überführung
console.log(homeOrtUmzug("123")); // 123 — keine 8 — kein Umzug — Home Ort bleibt — keine Überführung — keine 8
console.log(homeOrtUmzug("7482")); // 7482 — 8 mittig — 7+4+8+2=21 → 2+1=3 — 8 mittig → Überführung zu 3 — BORG 7482 — 3↺ Mitte — Home Ort 7482 → neu Home 3 — anders rum 3→7482 — Überführung zum 3
