import { describe, it, expect } from 'vitest';
import { hourAngleFromLocation } from './solar.js';

describe('hourAngleFromLocation', () => {

  it('midi solaire à longitude 0', () => {
    const d = new Date('2024-01-01T12:00:00Z');

    const h = hourAngleFromLocation(
      d,
      { value: 0, unit: 'deg' }
    );

    expect(h.value).toBeCloseTo(0, 5);
  });
  
});