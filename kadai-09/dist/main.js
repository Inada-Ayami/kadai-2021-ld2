(()=>{var o={902:o=>{o.exports=()=>{console.log("Hello from moduleA!")}},78:o=>{o.exports={hello:"from moduleB!"}}},r={};function e(l){var t=r[l];if(void 0!==t)return t.exports;var s=r[l]={exports:{}};return o[l](s,s.exports,e),s.exports}(()=>{const o=e(902),r=e(78);o(),console.log(r)})()})();