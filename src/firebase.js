import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-f6947.firebaseapp.com",
  projectId: "dashboard-f6947",
  storageBucket: "dashboard-f6947.appspot.com",
  messagingSenderId: "325434500394",
  appId: "1:325434500394:web:e9357e651bc51548bc6a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const auth = getAuth()

export const storage = getStorage(app)