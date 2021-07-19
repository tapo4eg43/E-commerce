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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user' , error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;