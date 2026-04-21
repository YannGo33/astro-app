import { describe, it, expect } from 'vitest';
import { toMillimeters } from './units.js';
describe('units - toMillimeters', () => {
    it('convert mm to mm', () => {
        expect(toMillimeters({ value: 10, unit: 'mm' })).toBe(10);
    });
    it('convert cm to mm', () => {
        expect(toMillimeters({ value: 2, unit: 'cm' })).toBe(20);
    });
    it('convert m to mm', () => {
        expect(toMillimeters({ value: 1, unit: 'm' })).toBe(1000);
    });
});
//# sourceMappingURL=units.test.js.map