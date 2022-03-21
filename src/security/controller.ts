import { Request, Response } from "express";
import { createJwt } from "../helpers/jwt";



export const login = (req: Request, res: Response) => {
    try {
        const { body } = req;
        
        if (body.username === 'admin' && body.password === 'admin') {
            return res.send({ "token": createJwt({ "example": "payload" }) ,"message":""});
        }
        res.statusCode = 401;
        return res.send({ "message":"User and pass invalid."});
    } catch (error) {
        res.statusCode = 500;
        return res.send({"message":"Error..."})
    }
}

export const sendMessage = (req:Request, res:Response)=>{
    try {
        const { to } = req.body;        
        return res.send({ "message":`Hello ${to} your message will be send.` });
    } catch (error) {
        res.statusCode = 500;
        return res.send({"message":"Error..."})
    }
}