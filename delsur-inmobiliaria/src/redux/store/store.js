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
    api: 'http://localhost:8000/api',
    apiFile : 'http://localhost:8000/archivos',
    apiArchivos : 'http://localhost:8000/archivos',
    login_time: 0,
    casa: null,
  },
  reducers: {
    /*incremented: state => {
      state.value += 1
    }*/
    setAuth(state, value) {
        state.token = value.payload.authorisation;
        state.user = value.payload.user;
    },

    setLoginTime(state, value){
      state.login_time = value.payload;
    },

    setCasa(state, value) {
      state.casa = value.payload;
    }
  }
})


const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const { setAuth, setLoginTime, setCasa } = authSlice.actions
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })

// Can still subscribe to the store
store.subscribe(() => {})
export const persistor = persistStore(store)

