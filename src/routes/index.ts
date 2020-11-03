import routerx from 'express-promise-router';
import sensorRouter from './sensor.routes';
import authRouter from './auth.routes';

const router = routerx();

router.use('/api', sensorRouter);
router.use('/api', authRouter);

export default router;
