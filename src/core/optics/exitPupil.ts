import type { Length } from '../units/units.js';
import { toMillimeters } from '../units/units.js';

export interface ExitPupilInput {
  diameter: Length;
  magnification: number;
}

export function exitPupil(input: ExitPupilInput): number {
  const diameter = toMillimeters(input.diameter);

  if (input.magnification <= 0) {
    throw new Error("Magnification must be > 0");
  }

  return diameter / input.magnification;
}