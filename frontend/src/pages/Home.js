import React from 'react';

const listofSubjects = ["ACCT","BABS","CDEV","DATA","ECON","FINS","GBAT","HDAT","IDES","JURD","LAND"];

function Home() {
  return (
    <main>
      <form className="Search-container">
        <div className="form-group Search-chat">
          <label for="exampleInputEmail1">Group Chat Search</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
        </div>
      </form>
      <h2 className="Section-header">Subject Areas</h2>
      <div className="Subject-list Marginal-container">
        { listofSubjects.map(subj => {
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ subj }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          );
        }) }
      </div>
    </main>
  );
}

export default Home;
