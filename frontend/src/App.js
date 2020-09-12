import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import Nav from './components/Navigation/Nav.js';
import NavIn from './components/Navigation/NavIn.js';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import './App.css';
import firebase from "./components/firebase/firebase"

firebase.analytics().logEvent('notification_received');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: [],
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    if (this.state.currentUser) {
      return (
        <HashRouter>
          <div className="App">
            <NavIn />
            <Route path="/" exact component={Home} />
            <Route path="/login" component = {Login} />
            <Route path="/search" render={(props) => <SearchResults {...props} />} />
            <Route path="/profile" render={(props) =>
                <Profile
                  uid={this.state.currentUser.uid}
                  email={this.state.currentUser.email}
                  fullName={this.state.currentUser.displayName}
                  profilePic={this.state.currentUser.photoURL}
                />
              }
            />
          </div>
        </HashRouter>
      );
    } else {
      return (
        <HashRouter>
          <div className="App">
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/login" component = {Login} />
            <Route path="/search" component = {SearchResults} />
          </div>
        </HashRouter>
      );
    }
  }
}

export default App;
