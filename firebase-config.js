// firebase-config.js

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

 

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDqOBYReVwpp-OmV5qJ7Pnv3YBoRLCsXOk",

  authDomain: "pias-4f200.firebaseapp.com",

  projectId: "pias-4f200",

  storageBucket: "pias-4f200.firebasestorage.app",

  messagingSenderId: "426883647930",

  appId: "1:426883647930:web:19c5484ba756356d073583"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();
