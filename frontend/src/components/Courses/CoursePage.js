import React from 'react';
import { Link } from 'react-router-dom';

// const gcs = ["ACCT1501","BABS1000","CDEV1000","DATA1000","ECON1000","FINS1000","GBAT1000","HDAT1000","IDES1000","JURD1000","LAND1000"];
const gcs = [];


export default function CoursePage(props) {
  let code = props.location.pathname.slice(-8);
  console.log(code);
  if(gcs){
    console.log("found");
  } else {
    console.log("none");
  }
  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 20 }}>Group Chats</h2>
      <div className="Subject-list Marginal-container">
        { gcs.map((gc, i) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ gc }</h5>
                  <Link to={"/course/" + code + "/" + i} className="btn btn-primary">More details</Link>
                </div>
              </div>
            );
        }) }
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add new {code} chat</h5>
            <Link to={"/addChat/"+code} className="btn btn-primary">Post</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
