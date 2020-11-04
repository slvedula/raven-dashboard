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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Jurisdiction</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      value="Assumed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Incident</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
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
                      defaultValue=""
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
                      defaultValue=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="i1-c">
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Death Certificate #</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Certifier Qual</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Exam Type</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      value="Aut"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Cremation</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
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
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('at-work')}
              >
                <div class="field-label is-small">
                  <label class="label">Death at Work</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('related-to-job')}
              >
                <div class="field-label is-small">
                  <label class="label">Death related to Job</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('reported-date')}
              >
                <div class="field-label is-small">
                  <label class="label">Reported Date</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('found-date')}
              >
                <div class="field-label is-small">
                  <label class="label">Found Date</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('injury-event-date')}
              >
                <div class="field-label is-small">
                  <label class="label">Injury Event Date</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i2-bb">
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('place-of-death')}
            >
                <div class="field-label is-small">
                  <label class="label">Place of Death</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('type-of-place')}
              >
                <div class="field-label is-small">
                  <label class="label">Type of Place</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-last-known-alive')}
              >
                <div class="field-label is-small">
                  <label class="label">Date Last Known Alive</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('place-last-known-alive')}
              >
                <div class="field-label is-small">
                  <label class="label">Place Last Known Alive</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-case-reviewed')}
              >
                <div class="field-label is-small">
                  <label class="label">Date Case Reviewed</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i2-bc">
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-arrived-at-hospital')}
              >
                <div class="field-label is-small">
                  <label class="label">Date Arrived at Hospital</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('hospital-where-first-taken')}
              >
                <div class="field-label is-small">
                  <label class="label">Hospital Where First Taken</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('surgery-performed')}
              >
                <div class="field-label is-small">
                  <label class="label">Surgery Performed?</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('date-of-surgery')}
              >
                <div class="field-label is-small">
                  <label class="label">Date of Surgery</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                onClick={() => handleFieldClick('physician-name')}
              >
                <div class="field-label is-small">
                  <label class="label">Physician Name</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i2-c">
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('autopsy-performed')}
            >
              <div class="field-label is-small">
                <label class="label">Autopsy Performed?</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('autopsy-findings-used')}
            >
              <div class="field-label is-small">
                <label class="label">Autopsy Findings Used?</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('disposition-of-body')}
            >
              <div class="field-label is-small">
                <label class="label">Disposition of Body</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('year-case-categorized')}
            >
              <div class="field-label is-small">
                <label class="label">Year Case Categorized</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('type-of-residence')}
            >
              <div class="field-label is-small">
                <label class="label">Type of Residence</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Note:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <textarea class="textarea" rows="2"></textarea>
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
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('cause')}
            >
              <div class="field-label is-small">
                <label class="label">Cause:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <textarea class="textarea" rows="3">
                    Heroin toxicity
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i4-b">
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('manner')}
            >
              <div class="field-label is-small">
                <label class="label">Manner:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      value="Accident"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('means')}
            >
              <div class="field-label is-small">
                <label class="label">Means:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      value="drug-opioid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="i4-c">
            <div class={`field is-horizontal`}>
              <div class="field-label is-small">
                <label class="label">Contributing factors:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <textarea class="textarea" rows="3"></textarea>
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
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-a')}
                >
                  <div class="field-label is-small">
                    <label class="label">a:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeA.text}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-b')}
                >
                  <div class="field-label is-small">
                    <label class="label">b:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeB.text}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-c')}
                >
                  <div class="field-label is-small">
                    <label class="label">c:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeC.text}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-d')}
                >
                  <div class="field-label is-small">
                    <label class="label">d:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeD.text}
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
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-a-onset')}
                >
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeA.onsetAge}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-b-onset')}
                >
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeB.onsetAge}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-c-onset')}
                >
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeC.onsetAge}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                  onClick={() => handleFieldClick('cause-d-onset')}
                >
                  <div class="field-body">
                    <div class="field is-expanded">
                      <div class="control">
                        <input
                          class="input is-small"
                          type="text"
                          defaultValue={causeD.onsetAge}
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
              class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
              onClick={() => handleFieldClick('contributing-factors')}
            >
              <div class="field-label is-small">
                <label class="label">Other contributing factors:</label>
              </div>
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <input
                      class="input is-small"
                      type="text"
                      defaultValue=""
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
