import API from '../api';
import idx from 'idx';

function getTimeOfDeath(patient) {
  return new Promise(async function(resolve, reject) {
      try {
        const observation = await API.get(`Observation?patient=${patient.resource.id}&code=81956-5`);
        const patientWithTimeOfDeath = {
          ...patient,
          timeOfDeath: idx(observation, _ => _.data.entry[0].resource.component[0].valueDateTime) || 'Unknown'
        };
        return resolve(patientWithTimeOfDeath)
      } catch(e) {
        return reject(e);
      }
  });
}

export function getCases() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'GET_CASES_REQUESTED'
      });
      API.get('Patient')
      .then(res => {
        if (!res.data.entry) {
          return new Promise(function(resolve, reject) {
            resolve([]);
          });
        }
        return Promise.all(
          res.data.entry.map(p => getTimeOfDeath(p))
        );
      })
      .then(res => {
        dispatch({
          type: 'GET_CASES_FULFILLED',
          data: res
        });
        resolve('Finished retrieving cases.');
      })
      .catch(error => {
        dispatch({
          type: 'GET_CASES_REJECTED',
          error: error.message
        })
        reject(error.message);
      })
    })
  }
}

export function filterByCaseNumber(caseNumber) {
  return (dispatch) => {
    return dispatch({
      type: 'FILTER_BY_CASE_NUMBER',
      data: caseNumber
    });
  }
}

export function filterBySystem(system) {
  return (dispatch) => {
    return dispatch({
      type: 'FILTER_BY_SYSTEM',
      data: system
    });
  }
}
