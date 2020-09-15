/* eslint-disable no-use-before-define */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import courses from '../components/Search/CourseList';
import { Button, Typography } from '@material-ui/core';
import firebase from "../components/firebase/firebase";

export default function AddChat() {
  const [options, setOptions] = React.useState([]);
  const [input, setInput] = React.useState([]);

  function handleChange(term) {
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

  const submitHandler = e => {
    e.preventDefault();
    console.log(firebase.auth().currentUser);
    if(input == ""){
      console.log("empty");
      alert("Course name can't be empty!");
    } else {
      console.log("Submit + " + input);
      // alert(document.location.href);
    //   document.location.href = document.location.href+"course/"+input.toUpperCase();
    }
  }

  return (
    <form className="Add-chat-container" onSubmit={submitHandler}>
      <div className="form-group Search-group-chat">
        <h2>Add Group Chat</h2>
        <Autocomplete
          id="search-box"
          // disable onInputChange for less function calls
          // onInputChange={(event, value) => handleChange(value)}
          // enable below for less function calls
          options={courses}
          // options={options}
          onInputChange ={(event,value) => setInput(value)}

          getOptionLabel={(option) => option.code}
          renderInput={(params) => <TextField {...params} label="Course Search(beta)" variant="outlined" />}
          // renderOption={(option) => <Link to={'/course/' + option.code} className="Course-links">{ option.code }</Link>}
        />
        <div className="Chat-id">
          <span className="Chat-id-desktop">
            www.facebook.com/messages/t/
            <TextField id="chatId" label="Chat ID" variant="outlined" />
          </span>
        </div>
        <div className="Add-chat">
          <Button variant="contained" color="primary" type="submit">
              Add group chat
          </Button>
        </div>
      </div>
    </form>
  );
}
