import server from "./server.js";
import config from "./config.js";

export default function modules(app) {
    config(app);
    server(app);
}