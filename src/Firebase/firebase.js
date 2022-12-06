import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoqFuKSuje05NteGZUw4V6vaR8joyWwos",
  authDomain: "pockerapp-ed316.firebaseapp.com",
  projectId: "pockerapp-ed316",
  storageBucket: "pockerapp-ed316.appspot.com",
  messagingSenderId: "1019623051454",
  appId: "1:1019623051454:web:3bebddeae24841a5200eef",
  measurementId: "G-LDYX2SBEDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth}