import { describe, it, expect } from 'vitest';
import { exitPupil } from './exitPupil.js';
describe('exitPupil', () => {
    // ✅ Cas nominal
    it('calcule correctement (mm)', () => {
        expect(exitPupil({
            diameter: { value: 200, unit: 'mm' },
            magnification: 100
        })).toBe(2);
    });
    // ✅ Conversion d’unités
    it('fonctionne avec cm', () => {
        expect(exitPupil({
            diameter: { value: 20, unit: 'cm' }, // 200 mm
            magnification: 100
        })).toBe(2);
    });
    it('fonctionne avec mètres', () => {
        expect(exitPupil({
            diameter: { value: 0.2, unit: 'm' }, // 200 mm
            magnification: 100
        })).toBe(2);
    });
    // ✅ Cas réaliste
    it('configuration réaliste télescope', () => {
        const result = exitPupil({
            diameter: { value: 254, unit: 'mm' },
            magnification: 127
        });
        expect(result).toBeCloseTo(254 / 127, 5);
    });
    // ✅ Résultat non entier
    it('gère une pupille non entière', () => {
        const result = exitPupil({
            diameter: { value: 200, unit: 'mm' },
            magnification: 48
        });
        expect(result).toBeCloseTo(200 / 48, 5);
    });
    // ⚠️ Cas limites
    it('rejette grossissement nul', () => {
        expect(() => exitPupil({
            diameter: { value: 200, unit: 'mm' },
            magnification: 0
        })).toThrow();
    });
    it('rejette grossissement négatif', () => {
        expect(() => exitPupil({
            diameter: { value: 200, unit: 'mm' },
            magnification: -10
        })).toThrow();
    });
    // ⚠️ Cas particuliers physiques
    it('diamètre nul → pupille nulle', () => {
        expect(exitPupil({
            diameter: { value: 0, unit: 'mm' },
            magnification: 100
        })).toBe(0);
    });
    // ⚠️ Cas extrêmes
    it('gère un très grand diamètre', () => {
        expect(exitPupil({
            diameter: { value: 1000, unit: 'mm' },
            magnification: 100
        })).toBe(10);
    });
    it('gère un fort grossissement', () => {
        expect(exitPupil({
            diameter: { value: 200, unit: 'mm' },
            magnification: 400
        })).toBe(0.5);
    });
});
//# sourceMappingURL=exitPupil.test.js.map