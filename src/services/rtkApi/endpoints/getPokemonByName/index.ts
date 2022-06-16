import { appApi } from 'services/rtkApi';
import { Pokemon } from 'services/rtkApi/types';

const extendedApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      getPokemonByName: builder.query<Pokemon, string>({
        query: name => `/pokemon/${name}`,
      }),
    };
  },
  overrideExisting: false,
});

export const { useGetPokemonByNameQuery } = extendedApi;
