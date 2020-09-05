import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const listofSubjects = ["COMP3141", "DESN2000"];

function Profile() {
  return (
    <div className="Profile-container">
      <div className="Profile">
        <FontAwesomeIcon icon={faUserAstronaut} className="Profile-pic" />
        <h1>Profile</h1>
      </div>

      <h2>My Courses</h2>
      <div className="Subject-list">
        { listofSubjects.map(subj => {
          return (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{ subj }</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          );
        }) }
      </div>
    </div>
  );
}

export default Profile;
