import routerx from 'express-promise-router';
import sensorRouter from './sensor.routes';
import authRouter from './auth.routes';
import waterPumpRouter from './waterPump.routes'

const router = routerx();

router.use('/api', sensorRouter);
router.use('/api', authRouter);
router.use('/api', waterPumpRouter);

export default router;
