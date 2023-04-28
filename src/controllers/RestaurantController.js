export default class RestaurantController {
    getRestaurants(req, res) {
        res.send('GET restaurants');
    }

    getRestaurantById(req, res) {
        const id = req.params.id;
        res.send(`Restaurant ${id}`);
    }

    updateRestaurant(req, res) {
        const id = req.params.id;
        res.send(`PUT restaurant ${id}`);
    }

    deleteRestaurant(req, res) {
        const id = req.params.id;
        res.send(`DELETE restaurant ${id}`);
    }

    createRestaurant(req, res) {
        res.send('POST restaurant');
    }

    getVoteRanking(req, res) {
        res.send('GET vote ranking');
    }

    getVoteWinner(req, res) {
        res.send('GET vote winner');
    }

    vote(req, res) {
        res.send('POST vote');
    }
}