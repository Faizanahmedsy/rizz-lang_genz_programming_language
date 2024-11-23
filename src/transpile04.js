const fs = require("fs");

function transpileRizz(filePath) {
  const rzCode = fs.readFileSync(filePath, "utf-8");

  let jsCode = rzCode
    // Replace "vibe" with "let"
    .replace(/\bvibe\b/g, "let")
    // Replace "drip" with "function"
    .replace(/\bdrip\b/g, "function")
    // Replace "spill" with "console.log"
    .replace(/\bspill\b/g, "console.log")
    // Replace "infiniteAura" with "if"
    .replace(/\binfiniteAura\b/g, "if")
    // Replace "lowKey" with "else if"
    .replace(/\blowKey\b/g, "else if")
    // Replace "nahBro" with "else"
    .replace(/\bnahBro\b/g, "else")
    // Replace "grind" with "for"
    .replace(/\bgrind\b/g, "for")
    // Replace "bet" with "switch"
    .replace(/\bbet\b/g, "switch")
    // Replace "=>" with "case" handling
    .replace(/(\d+)\.\.(\d+)\s*=>/g, "case $1 to $2:")
    // Handle data types (add comments for simplicity)
    .replace(/\bnum\b/g, "// number")
    .replace(/\btxt\b/g, "// string")
    .replace(/\bvibeCheck\b/g, "// boolean");

  return jsCode;
}

// Example usage:
// const transpiledCode = transpileRizz("examples/04.rz");
// fs.writeFileSync("examples/05.js", transpiledCode);
// console.log("Transpiled code saved to examples/04.js");

module.exports = transpileRizz;
