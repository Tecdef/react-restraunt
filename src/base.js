import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJa-TVrAKPYkghKDsUGJr3iz9in-QC7uw",
  authDomain: "reactcatchoday.firebaseapp.com",
  databaseURL: "https://reactcatchoday.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

