import { describe, it, expect } from 'vitest';
import { solarAltitude } from './solar.js';

describe('solarAltitude', () => {

  // 🌞 Soleil au zénith (cas simple)
  it('soleil au zénith', () => {
    const h = solarAltitude({
      latitude: { value: 0, unit: 'deg' },
      declination: { value: 0, unit: 'deg' },
      hourAngle: { value: 0, unit: 'deg' }
    });

    expect(h).toBeCloseTo(90, 5);
  });

  // 🌅 Soleil à l’horizon
  it('soleil à l’horizon', () => {
    const h = solarAltitude({
      latitude: { value: 0, unit: 'deg' },
      declination: { value: 0, unit: 'deg' },
      hourAngle: { value: 90, unit: 'deg' }
    });

    expect(h).toBeCloseTo(0, 5);
  });

});