import { envs } from "./config";
import { connectDB } from "./data";
import { AppRoutes, Server } from "./models";

(async() => {
    await connectDB();

    const server = new Server({
        https_cert: envs.HTTPS_CERT,
        https_key: envs.HTTPS_KEY,
        isHttps: envs.HTTPS,
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    server.start();
})();