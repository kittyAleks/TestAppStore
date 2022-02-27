import { combineReducers, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const myPersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(myPersistReducer);

export const persistor = persistStore(store);
export default store;
