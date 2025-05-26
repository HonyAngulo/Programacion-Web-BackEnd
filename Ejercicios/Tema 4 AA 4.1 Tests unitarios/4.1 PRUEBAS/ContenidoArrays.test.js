const obtenerFrutas = require('./ContenidoArrays');

test('f. El array debe contener "banana"', () => {
  expect(obtenerFrutas()).toContain("banana");
});

test('f. El array debe tener una longitud de 3', () => {
  expect(obtenerFrutas()).toHaveLength(3);
});

test('f. El array debe contener tanto "manzana" como "pera"', () => {
  const frutas = obtenerFrutas();
  expect(frutas).toEqual(expect.arrayContaining(["manzana", "pera"]));
});
