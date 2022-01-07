import {createStore, compose, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {reducer} from '../reducers/reducer';
import {themeReducer} from '../reducers/themeReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isDarkMode'],
};

const rootReducer = combineReducers({
  cardData: reducer,
  isDarkMode: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, composeEnhancers);

export const persistor = persistStore(store);

export default store;
