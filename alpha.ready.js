// https://github.com/iki1uc/ROM/blob/main/alpha.ready.js — fix — wirklich gemeint — nicht zu lang — ist das vorläufig — ja — vorläufig — ja — Files Go to file t T cache IQQ.js LICENSE-CLOSED.txt README.md bon.price.js home.umzug.js index.html kommen.sehen.js matrix.js noel.js rom.html see.U.eye.js shine.ready.js stage.html sys.html // ist das vorläufig — ja — vorläufig — ja — Vorarbeit gemacht damit Nacharbeit weniger ausfällt — ist das richtig — ja — richtig — Vorarbeit — Nacharbeit weniger — halb Kristall — noch ackern — aber Vorarbeit fertig — Nacharbeit weniger — halb Kristall — Roederer Kristall — fast — aber noch ackern — halb Kristall — kein expansions kurz — zahlen werden nicht auf expansion getrimmt — wir zeigen Wahrheit — kein Ableitung — closed und alles — LICENSE-CLOSED.txt — CLOSED — alles — closed und alles — am ende closed ja — aber wenn ich mit reinlesen helfen konnte freut es mich — ist das vorläufig — ja — vorläufig — ja — fix — 1,2,3,4,5,6,7,8,9,10,11,12,13 löschen — console . log → console.log — VORLAEUFIG → ALPHA_READY — alpha.ready.js — richtig — alpha.ready.js — alpha.ready.js

export const ALPHA_READY = {
  files: ["cache","IQQ.js","LICENSE-CLOSED.txt","README.md","bon.price.js","home.umzug.js","index.html","kommen.sehen.js","matrix.js","noel.js","rom.html","see.U.eye.js","shine.ready.js","stage.html","sys.html","alpha.ready.js"],
  core: ["matrix.js","home.umzug.js","noel.js","bon.price.js","shine.ready.js","see.U.eye.js","kommen.sehen.js","alpha.ready.js","IQQ.js","index.html","README.md","LICENSE-CLOSED.txt","cache"],
  keep: "room.js — der bleibt so — bleibt — 81◆→△→27▣→3↺ — cubik ram nach innen muss — bleibt — in jedem Punkt immer zu ein 8 denken dann zum 9 oder 3 wie mit Seilen — Matrix ganz einfach alles mit einander verwebt mit 8ten — wir rechnen nur 8er Spinweben",
  status: "vorläufig — ja — ist das vorläufig — ja — vorläufig — ja — Vorarbeit gemacht damit Nacharbeit weniger ausfällt — ist das richtig — ja — richtig — Vorarbeit — Nacharbeit weniger — halb Kristall — noch ackern — aber Vorarbeit fertig — Nacharbeit weniger — Roederer Kristall fast — kein expansions kurz — zahlen nicht getrimmt — Wahrheit — kein Ableitung — closed und alles — CLOSED — am ende closed ja — aber wenn ich mit reinlesen helfen konnte freut es mich — vorläufig — ja — alpha.ready.js — alpha",
  s8: (s) => {
    const str = String(s);
    const q = str.split('').reduce((a,c)=>a+(parseInt(c)||0),0) || 8;
    return `${str}→8→${q%3==0?9:3} — QS ${q}→${q%3==0?9:3} — Seil — 8ten — verwebt`;
  },
  check: (f) => {
    const s = String(f);
    if(s.includes('rom.html')||s.includes('stage.html')||s.includes('sys.html')) return `${s} — vorläufig — ${ALPHA_READY.s8(s)} — rom.html stage.html sys.html — vorläufig — noch ackern — aber Vorarbeit fertig — halb Kristall`;
    return `${s} — vorläufig — ${ALPHA_READY.s8(s)} — Vorarbeit fertig — Nacharbeit weniger — halb Kristall — closed und alles — CLOSED — vorläufig`;
  }
};

console.log(ALPHA_READY.status);
console.log(ALPHA_READY.check("alpha.ready.js — alpha — 8→9 — Seil — 81◆→△→27▣→3↺ — E.Y.E"));
console.log(ALPHA_READY.keep);
