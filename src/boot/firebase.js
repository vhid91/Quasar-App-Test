// import something here
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

var firebaseConfig = {
  // firebase cred here
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
