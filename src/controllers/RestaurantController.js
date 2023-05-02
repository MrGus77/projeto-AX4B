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

            if (!res) return sortedRestaurants;

            res?.status(200)?.send(sortedRestaurants);
        } catch (error) {
            res?.status(500)?.send(error);
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

    async getIncrementedId(collection, orderBy) {
        try {
            const ref = this.db.collection(collection).orderBy(orderBy, 'desc').limit(1);
            const snapshot = await ref.get();

            let lastId = 0;

            const lastDoc = snapshot?.docs[0];

            lastId = lastDoc ? Number(lastDoc?.id) : lastId;

            const newId = lastId + 1;

            return newId;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createRestaurant(req, res) {
        try {
            const name = req.body.name;
            const id = await this.getIncrementedId('restaurant', 'code');

            const restaurantRef = this.db.collection('restaurant')
            const newRestaurant = { code: id, name };

            await restaurantRef.doc(String(id)).set(newRestaurant);

            res.status(200).send(`Restaurant with ID ${id} created successfully`);
        } catch (error) {
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

    async getVoteRanking(req, res) {
        try {
            const voteRef = this.db.collection('vote');
            const snapshot = await voteRef.get();

            if (snapshot.empty) return res.sendStatus(404);

            const votes = [];

            snapshot.forEach(doc => {
                votes.push(doc.data().restaurant_code);
            });

            const restaurants = await this.getRestaurants()

            const votesCount = {};

            for (const vote of votes) {
                const restaurant = restaurants?.find(r => r.code === vote)

                if (!restaurant) continue;

                const { name, code } = restaurant;

                if (!votesCount[name]) votesCount[name] = { votes: 1, code };
                else votesCount[name].votes++;
            }

            const votesArray = Object.entries(votesCount)
                .map(([name, { votes, code }]) => ({ code, name, votes }))
                .sort((a, b) => b.votes - a.votes);

            if (!res) return votesArray;

            res?.status(200).send(votesArray);
        } catch (error) {
            res?.status(500).send(error);
        }
    }

    async getVoteWinner(req, res) {
        try {
            const ranking = await this.getVoteRanking();

            if (!ranking?.length) return res.sendStatus(404);

            res.status(200).send(ranking[0]);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async vote(req, res) {
        try {
            const { user, restaurant_code } = req.body;

            const date = new Date().getTime();
            const id = await this.getIncrementedId('vote', 'id');

            const voteRef = this.db.collection('vote')
            const newVote = { date, user, restaurant_code, id };

            await voteRef.doc(String(id)).set(newVote);

            res.status(200).send(`Vote with ID ${id} created successfully`);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }
}