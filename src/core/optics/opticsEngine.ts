import { magnification } from './magnification.js';
import { exitPupil } from './exitPupil.js';
import { trueFieldOfView } from './trueFieldOfView.js';

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

export function computeOptics(input: OpticsInput): OpticsResult {
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