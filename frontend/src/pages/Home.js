import React from 'react';
import { Redirect } from 'react-router-dom';

const listofSubjects = ["ACCT","BABS","CDEV","DATA","ECON","FINS","GBAT","HDAT","IDES","JURD","LAND"];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      subjects: []
    }
  }

  componentDidMount() {
    fetch("https://asia-east2-unigc-eea69.cloudfunctions.net/api/subjects")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          subjects: data.subjects
        })
      })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/search" />
    }
  }

  render() {
    return (
      <main>
        <form className="Search-container" onSubmit={this.setRedirect}>
          { this.renderRedirect() }
          <div className="form-group Search-group-chat">
            <label form="search-group-chat">Group Chat Search</label>
            <input type="search" className="form-control" id="search-group-chat" aria-describedby="searchHelp"/>
            <small id="searchHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
          </div>
        </form>
        <h2 className="Section-header">Subject Areas</h2>
        <div className="Subject-list Marginal-container">
          { this.state.subjects.map(subj => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ subj.code }: { subj.name }</h5>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            );
          }) }
        </div>
      </main>
    );
  }
}

export default Home;
