/** Leer README */
const utils = require('./mis-utilidades/utils');


arr = [1, 2, 3];


console.log(utils.getAvgFromArray(arr));
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
total = sum / arr.length;

console.log(total);