import 'express';
import { UserOutput } from '../api/models/User';

declare global {
    namespace Express {
        interface Request {
            userdata: UserOutput;
        }
    }
}

// declare module 'openhim-mediator-utils' {
//     export function reg(): void;
// }
