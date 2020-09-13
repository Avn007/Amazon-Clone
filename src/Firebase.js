import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBXayE8ZeazES2FfEMs8bgZL_ijx041l1E",
        authDomain: "clone-1bc35.firebaseapp.com",
        databaseURL: "https://clone-1bc35.firebaseio.com",
        projectId: "clone-1bc35",
        storageBucket: "clone-1bc35.appspot.com",
        messagingSenderId: "140142503599",
        appId: "1:140142503599:web:0985743e3ee647b1e7d65a",
        measurementId: "G-JGW0TPY2M6"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };