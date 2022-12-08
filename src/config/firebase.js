import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyANgZiMnOEsyTj2VlNrQDSQxZs2Kstqeqk",
  authDomain: "productos-app-f6cb9.firebaseapp.com",
  projectId: "productos-app-f6cb9",
  storageBucket: "productos-app-f6cb9.appspot.com",
  messagingSenderId: "851890694538",
  appId: "1:851890694538:web:f16dfc18287d038beb8073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export {
    FirebaseFirestore,
}