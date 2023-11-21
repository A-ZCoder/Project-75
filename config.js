import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCS0UMhn2-dXdl_VG3eQHf1zMpzITDollQ",
  authDomain: "ride-afdb2.firebaseapp.com",
  databaseURL: "https://ride-afdb2-default-rtdb.firebaseio.com",
  projectId: "ride-afdb2",
  storageBucket: "ride-afdb2.appspot.com",
  messagingSenderId: "383638479371",
  appId: "1:383638479371:web:b603f636b95703e9f39d0e"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
