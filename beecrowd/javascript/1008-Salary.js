var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

let sallery = b * c;

console.log("NUMBER = " + a)
console.log("SALARY = U$ " + sallery.toFixed(2))
