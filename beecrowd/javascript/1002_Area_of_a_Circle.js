
// Beecrowd 1002 - Area of a Circle
// Language: JavaScript (Node.js)


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const r = 3.14159;

function areaCalc(R){
    let calc = r * (R * R);
    let A = calc.toFixed(4);
    
    return A;
}

console.log("A="+areaCalc(parseFloat(lines[0])));
