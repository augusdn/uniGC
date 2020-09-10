import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics"
import config from "./FirebaseConfig"

firebase.initializeApp(config);

export default firebase