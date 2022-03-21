import { NextFunction, Request, Response } from "express";
import { validateJwt } from "../helpers/jwt";


export const validateJwtHeader = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-jwt-kwy'] as string;
    
    if (token) {
        const tokenValid = validateJwt(token);
        if (tokenValid) {
            next();
        }
        else {
            res.statusCode = 401;
            return res.send({ "message": "Token invalid." })
        }
    } else {
        res.statusCode = 401;
        return res.send({ "message": "Token invalid." })
    }
};