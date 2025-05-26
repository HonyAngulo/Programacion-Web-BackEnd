// c. Null, undefined y definido
const obtenerValor = require('./VerificacionValor');

test('c. Debe ser null', () => {
  expect(obtenerValor("nulo")).toBeNull();
});
test('c. Debe ser undefined', () => {
  expect(obtenerValor("indefinido")).toBeUndefined();
});

test('c. Debe estar definido', () => {
  expect(obtenerValor("otro")).toBeDefined();
});