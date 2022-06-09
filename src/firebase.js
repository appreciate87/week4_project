// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDms6SxVuE7vh8qCy665ndRkZgKp5Ra8A8",
  authDomain: "sparta-react-basic-b1898.firebaseapp.com",
  projectId: "sparta-react-basic-b1898",
  storageBucket: "sparta-react-basic-b1898.appspot.com",
  messagingSenderId: "639464180615",
  appId: "1:639464180615:web:7ebac2f5ee314ed9a0a122",
  measurementId: "G-ZHQ283H7Z7"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();