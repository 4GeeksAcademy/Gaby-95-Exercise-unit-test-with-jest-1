// Importamos todas las funciones desde app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 / 1.07 yen", function() {
    // Probamos convirtiendo 3.5 dólares a yenes
    const yen = fromDollarToYen(3.5);
    // El cálculo esperado según la lógica de conversión
    const expected = (3.5 / 1.07) * 156.5;
    expect(yen).toBe(expected);
});

test("One yen should be 0.87 / 156.5 pounds", function() {
    // Probamos convirtiendo 1000 yenes a libras
    const pound = fromYenToPound(1000);
    // El cálculo esperado según la lógica de conversión
    const expected = (1000 / 156.5) * 0.87;
    expect(pound).toBe(expected);
});