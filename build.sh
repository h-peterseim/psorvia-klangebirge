#!/bin/sh
# builds klangebirge.js (classic script) from klangebirge.esm.js
cd "$(dirname "$0")"
python3 - <<'PY'
s=open('klangebirge.esm.js').read()
s=s.replace("export { KlangGebirge };\nexport default KlangGebirge;\n","")
i=s.index("*/")+3
open('klangebirge.js','w').write(s[:i]+"(function () {\n'use strict';\n"+s[i:]+"})();\n")
PY
