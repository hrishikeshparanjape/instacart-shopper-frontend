import React, { Component } from 'react';
import './Done.css';

class Done extends Component {
  
  componentWillUnmount() {
    console.log("Done unmounting");
  }

  componentDidMount() {
    console.log("Done mounted");
  }

  render() {
    return (
      <div className="confirmDiv">
        <div className="jumbotron">
          <h1>You are enrolled!</h1>
          <p>Someone at instacart will get in touch with you with information on next steps.</p>
        </div>
      </div>
    );
  }
}

export default Done;
