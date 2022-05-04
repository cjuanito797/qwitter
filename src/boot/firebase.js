import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2fiWJAJ0XTv8Pm2tYoR5406c3jeAyCRI",
  authDomain: "qwitter2-58c32.firebaseapp.com",
  projectId: "qwitter2-58c32",
  storageBucket: "qwitter2-58c32.appspot.com",
  messagingSenderId: "541506586053",
  appId: "1:541506586053:web:57ca292350a698c3c1b7ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//access firebase database with db variable
const db = firebase.firestore()

export default db
