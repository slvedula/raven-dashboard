import React, { Component } from 'react';

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
            <a className="navbar-item">
              Main Menu
            </a>

            <a className="navbar-item">
              Master File
            </a>
          </div>

          <div className="navbar-middle">
            <h1>CASE FILE</h1>
            <h2>JEFFERSON COUNTY CORONER / MEDICAL EXAMINER'S OFFICE</h2>
          </div>

          <div className="navbar-end">
            {/*<div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown is-right">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            */}
            <div className="navbar-item">
              <div class="field">
                <input
                  id="switchExample"
                  type="checkbox"
                  name="switchExample"
                  class="switch is-link is-rounded"
                  checked={isExplorerVisible}
                  onChange={() => handleSwitchChange()}
                />
                <label for="switchExample">FHIR Explorer</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
