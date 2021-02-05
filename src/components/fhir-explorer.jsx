import React, { Component } from 'react';
import idx from 'idx';

function retrieveJson(patientBundle, documentBundle, entireDocument, fieldId) {
  if (fieldId === 'cause-a' || fieldId === 'cause-a-onset') {
    return parseList(documentBundle, 0);
  }
  else if (fieldId === 'cause-b' || fieldId === 'cause-b-onset') {
    return parseList(documentBundle, 1);
  }
  else if (fieldId === 'cause-c' || fieldId === 'cause-c-onset') {
    return parseList(documentBundle, 2);
  }
  else if (fieldId === 'cause-d' || fieldId === 'cause-d-onset') {
    return parseList(documentBundle, 3);
  }
  else if (fieldId === 'decedent') {
    try {
      return patientBundle.filter(resource => resource.resource.resourceType === 'Patient')[0];
    } catch (e) {
      return {}
    }
  }
  else if (fieldId === 'time-of-death') {
    try {
      return patientBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Date')))[0];
    } catch (e) {
      return {}
    }
  }
  else if (fieldId === 'place-of-death' || fieldId === 'type-of-place') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Location')))[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'related-to-job' || fieldId === 'at-work') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Injury-Incident')))[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'autopsy-performed' || fieldId === 'autopsy-findings-used') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Autopsy-Performed-Indicator')))[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'manner-of-death') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Manner-of-Death')))[0];
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'contributing-factors') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Condition-Contributing-To-Death')))[0];
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'reported-date') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Examiner-Contacted')))[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'surgery-performed' || fieldId === 'date-of-surgery') {
    try {
      const procedures = documentBundle.filter(resource => resource.resource.resourceType === 'Procedure');
      return procedures.filter(resource => resource.resource.category.coding[0].code.includes('387713003'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'hospital-where-first-taken') {
    try {
      const patientDetails = documentBundle.filter(resource => resource.resource.resourceType === 'Patient');
      const patientDetailsExtension = patientDetails.filter(resource => resource.resource.extension.some(extension => extension.url.includes('urn:mdi:temporary:code:hospital-name-decedent-was-first-taken')))[0];
      return patientDetailsExtension || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'date-arrived-at-hospital') {
    try {
      const observations = documentBundle.filter(resource => resource.resource.resourceType === 'Observation');
      return observations.filter(resource => resource.resource.code.coding[0].code.includes('1000006'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'found-date') {
    try {
      const observations = documentBundle.filter(resource => resource.resource.resourceType === 'Observation');
      return observations.filter(resource => resource.resource.code.coding[0].code.includes('1000001'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'date-last-known-alive') {
    try {
      const observations = documentBundle.filter(resource => resource.resource.resourceType === 'Observation');
      return observations.filter(resource => resource.resource.code.coding[0].code.includes('1000004'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'date-case-reviewed') {
    try {
      const observations = documentBundle.filter(resource => resource.resource.resourceType === 'Observation');
      return observations.filter(resource => resource.resource.code.coding[0].code.includes('1000003'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'injury-event-date') {
    try {
        return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Injury-Incident')))[0] || {};
    } catch(e) {
        return {};
    }
  }
  else if (fieldId === 'place-last-known-alive') {
    try {
      const patientDetails = documentBundle.filter(resource => resource.resource.resourceType === 'Patient');
      const patientDetailsExtension = patientDetails.filter(resource => resource.resource.extension.some(extension => extension.url.includes('urn:mdi:temporary:code:last-known-to-be-alive-or-okay-place')))[0] || {};
      return patientDetailsExtension || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'year-case-categorized') {
    try {
      const observations = documentBundle.filter(resource => resource.resource.resourceType === 'Observation');
      return observations.filter(resource => resource.resource.code.coding[0].code.includes('1000005'))[0] || {};
    } catch (e) {
      return {};
    }
  }
  else if (fieldId === 'disposition-of-body') {
    try {
      return documentBundle.filter(resource => idx(resource.resource, _ => _.meta.profile.includes('http://hl7.org/fhir/us/vrdr/VRDR-Decedent-Disposition-Method')))[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'type-of-residence') {
    try {
      const patientDetails = documentBundle.filter(resource => resource.resource.resourceType === 'Patient');
      return patientDetails[0] || {};
    } catch(e) {
      return {};
    }
  }
  else if (fieldId === 'composition-document') {
    return entireDocument;
  }
  else {
    return {}
  }
}

function parseList(bundle, causeNum) {
  try {
    const listEntry = bundle.filter(resource => resource.resource.resourceType === 'List');
    const entryList = listEntry[0].resource.entry;
    if (causeNum >= entryList.length) {
      return {}
    } else {
      const reference = entryList[causeNum].item.reference;
      const referenceUUID = reference.substring(reference.search('/')+1, reference.length);
      return bundle.filter(resource => resource.resource.id === referenceUUID)[0];
    }
  } catch (e) {
    return {}
  }
}

export default class FhirExplorer extends Component {
  render() {
    const { visible, fieldId } = this.props;
    const { case:
            { form:
              { fhirExplorer: {
                patientJson,
                documentJson,
                entireDocument
      }}}} = this.props;
    return (
      <div className={`fhir-explorer ${visible ? 'is-visible' : ''}`}>
      <pre>{JSON.stringify(retrieveJson(patientJson, documentJson, entireDocument, fieldId), null, 2)}</pre>
      </div>
    );
  }
}
