import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYAu4eb5-s-cQTgiS1esXEy4edKZZbVNU",
  authDomain: "reactappguzmanfrancisco.firebaseapp.com",
  projectId: "reactappguzmanfrancisco",
  storageBucket: "reactappguzmanfrancisco.appspot.com",
  messagingSenderId: "1057037211008",
  appId: "1:1057037211008:web:44cb4d6f95385977c15d65"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)