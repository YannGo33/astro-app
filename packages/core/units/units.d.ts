export type LengthUnit = 'mm' | 'cm' | 'm';
export interface Length {
    value: number;
    unit: LengthUnit;
}
export declare function toMillimeters(length: Length): number;
//# sourceMappingURL=units.d.ts.map