import { describe, it, expect } from 'vitest';
import { sin, cos, tan } from './trigonometry.js';

describe('trigonometry', () => {

  it('sin(0°) = 0', () => {
    expect(sin({ value: 0, unit: 'deg' })).toBeCloseTo(0, 5);
  });

  it('sin(90°) = 1', () => {
    expect(sin({ value: 90, unit: 'deg' })).toBeCloseTo(1, 5);
  });

  it('cos(0°) = 1', () => {
    expect(cos({ value: 0, unit: 'deg' })).toBeCloseTo(1, 5);
  });

  it('cos(90°) = 0', () => {
    expect(cos({ value: 90, unit: 'deg' })).toBeCloseTo(0, 5);
  });

  it('tan(45°) = 1', () => {
    expect(tan({ value: 45, unit: 'deg' })).toBeCloseTo(1, 5);
  });

});