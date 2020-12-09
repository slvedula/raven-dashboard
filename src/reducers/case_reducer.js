import moment from 'moment';
import idx from 'idx';

const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  form: {
    navBottom: {
      firstName: null,
      middleName: null,
      lastName: null
    },
    summary: {
      causeA: {},
      causeB: {},
      causeC: {},
      causeD: {}
    },
    fhirExplorer: {
      patientJson: null
    }
  }
};

function parseCaseNumber(bundle) {
  try {
    const { resource: { identifier } } = bundle.find(resource => resource.resource.resourceType === 'Patient');
    return identifier.reduce((caseNum, identifier) => {
      if (!identifier.type) {
        return caseNum;
      }
      if (identifier.type.coding[0].code === "1000007") {
        caseNum = identifier.value;
      }
      return caseNum;
    }, null)
  } catch(e) {
    return 'ERROR';
  }
}

function parseDecedent(bundle) {
  try {
    const { resource: { name } } = bundle.find(resource => resource.resource.resourceType === 'Patient');
    return {
      firstName: name[0].given[0],
      middleName: null,
      lastName: name[0].family
    }
  } catch(e) {
    return {
      firstName: 'ERROR',
      middleName: 'ERROR',
      lastName: 'ERROR'
    };
  }
}

function parseTimeOfDeath(bundle) {
  try {
    const observations = bundle.filter(resource => resource.resource.resourceType === 'Observation');
    const { resource: { valueDateTime }} = observations.find(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Date')));
    const date = moment(valueDateTime).format('YYYY-MM-DD');
    const time = moment(valueDateTime).format('h:mm:ss a');
    return {
      dateOfDeath: date,
      timeOfDeath: time
    }
  } catch(e) {
    console.error('e: ',e);
    return {
      dateOfDeath: 'ERROR',
      timeOfDeath: 'ERROR'
    };
  }
}

function parseCausesOfDeath(bundle) {
  try {
    const conditions = bundle.filter(resource => resource.resource.resourceType === 'Condition');
    const causeList = conditions.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition')));
    const entryList = bundle.filter(resource => resource.resource.resourceType === 'List')[0].resource.entry;
    var uuids = [];
    for (var ii = 0; ii < entryList.length; ii++) {
      const reference = entryList[ii].item.reference;
      const referenceUUID = reference.substring(reference.search('/')+1, reference.length);
      uuids.push(referenceUUID);
    }
    const causeListCleaned = causeList.map(cause => {
      return {
        id: cause.resource.id,
        text: cause.resource.code.text,
        onsetAge: `${cause.resource.onsetAge.value} ${cause.resource.onsetAge.unit}`
      }
    });
    return {
      causeA: causeListCleaned.find(cause => cause.id === uuids[0]) || {},
      causeB: causeListCleaned.find(cause => cause.id === uuids[1]) || {},
      causeC: causeListCleaned.find(cause => cause.id === uuids[2]) || {},
      causeD: causeListCleaned.find(cause => cause.id === uuids[3]) || {},
    }
  } catch(e) {
    console.error('e: ',e);
    return {
      causeA: {},
      causeB: {},
      causeC: {},
      causeD: {}
    };
  }
}

export function caseReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_CASE_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        // client: null
      }
    }
    case 'GET_CASE_FULFILLED': {
      const { data: { data : { entry } } } = action;
      const caseNumber = parseCaseNumber(entry);
      const decedent = parseDecedent(entry);
      const timeOfDeath = parseTimeOfDeath(entry);
      const causesOfDeath = parseCausesOfDeath(entry);
      const patientJson = entry
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        form: {
          navBottom: {
            caseNumber: caseNumber,
            ...decedent,
            ...timeOfDeath
          },
          summary: {
            ...causesOfDeath
          },
          fhirExplorer: {
            patientJson: patientJson
          }
        }
      }
    }
    case 'GET_CASE_REJECTED': {
      return {
        ...state,
        // isLoading: false,
        // isLoaded: false,
        // isLoadError: true,
      }
    }
    default:
      return state;
  }
}
