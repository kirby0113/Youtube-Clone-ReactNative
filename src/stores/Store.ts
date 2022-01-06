import {createStore, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {reducer} from '../reducers/reducer';
import {themeReducer} from '../reducers/themeReducer';

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

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
