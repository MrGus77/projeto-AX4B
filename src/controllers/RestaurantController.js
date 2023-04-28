export default class RestaurantController {
    constructor(db) {
        this.db = db;

        this.getRestaurants = this.getRestaurants.bind(this);
        this.getRestaurantById = this.getRestaurantById.bind(this);
        this.updateRestaurant = this.updateRestaurant.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
        this.createRestaurant = this.createRestaurant.bind(this);
        this.getVoteRanking = this.getVoteRanking.bind(this);
        this.getVoteWinner = this.getVoteWinner.bind(this);
        this.vote = this.vote.bind(this);
    }

    async getRestaurants(req, res) {
        try {
            const restaurantRef = this.db.collection('restaurant').doc('BwVLZPHypNCMyKiFiCE9')
            const doc = await restaurantRef.get();

            if (!doc.exists) return res.sendStatus(404);

            res.status(200).send(doc.data());
        } catch (error) {
            res.status(500).send(error)
        }
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