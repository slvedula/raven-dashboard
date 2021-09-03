import React from "react";

const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  searchResultsVisible: false,
  searchResults: {},
  parameterResource: {
    "resourceType": "Parameters",
    "parameter": []
  },
  edrsServers: [
    {
      name: "Raven FHIR Server (Demo)",
      serverBase: "https://apps.hdap.gatech.edu/raven-fhir-server/fhir/",
      user: "client",
      pass: "secret",
    },
    {
      name: "Georgia EDRS",
      serverBase: "http://65.61.13.216/FHIR2021/WebApi/FHIR/r4/"
    }
  ]
}

export function connectathonReducer(state = initialState, action) {
  console.log(action.type);
  console.log(action);
  if (action.type === "SEARCH_WITH_PARAMS_FULFILLED") {
    let newState = Object.assign({}, state, {
      searchResults: action.data,
      isLoading: false,
      isLoaded: true,
      isLoadError: false
    });
    return newState;
  }
  if (action.type === "UPDATE_PARAMETER_RESOURCE") {

    let newState = Object.assign( {}, state, {
      parameterResource: updateParameterResource(state, action.data)
    });
    return newState;
  }
  return state;
}

function updateParameterResource(state, parameter) {
  let element = parameter.name;
  let value = parameter.value;
  let valueType = parameter.valueType;

  // Parse the string as JSON to allow operations.
  // TODO: Remove if the state is changed to be stored as JSON instead of string representation.
  var parametersJSON = state.parameterResource;

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
      parameterList.push(mapParameterEntry(element, value, valueType));
    }
  }

  // Call the setsParameters state method and pass in the string version of the parameter to render properly in the
  // text area.
  // TODO: Note, this can be retained as a JSON if not doing the demo output.
  return parametersJSON;
}

// Reusable method to quickly turn the element:value pair into the required Parameter resource structure.
function mapParameterEntry(element, value, valueType = "valueString"){
  let entry = {};
  entry["name"] = element;
  entry[valueType] = value
  return entry;
}
