import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CaseSummary from '../../containers/case_summary';
import Documents from './documents';
import CaseNotes from './notes';
import ReleaseInfo from '../../containers/case_release_info';
import Toxicology from './toxicology';


export default class Index extends Component {
  constructor(props) {
    super(props);

    const location = window.location.pathname;
    const lastSlashIndex = location.lastIndexOf('/') + 1;
    const idString = location.substring(lastSlashIndex);

    function selectTab(id) {
      switch (id) {
        case 'summary':
          return 0;
          break;
        case 'notes':
          return 1;
          break;
        case 'release':
          return 2;
          break;
        case 'toxicology':
          return 3;
          break;
        case 'documents':
          return 4;
          break;
        default:
          return 0;
          break;
      }
    }

    const id = selectTab(idString);

    this.state = {
      activeTabIndex: id
    };
  }
    changeTab(newActiveTabIndex) {
      this.setState({
        activeTabIndex: newActiveTabIndex
      });
    }

  componentDidUpdate(prevProps) {
    if (this.props.caseId !== prevProps.caseId) {
      this.setState({
        activeTabIndex: 0
      });
    }
  }

  render() {
    const { activeTabIndex } = this.state;
    const { explore, handleFieldClick, caseId } = this.props;
    return (
      <div className="page case">
        <div className="tabs is-toggle is-small">
          <ul>
            <li
              className={activeTabIndex === 0 ? 'is-active' : ''}
              onClick={this.changeTab.bind(this, 0)}>
              <Link className="is-primary" to={`/raven-dashboard/c/${caseId}/summary`}>
                <span>Case Summary</span>
              </Link>
            </li>
            <li
              className={activeTabIndex === 2 ? 'is-active' : ''}
              onClick={this.changeTab.bind(this, 2)}>
              <Link to={`/raven-dashboard/c/${caseId}/release`}>
                <span>Decedent Detail</span>
              </Link>
            </li>
            <li
              className={activeTabIndex === 1 ? 'is-active' : ''}
              onClick={this.changeTab.bind(this, 1)}>
              <Link to={`/raven-dashboard/c/${caseId}/notes`}>
                <span>Case Notes</span>
              </Link>
            </li>
            <li
              className={activeTabIndex === 3 ? 'is-active' : ''}
              onClick={this.changeTab.bind(this, 3)}>
              <Link to={`/raven-dashboard/c/${caseId}/toxicology`}>
                <span>Toxicology</span>
              </Link>
            </li>
            <li
              className={activeTabIndex === 4 ? 'is-active' : ''}
              onClick={this.changeTab.bind(this, 4)}>
              <Link to={`/raven-dashboard/c/${caseId}/documents`}>
                <span>Documents</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route
              path={`/raven-dashboard/c/${caseId}/summary`}
              render={() =>
                <CaseSummary
                  explore={explore}
                  handleFieldClick={handleFieldClick}
                />
              }
            />
            <Route
              path={`/raven-dashboard/c/${caseId}/notes`}
              render={() =>
                <CaseNotes/>
              }
            />
            <Route
              path={`/raven-dashboard/c/${caseId}/release`}
              render={() =>
                <ReleaseInfo
                  explore={explore}
                  handleFieldClick={handleFieldClick}
                />
              }
            />
            <Route
              path={`/raven-dashboard/c/${caseId}/toxicology`}
              render={() =>
                <Toxicology/>
              }
            />
            <Route
              path={`/raven-dashboard/c/${caseId}/documents`}
              render={() =>
                <Documents/>
              }
            />
            <Redirect to={`/raven-dashboard/c/${caseId}/summary`}/>
          </Switch>
        </div>
      </div>
    );
  }
}
