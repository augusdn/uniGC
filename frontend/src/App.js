import React from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

import Nav from './components/Navigation/Nav.js';
import NavIn from './components/Navigation/NavIn.js';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import CoursePage from './components/Courses/CoursePage';
import CourseChat from './components/Courses/CourseChat';
import SubjectPage from './components/Subjects/SubjectPage';
import AddChat from './pages/AddChat';
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
            <Route path="/course/:code" exact component={CoursePage} />
            <Route path="/course/:code/:id" exact component={CourseChat} />
            <Route path="/subject/:code" exact component={SubjectPage} />
            <Route path="/addChat" exact component={AddChat} />
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
            <Route path="/login" exact component={Login} />
            <Route path="/course/:code" exact component={CoursePage} />
            <Route path="/subject/:code" exact component={SubjectPage} />
          </div>
        </HashRouter>
      );
    }
  }
}

export default App;
