import { Request, Response } from "express";
import { prisma } from "../data";

export class EmpleadoController {

    constructor() {}

    public crearEmpleado = async(req: Request, res: Response) => {
        const { nombre } = req.body;
        const { empleado } = prisma;
        try {

            const empleadoExist = await empleado.findFirst({ where: { nombre } });
            if(empleadoExist) return res.status(401).json({ error: `Nombre de empleado no disponible` });
            const newEmpleado = await empleado.create({data: req.body});
            res.status(200).json(newEmpleado);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Error de servidor'
            });
        }
    }
}