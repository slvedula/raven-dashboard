import React, { Component } from 'react';

const fields = {
  'at-work': {
		"fullUrl": "7eae36d1-3583-4bcd-939e-3b7706853a15",
		"resource": {
			"resourceType": "Observation",
			"id": "7eae36d1-3583-4bcd-939e-3b7706853a15",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Injury-Incident"]
			},
			"extension": [{
				"url": "urn:mdi:temporary:code:qualifiction-of-injury-date",
				"valueString": "Injury event estimation by coworkers"
			}],
			"status": "final",
			"code": {
				"coding": [{
					"system": "http://loinc.org",
					"code": "11374-6",
					"display": "Injury incident description"
				}]
			},
			"effectiveDateTime": "0022-06-12T10:00:00-05:00",
			"valueString": "Fell down when working at job",
			"component": [{
				"modifierExtension": [{
					"url": "urn:mdi:temporary:code:constitute-osha-injury-at-work",
					"valueBoolean": true
				}],
				"code": {
					"coding": [{
						"system": "http://loinc.org",
						"code": "69448-9",
						"display": "Did death result from injury at work"
					}]
				},
				"valueCodeableConcept": {
					"coding": [{
						"system": "http://hl7.org/CodeSystem/v2-0136",
						"code": "Y",
						"display": "Yes"
					}]
				}
			}]
		},
		"request": {
			"method": "POST"
		}
	},
  'related-to-job': {
		"fullUrl": "7eae36d1-3583-4bcd-939e-3b7706853a15",
		"resource": {
			"resourceType": "Observation",
			"id": "7eae36d1-3583-4bcd-939e-3b7706853a15",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Injury-Incident"]
			},
			"extension": [{
				"url": "urn:mdi:temporary:code:qualifiction-of-injury-date",
				"valueString": "Injury event estimation by coworkers"
			}],
			"status": "final",
			"code": {
				"coding": [{
					"system": "http://loinc.org",
					"code": "11374-6",
					"display": "Injury incident description"
				}]
			},
			"effectiveDateTime": "0022-06-12T10:00:00-05:00",
			"valueString": "Fell down when working at job",
			"component": [{
				"modifierExtension": [{
					"url": "urn:mdi:temporary:code:constitute-osha-injury-at-work",
					"valueBoolean": true
				}],
				"code": {
					"coding": [{
						"system": "http://loinc.org",
						"code": "69448-9",
						"display": "Did death result from injury at work"
					}]
				},
				"valueCodeableConcept": {
					"coding": [{
						"system": "http://hl7.org/CodeSystem/v2-0136",
						"code": "Y",
						"display": "Yes"
					}]
				}
			}]
		},
		"request": {
			"method": "POST"
		}
	},
  'case-num': null,
  decedent: {
		"fullUrl": "5c9613cc-6411-4f19-a7af-f0728395f024",
		"resource": {
			"resourceType": "Patient",
			"id": "5c9613cc-6411-4f19-a7af-f0728395f024",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Decedent"]
			},
			"extension": [{
				"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
				"extension": [{
					"url": "ombCategory",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.114222.4.11.876",
						"code": "2106-3"
					}
				}, {
					"url": "detailed",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.114222.4.11.876",
						"code": "2106-3"
					}
				}, {
					"url": "text",
					"valueString": "White"
				}]
			}, {
				"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
				"extension": [{
					"url": "ombCategory",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.113883.6.238",
						"code": "2186-5"
					}
				}, {
					"url": "detailed",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.113883.6.238",
						"code": "2186-5"
					}
				}, {
					"url": "text",
					"valueString": "Not Hispanic or Latino"
				}]
			}, {
				"url": "urn:mdi:temporary:code:last-known-to-be-alive-or-okay-place",
				"valueString": "Iron Worker's Factory"
			}, {
				"url": "urn:mdi:temporary:code:hospital-name-decedent-was-first-taken",
				"valueString": "Happy Hearts  Hospital"
			}],
			"identifier": [{
				"system": "urn:mdi:temporary:code-caseNumber",
				"value": "1"
			}, {
				"system": "http://hl7.org/fhir/sid/us-ssn",
				"value": "123-456-7890"
			}],
			"name": [{
				"family": "Johnson",
				"given": ["John", "Jamil"]
			}],
			"gender": "male",
			"birthDate": "1988-02-01",
			"address": [{
				"extension": [{
					"url": "Text",
					"valueString": "GreenGrove Apartments"
				}],
				"use": "home",
				"city": "Atlanta",
				"state": "GA",
				"postalCode": "30033",
				"country": "Decatur"
			}]
		},
		"request": {
			"method": "POST"
		}
	},
  cause: {
    "fullUrl": "https://apps.hdap.gatech.edu/gt-fhir-smart/fhir/Condition/4",
    "resource": {
      "resourceType": "Condition",
      "id": "4",
      "text": {
        "status": "extensions",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">CAUSEA: ${code.coding[0].display},DURATIONA:${onsetDateTime}</div>"
      },
      "code": {
        "coding": [{
          "system": "http://www.hl7.org/fhir/ValueSet/Condition-code",
          "code": "775008",
          "display": "Open wound of head with complication"
        }]
      },
      "subject": {
        "reference": "Patient/1",
        "display": "Byron Test1"
      },
      "onsetDateTime": "2014-06-15T00:00:00+00:00",
      "abatementDateTime": "2014-06-15T00:00:00+00:00"
    }
  },
  'time-of-death': {
		"fullUrl": "282dcf25-96aa-4194-a2e9-e68ef097eede",
		"resource": {
			"resourceType": "Observation",
			"id": "282dcf25-96aa-4194-a2e9-e68ef097eede",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Date"]
			},
			"extension": [{
				"url": "urn:mdi:temporary:code:qualifiction-of-death-date",
				"valueString": "Death Time estimation on standard delays"
			}],
			"status": "final",
			"code": {
				"coding": [{
					"system": "http://loinc.org",
					"code": "81956-5",
					"display": "Date and time of death"
				}]
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"component": [{
				"code": {
					"coding": [{
						"system": "http://loinc.org",
						"code": "81616-6",
						"display": "Date and time pronounced dead"
					}]
				},
				"valueDateTime": "0022-07-12T04:00:00-05:00"
			}]
		},
		"request": {
			"method": "POST"
		}
	},
  manner: {
    "fullUrl": "https://apps.hdap.gatech.edu/gt-fhir-smart/fhir/Observation/8",
    "resource": {
      "resourceType": "Observation",
      "id": "8",
      "text": {
        "status": "extensions",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">MANNER: ${valueCodeableConcept.coding[0].display}</div>"
      },
      "status": "final",
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "69449-7",
          "display": "Manner Of Death"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{
          "system": "urn:mdi:temporary:code-MannerTypeVS",
          "code": "H",
          "display": "Homicide"
        }]
      },
      "subject": {
        "reference": "Patient/1",
        "display": "Byron Test1"
      },
      "onsetAge": {
        "value": "38",
        "units": "a",
        "system": "http://unitsofmeasure.org"
      }
    }
  },
  means: null,
  'cause-a': {
		"fullUrl": "1a8e90c2-7d07-47a0-88ec-28cbd5293b41",
		"resource": {
			"resourceType": "Condition",
			"id": "1a8e90c2-7d07-47a0-88ec-28cbd5293b41",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Sudden Trauma"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetString": "3012020"
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-a-onset': {
		"fullUrl": "1a8e90c2-7d07-47a0-88ec-28cbd5293b41",
		"resource": {
			"resourceType": "Condition",
			"id": "1a8e90c2-7d07-47a0-88ec-28cbd5293b41",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Sudden Trauma"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetString": "3012020"
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-b': {
		"fullUrl": "f0ce2cc1-11da-4dfb-bef9-3bd2bd432eee",
		"resource": {
			"resourceType": "Condition",
			"id": "f0ce2cc1-11da-4dfb-bef9-3bd2bd432eee",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Heart Attack"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetString": "2012020"
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-b-onset': {
		"fullUrl": "f0ce2cc1-11da-4dfb-bef9-3bd2bd432eee",
		"resource": {
			"resourceType": "Condition",
			"id": "f0ce2cc1-11da-4dfb-bef9-3bd2bd432eee",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Heart Attack"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetString": "2012020"
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-c': {
		"fullUrl": "e00b5219-e587-4280-8b66-75864a0cda9c",
		"resource": {
			"resourceType": "Condition",
			"id": "e00b5219-e587-4280-8b66-75864a0cda9c",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Coronary Disease"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetAge": {
				"value": 3.0,
				"unit": "a",
				"system": "http://hl7.org/fhir/ValueSet/age-units",
				"code": "a"
			}
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-c-onset': {
		"fullUrl": "e00b5219-e587-4280-8b66-75864a0cda9c",
		"resource": {
			"resourceType": "Condition",
			"id": "e00b5219-e587-4280-8b66-75864a0cda9c",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Coronary Disease"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			},
			"onsetAge": {
				"value": 3.0,
				"unit": "a",
				"system": "http://hl7.org/fhir/ValueSet/age-units",
				"code": "a"
			}
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-d': {
		"fullUrl": "4733d985-f0c1-4f2b-ac1c-a2033a548e8a",
		"resource": {
			"resourceType": "Condition",
			"id": "4733d985-f0c1-4f2b-ac1c-a2033a548e8a",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Epiletic Risk"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			}
		},
		"request": {
			"method": "POST"
		}
	},
  'cause-d-onset': {
		"fullUrl": "4733d985-f0c1-4f2b-ac1c-a2033a548e8a",
		"resource": {
			"resourceType": "Condition",
			"id": "4733d985-f0c1-4f2b-ac1c-a2033a548e8a",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Epiletic Risk"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			}
		},
		"request": {
			"method": "POST"
		}
	},
  'contributing-factors': {
		"fullUrl": "7625d023-e239-4549-8689-f6ff98d53bec",
		"resource": {
			"resourceType": "Condition",
			"id": "7625d023-e239-4549-8689-f6ff98d53bec",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Cause-Of-Death-Condition"]
			},
			"code": {
				"text": "Smoking, diabetes, lung disease"
			},
			"subject": {
				"reference": "5c9613cc-6411-4f19-a7af-f0728395f024"
			}
		},
		"request": {
			"method": "POST"
		}
	},
  'hospital-where-first-taken': {
		"fullUrl": "5c9613cc-6411-4f19-a7af-f0728395f024",
		"resource": {
			"resourceType": "Patient",
			"id": "5c9613cc-6411-4f19-a7af-f0728395f024",
			"meta": {
				"profile": ["http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Decedent"]
			},
			"extension": [{
				"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
				"extension": [{
					"url": "ombCategory",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.114222.4.11.876",
						"code": "2106-3"
					}
				}, {
					"url": "detailed",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.114222.4.11.876",
						"code": "2106-3"
					}
				}, {
					"url": "text",
					"valueString": "White"
				}]
			}, {
				"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
				"extension": [{
					"url": "ombCategory",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.113883.6.238",
						"code": "2186-5"
					}
				}, {
					"url": "detailed",
					"valueCoding": {
						"system": "urn:oid:2.16.840.1.113883.6.238",
						"code": "2186-5"
					}
				}, {
					"url": "text",
					"valueString": "Not Hispanic or Latino"
				}]
			}, {
				"url": "urn:mdi:temporary:code:last-known-to-be-alive-or-okay-place",
				"valueString": "Iron Worker's Factory"
			}, {
				"url": "urn:mdi:temporary:code:hospital-name-decedent-was-first-taken",
				"valueString": "Happy Hearts  Hospital"
			}],
			"identifier": [{
				"system": "urn:mdi:temporary:code-caseNumber",
				"value": "1"
			}, {
				"system": "http://hl7.org/fhir/sid/us-ssn",
				"value": "123-456-7890"
			}],
			"name": [{
				"family": "Johnson",
				"given": ["John", "Jamil"]
			}],
			"gender": "male",
			"birthDate": "1988-02-01",
			"address": [{
				"extension": [{
					"url": "Text",
					"valueString": "GreenGrove Apartments"
				}],
				"use": "home",
				"city": "Atlanta",
				"state": "GA",
				"postalCode": "30033",
				"country": "Decatur"
			}]
		},
		"request": {
			"method": "POST"
		}
	}
}

function retrieveJson(bundle, fieldId) {
  if (fieldId === 'cause-a' || fieldId === 'cause-a-onset') {
    return parseList(bundle, 0);
  }
  else if (fieldId === 'cause-b' || fieldId === 'cause-b-onset') {
    return parseList(bundle, 1);
  }
  else if (fieldId === 'cause-c' || fieldId === 'cause-c-onset') {
    return parseList(bundle, 2);
  }
  else if (fieldId === 'cause-d' || fieldId === 'cause-d-onset') {
    return parseList(bundle, 3);
  }
  else if (fieldId === 'decedent') {
    try {
      return bundle.filter(resource => resource.resource.resourceType === 'Patient')[0];
    } catch (e) {
      return {}
    }
  }
  else if (fieldId === 'time-of-death') {
    try {
      return bundle.filter(resource => resource.resource.meta.profile.includes('http://hl7.org/fhir/us/vrdr/StructureDefinition/VRDR-Death-Date'))[0]
    } catch (e) {
      return {}
    }
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
      const causeEntry = bundle.filter(resource => resource.resource.id === referenceUUID);
      return causeEntry[0]
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
                patientJson
      }}}} = this.props;
    return (
      <div className={`fhir-explorer ${visible ? 'is-visible' : ''}`}>
      <pre>{JSON.stringify(retrieveJson(patientJson, fieldId), null, 2)}</pre>
      </div>
    );
  }
}
