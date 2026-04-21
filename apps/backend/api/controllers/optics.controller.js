import { computeOptics } from '../../../../packages/core/optics/opticsEngine.js';
export function computeOpticsHandler(req, res) {
    try {
        const { telescopeFocal, telescopeDiameter, eyepieceFocal, apparentFov } = req.body;
        const result = computeOptics({
            telescopeFocal,
            telescopeDiameter,
            eyepieceFocal,
            eyepieceApparentFov: apparentFov
        });
        res.json(result);
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}
//# sourceMappingURL=optics.controller.js.map