// firebase-config.js

// Import the modular Firebase SDK components directly from the CDN.
// This file is loaded as an ES module from `index.html`.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqOBYReVwpp-OmV5qJ7Pnv3YBoRLCsXOk",
  authDomain: "pias-4f200.firebaseapp.com",
  projectId: "pias-4f200",
  storageBucket: "pias-4f200.firebasestorage.app",
  messagingSenderId: "426883647930",
  appId: "1:426883647930:web:19c5484ba756356d073583"
};

// Initialize Firebase using the modular API
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the initialized services so other modules can import them
export { auth, db, serverTimestamp };
