const os = require('os');

const hostname = os.hostname();
const type = os.type();
const totalmem = (os.totalmem()/ (1024 * 1024 * 1024)).toFixed(2);

console.log('Nombre del equipo:', hostname);
console.log('Tipo de sistema operativo:', type);
console.log('Memoria RAM total en GB:', totalmem);
