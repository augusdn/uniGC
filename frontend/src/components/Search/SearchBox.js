/* eslint-disable no-use-before-define */
import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import courses from './CourseList';


export default function SearchBox() {
  const [options, setOptions] = React.useState([]);

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

  return (
    <Autocomplete
      id="search-box"
      // disable onInputChange for less function calls
      // onInputChange={(event, value) => handleChange(value)}
      // enable below for less function calls
      options={courses}
      // options={options}
      getOptionLabel={(option) => option.code}
      renderInput={(params) => <TextField {...params} label="Course Search" variant="outlined" />}
      renderOption={(option) => <Link to={'/course/' + option.code} className="Course-links">{ option.code }</Link>}
    />
  );
}
