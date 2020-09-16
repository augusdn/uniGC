import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const admins = ["Sheldon"]
const members = ["Leonard", "Penny", "Howard", "Raj", "Amy", "Bernadette"]

export default function CourseChat() {
  return (
    <div className="Marginal-container">
      <h2>Group Chat Name</h2>
      <p>Here's a little detail about the group.</p>
      <button className="btn btn-primary">Request to join</button>
      <div className="Subject-list Marginal-container">
      { admins.map((member) => {
        return (
          <div className="card">
            <div className="card-body User-info">
              <span>
                <FontAwesomeIcon icon={faUserAstronaut} className="User-avatar" />
                <h5 className="User-name">{ member }</h5>
              </span>
              <p className="card-text">Admin</p>
            </div>
          </div>
        )
      }) }
      { members.map((member) => {
        return (
          <div className="card">
            <div className="card-body User-info">
              <span>
                <FontAwesomeIcon icon={faUserAstronaut} className="User-avatar" />
                <h5 className="User-name">{ member }</h5>
              </span>
            </div>
          </div>
        )
      }) }
      </div>
    </div>
  )
}
