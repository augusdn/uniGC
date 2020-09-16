/* eslint-disable no-use-before-define */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import courses from '../components/Search/CourseList';
import { Button, Typography } from '@material-ui/core';
import firebase from "../components/firebase/firebase";

export default function AddChat(props) {
  const [options, setOptions] = React.useState([]);
  const [input, setInput] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const [cError, setCError] = React.useState([]);
  const [uError, setUError] = React.useState([]);

  function courseSearch(term) {
    if (term) {
      const endpoint = 'https://asia-east2-unigc-eea69.cloudfunctions.net/api/search/'+term;
      console.log(endpoint)

      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          setOptions(data)
        })
        .catch((err) =>
          console.error(err)
      );
    }
  }

  function courseChange(value) {
    console.log(value);
    setInput(value);
  }

  const submitHandler = e => {
    e.preventDefault();
    // console.log(firebase.auth().currentUser);
    if(input == ""){
      console.log("empty");
      alert("Course name can't be empty!");
    } if(url == ""){
      alert("URL can't be empty!");
    } else {
      console.log("Submit + " + input+url);
      // alert(document.location.href);
    //   document.location.href = document.location.href+"course/"+input.toUpperCase();
    }
  }

  const validCourseRegex = RegExp(/^[a-zA-Z]{4}[0-9]{4}$/i);
  const validLinkRegex = RegExp(/^\d+$/i);
  let courseRegex = new RegExp(props.location.pathname.slice(-8));
  const crs = courses.filter(course => course.code.match(courseRegex));

  function handleDefault(){
    if(crs){
      console.log(crs[0])
      return crs[0]
    } else {
      console.log("none")
      return ""
    }
  }
  

  return (
    <form className="Add-chat-container" onSubmit={submitHandler}>
      <div className="form-group Search-group-chat">
        <h2>Add Group Chat</h2>
        <Autocomplete
          id="course"
          // disable onInputChange for less function calls
          // onInputChange={(event, value) => handleChange(value)}
          // enable below for less function calls
          options={courses}
          name="course"
          // options={options}
          // onInputChange ={(event,value) => setInput(value)}
          onInputChange ={(event,value) => courseChange(value)}
          defaultValue= {handleDefault()}

          getOptionLabel={(option) => option.code}
          renderInput={(params) => <TextField {...params} label="Course Search(beta)" variant="outlined" />}
          renderOption={(option) =>  option.code }
        />
        {cError.length > 0 &&
                <span className='error'>{cError}</span>}
        <div className="Chat-id">
          <span className="Chat-id-desktop">
            www.facebook.com/messages/t/
            <TextField id="chatId"  onChange ={(event,value) => setUrl(event.target.value)} label="Chat ID" variant="outlined" />
          </span>
        </div>
        <div className="Add-chat">
          <button type="submit" className="btn btn-primary">Add group chat</button>
        </div>
      </div>
    </form>
  );
}
