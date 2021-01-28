import React, { Component } from 'react';
import Tooltip from 'react-simple-tooltip';
import {css} from 'styled-components';

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
        value={props.value || ""}
        />
    )
  }
}



export default class NavBottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exportText: 'Export'
    };

    this.exportPatient.bind(this);
  }

  exportPatient(caseNum, system) {
    console.log('Exporting patient');
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      console.log(xhr.responseText);
      this.setState({
        exportText: 'Exported'
      })
    });
    const url = 'https://apps.hdap.gatech.edu/raven-mapper-api/submitEDRS2.0?systemIdentifier=' + system + '&codeIdentifier=' + caseNum + '&submitOnly=true';
    this.setState({
      exportText: 'Exporting'
    })
    xhr.open('GET', url);
    xhr.send();
  }

  componentDidUpdate(prevProps) {
    if (this.props.case.isLoaded === true && prevProps.case.isLoading === true) {
      this.setState(state => ({
        exportText: 'Export'
      }));
    }
  }

  render() {
    const { exportText } = this.state;
    const { explore, handleFieldClick } = this.props;
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
                  <InputField value={firstName || ""} overflow='20'/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={middleName || ""} overflow='20'/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={lastName || ""} overflow='20'/>
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
                  <InputField value={dateOfDeath || ""} overflow='6'/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <InputField value={timeOfDeath || ""} overflow='6'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-end">
          <div className="field is-grouped">
          <p className="control">
            <a
              className={`button is-small is-outlined is-primary ${explore === 'composition-document' ? 'is-hovered' : ''}`}
              onClick={() => handleFieldClick('composition-document')}>
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
