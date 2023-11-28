import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import axios from "axios";

const persistConfig = {
  key: "root",
  storage,
};

/*export const getPropiedades = (state, value) {
  return new Promise((resolve) => {
    const data = value.payload;
    axios.post(data.endpoint, {page: state.propiedades_page}).then((response) => {
      
      state.propiedades = response.data;
      state.total_pages_propiedades = response?.data?.total;
      //console.log(state.total_pages_propiedades);
      //console.log("PROPIEDADES: ", state.propiedades.data);
    });
  });
},

*/

export const getPropiedades = createAsyncThunk(
  "auth/getPropiedades",
  async (value, { getState }) => {
    const data = value;
    getState().propiedades = [];
    //const params = value?.params;
    //console.log("CALLED EXTRA REDUCER");

    const response = await axios.post(data.endpoint, {
      page: getState().propiedades_page,
      categoria: parseInt(getState().tipo_propiedad),
      operacion: parseInt(getState().tipo_operacion),
      busqueda: getState().busqueda_propiedad
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    //api: "http://localhost:8000/api",
    //apiFile: "http://localhost:8000/archivos",
    //apiArchivos: "http://localhost:8000/archivos",

    api: "https://backend.inmobiliaria-delsur.com.ar/api",


    login_time: 0,
    casa: null,

    propiedades: [],
    propiedades_page: 0,
    propiedades_destacadas: [],
    propiedades_destacadas_page: 0,

    total_pages_propiedades: 0,

    tipo_propiedad: 0,
    tipo_operacion: 0,
    busqueda_propiedad: "",
  },
  reducers: {
    /*incremented: state => {
      state.value += 1
    }*/
    setUrls(state, value) {
      state.api = value.payload.api;
      state.apiFile = value.payload.apiFile;
      state.apiArchivos = value.payload.apiFile;
    },

    setAuth(state, value) {
      state.token = value.payload.authorisation;
      state.user = value.payload.user;
    },

    setLoginTime(state, value) {
      state.login_time = value.payload;
    },

    setCasa(state, value) {
      state.casa = value.payload;
    },

    /*
    getPropiedades (state, value) {
      return new Promise((resolve) => {
        const data = value.payload;
        axios.post(data.endpoint, {page: state.propiedades_page}).then((response) => {
          
          state.propiedades = response.data;
          state.total_pages_propiedades = response?.data?.total;
        });
      });
    },
    */

    getPropiedadesDestacadas(state, value) {
      
      return new Promise((resolve) => {
        const data = value.payload;
        axios
          .post(data.endpoint, { page: state.propiedades_destacadas_page })
          .then((response) => {
            state.propiedades_destacadas = response.data;
          });
      });
    },

    increasePage(state, value) {
      // TODO: COMPROBAR QUE NO SE SALGA DE LOS LIMITES
      const data = value.payload;
      if (state[data.target] >= state[data.target_b]) {
        return
      };

      state[data.target]++;
      
      // const { dispatch, getState } = store;
      // dispatch(getPropiedades())
    },

    decreasePage(state, value) {
      // TODO: COMPROBAR QUE NO SE SALGA DE LOS LIMITES

      const data = value.payload;
      if (state[data.target] === 1) return;
      state[data.target]--;

      // const { dispatch, getState } = store;
      // dispatch(getPropiedades())
    },

    restartPropiedadesPage(state) {
      state.propiedades_page = 1;
    },

    setTipoPropiedadStore(state, value) {
      state.tipo_propiedad = value.payload;
    },

    setTipoOperacionStore(state, value) {
      state.tipo_operacion = value.payload;
    },

    setBusquedaPropiedad(state, value) {
      state.busqueda_propiedad = value.payload;
    },

    /*
    setPropiedades(state, value) {
        state.propiedades = value.payload;
    },

    setPropiedadesDestacadas(state, value) {
      state.propiedades_destacadas = value.payload;
    },
    */
  },

  extraReducers: (builder) => {
    builder.addCase(getPropiedades.fulfilled, (state, action) => {
      state.propiedades = [];

      state.propiedades = action.payload;
      state.total_pages_propiedades = action.payload?.last_page;
    });
  },
});

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const {
  setAuth,
  setLoginTime,
  setCasa,
  //getPropiedades,
  getPropiedadesDestacadas,
  increasePage,
  decreasePage,
  restartPropiedadesPage,
  setTipoOperacionStore,
  setTipoPropiedadStore,
  setBusquedaPropiedad,
  setUrls
} = authSlice.actions;
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// Can still subscribe to the store
store.subscribe(() => {});
export const persistor = persistStore(store);
