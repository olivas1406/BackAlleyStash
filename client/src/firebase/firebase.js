import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/database";

const config = {
    apiKey: "AIzaSyCLwOF0wwViocyz2nucxK7tqXBJDI9u8hQ",
    authDomain: "money-7ff05.firebaseapp.com",
    databaseURL: "https://money-7ff05.firebaseio.com",
    projectId: "money-7ff05",
    storageBucket: "money-7ff05.appspot.com",
    messagingSenderId: "264190086111"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
  auth,
}
