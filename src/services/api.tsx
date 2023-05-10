import axios from 'axios';

const apiServer = axios.create({
  baseURL: 'http://192.168.0.182:3001/api',
});

export default apiServer;
