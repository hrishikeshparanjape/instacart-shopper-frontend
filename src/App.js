import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Enroll from './components/Enroll';
import Confirm from './components/Confirm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'home' };
    this.onHomeButtonClick = this.onHomeButtonClick.bind(this);
    this.onMyAccountButtonClick = this.onMyAccountButtonClick.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChange, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange, false);
  }

  onHashChange(event) {
    if (this.state.page !== 'home' && event.newURL.includes("home")) {
      this.setState({ page : 'home' })
    } else if (this.state.page !== 'enroll' && event.newURL.includes("enroll")) {
      this.setState({ page : 'enroll' })
    } else if (this.state.page !== 'confirm' && event.newURL.includes("confirm")) {
      this.setState({ page : 'confirm' })
    }
  }

  onHomeButtonClick() {
    if (this.state.page !== 'home') {
      this.setState({ page : 'home' })
      window.location.href = "#home";
    }
  }
  
  onMyAccountButtonClick(){
    if (this.state.page !== 'enroll') {
      this.setState({ page : 'enroll' })
      window.location.href = "#enroll";
    }
  }

  updatePage(newPage) {
    window.location.href = "#" + newPage;
    this.setState({ page : newPage })
  }

  getLocationHash() {
    if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      return hash;
      // hash found
    } else {
      // No hash found
      return null;
    }
  }

  pageToRender(state) {
    switch(this.getLocationHash()) {
      case "home":
        return (<Home parent={this} />);
      case "enroll":
        return (<Enroll parent={this} />);
      case "confirm":
        return (<Confirm parent={this} />); 
      default:
        return (<Home parent={this} />);
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Logo">
            <a onClick={this.onHomeButtonClick}>Logo</a>
          </div>
        </div>
        <div className="App-content">
          {this.pageToRender(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
