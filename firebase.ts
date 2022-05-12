// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgkHF3pECzgmlMU3U-9PUYzLklen-UsZw',
  authDomain: 'netflix-clone-cba78.firebaseapp.com',
  projectId: 'netflix-clone-cba78',
  storageBucket: 'netflix-clone-cba78.appspot.com',
  messagingSenderId: '907790741470',
  appId: '1:907790741470:web:576651e2785a304b99f74f',
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
