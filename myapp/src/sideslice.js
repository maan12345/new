import {createSlice} from '@reduxjs/toolkit'
const temp2=createSlice({
    name:'sideslice',
    initialState:{
        value:false,
    },
    reducers:{
       changeside:function(state,action){
        console.log(state.value)
        state.value=!state.value
       },
       closeside:function(state,action){
        console.log(state.value)
        state.value=true
       }
    }
})
export const{changeside,closeside}=temp2.actions
export default temp2.reducer