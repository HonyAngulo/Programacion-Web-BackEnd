
// b. Comparación de objetos
const obtenerUsuario = require('./ComparacionObjetos');

test('b. Los objetos deben ser iguales', () => {
  expect(obtenerUsuario()).toEqual({ nombre: "Honorio", edad: 30 });
});