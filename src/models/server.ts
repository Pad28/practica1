import fs from "fs";
import https from 'https'; 
import express, { Application, Router } from "express";
import cors from 'cors';
import compression from "compression";


interface ServerOptions {
    port: number;
    routes: Router;

    isHttps: boolean;
    https_cert: string;
    https_key: string;
}

export class Server {

    private readonly app: Application;
    

    constructor (
        private readonly options: ServerOptions,
    ) {
        this.app = express();
    }

    public async start() {
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(cors());
        this.app.use(compression());

        this.app.use( this.options.routes );
        this.app.get("*", (req, res) => res.send("<h1>404 | Not Found</h1>"));
        
        if(this.options.isHttps) {
            console.log("IS_HTTPS");
            
            const httpsOptions = {
                key: fs.readFileSync(this.options.https_key),
                cert: fs.readFileSync(this.options.https_cert),
            }

            https.createServer(httpsOptions, this.app).listen(this.options.port, () => {
                console.log(`Servidor escuchando en puerto ${this.options.port}`);
            });
            return;
        } 
        
        this.app.listen(this.options.port, () => {
            console.log(`Servidor escuchando en puerto ${this.options.port}`);
        })
    }

}