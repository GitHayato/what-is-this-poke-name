import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

type InitialStateType = {
  stockIds: string[]
  correctIds: string[]
  incorrectIds: string[]
}

const initialState: InitialStateType = {
  stockIds: [],
  correctIds: [],
  incorrectIds: [],
}

export const stockIdSlice = createSlice({
  name: 'stockId',
  initialState,
  reducers: {
    pokemonId: (state, action: PayloadAction<string>) => {
      state.stockIds.push(action.payload)
    },
    correctAnswer: (state, action: PayloadAction<string>) => {
      state.correctIds.push(action.payload)
    },
    incorrectAnswer: (state, action: PayloadAction<string>) => {
      state.incorrectIds.push(action.payload)
    },
  },
})

export const { pokemonId, correctAnswer, incorrectAnswer } = stockIdSlice.actions

export const selectStockIds = (state: RootState) => state.stockIds.stockIds
export const selectCorrectIds = (state: RootState) => state.stockIds.correctIds
export const selectIncorrectIds = (state: RootState) => state.stockIds.incorrectIds

export default stockIdSlice.reducer