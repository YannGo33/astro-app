import { sin, cos } from '../trigonometry/trigonometry.js';
import { toRadians, toDegrees } from '../angles/angles.js';
import type { Angle } from '../angles/angles.js';

export interface SolarAltitudeInput {
  latitude: Angle;     // φ
  declination: Angle;  // δ
  hourAngle: Angle;    // H
}

export function solarAltitude(input: SolarAltitudeInput): number {
  const { latitude, declination, hourAngle } = input;

  const sinH =
    sin(latitude) * sin(declination) +
    cos(latitude) * cos(declination) * cos(hourAngle);

  const hRad = Math.asin(sinH);

  return toDegrees({ value: hRad, unit: 'rad' });
}


// 📅 Jour de l’année
export function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// 🌞 Déclinaison solaire (approx)
export function solarDeclinationApprox(date: Date): Angle {
  const N = dayOfYear(date);

  const deg =
    23.44 *
    Math.sin(((360 / 365) * (N - 81) * Math.PI) / 180);

  return { value: deg, unit: 'deg' };
}

// ⏱️ Angle horaire (approx)
export function hourAngle(date: Date): Angle {
  const hours =
    date.getUTCHours() +
    date.getUTCMinutes() / 60;

  const deg = (hours - 12) * 15;

  return { value: deg, unit: 'deg' };
}