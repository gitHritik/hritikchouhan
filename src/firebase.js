import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCF_JOS7E2qRJynjrvguKgPFpc_TTJSco0",
  authDomain: "portfolio-data-f1764.firebaseapp.com",
  projectId: "portfolio-data-f1764",
  storageBucket: "portfolio-data-f1764.appspot.com",
  messagingSenderId: "89478673305",
  appId: "1:89478673305:web:4e7ea8aeafc3df53959908",
  measurementId: "G-J88SNHK80K",
});

const db = firebaseApp.firestore();
export { db };
