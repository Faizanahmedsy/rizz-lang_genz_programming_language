function transpileGenZ(code) {
  let jsCode = code;

  // Remove type annotations and handle variable declarations
  jsCode = jsCode.replace(
    /vibe\s+(\w+)\s+(?:num|txt|vibeCheck|isCool)\s*=\s*([^;\n]+)/g,
    "let $1 = $2;"
  );

  // Handle basic variable declarations
  jsCode = jsCode.replace(/vibe\s+(\w+)\s*=\s*([^;\n]+)/g, "let $1 = $2;");

  // Handle function declarations
  jsCode = jsCode.replace(
    /drip\s+(\w+)\s*\(([^)]*)\)\s*(?:string)?\s*{/g,
    function (_, name, params) {
      // Clean up parameter types
      const cleanParams = params.replace(/(\w+)\s+string/g, "$1");
      return `function ${name}(${cleanParams}) {`;
    }
  );

  // Handle chillFactor (const) declarations
  jsCode = jsCode.replace(
    /chillFactor\s+(\w+)\s+(?:value)?\s*=\s*([^;\n]+)/g,
    "const $1 = $2;"
  );

  // Handle for loops (grind)
  jsCode = jsCode.replace(
    /grind\s+(\w+)\s*:=\s*([^;]+);\s*([^;]+);\s*([^{]+)\s*{/g,
    "for(let $1 = $2; $3; $4) {"
  );

  // Handle if statements properly
  jsCode = jsCode.replace(/infiniteAura\s+([^{]+)\s*{/g, "if ($1) {");
  jsCode = jsCode.replace(/noCap\s+([^{]+)\s*{/g, "if ($1) {");
  jsCode = jsCode.replace(/lowKey\s+([^{]+)\s*{/g, "else if ($1) {");
  jsCode = jsCode.replace(/nahBro\s*{/g, "else {");

  // Handle try-catch
  jsCode = jsCode.replace(/sus\s*{/g, "try {");
  jsCode = jsCode.replace(/caughtIn4K\s*{/g, "catch {");

  // Handle console.log
  jsCode = jsCode.replace(/spill\((.*?)\)/g, "console.log($1)");

  // Handle infiniteAura with power assignment
  jsCode = jsCode.replace(
    /infiniteAura\s+(\w+)\s+(\w+)\s*=\s*([^;\n]+)/g,
    "if ($1) { let $2 = $3; }"
  );

  // Clean up multiple semicolons and spacing
  jsCode = jsCode.replace(/;;+/g, ";");
  jsCode = jsCode.replace(/\s+;/g, ";");
  jsCode = jsCode.replace(/;\s+/g, ";\n");

  // Add missing semicolons
  jsCode = jsCode.replace(/}(?!\s*(?:else|catch|;|$))/g, "};");

  // Clean up extra whitespace
  jsCode = jsCode.replace(/\n\s*\n+/g, "\n\n");

  return jsCode;
}

module.exports = transpileGenZ;
