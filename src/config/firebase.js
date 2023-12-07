
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAfBOw-Y5DL7VKO09k0b-TMEymEtugGuk",
  authDomain: "librosvibes.firebaseapp.com",
  projectId: "librosvibes",
  storageBucket: "librosvibes.appspot.com",
  messagingSenderId: "29391213014",
  appId: "1:29391213014:web:4b36bf2095ba556d749477"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);