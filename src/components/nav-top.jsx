import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavTop extends Component {
  render() {
    const {
      isExplorerVisible,
      handleSwitchChange
    } = this.props;

    return (
      <nav className="navbar nav-top" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to={`${window.location.pathname}?showPicker=true`} className="navbar-item">
              Browse Cases
            </Link>
          </div>

          <div className="navbar-middle">
            <h1>CASE FILE</h1>
            <h2>MEDICOLEGAL DEATH INVESTIGATION (MDI) REFERENCE IMPLEMENTATION</h2>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">
                <input
                  id="switchExample"
                  type="checkbox"
                  name="switchExample"
                  className="switch is-link is-rounded"
                  checked={isExplorerVisible}
                  onChange={() => {
                    console.log("This was clicked: ", this.props.handleSwitchChange);
                    handleSwitchChange()}}
                />
                <label htmlFor="switchExample">FHIR Explorer</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
