import { createSlice } from '@reduxjs/toolkit'

export const reducerch = createSlice({
       name: 'reducertest',
       initialState: [],
    
              reducers: {
          fillinnow(state, action){
          console.log(action.payload);
               state.push(action.payload);
                   console.log(state[0]);
        },
},
})

export const {fillinnow} = reducerch.actions
export default reducerch.reducer




