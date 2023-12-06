import axios from "axios";
import { get, omit } from "lodash";


const baseUrl = process.env.REACT_APP_BASE_URL;

const getAuthToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

export const getErrorMessage = (error) => {
  return get(error, "response.data.message");
};

export const getSuccessMessage = (response) => {
  return get(response, "data.message");
};

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    if (!config.params?.withoutAuth) {
      //@ts-ignore
      config.headers.authorization = "token " + getAuthToken();
    }

    config.params = omit(config.params, "withoutAuth");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
