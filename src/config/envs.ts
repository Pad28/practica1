import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(),
    DATABASE_URL: get('DATABASE_URL').required().asString(),
    HTTPS: get("HTTPS").required().asBool(),
    HTTPS_CERT: get("HTTPS_CERT").required().asString(),
    HTTPS_KEY: get("HTTPS_KEY").required().asString(),
}
