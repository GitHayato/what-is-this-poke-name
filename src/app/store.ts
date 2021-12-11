import { configureStore } from '@reduxjs/toolkit'
import { stockIdSlice } from './slice/stockIdSlice'
import { pokeApi } from './queries/pokeApi'

export const store = configureStore({
  reducer: {
    stockIds: stockIdSlice.reducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch