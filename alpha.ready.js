// alt wech und neu rein — alt wech — neu rein — 1,2,3,4,5,6,7,8,9,10,11,12,13 alt wech — Files Go to file t T alt wech — VORLAEUFIG alt wech — console . log alt wech — neu rein ALPHA_READY — s8 — 8→9 oder 3 — Seil — 8ten verwebt — room.js bleibt — 81◆→△→27▣→3↺

export const ALPHA_READY = {
  files: ["cache","IQQ.js","LICENSE-CLOSED.txt","README.md","bon.price.js","home.umzug.js","index.html","kommen.sehen.js","matrix.js","noel.js","rom.html","see.U.eye.js","shine.ready.js","stage.html","sys.html","alpha.ready.js"],
  status: "alpha — vorläufig — Vorarbeit fertig — halb Kristall — noch ackern — Roederer Kristall fast — alpha.ready.js",
  s8: (v) => { const s=String(v); const q=s.split('').reduce((a,c)=>a+(parseInt(c)||0),0)||8; return `${s}→8→${q%3==0?9:3} QS${q} Seil 8ten`; },
  check: (f) => `${String(f)} — ${ALPHA_READY.s8(f)} — alpha — vorläufig — closed CLOSED — halb Kristall`
};

console.log(ALPHA_READY.status);
console.log(ALPHA_READY.check("alpha.ready.js"));
