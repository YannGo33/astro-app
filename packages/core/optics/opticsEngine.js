import { magnification } from './magnification.js';
import { exitPupil } from './exitPupil.js';
import { trueFieldOfView } from './trueFieldOfView.js';
export function computeOptics(input) {
    const M = magnification({
        telescopeFocal: input.telescopeFocal,
        eyepieceFocal: input.eyepieceFocal
    });
    const P = exitPupil({
        diameter: input.telescopeDiameter,
        magnification: M
    });
    const TFOV = trueFieldOfView({
        apparentFov: input.eyepieceApparentFov,
        magnification: M
    });
    return {
        magnification: M,
        exitPupil: P,
        trueFov: TFOV
    };
}
//# sourceMappingURL=opticsEngine.js.map