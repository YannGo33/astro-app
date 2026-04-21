export type AngleUnit = 'deg' | 'rad';
export interface Angle {
    value: number;
    unit: AngleUnit;
}
export declare function toRadians(angle: Angle): number;
export declare function toDegrees(angle: Angle): number;
//# sourceMappingURL=angles.d.ts.map