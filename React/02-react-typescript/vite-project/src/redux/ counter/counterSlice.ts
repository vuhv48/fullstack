import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CounterState {
  value: number
  name: string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  name: 'Hagen'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    }
  }
})

export const { increment} = counterSlice.actions

export default counterSlice.reducer