import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6buCp8Wfpzyae95TqdBqguxQxEjpMQsU",
    authDomain: "fb-clone-543b3.firebaseapp.com",
    databaseURL: "https://fb-clone-543b3.firebaseio.com",
    projectId: "fb-clone-543b3",
    storageBucket: "fb-clone-543b3.appspot.com",
    messagingSenderId: "622723364987",
    appId: "1:622723364987:web:820fd0406e89b37ff84ade",
    measurementId: "G-WS3JGXZ60L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;