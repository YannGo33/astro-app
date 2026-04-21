import { sin, cos } from '../trigonometry/trigonometry.js';
import { toRadians, toDegrees } from '../angles/angles.js';
export function solarAltitude(input) {
    const { latitude, declination, hourAngle } = input;
    const sinH = sin(latitude) * sin(declination) +
        cos(latitude) * cos(declination) * cos(hourAngle);
    const hRad = Math.asin(sinH);
    return toDegrees({ value: hRad, unit: 'rad' });
}
// 📅 Jour de l’année
export function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
// 🌞 Déclinaison solaire (approx)
export function solarDeclinationApprox(date) {
    const N = dayOfYear(date);
    const deg = 23.44 *
        Math.sin(((360 / 365) * (N - 81) * Math.PI) / 180);
    return { value: deg, unit: 'deg' };
}
// ⏱️ Angle horaire (approx)
export function hourAngle(date) {
    const hours = date.getUTCHours() +
        date.getUTCMinutes() / 60;
    const deg = (hours - 12) * 15;
    return { value: deg, unit: 'deg' };
}
export function solarAltitudeFromDate(date, latitude) {
    const declination = solarDeclinationApprox(date);
    const H = hourAngle(date);
    return solarAltitude({
        latitude,
        declination,
        hourAngle: H
    });
}
// 🌍 Angle horaire avec longitude (approx)
export function hourAngleFromLocation(date, longitude) {
    const utcHours = date.getUTCHours() +
        date.getUTCMinutes() / 60;
    // correction longitude (15° = 1h)
    const localSolarTime = utcHours + longitude.value / 15;
    const deg = (localSolarTime - 12) * 15;
    return { value: deg, unit: 'deg' };
}
// ⏱️ équation du temps (minutes)
export function equationOfTime(date) {
    const N = dayOfYear(date);
    const B = ((360 / 365) * (N - 81) * Math.PI) / 180;
    return (9.87 * Math.sin(2 * B) -
        7.53 * Math.cos(B) -
        1.5 * Math.sin(B));
}
export function hourAnglePrecise(date, longitude) {
    const utcHours = date.getUTCHours() +
        date.getUTCMinutes() / 60;
    const eot = equationOfTime(date); // minutes
    const solarTime = utcHours +
        longitude.value / 15 +
        eot / 60;
    const deg = (solarTime - 12) * 15;
    return { value: deg, unit: 'deg' };
}
//# sourceMappingURL=solar.js.map