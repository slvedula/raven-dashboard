import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CsvTop extends Component {
  render() {
    return(
      <nav className="navbar nav-top" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to='/app/cases' className="navbar-item">
              Browse Cases
            </Link>
          </div>

          <div className="navbar-middle">
            <h1>Submit CSV</h1>
          </div>

          <div className="navbar-end"/>
        </div>
      </nav>
    );
  }
}
