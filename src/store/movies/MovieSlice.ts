import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
const apikey:string = '717567e8723fe13b0ea61ab7a37f74ec'; 
import { AxiosApi } from '../../api/api';

// Define a type for the slice state
interface CounterState {
  value: number
  image:string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  image:'https://image.tmdb.org/t/p/original'
}

export const movieSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   contador:(state) =>{

   }  
  },
})

export const {contador} = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default movieSlice.reducer