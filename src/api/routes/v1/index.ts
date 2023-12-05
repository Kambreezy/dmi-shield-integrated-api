import { Router } from 'express';
import mainRouter from './main';
import usersRouter from './users';
import rolesRouter from './roles';
import documentsRouter from './documents';

const router: Router = Router();
router.use('/', mainRouter);
router.use('/users', usersRouter);
router.use('/roles', rolesRouter);
router.use('/documents', documentsRouter);

export default router;
