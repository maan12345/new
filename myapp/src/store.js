import {configureStore} from '@reduxjs/toolkit'
import sideslice from './sideslice.js'
import searchslice from './searchslice.js'
import lislice from './lislice.js'
const store=configureStore({
      reducer:{
        side:sideslice,
        search:searchslice,
        lichat:lislice,
      }
})
export default store