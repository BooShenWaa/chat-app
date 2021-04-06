import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqjRpRlJctQPLkfRRlRnC9jnhpAb_Lisk",
  authDomain: "chat-app-2457e.firebaseapp.com",
  projectId: "chat-app-2457e",
  storageBucket: "chat-app-2457e.appspot.com",
  messagingSenderId: "134118832804",
  appId: "1:134118832804:web:376c79e5cb566241ecc431",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
