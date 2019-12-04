import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC1b3Rfc-3PJIBLxO8lR0QCXkS9FvBpcxo",
    authDomain: "rashidproject-9dec0.firebaseapp.com",
    databaseURL: "https://rashidproject-9dec0.firebaseio.com",
    projectId: "rashidproject-9dec0",
    storageBucket: "rashidproject-9dec0.appspot.com",
    messagingSenderId: "737654097523",
    appId: "1:737654097523:web:0f44235e5e4bfee0e7cc06",
    measurementId: "G-4HXB3EFKWJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase