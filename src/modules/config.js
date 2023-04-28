import dotenv from "dotenv";

export default function config(app) {
    dotenv.config();

    app.config = {
        port: process.env.PORT,
    }
}