import {createSlice} from '@reduxjs/toolkit'
const searchslice=createSlice({
    name:'search',
    initialState:{
        search:{
    
         }
    },
    reducers:{
         addsear:function(state,action){
            state.search=Object.assign(state.search,action.payload)
         }
    }
})
export const{addsear}=searchslice.actions
export default searchslice.reducer