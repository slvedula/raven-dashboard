import React, {Component} from 'react';
import axios from "axios";
import ConnectathonSearchModal from "../../containers/connectathon-search-modal-container";

export default class Connectathon extends Component {
  state = {
    selectedServerBase: 'https://apps.hdap.gatech.edu/raven-fhir-server/fhir/',
    showSearchResults: false,
    parameters: {}
  }

  toggleShowSearchResults = (value) => {
    this.setState({showSearchResults: value});
  };

  setServerBase = (e) => {
    this.setState({selectedServerBase: e.target.value});
    console.log(this.state.selectedServerBase);
    //this.props.setServerBase(e.target.value);
  };

  // On Button Click, search the FHIR Server for MDI Documents matching params.
  // TODO: Handle bundle result and show in list.
  async searchWithParams(params) {
    this.toggleShowSearchResults(true);
    var parameters = this.createParameterResource(params);
    var api = axios.create({
      baseURL: `${this.state.selectedServerBase}/`,
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: 'client',
        password: 'secret'
      }
    });
    var res = api.post('Composition/$mdi-documents', parameters)
        .then(res => {
          console.log(res)
        }).catch(function (error) {
          console.log(error.message);
        });
  }

  // Create Parameter Resource based on current input.
  // TODO: Adjust to pull from input boxes and only include key:value pairs for which a value is not empty.
  // TODO: Get full list of parameters from Myung.
  createParameterResource(params) {
    // Temp
    let firstName = params;
    console.log("Creating Parameter Resource");
    var parameters = {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "decedent.given",
        "valueString": firstName
      }
      ]
    }
    return parameters;
  }

  render() {
    const {
      case:
          {
            form:
                {
                  navBottom: {
                    firstName,
                    middleName,
                    lastName,
                    gender,
                    birthDate
                  }
                }
          }
    } = this.props;

    // Render DOM
    return (

        <div className="">

          <div className={`search-case`}>
            <div className="select">
              <select onChange={this.setServerBase}>
                <option value={'https://apps.hdap.gatech.edu/raven-fhir-server/fhir/'}>Raven FHIR Server (Demo)</option>
                <option value={'http://65.61.13.216/FHIR2021/WebApi/FHIR/r4/'}>Georgia EDRS</option>
                {/*<option key={"all-systems"} value="all-systems">All Systems</option>*/}
                {/*{systemOptions.map((system, i) =>*/}
                {/*    <option key={system} value={system}>{system}</option>*/}
                {/*)}*/}
              </select>
            </div>
            <button
                className={`button is-small is-outlined is-primary`}
                onClick={() => {
                  this.searchWithParams(firstName)
                }}>
              Search
            </button>
          </div>

          {this.state.showSearchResults ?
            <ConnectathonSearchModal
                onCloseButtonClick={() => {
                  this.toggleShowSearchResults(false);
                }}/> : null
          }

          <div className="i1">
            <div className="i1-a">
              <div className="i1-aa">
                <div
                    className={`field is-horizontal explorable`}>
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
              </div>
            </div>
          </div>
        </div>

    );
  }
}
