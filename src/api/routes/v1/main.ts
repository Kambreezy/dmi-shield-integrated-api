import { Router } from 'express';
import AuthController from '../../controllers/AuthController';
import { Validate, Requirements } from '../../middlewares/validator';

const mainRouter: Router = Router();

mainRouter
    .route('/login')
    .post(Validate(Requirements.login), AuthController.login);
mainRouter
    .route('/signup')
    .post(Validate(Requirements.signup), AuthController.signUp);
mainRouter
    .route('/verify-code')
    .post(Validate(Requirements.verifyCode), AuthController.verifyCode);
mainRouter
    .route('/fetch-login-data')
    .post(Validate(Requirements.fetchLogin), AuthController.fetchUserLoginData);

export default mainRouter;
