"use client"

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { hashStore, store } from "../store/store/store";
import { PersistGate } from "redux-persist/integration/react";


interface props {
    children:ReactNode
}

function ReduxLayout({children}:props){
   return (
     <Provider store={store}>
       <PersistGate persistor={hashStore}>
         {children}
       </PersistGate>
     </Provider>
   )
}

export default ReduxLayout