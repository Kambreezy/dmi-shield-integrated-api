import * as bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import { UserInput, UserOutput } from '../models/User';
import JWT from '../../utils/jwt';
import { LoginResponseType } from '../types/auth';
import EmailService from './EmailService';

interface IAuthService {
    login(payload: UserInput): Promise<LoginResponseType>;
    signUp(payload: UserInput): Promise<UserOutput>;
}

class AuthService implements IAuthService {
    async login(payload: UserInput): Promise<any> {
        const user = await UserRepository.getUserByEmail(payload.email);

        if (!user) {
            throw new Error('User not found');
        }

        const isValid = bcrypt.compareSync(payload.password, user.password);

        if (!isValid) {
            throw new Error('Email and Password is not match');
        }

        const token = await JWT.signToken(user.id);

        if (!token) {
            throw new Error('Invalid token');
        }

        if (user) {
            // User was successfully created, send the 2FA email
            EmailService.send2Fa(payload.email);
        }

        return {
            email: user.email
        };
    }

    async signUp(payload: UserInput): Promise<UserOutput> {
        const user = await UserRepository.getUserByEmail(payload.email);

        if (user) {
            throw new Error('Email must be unique');
        }

        const hashedPassword = bcrypt.hashSync(payload.password, 5);

        return UserRepository.createUser({
            ...payload,
            password: hashedPassword
        });
    }

    async getUserLoginData(email: string): Promise<LoginResponseType> {
        const user = await UserRepository.getUserByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        const token = await JWT.signToken(user.id);

        if (!token) {
            throw new Error('Invalid token');
        }

        return {
            email: user.email,
            fullName: `${user.firstName} ${user.lastName}`,
            token: token,
            userId: user.id
        };
    }
}

export default new AuthService();
