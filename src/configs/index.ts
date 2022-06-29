const env: string = process.env.NODE_ENV;
const API_URL = process.env.API_URL;
export interface ConfigClient {
  API_SERVER: string;
}

export const Config: ConfigClient = {
  API_SERVER: API_URL,
};

export default env;
