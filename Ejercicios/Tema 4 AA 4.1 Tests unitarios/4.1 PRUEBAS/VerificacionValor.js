// c. Null, undefined y definido
function obtenerValor(tipo) {
  if (tipo === "nulo") return null;
  if (tipo === "indefinido") return undefined;
  return "algo";
}

module.exports = obtenerValor;
