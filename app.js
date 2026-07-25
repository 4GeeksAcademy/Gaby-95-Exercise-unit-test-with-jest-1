// Declaramos los valores de conversión base (1 euro equivale a:)
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
}

// 1. Función para convertir de Dólares a Yenes
// Primero pasamos de dólares a euros (dividiendo entre 1.07) y luego de euros a yenes (multiplicando por 156.5)
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}

// 2. Función para convertir de Euros a Dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

// 3. Función para convertir de Yenes a Libras
// Primero pasamos de yenes a euros (dividiendo entre 156.5) y luego de euros a libras (multiplicando por 0.87)
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}

// Exportamos las funciones para que puedan ser usadas en el archivo test.js
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };