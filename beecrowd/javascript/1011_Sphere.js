var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines[0]);

const pie = 3.14159;

let volume = 4.0/3 * pie * (R*R*R)

console.log("VOLUME = " + volume.toFixed(3))
