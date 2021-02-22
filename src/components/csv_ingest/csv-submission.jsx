import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { convertArrayToCSV } from 'convert-array-to-csv';
import axios from 'axios';
import { DataGrid, RowsProp, ColDef, CellParams } from '@material-ui/data-grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

function csvToMdiMapper(systemId,caseId,firstName,lastName,midName,age,ageUnit,race,gender,ethnicity,                             //10 variables
                        birthDate,mrnNumber,jobTitle,industry,language,marital,possibleId,certifierName,certifierType,causeA,     //10 variables
                        causeB,causeC,causeD,oscond,dispMethod,manner,chownInjury,durationA,durationB,durationC,durationD,        //11 variables
                        caseNotes,atWork,jobRelated,reportDate,reportTime,cDeathDate,cDeathTime,foundDate,foundTime,              //9 variables
                        eventDate,eventTime,prnDate,prnTime,examDate,                                                             //5 variables
                        cinjDate,cinjTime,ciDateFlag,cDeathFlag,lkaDate,lkaTime,caseYear,atHospDate,                              //8 variables
                        resStreet,resCity,resCounty,resState,resZip,                                                              //5 variables
                        deathPlace,deathStreet,deathCity,deathCounty,deathState,deathZip,                                         //6 variables
                        eventPlace,foundAddrStreet,foundAddrCity,foundAddrCounty,foundAddrState,foundAddrZip,                     //6 variables
                        eventAddrStreet,eventAddrCity,eventAddrCounty,eventAddrState,eventAddrZip,                                //5 variables
                        prnPlace,prnStreet,prnCity,prnCounty,prnState,prnZip,                                                     //6 variables
                        dispPlace,dispStreet,dispCity,dispCounty,dispState,dispZip,                                               //6 variables
                        cinjPlace,cinjStreet,cinjCity,cinjCounty,cinjState,cinjZip,                                               //6 variables
                        resName,lkaWhere,hospName,                                                                                //3 variables
                        sceneAddrStreet,sceneAddrCity,sceneAddrCounty,sceneAddrState,sceneAddrZip,                                //5 variables
                        surgery,surgDate,hcProvider,custody,cAutopsy,autopused){                                                  //6 variables = 101
  return {
    SYSTEMID:systemId,CASEID:caseId,FIRSTNAME:firstName,LASTNAME:lastName,MIDNAME:midName,AGE:age,AGEUNIT:ageUnit,RACE:race,GENDER:gender,ETHNICITY:ethnicity,
    BIRTHDATE:birthDate,MRNNUMBER:mrnNumber,JOBTITLE:jobTitle,INDUSTRY:industry,LANGUAGE:language,MARITAL:marital,POSSIBLEID:possibleId,CERTIFIER_NAME:certifierName,CERTIFIER_TYPE:certifierType,CAUSEA:causeA,
    CAUSEB:causeB,CAUSEC:causeC,CAUSED:causeD,OSCOND:oscond,DISPMETHOD:dispMethod, MANNER:manner,CHOWNINJURY:chownInjury,DURATIONA:durationA,DURATIONB:durationB,DURATIONC:durationC,DURACTIOND:durationD,
    CASENOTES:caseNotes,ATWORK:atWork,JOBRELATED:jobRelated,REPORTDATE:reportDate,REPORTTIME:reportTime,CDEATHDATE:cDeathDate,CDEATHTIME:cDeathTime,FOUNDDATE:foundDate,FOUNDTIME:foundTime,
    EVENTDATE:eventDate,EVENTTIME:eventTime,PRNDATE:prnDate,PRNTIME:prnTime,EXAMDATE:examDate,
    CINJDATE:cinjDate,CINJTIME:cinjTime,CIDATEFLAG:ciDateFlag,CDEATHFLAG:cDeathFlag,CDEATHTIME:cDeathTime,LKADATE:lkaDate,LKATIME:lkaTime,CASEYEAR:caseYear,ATHOSPDATE:atHospDate,
    RESSTREET:resStreet,RESCITY:resCity,RESCOUNTY:resCounty,RESSTATE:resState,RESZIP:resZip,
    DEATHPLACE:deathPlace,DEATH_STREET:deathStreet,DEATH_CITY:deathCity,DEATH_COUNTY:deathCounty,DEATH_STATE:deathState,DEATH_ZIP:deathZip,
    EVENTPLACE:eventPlace,FOUNDADDR_STREET:foundAddrStreet,FOUNDADDR_CITY:foundAddrCity,FOUNDADDR_COUNTY:foundAddrCounty,FOUNDADDR_STATE:foundAddrState,FOUNDADDR_ZIP:foundAddrZip,
    EVEENTADDR_STREET:eventAddrStreet,EVENTADDR_CITY:eventAddrCity,EVENTADDR_COUNTY:eventAddrCounty,EVENT_ADDR_STATE:eventAddrState,EVENTADDR_ZIP:eventAddrZip,
    PRNPLACE:prnPlace,PRNSTREET:prnStreet,PRNCITY:prnCity,PRNCOUNTY:prnCounty,PRNSTATE:prnState,PRNZIP:prnZip,
    DISPPLACE:dispPlace,DISPSTREET:dispStreet,DISPCITY:dispCity,DISPCOUNTY:dispCounty,DISPSTATE:dispState,DISPZIP:dispZip,
    CINJPLACE:cinjPlace,CINJSTREET:cinjStreet,CINJCITY:cinjCity,CINJCOUNTY:cinjCounty,CINJSTATE:cinjState,CINJZIP:cinjZip,
    RESNAME:resName,LKAWHERE:lkaWhere,HOSPNAME:hospName,
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

function cleanupPatientData(data, csvMaps) {
  var values = [];
  for (var ii=0;ii<107;ii++) {
    if (csvMaps[ii].length > 0) {
      values[ii] = data[csvMaps[ii]] === "null" ? '' : data[csvMaps[ii]];
    } else {
      values[ii] = '';
    }
  }
  return values;
}

const papaparseOptions = {
  header: true,
  skipEmptyLines: true,
  transformHeader: header =>
    header
      .toLowerCase()
      .replace('-','')
}

const useStyles = makeStyles({
  root: {
    maxHeight: "none !important",
    position: "relative !important",
    height: "auto !important"
  },
  row: {
      maxHeight: "none !important"
  },
  cell: {
    maxHeight: "none !important"
  },
  window: {
    position: "relative !important"
  },
  viewport: {
    maxHeight: "none !important"
  }
});

const formStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function mapCsvToSelectFields(data) {
  return ([
    <MenuItem key='no-value' value=''>Not mapped</MenuItem>,
    Object.entries(data).map(([key, val]) =>
      <MenuItem key={key} value={key}>{key}</MenuItem>
    )]
  );
}

function emptyArray() {
  var arr = [];
  for (var ii=0;ii<107;ii++){
    arr.push('');
  }
  return arr;
}

const rows: RowsProp = [
  { id: 0, col1: 'SYSTEMID', col2: {desc: 'A system identifier to the external datasource'}},
  { id: 1, col1: 'CASEID', col2: {desc: 'A case id from the original datasource'}},
  { id: 2, col1: 'FIRSTNAME', col2: {desc: 'First Name of Patient'}},
  { id: 3, col1: 'LASTNAME', col2: {desc: 'Last Name of Patient'}},
  { id: 4, col1: 'MIDNAME', col2: {desc: 'Middle Name of Patient'}},
  { id: 5, col1: 'AGE', col2: {desc: 'Age of Patient'}},
  { id: 6, col1: 'AGEUNIT', col2: {desc: 'seconds, minutes,hours, months, years patient lived'}},
  { id: 7, col1: 'RACE', col2: {desc: 'Racial component of decedent'}},
  { id: 8, col1: 'GENDER', col2: {desc: 'The identified gender of the decedent'}},
  { id: 9, col1: 'ETHNICITY', col2: {desc: 'Ethnic component of decedent'}},
  { id: 10, col1: 'BIRTHDATE', col2: {desc: 'Birthdate of decedent'}},
  { id: 11, col1: 'MRNNUMBER', col2: {desc: 'A medical record number (if available) provided from a health record'}},
  { id: 12, col1: 'JOBTITLE', col2: {desc: 'Job Title of the working decedent'}},
  { id: 13, col1: 'INDUSTRY', col2: {desc: 'Industry in which the decedent worked in'}},
  { id: 14, col1: 'LANGUAGE', col2: {desc: 'The perferred language of the decedent'}},
  { id: 15, col1: 'MARITAL', col2: {desc: 'Martial status of the decedent(Married, annulled, not married, divorced)'}},
  { id: 16, col1: 'POSSIBLEID', col2: {desc: 'A nickname, or other possible identification the decedent used'}},
  { id: 17, col1: 'CERTIFIER_NAME', col2: {desc: 'Name of the Certifier who certified the death'}},
  { id: 18, col1: 'CERTIFIER_TYPE', col2: {desc: 'Qualification of the Certifier (ME, Coroner, Pronouncer)'}},
  { id: 19, col1: 'CAUSEA', col2: {desc: '1st Cause of Death'}},
  { id: 20, col1: 'CAUSEB', col2: {desc: '2nd Cause of Death'}},
  { id: 21, col1: 'CAUSEC', col2: {desc: '3rd Cause of Death'}},
  { id: 22, col1: 'CAUSED', col2: {desc: '4th Cause of Death'}},
  { id: 23, col1: 'OSCOND', col2: {desc: 'Other circumstances related to the cause of death'}},
  { id: 24, col1: 'DISPMETHOD', col2: {desc: 'The method of disposal (burial, cremation) on the body'}},
  { id: 25, col1: 'MANNER', col2: {desc: 'The manner of death (natural, suicide, accidental)'}},
  { id: 26, col1: 'CHOWNINJURY', col2: {desc: 'A description of the injury, if occurred'}},
  { id: 27, col1: 'DURATIONA', col2: {desc: 'The length of time related to CAUSEA'}},
  { id: 28, col1: 'DURATIONB', col2: {desc: 'The length of time related to CAUSEB'}},
  { id: 29, col1: 'DURATIONC', col2: {desc: 'The length of time related to CAUSEC'}},
  { id: 30, col1: 'DURACTIOND', col2: {desc: 'The length of time related to CAUSED'}},
  { id: 31, col1: 'CASENOTES', col2: {desc: 'Extra case notes related to the cause of death'}},
  { id: 32, col1: 'ATWORK', col2: {desc: 'A True/False value if the death occurred at work'}},
  { id: 33, col1: 'JOBRELATED', col2: {desc: 'A True/False value if the death was in any way job related'}},
  { id: 34, col1: 'REPORTDATE', col2: {desc: 'The date the death was reported'}},
  { id: 35, col1: 'REPORTTIME', col2: {desc: 'The time the death was reported'}},
  { id: 36, col1: 'CDEATHDATE', col2: {desc: 'The date the death occurred'}},
  { id: 37, col1: 'CDEATHTIME', col2: {desc: 'The time the death occurred'}},
  { id: 38, col1: 'FOUNDDATE', col2: {desc: 'The date the body was found'}},
  { id: 39, col1: 'FOUNDTIME', col2: {desc: 'The time the death was found'}},
  { id: 40, col1: 'EVENTDATE', col2: {desc: 'The date of the onset of events leading to death'}},
  { id: 41, col1: 'EVENTTIME', col2: {desc: 'The time of the onset of events leading to death'}},
  { id: 42, col1: 'PRNDATE', col2: {desc: 'The date the body was pronounced dead'}},
  { id: 43, col1: 'PRNTIME', col2: {desc: 'The time the body was pronounced dead'}},
  { id: 44, col1: 'EXAMDATE', col2: {desc: 'The date the case review or examination of the body occurred'}},
  { id: 45, col1: 'CINJDATE', col2: {desc: 'The date of the injury leading to death'}},
  { id: 46, col1: 'CINJTIME', col2: {desc: 'The time of the injury leading to death'}},
  { id: 47, col1: 'CIDATEFLAG', col2: {desc: 'Qualifications(Approximations) of the datetime related to the injury'}},
  { id: 48, col1: 'CDEATHFLAG', col2: {desc: 'Qualifications(Approximations) of the date related to the death'}},
  { id: 49, col1: 'LKADATE', col2: {desc: 'The date decedent was last known alive'}},
  { id: 50, col1: 'LKATIME', col2: {desc: 'The time the decedent was last known alive'}},
  { id: 51, col1: 'CASEYEAR', col2: {desc: 'The year the case occurred'}},
  { id: 52, col1: 'ATHOSPDATE', col2: {desc: 'The date the decedent entered the hospital, if available'}},
  { id: 53, col1: 'RESSTRET', col2: {desc: 'The address line of the decedent\'s reseidence'}},
  { id: 54, col1: 'RESCITY', col2: {desc: 'The city of the decedent\'s reseidence'}},
  { id: 55, col1: 'RESCOUNTY', col2: {desc: 'The county of the decedent\'s reseidence'}},
  { id: 56, col1: 'RESSTATE', col2: {desc: 'The state of the decedent\'s reseidence'}},
  { id: 57, col1: 'RESZIP', col2: {desc: 'The zipcode of the decedent\'s reseidence'}},
  { id: 58, col1: 'DEATHPLACE', col2: {desc: 'The name of the place of death'}},
  { id: 59, col1: 'DEATH_STREET', col2: {desc: 'The address line of the place of death'}},
  { id: 60, col1: 'DEATH_CITY', col2: {desc: 'The city of the place of death'}},
  { id: 61, col1: 'DEATH_COUNTY', col2: {desc: 'The county of the place of death'}},
  { id: 62, col1: 'DEATH_STATE', col2: {desc: 'The state of the place of death'}},
  { id: 63, col1: 'DEATH_ZIP', col2: {desc: 'The zipcode of the place of death'}},
  { id: 64, col1: 'EVENTPLACE', col2: {desc: 'The name of the place where the event that lead to injury took place'}},
  { id: 65, col1: 'FOUNDADDR_STREET', col2: {desc: 'The address line of where the decedent was found'}},
  { id: 66, col1: 'FOUNDADDR_CITY', col2: {desc: 'The city of where the decedent was found'}},
  { id: 67, col1: 'FOUNDADDR_COUNTY', col2: {desc: 'The county of where the decedent was found'}},
  { id: 68, col1: 'FOUNDADDR_STATE', col2: {desc: 'The state of where the decedent was found'}},
  { id: 69, col1: 'FOUNDADDR_ZIP', col2: {desc: 'The zipcode of where the decedent was found'}},
  { id: 70, col1: 'EVEENTADDR_STREET', col2: {desc: 'The address line of where the event that lead to injury took place'}},
  { id: 71, col1: 'EVENTADDR_CITY', col2: {desc: 'The city of where the event that lead to injury took place'}},
  { id: 72, col1: 'EVENTADDR_COUNTY', col2: {desc: 'The county of where the event that lead to injury took place'}},
  { id: 73, col1: 'EVENT_ADDR_STATE', col2: {desc: 'The state of where the event that lead to injury took place'}},
  { id: 74, col1: 'EVENTADDR_ZIP', col2: {desc: 'The zipcode of where the event that lead to injury took place'}},
  { id: 75, col1: 'PRNPLACE', col2: {desc: 'The name of where the pronounciation was made'}},
  { id: 76, col1: 'PRNSTREET', col2: {desc: 'The address line of where the pronounciation was made'}},
  { id: 77, col1: 'PRNCITY', col2: {desc: 'The city of where the pronounciation was made'}},
  { id: 78, col1: 'PRNCOUNTY', col2: {desc: 'The county of where the pronounciation was made'}},
  { id: 79, col1: 'PRNSTATE', col2: {desc: 'The state of where the pronounciation was made'}},
  { id: 80, col1: 'PRNZIP', col2: {desc: 'The zipcode of where the pronounciation was made'}},
  { id: 81, col1: 'DISP_PLACE', col2: {desc: 'The name of the place where the disposition took place'}},
  { id: 82, col1: 'DISP_STREET', col2: {desc: 'The address line of the place where the disposition took place'}},
  { id: 83, col1: 'DISP_CITY', col2: {desc: 'The city of the place where the disposition took place'}},
  { id: 84, col1: 'DISP_COUNTY', col2: {desc: 'The county of the place where the disposition took place'}},
  { id: 85, col1: 'DISP_STATE', col2: {desc: 'The state of the place where the disposition took place'}},
  { id: 86, col1: 'DISP_ZIP', col2: {desc: 'The zipcode of the place where the disposition took place'}},
  { id: 87, col1: 'CINJPLACE', col2: {desc: 'The name of where the injury took place'}},
  { id: 88, col1: 'CINJSTREET', col2: {desc: 'The address line of where the injury took place'}},
  { id: 89, col1: 'CINJCITY', col2: {desc: 'The city of where the injury took place'}},
  { id: 90, col1: 'CINJCOUNTY', col2: {desc: 'The county of where the injury took place'}},
  { id: 91, col1: 'CINJSTATE', col2: {desc: 'The state of where the injury took place'}},
  { id: 92, col1: 'CINJZIP', col2: {desc: 'The zipcode of where the injury took place'}},
  { id: 93, col1: 'RESNAME', col2: {desc: 'the name of the residence of the decedent'}},
  { id: 94, col1: 'LKAWHERE', col2: {desc: 'String of where the decedent was last seen alive'}},
  { id: 95, col1: 'HOSPNAME', col2: {desc: 'The name of the hospital that intook the patient'}},
  { id: 96, col1: 'SCENEADDR_STREET', col2: {desc: 'The address line of where the scene of investigation took place'}},
  { id: 97, col1: 'SCENEADDR_CITY', col2: {desc: 'The city of where the scene of investigation took place'}},
  { id: 98, col1: 'SCENEADDR_COUNTY', col2: {desc: 'The county of where the scene of investigation took place'}},
  { id: 99, col1: 'SCENEADDR_STATE', col2: {desc: 'The state of where the scene of investigation took place'}},
  { id: 100, col1: 'SCENEADDR_ZIP', col2: {desc: 'The zipcode of where the scene of investigation took place'}},
  { id: 101, col1: 'SURGERY', col2: {desc: 'Whether a surgery was conducted or not'}},
  { id: 102, col1: 'SURGDATE', col2: {desc: 'The date of the surgery'}},
  { id: 103, col1: 'HCPROVIDER', col2: {desc: 'The name of the health care provider for the decedent'}},
  { id: 104, col1: 'CUSTODY', col2: {desc: 'A true/false value whether the decedent was in custody or not'}},
  { id: 105, col1: 'CAUTOPSY', col2: {desc: 'A true/false value whether the decedent had an autopsy or not'}},
  { id: 106, col1: 'AUTOPUSED', col2: {desc: 'A true/false value whether the decedent\'s autopsy was used to determine the cause of death'}},
]

export default class CsvSubmission extends Component {

  constructor(props) {
    super(props);

    this.state = {
      csvLoaded: false,
      csvSelectFields: [
        <MenuItem value=''>Not mapped</MenuItem>
      ],
      csvMaps: emptyArray(),
      csvData: [],
      submitStatus: 'Import',
      autoStatus: 'Auto',
      blockSubmit: false,
      mdiCsvFile: ''
    };

    this.convertToMdi = this.convertToMdi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitPatient = this.submitPatient.bind(this);
    this.autoSubmit = this.autoSubmit.bind(this);
    this.downloadMdiCsv = this.downloadMdiCsv.bind(this);
  }

  handleChange = params => (event) => {
    const newMaps = this.state.csvMaps.slice();
    newMaps[params.rowIndex] = event.target.value;
    this.setState(state => ({
      csvMaps: newMaps
    }));
  }

  convertToMdi(data, fileInfo) {
    this.setState(state => ({
      csvLoaded: true,
      csvSelectFields: mapCsvToSelectFields(data[0]),
      csvData: data
    }));
  }

  async submitPatient() {
    this.setState(state => ({
      submitStatus: 'Importing',
      blockSubmit: true
    }));
    var mdiArray = [];
    for (var ii=0; ii<this.state.csvData.length; ii++) {
      const patient = cleanupPatientData(this.state.csvData[ii],this.state.csvMaps);
      const systemId = patient[0].length > 0 ? patient[0] : "urn:mdi:cms:birmingham";
      var mdiEntry = csvToMdiMapper(systemId,patient[1],patient[2],patient[3],patient[4],patient[5],patient[6],patient[7],patient[8],patient[9],
                                    patient[10],patient[11],patient[12],patient[13],patient[14],patient[15],patient[16],patient[17],patient[18],patient[19],
                                    patient[20],patient[21],patient[22],patient[23],patient[24],patient[25],patient[26],patient[27],patient[28],patient[29],
                                    patient[30],patient[31],patient[32],patient[33],patient[34],patient[35],patient[36],patient[37],patient[38],patient[39],
                                    patient[40],patient[41],patient[42],patient[43],patient[44],patient[45],patient[46],patient[47],patient[48],patient[49],
                                    patient[50],patient[51],patient[52],patient[53],patient[54],patient[55],patient[56],patient[57],patient[58],patient[59],
                                    patient[60],patient[61],patient[62],patient[63],patient[64],patient[65],patient[66],patient[67],patient[68],patient[69],
                                    patient[70],patient[71],patient[72],patient[73],patient[74],patient[75],patient[76],patient[77],patient[78],patient[79],
                                    patient[80],patient[81],patient[82],patient[83],patient[84],patient[85],patient[86],patient[87],patient[88],patient[89],
                                    patient[90],patient[91],patient[92],patient[93],patient[94],patient[95],patient[96],patient[97],patient[98],patient[99],
                                    patient[100],patient[101],patient[102],patient[103],patient[104],patient[105],patient[106]);
      mdiArray[ii] = mdiEntry;
    }
    console.log(mdiArray);
    const mdiCsv = convertArrayToCSV(mdiArray);
    this.setState(state => ({
      mdiCsvFile: mdiCsv
    }))
    const formData = new FormData();
    formData.append('file', new Blob([mdiCsv], {
      type: 'text/csv',
    }));
    var self=this;
    const res = await axios.post(`${window._env_.FHIR_MAPPER_URL}` + `upload-csv-file-dataonly`, formData, {
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
      self.setState(state => ({
        submitStatus: 'Imported',
        blockSubmit: false
      }));
    }).catch(function(error) {
      console.log(error.message);
      self.setState(state => ({
        submitStatus: 'Import',
        blockSubmit: false
      }));
    });
  }

  async autoSubmit() {
    this.setState(state => ({
      autoStatus: 'Importing',
      blockSubmit: true
    }));
    const systemId = "urn:mdi:cms:birmingham";
    var mdiArray = [];
    for (var ii=0; ii<this.state.csvData.length; ii++) {
      const decedent = parseDecedent(this.state.csvData[ii]);
      const autopsy = parseAutopsy(this.state.csvData[ii]);
      const death = parseDeath(this.state.csvData[ii]);
      const injury = parseInjury(this.state.csvData[ii]);
      const residence = parseResidence(this.state.csvData[ii]);
      const age = parseAge(this.state.csvData[ii]);
      const causes = parseCausesOfDeath(this.state.csvData[ii]);
      const certifier = parseCertifier(this.state.csvData[ii]);

      var mdiEntry = csvToMdiMapper(systemId,decedent.case,decedent.firstName,decedent.lastName,decedent.middleName,age.age,age.unit,decedent.race,decedent.gender,null,
                                    decedent.birthDate,null,decedent.job,decedent.industry,null,decedent.maritalStatus,null,certifier.name,certifier.type,causes.causeA,
                                    causes.causeB,causes.causeC,causes.causeD,causes.conditions,null,death.manner,injury.desc,null,null,null,null,
                                    null,injury.atWork,injury.jobRelated,death.pronounceDate,death.pronouncedTime,death.date,death.time,null,null,
                                    null,null,death.pronounceDate,death.pronouncedTime,null,
                                    injury.date,injury.time,null,null,null,null,null,null,
                                    residence.street,residence.city,residence.county,residence.usState,residence.zip,
                                    death.place,null,death.city,death.county,death.usState,death.zip,
                                    null,null,null,null,null,null,
                                    null,null,null,null,null,
                                    null,null,null,null,null,null,
                                    null,null,null,null,null,null,
                                    injury.place,injury.street,injury.city,null,injury.usState,injury.zip,
                                    null,null,null,
                                    null,null,null,null,null,
                                    null,null,null,null,autopsy.performed,autopsy.available);
      mdiArray[ii] = mdiEntry;
    }
    console.log(mdiArray);
    const mdiCsv = convertArrayToCSV(mdiArray);
    this.setState(state => ({
      mdiCsvFile: mdiCsv
    }))
    const formData = new FormData();
    formData.append('file', new Blob([mdiCsv], {
      type: 'text/csv',
    }));
    var self=this;
    const res = await axios.post(`${window._env_.FHIR_MAPPER_URL}` + `upload-csv-file-dataonly`, formData, {
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
      self.setState(state => ({
        autoStatus: 'Imported',
        blockSubmit: false
      }));
    }).catch(function(error) {
      console.log(error.message);
      self.setState(state => ({
        autoStatus: 'Import',
        blockSubmit: false
      }));
    });
  }

  async downloadMdiCsv() {
    const data = new Blob([this.state.mdiCsvFile], {type: 'text/csv'});
    const href = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = href;
    link.download = "mdiCsv.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  render() {
      const { csvLoaded, csvSelectFields, csvMaps, csvData, submitStatus, autoStatus, blockSubmit, mdiCsvFile } = this.state;
      const columns: ColDef[] = [
        { field: 'col1', headerName: 'MDI Field', width: 150, sortable: false },
        { field: 'col2', headerName: 'Field Description', width: 300, sortable: false, renderCell: (params) => (
          <div style={{whiteSpace: 'normal', overflowWrap: 'break-word'}}>
            <p style={{lineHeight: '20px'}}>{params.value.desc}</p>
          </div>
        ) },
        { field: 'col3', headerName: 'Select CSV Field', width: 300, sortable: false, renderCell: (params) => (
          <strong>
            <FormControl key={'form-control' + params.row.col1.toString()} className={formStyles.formControl} style={{minWidth: 120}}>
              <InputLabel id={'input-label' + params.row.col1.toString()} key={'input-label' + params.row.col1.toString()}>{params.row.col1}</InputLabel>
              <Select
                labelId={'input-label' + params.row.col1.toString()}
                onChange={this.handleChange(params)}
                value={this.state.csvMaps[params.rowIndex]}
                key={'select-' + params.row.col1.toString()}
                id={'select-id-' + params.row.col1.toString()}>
                {(this.state.csvSelectFields)}
              </Select>
            </FormControl>
          </strong>
        )}
      ];
      return(
        <div className='page csv-submission'>
          <div className='i1'>
            <div className='i1-a'>
              <div className='i1-aa'>
                <ol>
                  <li>Click 'Choose File' button and select local CSV file</li>
                  <li>Once you have chosen your file, the Raven MDI CSV mapping interface will be shown.</li>
                  <li>The Raven Dashboard will provide three columns containing the Raven MDI CSV Field name, a description of the intent of the field, and then a drop down box containing all potential fields in the user submitted CSV.</li>
                  <li>Once you have completed your mapping, pressing the "Submit" button at the bottom of the page will attempt to send your CSV to the Raven Dashboard's backend which handles this part of the process, wherein the newly created Raven MDI CSV file will be automatically passed to the Raven Mapper API and posted to the FHIR Server. </li>
                  <li>If successful, the "Submit" button will change text to say "Submitted" and a new option to "Download MDI" will appear. The "Download MDI" button allows you to download and store the Raven MDI CSV version of your data for reference and to afford the user the opportunity to review data integrity. Your case data should now be viewable using the "Browse Cases" button in the top left corner of the page, next to where the "Submit CSV" button was previously.</li>
                </ol>
                  <CSVReader
                    className='button is-small is-outlined is-primary'
                    onFileLoaded={this.convertToMdi}
                    parserOptions={papaparseOptions}>
                    Upload CSV
                  </CSVReader>
              </div>
            </div>
          </div>
          <div className='i2'>
            <div className='i2-a'>
              <div className='i2-aa' style={{ height: 600, marginTop: 8}} >
                {(this.state.csvLoaded) ? <DataGrid rows={rows} columns={columns}
                  disableColumnMenu={true}
                  hideFooterPagination={true}
                  hideFooterRowCount={true}
                  className={{
                    root: useStyles.root,
                    row: useStyles.row,
                    cell: useStyles.cell,
                    window: useStyles.window,
                    viewport: useStyles.viewport
                  }}/> : null}
              </div>
            </div>
          </div>
          <div className='i3'>
            <div className='i3-a'>
              <div className='i3-aa' style={{marginTop: 8}}>
                <div className="field is-grouped">
                  <p className='control'>
                    {(this.state.csvLoaded) ? <button className={`button is-small is-outlined is-primary`}
                      disabled={this.state.blockSubmit}
                      onClick={() => this.submitPatient()}>{this.state.submitStatus}</button> : null}
                  </p>
                  <p className='control'>
                    {(this.state.csvLoaded) ? <button className={`button is-small is-outlined is-primary`}
                      disabled={this.state.blockSubmit || true}
                      onClick={() => this.autoSubmit()}>{this.state.autoStatus}</button> : null}
                  </p>
                  <p className='control'>
                    {(this.state.mdiCsvFile.length > 0) ? <button className={`button is-small is-outlined is-primary`}
                      disabled={true}
                      onClick={() => this.downloadMdiCsv()}>Download MDI</button> : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
