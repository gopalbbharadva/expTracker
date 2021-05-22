import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAgPZCyMlIuQomaxxfWsJcGGSCzWpiLsAQ",
    authDomain: "expensetracker-8ba6c.firebaseapp.com",
    projectId: "expensetracker-8ba6c",
    storageBucket: "expensetracker-8ba6c.appspot.com",
    messagingSenderId: "124015567178",
    appId: "1:124015567178:web:58005032f6c930b199e1b3",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestoreRef=firebase.firestore();

  export {firestoreRef};
  