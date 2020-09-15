import React from 'react';

const gcs = ["COMP1511"]

export default function CoursePage() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 20 }}>Group Chats</h2>
      <div className="Subject-list Marginal-container">
        { gcs.map((gc) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ gc }</h5>
                  <a href="#" className="btn btn-primary">Request to join</a>
                </div>
              </div>
            );
        }) }
      </div>
    </div>
  )
}
