const env: string = process.env.NODE_ENV;

export const envNameConfig = {
  development: 'development',
  production: 'production',
};

export interface ConfigClient {
  API_SERVER: string;
}

const listConfigs = {
  [envNameConfig.development]: {
    API_SERVER: '/DesktopModules',
  },
  [envNameConfig.production]: {
    API_SERVER: '/DesktopModules',
  },
};

export const Config: ConfigClient = listConfigs[env];
export default env;
