import React, { Component } from 'react';
import './Confirm.css';

class Confirm extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Confirm unmounting");
  }

  componentDidMount() {
    console.log("Confirm mounted");
  }

  render() {
    return (
      <div className="confirmDiv">
        <div className="jumbotron">
          <h1>Background check</h1>
          <p>By clicking Confirm button, you give Instacart permission to perform background checks with your account</p>
          <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    <button className="btn btn-success btn-block">Yes</button>
                </div>
                <div className="col-xs-6">
                    <button className="btn btn-warning btn-block">No</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
