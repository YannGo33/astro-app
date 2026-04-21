// src/core/units/units.ts

export type LengthUnit = 'mm' | 'cm' | 'm';

export interface Length {
  value: number;
  unit: LengthUnit;
}

// conversion vers mm (unité de référence)
export function toMillimeters(length: Length): number {
  switch (length.unit) {
    case 'mm':
      return length.value;
    case 'cm':
      return length.value * 10;
    case 'm':
      return length.value * 1000;
  }
}