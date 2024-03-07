import nodemailer from 'nodemailer';
import AuthService from './AuthService';
import { LoginResponseType } from '../types/auth';

interface IEmailService {
    send2Fa(userEmail: string): void;
    verifyCode(
        userEmail: string,
        enteredCode: string
    ): Promise<LoginResponseType>;
}

class EmailService implements IEmailService {
    private verificationCodes: Map<string, string>;

    constructor() {
        this.verificationCodes = new Map();
    }

    private generateVerificationCode(): string {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }

    public send2Fa(userEmail: string): void {
        try {

            console.log('Email sending');
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            const verificationCode = this.generateVerificationCode();

            // Store the code with the user's email
            this.verificationCodes.delete(userEmail);
            this.verificationCodes.set(userEmail, verificationCode);

            // Send the verification code via email
            transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: userEmail,
                subject: 'Shield Authentication Code',
                text: `Your verification code is: ${verificationCode}`
            });

            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            // Optionally, you can throw the error again or handle it in a way that makes sense for your application.
            // For example, you might want to log the error or inform the user about the issue.
            // throw new Error('Failed to send 2FA email');
        }
    }

    public async verifyCode(
        userEmail: string,
        enteredCode: string
    ): Promise<LoginResponseType> {
        const storedCode = this.verificationCodes.get(userEmail);

        if (storedCode === enteredCode) {
            // Code is valid, do something here
            try {
                console.log('Code confirmed');
                const result = await AuthService.getUserLoginData(userEmail);
                this.verificationCodes.delete(userEmail);
                return result;
            } catch (error) {
                // Handle errors from AuthService.getUserLoginData if needed
                console.error('Error getting user login data:', error);
                throw new Error('Failed to get user login data');
            }
        } else {
            // Code is invalid, do something here
            return Promise.reject(new Error('Invalid verification code'));
        }
    }
}

export default new EmailService();
