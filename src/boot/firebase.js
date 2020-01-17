// import something here
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

// Configuration
var firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Database
var db = firebase.firestore()

// "async" is optional
export default async ({ Vue }) => {
  // something to do
  // this.$db
  Vue.prototype.$db = db
  Vue.use(firestorePlugin)
}
