export default function restaurant(app) {
    app.get("/restaurant")
    app.get("/restaurant/:id")
    app.post("/restaurant")


    app.get("/restaurant/voting")
    app.get("/restaurant/voting/winner")
    app.post("/restaurant/voting")
}
