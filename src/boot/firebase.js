// import something here
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

var firebaseConfig = {
  apiKey: "AIzaSyByh6rOJAAL1Yj1fAx5M4yTVNQEo1inao8",
  authDomain: "test-app-a82ba.firebaseapp.com",
  databaseURL: "https://test-app-a82ba.firebaseio.com",
  projectId: "test-app-a82ba",
  storageBucket: "test-app-a82ba.appspot.com",
  messagingSenderId: "249512931101",
  appId: "1:249512931101:web:ac270f689f2e955e4b3bf4",
  measurementId: "G-DS7LEFXKHB"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore()


// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.use(firestorePlugin)
  Vue.prototype.$db = db
}
