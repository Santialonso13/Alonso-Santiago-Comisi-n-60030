import { getFirestore } from "firebase/firestore";
import{ initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD61EWcRiTSyZA1GNKMfYFlF4hlJA0iVb8",
  authDomain: "sa-importaciones.firebaseapp.com",
  projectId: "sa-importaciones",
  storageBucket: "sa-importaciones.appspot.com",
  messagingSenderId: "1047435590810",
  appId: "1:1047435590810:web:16c6d131bf9b4ecfb9b323"
};
 
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app); 