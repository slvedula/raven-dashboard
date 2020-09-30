import moment from 'moment';

const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  cases: {
    byId: {},
    allIds: []
  },
  filteredCases: {
    byId: {},
    allIds: []
  },
  systemOptions: [],
  selectedSystem: 'all-systems',
  searchText: ''
};

function isValidUrl(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

export function pickerReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_CASES_REQUESTED': {
      return {
        ...state,
        // isLoading: true,
        // isLoaded: false,
        // isLoadError: false,
        // client: null
      }
    }
    case 'GET_CASES_FULFILLED': {
      const { data: patients } = action;
      const casesById = patients.reduce((obj, patient) => {
        const {
          timeOfDeath,
          resource:
            {
              id,
              gender,
              birthDate,
              identifier : identifiers,
              name
            }
        } = patient;
        const birth_moment = moment(birthDate);
        const tod_moment = moment(timeOfDeath);
        const rawSystem = identifiers.reduce((system, identifier) => {
          if (!identifier.type) {
            return system;
          }
          if (identifier.type.coding[0].code === "1000007") {
            system = identifier.system;
          }
          return system;
        }, null);
        const system = isValidUrl(rawSystem) ? rawSystem.split('/').pop() : rawSystem.split(':').pop();
        obj[id] = {
          name: `${name[0].given ? name[0].given[0] : '<NO FIRST>'} ${name[0].family ? name[0].family[0] : '<NO LAST>'}`,
          age:  tod_moment.diff(birth_moment, 'years'),
          gender: gender,
          caseNumber: identifiers.reduce((caseNum, identifier) => {
            if (!identifier.type) {
              return caseNum;
            }
            if (identifier.type.coding[0].code === "1000007") {
              caseNum = identifier.value;
            }
            return caseNum;
          }, null),
          timeOfDeath: tod_moment.format("YYYY-MM-DD"),
          system: system,
          status: 'Pending'
        }
        return obj;
      }, {});

      const casesAllIds = patients.map(patient => patient.resource.id);

      const systemOptions = patients.reduce((options, patient) => {
        const system = patient.resource.identifier.reduce((system, identifier) => {
          if (!identifier.type) {
            return system;
          }
          if (identifier.type.coding[0].code === "1000007") {
            system = identifier.system;
          }
          return system;
        }, null);
        return options.add(isValidUrl(system) ? system.split('/').pop() : system.split(':').pop());
      }, new Set());

      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        cases: {
          ...state.cases,
          byId: casesById,
          allIds: casesAllIds
        },
        filteredCases: {
          ...state.cases,
          byId: casesById,
          allIds: casesAllIds
        },
        systemOptions: [...systemOptions]
      }
    }
    case 'FILTER_BY_CASE_NUMBER': {
      const { data: text } = action;
      const { cases, selectedSystem } = state;
      const filteredAllIds = cases.allIds.filter(id => {
        if (selectedSystem === 'all-systems') {
          return cases.byId[id].caseNumber.search(text) !== -1;
        } else {
          return (cases.byId[id].caseNumber.search(text) !== -1) && (cases.byId[id].system === selectedSystem);
        }
      });
      const filteredById = filteredAllIds.reduce((obj, id) => {
        return {
          ...obj,
          [id]: cases.byId[id]
        };
      }, {});
      return {
        ...state,
        filteredCases: {
          ...state.filteredCases,
          byId: filteredById,
          allIds: filteredAllIds
        },
        searchText: text
      }
    }
    case 'FILTER_BY_SYSTEM': {
      const { data: system } = action;
      const { cases, searchText } = state;
      if (system === 'all-systems') {
        const filteredAllIds = cases.allIds.filter(id => {
          return cases.byId[id].caseNumber.search(searchText) !== -1;
        });
        const filteredById = filteredAllIds.reduce((obj, id) => {
          return {
            ...obj,
            [id]: cases.byId[id]
          };
        }, {});
        return {
          ...state,
          filteredCases: {
            ...state.filteredCases,
            byId: cases.byId,
            allIds: cases.allIds
          },
          selectedSystem: system
        }
      }
      const filteredAllIds = cases.allIds.filter(id => {
        return (cases.byId[id].system === system) && (cases.byId[id].caseNumber.search(searchText) !== -1);
      });
      const filteredById = filteredAllIds.reduce((obj, id) => {
        return {
          ...obj,
          [id]: cases.byId[id]
        };
      }, {});
      return {
        ...state,
        filteredCases: {
          ...state.filteredCases,
          byId: filteredById,
          allIds: filteredAllIds
        },
        selectedSystem: system
      }
    }
    case 'GET_CASES_REJECTED': {
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
