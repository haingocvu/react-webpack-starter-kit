import { useInjectReducer } from 'utils/redux-injectors';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: () => ({}),
});

export const useAppApi = () => {
  useInjectReducer({
    key: appApi.reducerPath,
    reducer: appApi.reducer,
  });
};
