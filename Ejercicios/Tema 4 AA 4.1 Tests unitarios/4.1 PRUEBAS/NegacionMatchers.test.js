const obtenerColor = require('./NegacionMatchers');

test('g. El color no debe ser "azul"', () => {
  expect(obtenerColor()).not.toBe("azul");
});

test('g. El color no debe ser null', () => {
  expect(obtenerColor()).not.toBeNull();
});

test('g. El color no debe ser undefined', () => {
  expect(obtenerColor()).not.toBeUndefined();
});
