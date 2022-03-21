import express, { Application, NextFunction, Request, Response } from "express";
import securityRoutes from "../security/routes";


export class AppServer {

    private app!: Application;
    private port!: string;
    private PREFIX = 'DevOps';

    private apiPaths = {
        "security": `/${this.PREFIX}/security`
    }
    constructor() {
        this.app = express();
        this.port = '3000';
        this.middlewares();
        this.routes();
        // dotenv.config();
    }

    routes() {
        this.app.use(this.apiPaths.security, securityRoutes);

        this.app.use(function (req: Request, res: Response, next: NextFunction) {
            if (!req.route)
                res.statusCode = 404;
            return res.json({ "message": "ERROR" });
        });
    }

    middlewares() {
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            process.env.TZ = 'America/Guayaquil';
            console.log(`Server on port ${this.port}`);
        });
    }
}