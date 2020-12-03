import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKCKnwFKWE_2OjhemyV6xeRurESeKrEzE",
    authDomain: "test-app-41adc.firebaseapp.com",
    databaseURL: "https://test-app-41adc.firebaseio.com",
    projectId: "test-app-41adc",
    storageBucket: "test-app-41adc.appspot.com",
    messagingSenderId: "1000421809426",
    appId: "1:1000421809426:web:2e312e44888031e88ee7cb",
    measurementId: "G-5LEJRVVXSN"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();