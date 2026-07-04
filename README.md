# ROM — Axiomatische Hardware- und Speicher-Ableitung

ROM ist ein abgeleitetes Hardware- und Speichermodul. Es erzeugt keine eigene Leistung,
sondern übernimmt Power aus drei gegebenen Axiomen:

1. RAM
2. CPU
3. GPU

Diese drei Module gelten im System als axiome Grundwerte.
Wenn alle drei aktiv sind, kann ROM daraus seine Leistung ableiten
und als BENCH-Wert weiterreichen.

ROM kombiniert dabei zwei Ebenen:

- **Hardware-Ableitung** (neuere, funktionalere Ebene)
- **Speicher-Ableitung** (ältere, grundlegende Ebene)

Die Hardware-Ableitung ist maßgeblich und überschreibt die ältere Speicher-Ableitung,
bleibt aber vollständig kompatibel.

## Axiomatische Grundlage

RAM, CPU und GPU liefern jeweils vier Wertigkeiten:

- RAM → BLOCK / CACHE / FLOW / STATE
- CPU → LOAD / CYCLE / ENERGY / STATE
- GPU → FRONT / DEPTH / FLOW / CORE

ROM übernimmt diese Wertigkeiten nicht direkt,
sondern bildet daraus eine neutrale Hardware-Speicher-Ableitung.

## ROM-Wertigkeiten

ROM erzeugt vier abgeleitete Werte:

1. READ   – Lesefähigkeit
2. WRITE  – Schreibfähigkeit
3. HOLD   – Stabilität / Halt
4. BENCH  – Gesamtleistung

BENCH ist der kombinierte Leistungswert aus RAM + CPU + GPU.

## Funktionen

ROM führt folgende Aufgaben aus:

- READ-Control  – Zugriff auf gespeicherte Werte
- WRITE-Control – Schreiben von abgeleiteten Werten
- HOLD-Control  – Stabilisierung der Hardware-Ableitung
- BENCH-Control – Berechnung der Gesamtleistung

## Ressourcen

ROM nutzt geschätzte Systemwerte:

- ROM-Größe: 8192 MB
- ROM-Speed: 4 Gbps
- CORE-Level: 2
- STEP_A: Read-Schritt
- STEP_B: Write-Schritt

## Systemwerte

ROM übernimmt globale Werte:

- GATE: GATE_11
- EICH: EICH_03
- KETTE: KETTE_44
- CLUSTER: 44~44(1)

## Modi

ROM unterstützt zwei Betriebsmodi:

- 1all  – Einzelzyklus
- 4all  – Vierfach-Zyklus

Beide Modi steuern die Geschwindigkeit der Ableitung.

## Dateien

index.html
----------
Die Oberfläche besteht aus vier Feldern:

- READ
- WRITE
- HOLD
- BENCH

Alle Felder aktualisieren synchron.

rom.js
------
rom.js steuert:

- Ableitung aus RAM/CPU/GGPU
- ROM-Wertigkeiten
- BENCH-Berechnung
- Modi (1all/4all)
- Systemwerte

## RAW-Abbildung

ROM kann als RAW-Objekt dargestellt werden:

ROM = {
  read:  <wert>,
  write: <wert>,
  hold:  <wert>,
  bench: <wert>
}

Alle Werte stammen aus der Interaktion der drei Axiome:
RAM, CPU, GPU.
