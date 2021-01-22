import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';
import { convertArrayToCSV } from 'convert-array-to-csv';
import axios from 'axios';

function csvToMdiMapper(systemId,caseId,firstName,lastName,midName,age,ageUnit,race,gender,ethnicity,                             //10 variables
                        birthDate,mrnNumber,jobTitle,industry,language,marital,possibleId,certifierName,certifierType,causeA,     //10 variables
                        causeB,causeC,causeD,oscond,manner,chownInjury,durationA,durationB,durationC,durationD,                   //10 variables
                        caseNotes,atWork,jobRelated,reportDate,reportTime,foundDate,foundTime,eventDate,eventTime,prnDate,        //10 variables
                        prnTime,examDate,cinjDate,cinjTime,ciDateFlag,cDeathFlag,cDeathTime,lkaDate,lkaTime,caseYear,atHospDate, //11 variables
                        resStreet,resCity,resCounty,resState,resZip,                                                               //5 variables
                        deathPlace,deathStreet,deathCity,deathCounty,deathState,deathZip,                                         //6 variables
                        eventPlace,foundAddrStreet,foundAddrCity,foundAddrCounty,foundAddrState,foundAddrZip,                     //6 variables
                        eventAddrStreet,eventAddrCity,eventAddrCounty,eventAddrState,eventAddrZip,                                //5 variables
                        prnPlace,prnStreet,prnCity,prnCounty,prnState,prnZip,                                                     //6 variables
                        cinjPlace,cinjStreet,cinjCity,cinjCounty,cinjState,cinjZip,                                               //6 variables
                        cDeathDate,resName,lkaWhere,hospName,                                                                     //4 variables
                        sceneAddrStreet,sceneAddrCity,sceneAddrCounty,sceneAddrState,sceneAddrZip,                                //5 variables
                        surgery,surgDate,hcProvider,custody,cAutopsy,autopused){                                                  //6 variables = 100
  return {
    SYSTEMID:systemId,CASEID:caseId,FIRSTNAME:firstName,LASTNAME:lastName,MIDNAME:midName,AGE:age,AGEUNIT:ageUnit,RACE:race,GENDER:gender,ETHNICITY:ethnicity,
    BIRTHDATE:birthDate,MRNNUMBER:mrnNumber,JOBTITLE:jobTitle,INDUSTRY:industry,LANGUAGE:language,MARITAL:marital,POSSIBLEID:possibleId,CERTIFIER_NAME:certifierName,CERTIFIER_TYPE:certifierType,CAUSEA:causeA,
    CAUSEB:causeB,CAUSEC:causeC,CAUSED:causeD,OSCOND:oscond,MANNER:manner,CHOWNINJURY:chownInjury,DURATIONA:durationA,DURATIONB:durationB,DURATIONC:durationC,DURACTIOND:durationD,
    CASENOTES:caseNotes,ATWORK:atWork,JOBRELATED:jobRelated,REPORTDATE:reportDate,REPORTTIME:reportTime,FOUNDDATE:foundDate,FOUNDTIME:foundTime,EVENTDATE:eventDate,EVENTTIME:eventTime,PRNDATE:prnDate,
    PRNTIME:prnTime,EXAMDATE:examDate,CINJDATE:cinjDate,CINJTIME:cinjTime,CIDATEFLAG:ciDateFlag,CDEATHFLAG:cDeathFlag,CDEATHTIME:cDeathTime,LKADATE:lkaDate,LKATIME:lkaTime,CASEYEAR:caseYear,ATHOSPDATE:atHospDate,
    RESSTREET:resStreet,RESCITY:resCity,RESCOUNTY:resCounty,RESSTATE:resState,RESZIP:resZip,
    DEATHPLACE:deathPlace,DEATH_STREET:deathStreet,DEATH_CITY:deathCity,DEATH_COUNTY:deathCounty,DEATH_STATE:deathState,DEATH_ZIP:deathZip,
    EVENTPLACE:eventPlace,FOUNDADDR_STREET:foundAddrStreet,FOUNDADDR_CITY:foundAddrCity,FOUNDADDR_COUNTY:foundAddrCounty,FOUNDADDR_STATE:foundAddrState,FOUNDADDR_ZIP:foundAddrZip,
    EVEENTADDR_STREET:eventAddrStreet,EVENTADDR_CITY:eventAddrCity,EVENTADDR_COUNTY:eventAddrCounty,EVENT_ADDR_STATE:eventAddrState,EVENTADDR_ZIP:eventAddrZip,
    PRNPLACE:prnPlace,PRNSTREET:prnStreet,PRNCITY:prnCity,PRNCOUNTY:prnCounty,PRNSTATE:prnState,PRNZIP:prnZip,
    CINJPLACE:cinjPlace,CINJSTREET:cinjStreet,CINJCITY:cinjCity,CINJCOUNTY:cinjCounty,CINJSTATE:cinjState,CINJZIP:cinjZip,
    CDEATHDATE:cDeathDate,RESNAME:resName,LKAWHERE:lkaWhere,HOSPNAME:hospName,
    SCENEADDR_STREET:sceneAddrStreet,SCENEADDR_CITY:sceneAddrCity,SCENEADDR_COUNTY:sceneAddrCounty,SCENEADDR_STATE:sceneAddrState,SCENEADDR_ZIP:sceneAddrZip,
    SURGERY:surgery,SURGDATE:surgDate,HCPROVIDER:hcProvider,CUSTODY:custody,CAUTOPSY:cAutopsy,AUTOPUSED:autopused
  }
}

function parseDecedent(data) {

  const firstName = data.decedent_first_name === "null" ? '' : data.decedent_first_name;
  const middleName = data.decedent_middle_name === "null" ? '' : data.decedent_middle_name;
  const lastName = data.decedent_last_name === "null" ? '' : data.decedent_last_name;
  const race = data.race === "null" ? '' : data.race;
  const gender = data.gender === "null" ? '' : data.gender;
  const maritalStatus = data.marital_status === "null" ? '' : data.marital_status;
  const dob = data.date_of_birth === "null" ? '' : data.date_of_birth;
  const occupation = data.occupation === "null" ? '' : data.occupation;
  const industry = data.kind_of_business === "null" ? '' : data.kind_of_business;
  const caseNumber = data.local_file_number === "null" ? '' : data.local_file_number;
  return {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    race: race,
    gender: gender,
    maritalStatus: maritalStatus,
    birthDate: dob,
    job: occupation,
    case: caseNumber,
    industry: industry
  }

}
function parseAutopsy(data) {
  const autopsyPerformed = data.was_an_autopsy_performed === "null" ? '' : data.was_an_autopsy_performed;
  const autopsyAvailable = data.were_autopsy_findings_available === "null" ? '' : data.were_autopsy_findings_available;
  return {
    performed: autopsyPerformed,
    available: autopsyAvailable
  }
}
function parseDeath(data) {
  const zip = data.location_of_death__zip5 === "null" ? '' : data.location_of_death__zip5;
  const county = data.location_of_death__county === "null" ? '' : data.location_of_death__county;
  const city = data.location_of_death__city === "null" ? '' : data.location_of_death__city;
  const usState = data.location_of_death__state === "null" ? '' : data.location_of_death__state;
  const place = data.place_of_death === "null" ? '' : data.place_of_death;
  var date = data.date_of_death === "null" ? '' : data.date_of_death;
  if (date.length === 7) date = '0' + date;
  const time = data.actual_or_presumed_time_of_death === "null" ? '' : data.actual_or_presumed_time_of_death;
  const pronouncedTime = data.time_pronounced_dead === "null" ? '' : data.time_pronounced_dead;
  const pronounceDate = data.pronounced_dead_on === "null" ? '' : data.pronounced_dead_on;
  const manner = data.manner_of_death === "null" ? '' : data.manner_of_death;
  return {
    zip: zip,
    county: county,
    city: city,
    usState: usState,
    place: place,
    date: date,
    time: time,
    pronouncedTime: pronouncedTime,
    pronounceDate: pronounceDate,
    manner: manner
  }
}
function parseAge(data) {
  var age = '';
  var unit = '';
  if (data.age_in_years !== "null") {
    age = data.age_in_years;
    unit = "years";
  } else if (data.age_in_months !== "null") {
    age = data.age_in_months;
    unit = "months";
  } else if (data.age_in_days !== "null") {
    age = data.age_in_days;
    unit = "days";
  } else if (data.age_in_hours !== "null") {
    age = data.age_in_hours;
    unit = "hours";
  } else if (data.age_in_minutes !== "null") {
    age = data.age_in_minutes;
    unit = "minutes";
  } else if (data.age_in_seconds !== "null") {
    age = data.age_in_seconds;
    unit = "seconds";
  }
  return {
    age: age,
    unit: unit
  }
}
function parseInjury(data) {
  const streetNumber = data.injury_location__street_number === "null" ? '' : data.injury_location__street_number + " ";
  const streetName = data.injury_location__street_name === "null" ? '' : data.injury_location__street_name;
  const aptNumber = data.injury_location__apt_number === "null" ? '' : " " + data.injury_location__apt_number;
  const street = streetNumber + streetName + aptNumber;
  const city = data.injury_location__city === "null" ? '' : data.injury_location__city;
  const usState = data.injury_location__state === "null" ? '' : data.injury_location__state;
  const zip = data.injury_location__zip5 === "null" ? '' : data.injury_location__zip5;
  const place = data.place_of_injury === "null" ? '' : data.place_of_injury;
  const time = data.time_of_injury === "null" ? '' : data.time_of_injury;
  var date = data.date_of_injury === "null" ? '' : data.date_of_injury;
  if (date.length === 7) date = '0' + date;
  const atWork = data.injury_at_work === "null" ? '' : data.injury_at_work;
  var related = '';
  if (atWork.toLowerCase() === 'no') related = 'No';
  const desc = data.describe_how_injury_occurred === "null" ? '' : data.describe_how_injury_occurred;
  return {
    street: street,
    city: city,
    usState: usState,
    zip: zip,
    place: place,
    time: time,
    date: date,
    atWork: atWork,
    jobRelated: related,
    desc: desc
  }
}
function parseResidence(data) {
  const streetNumber = data.current_residence__street_number === "null" ? '' : data.current_residence__street_number + " ";
  const streetName = data.current_residence__street_name === "null" ? '' : data.current_residence__street_name;
  const aptNumber = data.current_residence__apt_number === "null" ? '' : " " + data.current_residence__apt_number;
  const street = streetNumber + streetName + aptNumber;
  const city = data.current_residence__city === "null" ? '' : data.current_residence__city;
  const county = data.current_residence__county === "null" ? '' : data.current_residence__county;
  const usState = data.current_residence__state === "null" ? '' : data.current_residence__state;
  const zip = data.current_residence__zip5 === "null" ? '' : data.current_residence__zip5;
  return {
    street: street,
    city: city,
    county: county,
    usState: usState,
    zip: zip
  }
}
function parseCausesOfDeath(data) {
  const causeA = data.cause_of_death_1a === "null" ? '' : data.cause_of_death_1a;
  const causeB = data.cause_of_death_1b === "null" ? '' : data.cause_of_death_1b;
  const causeC = data.cause_of_death_1c === "null" ? '' : data.cause_of_death_1c;
  const causeD = data.cause_of_death_1d === "null" ? '' : data.cause_of_death_1d;
  const conditions = data.other_conditions === "null" ? '' : data.other_conditions;
  return {
    causeA: causeA,
    causeB: causeB,
    causeC: causeC,
    causeD: causeD,
    conditions: conditions
  }

}
function parseCertifier(data) {
  const type = data.medical_certifier_type === "null" ? '' : data.medical_certifier_type;
  const firstName = data.certifying_physician_first_name === "null" ? '' : data.certifying_physician_first_name;
  const lastName = data.certifying_physician_last_name === "null" ? '' : data.certifying_physician_last_name;
  const middleName = data.certifying_physician_middle_name === "null" ? '' : data.certifying_physician_middle_name;
  const title = data.certifying_physician_title === "null" ? '' : data.certifying_physician_title;
  const suffix = data.certifying_physician_name_suffix === "null" ? '' : data.certifying_physician_name_suffix;
  var name = "";
  if (title.length > 0) name += title + " ";
  if (firstName.length > 0) name += firstName + " ";
  if (middleName.length > 0) name += middleName + " ";
  if (lastName.length > 0) name += lastName;
  if (suffix.length > 0) name += " " + suffix;
  return {
    name: name,
    type: type
  }
}

const papaparseOptions = {
  header: true,
  skipEmptyLines: true,
  transformHeader: header =>
    header
      .toLowerCase()
      .replace('-','')
}

const numbers = [1,2,3,4,5];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

function MDIEntry(props) {
  
}

export default class CsvSubmission extends Component {


  constructor(props) {
    super(props);

    this.convertToMdi.bind(this);
  }

  async convertToMdi(data, fileInfo) {
    const decedent = parseDecedent(data[0]);
    const autopsy = parseAutopsy(data[0]);
    const death = parseDeath(data[0]);
    const injury = parseInjury(data[0]);
    const residence = parseResidence(data[0]);
    const age = parseAge(data[0]);
    const causes = parseCausesOfDeath(data[0]);
    const certifier = parseCertifier(data[0]);
    const systemId = "urn:mdi:cms:burmingham";

    var mdiEntry = csvToMdiMapper(systemId,decedent.case,decedent.firstName,decedent.lastName,decedent.middleName,age.age,age.unit,decedent.race,decedent.gender,null,
                                  decedent.birthDate,null,decedent.job,decedent.industry,null,decedent.maritalStatus,null,certifier.name,certifier.type,causes.causeA,
                                  causes.causeB,causes.causeC,causes.causeD,causes.conditions,death.manner,injury.desc,null,null,null,null,
                                  null,injury.atWork,injury.jobRelated,death.pronounceDate,death.pronouncedTime,null,null,death.date,death.time,death.pronounceDate,
                                  death.pronouncedTime,null,injury.date,injury.time,null,null,death.time,null,null,null,null,
                                  residence.street,residence.city,residence.county,residence.usState,residence.zip,
                                  death.place,null,death.city,death.county,death.usState,death.zip,
                                  null,null,null,null,null,null,
                                  null,null,null,null,null,
                                  null,null,null,null,null,null,
                                  injury.place,injury.street,injury.city,null,injury.usState,injury.zip,
                                  death.date,null,null,null,
                                  null,null,null,null,null,
                                  null,null,null,null,autopsy.performed,autopsy.available);
    const mdiArray = [mdiEntry];
    const mdiCsv = convertArrayToCSV(mdiArray);

    const formData = new FormData();
    formData.append('file', new Blob([mdiCsv], {
      type: 'text/csv',
    }));
    const res = await axios.post(`https://apps.hdap.gatech.edu/raven-mapper-api/upload-csv-file-dataonly`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
      },
      auth: {
        username: 'client',
        password: 'secret'
      }
    }).then(function(res) {
      console.log(res);
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  render() {
      return(
        <div className='page csv-submission'>
          <div className='i1'>
            <div className='i1-a'>
              <div className='i1-aa'>
                  <CSVReader
                    className='button is-small is-outlined is-primary'
                    onFileLoaded={this.convertToMdi}
                    parserOptions={papaparseOptions}>
                    Upload CSV
                  </CSVReader>
              </div>
            </div>
          </div>
          <div className="i2">
            <NumberList numbers={numbers}/>
          </div>
        </div>
      );
  }
}
