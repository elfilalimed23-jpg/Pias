// firebase-config.js

// This file is loaded directly in the browser via a <script> tag. In this
// context we can't use ES module imports, so we rely on the globally exposed
// `firebase` object provided by the Firebase CDN scripts included in
// `index.html`.

 

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDqOBYReVwpp-OmV5qJ7Pnv3YBoRLCsXOk",

  authDomain: "pias-4f200.firebaseapp.com",

  projectId: "pias-4f200",

  storageBucket: "pias-4f200.firebasestorage.app",

  messagingSenderId: "426883647930",

  appId: "1:426883647930:web:19c5484ba756356d073583"

};

// Initialize Firebase using the compat API. This mirrors the initialization
// in Firebase's quickstart examples and avoids the "Cannot use import statement
// outside a module" error that occurred when this file attempted to use ES
// module syntax in a non-module script.

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

// Expose the initialized services globally so other scripts can use them.
// (e.g., main.js expects `auth` and `db` to be defined)
window.auth = auth;
window.db = db;
