import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAQq0kuf7PKezsyuSYyBFaRWLJ2cJyL0jI',
    authDomain: 'tv-auth-5f64d.firebaseapp.com',
    projectId: 'tv-auth-5f64d',
    storageBucket: 'tv-auth-5f64d.appspot.com',
    messagingSenderId: '433515545721',
    appId: '1:433515545721:web:984919d444490cd5df80a8',
    measurementId: 'G-K1LPJMT51P',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const authProvider = provider;
