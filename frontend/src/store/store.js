import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = createStore(persistedReducer, applyMiddleware(thunk, logger));

export const persistedStore = persistStore(configureStore);