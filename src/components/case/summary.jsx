import React, { Component } from 'react';

export default class CaseSummary extends Component {
  render() {
    const { explore } = this.props;
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
                      value="Gregory G. Davis"
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
                      value="Bill Yates"
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
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">SMORT/DMORT #</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Decedent identified</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Family notified</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        value="Yes"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Ok to release</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        value="Yes"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Body release</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        value="No"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Body Location</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        value="A"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="i2-bb">
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Personal property (scene)</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Personal property (morgue)</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">NoK notified of property</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Peronal property released</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">Release property with body</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">D.C.R</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <input
                        class="input is-small"
                        type="text"
                        value="Completed"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">D.C. Initiated</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">D.C. in from F.H.</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">D.C. out to F.H.</label>
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
              <div class="field is-horizontal">
                <div class="field-label is-small">
                  <label class="label">D.C. out to H.D.</label>
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
          </div>
          <div className="i2-c">
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Condolence card sent</label>
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
                <label class="label">Toxicology request received</label>
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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Toxicology report returned</label>
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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Investigation review completed</label>
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
            <div class="field is-horizontal">
              <div class="field-label is-small">
                <label class="label">Final case review completed</label>
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
        </div>
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
            <div class="field is-horizontal">
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
            <div class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}>
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
            <div class={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}>
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
      </div>
    );
  }
}
