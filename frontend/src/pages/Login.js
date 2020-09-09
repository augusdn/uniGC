import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// Firebase
import firebase from "../components/Firebase/FirebaseConfig.js";

const provider = new firebase.auth.FacebookAuthProvider();

var user = firebase.auth().currentUser;

const fbSignIn = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}

function Login() {
  if(user){
    console.log(user);
    console.log("asdasdasdasdsad");
    return (
      <div className="card Login-form">
        <div className="card-body">
          <h2 style={{textAlign: "center"}}>Successfully logged in!</h2>
        </div>
      </div>
    );
  } else {
    console.log("asdasdasdasd123sad");
    return (
      <div className="card Login-form">
        <div className="card-body">
          <h2 style={{textAlign: "center"}}>Welcome to uniGC!</h2>
          <button type="submit" className="btn btn-primary btn-block" onClick={fbSignIn}>
            Login using Facebook <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
      </div>
    );
  }
  
}

export default Login;
