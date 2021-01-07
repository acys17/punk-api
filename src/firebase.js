import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTR9mA7liyIKWzNUs7HI0WTeBNBqqtSUI",
    authDomain: "punk-api-ba43a.firebaseapp.com",
    projectId: "punk-api-ba43a",
    storageBucket: "punk-api-ba43a.appspot.com",
    messagingSenderId: "846014253657",
    appId: "1:846014253657:web:ef444fcf9a9919549b7f48",
    measurementId: "G-PGWB22TCMY"
};

firebase.initializeApp(firebaseConfig);

// export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;