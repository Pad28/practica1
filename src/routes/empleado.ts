import { Router } from "express";
import { EmpleadoController } from "../controllers/empleado";
import { check } from "express-validator";
import { ValidatorsMiddlewares } from "../middlewares";

export class EmpleadoRoutes {
    static get routes(): Router {
        const router = Router()
        const controller = new EmpleadoController();

        router.post("/", [
            check("nombre", "El nombre es obligatorio").not().isEmpty(),
            check("clave", "La clave es obligatoria").not().isEmpty(),
            check("telefono", "El telefono es obligatorio").not().isEmpty(),
            ValidatorsMiddlewares.validarCampos,
        ], controller.crearEmpleado);
            
        return router;
    }
}