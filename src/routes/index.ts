import routerx from 'express-promise-router';
import sensorsRouter from './sensors.routes';
import authRouter from './auth.routes';

const router = routerx();

router.use('/api', sensorsRouter);
router.use('/api', authRouter);

export default router;
