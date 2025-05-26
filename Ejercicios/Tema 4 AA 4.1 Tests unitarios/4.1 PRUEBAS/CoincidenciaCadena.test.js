const obtenerMensaje = require('./CoincidenciaCadena');

test('e. El mensaje debe contener la palabra "bienvenido"', () => {
  expect(obtenerMensaje()).toMatch(/bienvenido/);
});

test('e. El mensaje debe comenzar con "Hola"', () => {
  expect(obtenerMensaje()).toMatch(/^Hola/);
});

test('e. El mensaje debe terminar con "Jest"', () => {
  expect(obtenerMensaje()).toMatch(/Jest$/);
});
