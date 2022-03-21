import jwt from "jsonwebtoken";

const SECRET_KEY = 'SECRET_TEST_KEY_1';

export const createJwt = (payload: any) => {
    var token = jwt.sign(payload, SECRET_KEY);
    return token;
}

export const validateJwt = (token: string): any | null => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}