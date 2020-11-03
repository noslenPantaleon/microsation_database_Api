import { Router } from 'express';
const router = Router();

import { sensor } from '../controllers/sensor.controller';

router.get('/sensor/sms', sensor);

export default router;
