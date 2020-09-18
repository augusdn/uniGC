import React from 'react';
import { Link } from 'react-router-dom';
import {getChats} from '../Services/ChatService';
import Async from 'react-async';


const getC = async ({code}) => {
  const res = await fetch(`https://asia-east2-unigc-eea69.cloudfunctions.net/api/getChats/${code}`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

function getTime(time){
  // const  t = new Date(time*1000).toDateString();
  const dateInMillis = time*1000;
  const  t = new Date(dateInMillis).toDateString() + ' at ' + new Date(dateInMillis).toLocaleTimeString()
  return t;
}

export default function CoursePage(props) {
  let path = props.location.pathname;
  let code = path.match(/[A-Z]{4}[0-9]{4}/)[0];

  return (
    <div>
      <h2 style={{ marginTop: 20, marginLeft: 20 }}>{code} Group Chats</h2>
      {/* <div className="Subject-list Marginal-container"> */}
        <Async promiseFn={getC} code={code}>
        <Async.Loading>Loading...</Async.Loading>
          <Async.Fulfilled>
            {data => {
              // data.sort((a,b) => { return a.chats.created._seconds - b.chats.created_seconds});
              const chats = data.chats;
              chats.sort((a,b) => b.created._seconds - a.created._seconds);
              // console.log(chats)
              return(
                <div className="Subject-list Marginal-container">
                    {chats.map((chat, index) => (
                      <div className="card" key={index}>
                        <div className="card-body">
                          <h5 className="card-title">{ chat.code }</h5>
                          Created by: {chat.fullName}, <br />{getTime(chat.created._seconds)}<br />Number of request: {chat.users}.
                          <br />
                          <Link to={"/course/" + code + "/" + chat.id + "/"} className="btn btn-primary">More details</Link>
                        </div>
                      </div>
                    ))}
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Add new {code} chat</h5>
                        <Link to={"/addChat/"+code} className="btn btn-primary">Post</Link>
                      </div>
                    </div>
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            {error => `Something went wrong: ${error.message}`}
          </Async.Rejected>
        </Async>
    </div>
  )
}
