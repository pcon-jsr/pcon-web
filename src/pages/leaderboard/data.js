import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBwqVQI79CkOrneUX5ASWTdKhvTmwjcCk8",
    authDomain: "pcon-leaderboard.firebaseapp.com",
    databaseURL: "https://pcon-leaderboard.firebaseio.com",
    projectId: "pcon-leaderboard",
    storageBucket: "",
    messagingSenderId: "426286517188",
    appId: "1:426286517188:web:761f277dfb929621"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

    export default firebase;