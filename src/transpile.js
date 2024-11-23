function transpileGenZ(code) {
  const slangToJs = {
    vibe: "let",
    drip: "function",
    noCap: "if",
    lowKey: "else if",
    nahBro: "else",
    spill: "console.log",
    grind: "for",
  };

  let jsCode = code;
  for (const [slang, js] of Object.entries(slangToJs)) {
    const regex = new RegExp(`\\b${slang}\\b`, "g");
    jsCode = jsCode.replace(regex, js);
  }
  return jsCode;
}

module.exports = transpileGenZ;
