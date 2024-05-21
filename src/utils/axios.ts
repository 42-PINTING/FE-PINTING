import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

const baseURL = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}`;

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  function setConfig(config) {
    const pintingAccessToken = new Cookies().get('pintingAccessToken')?.value;

    if (config.headers) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `${pintingAccessToken}`;
    }

    config.withCredentials = true;

    return config;
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
