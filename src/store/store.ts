import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import ProductsReducer from './Products/Products.reducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, ProductsReducer);

const store = configureStore({
  // define reducers
  reducer: {
    products: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export {store , persistor};