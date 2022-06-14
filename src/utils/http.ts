import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const handleRequest = (config: AxiosRequestConfig) => {
  config.headers['Authorization'] = 'Bearer ...';

  return config;
};

export const handleResponse = ({ data }: AxiosResponse) => data;

export const handleError = (error: any) => Promise.reject(error);
