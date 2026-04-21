import { toMillimeters } from '../units/units.js';
export function magnification(input) {
    const telescope = toMillimeters(input.telescopeFocal);
    const eyepiece = toMillimeters(input.eyepieceFocal);
    if (eyepiece <= 0) {
        throw new Error("Eyepiece focal length must be > 0");
    }
    return telescope / eyepiece;
}
//# sourceMappingURL=magnification.js.map