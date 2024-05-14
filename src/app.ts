import { envs } from "./config";
import { connectDB } from "./data";
import { AppRoutes, Server } from "./models";

(async() => {
    await connectDB();

    const server = new Server({
        https_cert: "",
        https_key: "",
        isHttps: false,
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    server.start();
})();