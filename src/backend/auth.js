import { auth, database } from './firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { ref, set } from "firebase/database";

// Register
const firebaseRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user
        // Create User data
        set(ref(database, 'users/' + user.uid), {
            email : email,
        })
        return user
    })
    .catch((error) => {
        console.log(error.message)
    })
}

// Login
const firebaseLogin = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userEmail', user.email);
        return
    })
    .catch((error) => {
        console.log(error.message)
    })
}

export {firebaseLogin, firebaseRegister}

/*
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  })
*/