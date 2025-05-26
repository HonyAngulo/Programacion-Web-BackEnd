// d. Comparaciones numéricas
const obtenerNumero = require('./ComparacionNumerica'); 

test('d. El número debe ser mayor que 10', () => {
  expect(obtenerNumero()).toBeGreaterThan(10);
});

test('d. El número debe ser menor que 100', () => {
  expect(obtenerNumero()).toBeLessThan(100);
});

test('d. El número debe ser exactamente 20', () => {
  expect(obtenerNumero()).toBe(20);
});

test('d. El número debe ser mayor o igual a 20', () => {
  expect(obtenerNumero()).toBeGreaterThanOrEqual(20);
});
