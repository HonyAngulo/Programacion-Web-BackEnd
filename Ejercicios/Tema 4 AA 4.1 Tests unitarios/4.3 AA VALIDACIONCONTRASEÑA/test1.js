const { validarContrasenaDebil } = require('./password');

console.log("=== PRUEBAS SECCIÓN 1 (Versión débil) ===");
console.log("1. '12345678' (solo longitud):", validarContrasenaDebil('12345678')); // true
console.log("2. 'abc' (corta):", validarContrasenaDebil('abc')); // false
console.log("3. Número (12345678):", validarContrasenaDebil(12345678)); // false
console.log("4. 'Tulum2023@' (versión débil):", validarContrasenaDebil('Tulum2023@')); // true