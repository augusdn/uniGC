import React from 'react';
import { Redirect } from 'react-router-dom';

const listofSubjects = ["ACCT","BABS","CDEV","DATA","ECON","FINS","GBAT","HDAT","IDES","JURD","LAND"];

class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: this.props.location.state.searchTerm,
      redirect: false,
      searchResults: []
    }
  }

  componentDidMount() {
    try {
      fetch("https://asia-east2-unigc-eea69.cloudfunctions.net/api/search/" + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            searchResults: data
          })
        })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.searchTerm !== this.props.location.state.searchTerm) {
      try {
        fetch("https://asia-east2-unigc-eea69.cloudfunctions.net/api/search/" + this.state.searchTerm)
          .then(resp => resp.json())
          .then(data => {
            this.setState({
              searchResults: data
            })
          })
      } catch (err) {
        console.log(err)
      }
    }
  }

  updateInputValue(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect to={{
          pathname: "/search",
          state: {
            searchTerm: this.state.searchTerm
          }
        }} />
      )
    }
  }

  render() {
    console.log(this.state.searchTerm)
    console.log(this.state.redirect)
    return (
      <main>
        <form className="Search-container" onSubmit={this.setRedirect}>
          { this.renderRedirect() }
          <div className="form-group Search-group-chat">
            <label form="search-group-chat">Group Chat Search</label>
            <input
              type="search"
              className="form-control"
              id="search-group-chat"
              aria-describedby="searchHelp"
              value={this.state.searchTerm}
              onChange={e => this.updateInputValue(e)}
            />
            <small id="searchHelp" className="form-text text-muted">Maybe the group chat you're interested in already exists?</small>
          </div>
        </form>
        <h2 className="Section-header">Group Chats</h2>
        <div className="Subject-list Marginal-container">
          { this.state.searchResults.map(subj => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{ subj.code }: {subj.title}</h5>
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

export default SearchResults;
