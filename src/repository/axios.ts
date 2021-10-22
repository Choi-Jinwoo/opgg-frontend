import axios from 'axios';

const OPGG_API_URL = 'https://codingtest.op.gg/api';

const axiosInstance = axios.create({
  baseURL: OPGG_API_URL,
});

export default axiosInstance;
