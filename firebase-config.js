// firebase-config.js

// This file is loaded directly in the browser via a <script> tag. In this
// context we can't use ES module imports, so we rely on the globally exposed
// `firebase` object provided by the Firebase CDN scripts included in
// `index.html`.

 

// Your web app's Firebase configuration

const firebaseConfig = {
  // Values are injected at build time from environment variables. This keeps
  // sensitive credentials out of source control while still making them
  // available to client-side code after the Netlify build process replaces the
  // `process.env.*` references.
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
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
