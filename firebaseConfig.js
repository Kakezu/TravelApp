import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDshjEgt_3tPMykaciRi1uVPanxI28wbsA",
  authDomain: "fir-auth-a1906.firebaseapp.com",
  projectId: "fir-auth-a1906",
  storageBucket: "fir-auth-a1906.appspot.com",
  messagingSenderId: "186151171357",
  appId: "1:186151171357:web:9edb656b7789c38f449df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
