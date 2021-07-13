import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBK_6vRcmakEIU8pi-7eCPqoh5V4wxUjyQ",
    authDomain: "crwn-db-bfe52.firebaseapp.com",
    projectId: "crwn-db-bfe52",
    storageBucket: "crwn-db-bfe52.appspot.com",
    messagingSenderId: "235802755040",
    appId: "1:235802755040:web:e752a7047b04cbe06bf585",
    measurementId: "G-DRFS3WKPV6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ 
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;