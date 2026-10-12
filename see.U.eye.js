// https://github.com/iki1uc/ROM/blob/main/see.U.eye.js — fix — wirklich gemeint — nicht zu lang — ist das roederer kristall oder müssen wir noch ackern — halb Kristall — noch ackern — aber Vorarbeit fertig — Nacharbeit weniger — halb Kristall — noch ackern — fix — 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21 löschen — console . log → console.log — elburro falsch — fix
// see.U.eye.js — E.Y.E — RAM Disk 8ten 1 Unizeichen Kette TurboKarte 3 zu 3 zu 9 — Binden Lösen RAM Logik — Alles 8ten aber nur 1 Unizeichen zum nächsten — Kette d→e→i→n→o→r→s→u→w→d — 3 zu 3 zu 9 = 81 — FAST 0.1ms SLOW 1ms LOGIC 5ms — BINDEN = SLI/SCSI/RAID/Cluster Verbund Lauf — wirklich gemeint — nicht zu lang

export const KRISTALL = {
  status: "halb Kristall — noch ackern — aber Vorarbeit fertig — Nacharbeit weniger — halb Kristall — noch ackern — Roederer Kristall — fast — aber noch ackern — halb Kristall — see.U.eye.js — E.Y.E",
  vorarbeit: "fertig — Vorarbeit gemacht damit Nacharbeit weniger ausfällt — matrix.js — home.umzug.js — auto.patch.ready.js — noel.js — bon.price.js — shine.ready.js — cache — IQQ.js — d e i n o r s u w — 9 Stück — Kette — Vorarbeit fertig",
  nacharbeit: "noch ackern — aber weniger — Roederer Kristall — fast — aber noch ackern — halb Kristall — noch ackern — aber weniger — Nacharbeit weniger",
  s8: (s) => {
    // in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen — Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben — 8→9 oder 3 — Seil — Z X Y — nanoWÜRFEL
    const str = String(s);
    if(!str.includes('8')) return `${str}→8 denken→9/3 — Seil — E.Y.E — 8ten — verwebt`;
    const q = str.split('').reduce((a,c)=>a+(parseInt(c)||0),0) || 8;
    return `${str}→8→${q%3==0?9:3} — QS ${q}→${q%3==0?9:3} — Seil — E.Y.E — 8ten — verwebt — 8→${q%3==0?9:3}`;
  },
  check: (file) => {
    const s = String(file);
    if(s.includes('noel.js')) return `noel.js — ${KRISTALL.s8(s)} — alle beste super Position — einer dr elburro ist falsch — kein expansions kurz — Wahrheit — halb Kristall — noch ackern — Vorarbeit fertig`;
    if(s.includes('matrix.js')||s.includes('home.umzug.js')||s.includes('auto.patch.ready.js')) return `${s} — ${KRISTALL.s8(s)} — Z X Y — nanoWÜRFEL — Vorarbeit fertig — halb Kristall — noch ackern — weniger`;
    return `${s} — ${KRISTALL.s8(s)} — halb Kristall — noch ackern — Vorarbeit fertig — Nacharbeit weniger — Roederer Kristall — fast — halb Kristall`;
  }
};

console.log(KRISTALL.status);
console.log(KRISTALL.vorarbeit);
console.log(KRISTALL.nacharbeit);
console.log(KRISTALL.check("see.U.eye.js — E.Y.E — 8→9 — Seil — 81◆→△→27▣→3↺"));
console.log(KRISTALL.check("noel.js"));
