import React, {Component} from 'react';
import axios from "axios";
import ConnectathonSearchModal from "../../containers/connectathon-search-modal-container";

export default class Connectathon extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedServerBase: 'https://apps.hdap.gatech.edu/raven-fhir-server/fhir/',
      showSearchResults: false,
      parameters: this.initializeParameterResource()
    };
  }

  // State modifiers.
  toggleShowSearchResults = (value) => {
    this.setState({showSearchResults: value});
  };
  setServerBase = (e) => {
    console.log(e.target.value.serverBase);
    this.setState({selectedServerBase: e.target.value});
  };
  setParameters = (params) => {
    this.setState({parameters: params});
  };

  // On Button Click, search the FHIR Server for MDI Documents matching params.
  // TODO: Pass bundle result and show in result list.
  async searchWithParams() {
    this.props.searchWithParams(this.state.selectedServerBase, this.state.parameters);
    this.toggleShowSearchResults(true);
    // this.toggleShowSearchResults(true);
    // //var parameters = this.createParameterResource(params);
    // var api = axios.create({
    //   baseURL: `${this.state.selectedServerBase}/`,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   auth: {
    //     username: 'client',
    //     password: 'secret'
    //   }
    // });
    // var res = api.post('Composition/$mdi-documents', this.state.parameters)
    //     .then(res => {
    //       this.setResponseBundle(res.data);
    //     }).catch(function (error) {
    //       console.log(error.message);
    //     });
  }

  // Initialize Parameter Resource on render based on the passed properties.
  initializeParameterResource(params) {
    var parameterResourceJSON = {
      "resourceType": "Parameters",
      "parameter": []
    };
    var parameterList = parameterResourceJSON["parameter"];
    // console.log(params);
    // if (!!params) {
    //   params.map(entry => {
    //     let element = (Object.keys(entry))[0];
    //     let value = entry[element];
    //     if(!!value && value.trim(' ') !== '') {
    //       value = value.trim();
    //       parameterList.push(this.mapParameterEntry(element, value));
    //     }
    //     });
    // }
    parameterResourceJSON["parameter"] = parameterList;
    return JSON.stringify(parameterResourceJSON, null, 2);
  }

  // Update Parameter Resource based on current input onChange. Default valueType is valueString, must specify other
  // value types. E.g. valueDateTime
  updateParameterResource(element, e, valueType = "valueString") {
    // Pull the value from the onChange event and trim the string.
    var value = e.target.value;
    value = value.trim();
    this.props.updateParameterResource(element, value, valueType);

    // Parse the string as JSON to allow operations.
    // TODO: Remove if the state is changed to be stored as JSON instead of string representation.
    var parametersJSON = JSON.parse(this.state.parameters);

    // Create a reference to the parameter list in the resource to work with it directly.
    var parameterList = parametersJSON["parameter"];

    if (value === "") {
      // Check if Parameter exists and delete it if value string is empty.
      let parameterListCopy = [...parameterList];
      parameterListCopy.map((entry, index) => {
        if(!!entry.name && entry.name.trim(' ') !== '') {
          if (entry.name === element) {
            parameterList.splice(index, 1);
          }
        }
      });
    }
    else {
      // If value string not empty, iterate over parameter list and either
      // add or update..

      // Parameter Control Bool
      let parameterExists = false;

      // Iterate over the parameter list and check if an entry with a name whose value equals the relevant FHIR element
      // passed (ie: decedent.given). If exists, flag as true to skip the add(push) operation and update the value.
      parameterList.map(entry => {
         if(!!entry.name && entry.name.trim(' ') !== '') {
           if (entry.name === element) {
             parameterExists = true;
             entry[valueType] = value;
           }
         }
      });

      // If the name whose value did not equal the relevant FHIR element is not found, push to the list.
      if (!parameterExists) {
        parameterList.push(this.mapParameterEntry(element, value));
      }
    }

    // Call the setsParameters state method and pass in the string version of the parameter to render properly in the
    // text area.
    // TODO: Note, this can be retained as a JSON if not doing the demo output.
    this.setParameters(JSON.stringify(parametersJSON, null, 2))
  }

  // Reusable method to quickly turn the element:value pair into the required Parameter resource structure.
  mapParameterEntry(element, value, valueType = "valueString"){
    let entry = {};
    entry["name"] = element;
    entry[valueType] = value
    return entry;
  }


  componentDidUpdate() {

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
              <select onChange={this.setServerBase}>
                {edrsServers.map((server, i) =>
                    <option key={i} value={server.serverBase}>{server.name}</option>
                )}
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
                searchResults={searchResults}
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
                    <label className="label">Gender</label>
                  </div>
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="control">
                        <input
                            className="input is-small"
                            type="text"
                            required
                            placeholder="Required"
                            defaultValue={gender || ""}
                            onChange={(e) => {
                              this.updateParameterResource("decedent.gender", e)
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
              value={this.state.parameters}
              rows={15}
              cols={80}
          />
          <br/>
          Parameters (State)<br/>
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
        </div>

    );
  }
}
