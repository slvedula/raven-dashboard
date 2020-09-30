import React, { Component } from 'react';
import idx from 'idx';
import { Link } from "react-router-dom";
import queryString from 'query-string';
import NavTop from './nav-top';
import NavBottom from '../containers/nav_bottom_container';
import CasePanel from './case/index';
import FhirExplorer from './fhir-explorer';

class Case extends Component {
  componentDidMount() {
    const patientId = idx(this.props, _ => _.match.params.caseId);
    this.props.getCase(patientId);
  }

  componentDidUpdate(prevProps, prevState) {
    const patientId = idx(this.props, _ => _.match.params.caseId);
    const prevPatientId = idx(prevProps, _ => _.match.params.caseId);
    if (patientId !== prevPatientId) {
      this.props.getCase(patientId);
    }
  }

  render() {
    const patientId = idx(this.props, _ => _.match.params.caseId)
    return (
      <>
        <NavTop/>
        <NavBottom/>
        <div className="workspace">
          <div className={`left ${false ? 'explorer-visible' : ''}`}>
            <CasePanel caseId={patientId}/>
          </div>
          <FhirExplorer
            fieldId={null}
            visible={null}
          />
        </div>
      </>
    )
  }
}

export default Case;
