
/**
 * Obtiene un elemento aleatorio de un array.
 * @param {Array} arr - El array del cual obtener el elemento.
 * @returns {*} Un elemento aleatorio del array.
 */
function getRandomElementFromArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('El argumento debe ser un array');
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function getAvgFromArray(arr){
    let sum = 0;
    arr.forEach(element => {
        sum = Number(element) + sum; 
    });
    return sum / arr.length;
}

module.exports = {getRandomElementFromArray, 
    getAvgFromArray};