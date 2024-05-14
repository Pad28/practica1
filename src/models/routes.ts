import { Router } from "express";
import { EmpleadoRoutes } from "../routes/empleado";
import { AuthRoutes } from "../routes/auth";

export class AppRoutes {
    public static get routes(): Router {
        const router = Router();
        
        router.use("/api/empleado", EmpleadoRoutes.routes);
        router.use("/api/auth", AuthRoutes.routes);

        return router;
    }
}