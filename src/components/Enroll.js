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
                
                <label className="control-label"  htmlFor="username">Username</label>
                <div className="controls">
                  <input type="text" id="username" name="username" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Username can contain any letters or numbers, without spaces</p>
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
                
                <label className="control-label" htmlFor="password">Password</label>
                <div className="controls">
                  <input type="password" id="password" name="password" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Password should be at least 4 characters</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <label className="control-label"  htmlFor="password_confirm">Password (Confirm)</label>
                <div className="controls">
                  <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Please confirm password</p>
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
