
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let product1 = lines[0]
let product2 = lines[1]

let [code, unit, price] = product1.split(" ");
let [code2, unit2, price2] = product2.split(" ");

let first_product_price = parseInt(unit) * parseFloat(price);
let secoend_product_price = parseInt(unit2) * parseFloat(price2);

let total_price = first_product_price + secoend_product_price;

console.log("VALOR A PAGAR: R$ " + total_price.toFixed(2));
