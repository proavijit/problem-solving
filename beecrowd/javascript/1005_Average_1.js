// Problem: 1005 - Average 1 
// Language: JavaScript 12.18 (nodejs 12.18.3) [+2s] 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



let A = parseFloat(lines[0])
let B = parseFloat(lines[1])

let avg = (A * 3.5 + B * 7.5) / (3.5 + 7.5)

console.log("MEDIA = "+ avg.toFixed(5))
