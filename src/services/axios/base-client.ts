import axios, { AxiosInstance } from 'axios';

import { handleResponse, handleError } from 'utils/http';
import { ConfigClient } from 'configs';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(configClient: ConfigClient) {
    this.instance = axios.create({
      baseURL: configClient.API_SERVER,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(handleResponse, handleError);
  };
}
