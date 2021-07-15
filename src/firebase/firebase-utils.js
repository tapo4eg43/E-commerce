import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxGrQcLeC6wBRQfhl3L147SoBiDjFZesU",
    authDomain: "crwn-db-37040.firebaseapp.com",
    projectId: "crwn-db-37040",
    storageBucket: "crwn-db-37040.appspot.com",
    messagingSenderId: "74512195175",
    appId: "1:74512195175:web:1f9306da252cef1a1afec2",
    measurementId: "G-NR7HK0950K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;