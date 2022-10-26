// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNSeTxrzsIv7BtooHTPpe4_XtsXCK40oM",
  authDomain: "practice-e1f62.firebaseapp.com",
  projectId: "practice-e1f62",
  storageBucket: "practice-e1f62.appspot.com",
  messagingSenderId: "575732272341",
  appId: "1:575732272341:web:7055131492f51123e1665c",
  measurementId: "G-KXVSKP7ERD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };