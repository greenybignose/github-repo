import { configureStore } from '@reduxjs/toolkit';
import reducerch from './reducerch'


export default configureStore({
     reducer: {
         reducernya: reducerch,
},
})



