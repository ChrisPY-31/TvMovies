import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: number
  image:string
  api_Key:string,
  id:number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  image:'https://image.tmdb.org/t/p/original',
  api_Key:'717567e8723fe13b0ea61ab7a37f74ec',
  id:0
}

export const movieSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   getId:(state , action:PayloadAction<number>) =>{
    state.id = action.payload
   }  
  },
})

export const {getId} = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default movieSlice.reducer