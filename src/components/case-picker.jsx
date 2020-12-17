import React, { Component } from 'react';
import BouncingBalls from './bouncing-balls';
import idx from 'idx';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

class CasePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      casePickerIsVisible: false,
      showCloseButton: true
    };
  }

  match({match, location}) {
    if (match) {
      switch(match.path) {
        case "/app/cases": {
          return {
            casePickerIsVisible: true,
            showCloseButton: false
          };
        }
        case "/app/c/:caseId": {
          const { showPicker } = queryString.parse(
            location.search,
            { parseBooleans: true }
          );
          return {
            casePickerIsVisible: showPicker,
            showCloseButton: true
          };
        }
        default: {
          return {
            casePickerIsVisible: false,
            showCloseButton: false
          }
        }
      }
    }
    return {
      casePickerIsVisible: false,
      showCloseButton: false
    };
  };



  componentDidMount() {
    this.props.getCases();
    const { casePickerIsVisible, showCloseButton } = this.match(this.props);
    if (casePickerIsVisible) {
      this.setState({
        casePickerIsVisible: true,
        showCloseButton: showCloseButton
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { casePickerIsVisible, showCloseButton } = this.match(this.props);
    const { casePickerIsVisible: prevCasePickerIsVisible } = this.match(prevProps);
    if (casePickerIsVisible && !prevCasePickerIsVisible) {
      return this.setState({
        casePickerIsVisible: true,
        showCloseButton: showCloseButton
      });
    }
    if (!casePickerIsVisible && prevCasePickerIsVisible) {
      return this.setState({
        casePickerIsVisible: false
      });
    }
  }

  filterByCaseNumber = e => {
    this.props.filterByCaseNumber(e.target.value);
  };

  filterBySystem = e => {
    this.setState({selectedSystem: e.target.value});
    this.props.filterBySystem(e.target.value);
  };

  handlePatientClick = caseNum => {
    const { history: { push } } = this.props;
    push(`/app/c/${caseNum}/summary`);
  }

  render() {
    const { casePickerIsVisible, showCloseButton } = this.state;
    const caseIdFromUrl = idx(this.props, _ => _.match.params.caseId);
    const {
      isLoading,
      isLoaded,
      isLoadError,
      filteredCases: cases,
      systemOptions,
      searchText,
      selectedSystem
    } = this.props.picker;
    return (
      <div className={`case-picker modal ${casePickerIsVisible ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <div className="left">
              <div className="title">
                Cases
              </div>
              <div className="filter">
                <p className="control has-icons-left search-case">
                  <input
                    value={searchText}
                    className="input"
                    type="text"
                    placeholder="Search case number"
                    onChange={this.filterByCaseNumber}
                  />
                  <span className="icon is-small is-left">
                    <BsSearch/>
                  </span>
                </p>
                <div className="control search-system">
                  <div className="select">
                    <select value={selectedSystem} onChange={this.filterBySystem}>
                      <option key={"all-systems"} value="all-systems">All Systems</option>
                    {systemOptions.map((system, i) =>
                      <option key={system} value={system}>{system}</option>
                    )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              { showCloseButton &&
                <Link
                  to={`/app/c/${caseIdFromUrl}`}
                  aria-label="close"
                >
                <GrClose/>
                </Link>
              }
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
                  { cases.allIds.length === 0 &&
                    <tbody className="no-data-message"><tr><td>No patients.</td></tr></tbody>
                  }
                  { cases.allIds.length > 0 &&
                    <tbody>
                      {cases.allIds.map((caseId) =>
                        <tr className={`patient-row ${caseIdFromUrl === caseId ? 'is-active' : ''}`} onClick={() => this.handlePatientClick(caseId)} key={caseId}>
                          <td className="demographic">
                              <div className="first-last">{cases.byId[caseId].name}</div>
                              <div className="age-gender">
                                <span className="age">{cases.byId[caseId].age}&nbsp;year&nbsp;</span>
                                <span>old&nbsp;</span>
                                <span className="gender">{cases.byId[caseId].gender}</span>
                              </div>
                          </td>
                          <td className="case-number">
                            <div>{cases.byId[caseId].caseNumber}</div>
                          </td>
                          <td className="time-of-death">{cases.byId[caseId].timeOfDeath}</td>
                          <td className="system">{cases.byId[caseId].system}</td>
                          <td className="status"><div>Pending</div></td>
                        </tr>
                      )}
                    </tbody>
                  }
                </table>
              </>
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default CasePicker
