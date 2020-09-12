import React from 'react';
import SearchBox from '../components/Search/SearchBox'
import SubjectBoxes from '../components/Subjects/SubjectBox'

function Home() {
  return (
    <main>
      <form className="Search-container">
        <div className="form-group Search-group-chat">
          <label form="search-group-chat">Group Chat Search</label>
          {/* <input type="search" className="form-control" id="search-group-chat" aria-describedby="searchHelp"/> */}
          <SearchBox />
          <small id="searchHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
        </div>
      </form>
      <SubjectBoxes />
    </main>
  );
}

export default Home;
