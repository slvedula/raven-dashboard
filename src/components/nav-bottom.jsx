import React, { Component } from 'react';

export default class NavBottom extends Component {
  render() {
    return (
      <div className="nav-bottom">
        <div className="nav-bottom-start">
          <div class="field explore is-horizontal">
            <div class="field-label is-small">
              <label class="label">Case #</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    value="2017-4089"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Decedent</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    value="Jane"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    value="Doe"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-small">
              <label class="label">Date/Time of Death</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    value="2/5/2019"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-small"
                    type="text"
                    value="1400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-end">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-small is-light is-link">
                Investigation
              </a>
            </p>
            <p class="control">
              <a class="button is-small is-light is-danger">
                Morgue
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
