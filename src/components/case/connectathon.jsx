import React, {Component} from 'react';
import api from "../../api";
import ConnectathonSearchModal from "../../containers/connectathon-search-modal-container";

export default class Connectathon extends Component {
  render() {
    const { case:
            { form:
                { navBottom: {
                    firstName,
                    middleName,
                    lastName,
                    gender,
                    birthDate
                  }}}} = this.props;

    // On Button Click, search the FHIR Server for MDI Documents matching params.
    // TODO: Handle bundle result and show in list.
    async function searchWithParams() {
      var parameters = createParameterResource();
      var res = api.post('/Composition/$mdi-documents', parameters)
          .then(res => {
            console.log(res)
          }).catch(function (error) {
            console.log(error.message);
          });
    }

    // Create Parameter Resource based on current input.
    // TODO: Adjust to pull from input boxes and only include key:value pairs for which a value is not empty.
    // TODO: Get full list of parameters from Myung.
    function createParameterResource() {
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

    // Render DOM
    return (
        <div className="">
          <div className="select">
            <select >
              <option>https://apps.hdap.gatech.edu/raven-fhir-server/fhir/</option>
              <option>https://apps.hdap.gatech.edu/raven-fhir-server/fhir/</option>
              {/*<option key={"all-systems"} value="all-systems">All Systems</option>*/}
              {/*{systemOptions.map((system, i) =>*/}
              {/*    <option key={system} value={system}>{system}</option>*/}
              {/*)}*/}
            </select>
          </div>

          <button
              className={`button is-small is-outlined is-primary`}
              onClick={() => {searchWithParams()}}>
            Search
          </button>



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
