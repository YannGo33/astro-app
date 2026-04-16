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