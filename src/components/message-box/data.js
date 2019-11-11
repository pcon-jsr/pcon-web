import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCea0PYqoimwslod2Ta3XzZInyy6j606Ks",
    authDomain: "pcondatabase.firebaseapp.com",
    databaseURL: "https://pcondatabase.firebaseio.com",
    projectId: "pcondatabase",
    storageBucket: "pcondatabase.appspot.com",
    messagingSenderId: "190212834116",
    appId: "1:190212834116:web:db31467319ca1d71"
  };

 
firebase.initializeApp(firebaseConfig);


 export default firebase;