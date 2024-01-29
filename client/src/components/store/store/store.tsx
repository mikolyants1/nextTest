import { bindActionCreators, combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {Persistor, persistReducer,persistStore,WebStorage} from 'redux-persist'
import slice, { actions } from "../slice/slice"
import api from "../api/api"
import { IStore, useAppDispatch } from "@/components/types/types"

interface Config {
    key:string,
    storage:WebStorage
};

const config:Config = {
    key:"postTest",
    storage,
}

const combine = combineReducers({
    posts:slice,
    [api.reducerPath]:api.reducer
}) 

const persist = persistReducer(config,combine);

export const store = configureStore({
    reducer:persist,
    middleware:(get:any)=>get().concat(api.middleware)
})
export const useAction = () => {
  return bindActionCreators(actions,useAppDispatch())
}

export const getName = ({posts}:IStore)=> posts.name;

export const getId = ({posts}:IStore)=> posts.id;

export const hashStore:Persistor = persistStore(store);
