import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmWcsfFlCstJSpwA6b-L_H9VRBnTVdv5A",
  authDomain: "aimron-marketplace.firebaseapp.com",
  projectId: "aimron-marketplace",
  storageBucket: "aimron-marketplace.appspot.com",
  messagingSenderId: "528588700841",
  appId: "1:528588700841:web:1b9b795c240748f4ebbdb8",
  measurementId: "G-DXMDDXEMLC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;