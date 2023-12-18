import { Router } from 'express';
import RoleController from '../../controllers/RoleController';
import Auth from '../../middlewares/auth';
import { Validate, Requirements } from '../../middlewares/validator';
import { ROLE } from '../../../constants';
import UploadFileController from '../../controllers/UploadFileController';

const documentsRouter: Router = Router();

documentsRouter.route('/').post(
    Auth.authenticate,
    // Validate(Requirements.createRole),
    // Auth.checkRoles(ROLE.ADMIN),
    UploadFileController.createDocument
);

export default documentsRouter;
