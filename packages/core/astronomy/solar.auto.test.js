import { describe, it, expect } from 'vitest';
import { dayOfYear, solarDeclinationApprox, hourAngle, hourAnglePrecise } from './solar.js';
describe('solar auto', () => {
    it('jour de l’année', () => {
        const d = new Date('2024-01-01');
        expect(dayOfYear(d)).toBe(1);
    });
    it('déclinaison proche équinoxe', () => {
        const d = new Date('2024-03-20');
        const dec = solarDeclinationApprox(d);
        expect(dec.value).toBeCloseTo(0, 0);
    });
    it('angle horaire midi', () => {
        const d = new Date('2024-01-01T12:00:00Z');
        const h = hourAngle(d);
        expect(h.value).toBeCloseTo(0, 5);
    });
    it('angle horaire précis proche midi', () => {
        const d = new Date('2024-03-20T12:00:00Z');
        const h = hourAnglePrecise(d, { value: 0, unit: 'deg' });
        expect(Math.abs(h.value)).toBeLessThan(3);
    });
});
//# sourceMappingURL=solar.auto.test.js.map