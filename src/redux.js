import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';

export const setUserCredentials = (user) =>{
    return {
        type:'setUser',
        user,
    }
}
export const clearStore= () =>{
    return {
        type:'clearStore'

    }
}
const persistConfig = {
    key: 'root', // You can customize this key
    storage,
  };

   export const userReducer = (state=null, action)=>{
            switch(action.type){
                case 'setUser':
                    return {
                        ...state,
                        userCredentials:action.user
                    };
                    case 'clearStore':
                        return {
                            state:undefined,
                            userCredentials:undefined
                        }
                    default: return state;
            }

        }
        const persistedReducer = persistReducer(persistConfig, userReducer);



const store= configureStore({reducer:{user:persistedReducer}});
export default store;

export const persistor = persistStore(store);
