import { NextFunction, Request, Response } from "express";

export const validateApiKeyHeader = async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-parse-rest-api-key'];
    
    if (apiKey) {
        if (apiKey === '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c') {
            next();
        }
        else {
            res.statusCode = 403;
            return res.send({ "message": "Not allowed." })
        }
    } else {
        res.statusCode = 403;
        return res.send({ "message": "Not allowed." })
    }
};