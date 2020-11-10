import { Router } from 'express';
const router = Router();

import { sensor } from '../controllers/sensor.controller';

router.get('/microstation/waterPump', sensor);

export default router;
