import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2lg5Up1CATNWAZ5Lna3tPHEgBe8RcxcY",
    authDomain: "testdb-cf705.firebaseapp.com",
    databaseURL: "https://testdb-cf705-default-rtdb.firebaseio.com",
    projectId: "testdb-cf705",
    storageBucket: "testdb-cf705.appspot.com",
    messagingSenderId: "192959632856",
    appId: "1:192959632856:web:bb78f82db871bd421a4ead"
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
