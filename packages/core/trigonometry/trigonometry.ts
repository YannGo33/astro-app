import { toRadians } from '../angles/angles.js';
import type { Angle } from '../angles/angles.js';

// ✅ sinus sécurisé
export function sin(angle: Angle): number {
  return Math.sin(toRadians(angle));
}

// ✅ cosinus sécurisé
export function cos(angle: Angle): number {
  return Math.cos(toRadians(angle));
}

// ✅ tangente sécurisée
export function tan(angle: Angle): number {
  return Math.tan(toRadians(angle));
}