import firebase from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "teste-ax4b",
    "private_key_id": "315ef881b6ce3f404eb1f5b1dcc1e8c937b100e3",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLGhF8rD/yvO1e\nGDS582Lav5lLkxkCUqfLIaUuRT+nJhDJEetVNGWpACJgV6vBBk4t/Jmoo18PcLtl\nhV5W0d90PDsRRpY1u8HtrY4SWbwCeyYfWowmt0CSGpX1oZmqggRfIgRhWGEiPSbN\n3BxCaNzeEfalcsI7m3FsS6hrgCmXD3ePUK2mFIr+/qWRwgmctf1oOspz0L9juEVZ\nbLVC/CI6ZWA7sKcUYpOXygkz4bISF37Q3UhKXyzh0+W592nU564C+f12YRxpFU1C\ntqTyE1NH6GBj7qH92DhPWFYr6hxyWHMvuuwCAsRWzrXNwZgFZa5QMKegLJzLqU3W\nkjdECi89AgMBAAECggEAQjmWUSIzWdmbxo47BxUi+zP1bsygn37HIreuTjebSUvi\ntkWHCEnlCiW2j9aWdQKy1FDk47WdpgG6wSArQkD9zT9kfT4YdZ3q3q60QCyNXvu7\n0wZp46fmQJ21nxnZ6typQ0HqzrkMNydcc0yd1FOwDSMrWwhf6CLH6amD2cW5Cf2W\ncuCO6jnomTgAZmt02Di2Myd62J5w1XHPJbtzKHMGAq1s4NCXaHebR4euWPylQSgp\nu+ByoDw3cpd5EywpQeWwiTyN8Sli5vnnIGYWi9jmCc9BnUpfCunOEBQx8xqLmgt1\n+XjfgJyy7UJ/aqUhhrrYh06VmSy3Xrb21ggyZK/KmwKBgQD2tSo0f501JMofXEgS\nlwIy1Wip3KbewtddgW5yVqCauqvStBd7Az5BqGzlwruwm0u2Xx3ndFQ2WmswHLtl\nP1xKvF2e/32dOY1G03KiCG0vUqP77WC7JK6lCc/61sUJDEhNcM00VQ6syChNFgJ1\n6icQyh7WFWWAJSka2ILdigHn3wKBgQDSwHEY49llsCAUWU80zKX6yxrwmso8+CGC\n0Yj1JXZphfkWIyABwo4P1FaOnDvGolfbWQmLZEqjjESKboE8xjHUE9V0wYrK3O8I\nAZ/9+lNL2RNOetTLJ2EvbyvD8REJi1fW9Mj88T3Fy9x1lQ2IQkgtkljxbc6fZcbI\nbVhLtLL8YwKBgDCaKjFjfqYMlGEvPeejpkQ7dL4aASnberAqIocV99fjtJvy7LlI\nP0iSFLoC7hTx0y2feXWynjCDCaDV2DkvDVCP4WXEcYu63dE5MNkpDdGH11R3RFo5\n9MoAr9971h9dMxVGhrarlxOE7yOYlW2DbqTJHOASIQfoyjtGsilQ2eVDAoGAesmi\nWxUNKUDXP+PU0PdW0OqatIoKwED1DUnVWLbN6acju7EVSdE3gaN+FrKR5SXauDKE\n7BCvp9/mYx0E8QqsJ1qy58aHfbABGBISTCAXfb5okDXiWsaDyeYkgpGmEoB72gJe\nQ3iuO9qNhHgmHTg440w7w9XtJ1Nd4JJMejc6fO8CgYEAzWV7PEbfR7mXUiZaYck1\noHGWP7AHo4cSX3OJ8IUpq3sWmm5c/FE0cbs0NUY9RSMT7jO+W7a1Dc9HxhmPumsD\nLQKTlQdlXGBYumiLjzgSCfm0GeKmyj+DE2Rn6xbSDzWBCnE7o+6PgA7BPoiuU/9Y\na81bC96bhPSH2S+VO/J+PGc=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7djxk@teste-ax4b.iam.gserviceaccount.com",
    "client_id": "107895975249352428831",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7djxk%40teste-ax4b.iam.gserviceaccount.com"
}

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://teste-ax4b.firebaseio.com"
});


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB2WN06mmL_3lZFgDlHsL9NpASzL_4NUOw",
//   authDomain: "teste-ax4b.firebaseapp.com",
//   projectId: "teste-ax4b",
//   storageBucket: "teste-ax4b.appspot.com",
//   messagingSenderId: "692309120444",
//   appId: "1:692309120444:web:6364280d42d2f70cc987b9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

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