import firebase from 'firebase';
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCxuRvBh7LLDVVz9qMtinLOYpM2ngGBtB0",
    authDomain: "twitter-clone-420.firebaseapp.com",
    projectId: "twitter-clone-420",
    storageBucket: "twitter-clone-420.appspot.com",
    messagingSenderId: "164905995183",
    appId: "1:164905995183:web:2371fa8ff48bbd0bcefd5a",
    measurementId: "G-D2VVN75LX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;