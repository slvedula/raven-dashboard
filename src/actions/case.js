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
        const compositionId = parseCompositionId(allPatientResources.data.entry);
        const compositionDocument = await API.get(`Composition/${compositionId}/$document`);
        const returnData = {
          patientResources: allPatientResources,
          documentResources: compositionDocument
        };
        dispatch({
          type: 'GET_CASE_FULFILLED',
          data: returnData
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

function parseCompositionId(bundle) {
  try {
    const compositions = bundle.filter(resource => resource.resource.resourceType === 'Composition');
    return compositions[0].resource.id;
  } catch (e) {
    console.error('e: ',e);
    return {};
  }
}

export function getDocument(compositionId) {
  return new Promise(async function(resolve, reject) {
    try {
      const compDocument = await API.get(`Composition/${compositionId}/$document`);
      return resolve(compDocument)
    } catch(e) {
      return reject(e);
    }
  });
}
