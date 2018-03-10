import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
    this.onLearnMoreButtonClick = this.onLearnMoreButtonClick.bind(this);
    this.onCheckStatusButtonClick = this.onCheckStatusButtonClick.bind(this);
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

  onCheckStatusButtonClick() {
    this.props.parent.updatePage("checkstatus");
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome to instacart!</h1>
          <p>Help us make grocery experience better for everyone by becoming one of our shoppers!</p>
          <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    <button className="btn btn-block btn-success" onClick={this.onLearnMoreButtonClick}>Apply Now</button>
                </div>
                <div className="col-xs-6">
                    <button className="btn btn-block btn-success" onClick={this.onCheckStatusButtonClick}>Check Application Status</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
