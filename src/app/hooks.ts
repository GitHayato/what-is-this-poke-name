import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { pokeApi } from "./queries/pokeApi"
import { AppDispatch, RootState } from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useGetPokemonByIdQuery = pokeApi.endpoints.getPokemonById.useQuery