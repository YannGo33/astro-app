import type { Angle } from '../angles/angles.js';
export interface SolarAltitudeInput {
    latitude: Angle;
    declination: Angle;
    hourAngle: Angle;
}
export declare function solarAltitude(input: SolarAltitudeInput): number;
export declare function dayOfYear(date: Date): number;
export declare function solarDeclinationApprox(date: Date): Angle;
export declare function hourAngle(date: Date): Angle;
export declare function solarAltitudeFromDate(date: Date, latitude: Angle): number;
export declare function hourAngleFromLocation(date: Date, longitude: Angle): Angle;
export declare function equationOfTime(date: Date): number;
export declare function hourAnglePrecise(date: Date, longitude: Angle): Angle;
//# sourceMappingURL=solar.d.ts.map