// Versión optimizada de la función
function validarContrasenaOptima(password) {
  // Validación temprana de tipo y longitud
  if (typeof password !== 'string' || password.length < 8) return false;
  
  // Verificación eficiente de requisitos
  const requisitos = {
    mayuscula: false,
    minuscula: false,
    numero: false,
    especial: false,
    palabra: false
  };

  const palabrasSignificativas = ['playa', 'gato', 'tulum', 'honorio', 'sian', '1990'];
  const caracteresEspeciales = new Set(['@','#','$','%','^','&','^','(',')']);

  for (const char of password) {
    if (char === ' ') return false; // Espacios inválidos
    
    if (/[A-Z]/.test(char)) requisitos.mayuscula = true;
    if (/[a-z]/.test(char)) requisitos.minuscula = true;
    if (/[0-9]/.test(char)) requisitos.numero = true;
    if (caracteresEspeciales.has(char)) requisitos.especial = true;
  }

  // Verificación de palabra significativa (case insensitive)
  const lowerPass = password.toLowerCase();
  requisitos.palabra = palabrasSignificativas.some(palabra => 
    lowerPass.includes(palabra.toLowerCase())
  );

  // Validación final
  return (
    requisitos.mayuscula &&
    requisitos.minuscula &&
    requisitos.numero &&
    requisitos.especial &&
    requisitos.palabra
  );
}

// Exportar la versión optimizada
module.exports = {
  validarContrasenaOptima
};