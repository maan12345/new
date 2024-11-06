import {createSlice} from '@reduxjs/toolkit'
const lislice=createSlice({
    name:'lislice',
    initialState:{
        state:[],
    },
    reducers:{
        addli:function(state,action){
           state.state.unshift(action.payload)
           if(state.state.length>120){
            state.state.pop()
           }
        },
        removeli:function(state,action){
            
        }
    }
})
export const{addli,removeli}=lislice.actions
export default lislice.reducer