import { createStore, applyMiddleware,  compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import contribuyenteReducer from './reducers/clientes'; 
import authReducer from './reducers/auth';
import indicadores from './reducers/indicadores';
import notificaciones from './reducers/notificaciones';
import vencimientos from './reducers/vencimientos';
 

const rootReducer = combineReducers({
  contribuyentes : contribuyenteReducer, 
  auth : authReducer,
  indicadores : indicadores,
  notificaciones : notificaciones,
  vencimientos : vencimientos
});

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['tempCliente']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);