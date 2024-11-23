const fs = require("fs");
const transpileGenZ = require("./transpile");

// Function to run Gen Z slang code
function runGenZFile(filePath) {
  const slangCode = fs.readFileSync(filePath, "utf-8");
  const jsCode = transpileGenZ(slangCode);

  console.log("=== Transpiled JavaScript ===");
  console.log(jsCode);

  console.log("\n=== Program Output ===");
  eval(jsCode); // Execute the JavaScript
}

// Command-line interface
const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node src/run.js <file.gz>");
  process.exit(1);
}

runGenZFile(filePath);
