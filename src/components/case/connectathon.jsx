import React, {Component} from 'react';
import ConnectathonSearchModal from "../../containers/connectathon-search-modal-container";
import Select from 'react-select';

export default class Connectathon extends Component {
  constructor(props){
    super(props);
    // TODO: Switch default selectedServer to not be hardcoded.
    this.state = {
      selectedServer:     {
        label: "BlueJay FHIR Server (Demo)",
        header: {
          baseURL: 'https://apps.hdap.gatech.edu/bluejay-fhir-server/fhir/',
          headers: {
            'Content-Type': 'application/json'
          },
          auth: {
            username: 'client',
            password: 'secret'
          }
        },
        capabilityStatement: {},
        operationDefinition: {}
      },
      showSearchResults: false,
      initialCaseData: null,
      initializedParameters: false,
      initializedServers: false
    };
  }

  // Local State modifiers.
  toggleShowSearchResults = (value) => {
    this.setState({showSearchResults: value});
  };

  setServer = (e) => {
    console.log("SWITCHING SERVERS: ")
    let server = this.props.connectathon.edrsServers[e.target.value];
    console.log(server);
    this.setState({selectedServer: server});
  }

  // Update Parameter Resource based on current input onChange. Default valueType is valueString, must specify other
  // value types. E.g. valueDateTime
  updateParameterResource(name, e, valueType = "valueString") {
    // Pull the value from the onChange event and trim the string.
    // TODO: Input Validation and all here.
    var value = e.target.value;
    value = value.trim();
    // Call the action
    this.props.updateParameterResource(name, value, valueType);
  }

  componentDidUpdate(oldProps) {
    // TODO: CHECK IF THIS WORKS SWITCHING CASES! (May need to compare ids.)
    // TODO: Rewrite this garbage after done testing.
    if (!this.props.case.isLoaded) return;
    if (!this.props.case.form) return;
    if (this.state.initializedParameters) return;
    if (this.props.case.form) {
      this.setState({
        initializedParameters: true
       });
      this.props.initializeParameterResource(this.props.case.form);
    }
    if (this.props.connectathon.edrsServers) {
      this.setState({
        initializedServers: true
      });
      //this.props.initializeServers(this.props.connectathon.edrsServers);
    }
  }

  render() {
    const {
      case:
          {
            form:
                {
                  navBottom: {
                    firstName,
                    lastName,
                    gender,
                    dateOfDeath
                  },
                  summary: {
                  }
                }
          },
      connectathon: {
        searchResults,
        edrsServers,
        parameterResource
        }
    } = this.props;

    // Render DOM
    return (

        <div className="">

          <div className={`search-case`}>
            <div className="select">
              <select onChange={this.setServer}>
                {edrsServers.map((server, i) =>
                    <option key={i} value={i}>{server.label}</option>
                )}
              </select>

            </div>
            <button
                className={`button is-small is-outlined is-primary`}
                onClick={() => {
                  this.props.searchWithParams(this.state.selectedServer, parameterResource);
                  this.toggleShowSearchResults(true);
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
                            defaultValue={firstName || ""}
                            onChange={(e) => {
                              this.updateParameterResource("decedent.given", e)
                            }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className={`field is-horizontal explorable`}>
                  <div className="field-label is-small">
                    <label className="label">Last Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            defaultValue={lastName || ""}
                            onChange={(e) => {
                              this.updateParameterResource("decedent.family", e)
                            }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className={`field is-horizontal explorable`}>
                  <div className="field-label is-small">
                    <label className="label">Gender</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            defaultValue={gender || ""}
                            onChange={(e) => {
                              this.updateParameterResource("decedent.gender", e)
                            }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className={`field is-horizontal explorable`}>
                  <div className="field-label is-small">
                    <label className="label">Date of Death</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            defaultValue={dateOfDeath || ""}
                            onChange={(e) => {
                              this.updateParameterResource("vrdr-death-date.value-date", e, "valueDate")
                            }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className={`field is-horizontal explorable`}>
                  <div className="field-label is-small">
                    <label className="label">District of Death</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            defaultValue={"" || ""}
                            onChange={(e) => {
                              this.updateParameterResource("vrdr-death-location.district", e)
                            }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          Parameters<br/>
          <textarea
              type="textarea"
              value={JSON.stringify(parameterResource, null, 2)}
              rows={15}
              cols={80}
          />
          <br/>
          Response Bundle<br/>
          <textarea
              rows={15}
              cols={80}
              type="textarea"
              value={JSON.stringify(searchResults.data, null, 2)}
          />
          <br/>
          Selected Case Document<br/>
          <textarea
              rows={15}
              cols={80}
              type="textarea"
              value={JSON.stringify(searchResults.data, null, 2)}
          />
          <br/>
          Fetch Capability Statement for {this.state.selectedServer.label}
          <textarea
              rows={15}
              cols={80}
              type="textarea"
              value={JSON.stringify(this.state.selectedServer.capabilityStatement, null, 2)}
            />
        </div>

    );
  }
}
