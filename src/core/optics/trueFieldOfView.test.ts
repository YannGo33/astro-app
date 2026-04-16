import { describe, it, expect } from 'vitest';
import { trueFieldOfView } from './trueFieldOfView.js';

describe('trueFieldOfView', () => {

  // ✅ Cas nominal
  it('calcule correctement', () => {
    expect(
      trueFieldOfView({
        apparentField: 50,
        magnification: 100
      })
    ).toBe(0.5);
  });

  // ✅ Cas réaliste
  it('configuration réaliste télescope', () => {
    const result = trueFieldOfView({
      apparentField: 68,
      magnification: 34
    });

    expect(result).toBeCloseTo(68 / 34, 5);
  });

  // ✅ Grand champ apparent
  it('gère un grand champ apparent', () => {
    const result = trueFieldOfView({
      apparentField: 82,
      magnification: 100
    });

    expect(result).toBeCloseTo(82 / 100, 5);
  });

  // ✅ Faible grossissement
  it('gère un faible grossissement', () => {
    const result = trueFieldOfView({
      apparentField: 50,
      magnification: 10
    });

    expect(result).toBeCloseTo(50 / 10, 5);
  });

  // ✅ Résultat non entier
  it('gère un résultat non entier', () => {
    const result = trueFieldOfView({
      apparentField: 68,
      magnification: 27
    });

    expect(result).toBeCloseTo(68 / 27, 5);
  });

  // ⚠️ Cas limites
  it('rejette grossissement nul', () => {
    expect(() =>
      trueFieldOfView({
        apparentField: 50,
        magnification: 0
      })
    ).toThrow();
  });

  it('rejette grossissement négatif', () => {
    expect(() =>
      trueFieldOfView({
        apparentField: 50,
        magnification: -10
      })
    ).toThrow();
  });

  // ⚠️ Cas particuliers
  it('champ apparent nul → champ réel nul', () => {
    expect(
      trueFieldOfView({
        apparentField: 0,
        magnification: 100
      })
    ).toBe(0);
  });

  // ⚠️ Cas extrêmes
  it('gère champ apparent très large', () => {
    const result = trueFieldOfView({
      apparentField: 120,
      magnification: 50
    });

    expect(result).toBeCloseTo(120 / 50, 5);
  });

});