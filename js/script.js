// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAPgrATRUrizKwr6NjToS7xwcC5xw4W-5E',
  authDomain: 'loginapp-385c9.firebaseapp.com',
  projectId: 'loginapp-385c9',
  storageBucket: 'loginapp-385c9.appspot.com',
  messagingSenderId: '1095174598064',
  appId: '1:1095174598064:web:f0f0bd828b51bd62fffa75',
  measurementId: 'G-N3T9PFWZND',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

const cardLogin = document.getElementById('card-login');
const btnGoogle = document.getElementById('btn-google');

const userApp = document.getElementById('user-app');
const userName = document.getElementById('user-name');
const btnLogout = document.getElementById('btn-logout');

btnGoogle.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      userName.innerHTML = user.displayName;
      cardLogin.style.display = 'none';
      userApp.style.display = 'flex';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode);
    });
});

btnLogout.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      cardLogin.style.display = 'flex';
      userApp.style.display = 'none';
    })
    .catch((error) => {
      // An error happened.
      console.log('Error logout');
    });
});
