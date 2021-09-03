import axios from "axios";

export function searchWithParams(serverBase, parameters, basicAuth = {}) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'SEARCH_WITH_PARAMS_REQUESTED'
      });

      //TODO: Build more flexible client code
      var client = axios.create({
        baseURL: serverBase,
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username: 'client',
          password: 'secret'
        }
      });

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
          })
    })
  }
}
