
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAQewl1Do2AGrlvthqFRKl9hx31BK5KGIs",
  authDomain: "reactfirebase-3cbfe.firebaseapp.com",
  projectId: "reactfirebase-3cbfe",
  storageBucket: "reactfirebase-3cbfe.appspot.com",
  messagingSenderId: "43611152199",
  appId: "1:43611152199:web:38df9f88d1ef033ad7b662",
  measurementId: "G-4VVBVR1N88"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);




export {auth, db, storage}