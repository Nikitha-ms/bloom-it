import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHbyufpB21SqlGbUacE5kzGAnOpJfgoYw",
  authDomain: "cab-booking-5d8db.firebaseapp.com",
  projectId: "cab-booking-5d8db",
  storageBucket: "cab-booking-5d8db.appspot.com",
  messagingSenderId: "966638990224",
  appId: "966638990224:web:06ec6403aca5effc767915",
  measurementId: "G-GBQ055WJ7N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
