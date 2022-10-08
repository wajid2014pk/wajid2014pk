//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//apps firebase configuration

const firebaseConfig ={
  apiKey: "AIzaSyD_MpxdET-l2Uh0eW0l13jH_O5WRVXh8gI",
  authDomain: "test-1d3d5.firebaseapp.com",
  projectId: "test-1d3d5",
  storageBucket: "test-1d3d5.appspot.com",
  messagingSenderId: "788682411372",
  appId: "1:788682411372:web:2dd2ac6a3655892159b749",
  measurementId: "G-HDVYYPWJLC"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};