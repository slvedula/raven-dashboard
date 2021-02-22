import React, { Component } from 'react';
import Tooltip from 'react-simple-tooltip';
import {css} from 'styled-components';
import axios from 'axios';

function InputField(props) {
  if (props.value.length > props.overflow) {
    return (
      <Tooltip content={props.value || ""}
        fontSize='small'
        background='#fefdcf'
        color='#000'
        placement='bottom'
        customCss={css`
          text-align: center;
        `}>
        <input
          className="input is-small"
          type="text"
          size="small"
          value={props.value || ""}
          />
      </Tooltip>
    );
  } else {
    return (
      <input
        className="input is-small"
        type="text"
        size="small"
        required={props.required || false}
        placeholder={props.required ? "Required" : ""}
        value={props.value || ""}
        />
    )
  }
}



export default class NavBottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exportText: 'Export',
      oldExplore: 'decedent'
    };

    this.exportPatient.bind(this);
    this.checkExportStatus.bind(this);
  }

  async exportPatient(caseNum, system) {
    var self=this;
    this.setState({
      exportText: 'Exporting'
    });
    var res = await axios.get(`${window._env_.FHIR_MAPPER_URL}` + 'submitEDRS2.0?systemIdentifier=' + system + '&codeIdentifier=' + caseNum)
      .then(res => {
        console.log(res);
        self.setState({
          exportText: 'Exported'
        })
      }).catch(function(error) {
        console.log(error.message);
        self.setState({
          exportText: 'Export'
        })
    });
  }

  async checkExportStatus(caseNum, system) {
    var self=this;
    console.log("Checking export status for: ", system + ' ' + caseNum);
    var res = axios.get(`${window._env_.FHIR_MAPPER_URL}` + 'submitstatus?systemIdentifier=' + system + '&codeIdentifier=' + caseNum)
      .then(res => {
        console.log(res);
      }).catch(function(error) {
        console.log(error.message);
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.case.isLoaded === true && prevProps.case.isLoading === true) {
      this.setState(state => ({
        exportText: 'Export'
      }));
    }
  }

  render() {
    const { exportText, oldExplore } = this.state;
    const { explore, handleFieldClick, isExplorerVisible } = this.props;
    const { case:
            { form:
              { navBottom: {
                caseNumber,
                caseSystem,
                firstName,
                middleName,
                lastName,
                dateOfDeath,
                timeOfDeath
              }}}} = this.props;
    return (
      <div className="nav-bottom">
        <div className="nav-bottom-start">
        <div
          className={`field is-horizontal explorable ${explore === 'case-num' ? 'is-explore' : ''}`}
          onClick={() => handleFieldClick('case-num')}
        >
            <div className="field-label is-small">
              <label className="label">Case #</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <InputField value={caseNumber || ""} overflow='6'/>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`field is-horizontal explorable ${explore === 'decedent' ? 'is-explore' : ''}`}
            onClick={() => handleFieldClick('decedent')}
          >
            <div className="field-label is-small">
              <label className="label">Decedent</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <InputField value={firstName || ""} overflow='20' required={true} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={middleName || ""} overflow='20'/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={lastName || ""} overflow='20' required={true} />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`field is-horizontal explorable ${explore === 'time-of-death' ? 'is-explore' : ''}`}
            onClick={() => handleFieldClick('time-of-death')}
          >
            <div className="field-label is-small">
              <label className="label">Date/Time of Death</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <InputField value={dateOfDeath || ""} overflow='6' required={true} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={timeOfDeath || ""} overflow='6' required={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-end">
          <div className="field is-grouped">
          <p className="control">
            <a
              className={`button is-small is-outlined is-primary ${(explore === 'composition-document' && isExplorerVisible) ? 'is-hovered' : ''}`}
              onClick={() => {
                if (isExplorerVisible) {
                  if (explore !== 'composition-document') {
                    this.setState({
                      oldExplore: explore
                    });
                    handleFieldClick('composition-document');
                  } else {
                    handleFieldClick(this.state.oldExplore);
                  }
                }
              }}>
              VRDR Document
            </a>
          </p>
            <p className="control">
              <button
                disabled={this.state.exportText !== 'Export'}
                className={`button is-small is-outlined is-primary`}
                onClick={() => this.exportPatient(caseNumber, caseSystem)}>
                {this.state.exportText}
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
