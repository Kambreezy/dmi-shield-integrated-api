export type LoginType = {
    email: string;
    password: string;
};

export type SignUpType = {
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
};

export type LoginResponseType = {
    email: string;
    fullName: string;
    token: string;
    userId: number;
};
