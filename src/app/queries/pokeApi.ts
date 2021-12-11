import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PokemonType } from '../../types/pokemon/:id'
import { POKE_API_URL } from '../../utils/endpoints'

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: POKE_API_URL }),
  endpoints: builder => ({
    getPokemonById: builder.query<PokemonType, string>({
      query: id => `/${id}`,
    })
  })
})

export const { useGetPokemonByIdQuery } = pokeApi