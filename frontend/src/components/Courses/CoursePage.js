import React from 'react';
import { Link } from 'react-router-dom';

const gcs = ["ACCT1501","BABS1000","CDEV1000","DATA1000","ECON1000","FINS1000","GBAT1000","HDAT1000","IDES1000","JURD1000","LAND1000"];

export default function CoursePage() {
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 20 }}>Group Chats</h2>
      <div className="Subject-list Marginal-container">
        { gcs.map((gc, i) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ gc }</h5>
                  <Link to={"/course/" + gc + "/" + i} className="btn btn-primary">More details</Link>
                </div>
              </div>
            );
        }) }
      </div>
    </div>
  )
}
