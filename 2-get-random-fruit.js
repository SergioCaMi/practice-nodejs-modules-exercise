const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const utils = require('./mis-utilidades/utils');

for (let x=0;x<3;x++){
    console.log(utils.getRandomElementFromArray(frutas))
}