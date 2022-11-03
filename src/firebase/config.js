import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdYJLiHxOAur9rSEeBny9wykipkmwux8g",
    authDomain: "portfolio-form-67975.firebaseapp.com",
    projectId: "portfolio-form-67975",
    storageBucket: "portfolio-form-67975.appspot.com",
    messagingSenderId: "832911340990",
    appId: "1:832911340990:web:9f6acc1c8e1ec3ce1cb5ef"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export { projectFirestore }