import type { Length } from '../units/units.js';
export interface OpticsInput {
    telescopeFocal: Length;
    telescopeDiameter: Length;
    eyepieceFocal: Length;
    eyepieceApparentFov: number;
}
export interface OpticsResult {
    magnification: number;
    exitPupil: number;
    trueFov: number;
}
export declare function computeOptics(input: OpticsInput): OpticsResult;
//# sourceMappingURL=opticsEngine.d.ts.map