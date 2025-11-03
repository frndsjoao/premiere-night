import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import watchlistSlice from './slice/watchlist'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const IGNORE_WARNINGS = [
  'persist/PERSIST',
  'persist/REHYDRATE',
  'persist/PAUSE',
  'persist/FLUSH',
  'persist/PURGE',
  'persist/REGISTER',
]

const rootReducer = combineReducers({ watchlist: watchlistSlice.reducer })
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['watchlist'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: IGNORE_WARNINGS,
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
