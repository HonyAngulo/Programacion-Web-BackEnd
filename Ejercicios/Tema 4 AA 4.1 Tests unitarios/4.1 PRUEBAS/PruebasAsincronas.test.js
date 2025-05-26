// h. Pruebas Asincronas
const obtenerDatos = require('./PruebasAsincronas');

test('h. La promesa debe resolverse con "Datos recibidos"', async () => {
  await expect(obtenerDatos(true)).resolves.toBe("Datos recibidos");
});

test('h. La promesa debe rechazarse con "Error al obtener datos"', async () => {
  await expect(obtenerDatos(false)).rejects.toBe("Error al obtener datos");
});
