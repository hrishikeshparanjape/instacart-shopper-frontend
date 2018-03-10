import React, { Component } from 'react';
import './CheckStatus.css';

class CheckStatus extends Component {
  
  constructor(props) {
    super(props);
    this.onViewApplicationClick = this.onViewApplicationClick.bind(this);
  }

  componentWillUnmount() {
    console.log("Enroll unmounting");
  }

  componentDidMount() {
    console.log("Enroll mounted");
  }

  onViewApplicationClick() {
    this.props.parent.updatePage('enroll');
  }

  render() {
    return (
      <div className="checkStatusDiv">
          <div className="form-horizontal">
            <fieldset>
              <div id="legend">
                <legend className="">View Application</legend>
              </div>
           
              <div className="control-group">
                
                <label className="control-label" htmlFor="email">E-mail</label>
                <div className="controls">
                  <input type="text" id="email" name="email" placeholder="" className="input-xlarge"></input>
                  <p className="help-block">Please provide your E-mail</p>
                </div>
              </div>
           
              <div className="control-group">
                
                <div className="controls">
                  <button onClick={this.onViewApplicationClick} className="btn btn-success">View Application</button>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
    );
  }
}

export default CheckStatus;
