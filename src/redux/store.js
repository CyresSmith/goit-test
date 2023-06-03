import { configureStore } from '@reduxjs/toolkit';

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

import storage from 'redux-persist/lib/storage';

import { followings } from './followingsSlice';

const followingsPersistConfig = {
  key: 'followings',
  storage,
  whitelist: ['followings'],
};

const followingsPersistedReducer = persistReducer(
  followingsPersistConfig,
  followings
);

const store = configureStore({
  reducer: {
    followings: followingsPersistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export default store;
export const persistor = persistStore(store);
