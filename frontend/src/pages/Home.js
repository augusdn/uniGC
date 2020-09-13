import React from 'react';
import { Redirect } from 'react-router-dom';
import SearchBox from '../components/Search/SearchBox';
import SubjectBoxes from '../components/Subjects/SubjectBox';

function Home() {
  return (
    <main>
      <form className="Search-container">
        <div className="form-group Search-group-chat">
          <h2 style={{ textAlign: "center" }}>Group Chats</h2>
          <SearchBox />
          <small id="searchHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
        </div>
      </form>
      <SubjectBoxes />
    </main>
  );
}

export default Home;
