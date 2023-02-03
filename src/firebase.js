import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZYdXfbvnMpHODCw9mUIpIXnVFf5uyPpM",
  authDomain: "tesla-clone-eb138.firebaseapp.com",
  projectId: "tesla-clone-eb138",
  storageBucket: "tesla-clone-eb138.appspot.com",
  messagingSenderId: "1022705318499",
  appId: "1:1022705318499:web:bad353e6fb7f9288f59656"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);