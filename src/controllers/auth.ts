import { Request, Response } from "express";
import { prisma } from "../data";

export class AuthController {
    constructor() {}

    public login = async(req: Request, res: Response) => {
        const {nombre, clave} = req.body;
        const { empleado } = prisma;
        try {
            
            const existEmpleado = await empleado.findFirst({where: { nombre }});
            if(!existEmpleado) return res.status(400).json({ msg: "Credenciales no validas" });
            if(clave !== existEmpleado.clave) return res.status(400).json({ msg: "Credenciales no validas" });

            res.status(200).json(existEmpleado);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'Error del servidor'
            });
        }
    }
}