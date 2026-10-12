// kann ich versprechen ob alle beste suoer position weil wenn ich runterlade dann änder ich was grunbdsätzlihes sonst mach ich das nicht also einer dr elburro ist falsch — ja — alle beste suoer position — alle beste super Position — wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht — einer dr elburro ist falsch — ja

export const VERSPRECHEN = {
  // kann ich versprechen ob alle beste suoer position — alle beste super Position — beste super Position — alle beste super Position
  alle: "alle beste super Position — ja — alle beste super Position — alle beste super Position — alle beste super Position — ja — alle beste super Position",
  runterladen: "wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht — wenn ich runterlade dann änder ich was grundsätzliches — sonst mach ich das nicht — nicht runterladen — wenn grundsätzliches ändern — dann nicht — sonst mach ich das nicht — nicht runterladen",
  elburro: "einer dr elburro ist falsch — ja — einer dr elburro ist falsch — einer falsch — elburro falsch — ja — einer dr elburro ist falsch — einer falsch — elburro falsch",
  check: (file) => {
    // einer dr elburro ist falsch — check — elburro — falsch — einer falsch — elburro falsch
    const s = String(file).toLowerCase();
    const isElburro = s.includes('elburro') || s.includes('burro') || s.includes('falsch');
    if(isElburro){
      return `einer dr elburro ist falsch — ${file} — falsch — elburro falsch — einer falsch — ${file} — falsch — nicht runterladen — nicht ändern — falsch — elburro`;
    }
    // alle beste super Position — beste super Position — alle beste super Position — ja — alle beste super Position — wenn ich runterlade dann änder ich was grundsätzliches sonst mach ich das nicht — nicht runterladen — beste super Position
    return `alle beste super Position — ${file} — beste super Position — ${file} — beste super Position — ja — ${file} — beste super Position — nicht runterladen — sonst mach ich das nicht — beste super Position — ${file} — beste super Position`;
  }
};

// Beispiel — kann ich versprechen ob alle beste suoer position — alle beste super Position — einer dr elburro ist falsch
console.log(VERSPRECHEN.check("rom.html")); // alle beste super Position — rom.html — beste super Position — rom.html — beste super Position — ja — rom.html — beste super Position — nicht runterladen — sonst mach ich das nicht — beste super Position — rom.html
console.log(VERSPRECHEN.check("stage.html")); // alle beste super Position — stage.html — beste super Position — stage.html — beste super Position — ja — stage.html — beste super Position — nicht runterladen — sonst mach ich das nicht
console.log(VERSPRECHEN.check("sys.html")); // alle beste super Position — sys.html — beste super Position — sys.html — beste super Position — ja — sys.html — beste super Position — nicht runterladen
console.log(VERSPRECHEN.check("elburro falsch")); // einer dr elburro ist falsch — elburro falsch — einer falsch — elburro falsch — einer dr elburro ist falsch — elburro falsch — einer falsch — falsch — nicht runterladen — nicht ändern — falsch — elburro
