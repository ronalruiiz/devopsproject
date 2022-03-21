import { Router } from "express";
import { validateApiKeyHeader } from "../middlewares/apiKey";
import { validateJwtHeader } from "../middlewares/jwt";
import { login, sendMessage } from "./controller";

const securityRoutes = Router();

securityRoutes.post("/login", [validateApiKeyHeader], login);
securityRoutes.post("/send-message", [validateApiKeyHeader, validateJwtHeader], sendMessage)

export default securityRoutes;