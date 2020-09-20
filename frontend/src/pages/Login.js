import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

// Firebase
import firebase from "../components/firebase/firebase.js";

const provider = new firebase.auth.FacebookAuthProvider();

var user = firebase.auth().currentUser;

const fbSignIn = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    // console.log(user);
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

function Login() {return (
      <div className="card Login-form">
        <div className="card-body">
          <h2 style={{textAlign: "center"}}>Welcome to uniGC!</h2>
          <Link to="/">
            <button type="submit" className="btn btn-primary btn-block" onClick={fbSignIn}>
              Login using Facebook <FontAwesomeIcon icon={faFacebook} />
            </button>
          </Link>
        </div>
      </div>
  );
}

export default Login;
