import { Router } from "express";
import { AuthController } from "../controllers/auth";
import { ValidatorsMiddlewares } from "../middlewares";
import { check } from "express-validator";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new AuthController();

        router.post('/login', [
            check("nombre", "El nombre es obligatorio").not().isEmpty(),
            check("clave", "La clave es obligatoria").not().isEmpty(),
            ValidatorsMiddlewares.validarCampos
        ], controller.login);

        return router;
    }
}