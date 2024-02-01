import { initial, pay } from "@/components/types/types";
import {createSlice} from '@reduxjs/toolkit'

const initialState:initial = {
    name:"",
    id:"",
    token:""
}

const slice = createSlice({
    name:"nextPosts",
    initialState,
    reducers:{
      setName:(state:initial,action:pay<string>):void=>{
        state.name = action.payload;
      },
      setId:(state:initial,action:pay<string>):void=>{
        state.id = action.payload;
      },
      setToken:(state:initial,action:pay<string>):void=>{
        state.token = action.payload;
      }
    }
});

export const actions = slice.actions;
export default slice.reducer