import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./FirebaseConfig"

firebase.initializeApp(config);

export default firebase