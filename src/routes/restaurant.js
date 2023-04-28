import RestaurantController from "../controllers"

export default function restaurant(app) {
    const controller = new RestaurantController()

    app.post("/restaurant", controller.createRestaurant)
    app.get("/restaurant", controller.getRestaurants)
    app.get("/restaurant/:id", controller.getRestaurantById)
    app.patch("/restaurant/:id", controller.updateRestaurant)
    app.delete("/restaurant/:id", controller.deleteRestaurant)

    app.get("/restaurant/voting")
    app.get("/restaurant/voting/winner")
    app.post("/restaurant/voting")
}
