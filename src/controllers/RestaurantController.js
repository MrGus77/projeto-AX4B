import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, set, update, remove, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2WN06mmL_3lZFgDlHsL9NpASzL_4NUOw",
    authDomain: "teste-ax4b.firebaseapp.com",
    projectId: "teste-ax4b",
    storageBucket: "teste-ax4b.appspot.com",
    messagingSenderId: "692309120444",
    appId: "1:692309120444:web:6364280d42d2f70cc987b9"
};

initializeApp(firebaseConfig);

const database = getDatabase();

export default class RestaurantController {
    async getRestaurants(req, res) {
        const restaurantsRef = ref(database, 'restaurants');

        try {
            const snapshot = await get(restaurantsRef);
            const restaurants = [];

            snapshot.forEach(childSnapshot => {
                const restaurant = childSnapshot.val();
                restaurant.id = childSnapshot.key;
                restaurants.push(restaurant);
            });

            res.send(restaurants);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error getting restaurants');
        }
    }

    getRestaurantById(req, res) {
        const id = req.params.id;
        res.send(`Restaurant ${id}`);
    }

    updateRestaurant(req, res) {
        const id = req.params.id;
        res.send(`PATCH restaurant ${id}`);
    }

    deleteRestaurant(req, res) {
        const id = req.params.id;
        res.send(`DELETE restaurant ${id}`);
    }

    createRestaurant(req, res) {
        const { name, code } = req.body;

        const newRestaurantRef = push(ref(database, 'restaurants'), {
            name,
            code,
        });

        res.send(`New restaurant created with ID ${newRestaurantRef.key}`);
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