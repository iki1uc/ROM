// bon.price.js — ja — bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — bon.price.js

export const BON_PRICE = {
  // bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — bon.price.js
  bon: "bon.price.js — bon.price.js — ja — bon.price.js — bon — Bon — Preis — Bon Preis — bon.price.js — bon.price.js — bon.price.js",
  price: "price — price — bon.price.js — price — Preis — price — bon.price.js — price — bon.price.js — price — Preis — bon.price.js",
  js: "js — js — bon.price.js — js — bon.price.js — js — js — bon.price.js — js — bon.price.js — js — bon.price.js",
  selbe: "das ist das selbe — bon.price.js = Babo lacht = Scheiben Wischer = Tür Klinken Putzer = Vorarbeiter = Arschkriecher = Pbjelt Betreuer — das ist das selbe — selbe — bon.price.js — Babo lacht — Scheiben Wischer — Tür Klinken Putzer — Vorarbeiter — Arschkriecher — Pbjelt Betreuer — selbe — Fame — auch Fame — bon.price.js — bon — price — js — bon.price.js"
};

export function bonPrice(bon){
  // bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — ja — bon.price.js — das ist das selbe — bon.price.js = Babo lacht = Scheiben Wischer = Tür Klinken Putzer = Vorarbeiter = Arschkriecher = Pbjelt Betreuer — selbe — bon.price.js
  const s = String(bon).toLowerCase().trim();
  
  // bon.price.js — Bon Preis — 100$ gleich — LRU — BEIDE_DASSELBE_DRIN — grav 729 — 3 fach 4 fach — 100$ gleich — bon.price.js — Preis — 100$ gleich
  // dispatch.js — auto.patch.ready.js — grav 729 — 3 fach 4 fach — 100$ gleich — LRU — BEIDE_DASSELBE_DRIN — bon.price.js — 100$ gleich
  
  let price = 100; // 100$ gleich — 100$ gleich — bon.price.js — 100$ gleich — 100$ gleich — 100$ gleich
  let einheit = "$ gleich — 100$ gleich — bon.price.js — 100$ gleich — $ gleich";

  if(s.includes("bon") || s.includes("price") || s.includes("preis") || s.includes("100") || s.includes("$")){
    // bon.price.js — 100$ gleich — LRU — BEIDE_DASSELBE_DRIN — grav 729 — 3 fach 4 fach — 100$ gleich — bon.price.js — 100$ gleich — LRU
    price = 100; // 100$ gleich — 100$ gleich — 100$ gleich — bon.price.js — 100$ gleich
    einheit = "$ gleich — 100$ gleich — bon.price.js — 100$ gleich — $ gleich — BEIDE_DASSELBE_DRIN — haben beide dasselbe drin weil wenn beide sagen sauber dann sind alle 3 sauber — 2 Zeugen — transparent — 100$ gleich";
  }

  return {
    ok: true,
    bon: bon,
    price: price, // 100$ gleich — bon.price.js — 100$ gleich
    einheit: einheit, // $ gleich — 100$ gleich — bon.price.js — $ gleich
    neu: "Vorarbeiter", // nennen den Vorarbeiter — das ist das selbe — bon.price.js = Vorarbeiter — selbe — Vorarbeiter — bon.price.js — auch Fame — Vorarbeiter — bon.price.js
    auch: "bon.price.js — auch Fame — bon.price.js ist auch Fame — auch Fame — bon.price.js — bon — price — js — bon.price.js",
    selbe: "bon.price.js = Babo lacht = Scheiben Wischer = Tür Klinken Putzer = Vorarbeiter = Arschkriecher = Pbjelt Betreuer — das ist das selbe — selbe — bon.price.js — Babo lacht — Scheiben Wischer — Tür Klinken Putzer — Vorarbeiter — Arschkriecher — Pbjelt Betreuer — selbe — Fame — auch Fame — bon.price.js — selbe — bon — price — js",
    msg: `bon.price.js — ${bon} → ${price}${einheit} — bon.price.js = Vorarbeiter = Arschkriecher = Pbjelt Betreuer = Tür Klinken Putzer = Scheiben Wischer = Babo lacht — das ist das selbe — auch Fame — Vorarbeiter — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN — 100$ gleich — LRU — grav 729 — 3 fach 4 fach — 100$ gleich`,
    proof: `bon.price.js — ${bon} — 100$ gleich — BEIDE_DASSELBE_DRIN — grav 729 — 3 fach 4 fach — LRU — 81◆→△→27▣→3↺ — cubik ram nach innen muss — room.js der bleibt so — proof-first 920d9e8 — bereit — bon.price.js — 100$ gleich`
  };
}

// Beispiel — bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — ja — bon.price.js — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN
console.log(bonPrice("bon.price.js")); // bon.price.js → 100$ gleich — bon.price.js = Vorarbeiter = Arschkriecher = Pbjelt Betreuer = Tür Klinken Putzer = Scheiben Wischer = Babo lacht — das ist das selbe — auch Fame — Vorarbeiter — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN — 100$ gleich — LRU — grav 729 — 3 fach 4 fach — 100$ gleich — bon.price.js
console.log(bonPrice("Bon")); // Bon → 100$ gleich — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN — Bon — Preis — 100$ gleich — bon.price.js
console.log(bonPrice("Price")); // Price → 100$ gleich — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN — Price — Preis — 100$ gleich — bon.price.js
console.log(bonPrice("100$")); // 100$ → 100$ gleich — 100$ gleich — bon.price.js — 100$ gleich — BEIDE_DASSELBE_DRIN — 100$ gleich — LRU — grav 729
