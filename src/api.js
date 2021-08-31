import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_FHIR_SERVER_URL}/`,
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'client',
    password: 'secret'
  }
});
