
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBQQMBzdUjKos5V1aCsGlK91drav-vT9nE",
  authDomain: "reactwithfirebase-7344e.firebaseapp.com",
  projectId: "reactwithfirebase-7344e",
  storageBucket: "reactwithfirebase-7344e.appspot.com",
  messagingSenderId: "932894382387",
  appId: "1:932894382387:web:e5d1c7e6bfd4efc409c646",
  measurementId: "G-BZ8VDKS8FG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);




export {auth, db, storage}