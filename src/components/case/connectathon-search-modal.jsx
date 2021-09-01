import React, {Component} from 'react';
import api from "../../api";
import {BsSearch} from "react-icons/bs";
import {Link} from "react-router-dom";
import {GrClose} from "react-icons/gr";
import BouncingBalls from "../bouncing-balls";

export default class ConnectathonSearchModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResultsVisible: false,
      showCloseButton: true,
    };
  }

  render() {
    const {explore, handleFieldClick} = this.props;
    const {searchResultIsVisible} = this.state;
    const {
      isLoading,
      isLoadError
    } = this.props;

    // Render DOM
    return (
        <div className={`case-picker modal ${searchResultIsVisible ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <div className="left">
                <div className="title">
                  Search Results
                </div>
              </div>

              <div className="right">
                <Link
                    to={`/raven-dashboard/c/`}
                    aria-label="close"
                >
                  <GrClose/>
                </Link>
              </div>
            </header>
            <section className={`modal-card-body ${isLoading ? 'is-loading' : ''}`}>
              { isLoading ? (
                  <BouncingBalls/>
              ) : (
                  <>
                    { isLoadError &&
                    <div className="message is-danger">
                      <div className="message-body">{`Problem loading cases.`}</div>
                    </div>
                    }
                    <table className="table is-fullwidth">
                      <thead>
                      <tr>
                        <th>Demographic</th>
                        <th>Case #</th>
                        <th>Time of Death</th>
                        <th>System</th>
                        <th>Status</th>
                      </tr>
                      </thead>

                      <tbody className="no-data-message"><tr><td>No results.</td></tr></tbody>

                    </table>
                  </>
              )}
            </section>
          </div>
        </div>
    );
  }
}
