var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines[0].split(" ").map(Number)

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let ans;
if(c <= maiorAB){
     ans =  maiorAB;
}else{
     ans = c;
}

console.log( ans + " eh o maior")
