import queryString from 'query-string';
import axios from "axios";
import { API_URL} from "../constants";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});


// axiosClient.interceptors.request.use((config) => {
//   // Handle token here ...
//   const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// })

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    if (response.data.status === 'ERROR') {
      throw response.data;
    }
    return response.data;
  }
  return response;
}, (error) => {
  // Handle errors
  if (error.data) {
    return error.data;
  }
  throw error;
});
export default axiosClient;
