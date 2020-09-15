/* eslint-disable no-use-before-define */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import courses from './CourseList';
import {Button} from '@material-ui/core';

export default function SearchBox() {
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
    if(input == ""){
      console.log("empty");
      alert("Course name can't be empty!");
    } else {
      console.log("Searching + " + input);
      // alert(document.location.href);
      document.location.href = document.location.href+"course/"+input.toUpperCase();
    }
  }

  return (
    <form className="Search-container" onSubmit={submitHandler}>
      <div className="form-group Search-group-chat">
        <h2 style={{ textAlign: "center" }}>Group Chats</h2>
        <Autocomplete
          id="search-box"
          // disable onInputChange for less function calls
          // onInputChange={(event, value) => handleChange(value)}
          // enable below for less function calls
          options={courses}
          // options={options}
          onInputChange ={(event,value) => setInput(value)}

          getOptionLabel={(option) => option.code}
          renderInput={(params) => <TextField {...params} label="Course Search (beta)" variant="outlined" />}
          // renderOption={(option) => <Link to={'/course/' + option.code} className="Course-links">{ option.code }</Link>}
        />
        <small id="searchHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
        <div className="Submit-search">
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
