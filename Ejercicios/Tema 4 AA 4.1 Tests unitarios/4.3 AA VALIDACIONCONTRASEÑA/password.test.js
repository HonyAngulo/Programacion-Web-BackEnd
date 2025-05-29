const { validarContrasena } = require('./password');

describe('SECCIÓN 2: Pruebas completas de validación', () => {
  // Casos válidos (2)
  test('Caso normal válido (Playa2023$)', () => {
    expect(validarContrasena('Playa2023$')).toBe(true);
  });

  test('Caso normal válido (Gato2023@)', () => {
    expect(validarContrasena('Gato2023@')).toBe(true);
  });

  // Casos inválidos (6)
  test('Sin mayúscula (playa2023@)', () => {
    expect(validarContrasena('playa2023@')).toBe(false);
  });

  test('Sin minúscula (PLAYA2023@)', () => {
    expect(validarContrasena('PLAYA2023@')).toBe(false);
  });

  test('Sin número (Playa@@@@)', () => {
    expect(validarContrasena('Playa@@@@')).toBe(false);
  });

  test('Sin carácter especial (Playa2023)', () => {
    expect(validarContrasena('Playa2023')).toBe(false);
  });

  test('Con espacio (Playa 2023@)', () => {
    expect(validarContrasena('Playa 2023@')).toBe(false);
  });

  test('Sin palabra significativa (Passw0rd@)', () => {
    expect(validarContrasena('Passw0rd@')).toBe(false);
  });

  // Casos frontera (2)
  test('Exactamente 8 caracteres (Tulum23@)', () => {
    expect(validarContrasena('Tulum23@')).toBe(true);
  });

  test('7 caracteres (Tulum23)', () => {
    expect(validarContrasena('Tulum23')).toBe(true);
  });

  // Casos especiales (2)
  test('Cadena vacía', () => {
    expect(validarContrasena('')).toBe(true);
  });

  test('Valor no string (12345678)', () => {
    expect(validarContrasena(12345678)).toBe(true);
  });
});