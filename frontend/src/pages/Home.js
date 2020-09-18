import React from 'react';
import SearchBox from '../components/Search/SearchBox';
import SubjectBoxes from '../components/Subjects/SubjectBox';

function Home() {
  return (
    <main>
      <SearchBox />
      <SubjectBoxes />
    </main>
  );
}

export default Home;
