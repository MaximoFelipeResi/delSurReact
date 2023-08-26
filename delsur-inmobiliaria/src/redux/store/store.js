import { createSlice, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
 

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    api: 'http://localhost:8000/api'
  },
  reducers: {
    /*incremented: state => {
      state.value += 1
    }*/
    setAuth(state, value) {
        state.token = value.payload.authorisation;
        state.user = value.payload.user;
    }
  }
})


const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const { setAuth } = authSlice.actions
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })

// Can still subscribe to the store
store.subscribe(() => {})
export const persistor = persistStore(store)

