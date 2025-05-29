// Versión débil (Sección 1)
function validarContrasenaDebil(password) {
  return typeof password === 'string' && password.length >= 8;
}

// Versión completa (Sección 2)
function validarContrasena(password) {
  // 1. Verificación básica
  if (typeof password !== 'string' || password.length < 8) return false;
  
  // 2. Definición de patrones
  const especiales = /[@\/$%^&^()]/; // Caracteres especiales exactos
  const mayuscula = /[A-Z]/;
  const minuscula = /[a-z]/;
  const numero = /[0-9]/;
  const palabraSignificativa = /(playa|gato|tulum|honorio|sian|1990)/i;
  
  // 3. Verificación de todos los requisitos
  return (
    mayuscula.test(password) &&
    minuscula.test(password) &&
    numero.test(password) &&
    especiales.test(password) &&
    palabraSignificativa.test(password) &&
    !password.includes(" ")
  );
}

module.exports = {
  validarContrasenaDebil,
  validarContrasena
};