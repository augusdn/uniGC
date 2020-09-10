import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import Nav from './components/Navigation/Nav.js';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';
import firebase from "./components/firebase/firebase"

firebase.analytics().logEvent('notification_received');

// Firebase
// import * as firebase from 'firebase/app';
// import { firebaseConfig } from './config/firebaseConfig';
// import 'firebase/auth';

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//
// var provider = new firebase.auth.FacebookAuthProvider();

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </div>
    </HashRouter>
  );
}

export default App;
