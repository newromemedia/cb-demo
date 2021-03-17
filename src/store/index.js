import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { mainReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

// DOUBLE CHECK THIS

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
export const persistor = persistStore(store)

// export const store = createStore(mainReducer, applyMiddleware(thunk, logger));

export {
  changePathView
} from './actions'