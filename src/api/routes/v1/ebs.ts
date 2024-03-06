import { Router } from 'express';
import RoleController from '../../controllers/RoleController';
import Auth from '../../middlewares/auth';
import { Validate, Requirements } from '../../middlewares/validator';
import { ROLE } from '../../../constants';
import EbsController from '../../controllers/EbsController';

const ebsRouter: Router = Router();

ebsRouter.route('/').get(
    // Auth.authenticate,
    // Validate(Requirements.createRole),
    // Auth.checkRoles(ROLE.ADMIN),
    EbsController.getEbsData
);

export default ebsRouter;
