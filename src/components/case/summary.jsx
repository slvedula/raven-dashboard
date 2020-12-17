import React, { Component } from 'react';

export default class CaseSummary extends Component {
  render() {
    const { explore, handleFieldClick } = this.props;
    const { case:
            { form:
              { summary: {
                causeA,
                causeB,
                causeC,
                causeD
              }}}} = this.props;
    return (
      <div className="summary">
        <div className="i1">
          {/*<div className="i1-a">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Jurisdiction</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value="Assumed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Incident</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
          <div className="i1-b">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Death Certificate signed by:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Name"
                      value=""
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Deputy Coroner:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Name"
                      value=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="i1-c">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Death Certificate #</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Certifier Qual</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="i2">
          {/*
          <div className="i2-a">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Exam Type</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value="Aut"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Cremation</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
          <div className="i2-b">
            <div className="i2-ba">
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('at-work')}
              >
                <div className="field-label is-small">
                  <label className="label">Death at Work</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('related-to-job')}
              >
                <div className="field-label is-small">
                  <label className="label">Death related to Job</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('reported-date')}
              >
                <div className="field-label is-small">
                  <label className="label">Reported Date</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('found-date')}
              >
                <div className="field-label is-small">
                  <label className="label">Found Date</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('injury-event-date')}
              >
                <div className="field-label is-small">
                  <label className="label">Injury Event Date</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i2-bb">
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('place-of-death')}
            >
                <div className="field-label is-small">
                  <label className="label">Place of Death</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('type-of-place')}
              >
                <div className="field-label is-small">
                  <label className="label">Type of Place</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-last-known-alive')}
              >
                <div className="field-label is-small">
                  <label className="label">Date Last Known Alive</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('place-last-known-alive')}
              >
                <div className="field-label is-small">
                  <label className="label">Place Last Known Alive</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-case-reviewed')}
              >
                <div className="field-label is-small">
                  <label className="label">Date Case Reviewed</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i2-bc">
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-arrived-at-hospital')}
              >
                <div className="field-label is-small">
                  <label className="label">Date Arrived at Hospital</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('hospital-where-first-taken')}
              >
                <div className="field-label is-small">
                  <label className="label">Hospital Where First Taken</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('surgery-performed')}
              >
                <div className="field-label is-small">
                  <label className="label">Surgery Performed?</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-of-surgery')}
              >
                <div className="field-label is-small">
                  <label className="label">Date of Surgery</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('physician-name')}
              >
                <div className="field-label is-small">
                  <label className="label">Physician Name</label>
                </div>
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="control">
                      <input
                        className="input is-small"
                        type="text"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i2-c">
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('autopsy-performed')}
            >
              <div className="field-label is-small">
                <label className="label">Autopsy Performed?</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('autopsy-findings-used')}
            >
              <div className="field-label is-small">
                <label className="label">Autopsy Findings Used?</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('disposition-of-body')}
            >
              <div className="field-label is-small">
                <label className="label">Disposition of Body</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('year-case-categorized')}
            >
              <div className="field-label is-small">
                <label className="label">Year Case Categorized</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('type-of-residence')}
            >
              <div className="field-label is-small">
                <label className="label">Type of Residence</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <hr />
        <div className="i3">
          <div className="i3-a">
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">Note:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <textarea className="textarea" rows="2"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="i4">
          <div className="i4-a">
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('cause')}
            >
              <div className="field-label is-small">
                <label className="label">Cause:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <textarea className="textarea" rows="3">
                    Heroin toxicity
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i4-b">
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('manner')}
            >
              <div className="field-label is-small">
                <label className="label">Manner:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value="Accident"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('means')}
            >
              <div className="field-label is-small">
                <label className="label">Means:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value="drug-opioid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i4-c">
            <div className={`field is-horizontal`}>
              <div className="field-label is-small">
                <label className="label">Contributing factors:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <textarea className="textarea" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
        <hr />
        <div className="i5">
          <div className="i5-a">
            <div className="i5-aa">
              <div className="i5-aa-1">
                Cause of Death
              </div>
              <div className="i5-aa-2">
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-a')}
                >
                  <div className="field-label is-small">
                    <label className="label">a:</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeA.text || '' }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-b')}
                >
                  <div className="field-label is-small">
                    <label className="label">b:</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeB.text || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-c')}
                >
                  <div className="field-label is-small">
                    <label className="label">c:</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeC.text || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-d')}
                >
                  <div className="field-label is-small">
                    <label className="label">d:</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeD.text || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i5-ab">
              <div className="i5-ab-1">
                Onset to death
              </div>
              <div className="i5-ab-2">
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-a-onset')}
                >
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeA.onsetAge || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-b-onset')}
                >
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeB.onsetAge || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-c-onset')}
                >
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeC.onsetAge || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-d-onset')}
                >
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                          className="input is-small"
                          type="text"
                          value={causeD.onsetAge || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i5-b">
            <div
              className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('contributing-factors')}
            >
              <div className="field-label is-small">
                <label className="label">Other contributing factors:</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      value=""
                    />
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
