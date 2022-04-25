import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDidYbwZIkymyQTFb0DeW2PpZtjaHdql1E",
  authDomain: "ema-john-simple-with-auth-f926.firebaseapp.com",
  projectId: "ema-john-simple-with-auth-f926",
  storageBucket: "ema-john-simple-with-auth-f926.appspot.com",
  messagingSenderId: "1006845458972",
  appId: "1:1006845458972:web:bab464ddbda62539d67dd9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;