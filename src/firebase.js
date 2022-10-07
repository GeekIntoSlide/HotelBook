// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEbIXa7P2tTVhNeghN-GyEyw5TS6K3cts",
  authDomain: "hotelbook-d58f5.firebaseapp.com",
  projectId: "hotelbook-d58f5",
  storageBucket: "hotelbook-d58f5.appspot.com",
  messagingSenderId: "285436230762",
  appId: "1:285436230762:web:5345bdee178128d9ebde13",
  measurementId: "G-VBWS4575FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore();