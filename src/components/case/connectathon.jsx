import React, {Component} from 'react';
import api from "../../api";

export default class Connectathon extends Component {
  render() {
    const {explore, handleFieldClick} = this.props;
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

    // On Button Click, search the FHIR Server for MDI Documents matching params.
    // TODO: Handle bundle result and show in list.
    async function searchWithParams() {
      console.log('Search Clicked');

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
    function createParameterResource() {
      console.log("Creating Parameter Resource");
      return '{\n' +
          '  "resourceType": "Parameters",\n' +
          '  "parameter": [\n' +
          '    {\n' +
          '      "name": "decedent.given",\n' +
          '      "valueString": "Jamil"\n' +
          '    },\n' +
          '\t\t{\n' +
          '      "name": "decedent.address-city",\n' +
          '      "valueString": "Atlanta"\n' +
          '    }\n' +
          '  ]\n' +
          '}';
    }

    // Render DOM
    return (
        <div className="">
          <button
              className={`button is-small is-outlined is-primary`}
              onClick={() => searchWithParams()}>
            Search
          </button>
          <div className="i1">
            <div className="i1-a">
              <div className="i1-aa">
                <div
                    className={`field is-horizontal explorable ${explore ? 'is-explore' : ''}`}
                    onClick={() => handleFieldClick('decedent')}>
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
