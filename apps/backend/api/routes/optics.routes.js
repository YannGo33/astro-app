import { Router } from 'express';
import { computeOpticsHandler } from '../controllers/optics.controller.js';
const router = Router();
router.post('/', computeOpticsHandler);
export default router;
//# sourceMappingURL=optics.routes.js.map