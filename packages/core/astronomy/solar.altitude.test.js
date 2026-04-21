import { describe, it, expect } from 'vitest';
import { solarAltitudeFromDate } from './solar.js';
describe('solarAltitudeFromDate', () => {
    it('soleil proche du zénith à l’équateur (équinoxe midi)', () => {
        const date = new Date('2024-03-20T12:00:00Z');
        const h = solarAltitudeFromDate(date, { value: 0, unit: 'deg' });
        expect(h).toBeCloseTo(90, 0); // tolérance large
    });
});
//# sourceMappingURL=solar.altitude.test.js.map