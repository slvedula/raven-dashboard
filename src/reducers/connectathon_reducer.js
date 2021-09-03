import React from "react";

const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  searchResultsVisible: false,
  searchResults: {},
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
  if (action.type === "SEARCH_WITH_PARAMS_FULFILLED") {
    console.log("IN REDUCER");
    console.log(action);
    let newState = Object.assign({}, state, {
      searchResults: action.data,
      isLoading: false,
      isLoaded: true,
      isLoadError: false
    });
    return newState;
  }
  return state;
}
