// Firebase configuration (replace with your actual Firebase project keys)
const firebaseConfig = {

    authDomain: "userformtest-6f542.firebaseapp.com",
    databaseURL: "https://userformtest-6f542-default-rtdb.firebaseio.com",
    projectId: "userformtest-6f542",
    storageBucket: "userformtest-6f542.firebasestorage.app",
    messagingSenderId: "487727397383",
    appId: "1:487727397383:web:afa6f1802e3f5de059c8a2",
    measurementId: "G-84S401PXZB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference you database
var userForm = firebase.database().ref('users');

