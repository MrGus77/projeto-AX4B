import server from "./server";
import config from "./config";

export default function modules(app) {
    config(app);
    server(app);
}