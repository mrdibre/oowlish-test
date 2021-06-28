import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmJfMUK6TgyZyKMMXoRLNBsURYjdiW5og",
  authDomain: "oowlish-test-13cae.firebaseapp.com",
  projectId: "oowlish-test-13cae",
  storageBucket: "oowlish-test-13cae.appspot.com",
  messagingSenderId: "563187389123",
  appId: "1:563187389123:web:9ea34b1ed17b5dc3bb0876",
};

const registerFirebase = () => firebase.initializeApp(firebaseConfig);

const getDatabase = () => firebase.database();

export { firebaseConfig, registerFirebase, getDatabase };
