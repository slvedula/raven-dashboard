import axios from 'axios';

export default axios.create({
  baseURL: `${window._env_.FHIR_SERVER_URL}/`,
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: 'client',
    password: 'secret'
  }
});
