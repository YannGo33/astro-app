import type { Request, Response } from 'express';
import { computeOptics } from '../../../src/core/optics/opticsEngine.js';

export function computeOpticsHandler(req: Request, res: Response) {
  try {
    const {
      telescopeFocal,
      telescopeDiameter,
      eyepieceFocal,
      apparentFov
    } = req.body;

    const result = computeOptics({
      telescopeFocal,
      telescopeDiameter,
      eyepieceFocal,
      eyepieceApparentFov: apparentFov
    });

    res.json(result);

  } catch (error) {
    res.status(400).json({
      error: (error as Error).message
    });
  }
}