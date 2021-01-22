import moment from 'moment';
import API from '../api';
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
    const caseIdentifier = identifier.filter(identifier => identifier.type.coding[0].code === '1000007');
    if (caseIdentifier[0]) return {
      caseNumber: caseIdentifier[0].value,
      caseSystem: caseIdentifier[0].system
    };
    return {
      caseNumber: 'ERROR',
      caseSystem: 'ERROR'
    }
  } catch(e) {
    return {
      caseNumber: 'ERROR',
      caseSystem: 'ERROR'
    };
  }
}

function parseDecedent(bundle) {
  try {
    const patient = bundle.filter(resource => resource.resource.resourceType === 'Patient')[0].resource;
    const name = patient.name;
    var middle = '';
    if (name[0].given.length > 1) {
      middle = name[0].given[1];
    }
    var address = ''
    if (patient.address[0] && patient.address[0].line && patient.address[0].city && patient.address[0].state)
      address = patient.address[0].line[0] + ", " + patient.address[0].city + ", " + patient.address[0].state;
    const extensions = patient.extension;
    var race = "";
    var ethnicity = "";
    if (extensions) {
      const raceExtension = extensions.filter(url => url.url.includes('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'));
      if (raceExtension[0]) race = raceExtension[0].extension.filter(url => url.url === 'text')[0].valueString;
      const ethnicityExtension = extensions.filter(url => url.url.includes('http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'));
      if (ethnicityExtension[0]) ethnicity = ethnicityExtension[0].extension.filter(url => url.url === 'text')[0].valueString;
    }
    const ageResource = bundle.filter(resource => resource.resource.resourceType === 'Observation');
    const ageList = bundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Decedent-Age')));
    var age = "";
    if (ageList[0]) age = ageList[0].resource.valueQuantity.value + " " + ageList[0].resource.valueQuantity.unit;
    return {
      firstName: name[0].given[0],
      middleName: middle,
      lastName: name[0].family,
      gender: patient.gender,
      birthDate: patient.birthDate,
      address: address,
      city: patient.address[0].city,
      usState: patient.address[0].state,
      race: race,
      ethnicity: ethnicity,
      age: age
    }
  } catch(e) {
    console.log('e: ',e);
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
    const causeListCleaned = causeList.map(cause => {
      var onsetTime = ''
      if (cause.resource.hasOwnProperty('onsetAge')) {
        onsetTime = `${cause.resource.onsetAge.value} ${cause.resource.onsetAge.unit}`
      } else if (cause.resource.hasOwnProperty('onsetString')) {
        onsetTime = `${cause.resource.onsetString}`
      }
      return {
        id: cause.resource.id,
        text: cause.resource.code.text,
        onsetAge: onsetTime
      }
    });
    const entries = bundle.filter(resource => resource.resource.resourceType === 'List');
    if (!entries[0]) {
      return {
        causeA: causeListCleaned[0] || {},
        causeB: causeListCleaned[1] || {},
        causeC: causeListCleaned[2] || {},
        causeD: causeListCleaned[3] || {}
      }
    }
    const entryList = bundle.filter(resource => resource.resource.resourceType === 'List')[0].resource.entry;
    var uuids = [];
    for (var ii = 0; ii < entryList.length; ii++) {
      const reference = entryList[ii].item.reference;
      const referenceUUID = reference.substring(reference.search('/')+1, reference.length);
      uuids.push(referenceUUID);
    }
    return {
      causeA: causeListCleaned.find(cause => cause.id === uuids[0]) || {},
      causeB: causeListCleaned.find(cause => cause.id === uuids[1]) || {},
      causeC: causeListCleaned.find(cause => cause.id === uuids[2]) || {},
      causeD: causeListCleaned.find(cause => cause.id === uuids[3]) || {}
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

function parseCertifier(bundle) {
  try {
    const practitioner = bundle.filter(resource => resource.resource.resourceType === 'Practitioner');
    const practitionerList = practitioner.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Certifier')));
    const firstName = practitionerList[0].resource.name[0].given[0];
    const familyName = practitionerList[0].resource.name[0].family;
    return firstName + " " + familyName;
  } catch(e) {
    console.error('e: ',e);
    return "";
  }
}

function parsePlaceOfDeath(bundle) {
  try {
    const locations = bundle.filter(resource => resource.resource.resourceType === 'Location');
    const locationList = locations.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Location')));
    return {
      deathLocation: locationList[0].resource.name,
      typeOfDeathLocation: locationList[0].resource.type[0].coding[0].display
    };
  } catch(e) {
    console.error('e: ',e);
    return {};
  }
}

function parseWorkInjury(bundle) {
  try {
    const injuryIncedent = bundle.filter(resource => resource.resource.resourceType === 'Observation');
    const injuryIncedentList = injuryIncedent.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Injury-Incident')));
    if (!injuryIncedentList[0]) return "";
    const components = injuryIncedentList[0].resource.component;
    const deathFromWorkComponent = components.filter(resource => resource.code.coding[0].display === 'Did death result from injury at work')[0];
    return deathFromWorkComponent.valueCodeableConcept.coding[0].display;
  } catch(e) {
    console.error('e: ',e);
    return "";
  }
}

function parseAutopsy(bundle) {
  try {
    const autopsyPerformed = bundle.filter(resource => resource.resource.resourceType === 'Observation');
    const autopsyPerformedList = autopsyPerformed.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Autopsy-Performed-Indicator')));
    if (!autopsyPerformedList[0]) return "";
    return autopsyPerformedList[0].resource.valueCodeableConcept.coding[0].display;
  } catch(e) {
    console.error('e: ',e);
    return "";
  }
}

function parseSurgery(bundle) {
  try {
    const procedures = bundle.filter(resource => resource.resource.resourceType === 'Procedure');
    if (procedures[0]) {
      const surgicals = procedures.filter(resource => resource.resource.category.coding[0].display.includes('Surgical procedure'));
      if (surgicals[0]) {
        if (surgicals[0].resource.status === 'completed') {
          const surgDate = moment(surgicals[0].resource.performedDateTime).format('YYYY-MM-DD');
          return {
            surgeryPerformed: "Yes",
            datePerformed: surgDate,
            physicianName: ""
          }
        } else {
          return {
            surgeryPerformed: "No",
            datePerformed: "",
            physicianName: ""
          }
        }
      }
    }

  } catch(e) {
    console.error('e: ',e);
    return {
      surgeryPerformed: "",
      datePerformed: "",
      physicianName: ""
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
      const { data: { patientResources: { data : { entry } } } } = action;
      const caseInfo = parseCaseNumber(entry);
      const decedent = parseDecedent(entry);
      const timeOfDeath = parseTimeOfDeath(entry);
      const causesOfDeath = parseCausesOfDeath(entry);
      const patientJson = entry;
      const { data: { documentResources: { data } } } = action;
      const documentJson = data.entry;
      const certifier = parseCertifier(documentJson);
      const deathLocationInfo = parsePlaceOfDeath(documentJson);
      const deathFromWork = parseWorkInjury(documentJson);
      const autopsyPerformed = parseAutopsy(documentJson);
      const surgInfo = parseSurgery(documentJson);
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        form: {
          navBottom: {
            ...caseInfo,
            ...decedent,
            ...timeOfDeath
          },
          summary: {
            ...causesOfDeath,
            certifier: certifier,
            ...deathLocationInfo,
            deathFromWork: deathFromWork,
            autopsyPerformed: autopsyPerformed,
            ...surgInfo
          },
          fhirExplorer: {
            patientJson: patientJson,
            documentJson: documentJson
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
