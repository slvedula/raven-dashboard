import React, { Component } from 'react';

export default class ReleaseInfo extends Component {
  render() {
    const { explore, handleFieldClick } = this.props;
    const { case:
            { form:
              { navBottom: {
                firstName,
                middleName,
                lastName,
                gender,
                birthDate,
                address,
                city,
                usState,
                race,
                ethnicity,
                age
            }}}} = this.props;
    return (
      <div className="releaseInfo">
        <div className="i1">
          <div className="i1-a">
            <div className="i1-aa">
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('decedent')}
              >
                <div className="field-label is-small">
                  <label className="label">First Name</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={firstName || ""}
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
                  <label className="label">Middle Name</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value={middleName || ""}
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
                  <label className="label">Last Name</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={lastName || ""}
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
                  <label className="label">Gender</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value={gender || ""}
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
                  <label className="label">Date of Birth</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={birthDate || ""}
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
                  <label className="label">Age</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={age || ""}
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
                  <label className="label">Race</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={race || ""}
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
                  <label className="label">Ethnicity</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        required
                        placeholder="Required"
                        value={ethnicity || ""}
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
                  <label className="label">Address</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value={address || ""}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
