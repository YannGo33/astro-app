import { toMillimeters } from '../units/units.js';
export function exitPupil(input) {
    const diameter = toMillimeters(input.diameter);
    if (input.magnification <= 0) {
        throw new Error("Magnification must be > 0");
    }
    return diameter / input.magnification;
}
//# sourceMappingURL=exitPupil.js.map