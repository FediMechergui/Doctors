import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQe-9QWgXTtktalJiGF594ZkMEoidkRLs",
  authDomain: "doctor-database-5c406.firebaseapp.com",
  projectId: "doctor-database-5c406",
  storageBucket: "doctor-database-5c406.appspot.com",
  messagingSenderId: "1010496491926",
  appId: "1:1010496491926:web:4bdbd7b679311668f24db7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default {auth,db};