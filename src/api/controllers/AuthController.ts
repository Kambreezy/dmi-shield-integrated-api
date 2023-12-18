import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';
import { LoginType, SignUpType } from '../types/auth';
import EmailService from '../services/EmailService';

class AuthController {
    async login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const payload: LoginType = req.body;
            const token = await AuthService.login(payload);
            res.status(200).send({
                message: 'Logged in successfully',
                data: token
            });
        } catch (error) {
            next(error);
        }
    }

    async signUp(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const payload: SignUpType = req.body;
            await AuthService.signUp(payload);
            res.status(200).send({
                message: 'Signed up successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    async verifyCode(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { email, verificationCode } = req.body;
            const loginData = await EmailService.verifyCode(
                email,
                verificationCode
            );

            if (loginData) {
                res.status(200).send({
                    message: 'Code verification successful',
                    data: loginData
                });
            } else {
                res.status(400).send({
                    message: 'Code verification failed'
                });
            }
        } catch (error) {
            next(error);
        }
    }

    async fetchUserLoginData(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { email } = req.body;
            const loginResponse = await AuthService.getUserLoginData(email);

            if (loginResponse) {
                res.status(200).send({
                    message: 'Successfully signed in.',
                    data: loginResponse
                });
            } else {
                res.status(400).send({
                    message: 'Code verification failed'
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

export default new AuthController();
