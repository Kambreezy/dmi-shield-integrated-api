import { slugify } from '../../utils/helpers';
import { Doc503Input, Doc503Output } from '../models/Document503';
import DocumentRepository from '../repositories/DocumentRepository';
import nodemailer from 'nodemailer';

interface IEmailService {
    // createDocument(payload: Doc503Input): Promise<Doc503Output>;
}

class EmailService implements IEmailService {
    constructor() {}
    // async createDocument(payload: Doc503Input): Promise<Doc503Output> {
    //     // const slug = slugify(payload.userId);
    //     // const role = await RoleRepository.getRoleBySlug(slug);
    //     //
    //     // if (role) {
    //     //   throw new Error('Role is exist');
    //     // }
    //
    //     return DocumentRepository.createDocument({
    //         ...payload
    //     });
    // }

    send2Fa(userEmail: string) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const generateVerificationCode = () => {
            return Math.floor(1000 + Math.random() * 9000).toString();
        };

        const verificationCodes = new Map<string, string>();

        const verificationCode = generateVerificationCode();

        // Store the code with the user's email
        verificationCodes.set(userEmail, verificationCode);

        // Send the verification code via email
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Two-Factor Authentication Code',
            text: `Your verification code is: ${verificationCode}`
        });
    }
}

export default new EmailService();
