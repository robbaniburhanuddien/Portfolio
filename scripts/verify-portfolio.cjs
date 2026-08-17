// Zero-dependency aggregate verifier for the mangrove portfolio.
// Usage: node scripts/verify-portfolio.cjs   (run from project root)
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
let fail = 0;
const ok = (m) => console.log('PASS  ' + m);
const bad = (m) => { fail++; console.log('FAIL  ' + m); };

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

// 1. literal "undefined" text in HTML
const undef = (html.match(/undefined/g) || []).length;
undef === 0 ? ok('no literal "undefined" in index.html') : bad(undef + 'x "undefined" in index.html');

// 2. i18n keys present in both dictionaries
function dictKeys(lang) {
  const m = js.match(new RegExp('\\b' + lang + '\\s*:\\s*\\{'));
  if (!m) return null;
  let i = m.index + m[0].length, depth = 1;
  const start = i;
  while (depth > 0 && i < js.length) {
    if (js[i] === '{') depth++;
    else if (js[i] === '}') depth--;
    i++;
  }
  const body = js.slice(start, i);
  return new Set([...body.matchAll(/['"]([\w.\-]+)['"]\s*:/g)].map((x) => x[1]));
}
const keys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]))];
const id = dictKeys('id');
const en = dictKeys('en');
if (!id || !en) bad('i18n dictionaries id/en not found in script.js');
else {
  const mid = keys.filter((k) => !id.has(k));
  const men = keys.filter((k) => !en.has(k));
  mid.length === 0 ? ok(keys.length + ' data-i18n keys all present in dict id')
                   : bad('missing in id: ' + mid.join(', '));
  men.length === 0 ? ok(keys.length + ' data-i18n keys all present in dict en')
                   : bad('missing in en: ' + men.join(', '));
}

// 3. every src="images/..." exists on disk
const srcs = [...new Set([...html.matchAll(/src="(images\/[^"]+)"/g)].map((m) => m[1]))];
const missing = srcs.filter((s) => {
  let d = s;
  try { d = decodeURI(s); } catch (e) {}
  return !fs.existsSync(path.join(root, d));
});
missing.length === 0 ? ok(srcs.length + ' image src paths all exist')
                     : bad('missing images: ' + missing.join(' | '));

console.log(fail === 0 ? '\nALL CHECKS PASS' : '\n' + fail + ' CHECK(S) FAILED');
process.exit(fail === 0 ? 0 : 1);
