import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe9G9W5jBHxesENFLmxs5LlOoBQsKlpOk",
  authDomain: "thedojosite-v1.firebaseapp.com",
  projectId: "thedojosite-v1",
  storageBucket: "thedojosite-v1.appspot.com",
  messagingSenderId: "98641213501",
  appId: "1:98641213501:web:6e24352ca31da754ced254",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init individual services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
