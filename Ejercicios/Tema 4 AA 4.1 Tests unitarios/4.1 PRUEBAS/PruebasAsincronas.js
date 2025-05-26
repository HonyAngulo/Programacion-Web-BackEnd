// h. Pruebas Asincronas
function obtenerDatos(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) resolve("Datos recibidos");
      else reject("Error al obtener datos");
    }, 100);
  });
}

module.exports = obtenerDatos;
