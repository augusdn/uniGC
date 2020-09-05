import React from 'react';

const listofSubjects = ["ACCT","BABS","CDEV","DATA","ECON","FINS","GBAT","HDAT","IDES","JURD","LAND"];

function Home() {
  return (
    <main>
      <form className="Search-container">
        <div class="form-group Search-chat">
          <label for="exampleInputEmail1">Group Chat Search</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" class="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
        </div>
      </form>

      <div className="Subject-list">
        { listofSubjects.map(subj => {
          return (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{ subj }</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          );
        }) }
      </div>
    </main>
  );
}

export default Home;
