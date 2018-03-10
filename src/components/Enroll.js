import React, { Component } from 'react';
import './Enroll.css';

class Enroll extends Component {
  
  constructor(props) {
    super(props);
    this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
  }

  componentWillUnmount() {
    console.log("Enroll unmounting");
  }

  componentDidMount() {
    console.log("Enroll mounted");
  }

  onRegisterButtonClick() {
    this.props.parent.updatePage('confirm');
  }

  render() {
    return (
      <div className="enrollDiv">
          <div className="form-horizontal">
            <fieldset>
              <div id="legend">
                <legend className="">Enroll</legend>
              </div>
              <div className="control-group">
                <label className="control-label"  htmlFor="fullname">Full Name</label>
                <div className="controls">
                  <input type="text" id="fullname" name="fullname" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Full Name</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <label className="control-label" htmlFor="email">E-mail</label>
                <div className="controls">
                  <input type="text" id="email" name="email" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Please provide your E-mail</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <label className="control-label" htmlFor="phone">Phone Number</label>
                <div className="controls">
                  <input type="text" id="phone" name="phone" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Please provide your phone number</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <label className="control-label"  htmlFor="Location">Address</label>
                <div className="controls">
                  <input type="text" id="address" name="address" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Please provide your full address. Using this address, we will assign you appropriate shopping location.</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <div className="controls">
                  <button onClick={this.onRegisterButtonClick} className="btn btn-success">Register</button>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
    );
  }
}

export default Enroll;
