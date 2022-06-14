import { HttpClient } from './base-client';
import { handleRequest, handleError } from 'utils/http';
import { Config } from 'configs';

class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super(Config);
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(handleRequest, handleError);
  };

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }
}

export default MainApi.getInstance();
