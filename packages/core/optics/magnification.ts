// core/optics/magnification.ts
import type { Length } from '../units/units.js';
import { toMillimeters } from '../units/units.js';

export interface MagnificationInput {
  telescopeFocal: Length;
  eyepieceFocal: Length;
}

export function magnification(input: MagnificationInput): number {
  const telescope = toMillimeters(input.telescopeFocal);
  const eyepiece = toMillimeters(input.eyepieceFocal);

  if (eyepiece <= 0) {
    throw new Error("Eyepiece focal length must be > 0");
  }

  return telescope / eyepiece;
}