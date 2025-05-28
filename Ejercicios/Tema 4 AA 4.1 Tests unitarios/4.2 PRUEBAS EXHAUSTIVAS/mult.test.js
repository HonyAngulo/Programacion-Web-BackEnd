const multiplicacion = require('./mult');

describe('Pruebas exhaustivas de la función multiplicacion', () => {
    // Casos normales
    test('Caso normal (2 x 3)', () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    test('Caso normal con decimales (2.5 x 4.2)', () => {
        expect(multiplicacion(2.5, 4.2)).toBeCloseTo(10.5); // Usamos toBeCloseTo para decimales
    });

    // Casos frontera
    test('Caso frontera (0 x 5)', () => {
        expect(multiplicacion(0, 5)).toBe(0);
    });

    test('Caso frontera (-0 x 5)', () => {
        expect(multiplicacion(-0, 5)).toBe(-0); // JavaScript distingue entre 0 y -0
    });

    test('Caso frontera (Number.MAX_SAFE_INTEGER x 2)', () => {
        expect(multiplicacion(Number.MAX_SAFE_INTEGER, 2)).toBe(18014398509481982);
    });

    test('Caso fuera de frontera (número grande x 2)', () => {
        expect(multiplicacion(100000000000000000, 2)).toBe(200000000000000000);
    });

    // Casos inválidos
    test('Caso inválido (undefined x 3)', () => {
        expect(multiplicacion(undefined, 3)).toBeNaN();
    });

    test('Caso inválido (sin argumentos)', () => {
        expect(multiplicacion()).toBeNaN();
    });

    // Casos de coerción de tipo
    test('Caso coerción de tipo ("2" x "3")', () => {
        expect(multiplicacion('2', '3')).toBe(6);
    });

    test('Caso coerción de tipo (null x 5)', () => {
        expect(multiplicacion(null, 5)).toBe(0);
    });

    // Casos con negativos
    test('Caso con negativos (-2 x 3)', () => {
        expect(multiplicacion(-2, 3)).toBe(-6);
    });

    test('Caso con dos negativos (-2 x -3)', () => {
        expect(multiplicacion(-2, -3)).toBe(6);
    });
});