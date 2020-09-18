import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Async from 'react-async';
import firebase from '../firebase/firebase'

const getC = async ({id}) => {
  const res = await fetch(`https://asia-east2-unigc-eea69.cloudfunctions.net/api/getChat/${id}`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

function getTime(time){
  // const  t = new Date(time*1000).toDateString();
  const dateInMillis = time*1000;
  const  t = new Date(dateInMillis).toDateString() + ' at ' + new Date(dateInMillis).toLocaleTimeString()
  return t;
}

export default function CourseChat(props) {
  let path = props.location.pathname;
  let id = path.match(/[A-Z]{4}[0-9]{4}\/(\w+)\//)[1];
  function join(id){
    let u = firebase.auth().currentUser;
    if (u){
      if(u.uid != id){
        // console.log(u.uid + "%%"+ id)
        return <button type="submit" className="btn btn-primary">Request to join</button>
      }
    }
    
  }
  function leave(id){
    let u = firebase.auth().currentUser;
    if (u){
      if(u.uid == id){
        // console.log(u.uid + "%%"+ id)
        return <button type="submit" className="btn btn-primary">Cancel</button>
      }
    }
  }
  function done(id){
    let u = firebase.auth().currentUser;
    if (u){
      if(u.uid == id){
        // console.log(u.uid + "%%"+ id)
        return <button type="submit" className="btn btn-primary">Done</button>
      }
    }
  }
  // console.log(id);
  return (
    <div className="Marginal-container">
      {/* <h2>{id} Group Chat Name</h2> */}
      {/* <p>Here's a little detail about the group.</p>
      
      <button className="btn btn-primary">Request to join</button> */}
      <div className="Subject-list Marginal-container">
      <Async promiseFn={getC} id={id}>
        <Async.Loading><h1>Loading...</h1></Async.Loading>
          <Async.Fulfilled>
            {data => {
              const users = data.waitingList;
              console.log(users)
              return(      
                <div>
                  <h2>{data.code} Group Chat</h2>
                  <p>Currently waiting: {data.waiting}, Total number of requests: {data.users}</p>
                  <div className="card">
                    <div className="card-body User-info">
                      <span>
                        <FontAwesomeIcon icon={faUserAstronaut} className="User-avatar" />
                        <h5 className="User-name">{ data.fullName }</h5>
                      </span>
                      <p className="card-text">Admin</p>
                    </div>
                  </div>
      
                  {/* <button className="btn btn-primary">Request to join</button> */}
                  {join(data.uid)}
                  <div className="Subject-list Marginal-container"></div>
                  <h3>Waiting: </h3>
                  
                    {users.map((user, index) => (
                      <div className="card" key={index}>
                        <div className="card-body User-info">
                          <span>
                            <FontAwesomeIcon icon={faUserAstronaut} className="User-avatar" />
                            <h5 className="User-name">{ user.fullName }</h5>
                            {leave(user.uid)}
                            {done(data.uid)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            {error => `Something went wrong: ${error.message}`}
          </Async.Rejected>
        </Async>
      </div>
    </div>
  )
}
