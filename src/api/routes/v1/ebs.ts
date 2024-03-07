import { Router } from 'express';
import EbsController from '../../controllers/EbsController';

const ebsRouter: Router = Router();

ebsRouter.route('/mdharura').get(
    // Auth.authenticate,
    // Validate(Requirements.createRole),
    // Auth.checkRoles(ROLE.ADMIN),
    EbsController.getMdharuraData
);

export default ebsRouter;
