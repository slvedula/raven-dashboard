import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CaseSummary from './summary';
import Documents from './documents';
import CaseNotes from './notes';
import ReleaseInfo from './release-info';
import Toxicology from './toxicology';


export default class Index extends Component {
  render() {
    const { explore } = this.props;
    return (
      <div className="page case">
        <div className="tabs is-toggle is-small">
          <ul>
            <li className="is-active">
              <Link className="is-primary" to="/case/summary">
                <span>Case Summary</span>
              </Link>
            </li>
            <li>
              <Link to="/case/notes">
                <span>Case Notes</span>
              </Link>
            </li>
            <li>
              <Link to="/case/release">
                <span>Release of Info</span>
              </Link>
            </li>
            <li>
              <Link to="/case/toxicology">
                <span>Toxicology</span>
              </Link>
            </li>
            <li>
              <Link to="/case/documents">
                <span>Documents</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route
              path="/case/summary"
              render={() => <CaseSummary explore={explore}/>}
            />
            <Route path="/case/notes" component={CaseNotes}/>
            <Route path="/case/release" component={ReleaseInfo}/>
            <Route path="/case/toxicology" component={Toxicology}/>
            <Route path="/case/documents" component={Documents}/>
            <Redirect to="/case/summary"/>
          </Switch>
        </div>
      </div>
    );
  }
}
