// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const initialState = {
  slides: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addSlide: (state, action) => {
      if (state.slides.length < 4) {
        state.slides.push(action.payload);
      }
    },
    reFrame(state){
      state.slides=[];
    },
  },
});

export const { addSlide,reFrame } = dataSlice.actions;


const persistConfig = {
  key: 'root', 
  storage,
};

const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);

const store = configureStore({
  reducer: {
    data: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
