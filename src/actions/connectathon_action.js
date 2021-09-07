import axios from "axios";

export function updateParameterResource(name, value, valueType = "valueString") {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_PARAMETER_RESOURCE',
      data: {
        name: name,
        value: value,
        valueType: valueType
      }
    });
  }
}

export function initializeParameterResource(data) {
  console.log("Initializing Default Parameter Resource");
  return (dispatch) => {
    dispatch({
      type: 'INITIALIZE_PARAMETER_RESOURCE',
      data: data
    });
  }
}

export function initializeServers(serverList) {
  console.log("Initializing Servers");
  return (dispatch) => {
    dispatch({
      type: 'INITIALIZE_SERVERS',
      serverList: serverList
    })
  }
}

export function getCapabilityStatement(server) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'FETCH_CAPABILITY_STATEMENT_REQUESTED'
      });

      // Create New Axios Client
      var client = axios.create(server.header);
      client.get('metadata')
          .then(res => {
            dispatch({
              type: 'FETCH_CAPABILITY_STATEMENT_FULFILLED',
              data: res
            });
            resolve('Finished retrieving capability statement.');
          })
          .catch(error => {
            dispatch({
              type: 'FETCH_CAPABILITY_STATEMENT_REJECTED',
              error: error.message
            })
            reject(error.message);
          });
    });
  }
}

export function fetchSupportedParametersFromServer(server) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'FETCH_SUPPORTED_PARAMS_FROM_SERVER_REQUESTED'
      });

      // Create New Axios Client
      var client = axios.create(server.header);

      // client.get CapabilityStatement.rest.resource.operation.where(name='mdi-documents').definition

      // Send to state

    });
  }
}

export function searchWithParams(server, parameters) {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      dispatch({
        type: 'SEARCH_WITH_PARAMS_REQUESTED'
      });

      var client = axios.create(server.header);

      client.post('Composition/$mdi-documents', parameters)
          .then(res => {
            dispatch({
              type: 'SEARCH_WITH_PARAMS_FULFILLED',
              data: res
            });
            resolve('Finished retrieving result bundle.');
          })
          .catch(error => {
            dispatch({
              type: 'SEARCH_WITH_PARAMS_REJECTED',
              error: error.message
            })
            reject(error.message);
          });
    });
  }
}

