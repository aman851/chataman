import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN-8lmIWuzkAyC0HPsiwQ0-3ynptdoQt0",
  authDomain: "chataman-2260b.firebaseapp.com",
  projectId: "chataman-2260b",
  storageBucket: "chataman-2260b.appspot.com",
  messagingSenderId: "176701603277",
  appId: "1:176701603277:web:21864915258ddc24c15884"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
