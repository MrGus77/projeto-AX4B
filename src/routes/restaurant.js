import RestaurantController from "../controllers/index.js"
import database from '../database/database.js'

export default function restaurant(app) {
    const controller = new RestaurantController(database)

    app.post("/restaurant", controller.createRestaurant)
    app.get("/restaurant", controller.getRestaurants)
    app.get("/restaurant/:id", controller.getRestaurantById)
    app.patch("/restaurant/:id", controller.updateRestaurant)
    app.delete("/restaurant/:id", controller.deleteRestaurant)

    app.get("/restaurant/voting", controller.getVoteRanking)
    app.get("/restaurant/voting/winner", controller.getVoteWinner)
    app.post("/restaurant/voting", controller.vote)
}
