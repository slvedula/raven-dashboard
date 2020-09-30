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

export function getCase(patientId) {
  return (dispatch) => {
    return new Promise(async function(resolve, reject) {
      dispatch({
        type: 'GET_CASE_REQUESTED'
      });
      try {
        const allPatientResources = await API.get(`Patient/${patientId}/$everything`);
        dispatch({
          type: 'GET_CASE_FULFILLED',
          data: allPatientResources
        });
        resolve('Finished retrieving all patient resources');
      } catch(e) {
        dispatch({
          type: 'GET_CASE_REJECTED',
          error: e.message
        })
        reject(e.message);
      }
    })
  }
}
