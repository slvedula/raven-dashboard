import React, { Component } from 'react';

export default class NavBottom extends Component {
  render() {
    const { explore, handleFieldClick } = this.props;
    const { case:
            { form:
              { navBottom: {
                caseNumber,
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
          className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
          onClick={() => handleFieldClick('case-num')}
        >
            <div className="field-label is-small">
              <label className="label">Case #</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={caseNumber}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
            onClick={() => handleFieldClick('decedent')}
          >
            <div className="field-label is-small">
              <label className="label">Decedent</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={firstName || ''}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={middleName || ''}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={lastName || ''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
            onClick={() => handleFieldClick('time-of-death')}
          >
            <div className="field-label is-small">
              <label className="label">Date/Time of Death</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={dateOfDeath || ''}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-small"
                    type="text"
                    value={timeOfDeath || ''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-end">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-small is-outlined is-primary">
                Investigation
              </a>
            </p>
            <p className="control">
              <a className="button is-small is-outlined is-primary">
                Certification
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
