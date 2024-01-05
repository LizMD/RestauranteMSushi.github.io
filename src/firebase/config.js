
import firebase from "firebase/compat/app";

import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCDNfJDqDWnTgv48VFA7zCNFWVjlBfrlM",
  authDomain: "cuarto-proyecto-35385.firebaseapp.com",
  projectId: "cuarto-proyecto-35385",
  storageBucket: "cuarto-proyecto-35385.appspot.com",
  messagingSenderId: "474361421599",
  appId: "1:474361421599:web:cd1212648b5d457a381a2a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestoreDB = app.firestore()
