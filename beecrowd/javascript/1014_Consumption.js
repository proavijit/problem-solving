var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines[0])
let Y = parseFloat(lines[1])

let average = X / Y

console.log(average.toFixed(3) + " km/l")
