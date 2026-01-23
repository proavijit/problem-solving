var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let values = lines[0].split(" ");
let [a, b, c] = values;

let A = parseFloat(a);
let B = parseFloat(b);
let C = parseFloat(c);
const pie = 3.14159;

let TRIANGULO = (A * C) / 2
let CIRCULO = pie * C * C
let TRAPEZIO = ((A + B) * C) / 2
let QUADRADO = B * B
let RETANGULO = A * B


console.log("TRIANGULO: " + TRIANGULO.toFixed(3))
console.log("CIRCULO: " + CIRCULO.toFixed(3))
console.log("TRAPEZIO: " + TRAPEZIO.toFixed(3))
console.log("QUADRADO: " + QUADRADO.toFixed(3))
console.log("RETANGULO: " + RETANGULO.toFixed(3))

