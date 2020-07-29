import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiogQqqZKqce-sW1j9n18sIhVUMGoSCl0",
    authDomain: "fb-messenger-clone-b316e.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-b316e.firebaseio.com",
    projectId: "fb-messenger-clone-b316e",
    storageBucket: "fb-messenger-clone-b316e.appspot.com",
    messagingSenderId: "330927580160",
    appId: "1:330927580160:web:5df734caa2db0aa9c924e5",
    measurementId: "G-KBLT7VTY09"
});

const db = firebaseApp.firestore();

export default db;