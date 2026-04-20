import { describe, it, expect } from 'vitest';

import { magnification } from './magnification.js';
import { exitPupil } from './exitPupil.js';
import { trueFieldOfView } from './trueFieldOfView.js';


describe('optics integration', () => {

  it('cohérence grossissement + pupille', () => {
    const G = magnification({
      telescopeFocal: { value: 1000, unit: 'mm' },
      eyepieceFocal: { value: 10, unit: 'mm' } 
    });

    const P = exitPupil({
      diameter: { value: 200, unit: 'mm' },
      magnification: G
    });

    expect(P).toBe(2);
  });

  it('configuration réaliste télescope', () => {
  const G = magnification({ 
    telescopeFocal: { value: 1200, unit: 'mm' },
    eyepieceFocal: { value: 25, unit: 'mm' } 
  });
  const P = exitPupil({ 
    diameter: { value: 200, unit: 'mm' },
    magnification: G });
  const CR = trueFieldOfView({ apparentFov: 50, magnification: G });

  expect(G).toBeCloseTo(1200 / 25, 5);
  expect(P).toBeCloseTo(200 / G, 5);
  expect(CR).toBeCloseTo(50 / G, 5);
  });

  it('cohérence avec unités mixtes', () => {
    const G = magnification({
      telescopeFocal: { value: 1200, unit: 'mm' },
      eyepieceFocal: { value: 25, unit: 'mm' }
    });

    const P = exitPupil({
      diameter: { value: 20, unit: 'cm' },
      magnification: G
    });

    expect(P).toBeCloseTo(200 / G, 5);
  });
});