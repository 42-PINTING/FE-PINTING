import axios, { AxiosError } from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}`;
const instance = axios.create({ baseURL });

// TODO : 추후 server axios instance와 server instance를 분리해야함
instance.interceptors.request.use(
  function setConfig(config) {
    config.withCredentials = true;

    return config;
  },
  function getError(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function getResponse(response) {
    return response;
  },
  function getError(error) {
    return Promise.reject(error);
  }
);

function isAxiosError<ErrorPayload>(
  error: unknown
): error is AxiosError<ErrorPayload> {
  return axios.isAxiosError(error);
}

export { instance, isAxiosError };
