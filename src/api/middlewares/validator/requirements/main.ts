import { body } from 'express-validator';

const mainRequirement = {
    login: [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5 })
    ],
    signup: [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5 }),
        body('firstName').isString().isLength({ min: 1 }),
        body('lastName').isString().optional({ nullable: true })
    ],
    verifyCode: [
        body('email').isEmail(),
        body('verificationCode').isString().isLength({ min: 2 })
    ],
    fetchLogin: [body('email').isEmail()]
};

export default mainRequirement;
