import { describe, it, expect } from 'vitest';
import { magnification } from './magnification.js';

describe('magnification', () => {
  // Cas nominal simple
  it('calcule correctement (mm)', () => {
    expect(
      magnification({
        telescopeFocal: { value: 1000, unit: 'mm' },
        eyepieceFocal: { value: 10, unit: 'mm' }
      })
    ).toBe(100);
  });
  
  // Conversion d’unités
  it('fonctionne avec unités différentes (mm / cm)', () => {
    expect(
      magnification({
        telescopeFocal: { value: 1000, unit: 'mm' },
        eyepieceFocal: { value: 1, unit: 'cm' } // 10 mm
      })
    ).toBe(100);
  });
 
  it('fonctionne avec mètres', () => {
    expect(
      magnification({
        telescopeFocal: { value: 1, unit: 'm' },     // 1000 mm
        eyepieceFocal: { value: 10, unit: 'mm' }
      })
    ).toBe(100);
  });

  // Valeurs réalistes
  it('gère une configuration réaliste', () => {
    const result = magnification({
      telescopeFocal: { value: 1200, unit: 'mm' },
      eyepieceFocal: { value: 25, unit: 'mm' }
    });

    expect(result).toBeCloseTo(1200 / 25, 5);
  });

  // Résultat non entier
  it('gère un résultat non entier', () => {
    const result = magnification({
      telescopeFocal: { value: 1000, unit: 'mm' },
      eyepieceFocal: { value: 33, unit: 'mm' }
    });

    expect(result).toBeCloseTo(1000 / 33, 5);
  });

  // ⚠️ Cas limites
  it('rejette focale oculaire nulle', () => {
    expect(() =>
      magnification({
        telescopeFocal: { value: 1000, unit: 'mm' },
        eyepieceFocal: { value: 0, unit: 'mm' }
      })
    ).toThrow();
  });


   // ⚠️ Cas extrêmes
  it('gère des grandes valeurs', () => {
    expect(
      magnification({
        telescopeFocal: { value: 5000, unit: 'mm' },
        eyepieceFocal: { value: 5, unit: 'mm' }
      })
    ).toBe(1000);
  });

  it('gère des petites valeurs', () => {
    expect(
      magnification({
        telescopeFocal: { value: 400, unit: 'mm' },
        eyepieceFocal: { value: 40, unit: 'mm' }
      })
    ).toBe(10);
  });

  it('rejette focale oculaire négative', () => {
      expect(() =>
        magnification({
          telescopeFocal: { value: 1000, unit: 'mm' },
          eyepieceFocal: { value: -10, unit: 'mm' }
        })
      ).toThrow();
    });

  it('accepte focale télescope négative ? (à définir)', () => {
    // 👉 ici choix métier !
  });

});
