import { Router } from 'express';
const router = Router();

import { listUsersRole, signIn, signUp, update, userId } from '../controllers/user.controller';

router.post('/api/user/create', signUp);
router.post('/api/user/login', signIn);
router.put('/api/user/update', update);
router.get('/api/user/query', userId);
router.get('/api/user/listUsersRole', listUsersRole);

export default router;
