import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// Firebase
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.FacebookAuthProvider();

function Login() {
  return (
    <div className="card Login-form">
      <div className="card-body">
        <h2 style={{textAlign: "center"}}>Welcome to uniGC!</h2>
        <button type="submit" className="btn btn-primary btn-block" onClick={() => firebase.auth().signInWithRedirect(provider)}>
          Login using Facebook <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
    </div>
  );
}

firebase.auth().getRedirectResult().then(function(result) {
  // console.log(result);
  if (result.credential) {
    let token = result.credential.accessToken;
  }

  let user = result.user;
  let userEmail = result.user.email;
}).catch(function(error) {
  // console.log(error)
  let errorCode = error.code;
  let errorMessage = error.message;
  console.log(errorCode + ': ' + errorMessage);
})

export default Login;
