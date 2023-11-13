import { AnyAction, Reducer, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { todoReducer } from './todo/todoSlice';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer) as Reducer<
  {
    user: { name: string; email: string };
    accessToken: string;
    isLoggedIn: boolean;
    isRefreshing: boolean;
  } & PersistPartial,
  AnyAction
>;

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: persistedAuthReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
