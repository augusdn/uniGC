import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Async from 'react-async';

// const listofSubjects = ["COMP3141", "DESN2000"];

function Profile({ uid, email, fullName, profilePic }) {
  const getC = async ({id}) => {
    // event.preventDefault()
    // console.log("run")
    if(id){
      // console.log("okay")
      const res = await fetch(`https://asia-east2-unigc-eea69.cloudfunctions.net/api/myChats/${id}`)
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    } else {
      throw new Error("No input id")
      return
    }
  }
  
  return (
    <div className="Marginal-container">
      <div className="Profile">
        {
          profilePic
          ? <img src={profilePic} className="Profile-pic" />
          : <FontAwesomeIcon icon={faUserAstronaut} className="Placeholder-pic" />
        }
        <h1>{fullName}</h1>
      </div>

      <h2>My Chats</h2>
      {/* {console.log(uid)} */}
      <Async promiseFn={getC} id={uid}>
        <Async.Loading><h1>Loading...</h1></Async.Loading>
          <Async.Fulfilled>
            {data => {
              const chats = data.chats;
              // console.log(data)
              // console.log(chats)
              return(      
                <div className="Subject-list">
                  { chats.map(chat => {
                    return (
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{ chat.code }</h5>
                          <p className="card-text"><p>Currently waiting: {chat.waiting}, Total number of requests: {chat.users}</p></p>
                          <a href={"/#/course/"+chat.code+"/"+chat.id+"/"} className="btn btn-primary">Manage Chat</a>
                        </div>
                      </div>
                    );
                  }) }
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            {error => `Something went wrong: ${error.message}`}
          </Async.Rejected>
        </Async>
    </div>
  );
}

export default Profile;
