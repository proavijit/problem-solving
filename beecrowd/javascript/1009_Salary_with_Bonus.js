// Beecrowd 1009 - Salary with Bonus
// Language: JavaScript (Node.js)

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let name = lines[0].toString();
let sallery = parseFloat(lines[1]);
let totalSale = parseFloat(lines[2]);

let commission = (totalSale * 15) / 100;
let totalSallery = sallery + commission;

console.log("TOTAL = R$ " + totalSallery.toFixed(2))
