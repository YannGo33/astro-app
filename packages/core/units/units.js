// src/core/units/units.ts
// conversion vers mm (unité de référence)
export function toMillimeters(length) {
    switch (length.unit) {
        case 'mm':
            return length.value;
        case 'cm':
            return length.value * 10;
        case 'm':
            return length.value * 1000;
    }
}
//# sourceMappingURL=units.js.map