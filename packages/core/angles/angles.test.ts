import { describe, it, expect } from 'vitest';
import { toRadians, toDegrees } from './angles.js';

describe('angles', () => {

  it('convert degrés → radians', () => {
    expect(
      toRadians({ value: 180, unit: 'deg' })
    ).toBeCloseTo(Math.PI, 5);
  });

  it('convert radians → degrés', () => {
    expect(
      toDegrees({ value: Math.PI, unit: 'rad' })
    ).toBeCloseTo(180, 5);
  });

  it('0 degré', () => {
    expect(
      toRadians({ value: 0, unit: 'deg' })
    ).toBe(0);
  });

  it('90 degrés', () => {
    expect(
      toRadians({ value: 90, unit: 'deg' })
    ).toBeCloseTo(Math.PI / 2, 5);
  });

  it('2π radians', () => {
    expect(
      toDegrees({ value: 2 * Math.PI, unit: 'rad' })
    ).toBeCloseTo(360, 5);
  });

});