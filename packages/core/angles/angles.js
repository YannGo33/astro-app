// 🔁 Conversion vers radians (référence interne)
export function toRadians(angle) {
    switch (angle.unit) {
        case 'rad':
            return angle.value;
        case 'deg':
            return angle.value * Math.PI / 180;
    }
}
// 🔁 Conversion vers degrés
export function toDegrees(angle) {
    switch (angle.unit) {
        case 'deg':
            return angle.value;
        case 'rad':
            return angle.value * 180 / Math.PI;
    }
}
//# sourceMappingURL=angles.js.map