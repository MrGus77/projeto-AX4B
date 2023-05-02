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
            const restaurantRef = this.db.collection('restaurant');
            const snapshot = await restaurantRef.get();

            if (snapshot.empty) return res.sendStatus(404);

            const restaurants = [];

            snapshot.forEach(doc => {
                restaurants.push(doc.data());
            });

            const sortedRestaurants = restaurants.sort((a, b) => b.code - a.code);

            res.status(200).send(sortedRestaurants);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getRestaurantById(req, res) {
        try {
            const id = req.params.id;
            const restaurantRef = this.db.collection('restaurant').doc(id);
            const doc = await restaurantRef.get();

            if (!doc.exists) return res.sendStatus(404);

            res.status(200).send(doc.data());
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getIncrementedId() {
        try {
            const restaurantRef = this.db.collection('restaurant').orderBy('code', 'desc').limit(1);
            const snapshot = await restaurantRef.get();

            let lastId = 0;

            const lastDoc = snapshot?.docs[0];

            lastId = lastDoc ? lastDoc?.data()?.code : lastId;

            const newId = lastId + 1;

            return newId;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createRestaurant(req, res) {
        try {
            const name = req.body.name;
            const id = await this.getIncrementedId();
            const restaurantRef = this.db.collection('restaurant')
            const newRestaurant = { code: id, name };

            await restaurantRef.doc(String(id)).set(newRestaurant);

            res.status(200).send(`Restaurant with ID ${id} created successfully`);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

    async deleteRestaurant(req, res) {
        try {
            const id = req.params.id;
            const restaurantRef = this.db.collection('restaurant').doc(id);

            await restaurantRef.delete();

            res.status(200).send(`Successfully deleted restaurant with ID ${id}`);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async updateRestaurant(req, res) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const restaurantRef = this.db.collection('restaurant').doc(id);

            await restaurantRef.update(updateData);

            res.status(200).send(`Successfully updated restaurant with ID ${id}`);
        } catch (error) {
            res.status(500).send(error);
        }
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