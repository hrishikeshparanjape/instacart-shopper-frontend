import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
    this.onLearnMoreButtonClick = this.onLearnMoreButtonClick.bind(this);
  }

  componentWillUnmount() {
    console.log("SearchParent unmounting");
  }

  componentDidMount() {
    console.log("SearchParent mounted");
  }

  updateSearchResults(newValue) {
    this.setState({
      searchResults: newValue,
    });
  }

  openEnrollPage(){
    this.props.parent.updatePage("enroll");
  }

  onLearnMoreButtonClick() {
    this.openEnrollPage()
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome to instacart!</h1>
          <p>Help us make grocery experience better for everyone by becoming one of our shoppers!</p>
          <p><button className="btn btn-primary btn-lg" onClick={this.onLearnMoreButtonClick}>Learn more</button></p>
        </div>
      </div>
    );
  }
}

export default Home;
