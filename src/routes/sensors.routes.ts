import { Router } from 'express';
const router = Router();

import { sensors } from '../controllers/sensors.controller';

router.get('/microstation/sensors', sensors);

export default router;
