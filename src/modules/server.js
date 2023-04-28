import express from 'express';

export default function server(app) {
    app.use(express.json());

    app.listen(app?.config?.port, () => {
        console.info("[Server] started on port " + app?.config?.port);
    });

    process.on("SIGINT", () => {
        console.warn("[Server] Closing connection");
    });
}