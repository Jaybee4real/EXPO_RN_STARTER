import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: "cudium",
    version: 0,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    blacklist: []
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
