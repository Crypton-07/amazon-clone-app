import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5xAEksEDuNRyCF_Oztm60DcoeBmRBomc",
  authDomain: "clone-app-8273e.firebaseapp.com",
  projectId: "clone-app-8273e",
  storageBucket: "clone-app-8273e.appspot.com",
  messagingSenderId: "128632258853",
  appId: "1:128632258853:web:ddae3d64b763b801581acc",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
