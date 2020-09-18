import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Async from 'react-async';
import firebase from '../firebase/firebase';
import {joinChat, leaveChat} from '../Services/ChatService';

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
  const [data, setData] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [index, setIndex] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [waiting, setWaiting] = React.useState(false);

  function join(id){
    let u = firebase.auth().currentUser;
    if(waiting) return
    if (u){
      if(u.uid != id){
        // console.log(u.uid + "%%"+ id)
        return (
          <form className="button-container" onSubmit={joinHandler}>
            <button type="submit" className="btn btn-primary" onClick={() => {setUser(u)}}>
              Request to join
            </button>
          </form>
        )
      }
    }
    
  }
  const joinHandler = async e => {
    e.preventDefault();
    const payload = {
      uid: user.uid,
      chatID: id,
      fullName: user.displayName,
    };
    // console.log(payload)
    await joinChat(payload);
    window.location.reload();
  }
  const leaveHandler = async e => {
    e.preventDefault();
    const payload = {
      uid: users[index].uid,
      chatID: id,
      fullName: users[index].fullName,
    };
    // console.log(payload)
    await leaveChat(payload);
    window.location.reload();
  }
  
  function done(i){
    let u = firebase.auth().currentUser;
    if(data){
      if (u){
        if(u.uid == data.uid){
          // console.log(u.uid + "%%"+ id)
          return (
          <form className="button-container" onSubmit={leaveHandler}>
            <button type="submit" className="btn btn-primary" onClick={() => {setIndex(i)}}>
              Done
            </button>
          </form>
          )
        }
      }
    }
  }
  function leave(i){
    let u = firebase.auth().currentUser;
    if(users.length != 0){
      if (u){
        // console.log(u)
        // console.log(users)
        if(u.uid == users[i].uid){
          return (
          <form className="button-container" onSubmit={leaveHandler}>
            <button type="submit" className="btn btn-primary" onClick={() => {setIndex(i)}}>
              Cancel
            </button>
          </form>
          )
        }
      }
    }
  }

  function isWaiting(i){
    let u = firebase.auth().currentUser;
    if(users.length != 0){
      if (u){
        // console.log(u)
        // console.log(users)
        if(u.uid == users[i].uid){
          setWaiting(true)
        }
      }
    }
  }

  return (
    <div className="Marginal-container">
      <div className="Subject-list Marginal-container">
      <Async promiseFn={getC} id={id}>
        <Async.Loading><h1>Loading...</h1></Async.Loading>
          <Async.Fulfilled>
            {data => {
              {setData(data)}
              const users = data.waitingList;
              // console.log(users)
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
                  {setUsers(users)}
                  
                    {users.map((user, index) => (
                      <div className="card" key={index}>
                        <div className="card-body User-info">
                          <span>
                            <FontAwesomeIcon icon={faUserAstronaut} className="User-avatar" />
                            <h5 className="User-name">{ user.fullName }</h5>
                            <div>
                              {isWaiting(index)}
                              {leave(index)}
                              {done(index)}
                            </div>
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
