import React from "react";

const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  searchResultsVisible: false,
  searchResults: {},
  // TODO REMOVE AFTER TESTING
  searchResultsCompact: [
    {
      id: "0a951eaf-f78f-4cb3-925b-08e6ab00c5fc",
      first: "Mark",
      last: "Markinson",
      gender: "male",
      deathDate: "1/1/20",
      placeOfDeath: "FULTON"
    },
    {
      id: "0a951eaf-f78f-4cb3-925b-08e6ab00c5fc",
      first: "Bob",
      last: "Bobinson",
      gender: "male",
      deathDate: "1/1/20",
      placeOfDeath: "DEKALB"
    }
  ],
  searchCompleted: false,
  parameterResource: {
    "resourceType": "Parameters",
    "parameter": []
  },
  edrsServers: [
    {
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
    {
      label: "GAVERS (Georgia EDRS)",
      header: {
        baseURL: 'http://65.61.13.216/FHIR2021/WebApi/FHIR/r4/',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      capabilityStatement: {},
      operationDefinition: {}
    }
  ]
}

function createCompactResults(data){
  // TODO CREATE COMPACT RESULTS
  return [];
}

export function connectathonReducer(state = initialState, action) {
  if (action.type === "SEARCH_WITH_PARAMS_FULFILLED") {
    let newState = Object.assign({}, state, {
      searchResults: action.data,
      isLoading: false,
      isLoaded: true,
      isLoadError: false,
      //searchResultsCompact: createCompactResults(action.data),
      searchCompleted: true
    });
    return newState;
  }

  if (action.type === "UPDATE_PARAMETER_RESOURCE") {
    let newState = Object.assign( {}, state, {
      parameterResource: updateParameterResource(state, action.data)
    });
    return newState;
  }

  if (action.type === "INITIALIZE_PARAMETER_RESOURCE"){
    let newState = Object.assign({}, state, {
      parameterResource: initializeParameterResource(state, action.data)
    });
    return newState;
  }

  return state;
}

// Create the initial Parameter Resource when the case is updated.
// TODO: TEST THIS SWITCHING CASES!!!!!! Probably have to have a way to handle reset based on id.
function initializeParameterResource(state, data) {
  //TODO: Initialize based on case state items supported.
  var parametersJSON = state.parameterResource;
  var parameterList = parametersJSON["parameter"];
  let listOfKeys = Object.keys(data.navBottom);
  listOfKeys.map(key => {
    if (data.navBottom[key]) {
      let parameterDefinition = lookUpParameterFromMap(key);
      let parameterName = parameterDefinition[0];
      let parameterType = parameterDefinition[1];
      if (!!parameterName) {
        parameterList.push(mapParameterEntry(parameterName, data.navBottom[key], parameterType));
      }
    }
  });
  return parametersJSON;
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


// TODO: Create key map from csv field name to parameter name value(element).
// TODO: Restructure to include types. Or add a second lookup?
function lookUpParameterFromMap(key){
  // TODO: Move this somewhere better for maintenance.
  let parameterNameMap = {
    gender: "decedent.gender",
    firstName: "decedent.given",
    lastName: "decedent.family",
    dateOfDeath: "vrdr-death-date.value-date"
  };
  let parameterTypeMap = {
    gender: "valueString",
    firstName: "valueString",
    lastName: "valueString",
    dateOfDeath: "valueDate"
  }
  return [parameterNameMap[key], parameterTypeMap[key]];
}
